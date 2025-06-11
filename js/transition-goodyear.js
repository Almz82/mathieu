window.onload = () => {
	const titre = document.getElementById("titre");
	const border = document.getElementById("border-bottom");
	const retour = document.getElementById("retour");
	const texte = document.getElementsByClassName("texte");
	const iframes = document.getElementsByTagName("iframe");

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
		// pour pallier aux erreurs script du player vimeo
		iframes[0].src = "https://player.vimeo.com/video/123532347?h=6ffd3fbce6";
		iframes[1].src = "https://player.vimeo.com/video/123544839?h=b9af0c9a70";
		iframes[2].src = "https://player.vimeo.com/video/123532349?h=8ab2bc184b";
		iframes[3].src = "https://player.vimeo.com/video/123532348?h=c6dee049d4";
	},550);



	retour.addEventListener('click', () => {
		border.classList.remove("block");
		retour.classList.remove("retour-on");

		setTimeout(()=>{
			titre.classList.remove("move");
		},100);

		setTimeout(()=>{
			window.location.href = "../index.html";
		}, 500);	
	});
		
}