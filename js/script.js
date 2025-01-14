
 
// first slide-show
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlides(n) {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    dots[index].classList.remove('active');
    slide.querySelector('.text-overlay').style.animation = '';
  });

  slideIndex = (n + slides.length) % slides.length;
  slides[slideIndex].classList.add('active');
  dots[slideIndex].classList.add('active');
  slides[slideIndex].querySelector('.text-overlay').style.animation = 'textFadeIn 1s ease-in-out forwards';
}

function nextSlide() {
  showSlides(slideIndex + 1);
}
// social-icon js 
const container = document.querySelector('.flip-container');
    
    // Flip every 5 seconds
    setInterval(() => {
      container.classList.toggle('flipped');
    }, 5000);

    // Optional: Add click to flip
    container.addEventListener('click', () => {
      container.classList.toggle('flipped');
    });
//card-slider js
const slider = document.querySelector(".slider2");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;
const cardWidth = slider.querySelector(".card2").offsetWidth;
const visibleCards = 3;
const totalCards = slider.querySelectorAll(".card2").length;

// Clone cards for infinite effect
for (let i = 0; i < visibleCards; i++) {
  slider.appendChild(slider.children[i].cloneNode(true));
}

// Move to the next slide
function moveToNextSlide() {
  if (currentIndex >= totalCards) {
    currentIndex = 0;
    slider.style.transition = "none";
    slider.style.transform = `translateX(0)`;
    setTimeout(() => {
      slider.style.transition = "transform 0.4s ease";
      currentIndex++;
      slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }, 20);
  } else {
    currentIndex++;
    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }
}

// Move to the previous slide
function moveToPrevSlide() {
  if (currentIndex <= 0) {
    currentIndex = totalCards;
    slider.style.transition = "none";
    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    setTimeout(() => {
      slider.style.transition = "transform 0.4s ease";
      currentIndex--;
      slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }, 20);
  } else {
    currentIndex--;
    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }
}

// Automatic slide change
setInterval(moveToNextSlide, 3000);

prevBtn.addEventListener("click", moveToPrevSlide);
nextBtn.addEventListener("click", moveToNextSlide);
// Set up automatic slide switching
setInterval(nextSlide, 5000);

function currentSlide(n) {
  showSlides(n - 1);
}

//article-container
document.querySelectorAll('.read-more-btn').forEach(button => {
  button.addEventListener('click', () => {
      const hiddenContent = button.previousElementSibling;
      if (hiddenContent.style.display === 'none' || hiddenContent.style.display === '') {
          hiddenContent.style.display = 'block';
          button.textContent = 'Read Less';
      } else {
          hiddenContent.style.display = 'none';
          button.textContent = 'Read More';
      }
  });
});

// card image scroling
document.addEventListener("DOMContentLoaded", () => {
  const slider3 = document.querySelector(".slider3");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let currentIndex = 0;

  function updateSliderDimensions() {
      const cardWidth = slider3.querySelector(".card3").offsetWidth;
      const totalCards = slider3.querySelectorAll(".card3").length;
      const visibleCards = Math.floor(slider3.offsetWidth / cardWidth);
      
      slider3.style.width = `${totalCards * cardWidth}px`;
      return { cardWidth, totalCards, visibleCards };
  }

  function moveToNextSlide() {
      const { cardWidth, totalCards } = updateSliderDimensions();
      currentIndex++;
      if (currentIndex >= totalCards) {
          currentIndex = 0;
      }
      slider3.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  function moveToPrevSlide() {
      const { cardWidth, totalCards } = updateSliderDimensions();
      currentIndex--;
      if (currentIndex < 0) {
          currentIndex = totalCards - 1;
      }
      slider3.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  window.addEventListener("resize", () => {
      updateSliderDimensions(); // Recalculate dimensions on resize
  });

  prevBtn.addEventListener("click", moveToPrevSlide);
  nextBtn.addEventListener("click", moveToNextSlide);

  setInterval(moveToNextSlide, 3000);
  updateSliderDimensions(); // Initial setup
});
// expand-container
function toggleExpandableContent(index) {
  const content = document.getElementById(`hidden-content-${index}`);
  const icon = document.getElementById(`toggle-icon-${index}`);

  content.classList.toggle('show');
  icon.textContent = content.classList.contains('show') ? "-" : "+";
}
//navbar
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  // Show the button when scrolling down
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });

  // Scroll to the top when the button is clicked
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling effect
    });
  });
  
    // dropdown
const toggleButton = document.getElementById('toggleButton');
        const achievements = document.getElementById('achievements');

        toggleButton.addEventListener('click', () => {
            // Toggle the visibility of achievements
            achievements.classList.toggle('hidden');
            // Change the button text based on visibility
            if (achievements.classList.contains('hidden')) {
                toggleButton.textContent = 'Show MLA Achievements';
            } else {
                toggleButton.textContent = 'Hide MLA Achievements';
            }
        });