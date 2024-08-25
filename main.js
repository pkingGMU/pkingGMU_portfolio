// Description: JavaScript functions for the website

// JavaScript functions to handle button clicks
function scrollToElement(element) {
    // Change path to index.html if not already there
    const currentPath = window.location.pathname;
    console.log("Current path: " + currentPath);
    // If element is from index.html, change the URL to index.html
    if (currentPath !=='/') {
        window.location.href = "/?scrollTo=" + encodeURIComponent(element);
    } else {
        document.getElementById(element).scrollIntoView({behavior: "smooth"});
        console.log("Scrolling to " + element);
    }

    
}

// Detect if the script is running on the page that requires scrolling
if (window.location.pathname === '/') {
    window.addEventListener('load', handleScrollOnLoad);
}

// Function to handle scroll action based on query parameter
function handleScrollOnLoad() {
    // Extract query parameter from URL
    const params = new URLSearchParams(window.location.search);
    const scrollTo = params.get('scrollTo');

    if (scrollTo) {
        // Scroll to the specified element smoothly
        const element = document.getElementById(scrollTo);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            console.log('Scrolling to ' + scrollTo);
        } else {
            console.log('Element with ID ' + scrollTo + ' not found.');
        }
    }
}




// JavaScript functions to handle image clicks
function zoomImage(imgElement) {

    const allImages = document.querySelectorAll('img');
    const isZoomed = imgElement.classList.contains("fullsize");
    
    if (isZoomed) {
        imgElement.classList.remove("fullsize");
        allImages.forEach(img => img.classList.remove('disabled'))
    } else {
        
        allImages.forEach(img => {
            if (img !== imgElement) {
                img.classList.add('disabled');
            }
        });

        if (imgElement) {
            imgElement.classList.toggle("fullsize");
            
        } else {
            console.error("Image not found: " + image);
        }

    }
    
}

function login (){
    window.location.href = "login.html";
}