// document.addEventListener("DOMContentLoaded", function() {
//     var showMoreBtn = document.getElementById('show-more-btn');
//     var productList = document.getElementById('product-list');

//     showMoreBtn.addEventListener('click', function() {
//         if (productList.style.display === "none" || productList.style.display === "") {
//             productList.style.display = "grid";  // Adjust according to your layout
//             showMoreBtn.textContent = "LOAD LESS PRODUCTS";
//         } else {
//             productList.style.display = "none";
//             showMoreBtn.textContent = "LOAD MORE PRODUCTS";
//         }
//     });
// });


let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');

nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick = function(){
    showSlider('prev');
}
let unAcceppClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    }else{
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(()=>{
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000)
}
seeMoreButtons.forEach((button) => {
    button.onclick = function(){
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
    }
});
backButton.onclick = function(){
    carousel.classList.remove('showDetail');
}