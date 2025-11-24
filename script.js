let firstQ = document.getElementById('firstQ')
let firstP = document.getElementById('firstP')
let button = document.getElementById('btn')
let buttonImg = document.getElementById('buttonImg')

firstQ.addEventListener('click', showHide)
button.addEventListener('click', showHide)

function showHide(){
    if(firstP.style.display === 'block'){
        firstP.style.display = 'none'
        buttonImg.src = "assets/images/icon-plus.svg"
    } else{
        firstP.style.display = 'block'
        buttonImg.src = "assets/images/icon-minus.svg"
    }
}

//----//

let secondQ = document.getElementById('secondQ')
let secondP = document.getElementById('secondP')
let btn2 = document.getElementById('btn2')
let secondButtonImg = document.getElementById('secondButtonImg')

secondQ.addEventListener('click', showHideSecond)
btn2.addEventListener('click', showHideSecond)

function showHideSecond(){
    if(secondP.style.display === 'block'){
        secondP.style.display = 'none'
        secondButtonImg.src = "assets/images/icon-plus.svg"
    } else{
        secondP.style.display = 'block'
        secondButtonImg.src = "assets/images/icon-minus.svg"
    }
}

//----//

let thirdQ = document.getElementById('thirdQ')
let thirdP = document.getElementById('thirdP')
let btn3 = document.getElementById('btn3')
let thirdButtonImg = document.getElementById('thirdButtonImg')

thirdQ.addEventListener('click', showHideThird)
btn3.addEventListener('click', showHideThird)

function showHideThird(){
    if(thirdP.style.display === 'block'){
        thirdP.style.display = 'none'
        thirdButtonImg.src = "assets/images/icon-plus.svg"
    } else{
        thirdP.style.display = 'block'
        thirdButtonImg.src = "assets/images/icon-minus.svg"
    }
}

//----//

let fourthQ = document.getElementById('fourthQ')
let fourthP = document.getElementById('fourthP')
let btn4 = document.getElementById('btn4')
let fourthButtonImg = document.getElementById('fourthButtonImg')

fourthQ.addEventListener('click', showHideFourth)
btn4.addEventListener('click', showHideFourth)

function showHideFourth(){
    if(fourthP.style.display === 'block'){
        fourthP.style.display = 'none'
        fourthButtonImg.src = "assets/images/icon-plus.svg"
    } else{
        fourthP.style.display = 'block'
        fourthButtonImg.src = "assets/images/icon-minus.svg"
    }
}

