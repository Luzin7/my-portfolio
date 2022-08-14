import weatherAppImg from "../assets/imgs/react-weather-app.jpg";
import gameHubImg from "../assets/imgs/game-hub_screen-demo.jpg";
import mmlImg from "../assets/imgs/my-movie-list.jpg";
import happyDayImg from "../assets/imgs/happy-day.jpg";

export const PROJECTS = [
  {
    id: 1,
    media: gameHubImg,
    name: "Game-hub",
    repository: "https://github.com/Luzin7/game-hub",
    description:
      "Uma aplicação desenvolvida para prática da ferramenta React.JS utlizando React Router como principal aprendizado. No projeto você consegue ter informações de todos os jogos disponíveis, desde sua descrição até o link de download. Além de conseguir fazer cadastro e recuperação de login usando armazenamento local. Tudo dinamicamente.",
  },
  {
    id: 2,
    media: weatherAppImg,
    name: "Weather App",
    repository: "https://github.com/Luzin7/react-weather-app",
    description:
      "Uma aplicação sobre clima(s), no qual é possível pesquisar cidades, visualizar sua temperatura e descrição sobre o tempo, além de adicionar aos seus favoritos. Tudo isso de forma dinâmica, usando formulários e o estado da aplicação.",
  },
  {
    id: 3,
    media: mmlImg,
    name: "My Movie List",
    repository: "https://github.com/Luzin7/my-movie-list",
    description:
      "Um compilado de filmes que assisti com meus amigos. Junto aos títulos, adicionamos nossas opiniões e notas. Além de existir uma seção de filmes que pretendemos assistir.",
  },
  {
    id: 4,
    media: happyDayImg,
    name: "Happy Day",
    repository: "https://github.com/Luzin7/happy-day",
    description:
      "Um site criado para celebrar dias especiais gerando frases relacionadas ao conteúdo.",
  },
  {
    id: 5,
    media: null,
    name: "Em breve",
    repository: "Em breve",
    description: null,
  },
];
