// burger-menu
// const burgerMenu = document.querySelector('.burger-menu');
// burgerMenu.addEventListener('click', (e) => {
// 	burgerMenu.classList.toggle('_active');
// 	document.querySelector('.header-menu').classList.toggle('_active');
// 	document.body.classList.toggle('_lock');
// });

function selectMenu() {
	const selects = document.querySelectorAll('.select');

	if (selects) {
		const selectHeaders = document.querySelectorAll('.select__header');
		const selectItems = document.querySelectorAll('.select__item');

		selectHeaders.forEach(el => {
			el.addEventListener('click', selectToggle)
		});
		selectItems.forEach(el => {
			el.addEventListener('click', selectChoose)
		});



		function selectToggle(e) {
			const parent = this.parentElement,
				selectBody = parent.querySelector('.select__body');
			parent.classList.toggle('_active')
			_slideToggle(selectBody, 300)
		}

		function selectChoose(e) {
			const parent = this.closest('.select'),
				selectValue = parent.querySelector('.select__value'),
				selectBody = parent.querySelector('.select__body');
			let valueItem = this.innerText;
			selectValue.innerHTML = valueItem;
			parent.classList.remove('_active')
			_slideUp(selectBody, 300)
		}

		let _slideUp = (target, duration = 500) => {
			if (!target.classList.contains('_slide')) {
				target.classList.add('_slide');

				target.style.transitionProperty = 'height, margin, padding';
				target.style.transitionDuration = duration + 'ms';
				target.style.height = target.offsetHeight + 'px';
				target.offsetHeight;
				target.style.overflow = 'hidden';
				target.style.height = 0;
				target.style.paddingTop = 0;
				target.style.paddingBottom = 0;
				target.style.marginTop = 0;
				target.style.marginBottom = 0;
				window.setTimeout(() => {
					target.style.display = 'none';
					target.style.removeProperty('height');
					target.style.removeProperty('padding-top');
					target.style.removeProperty('padding-bottom');
					target.style.removeProperty('margin-top');
					target.style.removeProperty('margin-bottom');
					target.style.removeProperty('overflow');
					target.style.removeProperty('transition-duration');
					target.style.removeProperty('transition-property');
					target.classList.remove('_slide');
				}, duration);
			}
		}

		let _slideDown = (target, duration = 500) => {
			if (!target.classList.contains('_slide')) {
				target.classList.add('_slide');

				target.style.removeProperty('display');
				let display = window.getComputedStyle(target).display;
				if (display === 'none')
					display = 'block'

				target.style.display = display;
				let height = target.offsetHeight;
				target.style.overflow = 'hidden';
				target.style.height = 0;
				target.style.paddingTop = 0;
				target.style.paddingBottom = 0;
				target.style.marginTop = 0;
				target.style.marginBottom = 0;
				target.offsetHeight;
				target.style.transitionProperty = 'height, margin, padding';
				target.style.transitionDuration = duration + 'ms';
				target.style.height = height + 'px';
				target.style.removeProperty('padding-top');
				target.style.removeProperty('padding-bottom');
				target.style.removeProperty('margin-top');
				target.style.removeProperty('margin-bottom');
				window.setTimeout(() => {
					target.style.removeProperty('height');
					target.style.removeProperty('overflow');
					target.style.removeProperty('transition-duration');
					target.style.removeProperty('transition-property');
					target.classList.remove('_slide');
				}, duration);
			}

		}

		let _slideToggle = (target, duration = 500) => {
			if (window.getComputedStyle(target).display === 'none') {
				return _slideDown(target, duration);
			} else {
				_slideUp(target, duration);
			}
		}
	}


}

selectMenu()


const swiperHero = new Swiper('.swiper-hero', {
	// Optional parameters
	loop: true,
	pagination: {
		el: ".swiper-hero__pagination",
		type: "fraction",
		renderFraction: function (currentClass, totalClass) {
			return '<span class="' + currentClass + '"></span>' +
				'<span class="' + totalClass + '"></span>';
		}
	},
	autoplay: {
		delay: 5000,
	},
	allowTouchMove: false,


});
const swiperStory = new Swiper('.swiper-story', {
	loop: true,
	pagination: {
		el: ".swiper-story__pagination",
		type: "fraction",
		renderFraction: function (currentClass, totalClass) {
			return '<span class="' + currentClass + '"></span>' +
				'<span class="' + totalClass + '"></span>';
		}
	},
	spaceBetween: 30,
	breakpoints: {
		991: {
			slidesPerView: 1.5,
			spaceBetween: 70,
		},
		
	},
	


});
const swiperAbout = new Swiper('.swiper-about', {
	direction:'vertical',
	loop: true,
	pagination: {
		el: ".swiper-about__pagination",
		type: "fraction",
		renderFraction: function (currentClass, totalClass) {
			return '<span class="' + currentClass + '"></span>' +
				'<span class="' + totalClass + '"></span>';
		}
	},
	spaceBetween: 30,
	autoHeight:true,
	allowTouchMove: false,
	


});