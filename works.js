/* ============================================================
   작업물 목록 — 평소에는 이 파일만 고치면 됩니다.
   새 작업물이 생기면 아래 블록 하나를 복사해서 붙여 넣으세요.

   slug  : 영문 고유 이름. 클릭 수를 세는 열쇠라 한 번 정하면 바꾸지 마세요.
   kind  : app | music | video | post | research
   title : 제목
   desc  : 한 줄 설명
   url   : 열기 버튼이 가는 곳
   story : '만든 이야기' 글 주소 (없으면 "")
   img   : 썸네일 경로. 따옴표 안에는 경로만 적습니다.
           올바른 예)  img: "/thumbs/bookfly.png",
           비울 때)    img: "",
   color : 썸네일 없을 때 쓸 색
   pin   : true면 클릭 수와 상관없이 항상 맨 앞 (새로 만든 것 띄울 때)
   ============================================================ */

window.WORKS = [
  {
    slug: "bookfly",
    kind: "app",
    title: "책나비 교실",
    desc: "완독한 책이 나비가 되어 반 전체 나무에 모입니다.",
    url: "https://bookfly.pages.dev/",
    story: "",
    img: "/thumbs/bookfly.png",
    color: "#1f6f4f",
    pin: true,
  },
  {
    slug: "gugumonster",
    kind: "app",
    title: "구구몬스터",
    desc: "구구단을 먹고 자라는 다마고치.",
    url: "https://gugumonster.pages.dev/",
    story: "",
    img: "",
    color: "#d94726",
  },
  {
    slug: "seatswap",
    kind: "app",
    title: "자리바꾸기 타워",
    desc: "자리 바꾸는 날을 하나의 게임으로.",
    url: "https://seatswaptower.pages.dev/",
    story: "",
    img: "",
    color: "#2b47d6",
  },
  {
    slug: "stumon",
    kind: "app",
    title: "스튜몬",
    desc: "교과 퀴즈로 싸우는 학교 RPG.",
    url: "/tools/stumon/",
    story: "",
    img: "",
    color: "#c99512",
  },
  {
    slug: "fraction-rap",
    kind: "video",
    title: "분수, 랩 한 곡으로",
    desc: "수학 개념을 한 곡에 압축합니다.",
    url: "https://www.youtube.com/",
    story: "",
    img: "",
    color: "#111111",
  },
  {
    slug: "soundcloud",
    kind: "music",
    title: "가사와 비트",
    desc: "수업 밖에서 쓴 곡들.",
    url: "https://soundcloud.com/",
    story: "",
    img: "",
    color: "#6b2fd6",
  },
  {
    slug: "post-vibe-coding",
    kind: "post",
    title: "교사가 바이브코딩을 시작할 때",
    desc: "필요한 것 세 가지.",
    url: "/blog/2026/vibe-coding-teacher-setup/",
    story: "",
    img: "",
    color: "#3b3b3b",
  },
  {
    slug: "post-curriculum-ai",
    kind: "post",
    title: "교육과정 문서를 AI로 만들면",
    desc: "한 학기 동안의 기록.",
    url: "/blog/2026/curriculum-ai/",
    story: "",
    img: "",
    color: "#3b3b3b",
  },
  {
    slug: "research-hiphop",
    kind: "research",
    title: "힙합으로 하는 수업",
    desc: "석사 논문과 그 이후의 연구.",
    url: "/research/",
    story: "",
    img: "",
    color: "#1a1a1a",
  },
];

/* ============================================================
   클릭 수 저장소 (Supabase). 아직 안 만들었으면 빈 문자열로 두세요.
   빈 문자열이면 위에 적은 순서 그대로 보입니다.
   ============================================================ */
window.STATS = {
  url: "",   // 예: "https://xxxxx.supabase.co"
  key: "",   // anon public key (공개돼도 되는 키입니다)
};

/* 1등 타일을 두 칸 크기로 키우려면 true.
   전부 같은 크기로 두려면 false. */
window.FEATURE_TOP = false;
