const hotelSlide = document.querySelector('.hotel-slide');
const hotelImages = document.querySelectorAll('.hotel-slide img');


//buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');



//counter
let counter = 1;
const size = hotelImages[0].clientWidth;
hotelSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';




//button listeners
nextBtn.addEventListener('click',()=>{
    if(counter >= hotelImages.length -1) return;
    
hotelSlide.style.transition = "transform 0.4s ease-in-out";
counter++;
hotelSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});


prevBtn.addEventListener('click',()=>{
    if (counter<= 0) return;
    hotelSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    hotelSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    hotelSlide.addEventListener('transitionend' , () => {
        if (hotelImages[counter].id === 'lastClone'){
        hotelSlide.style.transition = "none";
        counter = hotelImages.length -2;
        hotelSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (hotelImages[counter].id === 'firstClone'){
        hotelSlide.style.transition = "none";
        counter = hotelImages.length - counter;
        hotelSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    })
    