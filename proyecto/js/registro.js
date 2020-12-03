'use strict';
const txt_select = document.querySelector('#txt_select');
const estrella = document.querySelector('#estrella');
const planeta = document.querySelector('#planeta');
const satelite = document.querySelector('#satelite');

const input_nombre = document.querySelector('#txt_nombre');
const input_masa = document.querySelector('#txt_masa');
const input_temp_media = document.querySelector('#txt_temp_media');
const input_duracion_dia = document.querySelector('#txt_duracion_dia');
//estrella
const input_edad = document.querySelector('#txt_edad');
const input_composicion = document.querySelector('#txt_composicion');
const input_intensidad = document.querySelector('#txt_intensidad');
const input_tamano = document.querySelector('#txt_tamano');;
//planeta
const input_distancia = document.querySelector('#txt_distancia');
const input_duracion_ano = document.querySelector('#txt_duracion_ano');
const input_cantidad = document.querySelector('#txt_cantidad');
const input_satelites_orbita = document.querySelector('#txt_satelites_orbita');
//datos de satelite
const input_distancia_entre = document.querySelector('#txt_distancia_entre');
const input_caracteristicas = document.querySelector('#txt_caracteristicas');
const input_planeta_pertenece = document.querySelector('#txt_planeta_pertenece');
const btn_guardar = document.querySelector('#btn_guardar');

txt_select.addEventListener('change', () => {
    let select = txt_select.value;
    if ('estrella' == select) {
        estrella.classList.remove("hidden");
        planeta.classList.add("hidden");
        satelite.classList.add("hidden");
    } else if ('planeta' == select) {
        planeta.classList.remove("hidden");
        satelite.classList.add("hidden");
        estrella.classList.add("hidden");
    } else if ('satelite' == select) {
        satelite.classList.remove("hidden");
        planeta.classList.add("hidden");
        estrella.classList.add("hidden");
    } else {
        planeta.classList.add("hidden");
        estrella.classList.add("hidden");
        satelite.classList.add("hidden");
    }
});

const registrar_cuerpo_celeste = (e) => {
    e.preventDefault()
    let error = validar();

    if (error) {
        let nombre = input_nombre.value;
        let masa = input_masa.value;
        let temp_media = input_temp_media.value;
        let duracion_dia = input_duracion_dia.value;

        let cuerpo_celeste;

        if (txt_select.value == 'estrella') {
            let edad = input_edad.value;
            let composicion = input_composicion.value;
            let intensidad = input_intensidad.value;
            let tamano = input_tamano.value;
            cuerpo_celeste = new Estrella(nombre, masa, temp_media, duracion_dia, edad, composicion, intensidad, tamano);

        } else if (txt_select.value == 'planeta') {
            let distancia = input_distancia.value;
            let duracion_ano = input_duracion_ano.value;
            let cantidad = Number(input_cantidad.value);
            let satelites_orbita = Number(input_satelites_orbita.value);
            cuerpo_celeste = new Planeta(nombre, masa, temp_media, duracion_dia, distancia, duracion_ano, cantidad, satelites_orbita);

        } else if (txt_select.value == 'satelite') {
            let distancia_entre = input_distancia_entre.value;
            let caracteristicas = input_caracteristicas.value;
            let planeta_pertenece = input_planeta_pertenece.value;
            cuerpo_celeste = new Satelite(nombre, masa, temp_media, duracion_dia, distancia_entre, caracteristicas, planeta_pertenece);
        };

        lista_cuerpos_celestes.push(cuerpo_celeste);

        localStorage.setItem('lista_cuerpos_celestes', JSON.stringify(lista_cuerpos_celestes));
        Swal.fire(
            'Registro exitoso!',
            'Se registro un cuerpo celeste exitosamente.',
            'success'
        )
        document.getElementById("form").reset();
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Faltan imformación!',
            text: 'Por favor llenar las campos en rojos',
        })
    }
};
btn_guardar.addEventListener('click', (e) => { registrar_cuerpo_celeste(e) });