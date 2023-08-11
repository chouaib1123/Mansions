function changeBackground(index) {
        const buttons = document.querySelectorAll('.button-container button');
        const highlight = document.querySelector('.background-highlight');
        const activeButton = document.querySelector('.button-container .active');
      
        const targetButton = buttons[index];
        const targetRect = targetButton.getBoundingClientRect();
        const containerRect = targetButton.parentNode.getBoundingClientRect(); // Use parent container's rect to handle button's padding
        const offsetX = targetRect.left - containerRect.left;
        const offsetY = 0; // Set offsetY to 0 for horizontal translation
      
        highlight.style.transform = `translateX(${offsetX}px)`;
        highlight.style.width = `${targetRect.width}px`; // Set the width to match the target button width
        highlight.style.opacity = 1;
      
        activeButton.classList.remove('active');
        targetButton.classList.add('active');
      
       
      }


      window.addEventListener('scroll', function() {

        const navbar = document.querySelector('.nav-container');
        const firstsection = document.getElementById('s1');
        const navbarHeight = navbar.offsetHeight;
        const scrollPosition = window.scrollY;
        
        if (scrollPosition >= navbarHeight) {
            navbar.classList.add('sticky');
            firstsection.style.paddingTop ="80px";
            
        } else {
            navbar.classList.remove('sticky');
            firstsection.style.paddingTop ="0px";
        }
    });





    document.addEventListener("DOMContentLoaded", function() {
        const sections = document.querySelectorAll(".footer-content");
        const hiddenDivs = document.querySelectorAll(".inner-container");
        
        document.addEventListener("scroll", function() {
          sections.forEach((section, index) => {
            const boundingRect = section.getBoundingClientRect();
            if (boundingRect.top < window.innerHeight && boundingRect.bottom > 0) {
              // Display the hidden div for the corresponding section
              hiddenDivs[index].style.display = "none";
            } else {
              // Hide the hidden div when not in the section
              hiddenDivs[index].style.display = "block";
            }
          });
        });
      });