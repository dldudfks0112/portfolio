const standardWork = [
  "웹 UI 퍼블리싱",
  "반응형 화면 구현",
  "목록·상세 UI 구현",
  "검색 및 인터랙션 UI",
  "팝업·레이어·탭·슬라이드 구현",
  "기획·디자인·백엔드 개발자 협업",
];

const adminWork = [
  "관리자 화면 UI 구현",
  "데이터 목록·상세 화면 구현",
  "검색·필터 인터페이스",
  "동적 DOM 및 이벤트 처리",
  "팝업·레이어·탭 UI",
  "기획·디자인·백엔드 개발자 협업",
];

const baseTech = ["HTML", "CSS", "JavaScript", "jQuery"];

// const projects = [
//   {
//     id: "gangneung-library-2026", index: "01", year: "2026",
//     title: "강릉시립도서관", type: "공공 도서관 웹서비스", period: "2026.06 — 2026.07",
//     role: "Web Publishing", kind: "개편", tech: baseTech, work: standardWork, screen: "capture",
//     url: "https://www.gnslib.or.kr/", image: "./assets/projects/gangneung.png",
//   },
//   {
//     id: "seoul-elib-2026", index: "02", year: "2026",
//     title: "서울전자도서관", type: "전자도서관 웹서비스", period: "2026.04 — 2026.07",
//     role: "Front-End · Web UI", kind: "개편", tech: baseTech,
//     work: ["전자도서관 화면 퍼블리싱", "개편 디자인 화면 반영", "반응형 화면 구현", "기획·디자인·백엔드 개발자 협업"],
//     highlights: ["최근 개편 프로젝트", "전자도서관 서비스 화면", "PC·모바일 반응형 UI"],
//     screen: "capture", url: "https://elib.seoul.go.kr/intro", image: "./assets/projects/seoul-elib.png",
//   },
//   {
//     id: "reading-money-2026", index: "03", year: "2026",
//     title: "독서머니", type: "독서 활동 웹서비스", period: "2026.01 — 2026.03",
//     role: "Web Publishing", kind: "신규 구축", tech: baseTech, work: standardWork, screen: "capture",
//   },
//   {
//     id: "dokseoro-2025", index: "04", year: "2025",
//     title: "독서로", type: "독서교육 웹서비스", period: "2025.08 — 2025.12",
//     role: "Web Publishing", kind: "개편", tech: baseTech,
//     work: ["웹 페이지 퍼블리싱", "개편 디자인 화면 반영", "반응형 화면 구성", "기획·디자인·개발자 협업"],
//     highlights: ["독서교육 서비스 화면 퍼블리싱", "개편 화면 마크업 및 스타일 구현", "PC·모바일 반응형 화면 구성"],
//     screen: "capture",
//     url: "https://read365.edunet.net/", image: "./assets/projects/dokseoro.png",
//   },
//   {
//     id: "uijeongbu-archive-2024", index: "05", year: "2024",
//     title: "의정부기록공유관·의정부도서관 아카이브", type: "지역 기록·도서관 아카이브", period: "2024.11 — 2025.07",
//     role: "Web Publishing", kind: "신규 구축", tech: baseTech,
//     work: ["웹 페이지 퍼블리싱", "신규 화면 마크업 및 스타일 구현", "반응형 화면 구성", "디자인 시안 기반 화면 구현", "기획·디자인·개발자 협업"],
//     screen: "live",
//     url: "https://www.uilib.go.kr/archive/",
//   },
//   {
//     id: "insaeng-seoga-2024", index: "06", year: "2024",
//     title: "인생서가", type: "도서 큐레이션 웹서비스", period: "2024.07 — 2024.10",
//     role: "Front-End · Web UI", kind: "개편", tech: baseTech,
//     work: ["웹 UI 퍼블리싱", "반응형 화면 구현", "목록·상세 UI 구현", "검색 및 인터랙션 UI", "팝업·레이어·탭·슬라이드 구현", "기획·디자인·백엔드 개발자 협업"],
//     highlights: ["도서 큐레이션 목록·상세 화면", "검색 및 인터랙션 UI", "팝업·레이어·탭·슬라이드 UI"],
//     screen: "capture", url: "https://eco.lifebooks.kr/main", image: "./assets/projects/insaeng-seoga.png",
//   },
//   {
//     id: "bookmate-kiosk", featuredOnly: true,
//     title: "북메이트 키오스크", type: "도서 추천 키오스크 UI", period: "2025.06 — 2025.07",
//     role: "Kiosk UI", kind: "키오스크 제작", tech: baseTech,
//     work: ["북메이트 키오스크 UI 제작", "키오스크 화면 퍼블리싱"],
//     highlights: ["키오스크 메인 화면", "키오스크 UI 작업"],
//     screen: "capture", url: "https://bookmate.eco.co.kr/main?libCode=undefined&key=undefined", image: "./assets/projects/bookmate-kiosk.png",
//   },
//   {
//     id: "gyeonggi-cyber-library-2023", index: "07", year: "2023",
//     title: "경기도사이버도서관", type: "공공 도서관 웹서비스", period: "2023.06 — 2024.06",
//     role: "Front-End", kind: "개편", tech: baseTech, work: standardWork, screen: "live",
//     url: "https://www.bookmagic.kr/bookmagic/",
//   },
//   {
//     id: "barobi-2023", index: "08", year: "2023",
//     title: "바로비", type: "웹서비스", period: "2023.03 — 2023.06",
//     role: "Front-End · Web UI", kind: "개편", tech: baseTech, work: standardWork, screen: "live",
//     url: "https://ebook-dev.barob.co.kr:6318/main",
//   },
//   {
//     id: "ansan-library-2023", index: "09", year: "2023",
//     title: "안산도서관", type: "공공 도서관 웹서비스", period: "2023.01 — 2023.03",
//     role: "Front-End", kind: "신규 구축", tech: baseTech, work: standardWork, screen: "live",
//     url: "https://ebook.ansan.go.kr/ebook/main",
//   },
//   {
//     id: "national-assembly-library-2022", index: "10", year: "2022",
//     title: "국회도서관", type: "도서관 정보서비스", period: "2022.10 — 2023.01",
//     role: "Front-End", kind: "신규 구축", tech: baseTech, work: standardWork, screen: "live",
//     url: "https://ebook.nanet.go.kr/main",
//   },
//   {
//     id: "the-book-list-2022", index: "11", year: "2022",
//     title: "더북리스트", type: "도서 큐레이션 웹서비스", period: "2022.09 — 2022.10",
//     role: "Front-End · Web UI", kind: "신규 구축", tech: baseTech, work: standardWork, screen: "live",
//     url: "https://thebooklist.kr/main",
//   },
//   {
//     id: "inje-library-2022", index: "12", year: "2022",
//     title: "인제군립도서관", type: "공공 도서관 웹서비스", period: "2022.03 — 2022.09",
//     role: "Front-End · User", kind: "신규 구축", tech: baseTech, work: standardWork, screen: "closed",
//   },
//   {
//     id: "inje-library-admin-2022", index: "13", year: "2022",
//     title: "인제군립도서관 관리자", type: "도서관 관리자 서비스", period: "2022.03 — 2022.04",
//     role: "Front-End · Admin", kind: "구축", tech: baseTech, work: adminWork, screen: "closed",
//   },
//   {
//     id: "barobi-2022", index: "14", year: "2022",
//     title: "바로비", type: "웹서비스", period: "2022.02 — 2022.03",
//     role: "Front-End · Web UI", kind: "개편", tech: baseTech, work: standardWork, screen: "live",
//     url: "https://ebook-dev.barob.co.kr:6318/main",
//   },
//   {
//     id: "lbp-admin-2022", index: "15", year: "2022",
//     title: "LBP 관리자", type: "관리자 웹서비스", period: "2022.01 — 2022.02",
//     role: "Front-End · Admin", kind: "구축", tech: baseTech, work: adminWork, screen: "closed",
//   },
//   {
//     id: "lbp-renewal-2021", index: "16", year: "2021",
//     title: "LBP", type: "웹서비스", period: "2021.11 — 2022.01",
//     role: "Front-End · Web UI", kind: "개편", tech: baseTech, work: standardWork, screen: "closed",
//   },
//   {
//     id: "national-assembly-busan-2021", index: "17", year: "2021",
//     title: "국회부산도서관", type: "도서관 정보서비스", period: "2021.10 — 2021.11",
//     role: "Front-End · Web UI", kind: "개편", tech: baseTech, work: standardWork, screen: "live",
//     url: "https://ebook-busan.nanet.go.kr/main",
//   },
//   {
//     id: "lbp-new-2021", index: "18", year: "2021",
//     title: "LBP", type: "웹서비스", period: "2021.09 — 2021.10",
//     role: "Front-End · Web UI", kind: "신규 구축", tech: baseTech, work: standardWork, screen: "closed",
//   },
//   {
//     id: "school-talks-2021", index: "19", year: "2021",
//     title: "스쿨톡스", type: "교육 웹서비스", period: "2021.08 — 2021.09",
//     role: "Front-End · Web UI", kind: "신규 구축", tech: baseTech, work: standardWork, screen: "closed",
//   },
//   {
//     id: "seoul-library-2021", index: "20", year: "2021",
//     title: "서울도서관", type: "공공 도서관 웹서비스", period: "2021.04 — 2021.07",
//     role: "Front-End · Web UI", kind: "개편", tech: baseTech, work: standardWork, screen: "closed",
//   },
// ];

