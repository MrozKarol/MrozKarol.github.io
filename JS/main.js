
const spnText = document.querySelector('span');
const spnCoursor = document.querySelector('.cursor');
const time = 100
const text = 'Cześć !, strona w przebudowie wróć proszę za kilka dni ;) pozdrawiam Karol'

let indexText = 0;
const addLetter = () => {
    spnText.textContent += text[indexText];
    indexText++
    if (indexText === text.length) {
        clearInterval(indexTyping)
    }
    // console.log(indexText)
}

const coursorAnimation = () => {
    spnCoursor.classList.toggle('active');
    if (indexText === text.length) {
        spnCoursor.classList.remove('active')
        clearInterval(coursor)

    }
    
}

const indexTyping = setInterval(addLetter, time);

const coursor = setInterval(coursorAnimation, 200)