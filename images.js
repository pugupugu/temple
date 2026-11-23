// 사찰별 대표 사진 — Wikimedia Commons 자유 라이선스 이미지 (작가·라이선스 표기 필수)
// 키는 사찰 번호(temples.js 배열 순서, 1~100)입니다. 비어 있어도 사이트는 정상 동작하며,
// 방문자가 ‘사진 추가’로 올린 사진이 Supabase에 저장됩니다.
// 채우는 방법: README.md 의 “기본 사진 채우기” 참고 (python3 tools/fetch_images.py)
const TEMPLE_IMAGES = {};
