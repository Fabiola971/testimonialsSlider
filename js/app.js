const testimonys = [
    {
        id: 1,
        name: 'Tanya Sinclair',
        job: 'UX Engineer',
        img: 'images/image-tanya.jpg',
        text: ' “ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
    },
    {
        id: 2,
        name: 'John Tarkpor',
        job: 'Junior Front-end Developer',
        img: 'image-john.jpg',
        text: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',  
    }
];

// select slide
const tips = document.querySelector('.tips');
console.log(tips)
const n = document.querySelector('.name');
const job = document.querySelector('.job');
const img = document.querySelector('.view');

const slides = document.querySelectorAll('.slide');
console.log(icon)
const iconPrev = document.querySelector('.icon-prev');
const iconNext = document.querySelector('icon-next');

// set starting slide
let currentSlide = 0;

iconPrev.addEventListener('click', () =>{
    console.log('ok');
})

// load initial slide
window.addEventListener('DOMContentLoaded', () =>{
    console.log('Hello good morning');
    const item = testimonys[currentSlide];
    tips.textContent = item.text;
    n.textContent = item.name;
    job.textContent = item.job;
    img.src = item.img;
});


// first view
function showPerson(person){
    const item = testimonys[person];
    tips.textContent = item.text;
    n.textContent = item.name;
    job.textContent = item.job;
    img.src = item.img;
}
