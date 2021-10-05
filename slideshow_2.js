// const next = document.querySelector('.next');//assigning a variable for the next button on the slide show
// const prev = document.querySelector('.prev');//assigning a variable for the previous button on the slide show
// const slides = document.querySelectorAll('.slide');//a matrix contains all the slides
// const index = document.querySelectorAll('.dot');//a matrix contains all the dots below the slides
// let slideNr=0;//default value referring to the first slide

// changeSlide(slideNr,slides);

// //the changeSlide function hides all slides and shows only the specific slide
// function changeSlide (nr,array){
//     for(let i=0;i<array.length;i++){
//         array[i].style.display = 'none';
//     }
//     array[nr].style.display = 'flex';
// }

// //the goNext function adds one to the value of the current index
// function goNext (){
//     slideNr++;
//     if(slideNr === index.length){slideNr = 0;};//then sets to the first value if the last value has been reached
//     changeSlide(slideNr,slides);
// }

// //the goBack function substracts one from the value of the current index
// function goBack (){
//     slideNr--;
//     if(slideNr < 0){slideNr += index.length;};//then sets to the last value if the first value has been reached
//     changeSlide(slideNr,slides);
// }

// next.addEventListener('click', goNext);
// prev.addEventListener('click', goBack);
// next are event listenera to all the dots
// for (let i = 0; i<index.length;i++) {
//     index[i].addEventListener('click',()=>{changeSlide(i,slides)});
// }

const rss = {
    be : {
        sld : document.querySelectorAll('.beCarousel .slide'),
        nav : document.querySelectorAll('.beCarousel .prev,.beCarousel .next'),
        ind : document.querySelectorAll('.beCarousel .dot'),
    },
    do : {
        sld : document.querySelectorAll('.doCarousel .slide'),
        nav : document.querySelectorAll('.doCarousel .prev,.doCarousel .next'),
        ind : document.querySelectorAll('.doCarousel .dot'),
    },
    go : {
        sld : document.querySelectorAll('.goCarousel .slide'),
        nav : document.querySelectorAll('.goCarousel .prev,.goCarousel .next'),
        ind : document.querySelectorAll('.goCarousel .dot'),
    }
}

class Slide {
    constructor(slidesArray,slidesIndex,currentSlide,prev,next){
        this.slidesArray = slidesArray;
        this.slidesIndex = slidesIndex;
        this.currentSlide = currentSlide;
        this.prev = prev;
        this.next = next;
        this.changeSlide();
    }
    changeSlide (){
        for(let i=0;i<this.slidesArray.length;i++){
            this.slidesArray[i].style.display = 'none';
        }
        this.slidesArray[this.currentSlide].style.display = 'flex';
    }
    goBack (){
        this.currentSlide--;
        if(this.currentSlide < 0){this.currentSlide += this.slidesIndex.length;};//then sets to the last value if the first value has been reached
        this.changeSlide();
    }
    goNext (){
        this.currentSlide++;
        if(this.currentSlide === this.slidesIndex.length){this.currentSlide = 0;};//then sets to the first value if the last value has been reached
        this.changeSlide();
    }
}

const beCarousel = new Slide (rss['be']['sld'],rss['be']['ind'],0,rss['be']['nav'][0],rss['be']['nav'][1]);
const doCarousel = new Slide (rss['do']['sld'],rss['do']['ind'],0,rss['do']['nav'][0],rss['do']['nav'][1]);
const goCarousel = new Slide (rss['go']['sld'],rss['go']['ind'],0,rss['go']['nav'][0],rss['go']['nav'][1]);

for (let area in rss){
    for(let type in rss[area]){
        for(let i = 0; i<rss[area][type].length; i++){
            if(type === 'nav'){
                switch (area){
                    case 'be':
                        rss[area][type][i].addEventListener('click',beCarousel.changeSlide);
                        break;
                    case 'do':
                        rss[area][type][i].addEventListener('click',doCarousel.changeSlide);
                        break;
                    default:
                        rss[area][type][i].addEventListener('click',goCarousel.changeSlide);
                }
                switch (area){
                    case 'be':
                        rss[area][type][i].addEventListener('click',()=>{beCarousel.currentSlide = i; changeSlide});
                        break;
                    case 'do':
                        rss[area][type][i].addEventListener('click',()=>{doCarousel.currentSlide = i; changeSlide});
                        break;
                    default:
                        rss[area][type][i].addEventListener('click',()=>{goCarousel.currentSlide = i; changeSlide});
                };                
            };
        };
    };
};