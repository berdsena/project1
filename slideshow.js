const next = document.querySelector('.next');//assigning a variable for the next button on the slide show
const prev = document.querySelector('.prev');//assigning a variable for the previous button on the slide show
const slides = document.querySelectorAll('.slide');//a matrix contains all the slides
const index = document.querySelectorAll('.dot');//a matrix contains all the dots below the slides
let slideNr=0;//default value referring to the first slide

changeSlide(slideNr,slides);

//the changeSlide function hides all slides and shows only the specific slide
function changeSlide (nr,array){
    for(let i=0;i<array.length;i++){
        array[i].style.display = 'none';
    }
    array[nr].style.display = 'flex';
}

//the goNext function adds one to the value of the current index
function goNext (){
    slideNr++;
    if(slideNr === index.length){slideNr = 0;};//then sets to the first value if the last value has been reached
    changeSlide(slideNr,slides);
}

//the goBack function substracts one from the value of the current index
function goBack (){
    slideNr--;
    if(slideNr < 0){slideNr += index.length;};//then sets to the last value if the first value has been reached
    changeSlide(slideNr,slides);
}

next.addEventListener('click', goNext);
prev.addEventListener('click', goBack);
//next are event listenera to all the dots
for (let i = 0; i<index.length;i++) {
    index[i].addEventListener('click',()=>{changeSlide(i,slides)});
}