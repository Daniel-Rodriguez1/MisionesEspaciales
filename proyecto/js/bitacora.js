'use strict';

const contenedor = document.querySelector('#contenedor');

const buscar = document.querySelector('#buscar');

const pintar_programa = (lista_programas) => {
    contenedor.innerHTML = '';
    lista_programas.forEach(obj => {

        let caja = document.createElement('div');
        let nombre2 = document.createElement('h3');
        nombre2.innerHTML = obj.nombre_programa;
        let fecha_i = document.createElement('p');
        fecha_i.innerHTML = 'Fecha inicio: ' + obj.fecha_inicio;
        let fecha_f = document.createElement('p');
        fecha_f.innerHTML = 'Fecha final: ' + obj.fecha_final;

        let alcance = document.createElement('p');
        alcance.innerHTML = obj.alcance;
        let button = document.createElement('button');
        button.classList.add('panel', 'text-info');
        button.innerHTML = 'Ver misiones asignadas';


        contenedor.appendChild(caja);

        caja.appendChild(nombre2);
        caja.appendChild(fecha_i);
        caja.appendChild(fecha_f);
        caja.appendChild(alcance);
        caja.appendChild(button);

        button.addEventListener('click', () => {
            localStorage.setItem('perfil', JSON.stringify(obj));
            window.location.href = 'perfil.html';
        });
    });

};

pintar_programa(lista_programas);

buscar.addEventListener('keyup', () => {
    let filtro = buscar.value.toLowerCase();

    let filtro_programa = lista_programas.filter((quemado) => quemado.nombre_programa.toLowerCase().includes(filtro));
    pintar_programa(filtro_programa);

});