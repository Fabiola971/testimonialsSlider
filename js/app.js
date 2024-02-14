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
        img: 'images/image-john.jpg',
        text: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',  
    }
];

// select slide
const tips = document.querySelector('.tips');
console.log(tips)
const n = document.querySelector('.name');
const job = document.querySelector('.job');
const img = document.querySelector('.view');

const iconPrev = document.querySelectorAll('.icon-prev');
const iconNext = document.querySelectorAll('.icon-next');
const slides = document.querySelectorAll(".slide");
// set starting slide
let currentSlide = 0;

// load initial slide
window.addEventListener('DOMContentLoaded',  () =>{
    console.log('Hello good morning');
    const item = testimonys[currentSlide];
    tips.textContent = item.text;
    n.textContent = item.name;
    job.textContent = item.job;
    img.src = item.img;
});

// view
function showPerson(person){
    const item = testimonys[person];
    tips.textContent = item.text;
    n.textContent = item.name;
    job.textContent = item.job;
    img.src = item.img;
}  

let counter = 0;

  slides.forEach( (slide, index) =>{
    slide.style.left = `${index * 100}%`;

    iconNext[index].addEventListener("click",  () => {
      counter++;
      carousel();
      showPerson(index);
    });
  
    iconPrev[index].addEventListener("click",  () => {
      counter--;
      carousel();
      showPerson(index);
    });
  });

  function carousel() {
    // working with slides
    if (counter === slides.length) {
       counter = 0;
     }
    if (counter < 0) {
       counter = slides.length - 1;
     }
     
    slides.forEach( (slide) =>{
      slide.style.transform = `translateX(-${counter * 100}%)`;
    });

  }
  

  