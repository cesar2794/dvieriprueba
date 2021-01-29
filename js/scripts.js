
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip({
        trigger: 'hover', // hover o click
        placement: 'top' // left, right, bottom o top
    });
});

(function(){
    'use strict';
    window.addEventListener('load', function(){
        // Seleccionar el formulario para validar
        var forms = document.getElementsByClassName('needs-validation');
        // Validar cada campo y prevenir que se envíe
        var validation = Array.prototype.filter.call(forms, function(form){
            form.addEventListener('submit', function(event){
                if (form.checkValidity() === false){
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();