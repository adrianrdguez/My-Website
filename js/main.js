/*------ MENU SHOW Y HIDDEN ------*/
const   navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

/*------ MENU SHOW ------*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
        navToggle.style.visibility = 'hidden';
    })
}     

/*------ MENU HIDDEN ------*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
        navToggle.style.visibility = 'visible';
    })
} 

/*------ REMOVE MENU MOBILE ------*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
    navToggle.style.visibility = 'visible';
}
navLink.forEach(e => e.addEventListener('click', linkAction))


/*------ ACCORDION SKILLS ------*/


/*------ QUALIFICATION TABS ------*/


/*------ SERVICES MODAL ------*/


/*------ PORTFOLIO SWIPER  ------*/


/*------ TESTIMONIAL ------*/


/*------ SCROLL SECTIONS ACTIVE LINK ------*/


/*------ CHANGE BACKGROUND HEADER ------*/ 


/*------ SHOW SCROLL UP ------*/ 


/*------ DARK LIGHT THEME ------*/