function convertir() {
    var valore = parseInt(document.getElementById("valor").value);
    var resultado = 0;
    //valor dolar mep al dia de la fecha
    var dolar = 1069;
    //valor euro al dia de la fecha
    var euro = 963;
    if (document.getElementById("uno").checked) {
        resultado = valore / dolar;
        alert("El cambio de Pesos a Dólares es: $" + resultado);
    }
    else if (document.getElementById("dos").checked) {
        resultado = valore / euro;
        alert("El cambio de Pesos a Euros es: $" + resultado);
    }
    else {
        alert("Debe completar los requisitos");
    }



}

// Get the element to animate
const element = document.querySelector('.banner-movimiento');

// Define the options for the Intersection Observer
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

// Create a new Intersection Observer
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

// Start observing the element
observer.observe(element);
