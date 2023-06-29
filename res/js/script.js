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
   
    function changeButton(btnElement) {
      var parent = btnElement.parentNode.parentNode.parentNode.parentNode.id;
      // Получить все кнопки
      var buttons = document.querySelectorAll('#'+parent+' #navigation li button');
      // Пройти по всем кнопкам и убрать класс active, добавить класс nonactive
      for (var i = 0; i < buttons.length; i++) {
          if (buttons[i] === btnElement) { // Если текущая кнопка нажата
              buttons[i].classList.add('activee');
              buttons[i].classList.remove('nonactivee');
          } else { // Если текущая кнопка не нажата
              buttons[i].classList.add('nonactivee');
              buttons[i].classList.remove('activee');
          }
      }
  }

