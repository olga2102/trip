const menu = document.querySelector('.main-nav');
const button = document.querySelector('.toggle');
const header = document.querySelector('.header__wrapper');
const body = document.querySelector('.page__body');
const links = document.querySelectorAll(".main-nav__link");

const closedMenu = () => {
  menu.classList.remove('main-nav--opened');
}

closedMenu();

button.addEventListener('click', ()=> {
  if (!menu.classList.contains('main-nav--opened')) {
    body.classList.add('page__body--lock');
    menu.classList.add('main-nav--opened');
    header.classList.add('header__wrapper--opened');
  } else {
    body.classList.remove('page__body--lock');
    menu.classList.remove('main-nav--opened');
    header.classList.remove('header__wrapper--opened');
  }
})

//блокировка скролла
const scrollLock = () => {
  if (links && links.length > 0) {
    links.forEach(link => {
    link.addEventListener("click", () => {
      body.classList.remove("page__body--lock");
    });
  });
  }
};

scrollLock();
