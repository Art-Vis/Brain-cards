export const createElement = (tag, attr) => { // в функцию вместо параметра передаем эелемент который хотим создать
    const element = document.createElement(tag);
    return Object.assign(element, attr);
}