const testimonys = [
    {
        id: 1,
        name: 'Tanya Sinclair',
        job: 'UX Engineer',
        img: 'image-tanya.jpg',
        tips: ' “ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
    },
    {
        id: 2,
        name: 'John Tarkpor',
        job: 'Junior Front-end Developer',
        img: 'image-john.jpg',
        tips: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',  
    }
];
// const slide
const tips = document.getElementsByClassName('tips');
console.log(tips)
const n = document.getElementsByClassName('name');
const job = document.getElementsByClassName('job');
const img = document.getElementsByClassName('view');


// const button
const articles = document.getElementsByTagName('article');
console.log(articles);
let currentSlide = 0;
const icon = document.querySelectorAll('.icon');
console.log(icon)
const iconPrev = document.querySelector('.icon-prev');

const iconNext = document.querySelector('icon-next');

iconPrev.addEventListener('click', () =>{
    // articles[currentSlide].classList.add('moveLeft');
    console.log('ok');
})

/*
let currentSlide = 0;
const item = testimonys[currentSlide];
    tips.textContent = item.tips;
    n.textContent = item.name;
    job.innerHtml = item.job;
    img.src = item.img;
window.addEventListener('DOMContentLoaded', () =>{
    console.log('Hello good morning');
    // preview();
    const item = testimonys[currentSlide];
    tips.textContent = item.tips;
    n.textContent = item.name;
    job.innerHtml = item.job;
    img.src = item.img;
});

// first view

function preview(){
    const item = testimonys[currentSlide];
    tips.textContent = item.tips;
    n.textContent = item.name;
    job.textContent = item.job;
    img.src = item.img;
}
*/