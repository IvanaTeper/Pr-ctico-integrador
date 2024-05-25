// Deshabilitamos el envío de formularios si hay campo no válidos (función autoinvocada):
        (() => {
            'use strict'
        
            // Aplicamos al formulario definido en fila 72 la siguiente sentencia, la usamos para formularios que necesitan validación:
            
            const forms = document.querySelectorAll('.needs-validation')
        
            // Iteramos sobre los formularios que obtuvimos en el paso anterior:

            Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
                }
                else{
                    alert('Formulario enviado!')
                }
        
                form.classList.add('was-validated')
            }, false)
            })
        })() 
