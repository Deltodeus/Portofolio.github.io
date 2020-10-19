// show menu
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

// remove mobile menu
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// scroll section punya link active
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

// slideshow lawbile
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

// Slide self development
var slideIndex2 = 1;
showDivs2(slideIndex2);

function plusDivss(n) {
  showDivs2(slideIndex2 += n);
}

function currentDiv2(n) {
  showDivs2(slideIndex2 = n);
}

function showDivs2(n) {
  var i;
  var x = document.getElementsByClassName("mySlides2");
  if (n > x.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex2-1].style.display = "block";  
}

// Slide SelfDevelopment
var slideIndex3 = 1;
showDivs3(slideIndex2);

function plusDivsss(n) {
  showDivs3(slideIndex3 += n);
}

function currentDiv3(n) {
  showDivs3(slideIndex3 = n);
}

function showDivs3(n) {
  var i;
  var x = document.getElementsByClassName("mySlides3");
  if (n > x.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex3-1].style.display = "block";  
}


// Slide Desain
var slideIndex4 = 1;
showDivs4(slideIndex4);

function plusDivs1(n) {
  showDivs4(slideIndex4 += n);
}

function currentDiv4(n) {
  showDivs4(slideIndex4 = n);
}

function showDivs4(n) {
  var i;
  var x = document.getElementsByClassName("mySlides4");
  if (n > x.length) {slideIndex4 = 1}
  if (n < 1) {slideIndex4 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex4-1].style.display = "block";  
}

// Slide Sertifikat
var slideIndex5 = 1;
showDivs5(slideIndex5);

function plusDiv(n) {
  showDivs5(slideIndex5 += n);
}

function currentDiv5(n) {
  showDivs5(slideIndex5 = n);
}

function showDivs5(n) {
  var i;
  var x = document.getElementsByClassName("mySlides5");
  if (n > x.length) {slideIndex5 = 1}
  if (n < 1) {slideIndex5 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex5-1].style.display = "block";  
}

//Animation
const sr = ScrollReveal({
    origin: 'Top',
    distance: '80px',
    duration: 2000,
    reset: true
})

// Animation home
sr.reveal('.home_title',{})
sr.reveal('.home_scroll',{delay:200})
sr.reveal('.home_img',{origin:'right', delay:400})

// Animation about
sr.reveal('.about_img',{delay:400})
sr.reveal('.about_subtitle',{delay:200})
sr.reveal('.about_profession',{delay:300})
sr.reveal('.about_text',{delay:400})
sr.reveal('.about_social-icon',{delay:500, interval:200})

// Animation skills
sr.reveal('.skills_subtitle',{})
sr.reveal('.skills_name',{distance: '20px', delay:50, interval:100})
sr.reveal('.skills_img',{delay:400})

// Animation portofolio
sr.reveal('.portofolio_img',{interval:200})

// Animation contact
sr.reveal('contact_subtitle',{})
sr.reveal('contact_text',{interval:200})
sr.reveal('contact_input',{delay:400})
sr.reveal('contact_button',{interval:200})