const projects = [
  {
    id: "gangneung-library-2026", index: "01", year: "2026",
    title: "강릉시립도서관", type: "공공 도서관 웹서비스", period: "2026.06 — 2026.07",
    role: "Web Publishing", kind: "개편", tech: baseTech,
    work: standardWork,
    screen: "capture",
    url: "https://www.gnslib.or.kr/",
    image: "./assets/projects/gangneung.png",
  },

  {
    id: "seoul-elib-2026", index: "02", year: "2026",
    title: "서울전자도서관", type: "전자도서관 웹서비스", period: "2026.04 — 2026.07",
    role: "Front-End · Web UI", kind: "개편", tech: baseTech,

    work: [
      "전자도서관 웹 UI 퍼블리싱",
      "개편 디자인 화면 구현",
      "PC·모바일 반응형 화면 구현",
      "기획·디자인·백엔드 개발자 협업"
    ],

    highlights: [
      "전자도서관 주요 서비스 화면",
      "도서 목록·상세 화면",
      "PC·모바일 반응형 UI"
    ],

    screen: "capture",
    url: "https://elib.seoul.go.kr/intro",
    image: "./assets/projects/seoul-elib.png",
  },

  {
    id: "reading-money-2026", index: "03", year: "2026",
    title: "독서머니", type: "독서 활동 웹서비스", period: "2026.01 — 2026.03",
    role: "Web Publishing", kind: "신규 구축", tech: baseTech,
    work: standardWork,
    screen: "capture",
  },

  {
    id: "dokseoro-2025", index: "04", year: "2025",
    title: "독서로", type: "독서교육 웹서비스", period: "2025.08 — 2025.12",
    role: "Web Publishing", kind: "개편", tech: baseTech,

    work: [
      "웹 페이지 퍼블리싱",
      "개편 디자인 화면 구현",
      "PC·모바일 반응형 화면 구성",
      "기획·디자인·개발자 협업"
    ],

    highlights: [
      "독서교육 서비스 주요 화면",
      "개편 화면 마크업·스타일 구현",
      "PC·모바일 반응형 UI"
    ],

    screen: "capture",
    url: "https://read365.edunet.net/",
    image: "./assets/projects/dokseoro.png",
  },

  {
    id: "uijeongbu-archive-2024", index: "05", year: "2024",
    title: "의정부기록공유관·의정부도서관 아카이브",
    type: "지역 기록·도서관 아카이브",
    period: "2024.11 — 2025.07",
    role: "Web Publishing",
    kind: "신규 구축",
    tech: baseTech,

    work: [
      "웹 페이지 퍼블리싱",
      "신규 화면 마크업 및 스타일 구현",
      "반응형 화면 구성",
      "디자인 시안 기반 화면 구현",
      "기획·디자인·개발자 협업"
    ],

    screen: "live",
    url: "https://www.uilib.go.kr/archive/",
  },

  {
    id: "insaeng-seoga-2024", index: "06", year: "2024",
    title: "인생서가",
    type: "도서 큐레이션 웹서비스",
    period: "2024.07 — 2024.10",
    role: "Front-End · Web UI",
    kind: "개편",
    tech: baseTech,

    work: [
      "웹 UI 퍼블리싱",
      "PC·모바일 반응형 화면 구현",
      "JavaScript·jQuery 기반 UI 기능 구현",
      "기획·디자인·백엔드 개발자 협업"
    ],

    highlights: [
      "도서 큐레이션 목록·상세 화면",
      "검색 및 인터랙션 UI",
      "팝업·레이어·탭·슬라이드 UI"
    ],

    screen: "capture",
    url: "https://eco.lifebooks.kr/main",
    image: "./assets/projects/insaeng-seoga.png",
  },

  {
    id: "bookmate-kiosk",
    featuredOnly: true,
    title: "북메이트 키오스크",
    type: "도서 추천 키오스크 UI",
    period: "2025.06 — 2025.07",
    role: "Kiosk UI",
    kind: "키오스크 제작",
    tech: baseTech,

    work: [
      "북메이트 키오스크 UI 제작",
      "키오스크 화면 퍼블리싱"
    ],

    highlights: [
      "도서 추천 키오스크 화면",
      "키오스크 환경에 맞춘 UI 구성"
    ],

    screen: "capture",
    url: "https://bookmate.eco.co.kr/main?libCode=undefined&key=undefined",
    image: "./assets/projects/bookmate-kiosk.png",
  },

  {
    id: "gyeonggi-cyber-library-2023", index: "07", year: "2023",
    title: "경기도사이버도서관", type: "공공 도서관 웹서비스", period: "2023.06 — 2024.06",
    role: "Front-End", kind: "개편", tech: baseTech,
    work: standardWork,
    screen: "live",
    url: "https://www.bookmagic.kr/bookmagic/",
  },

  {
    id: "barobi-2023", index: "08", year: "2023",
    title: "바로비", type: "웹서비스", period: "2023.03 — 2023.06",
    role: "Front-End · Web UI", kind: "개편", tech: baseTech,
    work: standardWork,
    screen: "live",
    url: "https://ebook-dev.barob.co.kr:6318/main",
  },

  {
    id: "ansan-library-2023", index: "09", year: "2023",
    title: "안산도서관", type: "공공 도서관 웹서비스", period: "2023.01 — 2023.03",
    role: "Front-End", kind: "신규 구축", tech: baseTech,
    work: standardWork,
    screen: "live",
    url: "https://ebook.ansan.go.kr/ebook/main",
  },

  {
    id: "national-assembly-library-2022", index: "10", year: "2022",
    title: "국회도서관", type: "도서관 정보서비스", period: "2022.10 — 2023.01",
    role: "Front-End", kind: "신규 구축", tech: baseTech,
    work: standardWork,
    screen: "live",
    url: "https://ebook.nanet.go.kr/main",
  },

  {
    id: "the-book-list-2022", index: "11", year: "2022",
    title: "더북리스트", type: "도서 큐레이션 웹서비스", period: "2022.09 — 2022.10",
    role: "Front-End · Web UI", kind: "신규 구축", tech: baseTech,
    work: standardWork,
    screen: "live",
    url: "https://thebooklist.kr/main",
  },

  {
    id: "inje-library-2022", index: "12", year: "2022",
    title: "인제군립도서관", type: "공공 도서관 웹서비스", period: "2022.03 — 2022.09",
    role: "Front-End · User", kind: "신규 구축", tech: baseTech,
    work: standardWork,
    screen: "closed",
  },

  {
    id: "inje-library-admin-2022", index: "13", year: "2022",
    title: "인제군립도서관 관리자", type: "도서관 관리자 서비스", period: "2022.03 — 2022.04",
    role: "Front-End · Admin", kind: "구축", tech: baseTech,
    work: adminWork,
    screen: "closed",
  },

  {
    id: "barobi-2022", index: "14", year: "2022",
    title: "바로비", type: "웹서비스", period: "2022.02 — 2022.03",
    role: "Front-End · Web UI", kind: "개편", tech: baseTech,
    work: standardWork,
    screen: "live",
    url: "https://ebook-dev.barob.co.kr:6318/main",
  },

  {
    id: "lbp-admin-2022", index: "15", year: "2022",
    title: "LBP 관리자", type: "관리자 웹서비스", period: "2022.01 — 2022.02",
    role: "Front-End · Admin", kind: "구축", tech: baseTech,
    work: adminWork,
    screen: "closed",
  },

  {
    id: "lbp-renewal-2021", index: "16", year: "2021",
    title: "LBP", type: "웹서비스", period: "2021.11 — 2022.01",
    role: "Front-End · Web UI", kind: "개편", tech: baseTech,
    work: standardWork,
    screen: "closed",
  },

  {
    id: "national-assembly-busan-2021", index: "17", year: "2021",
    title: "국회부산도서관", type: "도서관 정보서비스", period: "2021.10 — 2021.11",
    role: "Front-End · Web UI", kind: "개편", tech: baseTech,
    work: standardWork,
    screen: "live",
    url: "https://ebook-busan.nanet.go.kr/main",
  },

  {
    id: "lbp-new-2021", index: "18", year: "2021",
    title: "LBP", type: "웹서비스", period: "2021.09 — 2021.10",
    role: "Front-End · Web UI", kind: "신규 구축", tech: baseTech,
    work: standardWork,
    screen: "closed",
  },

  {
    id: "school-talks-2021", index: "19", year: "2021",
    title: "스쿨톡스", type: "교육 웹서비스", period: "2021.08 — 2021.09",
    role: "Front-End · Web UI", kind: "신규 구축", tech: baseTech,
    work: standardWork,
    screen: "closed",
  },

  {
    id: "seoul-library-2021", index: "20", year: "2021",
    title: "서울도서관", type: "공공 도서관 웹서비스", period: "2021.04 — 2021.07",
    role: "Front-End · Web UI", kind: "개편", tech: baseTech,
    work: standardWork,
    screen: "closed",
  },
];

