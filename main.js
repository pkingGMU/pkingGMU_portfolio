// JavaScript functions to handle button clicks
function scrollToElement(element) {
    document.getElementById(element).scrollIntoView({behavior: "smooth"});
    console.log("Scrolling to " + element);
}

