
// Stała dotycząca przycisku startujhącego/kończącego quiz
const btnStartorStop=document.querySelector('button.quizStartStop');
// Stała dotycząca wysyłki formularza
const btnForm=document.querySelector('input.buttonForm');

// Stałe dotyczące wyświetlania elementów

const formVisible=document.querySelector('form.form');
const h2AskVisible=document.querySelector('div.question>h1');
const pAskVisible=document.querySelector('div.question>p');

// Stałe dotyczące zawartości odpowiedzi
const firstAnswer1=document.querySelector('label.question1');
const firstAnswer2=document.querySelector('label.question2');
const firstAnswer3=document.querySelector('label.question3');
const firstAnswer4=document.querySelector('label.question4');

// Stałe dotyczące zawartości pytania i kategorii pytania
const h1Ask=document.querySelector('div.question>h1');
const pAsk=document.querySelector('div.question>p.content');

// Stałe dotyczące wartości procentowych pasków
const resultValueLeft1=document.querySelector('h3.leftVaule1');
const resultValueRight1=document.querySelector('h3.rightVaule1');

const resultValueLeft2=document.querySelector('h3.leftVaule2');
const resultValueRight2=document.querySelector('h3.rightVaule2');

const resultValueLeft3=document.querySelector('h3.leftVaule3');
const resultValueRight3=document.querySelector('h3.rightVaule3');

const resultValueLeft4=document.querySelector('h3.leftVaule4');
const resultValueRight4=document.querySelector('h3.rightVaule4');

const resultValueLeft5=document.querySelector('h3.leftVaule5');
const resultValueRight5=document.querySelector('h3.rightVaule5');

// Stałe dotyczące szerokości pasków - reprezentacja wizualna wartosći

const widthResultLeft1=document.querySelector('div.valueLeft1');
const widthResultRight1=document.querySelector('div.valueRight1');

const widthResultLeft2=document.querySelector('div.valueLeft2');
const widthResultRight2=document.querySelector('div.valueRight2');

const widthResultLeft3=document.querySelector('div.valueLeft3');
const widthResultRight3=document.querySelector('div.valueRight3');

const widthResultLeft4=document.querySelector('div.valueLeft4');
const widthResultRight4=document.querySelector('div.valueRight4');

const widthResultLeft5=document.querySelector('div.valueLeft5');
const widthResultRight5=document.querySelector('div.valueRight5');


const visibleAllCards = document.querySelector('div.allcards');

// Funkcja obsługująca przycisk rozpoczęcia/zakończenia quizu
const changeStateButton = function(){
    btnStartorStop.classList.toggle('quizStop');
    
    if(btnStartorStop.textContent=='start'){
        btnStartorStop.textContent='stop';
        
        h2AskVisible.style.display="flex";
        pAskVisible.style.display="flex";

        formVisible.style.display="flex";
    }else{
        btnStartorStop.textContent='start';
        
        h2AskVisible.style.display="none";
        pAskVisible.style.display="none";

        formVisible.style.display="none";
    }
}
btnStartorStop.addEventListener('click',changeStateButton);

//------------------------------------------------------------

/*
---------------
FUNKCJA TESTOWA - nie dotykać, bo wybuchnie
---------------


btnStartorStop.addEventListener('click',function(){
    if(btnStartorStop.textContent=='start'){
        widthResultLeft1.style.width="50%"
        widthResultRight1.style.width="50%"
        resultValueLeft1.textContent="50"
        resultValueRight1.textContent="50"

    }else{
        widthResultLeft1.style.width="40%"
        widthResultRight1.style.width="60%"
        resultValueLeft1.textContent="40"
        resultValueRight1.textContent="60"
        
    }
    
})

*/