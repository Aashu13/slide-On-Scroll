function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}


var sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
    sliderImages.forEach(sliderImage => {
        var slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        console.log(slideInAt);
        var imageBottom = sliderImage.offsetTop + sliderImage.height;
        console.log(imageBottom);
        var isHalfShown = slideInAt > sliderImage.offsetTop;
        var isNotScrolledPast = window.scrollY < imageBottom;

        if (isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active');
        } else {
            sliderImage.classList.remove('active');
        }

    });
}

window.addEventListener('scroll', debounce(checkSlide));