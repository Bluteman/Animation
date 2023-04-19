
/* ###################################################################### */
/*
* Script des différentes animations ! Enjoy :)
 */
/* ###################################################################### */




/* Animation type 1 (Animation 1) */
const txtAnim = document.querySelector('.changing-text')

new Typewriter(txtAnim, {
    loop : true,
    deleteSpeed : 70
    /* deleteSpeed : (10 rapide / deleteSpeed: 70 lent) */

})
    /* changeDelay : (10 rapide / changeDelay: 70 lent) */
    .changeDelay(90)
    .typeString("Animation'Bank")
    .pauseFor(1000)
    .deleteChars(14)
    .pauseFor(300)
    .typeString("Open Source")
    .pauseFor(1000)
    .deleteChars(11)
    .pauseFor(300)
    .typeString("Free")
    .pauseFor(1000)
    .deleteChars(4)
    .pauseFor(300)
    .start()

/* ###################################################################### */



/* Animation carrousel 1 (Animation 2) */
const swiper = new Swiper('.swiper', {
    // Optional parameters
    overflow: "hidden",
    slidesPerView: "auto",
    direction: 'horizontal',
    rewind: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
    }
});
/* ###################################################################### */




/* Animation carrousel 2 (Animation 3) */
const un = document.querySelector(".carteOne")
const deux = document.querySelector(".carteTwo")
const trois = document.querySelector(".carteThree")

let idInterval

let firstGroup = ["img/img1.jpg","img/img3.jpg","img/img3.jpg"]
let secondGroup = ["img/img4.jpg","img/img5.jpg","img/img6.png"]
let thirdGroup = ["img/img7.jpg","img/img8.jpg"]

let firstNum
let secondNum
let thirdNum

function randomNumberWihPic(data, option){
    if (option === 1){
        data = Math.floor(Math.random()* firstGroup.length)
    }
    else if (option === 2){
        data = Math.floor(Math.random()* secondGroup.length)
    }
    else if(option === 3){
        data = Math.floor(Math.random()*thirdGroup.length)
    }
    return data
}

function choosePic() {

    let one = randomNumberWihPic(firstNum,1)
    let two = randomNumberWihPic(secondNum,2)
    let three = randomNumberWihPic(thirdNum,3)

    un.style.backgroundImage = `url(${firstGroup[one]})`
    deux.style.backgroundImage = `url(${secondGroup[two]})`
    trois.style.backgroundImage = `url(${thirdGroup[three]})`
    un.classList.toggle("visible")
    deux.classList.toggle("visible")
    trois.classList.toggle("visible")
}

function infiniteAnimation(){
    if (!idInterval){
        setInterval(choosePic,5000)
    }
}
/* ###################################################################### */

