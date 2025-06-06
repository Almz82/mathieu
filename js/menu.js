document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis();
    
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    const el = document.getElementById("el");
    el.scrollIntoView();

    const vh = (coef) => window.innerHeight * (coef/100);

    gsap.utils.toArray(".projet").forEach((projet) => {
        gsap.set(projet, {
            backgroundPosition: "50% 0%"
        });
        gsap.to(projet, {
           backgroundPosition: "50% 40%",
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
                start: "top 80%",
                end: "bottom -20%",
                toggleActions: "play reverse restart reverse",
            }
        },{
            opacity: 1,
            y: 350,
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
    })


});