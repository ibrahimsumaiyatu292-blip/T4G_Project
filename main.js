document.addEventListener('DOMContentLoaded', () => {

    /* --- Slideshow Logic --- */
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    // Auto slideshow if slides exist
    if(slides.length > 0) {
        // Init first slide
        slides[currentSlide].classList.add('active');
        
        setInterval(() => {
            // Remove active class from current
            slides[currentSlide].classList.remove('active');
            
            // Move to next slide, loop back
            currentSlide = (currentSlide + 1) % slides.length;
            
            // Add active class to new current
            slides[currentSlide].classList.add('active');
        }, 5000); // Change image every 5 seconds
    }
    
    /* --- Mobile Navigation Toggle --- */
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navButtons = document.querySelector('.nav-buttons');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            if(navButtons) navButtons.classList.toggle('active');
            
            // Simple animation for hamburger icon
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

    /* --- WhatsApp Floating Widget --- */
    const whatsappBtn = document.createElement('a');
    whatsappBtn.href = "https://wa.me/233537479080";
    whatsappBtn.target = "_blank";
    whatsappBtn.className = "whatsapp-float";
    whatsappBtn.innerHTML = '<i class="fa-brands fa-whatsapp"></i>';
    document.body.appendChild(whatsappBtn);

});
