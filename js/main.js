
// BURGER -------------------------

let burger = document.querySelector(".header__burger");
let headerBtn = document.querySelector(".header__btn");
let nav = document.querySelector(".header__nav");
let dark = $(".dark");
let count = 0;
let body = document.querySelector("body");

burger.onclick = () => {
	burger.classList.toggle("active");
	headerBtn.classList.toggle("active");
	nav.classList.toggle("active");
	body.classList.toggle("lock");
	if (count == 0) {
		dark.fadeIn(200);
		count = 1;
	}
	else {
		dark.fadeOut(200);
		count = 0;
	}
}


// ================================


// Слайдер- slider-serv -----------

const arrowL = document.querySelector(".slider-serv__left");
const arrowR = document.querySelector(".slider-serv__right");

let item = $(".slider-serv__item");

let active = 0;

// Стрелки слайдера --
// Вправо
arrowR.addEventListener("click", () => {
	$(item[active]).fadeOut(400);
	active++;
	if (active >= item.length) {
		active = 0;
	}
	$(item[active]).fadeIn(400);
});

// Влево
arrowL.addEventListener("click", () => {
	$(item[active]).fadeOut(400);
	active--;
	if (active < 0) {
		active = item.length - 1;
	}
	$(item[active]).fadeIn(400);
});


// ================================


// Pop-up -------------------------

let number = document.querySelector(".header__btn");
let pop = document.querySelector(".pop");
let popClose = document.querySelector(".pop span");
let dark2 = $(".dark2");

number.addEventListener("click", () => {
	pop.classList.add("active");
	dark2.fadeIn(200);
});

popClose.addEventListener("click", () => {
	pop.classList.remove("active");
	dark2.fadeOut(200);
});

dark2.click( () => {
	dark2.fadeOut(200);
	pop.classList.remove("active");
});


// ================================


// Map ----------------------------

function initMap() {
	// Позиция маркера
  let uluru = {lat: 57.6571161, lng: 39.845826};

  // Позиция центра
	let center;

  if (window.innerWidth > 1170) {
		center = {lat: 57.6565269, lng: 39.8397179};
  }
  if (window.innerWidth <= 1170) {
		center = {lat: 57.6572119, lng: 39.8397179};
  }
  if (window.innerWidth <= 768) {
		center = {lat: 57.6589739, lng: 39.8457369};
  }

  let map = new google.maps.Map(document.getElementById('map'),
  	{
  		zoom: 16,
  		center: center
  	});

  let marker = new google.maps.Marker({
  	position: uluru,
  	map: map,
  	icon: '../img/icons/marker.png'
  });
}


// ================================



// Document Slider ----------------

let about = $(".about").offset().top;
let services = $(".services").offset().top;
let print = $(".print").offset().top;
let polygraphy = $(".polygraphy").offset().top;
let reviews = $(".reviews").offset().top;
let faq = $(".faq").offset().top;
let contacts = $(".contacts").offset().top;

let sliderDot = $(".docSl__dot");
let sliderLine = $(".docSl__line");


$(window).scroll(function() {
	Scroll();
});

function Scroll() {
	let winScroll = $(window).scrollTop();
	let docSl = $(".docSl").position().top;

	// 1-й слайд
	if (winScroll < (about - docSl)) {
		$(sliderDot).removeClass("active");
		$(sliderDot[0]).addClass("active");
		$(sliderLine).removeClass("active");
		$(sliderDot[2]).removeClass("order");
	}

	// 2-й слайд
	if (winScroll > (about - docSl) && winScroll < (services - docSl)) {
		$(sliderDot).removeClass("active");
		$(sliderDot[1]).addClass("active");
		$(sliderLine).removeClass("active");
		$(sliderDot[2]).removeClass("order");
	}

	// // 3-й слайд
	if (winScroll > (services - docSl) && winScroll < (print - docSl)) {
		$(sliderDot).removeClass("active");
		$(sliderDot[2]).addClass("active");
		$(sliderLine).removeClass("active");
		$(sliderLine[0]).addClass("active");
		$(sliderDot[2]).removeClass("order");
	}

	// 4-й слайд
	if (winScroll > (print - docSl) && winScroll < (polygraphy - docSl)) {
		$(sliderDot).removeClass("active");
		$(sliderDot[1]).addClass("active");
		$(sliderDot[2]).addClass("order");
		$(sliderLine).removeClass("active");
		$(sliderLine[1]).addClass("active");
	}

	// 5-й слайд
	if (winScroll > (polygraphy - docSl) && winScroll < (reviews - docSl)) {
		$(sliderLine).removeClass("active");
		$(sliderLine[2]).addClass("active");
		$(sliderDot[2]).addClass("order");
	}

	// 6-й слайд
	if (winScroll > (reviews - docSl) && winScroll < (faq - docSl)) {
		$(sliderDot).removeClass("active");
		$(sliderDot[3]).addClass("active");
		$(sliderDot[2]).addClass("order");
	}

	// 7-й слайд
	if (winScroll > (faq - docSl) && winScroll < (contacts - docSl)) {
		$(sliderDot).removeClass("active");
		$(sliderDot[4]).addClass("active");
		$(sliderDot[2]).addClass("order");
	}
}

window.onload = () => {
	Scroll();
}


// ================================

// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),position(digi),when(breakpoint)"
// e.x. data-da="item,2,992"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle

