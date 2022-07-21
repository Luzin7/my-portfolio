const title = document.querySelector("title");

const titleChanger = () => {
  const titles = [
    "Meu portfólio",
    "My portfolio",
    "Seja bem vindo ao meu portfólio",
    "Welcome to my portfolio",
  ];
  const titleRandomize = titles[Math.ceil(Math.random() * (titles.length - 1))];

  return (title.innerHTML = titleRandomize);
};

setInterval(titleChanger, 10000);