const grid = document.querySelector("[data-project-grid]");
const careerList = document.querySelector("[data-career-list]");
const careerFilter = document.querySelector("[data-career-filter]");
const dialog = document.querySelector("[data-project-dialog]");
const dialogContent = document.querySelector("[data-dialog-content]");

const techLine = (items) => items.join(" · ");

const featuredProjectIds = ["insaeng-seoga-2024", "bookmate-kiosk", "seoul-elib-2026", "dokseoro-2025"];
const featuredProjects = featuredProjectIds.map((id) => projects.find((project) => project.id === id)).filter(Boolean);

featuredProjects.forEach((project, order) => {
  const card = document.createElement("button");
  card.type = "button";
  card.className = `project-card${project.title.length > 14 ? " project-card--long" : ""}${project.image ? " project-card--has-image" : ""}`;
  card.dataset.projectId = project.id;
  card.dataset.index = String(order + 1).padStart(2, "0");
  card.setAttribute("aria-label", `${project.title} 프로젝트 상세 보기`);
  card.innerHTML = `
    ${project.image ? `<img class="project-card-image" src="${project.image}" alt="" loading="lazy" />` : ""}
    <span class="project-card-shade" aria-hidden="true"></span>
    <div class="project-top"><span>${project.role}</span><span class="project-arrow" aria-hidden="true">↗</span></div>
    <div class="project-summary">
      <h3>${project.title}</h3>
      <p class="project-type">${project.type}</p>
      <p class="project-meta">${project.kind} · ${project.period}</p>
      <p class="project-tech">${project.tech.length ? techLine(project.tech) : "사용 기술 미기재"}</p>
    </div>`;
  grid.append(card);
});

