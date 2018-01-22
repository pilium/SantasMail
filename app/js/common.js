document.addEventListener('DOMContentLoaded', function () {

    // MOBILE MENU

    // var nav = document.querySelector(".nav"),
    //     navToggle = document.querySelector(".btn--nav");
    
    // nav.classList.remove("nav--nojs");
    // navToggle.addEventListener("click", function(){
    //     if(nav.classList.contains("nav--closed")){
    //         nav.classList.remove("nav--closed");
    //         nav.classList.add("nav--opened");
    //     } else {
    //         nav.classList.remove("nav--opened");
    //         nav.classList.add("nav--closed");
    //     }
    // });

    // POPUP
 	var popUp = document.querySelector(".popup"),
 	    btnOpen = document.querySelector(".page-header__user-link"),
 	    btnClose = document.querySelector(".popup__btn--close"),
		overlay = document.querySelector(".overlay");

 	btnOpen.addEventListener("click", function(event){
 	    event.preventDefault();
 	    popUp.classList.toggle("popup--opened");
 			overlay.classList.toggle("overlay--opened");
 	    // nav.classList.remove("nav--opened");
 	    // nav.classList.add("nav--closed");
 	});
 	btnClose.addEventListener("click", function(){
 	  if(popUp.classList.contains("popup--opened")){
 	    popUp.classList.remove("popup--opened");
 	  }
 		if(overlay.classList.contains("overlay--opened")){
 			overlay.classList.remove("overlay--opened");
 		}
	 });
	
 	window.addEventListener("keydown", function(event){
 	  if(event.keyCode == 27){
			if(popUp.classList.contains("popup--opened")){
	 	    popUp.classList.remove("popup--opened");
	 	  }
	 		if(overlay.classList.contains("overlay--opened")){
	 			overlay.classList.remove("overlay--opened");
	 		}
 	  }
 	});

});