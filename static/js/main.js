window.onload = initialize
window.onscroll = scroll

let scrolled = false;
let counterIsPoppedUp = false;

let navMenu = document.querySelector("nav");
let counterYearsOfExperience = {
    text:"Év tapasztalat",
    value:20
};
let counterUniqueProjects = {
    text:"Egyedi Projekt",
    value:562
};
let counterDeliveredDevice = {
    text:"Leszállított eszköz",
    value:5437
};
let counterResponseTime = {
    text:"Válaszadási idő",
    value:6
};
let listOfCounterDatas = [counterYearsOfExperience, counterUniqueProjects, counterDeliveredDevice, counterResponseTime];

function initialize() {
    window.scrollTo(0,0);
    console.log("load");
}

function scroll() {
    
    if (window.scrollY >= 6 && scrolled === false) {
        navMenu.classList.remove("not-scrolled-nav");
        navMenu.classList.add("scrolled-nav");
        scrolled = true;
    } else if (window.scrollY <= 5 && scrolled) {
        navMenu.classList.remove("scrolled-nav");
        navMenu.classList.add("not-scrolled-nav");
        scrolled = false;
    }
    if(window.scrollY >=550){
        if (!counterIsPoppedUp){
            counterStart();
            counterIsPoppedUp = true;
        }

    }
}
function counterStart(){
    let searchCounterNumbers = document.querySelectorAll(".counter-digital-number");
    let searchTextForCounterNumbers = document.querySelectorAll(".counter-text-for-digital-number");

    for (let i in searchTextForCounterNumbers){

        for (let j in listOfCounterDatas)

        if(searchTextForCounterNumbers[i].textContent === listOfCounterDatas[j].text){
            countAnimation(searchCounterNumbers[i],searchTextForCounterNumbers[i],listOfCounterDatas[j].value)
        }
    }
}
async function countAnimation(content,text, num){
    if(text.textContent ==="Egyedi Projekt"){
        for (let k=0;k<=num;k+=5){
            await sleep(10);
            content.textContent = k;

        }
    }else if(text.textContent ==="Leszállított eszköz"){
        for (let k=0;k<=num;k+=50){
            await sleep(10);
            content.textContent = k;
        }
    }else{
        for (let k=0;k<=num;k++){
            await sleep(100);
            content.textContent = k;
        }
    }
}
function sleep(ms) {
    return new Promise(
        resolve => setTimeout(resolve, ms)
    );
}