window.onload = () => {

	const titre = document.getElementById("titre");
	const border = document.getElementById("border-bottom");
	const retour = document.getElementById("retour");
    const exergue = document.getElementById("exergue");
	const texte = document.getElementsByClassName("texte");
	const portfolioProjet = document.querySelector('.portfolio.projet');

	titre.classList.add("move");
	setTimeout(()=>{
		border.classList.add("block");
	},100);

	setTimeout(()=>{
		retour.classList.add("retour-on");
	},500);

    setTimeout(()=>{
		exergue.classList.add("opacity-on");
	},500);

	setTimeout(()=>{
		texte[0].classList.add("opacity-on");
	},500);

	setTimeout(()=>{
		portfolioProjet.classList.add("opacity-on");
	},500);

	retour.addEventListener('click', () => {
		border.classList.remove("block");
		retour.classList.remove("retour-on");

		setTimeout(()=>{
			titre.classList.remove("move");
		},100);

		setTimeout(()=>{
			window.location.href = "index.html";
		}, 500);	
	});	
}