import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';


function swiperFunc () {
	const swiper = new Swiper('.swiper-container', {
		effect: "coverflow",
			grabCursor: true,
			slidesPerView: 3,
			coverflowEffect: {
				rotate: -5,
				stretch: 0,
				depth: 100,
				modifier: 1,
				slideShadows: false,
			},
			initialSlide: 2,
			mousewheel: {
				//Чувствительность колеса
				sensitivity: 10,
				// Класс объекта на котором
				// будет срабатывать прокрута мышью
				// Если свайперы с одним классом можно убрать
				eventsTarget: '.swiper-container',
			},
	
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

