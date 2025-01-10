// burger-menu
// const burgerMenu = document.querySelector('.burger-menu');
// burgerMenu.addEventListener('click', (e) => {
// 	burgerMenu.classList.toggle('_active');
// 	document.querySelector('.header-menu').classList.toggle('_active');
// 	document.body.classList.toggle('_lock');
// });

// dropdown menu
// dropdown Menu function
function selectMenu() {
	const selects = document.querySelectorAll('[data-select-menu]');

	// data-select-menu main data-atribute
	// data-select-menu-button open close dropdown menu
	// data-select-menu-value value of data-select-menu-button
	// data-select-menu-drop-down body of dropdown menu
	// data-select-menu-option options of dropdown menu

	if (selects) {

		document.documentElement.addEventListener('click', collapseSelects)

		selects.forEach(select => {

			const selectButton = select.querySelector('[data-select-menu-button]');
			const selectOptions = select.querySelectorAll('[data-select-menu-option]');

			selectButton.addEventListener('click', selectToggle)
			selectOptions.forEach(el => {
				el.addEventListener('click', selectChoose)
			});
		});



		function selectToggle(e) {
			const parent = e.target.closest('[data-select-menu]'),
				selectBody = parent.querySelector('[data-select-menu-drop-down]');
			parent.classList.toggle('_active')
			_slideToggle(selectBody, 300)
		}

		function selectChoose(e) {
			const parent = e.target.closest('[data-select-menu]'),
				selectValue = parent.querySelector('[data-select-menu-value]'),
				selectBody = parent.querySelector('[data-select-menu-drop-down]');
			let valueItem = this.innerText;
			selectValue.innerHTML = valueItem;
			parent.classList.remove('_active')
			_slideUp(selectBody, 300)
		}

		function collapseSelects(e) {
			const targetClick = e.target.closest('[data-select-menu]')
			selects.forEach(select => {
				if (!targetClick || targetClick !== select) {
					select.classList.remove('_active')
					const selectBody = select.querySelector('[data-select-menu-drop-down]');
					_slideUp(selectBody, 300)
				}
			});

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


// swiper initialization
const swiperHero = new Swiper('.swiper-hero', {
	// Optional parameters
	loop: true,
	pagination: {
		el: ".swiper-hero__pagination",
		type: "fraction",
		renderFraction: function (currentClass, totalClass) {
			return `<span class="${currentClass} swiper-pagination-box__current"></span>` +
				`<span class="${totalClass} swiper-pagination-box__total"></span>`;
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
			return `<span class="${currentClass} swiper-pagination-box__current"></span>` +
				`<span class="${totalClass} swiper-pagination-box__total"></span>`;
		}
	},
	spaceBetween: 30,
	breakpoints: {
		992: {
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