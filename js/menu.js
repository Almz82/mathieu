document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis();
    
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // si pas de storage, on scroll jusqu'à l'élément
    // s'il y a un storage, on scroll jusque là
    const el = document.getElementById("el");
    let storage = sessionStorage.getItem("scrollY");

    if(storage){
        window.scrollTo(0, storage);
    } else {
        el.scrollIntoView();
    }

    gsap.to("body", {
        autoAlpha: 1
    })

    const vh = (coef) => window.innerHeight * (coef/100);
    
    
    gsap.fromTo('.main-container', {
                        autoAlpha: 0,
                    },
                    {
                        autoAlpha: 1,
                        duration: .3,
                        delay: .5,
                    });

    gsap.utils.toArray(".projet").forEach((projet) => {
        gsap.set(projet, {
            backgroundPosition: "50% 0%"
        });
        gsap.to(projet, {
           backgroundPosition: "50% 35%",
           scrollTrigger: {
                scrub: true,
                trigger: projet,
                start: "top bottom",
                end: "bottom top",
            }
        });
    })


    gsap.utils.toArray("h2").forEach((text) => {
        gsap.from(text, {
            opacity: 0,
            y: -320,
            scrollTrigger: {
                scrub: true,
                trigger: text,
                start: "top 85%",
                end: "bottom -10%",
                toggleActions: "play reverse restart reverse",
            }
        },{
            opacity: 1,
            y: 320,
        })
    });

    gsap.utils.toArray(".chronologie").forEach((chronologie) => {
        ScrollTrigger.create({
            start: "top center",
            end: "bottom center",
            trigger: chronologie,
            onEnter: () => {
                let temps = chronologie.dataset.temps;
                document.querySelector("body").dataset.temps = temps;
                const tempsContainer = document.querySelector(".temps-container .temps"); 
                tempsContainer.dataset.temps = temps;
                if (temps == "passe"){
                    tempsContainer.textContent = "passés";
                } else if (temps == "present"){
                    tempsContainer.textContent = "présents";
                } else if (temps == "futur"){
                    tempsContainer.textContent = "futurs";
                }
                
            },
            onEnterBack: () => {
                let temps = chronologie.dataset.temps;
                document.querySelector("body").dataset.temps = temps;
                const tempsContainer = document.querySelector(".temps-container .temps"); 
                tempsContainer.dataset.temps = temps;
                if (temps == "passe"){
                    tempsContainer.textContent = "passés";
                } else if (temps == "present"){
                    tempsContainer.textContent = "présents";
                } else if (temps == "futur"){
                    tempsContainer.textContent = "futurs";
                }
            }
        })
    });


    /* PAGE TRANSITION */
    const h2 = document.querySelectorAll("h2");
    const temps = document.querySelector(".temps");
    const anchors = document.querySelectorAll('.transition');

    for(let i=0; i<anchors.length; i++){
		const anchor = anchors[i];

        

        anchor.addEventListener('click', e => {

			e.preventDefault();
			let href = e.target.href; // adresse du lien
			let target = e.target.target;  // et sa target

            let scrollTop = window.scrollY; // la hauteur scrollée
            sessionStorage.setItem("scrollY", scrollTop);

            console.log(href)
            
			if(target){
				window.open(href);
			}
			else{
				if(e.target.classList.contains("full")){
                    
                    let project = e.target.parentElement.parentElement;

                    gsap.to(temps, {
                        duration: 0.3,
                        autoAlpha: 0,
                    });

                    if(project.getBoundingClientRect().y > 0){
                        gsap.to(project, {
                            duration: .3,
                            height: "1vh",
                            marginTop: "200vh",
                            ease: "power2.in",
                        });

                        if(anchors[i -1]){
                            let projectBefore = anchors[i -1].parentElement.parentElement;

                            gsap.to(projectBefore, {
                                duration: .3,
                                height: "1vh",
                                marginBottom: "200vh",
                                ease: "power2.in",
                            });
                        }
                    }
                    else{
                        gsap.to(project, {
                            duration: .3,
                            height: "1vh",
                            marginBottom: "200vh",
                            ease: "power2.in",
                        });

                        if(anchors[i +1]){
                            let projectAfter = anchors[i +1].parentElement.parentElement;

                            gsap.to(projectAfter, {
                                duration: .3,
                                height: "1vh",
                                marginTop: "200vh",
                                ease: "power2.in",
                            });
                        }
                    }

					setTimeout(() => {
						window.location.href = href;
					}, 200);
                    
				} if (e.target.classList.contains("short")) {
                    gsap.to("body", {
                        duration: .1,
                        autoAlpha: 0,
                        ease: "power2.in",
                    });
                    setTimeout(() => {
                        window.location.href = href;
                    }, 300);
			    }
            }
		});
    }

    /* h2.forEach((h, index) => {
        h.addEventListener("click", (e) => {

            let target = e.target.parentElement;
            const temps = document.querySelector(".temps");

            gsap.to(temps, {
                duration: 0.3,
                autoAlpha: 0,
            });


            if(target.getBoundingClientRect().y > 0){
                gsap.to(target, {
                    duration: 1,
                    height: "0vh",
                    marginTop: "200vh",
                    ease: "power2.in",
                });

                if(h2[index -1]){
                    let beforeTarget = h2[index -1].parentElement;

                    gsap.to(beforeTarget, {
                        duration: 1,
                        height: "0vh",
                        marginBottom: "200vh",
                        ease: "power2.in",
                    });
                }
            }
            else{
                gsap.to(target, {
                    duration: 1,
                    height: "0vh",
                    marginBottom: "200vh",
                    ease: "power2.in",
                });

                if(h2[index +1]){
                    let afterTarget = h2[index +1].parentElement;

                    gsap.to(afterTarget, {
                        duration: 1,
                        height: "0vh",
                        marginTop: "200vh",
                        ease: "power2.in",
                    });
                }
            } 

            

            

            

            
           
        });
    });*/


});