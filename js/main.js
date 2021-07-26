/*------ MENU SHOW Y HIDDEN ------*/
const   navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

/*------ MENU SHOW ------*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.style.bottom = 0;
        navToggle.style.visibility = 'hidden';
    })
}     

/*------ MENU HIDDEN ------*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.style.bottom = '-100%';
        navToggle.style.visibility = 'visible';
    })
} 

/*------ REMOVE MENU MOBILE ------*/


/*------ ACCORDION SKILLS ------*/


/*------ QUALIFICATION TABS ------*/


/*------ SERVICES MODAL ------*/


/*------ PORTFOLIO SWIPER  ------*/


/*------ TESTIMONIAL ------*/


/*------ SCROLL SECTIONS ACTIVE LINK ------*/


/*------ CHANGE BACKGROUND HEADER ------*/ 


/*------ SHOW SCROLL UP ------*/ 


/*------ DARK LIGHT THEME ------*/