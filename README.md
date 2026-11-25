# 100대 사찰 순례 가이드

100대 명산 가이드(pugupugu/mountains)와 같은 구조로 만든 정적 사이트입니다. 서버 없이 GitHub Pages로 배포하고, 기록과 사진은 Supabase에 저장합니다.

## 파일
| 파일 | 역할 |
|---|---|
| `index.html` | 화면과 동작 전체 (지도·목록·상세·사진·Supabase 연동) |
| `temples.js` | 사찰 127곳 데이터: 기본 100곳 + 추가 추천 27곳(101번~, `extra: true`) |
| `images.js` | 사찰별 기본 사진 (Wikimedia Commons). 처음에는 비어 있음 |
| `tools/fetch_images.py` | `images.js` 를 자동으로 채우는 스크립트 |
| `supabase/schema.sql` | Supabase 테이블·버킷·정책 (이미 적용됨) |

## 배포 (GitHub Pages)
1. 이 폴더의 파일을 저장소 루트에 올립니다 (폴더 구조 그대로).
2. Settings → Pages → Branch `main` / `(root)` → Save.
3. 주소가 정해지면 `index.html` 의 `og:url`, `og:image` 주석을 풀어 본인 주소로 고치면 카카오톡 미리보기에 반영됩니다.

## 기본 사진 채우기
지도 오른쪽 카드의 사진은 두 종류입니다.
- **기본 사진**: `images.js` 에 넣은 Wikimedia Commons 사진 (작가·라이선스 자동 표기)
- **내 사진**: 방문자가 ‘사진 추가’로 올린 사진 (사찰당 최대 5장, Supabase 저장)

기본 사진은 인터넷이 되는 PC에서 한 번 실행하면 됩니다.

    python3 tools/fetch_images.py          # 127곳 전체
    python3 tools/fetch_images.py 73 91    # 번호 지정 (불국사, 통도사)

검색 결과를 기계적으로 걸러낸 것이므로(자유 라이선스, 파일명·설명에 사찰 이름 포함) 오매칭이 있을 수 있습니다. 실행 후 사이트에서 훑어보고 엉뚱한 사진은 `images.js` 에서 지우세요.

## Supabase
- 프로젝트: `hriogfnsqbnvaiixjmko` (doc-prompt) — 100대 명산과 같은 프로젝트입니다.
- 테이블 `tp100_done`(완료 표시), `tp100_photos`(사진 위치), 공개 버킷 `tp100-photos`(파일당 5MB, jpeg·png·webp).
- `index.html` 의 키는 공개용(publishable) 키라 소스에 있어도 됩니다. 단, 100대 명산과 같은 방식이라 **로그인 없이 누구나 완료 표시·사진 올리기·삭제가 가능**합니다. 공개 사이트에서 장난이나 스팸이 걱정되면 로그인(사용자별 기록)으로 바꿔야 합니다.

## 주의
- `temples.js` 의 **순서를 바꾸지 마세요.** 배열 순서(1~121)이 Supabase의 사찰 번호입니다. 새 사찰은 맨 뒤에 추가하세요. 번호는 300까지 허용됩니다(`schema.sql` 의 check).
- 좌표는 대략적인 위치(수 km 오차 가능)이고, 창건 연대는 사찰 연기 설화를 따랐습니다. 공개 전에 사찰 공식 자료로 확인하세요.
