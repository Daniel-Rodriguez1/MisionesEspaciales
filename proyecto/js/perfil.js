'use strict';

const contenedor = document.querySelector('#contenedor');
const contenedor2 = document.querySelector('#contenedor2');
const titulo = document.querySelector('#titulo');
const buscar = document.querySelector('#buscar');


let perfil = [];
if (localStorage.getItem('perfil')) {
    perfil = JSON.parse(localStorage.getItem('perfil'));
} else {
    window.location.href = 'bitacora.html';
};


titulo.innerHTML = perfil.nombre_programa;

let caja = document.createElement('div');

let fecha_i = document.createElement('p');
fecha_i.innerHTML = 'Fecha inicio: ' + perfil.fecha_inicio;
let fecha_f = document.createElement('p');
fecha_f.innerHTML = 'Fecha final: ' + perfil.fecha_final;

let alcance = document.createElement('p');
alcance.innerHTML = perfil.alcance;

contenedor.appendChild(caja);

caja.appendChild(fecha_i);
caja.appendChild(fecha_f);
caja.appendChild(alcance);

const pintar_misiones = (lista_misiones) => {
    contenedor2.innerHTML = '';
    lista_misiones.forEach(obj => {

        let caja = document.createElement('div');
        let nombre = document.createElement('h3');
        nombre.innerHTML = obj.nombre_mision;
        let destino = document.createElement('p');
        destino.innerHTML = 'Destino: ' + obj.destino;
        let duracion = document.createElement('p');
        duracion.innerHTML = 'Duración: ' + obj.duracion;
        let nave = document.createElement('p');
        nave.innerHTML = 'Nave: ' + obj.nave;
        let fecha = document.createElement('p');
        fecha.innerHTML = 'Fecha de lanzamiento: ' + obj.fecha_lanzamiento;
        let programa = document.createElement('p');
        programa.innerHTML = 'Pertenece al programa: ' + obj.programa;
        let datos = document.createElement('p');
        datos.innerHTML = 'Datos de interés: ' + obj.datos_interes;
        let resultado = document.createElement('p');
        resultado.innerHTML = 'Resultado: ' + obj.resultado;


        let tripu = document.createElement('p');
        tripu.innerHTML = 'Tripulantes: ';
        contenedor2.appendChild(caja);
        caja.appendChild(nombre);
        caja.appendChild(destino);
        caja.appendChild(duracion);
        caja.appendChild(nave);
        caja.appendChild(fecha);
        caja.appendChild(programa);
        caja.appendChild(datos);
        caja.appendChild(resultado);
        caja.appendChild(tripu);
        obj.nombre_tripulantes.forEach(element => {
            let integrantes = document.createElement('p');
            integrantes.innerHTML = "-----" + element;
            caja.appendChild(integrantes);
        });

    });
};

let misiones_relaciondas = () => {
    let relacidas = lista_misiones.filter((quemado) => quemado.programa == perfil.nombre_programa)
    pintar_misiones(relacidas);
}
misiones_relaciondas();