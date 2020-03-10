
const textTyping = () => {
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
}

const navSide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //Togle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 2 + 0.5}s`
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');
    });


}

const footerDate = () =>{
    const date = document.querySelector('footer p')
    date.innerHTML= `2018 -${new Date().getFullYear()} :)`
}

textTyping()
navSide()
footerDate()