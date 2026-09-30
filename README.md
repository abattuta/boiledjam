# 삶은잼 (Boiled Jam)

https://boiledjam.pages.dev

교실에서 쓰려고 만든 웹앱과 랩을 모아두는 허브 사이트.

---

## 파일 구조

```
index.html   화면 전체(디자인 + 동작). 문구·여백·색을 여기서 고칩니다.
works.js     작업물 목록. 앱을 추가하거나 설명을 바꿀 때 여기만 고칩니다.
thumbs/      타일 썸네일 이미지.
```

평소 손대는 건 대부분 `works.js` 하나입니다.

---

## 고치고 올리는 순서 (VS Code)

1. **시작 전에 Sync(↻)를 먼저 누른다** — 다른 컴퓨터에서 한 작업을 받아옵니다.
2. 파일을 고치고 저장 (`Cmd/Ctrl + S`)
3. 왼쪽 Source Control(가지 모양) → 무엇을 고쳤는지 한 줄 쓰기 → **Commit**
4. **Sync Changes** 버튼
5. 1분 안에 사이트에 반영됨

1번을 건너뛰면 충돌이 납니다. 세 대를 오가므로 습관으로 만들 것.

---

## 작업물 추가하기

`works.js`의 블록 하나를 복사해서 붙이고 값만 바꿉니다.

```js
{
  slug: "영문-고유이름",      // 클릭 수를 세는 열쇠. 한 번 정하면 바꾸지 않기
  kind: "app",               // app | music | video | post | research
  title: "제목",
  desc: "한 줄 설명",
  url: "https://...",        // '열기' 버튼이 가는 곳
  story: "",                 // 만든 이야기 글 주소 (없으면 빈칸)
  img: "/thumbs/이름.png",    // 썸네일 (없으면 빈칸 → color 색 블록)
  color: "#1f6f4f",
  pin: true,                 // 항상 맨 앞에 두려면
},
```

**따옴표 안에는 값만 적습니다.** `img: "img: "/thumbs/..."` 처럼 쓰면 파일 전체가 깨집니다.

---

## 색 바꾸기

`index.html` 맨 위 `:root`에서 두 줄만 고칩니다.

| | `--jam` | `--on-jam` |
|---|---|---|
| 쨍한 잼 | `#D81B45` | `#ffffff` |
| 파스텔 | `#FCDCE3` | `#8A1836` |
| 흑백 | `#0a0a0a` | `#ffffff` |

---

## 미리보기

파일을 더블클릭하지 말고, VS Code에서 `index.html` 오른쪽 클릭 → **Show Preview**.
더블클릭하면 `/thumbs/...` 경로가 깨져 썸네일이 안 보입니다.

---

## 배포

GitHub에 올라가면 Cloudflare Pages가 자동으로 배포합니다. 따로 누를 버튼 없음.
