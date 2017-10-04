import Swiper from 'swiper';

export default function doSlider() {
	const swiper = new Swiper('.swiper-container', {
	  speed: 400,
	  spaceBetween: 20,
	  slidesPerView: 2,
	  slidesPerGroup: 2,
	  nextButton: '.swiper-button-next',
	  prevButton: '.swiper-button-prev',
	  preloadImages: false,
	  lazyLoading: true,
	  a11y: true,
	  pagination: false,
	  grabCursor: true,
	  breakpoints: {
	    1280: {
	      slidesPerView: 2,
	      slidesPerGroup: 2,
	      spaceBetween: 20
	    },

	    600: {
	      slidesPerView: 1,
	      slidesPerGroup: 1,
	      spaceBetween: 0
	    }
	  }
	});
};

export { doSlider };