(function () {
	let original_positions = [];
	let da_elements = document.querySelectorAll('[data-da]');
	let da_elements_array = [];
	//Заполняем массивы
	if (da_elements.length > 0) {
		let number = 0;
		for (let index = 0; index < da_elements.length; index++) {
			const da_element = da_elements[index];
			const da_move = da_element.getAttribute('data-da');
			const da_array = da_move.split(',');
			if (da_array.length == 3) {
				da_element.setAttribute('data-da-index', number);
				//Заполняем массив первоначальных позиций
				original_positions[number] = {
					"parent": da_element.parentNode,
					"index": index_in_parent(da_element)
				};
				//Заполняем массив элементов 
				da_elements_array[number] = {
					"element": da_element,
					"destination": document.querySelector('.' + da_array[0].trim()),
					"place": da_array[1].trim(),
					"breakpoint": da_array[2].trim()
				}
				number++;
			}
		}
		dynamic_adapt_sort(da_elements_array);
		//console.log(da_elements_array);
		//console.log(original_positions);
		dynamic_adapt();
	}
	//Основная функция
	function dynamic_adapt() {
		let body_width = document.querySelector('body').offsetWidth;
		for (let index = 0; index < da_elements_array.length; index++) {
			const el = da_elements_array[index];
			const da_element = el.element;
			const da_destination = el.destination;
			const da_place = el.place;
			const da_breakpoint = el.breakpoint;
			const da_classname = "_dynamic_adapt_" + da_breakpoint;
			if (body_width < da_breakpoint) { //Для MobileFirst поменять на ">"
				//Перебрасываем элементы
				if (!da_element.classList.contains(da_classname)) {
					let actual_index;
					if (da_place == 'first') {
						actual_index = index_of_elements(da_destination)[0];
					} else if (da_place == 'last') {
						actual_index = index_of_elements(da_destination)[index_of_elements(da_destination).length];
					} else {
						actual_index = index_of_elements(da_destination)[da_place];
					}
					da_destination.insertBefore(da_element, da_destination.children[actual_index]);
					da_element.classList.add(da_classname);
				}
			} else {
				//Возвращаем на место
				if (da_element.classList.contains(da_classname)) {
					dynamic_adaptive_back(da_element);
					da_element.classList.remove(da_classname);
				}
			}
		}
		custom_adapt(body_width);
	}
	//Функция возврата на место
	function dynamic_adaptive_back(el) {
		const da_index = el.getAttribute('data-da-index');
		const original_place = original_positions[da_index];
		const parent_place = original_place['parent'];
		const index_place = original_place['index'];
		const actual_index = index_of_elements(parent_place, true)[index_place];
		parent_place.insertBefore(el, parent_place.children[actual_index]);
	}
	//Функция получения индекса внутри родителя
	function index_in_parent(el) {
		const children = el.parentNode.children;
		let num = 0;
		for (let i = 0; i < children.length; i++) {
			if (children[i] == el) return num;
			if (children[i].nodeType == 1) {
				num++;
			}
		}
		return -1;
	}
	//Функция получения массива индексов элементов внутри родителя 
	function index_of_elements(parent, back) {
		const children = parent.children;
		const children_array = [];
		for (let i = 0; i < children.length; i++) {
			const children_element = children[i];
			if (back) {
				children_array.push(i);
			} else {
				//Исключая перенесенный элемент
				if (children_element.getAttribute('data-da') == null) {
					children_array.push(i);
				}
			}
		}
		return children_array;
	}
	//Сортировка объекта
	function dynamic_adapt_sort(arr) {
		arr.sort(function (a, b) {
			if (a.breakpoint > b.breakpoint) { return -1 } else { return 1 } //Для MobileFirst поменять
		});
		arr.sort(function (a, b) {
			if (a.place > b.place) { return 1 } else { return -1 }
		});
	}
	//Слушаем изменение размера экрана
	window.addEventListener('resize', function (event) {
		dynamic_adapt();
	});
	//Дополнительные сценарии адаптации
	function custom_adapt(body_width) {

	}
}());


if (window.innerWidth > 1170) {
	const animItems = document.querySelectorAll('[data-anim]');

	// Изначально скрывает объекты
	animItems.forEach( element => {
		element.style.opacity = 0;
	})

	if (animItems.length > 0) {
		window.addEventListener('scroll', animOnScroll);
		function animOnScroll() {
			for (let index = 0; index < animItems.length; index++) {
				const animItem = animItems[index];
				const animItemHeight = animItem.offsetHeight;
				const animItemOffset = offset(animItem).top;
				const animStart = 2;


				let animItemPoint = window.innerHeight - animItemHeight / animStart;
				if (animItemHeight > window.innerHeight) {
					animItemPoint = window.innerHeight - window.innerHeight / animStart;
				}

				if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
					
					// Добавление анимации ---
					if (animItem.dataset.anim) {
						animItem.style.animation = `${animItem.dataset.anim} .7s forwards`;
					}

					// Кастомизация анимации ====================

					// data-delay // Задержка анимации ---
					if (animItem.dataset.delay) {
						animItem.style.animationDelay = animItem.dataset.delay + 's';
					}

					// data-duration // Скорость анимации ---
					if (animItem.dataset.duration) {
						animItem.style.animationDuration = animItem.dataset.duration + 's';
					}

				}
				else { // Включает зеркальную анимацию
					if (animItem.dataset.animReverse == "true") {
						animItem.style.animation = void 0;
					}
				}
			}
		}
		function offset(el) {
			const rect = el.getBoundingClientRect(),
				scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
				scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
		}

		setTimeout(() => {
			animOnScroll();
		}, 300);
	}
}
$(document).ready(function(){
	$('.slider').slick({
		arrows: false,
	  slidesToScroll: 1,
	  centerMode: true,
	  responsive:[ // Ставим брейкпоинты
			{
				breakpoint: 992,
				settings: {
					centerMode: false,
				}
			}
		],
	});
	$('.slider__left').click(function(event) {
		$('.slider').slick('slickPrev')
	});
	$('.slider__right').click(function(event) {
		$('.slider').slick('slickNext')
	});
});