import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


function swiperFunc () {
	const swiper = new Swiper('.swiper', {
		effect: "coverflow",
		slidesPerView: 1,
		spaceBetween: 40,
		mousewheel: {
			sensitibity: 10,
			eventsTarget: '.swiper'
		},
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 100,
        modifier: 1,
      //   slideShadows: true,
      },
		initialSlide: 1,
	});
}

export default swiperFunc

// function swiperFunc() {
// 	const swiper = new Swiper('#swiper-popular', {
// 		slidesPerView: 1,
// 		spaceBetween: 32,
// 		navigation: {
// 			nextEl: '#sliderNext',
// 			prevEl: '#sliderPrev',
// 		},
		// breakpoints: {
		// 	425: {
		// 		slidesPerView: 2,
		// 		spaceBetween: 20,
		// 	},
		// 	768: {
		// 		slidesPerView: 3,
		// 		spaceBetween: 40,
		// 	},
		// 	1024: {
		// 		slidesPerView: 4,
		// 		spaceBetween: 50,
		// 	},
		// },
// 	});
// }