const getCareerPhase = (project) => {
  const order = Number(project.index);
  if (order <= 6) return "recent";
  if (order <= 14) return "growth";
  return "foundation";
};

const renderCareer = () => {
  careerList.innerHTML = projects.filter((project) => !project.featuredOnly).map((project) => {
    const phase = getCareerPhase(project);
    return `
    <article class="career-row" data-career-phase="${phase}"${phase === "recent" ? "" : " hidden"}>
      <span class="career-year">${project.year}</span>
      <h3>${project.title}</h3>
      <p class="career-role">${project.role} · ${project.kind}</p>
      <p class="career-tech">${techLine(project.tech)}</p>
      <button type="button" data-project-id="${project.id}">View</button>
    </article>`;
  }).join("");
};

const careerPhases = [
  { id: "recent", label: "RECENT", count: 6, period: "2024.07 — 2026.07" },
  { id: "growth", label: "GROWTH", count: 8, period: "2022.02 — 2024.06" },
  { id: "foundation", label: "FOUNDATION", count: 6, period: "2021.04 — 2022.02" },
];

careerPhases.forEach((phase, index) => {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = `${phase.label} · ${phase.count}`;
  button.dataset.phase = phase.id;
  button.title = phase.period;
  button.setAttribute("aria-label", `${phase.label}, ${phase.period}, ${phase.count}개 프로젝트`);
  button.classList.toggle("active", index === 0);
  button.setAttribute("aria-pressed", String(index === 0));
  careerFilter.append(button);
});

