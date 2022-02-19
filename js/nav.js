$(document).ready(function(){

nav=document.querySelector('.navbar');

document.addEventListener('scroll', function(e){
    if (window.scrollY > nav.offsetTop) {

        nav.classList.add('sticky')
        
        
    }
    else{
        nav.classList.remove('sticky')
    }
 
    
})


})
