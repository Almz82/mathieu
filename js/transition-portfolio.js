window.onload = () => {
	const titre = document.getElementById("titre");
	const border = document.getElementById("border-bottom");
	const retour = document.getElementById("retour");
	const container = document.querySelector("ul");
	const liens = document.querySelectorAll("li");

	titre.classList.add("move");
	setTimeout(()=>{
		border.classList.add("block");
	},100);

	setTimeout(()=>{
		retour.classList.add("retour-on");
	},500);

    gsap.fromTo(container, {
        y: "-20vh"
    },
    {
        delay: .2,
        duration: .3,
        y: 0,
    });

	gsap.fromTo(liens, {
        autoAlpha: 0,
        y: "-10vh"
    },
    {
        delay: .2,
        autoAlpha: 1,
        duration: .2,
        y: 0,
        stagger: .1
    });



	retour.addEventListener('click', () => {
		border.classList.remove("block");
		retour.classList.remove("retour-on");

		setTimeout(()=>{
			titre.classList.remove("move");
		},100);

        gsap.to(container, {
            autoAlpha: 0,
            duration: .5,
        });

		setTimeout(()=>{
			window.location.href = "../index.html";
		}, 500);	
	});
		
}