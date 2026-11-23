#!/usr/bin/env python3
"""Wikimedia Commons에서 사찰별 자유 라이선스 사진을 찾아 images.js 를 만듭니다.

사용법 (인터넷 연결 필요, 외부 패키지 없음):
    python3 tools/fetch_images.py            # 전체 100곳
    python3 tools/fetch_images.py 73 91      # 번호 지정 (temples.js 순서, 1~100)

결과는 프로젝트 루트의 images.js 에 저장됩니다. 검색 결과는 기계적으로 걸러낸 것이라
오매칭이 있을 수 있으니, 만든 뒤 사이트에서 사진을 훑어보고 엉뚱한 항목은 images.js 에서 지우세요.
"""
import json, re, sys, time, html, urllib.parse, urllib.request, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
API = "https://commons.wikimedia.org/w/api.php"
UA = "temple100-guide/1.0 (personal project; contact: see repository)"
PER_TEMPLE = 4          # 사찰당 최대 사진 수
OK_LICENSE = re.compile(r"^(CC[ -]BY|CC0|Public domain|PD|GFDL|FAL)", re.I)

# temples.js 와 같은 순서의 로마자(Commons 파일명·분류에 쓰이는 표기). 검색어이자 오매칭 필터입니다.
EN = ["Bongeunsa","Jogyesa","Jingwansa","Gilsangsa","Hwagyesa","Beomeosa","Haedong Yonggungsa","Jangansa",
"Donghwasa","Pagyesa","Gatbawi","Jeondeungsa","Bomunsa","Jeongsusa","Jeungsimsa","Seongnamsa","Yongjusa",
"Silleuksa","Bongseonsa","Sujongsa","Chiljangsa","Yongmunsa Yangpyeong","Mangwolsa","Yeonjuam","Heungguksa Goyang",
"Bogwangsa Paju","Sammaksa","Woljeongsa","Sangwonsa","Sinheungsa","Naksansa","Geonbongsa","Baekdamsa","Beopheungsa",
"Jeongamsa","Cheongpyeongsa","Sutasa","Beopjusa","Guinsa","Yeongguksa","Jeongbangsa","Banyasa","Magoksa","Gapsa",
"Donghaksa","Sudeoksa","Gaesimsa","Janggoksa","Muryangsa","Gwanchoksa","Ganwolam","Geumsansa","Seonunsa","Naesosa",
"Gaeamsa","Silsangsa","Hwaamsa","Wibongsa","Maisan Tapsa","Songgwangsa","Seonamsa","Daeheungsa","Mihwangsa",
"Hwaeomsa","Cheoneunsa","Baegyangsa","Bulgapsa","Muwisa","Baengnyeonsa","Unjusa","Hyangiram","Taeansa","Bulguksa",
"Seokguram","Bunhwangsa","Girimsa","Buseoksa","Bongjeongsa","Gounsa","Jikjisa","Eunhaesa","Unmunsa","Bogyeongsa",
"Oeosa","Bulyeongsa","Daeseungsa","Bongamsa","Cheongnyangsa","Yongmunsa Yecheon","Haeinsa","Tongdosa","Ssanggyesa",
"Boriam","Pyochungsa","Okcheonsa","Gwanryongsa","Naewonsa","Daewonsa","Gwaneumsa Jeju","Yakcheonsa"]
assert len(EN) == 100, len(EN)

def norm(s):
    return re.sub(r"[^a-z0-9]", "", s.lower())

def strip_tags(s):
    return html.unescape(re.sub(r"<[^>]+>", "", s or "")).strip()

def parse(resp, key):
    """API 응답(dict) → [{title,thumb,page,author,license}]. key 는 오매칭 필터용 로마자 이름."""
    pages = (resp.get("query") or {}).get("pages") or {}
    want = norm(key.split()[0])
    out = []
    for p in sorted(pages.values(), key=lambda p: p.get("index", 0)):
        info = (p.get("imageinfo") or [{}])[0]
        meta = info.get("extmetadata") or {}
        lic = strip_tags((meta.get("LicenseShortName") or {}).get("value"))
        title = p.get("title", "")
        text = norm(title + strip_tags((meta.get("ImageDescription") or {}).get("value")))
        if not info.get("thumburl") or info.get("mime") not in ("image/jpeg", "image/png"):
            continue
        if not OK_LICENSE.match(lic):
            continue
        if want not in text:        # 파일명·설명에 사찰 이름이 없으면 오매칭으로 보고 제외
            continue
        out.append({
            "title": title.replace("File:", "", 1),
            "thumb": info["thumburl"],
            "page": info.get("descriptionurl", ""),
            "author": strip_tags((meta.get("Artist") or {}).get("value")) or "작자 미상",
            "license": lic,
        })
    return out

def search(key):
    q = {"action": "query", "format": "json", "generator": "search", "gsrsearch": key,
         "gsrnamespace": "6", "gsrlimit": "20", "prop": "imageinfo",
         "iiprop": "url|mime|extmetadata", "iiurlwidth": "960",
         "iiextmetadatafilter": "Artist|LicenseShortName|ImageDescription"}
    req = urllib.request.Request(API + "?" + urllib.parse.urlencode(q), headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.load(r)

def main(argv):
    ids = [int(a) for a in argv] or list(range(1, 101))
    path = ROOT / "images.js"
    result = {}
    if path.exists():   # 기존 결과는 보존하고 지정한 번호만 갱신
        m = re.search(r"const TEMPLE_IMAGES = (\{.*\});", path.read_text(encoding="utf-8"), re.S)
        if m:
            result = {int(k): v for k, v in json.loads(m.group(1)).items()}
    for i in ids:
        key = EN[i - 1]
        try:
            result[i] = parse(search(key), key)[:PER_TEMPLE]
        except Exception as e:
            print(f"[{i:3d}] {key}: 실패 ({e})")
            continue
        print(f"[{i:3d}] {key}: {len(result[i])}장")
        time.sleep(0.5)
    body = json.dumps({str(k): result[k] for k in sorted(result)}, ensure_ascii=False, indent=1)
    path.write_text(
        "// 사찰별 대표 사진 — Wikimedia Commons 자유 라이선스 이미지 (작가·라이선스 표기 필수)\n"
        "// 키는 사찰 번호(temples.js 배열 순서, 1~100). tools/fetch_images.py 로 생성됨 — 오매칭은 직접 지워 주세요.\n"
        f"const TEMPLE_IMAGES = {body};\n", encoding="utf-8")
    print("저장:", path)

if __name__ == "__main__":
    main(sys.argv[1:])
