'use strict';

const contenedor = document.querySelector('#contenedor');

const buscar = document.querySelector('#buscar');

const pintar_misiones = (lista_misiones) => {
    contenedor.innerHTML = '';
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
        contenedor.appendChild(caja);
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

pintar_misiones(lista_misiones);

buscar.addEventListener('keyup', () => {
    let filtro = buscar.value.toLowerCase();

    let filtro_misiones = lista_misiones.filter((quemado) => quemado.nombre_mision.toLowerCase().includes(filtro));
    pintar_misiones(filtro_misiones);

});