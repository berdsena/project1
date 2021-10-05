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
        this.changeSlide(this.currentSlide);
    }
    changeSlide (n){
        this.currentSlide=n;
        for(let i=0;i<this.slidesArray.length;i++){
            this.slidesArray[i].style.display = 'none';
        }
        this.slidesArray[this.currentSlide].style.display = 'flex';
    }
    goBack (){
        this.currentSlide--;
        if(this.currentSlide < 0){this.currentSlide += this.slidesIndex.length;};//then sets to the last value if the first value has been reached
        this.changeSlide(this.currentSlide);
    }
    goNext (){
        this.currentSlide++;
        if(this.currentSlide === this.slidesIndex.length){this.currentSlide = 0;};//then sets to the first value if the last value has been reached
        this.changeSlide(this.currentSlide);
    }
    nav (i) {
        if (i == 0){
            this.goBack()
        } else{this.goNext()}
    }
    ind (n) {
        this.changeSlide(n);
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
                        rss[area][type][i].addEventListener('click',()=>{beCarousel.nav(i)});
                        break;
                    case 'do':
                        rss[area][type][i].addEventListener('click',()=>{doCarousel.nav(i)});
                        break;
                    default:
                        rss[area][type][i].addEventListener('click',()=>{goCarousel.nav(i)});
                };
            } else if (type === 'ind') {
                switch (area){
                    case 'be':
                        rss[area][type][i].addEventListener('click',()=>{beCarousel.ind(i)});
                        break;
                    case 'do':
                        rss[area][type][i].addEventListener('click',()=>{doCarousel.ind(i)});
                        break;
                    default:
                        rss[area][type][i].addEventListener('click',()=>{goCarousel.ind(i)});
                };                
            };
        };
    };
};