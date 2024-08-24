// Description: JavaScript functions for the website

// JavaScript functions to handle button clicks
function scrollToElement(element) {
    document.getElementById(element).scrollIntoView({behavior: "smooth"});
    console.log("Scrolling to " + element);
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

function login {
    window.location.href = "login.html";
}