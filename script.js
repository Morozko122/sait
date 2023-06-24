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