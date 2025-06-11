/* PORFOLIO PROJET */
const slidesProjet = document.querySelectorAll('.slide.projet');
const prevProjet = document.querySelector('#prev-projet');
const nextProjet = document.querySelector('#next-projet');

const nextSlideProjet = () =>{
	let current = document.querySelector('.projet.current');
	if(current.classList.contains('media')){
		// pause media when leaving video self
		const media = document.querySelectorAll(".media-controller")
		for(i=0;i<media.length;i++){
			media[i].pause();
		}
	}
	current.classList.remove('current');
	// if text is attached to this slide
	if(current.children[0]){
		current.children[0].classList.remove('current')
	}
	if(current.nextElementSibling){
		if(current.nextElementSibling==slidesProjet[slidesProjet.length - 1]){
			nextProjet.classList.add('no-arrow');
		}
		current.nextElementSibling.classList.add('current');
		prevProjet.classList.remove('no-arrow');
	}
	// if text is attached to next slide
	if(current.nextElementSibling.children[0]){
		current.nextElementSibling.children[0].classList.add('current')
	}
	setTimeout(() =>
		current.classList.remove('current')
	);
}

const prevSlideProjet = () =>{
	let current = document.querySelector('.projet.current');
	if(current.classList.contains('media')){
		// pause media when leaving video self
		const media = document.querySelectorAll(".media-controller")
		for(i=0;i<media.length;i++){
            media[i].pause()
		}
	}
	current.classList.remove('current');
	// if text is attached to this slide
	if(current.children[0]){
		current.children[0].classList.remove('current')
	}
	if(current.previousElementSibling){
		if(current==slidesProjet[slidesProjet.length - 1]){
			nextProjet.classList.remove('no-arrow');
		}else if(current==slidesProjet[1]){
			prevProjet.classList.add('no-arrow');
		}
		current.previousElementSibling.classList.add('current');
	}
	// if text is attached to next slide
	if(current.previousElementSibling.children[0]){
		current.previousElementSibling.children[0].classList.add('current')
	}
	setTimeout(() => current.classList.remove('current'));
}

nextProjet.addEventListener('click', e =>{
	nextSlideProjet();
});

prevProjet.addEventListener('click', e =>{
	prevSlideProjet();
});

document.onkeydown = function (e) {
	let current = document.querySelector('.projet.current');
	switch (e.keyCode) {
	    case 37:
	     	if(current==slidesProjet[0]){
	     		break;
	     	}else{
		        prevSlideProjet();
		        break;
		    }
	    case 39:
	     	if(current==slidesProjet[slidesProjet.length - 1]){
	     		break;
	     	}else{
		        nextSlideProjet();
		        break;
		    }
	}
};

// TOUCH EVENTS 
window.addEventListener('load', function(){
 
    var sliderProjet = document.querySelector('.slider.projet'),
        startX,
        startY,
        dist,
        threshold = 60, //required min distance traveled to be considered swipe
        allowedTime = 500, // maximum time allowed to travel that distance
        elapsedTime,
        startTime
    
	function handleleftswipe(isleftswipe){
		let current = document.querySelector('.projet.current');
		if(current!=slidesProjet[0]){
             prevSlideProjet();
		}
    }
	function handlerightswipe(isrightswipe){
		let current = document.querySelector('.projet.current');
		if(current!=slidesProjet[slidesProjet.length - 1]){
             nextSlideProjet();
		}
    }

    sliderProjet.addEventListener('touchstart', function(e){
        var touchobj = e.changedTouches[0]
        dist = 0
        startX = touchobj.pageX
        startY = touchobj.pageY
        startTime = new Date().getTime() // record time when finger first makes contact with surface
    }, false)


	sliderProjet.addEventListener('touchmove', function(e){
		// prevent scrolling when user seems to swipe		
		if(window.innerHeight > window.innerWidth && e.changedTouches[0].clientY>180 && e.targetTouches.length==1){
			// no scroll on portrait screen when only one finger is on (for zoom to work)
			e.preventDefault();
		}
		else if(window.innerHeight < window.innerWidth && e.changedTouches[0].clientY>80 && e.targetTouches.length==1){
			// no scroll on landscape screen when only one finger is on (for zoom to work)
			e.preventDefault();
		}
	}, false)

    sliderProjet.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        dist = touchobj.pageX - startX // get total dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
		// check that elapsed time is within specified, horizontal dist traveled >= threshold, and vertical dist traveled <= 100
		if(dist>0){
	        var swiperightBol = (elapsedTime <= allowedTime && dist >= threshold && Math.abs(touchobj.pageY - startY) <= 100)
			if(swiperightBol){
	            handleleftswipe();
			}
		}else{
			var swipeleftBol = (elapsedTime <= allowedTime && -dist >= threshold && Math.abs(touchobj.pageY - startY) <= 100)
			if(swipeleftBol){
	            handlerightswipe();
			}
		}
    }, false)

	sliderProjet.addEventListener('touchcancel', function(e){
        var touchobj = e.changedTouches[0]
        dist = touchobj.pageX - startX // get total dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
		// check that elapsed time is within specified, horizontal dist traveled >= threshold, and vertical dist traveled <= 100
		if(dist>0){
	        var swiperightBol = (elapsedTime <= allowedTime && dist >= threshold && Math.abs(touchobj.pageY - startY) <= 100)
			if(swiperightBol){
	            handleleftswipe();
			}
		}else{
			var swipeleftBol = (elapsedTime <= allowedTime && -dist >= threshold && Math.abs(touchobj.pageY - startY) <= 100)
			if(swipeleftBol){
	            handlerightswipe();
			}
		}
    }, false)
}, false) // end window.onload


