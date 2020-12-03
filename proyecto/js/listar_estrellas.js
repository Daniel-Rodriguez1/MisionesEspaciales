'use strict';

const tbody_estrellas = document.querySelector('#tbl-estrellas tbody');
const buscar = document.querySelector('#buscar');


const pintar_estrellas = (lista_cuerpos_celestes) => {
    tbody_estrellas.innerHTML = '';
    lista_cuerpos_celestes.forEach(obj => {
        let fila = tbody_estrellas.insertRow();

        fila.insertCell().innerHTML = obj.nombre;
        fila.insertCell().innerHTML = obj.masa;
        fila.insertCell().innerHTML = obj.temp_media;
        fila.insertCell().innerHTML = obj.edad;
        fila.insertCell().innerHTML = obj.composicion;
        fila.insertCell().innerHTML = obj.intensidad;
        fila.insertCell().innerHTML = obj.tamano;

    });
};

const filtro_estrella = () => {

    let filtro_estrella = lista_cuerpos_celestes.filter((quemado) => quemado.tipo == 'estrella');

    pintar_estrellas(filtro_estrella);
};

filtro_estrella();


buscar.addEventListener('keyup', () => {
    let filtro = buscar.value.toLowerCase();
    let filtro_estrella = lista_cuerpos_celestes.filter((quemado) => quemado.tipo == 'estrella');
    let filtro_buscar = filtro_estrella.filter((quemado) => quemado.nombre.toLowerCase().includes(filtro));
    pintar_estrellas(filtro_buscar);

});