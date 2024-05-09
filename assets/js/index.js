// Toma el elemento a animar
const element = document.querySelector('.banner-movimiento');

// Define las opciones para el Intersection Observer
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

// Crea un nuevo Intersection Observer
const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        // If element is in viewport, add the 'show' class to trigger the animation
        if (entry.isIntersecting) {
            element.classList.add('banner-movimiento');
        }
        else {
            element.classList.remove('banner-movimiento');
        }
    });
}, options);

// Empieza a observar el elemento
observer.observe(element);