const openProject = (id) => {
  const project = projects.find((item) => item.id === id);
  if (!project) return;
  const statusTitle = project.screen === "closed" ? "Service Closed" : project.screen === "live" ? "Live Site" : "Service Screen";
  const statusCopy = project.screen === "closed"
    ? "현재 서비스 종료 또는 비공개로 실제 화면을 제공하지 않습니다. 프로젝트 정보와 담당 구현 범위만 정리했습니다."
    : project.screen === "live"
      ? "현재 운영 중인 사이트에서 실제 화면을 확인할 수 있습니다."
      : project.image
        ? "현재 운영 중인 실제 서비스의 메인 화면입니다."
        : "회원 전용 또는 앱 서비스로 화면이 공개되지 않아 프로젝트 정보와 담당 구현 범위만 정리했습니다.";

  const screenContent = project.image
    ? `<figure class="project-screen">
        <img src="${project.image}" alt="${project.title} 실제 서비스 메인 화면" />
        <figcaption><span>Actual service screen</span>${project.url ? `<a href="${project.url}" target="_blank" rel="noopener noreferrer">운영 사이트 보기 ↗</a>` : ""}</figcaption>
      </figure>`
    : `<section class="screen-status" aria-label="프로젝트 화면 상태">
        <div><strong>${statusTitle}</strong><p>${statusCopy}</p></div>
        ${project.url ? `<a class="live-site-link" href="${project.url}" target="_blank" rel="noopener noreferrer">운영 사이트 보기 ↗</a>` : ""}
      </section>`;

  dialogContent.innerHTML = `
    <section class="dialog-hero">
      <p>${project.kind}</p>
      <h2 id="dialog-title">${project.title}</h2>
    </section>
    <div class="dialog-body">
      <section class="dialog-overview" aria-label="프로젝트 개요">
        <p class="dialog-lead">${project.type}</p>
        <dl class="detail-facts">
          <div><dt>Project</dt><dd>${project.title}</dd></div>
          <div><dt>Period</dt><dd>${project.period}</dd></div>
          <div><dt>Role</dt><dd>${project.role}</dd></div>
          <div><dt>Tech</dt><dd>${project.tech.length ? techLine(project.tech) : "미기재"}</dd></div>
        </dl>
      </section>
      ${screenContent}
      ${project.highlights?.length ? `<section class="dialog-highlights">
        <h3>Key screens / implementation</h3>
        <ul>${project.highlights.map((item) => `<li>${item}</li>`).join("")}</ul>
      </section>` : ""}
      <section class="dialog-work">
        <h3>What I did</h3>
        <ul>${project.work.map((item) => `<li>${item}</li>`).join("")}</ul>
      </section>
    </div>`;
  dialog.showModal();
  document.body.classList.add("dialog-open");
};

renderCareer();

document.addEventListener("click", (event) => {
  const projectTrigger = event.target.closest("[data-project-id]");
  if (projectTrigger) openProject(projectTrigger.dataset.projectId);

  const filterButton = event.target.closest("[data-career-filter] button");
  if (filterButton) {
    const selected = filterButton.dataset.phase;
    careerFilter.querySelectorAll("button").forEach((button) => {
      const isActive = button === filterButton;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
    careerList.querySelectorAll("[data-career-phase]").forEach((row) => {
      row.hidden = row.dataset.careerPhase !== selected;
    });
  }
});

document.querySelector("[data-dialog-close]").addEventListener("click", () => dialog.close());
dialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));
dialog.addEventListener("click", (event) => {
  const box = dialog.getBoundingClientRect();
  const outside = event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom;
  if (outside) dialog.close();
});

const header = document.querySelector("[data-header]");
window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 20), { passive: true });

const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector("#mobile-nav");
menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!open));
  mobileNav.hidden = open;
});
mobileNav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    mobileNav.hidden = true;
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

document.querySelector("[data-year-now]").textContent = new Date().getFullYear();
