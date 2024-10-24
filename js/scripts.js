/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

window.addEventListener('DOMContentLoaded', event => {
    // Function to alternate text between "product" and "solution"
    const dynamicTextElement = document.getElementById('dynamicText');
    const texts = ["product", "solution"];
    let index = 0;

    setInterval(() => {
        index = (index + 1) % texts.length;  // Toggle between 0 and 1
        dynamicTextElement.textContent = texts[index];  // Change the text
    }, 1500);  // Every 2 seconds
});

document.addEventListener('DOMContentLoaded', function() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    portfolioItems.forEach(item => {
        const video = item.querySelector('.portfolio-video');
        
        item.addEventListener('mouseenter', () => {
            if (video) {
                video.play();
            }
        });

        item.addEventListener('mouseleave', () => {
            if (video) {
                video.pause();
                video.currentTime = 0; // Reset video to start when leaving hover
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Hide any solid play icon
    const solidIcons = document.querySelectorAll('.fa-solid.fa-circle-play');
    solidIcons.forEach(icon => {
        icon.style.display = 'none'; // Hide solid icons
    });

    // Portfolio video hover functionality
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    portfolioItems.forEach(item => {
        const video = item.querySelector('.portfolio-video');
        
        item.addEventListener('mouseenter', () => {
            if (video) {
                video.play();
            }
        });

        item.addEventListener('mouseleave', () => {
            if (video) {
                video.pause();
                video.currentTime = 0; // Reset video to start when leaving hover
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Hide any solid play icon
    const solidIcons = document.querySelectorAll('.fa-solid.fa-circle-play');
    solidIcons.forEach(icon => {
        icon.style.display = 'none'; // Hide solid icons
    });

    const portfolioItems = document.querySelectorAll('.portfolio-item');

    // Function to enable or disable hover based on screen size
    const handleHover = () => {
        const isMobile = window.innerWidth < 768; // Adjust the width as needed

        portfolioItems.forEach(item => {
            const video = item.querySelector('.portfolio-video');

            // Remove hover functionality on mobile
            if (isMobile) {
                item.removeEventListener('mouseenter', playVideo);
                item.removeEventListener('mouseleave', pauseVideo);
            } else {
                // Add hover functionality for desktop
                item.addEventListener('mouseenter', playVideo);
                item.addEventListener('mouseleave', pauseVideo);
            }
        });
    };

    // Function to play video on hover
    const playVideo = (event) => {
        const video = event.currentTarget.querySelector('.portfolio-video');
        if (video) {
            video.play();
        }
    };

    // Function to pause video on hover exit
    const pauseVideo = (event) => {
        const video = event.currentTarget.querySelector('.portfolio-video');
        if (video) {
            video.pause();
            video.currentTime = 0; // Reset video to start when leaving hover
        }
    };

    // Initial call to set up hover functionality
    handleHover();

    // Add event listener for window resize to re-check hover functionality
    window.addEventListener('resize', handleHover);
});
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const sliderContainer = document.querySelector('.slider-container');
    let isSliding = false;
    let startX, sliderLeft;

    // Handle mouse down (or touch start) event
    slider.addEventListener('mousedown', startSliding);
    slider.addEventListener('touchstart', startSliding);

    // Handle mouse move (or touch move) event
    document.addEventListener('mousemove', sliding);
    document.addEventListener('touchmove', sliding);

    // Handle mouse up (or touch end) event
    document.addEventListener('mouseup', stopSliding);
    document.addEventListener('touchend', stopSliding);

    function startSliding(e) {
        isSliding = true;
        slider.style.transition = 'none';

        // Get starting position of mouse/touch
        startX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
        sliderLeft = parseInt(window.getComputedStyle(slider).left, 10); // Get current left position of the slider
    }

    function sliding(e) {
        if (!isSliding) return;

        // Calculate how far the slider should move
        const moveX = e.type === 'touchmove' ? e.touches[0].clientX - startX : e.clientX - startX;
        const newLeft = sliderLeft + moveX;

        // Set boundaries for slider movement
        const minLeft = 5;
        const maxLeft = sliderContainer.offsetWidth - slider.offsetWidth - 5;

        if (newLeft >= minLeft && newLeft <= maxLeft) {
            slider.style.left = `${newLeft}px`;
        }
    }

    function stopSliding() {
        if (!isSliding) return;

        isSliding = false;
        const maxLeft = sliderContainer.offsetWidth - slider.offsetWidth - 5;

        // If slider reaches the end, trigger mailto link
        if (parseInt(slider.style.left) >= maxLeft - 5) {
            window.location.href = 'mailto:hello@rasmusvolkov.com';
        } else {
            // Return slider to starting position if not fully dragged
            slider.style.transition = 'left 0.3s ease';
            slider.style.left = '5px';
        }
    }
});
