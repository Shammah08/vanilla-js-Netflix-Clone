const burger = document.querySelector('.burger');
const burgerNav = document.querySelector('.burger-nav');
const searchIcon = document.querySelector('.search-icon');
const searchSection = document.querySelector('.search-section');
const landingSection = document.querySelector('.landing-section');
const movieTitle = document.querySelector('#movie-title');
const tvShows = document.querySelectorAll('.show img');
const tvShowSection = document.querySelector('.tv-shows');
const arrows = document.querySelectorAll('.arrow');

const viewAnswer = document.querySelectorAll('.view-answer');

viewAnswer.forEach((answer) => {
    answer.addEventListener('click', () => {
        let activeAnswer = document.querySelector('.faq-answer-active');
        if (activeAnswer) {
            activeAnswer.classList.remove('faq-answer-active');
        }
        answer.parentNode.parentElement.lastElementChild.classList.toggle('faq-answer-active');
    })
})


// console.log(tvShows)
//BURGER NAVIGATION
burger.addEventListener('click', () => {
    burgerNav.classList.toggle('burger-nav-active');
    if (burgerNav.classList.value == 'burger-nav burger-nav-active') {
        landingSection.addEventListener('click', resizeNav)
        searchIcon.addEventListener('click', resizeNav)
        searchSection.classList.remove('search-section-active');
    }
});

function resizeNav() {
    burgerNav.classList.remove('burger-nav-active');
}


//SEARCH SECTION
searchIcon.addEventListener('click', () => {
    searchSection.classList.toggle('search-section-active');
});



//BACKGROUND TRANSITION
tvShows.forEach((show) => {
    show.addEventListener('click', (event) => {
        console.log(show)
        console.log(show.parentElement.children[1].innerHTML)
        console.log(movieTitle.innerHTML);
        const backGround = show.currentSrc;
        const showTitle = show.parentElement.children[1].innerHTML
        movieTitle.innerHTML = showTitle;
        const url = backGround.split('/')[4].split('.')[0];
        let largeUrl = String(url.slice(0, -5));
        landingSection.style.backgroundImage = `url(./img/${largeUrl}large.jpg)`;
    });
});

//HORIZONTAL SCROLL
// arrows.forEach((arrow) => {
//     arrow.addEventListener('click', (event) => {
//         console.log(event.target.classList[0])
//         switch (event.target.classList[0]) {
//             case 'right-arrow':
//                 console.log('right arrow');
//                 if(tvShowSection.style.transform){
//                     tvShowSection.style.transform = '';          
//                 }else{
//                     tvShowSection.style.transform = 'translateX(250px)';       
//                 }
//                 break
//             case 'left-arrow':
//                 if(tvShowSection.style.transform){
//                     tvShowSection.style.transform = '';          
//                 }else{
//                     tvShowSection.style.transform = 'translateX(-250px)';
//                 }
//                 console.log('left arrow');
//                 break

//         }
//     })
// })



