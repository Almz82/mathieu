const titre = document.getElementById("titre");
const border = document.getElementById("border-bottom");
const retour = document.getElementById("retour");
const formulaire = document.getElementById("formulaire");
const adresse = document.getElementById("adresse");
const message = document.getElementById("message");

const adresseOut = () => {
	const lettres = document.querySelectorAll(".lettre");

	const tl = gsap.timeline({
        defaults: {
            duration: .4,
			ease: 'expo'
        }
    });

    tl
        .to(lettres, { autoAlpha: 0, stagger: 0.02})
		.to(message, { autoAlpha: 1, delay: 0.5})
		.to(message, { autoAlpha: 0, delay: 1.5})
		.to(adresse, { cursor: "none" })
		.to(lettres, { autoAlpha: 1, stagger: 0.02})
    return tl;
}

const copyAdresse = async () => {
    try {
        await navigator.clipboard.writeText("bonjour@mathieufarcy.com");
        console.log('Content copied to clipboard');
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}

window.onload = () => {
	titre.classList.add("move");
	setTimeout(()=>{
		border.classList.add("block");
	},100);

	setTimeout(()=>{
		retour.classList.add("retour-on");
	},500);

	setTimeout(()=>{
		formulaire.classList.add("opacity-on");
	},500);

	adresse.addEventListener('click', () => {
		adresseOut();
		copyAdresse();
	}, { once: true });

	retour.addEventListener('click', () => {
		border.classList.remove("block");
		retour.classList.remove("retour-on");

		setTimeout(()=>{
			titre.classList.remove("move");
		},100);

		setTimeout(()=>{
			formulaire.classList.remove("opacity-on");
		},200);

		setTimeout(()=>{
			window.location.href = "../index.html";
		}, 500);	
	});	
}