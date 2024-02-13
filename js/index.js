const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const mobileNavButton = document.querySelector(".mobile-nav__toggle");

const mobileNav = (function () {
  const mobileNav = document.querySelector(".mobile-nav");

  function toggle() {
    mobileNav.classList.toggle("mobile-nav--open");
  }

  return { toggle };
})();

//encapsulates slider logic
const slider = (function () {
  const heading = document.querySelector(".slider__heading");
  const mobileSlide = document.getElementById("slide-mobile");
  const tabletSlide = document.getElementById("slide-tablet");
  const desktopSlide = document.getElementById("slide-desktop");
  const imageHeading = document.querySelector(".slider__graphic-overlay h3");
  const imageDate = document.querySelector(".slider__graphic-overlay span");

  let slideIndex = 0;

  const slides = [
    {
      heading: "Branding naming & guidelines",
      images: {
        desktop: "assets/images/desktop/image-slide-1.jpg",
        tablet: "assets/images/tablet/image-slide-1.jpg",
        mobile: "assets/images/mobile/image-slide-1.jpg",
      },
      imageHeading: "Lean Product Roadmap",
      imageDate: "2019 Project",
    },
    {
      heading: "Brand identity & merchandise",
      images: {
        desktop: "assets/images/desktop/image-slide-2.jpg",
        tablet: "assets/images/tablet/image-slide-2.jpg",
        mobile: "assets/images/mobile/image-slide-2.jpg",
      },
      imageHeading: "New Majestic Hotel",
      imageDate: "2018 Project",
    },
    {
      heading: "Brand identity & web design",
      images: {
        desktop: "assets/images/desktop/image-slide-3.jpg",
        tablet: "assets/images/tablet/image-slide-3.jpg",
        mobile: "assets/images/mobile/image-slide-3.jpg",
      },
      imageHeading: "Crypto Dashboard",
      imageDate: "2016 Project",
    },
  ];

  function renderSlide(slide) {
    heading.textContent = slide.heading;
    mobileSlide.srcset = slide.images.mobile;
    tabletSlide.srcset = slide.images.tablet;
    desktopSlide.src = slide.images.desktop;
    imageHeading.textContent = slide.imageHeading;
    imageDate.textContent = slide.imageDate;
  }

  function next() {
    slideIndex += 1;

    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }

    const newSlide = slides[slideIndex];
    renderSlide(newSlide);
  }

  function previous() {
    slideIndex -= 1;

    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }

    const newSlide = slides[slideIndex];
    renderSlide(newSlide);
  }

  function init() {
    renderSlide(slides[slideIndex]);
  }

  return { init, next, previous };
})();

//setup the slider
slider.init();

//hook up slider controls
leftArrow.addEventListener("click", slider.previous);
rightArrow.addEventListener("click", slider.next);

//hook up mobile nav button
mobileNavButton.addEventListener("click", mobileNav.toggle);
