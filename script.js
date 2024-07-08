let currentSlideIndex = 0;
    const slides = document.querySelectorAll('.slide');

    function showSlide(index) {
        if (index >= slides.length) {
            currentSlideIndex = 0;
        } else if (index < 0) {
            currentSlideIndex = slides.length - 1;
        } else {
            currentSlideIndex = index;
        }
        
        slides.forEach((slide, i) => {
            slide.style.display = (i === currentSlideIndex) ? 'block' : 'none';
        });
    }

    function changeSlide(n) {
        showSlide(currentSlideIndex + n);
    }

   

    showSlide(currentSlideIndex);
   