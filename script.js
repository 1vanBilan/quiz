"use strict";

const Name = document.querySelector('.name'),
    questionParent = document.querySelector('.questions'),
    question = document.querySelectorAll('.question'),
    hide = document.querySelector('.hide'),
    result = document.querySelector('.result'),
    time = document.querySelector('.time'),
    num = document.querySelector('.num'),
    repeat = document.querySelector('.next'),
    answersParent = document.querySelector('.answers'),
    True = document.querySelector('.true'),
    False = document.querySelector('.false'),
    start = document.querySelector('.start');

const timeStart = new Date();

start.addEventListener('click', () => {
    start.classList.add('hide');
    questionParent.classList.remove('hide');
    answersParent.classList.remove('hide');
});

let res = 0,
    sen = 0;

function showNextQuestion(n) {
    if(n<5){
        question[n].classList.remove('hide');
    }
    question[n - 1].classList.add('hide');
}

True.addEventListener('click', () => {
    if (question[sen].classList.contains('tr')) {
        res++;
    }
    sen++;
    showNextQuestion(sen);
    showResult(sen);
    // if(sen > 4){
    //     console.log(res);
    // }
});
False.addEventListener('click', () => {
    if (question[sen].classList.contains('fa')) {
        res++;
    }
    sen++;
    showNextQuestion(sen);
    showResult(sen);
    // if(sen == 5){
    //     console.log(res);
    // }
});

function showResult(i){
    if (i == 5){
        questionParent.classList.add('hide');
        answersParent.classList.add('hide');
       result.classList.remove('hide'); 
       num.textContent = `${res}/5`;
       const timeEnd = new Date();
       const resTime = Math.floor((timeEnd - timeStart)/1000);
       time.textContent = resTime;
    }    
}

repeat.addEventListener('click', ()=>{
    window.location.reload();
});





