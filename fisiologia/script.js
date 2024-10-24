"use strict"
const txt1 = "Feliz Aniversário, ";
const outputTxt1 = document.querySelector(".output-text1");
const txt2 = 'meu Amor (❤), Esposa (💑) e Mãe do meu filho (💞)! Deus queira que o dia 23 de Outubro deste ano seja apenas um de muitos vindouros nos próximos "Mil Anos". Que não te falte ';
const outputTxt2 = document.querySelector(".output-text2");
const txt3 = "fé, esperança, lealdade, sucesso, prosperidade, amizades verdadeiras e saúde sobretudo."
const outputTxt3 = document.querySelector(".output-text3");
const txt4 = "De: ";
const outputTxt4 = document.querySelector(".output-text4");
const txt5 = "Adérito Félix Quinamine."
const outputTxt5 = document.querySelector(".output-text5");
const txt6 = "O mês de Outubro é todo seu."
const outputTxt6 = document.querySelector(".output-text6");
let txtIndex1 = 0;
let txtLen1 = txt1.length;
function autoDigitacao1() {
    if(txtIndex1 < txtLen1) {
        outputTxt1.textContent += txt1[txtIndex1];
        txtIndex1++;
        setTimeout(autoDigitacao1, 150);
    } else if(txtIndex2 < txtLen2) {
        outputTxt2.textContent += txt2[txtIndex2];
        txtIndex2++;
        setTimeout(autoDigitacao1, 150);
    } else if(txtIndex3 < txtLen3) {
            outputTxt3.textContent += txt3[txtIndex3];
            txtIndex3++;
            setTimeout(autoDigitacao1, 150);
        
    } else if(txtIndex4 < txtLen4) {
        outputTxt4.textContent += txt4[txtIndex4];
        txtIndex4++;
        setTimeout(autoDigitacao1, 150);
    } else if(txtIndex5 < txtLen5) {
        outputTxt5.textContent += txt5[txtIndex5];
        txtIndex5++;
        setTimeout(autoDigitacao1, 150);
    } else if(txtIndex6 < txtLen6) {
        outputTxt6.textContent += txt6[txtIndex6];
        txtIndex6++;
        setTimeout(autoDigitacao1, 150);
    }
    
}
setTimeout(autoDigitacao1, 150);

let txtIndex2 = 0;
let txtLen2 = txt2.length;
let txtIndex3 = 0;
let txtLen3 = txt3.length;
let txtIndex4 = 0;
let txtLen4 = txt4.length;
let txtIndex5 = 0;
let txtLen5 = txt5.length;
let txtIndex6 = 0;
let txtLen6 = txt6.length;
// Banner rotativo
let imgIndex = 1;
const imgs = document.querySelectorAll(".banner__img");
const progressCircles = document.querySelectorAll(".banner__progress__btn");

// Change Image Slide by click
progressCircles.forEach( pCircle => {
    pCircle.addEventListener("click", () => {
        for (let i = 0; i < progressCircles.length; i++) {
            if(progressCircles[i] === pCircle) {
                imgIndex = i;
            }
        }
    });
})

function slide() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].classList.remove("banner__img--current");
        progressCircles[i].classList.remove("banner__progress__btn--full");
    }
    imgs[imgIndex].classList.add("banner__img--current");
    progressCircles[imgIndex].classList.add("banner__progress__btn--full")
    imgIndex++;
    if(imgIndex === imgs.length) {
        imgIndex = 0;
    }
}
// Call slide on load
let slideInterval = setInterval(slide, 2500);
if(window.innerWidth > 425) {
    clearInterval(slideInterval);
}
// Call slide on resize the window
window.addEventListener("resize", () => {
    clearInterval(slideInterval);
    if(window.innerWidth <= 425) {
        slideInterval = setInterval(slide, 3000);
    }
});
// Call slide on scroll and Clear interval when the banner is out of viewport
window.addEventListener("scroll", () => {
    clearInterval(slideInterval);
    const banner = document.querySelector(".banner");
    let bannerPosition = banner.getBoundingClientRect();
    let bannerIsOnViewPort = bannerPosition.bottom > 90;

    if(bannerIsOnViewPort && window.innerWidth <= 425) {
        slideInterval = setInterval(slide, 3000);
    }
});

