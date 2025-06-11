window.onload = () => {
	const titre = document.getElementById("titre");
	const border = document.getElementById("border-bottom");
	const retour = document.getElementById("retour");
	const texte = document.getElementsByClassName("texte");
	const exergue = document.getElementById("exergue");

	titre.classList.add("move");
	setTimeout(()=>{
		border.classList.add("block");
	},100);

	setTimeout(()=>{
		exergue.classList.add("opacity-on");
	},150);

	setTimeout(()=>{
		retour.classList.add("retour-on");
	},500);

	setTimeout(()=>{
		texte[0].classList.add("opacity-on");
	},500);

	retour.addEventListener('click', () => {
		border.classList.remove("block");
		retour.classList.remove("retour-on");

		setTimeout(()=>{
			titre.classList.remove("move");
		},100);

		setTimeout(()=>{
			texte[0].classList.remove("opacity-on");
		},200);

		setTimeout(()=>{
			exergue.classList.remove("opacity-on");
		},200);

		setTimeout(()=>{
			window.location.href = "index.html";
		}, 500);	
	});
		
}