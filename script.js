const slides = document.querySelectorAll('.switchpic-slide');
    const dots = document.querySelectorAll('.switchpic-dot');
    let activeSlide = 0;

    const showSlide = (slideIndex) => {
      slides.forEach(slide => {
        slide.classList.remove('active');
      });
      dots.forEach(dot => {
        dot.classList.remove('active');
      });
      slides[slideIndex].classList.add('active');
      dots[slideIndex].classList.add('active');
    }

    showSlide(activeSlide);

    setInterval(() => {
      activeSlide++;
      if (activeSlide >= slides.length) {
        activeSlide = 0;
      }
      showSlide(activeSlide);
    }, 10000);

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        activeSlide = index;
        showSlide(activeSlide);
      });
    });

    // получение ссылок на элементы навигации
const newsLink = document.querySelector('#nav-news');
const announcementsLink = document.querySelector('#nav-announcements');
const discussionsLink = document.querySelector('#nav-discussions');
const articlesLink = document.querySelector('#nav-articles');

// установка класса active для элемента Новости по умолчанию
newsLink.classList.add('activee');

// добавление обработчиков событий на каждый элемент навигации
newsLink.addEventListener('click', () => setActive(newsLink));
announcementsLink.addEventListener('click', () => setActive(announcementsLink));
discussionsLink.addEventListener('click', () => setActive(discussionsLink));
articlesLink.addEventListener('click', () => setActive(articlesLink));

// функция для установки активного элемента навигации
function setActive(clickedElement) {
  // поиск элемента навигации с активным классом
  const activeElement = document.querySelector('.activee');

  // удаление класса active у предыдущего активного элемента
  if (activeElement) {
    activeElement.classList.remove('activee');
  }

  // установка класса active для выбранного элемента
  clickedElement.classList.add('activee');
}

// функция для инициализации навигации
function initNavigation() {
  // установка класса active для элемента Новости по умолчанию
  newsLink.classList.add('activee');

  // добавление обработчиков событий на каждый элемент навигации
  newsLink.addEventListener('click', () => setActive(newsLink));
  announcementsLink.addEventListener('click', () => setActive(announcementsLink));
  discussionsLink.addEventListener('click', () => setActive(discussionsLink));
  articlesLink.addEventListener('click', () => setActive(articlesLink));
}

// вызываем функцию initNavigation для инициализации навигации
initNavigation();