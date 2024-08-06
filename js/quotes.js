// 명언 리스트
quotes = [
    {
    quote: "명성을 쌓는 것에는 20년이란 세월이 걸리며, 명성을 무너뜨리는 것에는 5분도 걸리지 않는다. 그걸 명심한다면 당신의 행동이 달라질 것이다.",
    author: "워렌 버핏",
    },
    {
        quote: "간단함이 훌룡함의 열쇠다.",
        author: "이소룡",
    },
    {
        quote: "승리하면 조금 배울 수 있고, 실패하면 모든 것을 배울 수 있다.",
        author: "크리스티 매튜슨",
    },
    {
        quote: "승자는 책임지는 태도로 살며, 패자는 약속을 남발한다.",
        author: "유태경",
    },
    {
        quote: "내 자신의 무식을 아는 것은 지식으로의 첫 걸음이다.",
        author: "바이런",
    },
    {
        quote: "말만 하고 행동하지 않는 사람은 잡초로 가득 찬 정원과 같다.",
        author: "하우얼",
    },
    {
        quote: "가시에 찔리지 않고서는 장미를 모을 수 없다.",
        author: "핀페이",
    },
    {
        quote: "고통을 거치지 않고 얻은 승리는 영광이 아니다.",
        author: "나폴레옹",
    },
    {
        quote: "기와 한 장 아껴서 대들보 썩는다.",
        author: "한국 속담",
    },
    {
        quote: "바람이 불지 않으면 노를 저어라.",
        author: "윈스턴 처칠",
    },
    {
        quote: "휴식은 게으름도, 멈춤도 아니다.",
        author: "헨리 포드",
    },
    {
        quote: "강에서 물고리르 보고 탐내는 것보다 돌아가서 그물을 짜는 것이 옳다.",
        author: "예악지",
    },
    {
        quote: "역경은 사람을 부유하게 하지는 않으나 지혜롭게 한다.",
        author: "풀러",
    },
    {
        quote: "낭비한 시간에 대한 후회는 더 큰 시간 낭비이다.",
        author: "메이슨 쿨리",
    },
    {
        quote: "들은 것은 잊어버리고 본 것은 기억하고 직접 해본 것은 이해한다.",
        author: "공자",
    },
    {
        quote: "아이디어의 좋고 나쁨은 어떻게 실행하느냐에 따라 결정된다.",
        author: "카를로스 곤",
    },
    {
        quote: "모든 기능은 유지비용이 든다. 소수의 기능을 가지는 것은 우리가 정말로 신경쓰는 것에 집중하도록 하고 그것들이 뛰어나도록 만든다.",
        author: "데이비드 카프",
    },
    {
        quote: "항상 갈구하라. 바보짓을 두려워마라.",
        author: "스티브 잡스",
    },
    {
        quote: "성공의 커다란 비결은 결코 지치지 않는 인간으로 인생을 살아가는 것이다.",
        author: "알버트 슈바이처",
    },
    {
        quote: "18년동안 아마존을 성공으로 이끈 3가지 전략이 있다. 그것은 고객을 우선으로 생각하고, 발명하고, 인내하는 것이다.",
        author: "제프 베조스",
    },
    {
        quote: "다리를 움직이지 않고는 좁은 도랑도 건널 수 없다. 소원과 목적이 있으되 노력이 따르지 않으면, 아무리 환경이 좋아도 소용이 없다. 꾸준히 노력하는 사람은 반드시 성공을 거두게 된다.",
        author: "알랭",
    },
    {
        quote: "가끔은 혁신을 추구하다 실수할 때도 있다. 하지만 빨리 인정하고 다른 혁신을 개선해 나가는 것이 최선이다.",
        author: "스티브 잡스",
    },
];

const todayQuote = quotes[Math.floor(Math.random()*quotes.length)]; // 명언 리스트 중 랜덤으로 추출
const quote = document.querySelector("span#quote"); // 명언 위치 지정
const author = document.querySelector("span#author"); // 인물 위치 지정

quote.innerText = `"${todayQuote.quote}"`; // 명언 내용 변경
author.innerText = ` -${todayQuote.author}`; // 인물 내용 변경