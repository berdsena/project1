const next = document.querySelector('.next');//assigning a variable for the next button on the slide show
const prev = document.querySelector('.prev');//assigning a variable for the previous button on the slide show
const slides = document.querySelectorAll('.slide');//a matrix contains all the slides
const index = document.querySelectorAll('.index');//a matrix contains all the dots below the slides
let indexNr=0;//default value for the index of the first slide
changeSlide(indexNr);
//the changeSlide function hides all slides and shows only the specific slide
function changeSlide (indexNr){
    for(let i=0;i<slides.length;i++){
        slides[i].style.display = 'none';
    }
    slides[indexNr].style.display = 'flex';
}
//the goNext function adds one to the value of the current index
function goNext (){
    indexNr++;
    if(indexNr === index.length){indexNr = 0;};//then sets to the first value if the last value has been reached
    changeSlide(indexNr);
}
//the goBack function substracts one from the value of the current index
function goBack (){
    indexNr--;
    if(indexNr < 0){indexNr += index.length;};//then sets to the last value if the first value has been reached
    changeSlide(indexNr);
}

next.addEventListener('click', goNext);
prev.addEventListener('click', goBack);
//next are event listenera to all the dots
for (let i = 0; i<index.length;i++){
    index[i].addEventListener('click',()=>{changeSlide(i)});
}