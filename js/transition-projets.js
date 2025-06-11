window.onload = () => {
	const titre = document.getElementById("titre");
	const border = document.getElementById("border-bottom");
	const retour = document.getElementById("retour");
	const onglet = document.getElementById("onglet");
	const texte = document.getElementsByClassName("texte");
	const expo = document.getElementById("expo");
	const slidesExpo = document.querySelectorAll('.slide.expo');
	const portfolioProjet = document.querySelector('.portfolio.projet');

	titre.classList.add("move");
	setTimeout(()=>{
		border.classList.add("block");
	},100);

	setTimeout(()=>{
		retour.classList.add("retour-on");
	},500);

	setTimeout(()=>{
		texte[0].classList.add("opacity-on");
	},500);

	setTimeout(()=>{
		portfolioProjet.classList.add("opacity-on");
	},500);
	
	setTimeout(()=>{
		onglet.classList.add("onglet-on")
	},800);

	retour.addEventListener('click', () => {
		if(expo.classList.contains("expand")){
			expo.classList.remove("expand");
			sliderExpo.classList.add("display-none");

			setTimeout(()=>{
				border.classList.remove("block");
				retour.classList.remove("retour-on");
			},700);

			setTimeout(()=>{
				titre.classList.remove("move");
				onglet.classList.remove("onglet-on");
			},800);

			setTimeout(()=>{
				window.location.href = "index.php";
			}, 1200);

		}else{
			border.classList.remove("block");
			retour.classList.remove("retour-on");

			setTimeout(()=>{
				titre.classList.remove("move");
				onglet.classList.remove("onglet-on");
			},100);

			setTimeout(()=>{
				window.location.href = "../index.html";
			}, 500);
		}	
	});		
}