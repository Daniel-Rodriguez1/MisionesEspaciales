'use strict';

const tbody_planetas = document.querySelector('#tbl-planetas tbody');
const buscar = document.querySelector('#buscar');

const pintar_planeta = (lista_cuerpos_celestes) => {
    tbody_planetas.innerHTML = '';
    lista_cuerpos_celestes.forEach(obj => {
        let fila = tbody_planetas.insertRow();
        fila.insertCell().innerHTML = obj.nombre;
        fila.insertCell().innerHTML = obj.masa;
        fila.insertCell().innerHTML = obj.temp_media;
        fila.insertCell().innerHTML = obj.distancia;
        fila.insertCell().innerHTML = obj.duracion_ano;
        fila.insertCell().innerHTML = obj.cantidad;
        fila.insertCell().innerHTML = obj.satelites_orbita;
    });
};
const filtro_planeta = () => {
    let filtro_planeta = lista_cuerpos_celestes.filter((quemado) => quemado.tipo == 'planeta');
    pintar_planeta(filtro_planeta);
};

filtro_planeta();

buscar.addEventListener('keyup', () => {
    let filtro = buscar.value.toLowerCase();
    let filtro_planeta = lista_cuerpos_celestes.filter((quemado) => quemado.tipo == 'planeta');
    let filtro_buscar = filtro_planeta.filter((quemado) => quemado.nombre.toLowerCase().includes(filtro));
    pintar_planeta(filtro_buscar);

});