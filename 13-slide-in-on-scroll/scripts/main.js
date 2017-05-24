// Limits the call of the checkSlide function to enhance performance
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
    var context = this, args = arguments;
    var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
    };
}

// Get all images that will need to be slid in
const sliderImages = document.querySelectorAll('.slide-in');

// Function to slid in / out the images
function checkSlide(e){
    sliderImages.forEach(sliderImage => {
        // Half way through the image
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        // Bottom of the image
        const imageBottom = sliderImage.offsetTop + sliderImage.height;

        // Check that the image is now half show
        const isHalfShown = slideInAt > sliderImage.offsetTop;
    
        // Check that the image has not been scrolled past
        const isNotScrolledPast = window.scrollY < imageBottom;

        // Transition the image in if it is half shown and not scrolled past.
        if(isHalfShown && isNotScrolledPast){
            // add the active class that will make it upper. 
            sliderImage.classList.add('active');
        }else{
            // hide the image since it is either scrolled past and not half shown
            sliderImage.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', debounce(checkSlide));