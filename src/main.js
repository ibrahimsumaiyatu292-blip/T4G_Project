document.addEventListener('DOMContentLoaded', () => {

    
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    
    if(slides.length > 0) {
        
        slides[currentSlide].classList.add('active');
        
        setInterval(() => {
            
            slides[currentSlide].classList.remove('active');
            
            
            currentSlide = (currentSlide + 1) % slides.length;
            
            
            slides[currentSlide].classList.add('active');
        }, 5000); 
    }
    
    
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navButtons = document.querySelector('.nav-buttons');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            if(navButtons) navButtons.classList.toggle('active');
            
            
            const icon = hamburger.querySelector('i');
            if(icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    

});

