document.addEventListener('DOMContentLoaded', function () {

	// MOBILE MENU

	var nav = document.querySelector(".nav"),
		navToggle = document.querySelector(".btn--nav");

	nav.classList.remove("nav--nojs");
	navToggle.addEventListener("click", function () {
		if (nav.classList.contains("nav--closed")) {
			nav.classList.remove("nav--closed");
			nav.classList.add("nav--opened");
		} else {
			nav.classList.remove("nav--opened");
			nav.classList.add("nav--closed");
		}
	});

	// POPUP
	var popUp = document.querySelector(".popup"),
		btnOpen = document.querySelector(".page-header__user-link"),
		btnClose = document.querySelector(".popup__btn--close"),
		overlay = document.querySelector(".overlay");

	btnOpen.addEventListener("click", function (event) {
		event.preventDefault();
		popUp.classList.toggle("popup--opened");
		overlay.classList.toggle("overlay--opened");
		nav.classList.remove("nav--opened");
		nav.classList.add("nav--closed");
	});
	btnClose.addEventListener("click", function () {
		if (popUp.classList.contains("popup--opened")) {
			popUp.classList.remove("popup--opened");
		}
		if (overlay.classList.contains("overlay--opened")) {
			overlay.classList.remove("overlay--opened");
		}
	});

	window.addEventListener("keydown", function (event) {
		if (event.keyCode == 27) {
			if (popUp.classList.contains("popup--opened")) {
				popUp.classList.remove("popup--opened");
			}
			if (overlay.classList.contains("overlay--opened")) {
				overlay.classList.remove("overlay--opened");
			}
		}
	});

	// REGISTRATION
	var popupMail = document.querySelector('.popup__email'),
		popupPass = document.querySelector('.popup__password'),
		popupForm = document.querySelector('.popup__form');
	popupForm.addEventListener('submit', function (e) {
		e.preventDefault()
		if (popupMail.value === "" && popupPass.value === "") {
			alert('Ввведите данные')
		}

		if (popupMail.value === "username@mail.com" && popupPass.value === "pass") {
			popupForm.action = 'user.html';
			popupForm.submit()
		} else if (popupMail.value === "admin@mail.com" && popupPass.value === "pass") {
			popupForm.action = 'admin.html';
			popupForm.submit()
		} else if (popupMail.value === "" && popupPass.value === "") {
			alert('Ввведите данные')
		} else {
			alert('Пользователь ' + popupMail.value + ' в системе не зарегистрирован')
		}
	});

	// creator Element 
	function createElement(tag, props, ...children) {
		const element = document.createElement(tag);

		Object.keys(props).forEach(key => element[key] = props[key]);

		console.log(tag, children);

		if (children.length > 0) {
			children.forEach(child => {
				if (typeof child === 'string') {
					child = document.createTextNode(child);
				}

				element.appendChild(child);
			})
		}

		return element;
	}
});