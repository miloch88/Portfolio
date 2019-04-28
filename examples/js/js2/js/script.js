const slideList = [{
        img: 'img/img1.jpg',
        text: 'Pierwszy tekst'
    },
    {
        img: 'img/img2.jpg',
        text: 'Drugi tekst'
    },
    {
        img: 'img/img3.jpg',
        text: 'Trzeci tekst'
    }
];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')]

const time = 5000;
let active = 0;

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

const changeSlide = () => {
    active++;
    if (active === slideList.length) active = 0;
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();
}

const keyChangeSlide = (e) => {
    if (e.keyCode == 37 || e.keyCode == 39) {
        clearInterval(indexInterval)
        e.keyCode == 37 ? active-- : active++;
        if (active === slideList.length) {
            active = 0;
        } else if (active < 0) {
            active = slideList.length - 1;
        }
    }

    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();
    indexInterval = setInterval(changeSlide, time);
}

let indexInterval = setInterval(changeSlide, time);
window.addEventListener('keydown', keyChangeSlide);


document.querySelector('.dots').addEventListener('click', (e) => {
    const index = Array.from(dots).indexOf(e.target);
    if (index === -1) return;
    clearInterval(indexInterval);
    active = index;

    //resetowanie animacji
    image.classList.remove('anime');
    void image.offsetWidth;
    image.classList.add('anime');

    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();

    indexInterval = setInterval(changeSlide, time);
    
})