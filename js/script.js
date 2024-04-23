
document.addEventListener('DOMContentLoaded', function () {
  const video = document.getElementById('video-splash');

  // Hide video and show main content when the video ends
  video.addEventListener('ended', function () {
    video.parentElement.style.display = 'none'; // Hide video container
    document.querySelector('.content').style.display = 'block'; // Show main content
  });

  // Optionally, you can add a timeout to automatically hide the video after a certain duration
  setTimeout(function () {
    video.parentElement.style.display = 'none'; // Hide video container
    document.querySelector('.content').style.display = 'block'; // Show main content
  }, 2000); // Hide video after 10 seconds
});


document.addEventListener('DOMContentLoaded', function () {
  // Select the first image
  const firstImage = document.querySelector('.swiper-slide:first-child .image img');

  // Apply the zoom effect
  setTimeout(function () {
    firstImage.style.transform = 'scale(1.1)'; // Zoom in to 110% of the original size
  }, 2000); // Delay the zoom effect by 500 milliseconds
});


let Navbar = document.querySelector('.navbar');
let Fabars = document.querySelector('.fa-bars');

Fabars.onclick = () => {
  Navbar.classList.toggle("active")
};




var swiper = new Swiper(".home-slid", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



var swiper = new Swiper(".team-slider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    "0": {
      slidesPerView: 1,
      autoplay: {
        delay: 700,
        disableOnInteraction: false,
      },
    },
    "768": {
      slidesPerView: 2,

    },
    "1020": {
      slidesPerView: 2,

    },
  },
});
