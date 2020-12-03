'use strict';

let lista_cuerpos_celestes = lista_cuerpos_celestes2;

if (localStorage.getItem('lista_cuerpos_celestes')) {
    lista_cuerpos_celestes = JSON.parse(localStorage.getItem('lista_cuerpos_celestes'));
} else {
    localStorage.setItem('lista_cuerpos_celestes', JSON.stringify(lista_cuerpos_celestes));
};

let lista_programas = lista_programa2;

if (localStorage.getItem('lista_programas')) {
    lista_programas = JSON.parse(localStorage.getItem('lista_programas'));
} else {
    localStorage.setItem('lista_programas', JSON.stringify(lista_programas));
};

let lista_misiones = lista_misiones2;

if (localStorage.getItem('lista_misiones')) {
    lista_misiones = JSON.parse(localStorage.getItem('lista_misiones'));
} else {
    localStorage.setItem('lista_misiones', JSON.stringify(lista_misiones));
};