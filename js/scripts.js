$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip({
        trigger: 'hover', // hover o click
        placement: 'top' // left, right, bottom o top
    });
});

(function(){
    'use strict';
    document.addEventListener('DOMContentLoaded', function(){

        //Mapa de la empresa Biofoods Peru S.A.C.
        var map = L.map('mapid', {
            center: [-12.118733, -77.040048],
            zoom: 16
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19
        }).addTo(map);

        L.marker([-12.118733, -77.040048]).addTo(map)
            .bindPopup('<i style="color: #f13c40;">Aquí nos encontramos!</i> <br> <b>Biofoods Peru S.A.C.</b>')
            .openPopup();
        
        var circle = L.circle([-12.1187304, -77.040048], {
            color: '#f13c40',
            fillColor: '#f03',
            fillOpacity: 0.2,
            radius: 300
        }).addTo(map);

    })
})();