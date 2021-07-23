var  language = "español";

/*-- Enseñar Menu --*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*-- Activar Desactivar --*/
const navLink = document.querySelectorAll('.nav-link');   

function linkAction(){
  /*-- Activar Link --*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*-- Quitar Menu de Movil --*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*-- Scroll Animation --*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1500,
    reset: true
});

/*-- Scroll Inicio --*/
sr.reveal('.home-title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home-img',{delay: 400}); 
sr.reveal('.home-social-icon',{ interval: 200}); 

/*-- Scroll Sobre Mí --*/
sr.reveal('.about-img',{}); 
sr.reveal('.about-subtitle',{delay: 400}); 
sr.reveal('.about-text',{delay: 400}); 

/*-- Scroll Habilidades --*/
sr.reveal('.skills-subtitle',{}); 
sr.reveal('.skills-text',{}); 
sr.reveal('.skills-data',{interval: 200}); 
sr.reveal('.skills-img',{delay: 600});

/*-- Scroll Proyectos --*/
sr.reveal('.proyects-img',{interval: 200}); 

/*-- Scroll Contacto --*/
sr.reveal('.contact-input',{interval: 200}); 

/*-- Download CV --*/
var link = document.createElement('a');
link.href = url;
link.download = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
link.dispatchEvent(new MouseEvent('click'));

/*-- Language --*/
function change(){
    if(language == "hola"){
        document.getElementById("español").hidden = true;
        document.getElementById("english").hidden = false;
        language = "adios";
    }else{
        document.getElementById("español").hidden = true;
        document.getElementById("english").hidden = false;
        language = "hola";
    }
}