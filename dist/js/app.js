// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu');
if (iconMenu) {
	iconMenu.addEventListener("click", function (event) {
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('show-menu');
		document.body.classList.toggle('lock');
	});
}

// Accordeon
const headers = document.querySelectorAll("[data-name='accordeon-title']");
headers.forEach(function (item) {
	item.addEventListener('click', showContent);
})
function showContent() {
	this.parentNode.classList.toggle('active');
	this.nextElementSibling.classList.toggle('active');
	this.classList.toggle('active');
}

// INIT SLIDERS
const testimonialsSliders = document.querySelectorAll('.testimonials__body');
for (let item of testimonialsSliders) {
	const testimonialsSwiper = new Swiper(item, {
		watchOverflow: true,
		spaceBetween: 30,
		slideClass: 'video-block__item',
		wrapperClass: 'testimonials__video',
		speed: 500,
		breakpoints: {
			300: {
				slidesPerView: 1,
			},
			500: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			800: {
				slidesPerView: 3,
			},
			1100: {
				slidesPerView: 4,
			},
		},
		pagination: {
			el: item.querySelector(".testimonials-pagination"),
			type: "fraction",
		},
		navigation: {
			nextEl: item.querySelector(".testimonials-arrow__next"),
			prevEl: item.querySelector(".testimonials-arrow__prev"),
		},
	})
	const testimonialsItems = item.querySelectorAll('.video-block__item').length;
	const testimonialsControls = item.querySelector('.testimonials__controls');
	if (testimonialsItems <= 4) {
		testimonialsControls.style.display = 'none';
	}
}

const slider = document.querySelector('.statistics__wrapper');
const slider2 = document.querySelector('.learn__wrapper');
let mobileSwiper;
let mobileSwiper2;

function mobSwiper2() {
	if (slider2 != null) {
		if (window.innerWidth <= 767.98 && slider2.dataset.mobile == 'false'){
			mobileSwiper2 = new Swiper(slider2, {
				slidesPerGroup: 1,
				slidesPerView: 'auto',
				loop: false,
				spaceBetween: 20,
				slideClass: 'learn__item',
				wrapperClass: 'learn__items',
				speed: 500,
				pagination: {
					el: ".slider__controls .swiper-pagination",
					type: 'bullets',
					clickable: true
				},
				breakpoints: {
					300: {
						slidesPerView: 1,
					},
					479.98: {
						slidesPerView: 2,
					},
				},
			});
			slider2.dataset.mobile = 'true';
			if (window.innerWidth > 767.98) {
				slider2.dataset.mobile = 'false';
				if (slider2.classList.contains('swiper-initialized')){
					mobileSwiper2.destroy();
				}
			}
		}
	}
}
mobSwiper2();

function mobSwiper() {
	if (slider != null) {
		if (window.innerWidth <= 767.98 && slider.dataset.mobile == 'false'){
			mobileSwiper = new Swiper(slider, {
				slidesPerGroup: 1,
				slidesPerView: 'auto',
				loop: false,
				spaceBetween: 20,
				slideClass: 'data-statistics__item',
				wrapperClass: 'data-statistics',
				speed: 500,
				pagination: {
					el: ".slider__controls .swiper-pagination",
					type: 'bullets',
					clickable: true
				},
			});
			slider.dataset.mobile = 'true';
		};
		if (window.innerWidth > 767.98) {
			slider.dataset.mobile = 'false';
			if (slider.classList.contains('swiper-initialized')){
				mobileSwiper.destroy();
			}
		}
	};
}
mobSwiper();

window.addEventListener('resize', () => {
	mobSwiper2();
	mobSwiper();
});

