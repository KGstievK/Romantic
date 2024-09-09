const burgerMenu = document.querySelector('.burger_menu');
const bars = document.querySelectorAll(".bar");
const nav = document.querySelector(".header_nav_burger");
const navLink = document.querySelector(".header_nav_burger_link");

let i = false;

// Устанавливаем начальные стили при загрузке страницы
window.addEventListener('DOMContentLoaded', () => {
  // Устанавливаем начальные стили для navLink
  navLink.style.margin = '-1000px 0 0 0';
});

burgerMenu.addEventListener('click', () => {
  i = !i; // Переключаем состояние
  console.log(i);

  // Первый бар (первый дочерний элемент)
  bars[0].style.transform = i ? 'rotate(45deg)' : '';
  bars[0].style.top = i ? '7.8px' : '0';

  // Второй бар (второй дочерний элемент)
  bars[1].style.transform = i ? 'scale(0)' : 'translateY(50%)';
  bars[1].style.transition = '.3s';

  // Третий бар (третий дочерний элемент)
  bars[2].style.transform = i ? 'rotate(-45deg)' : '';
  bars[2].style.bottom = i ? '13px' : '0';

  // Навигация
  nav.style.background = i ? '#025f56' : '';

  // Переключение состояния navLink
  navLink.style.margin = i ? '0 0 0 0' : '-1000px 0 0 0';
});

console.log(bars);
console.log(navLink);