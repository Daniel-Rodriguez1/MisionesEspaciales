'use strict';

const tbody_satelites = document.querySelector('#tbl-satelites tbody');
const buscar = document.querySelector('#buscar');

const pintar_satelites = (lista_cuerpos_celestes) => {
    tbody_satelites.innerHTML = '';
    lista_cuerpos_celestes.forEach(obj => {
        let fila = tbody_satelites.insertRow();

        fila.insertCell().innerHTML = obj.nombre;
        fila.insertCell().innerHTML = obj.masa;
        fila.insertCell().innerHTML = obj.temp_media;
        fila.insertCell().innerHTML = obj.distancia_entre;
        fila.insertCell().innerHTML = obj.caracteristicas;
        fila.insertCell().innerHTML = obj.planeta_pertenece;

    });
};

const filtro_satelites = () => {

    let filtro_satelites = lista_cuerpos_celestes.filter((quemado) => quemado.tipo == 'satelite');

    pintar_satelites(filtro_satelites);
};

filtro_satelites();

buscar.addEventListener('keyup', () => {
    let filtro = buscar.value.toLowerCase();
    let filtro_satelites = lista_cuerpos_celestes.filter((quemado) => quemado.tipo == 'satelite');
    let filtro_buscar = filtro_satelites.filter((quemado) => quemado.nombre.toLowerCase().includes(filtro));
    pintar_satelites(filtro_buscar);

});