/* ONGLET EXPO */
const expo = document.getElementById("expo");
const onglet = document.getElementById("onglet");
const sliderExpo = document.querySelector('.slider.expo');
const slidesExpo = document.querySelectorAll('.slide.expo');

const auto = true;
const intervalTime = 2000;
let slideInterval;

onglet.onclick = function(){
	clearInterval(slideInterval);
	expo.classList.toggle('expand');
	setTimeout(() => sliderExpo.classList.toggle('display-none'),10);
	// AUTO SLIDE
	if(auto){
		slideInterval = setInterval(nextSlideExpo, intervalTime);
	}
}

/* PORFOLIO EXPO */
const nextSlideExpo = () =>{
	const current = document.querySelector('.expo.current');
	current.classList.remove('current');
	if(current.nextElementSibling){
		current.nextElementSibling.classList.add('current');
	}
	else{
		slidesExpo[0].classList.add("current");
	}
	setTimeout(() => current.classList.remove('current'));
}

const prevSlideExpo = () =>{
	const current = document.querySelector('.expo.current');
	current.classList.remove('current');
	if(current.previousElementSibling){
		current.previousElementSibling.classList.add('current');
	}
	else{
		slidesExpo[slidesExpo.length - 1].classList.add("current");
	}
	setTimeout(() => current.classList.remove('current'));
}