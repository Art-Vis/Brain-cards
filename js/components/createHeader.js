import { createElement } from "../helper/createElement.js";

export const createHeader = (parent) => { //parent = headerParent 
  const container = createElement('div', {
    className: 'container header__container',
  });

  parent.append(container);

  const headerLogoLink = createElement('a', {
    href: '#',
    className: 'header__logo-link',
  });

  const logo = createElement('img', {
    src: 'img/logo.svg',
    className: 'header__logo',
    alt: 'Логотип сервиса Brain Cards',
  });
  
  headerLogoLink.append(logo);
  
  const headerTitle = createElement('h2', {
    className: 'header__subtitle',
    textContent: 'Категории',
  });
  
  const headerBtn = createElement('button', {
    className: 'header__btn',
    textContent: 'Добавить категорию',
  });
  
  container.append(headerLogoLink,headerTitle,headerBtn);

  const uptadeHeaderTitle = (title) => {
    headerTitle.textContent = title;
  };

  return { headerLogoLink, headerBtn, uptadeHeaderTitle }; // возвращаем, что бы потом добавить функционал
};