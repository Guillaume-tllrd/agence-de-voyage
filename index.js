// -------------NAVBAR------
const nav = document.querySelector(".nav");
const icons= document.getElementById("icons");
icons.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

//-------------------Sport carte-------------------
// Base jump
const baseJumpInfo = document.getElementById("base-jump-info");
const carteInfosBaseJump = document.querySelector(".carte-infos-basejump");

baseJumpInfo.addEventListener("click", () => {
    carteInfosBaseJump.style.opacity = "1";
    carteInfosBaseJump.style.zIndex = "1";
})
document.addEventListener("click", (event) => {
    if (!baseJumpInfo.contains(event.target)) {
        carteInfosBaseJump.style.opacity = "0"
    }
});

//Parapente
const parapenteInfo = document.getElementById("parapente-info");
const carteInfosParapente = document.querySelector(".carte-infos-parapente");

parapenteInfo.addEventListener("click", () => {
    carteInfosParapente.style.opacity = "1";
    carteInfosParapente.style.zIndex = "1";
})
document.addEventListener("click", (event) => {
    if (!parapenteInfo.contains(event.target)) {
        carteInfosParapente.style.opacity = "0"
    }
});

// Saut à l'élastique
const sautElastiqueInfo = document.getElementById("saut-élastique-info");
const carteInfosSaut = document.querySelector(".carte-infos-saut");

sautElastiqueInfo.addEventListener("click", () => {
    carteInfosSaut.style.opacity = "1";
    carteInfosSaut.style.zIndex = "1";
})
document.addEventListener("click", (event) => {
    if (!sautElastiqueInfo.contains(event.target)) {
        carteInfosSaut.style.opacity = "0"
    }
});

// Rafting
const raftingInfo = document.getElementById("rafting-info");
const carteInfosRafting = document.querySelector(".carte-infos-rafting");

raftingInfo.addEventListener("click", () => {
    carteInfosRafting.style.opacity = "1";
    carteInfosRafting.style.zIndex = "1";
})
document.addEventListener("click", (event) => {
    if (!raftingInfo.contains(event.target)) {
        carteInfosRafting.style.opacity = "0"
    }
});

//Escalade
const escaladeInfo = document.getElementById("escalade-info");
const carteInfosEscalade = document.querySelector(".carte-infos-escalade");

escaladeInfo.addEventListener("click", () => {
    carteInfosEscalade.style.opacity = "1";
    carteInfosEscalade.style.zIndex = "1";
})
document.addEventListener("click", (event) => {
    if (!escaladeInfo.contains(event.target)) {
        carteInfosEscalade.style.opacity = "0"
    }
});

// VTT
const vttInfo = document.getElementById("vtt-info");
const carteInfosVtt = document.querySelector(".carte-infos-vtt");

vttInfo.addEventListener("click", () => {
    carteInfosVtt.style.opacity = "1";
    carteInfosVtt.style.zIndex = "1";
})
document.addEventListener("click", (event) => {
    if (!vttInfo.contains(event.target)) {
        carteInfosVtt.style.opacity = "0"
    }
});


// caroussel logement
const buttons = document.querySelectorAll(".btn-caroussel");
const slides = document.querySelectorAll(".slide");
buttons.forEach((button) => {
    // on écrit e pour récupérer sur quel bouton on clique 
    button.addEventListener("click", (e) => {
      const calcNextSlide = e.target.id === "next" ? 1 : -1;
      // si e.target.id est égal à "next" on renvoie 1 sinon -1
      const slideActive = document.querySelector(".active");
      // [...slides] représente mtn un tableau car entre [] et il est déconstruit
      // si calcNextslide = -1 qu'on ajoute la slide 1 on va avoir la slide active 0
      newIndex = calcNextSlide + [...slides].indexOf(slideActive);
      // on ajoute une condition si newIndew est < 0 alors il revient à la derniere longueur du tableau
      if (newIndex < 0) newIndex = [...slides].length - 1;
      // nouvelle condition pour l'auture côté, si newIndex est > à la longueur du tableau ici 2 alors tu le remet à zéro
      if (newIndex >= [...slides].length) newIndex = 0;
      slides[newIndex].classList.add("active");
      slideActive.classList.remove("active");
    });
  });

  const buttons2 = document.querySelectorAll(".btn-caroussel2");
  const slides2 = document.querySelectorAll(".slide2");
  buttons2.forEach((button) => {
      
      button.addEventListener("click", (e) => {
        const calcNextSlide2 = e.target.id === "next2" ? 1 : -1;
        
        const slideActive2 = document.querySelector(".active2");
        newIndex2 = calcNextSlide2 + [...slides2].indexOf(slideActive2);
        if (newIndex2 < 0) newIndex2 = [...slides2].length - 1;
    
        if (newIndex2 >= [...slides2].length) newIndex2 = 0;
        slides2[newIndex2].classList.add("active2");
        slideActive2.classList.remove("active2");
      });
    });

const buttons3 = document.querySelectorAll(".btn-caroussel3");
const slides3 = document.querySelectorAll(".slide3");
buttons3.forEach((button) => {
    
    button.addEventListener("click", (e) => {
      const calcNextSlide3 = e.target.id === "next3" ? 1 : -1;
      
      const slideActive3 = document.querySelector(".active3");
      newIndex3 = calcNextSlide3 + [...slides3].indexOf(slideActive3);
      if (newIndex3 < 0) newIndex3 = [...slides3].length - 1;
  
      if (newIndex3 >= [...slides3].length) newIndex3 = 0;
      slides3[newIndex3].classList.add("active3");
      slideActive3.classList.remove("active3");
    });
  });

const buttons4 = document.querySelectorAll(".btn-caroussel4");
const slides4 = document.querySelectorAll(".slide4");
buttons4.forEach((button) => {
    
    button.addEventListener("click", (e) => {
      const calcNextSlide4 = e.target.id === "next4" ? 1 : -1;
      
      const slideActive4 = document.querySelector(".active4");
      newIndex4 = calcNextSlide4 + [...slides4].indexOf(slideActive4);
      if (newIndex4 < 0) newIndex4 = [...slides4].length - 1;
  
      if (newIndex4 >= [...slides4].length) newIndex4 = 0;
      slides4[newIndex4].classList.add("active4");
      slideActive4.classList.remove("active4");
    });
  });