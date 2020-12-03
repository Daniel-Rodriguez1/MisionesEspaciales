'use strict'

const validar = () => {
    let error = false;
    if (txt_select.value == '') {
        txt_select.classList.add('error');
        error = false;
    } else {
        txt_select.classList.remove('error');
        error = true;
    }
    if (input_nombre.value == '') {
        input_nombre.classList.add('error');
        error = false;
    } else {
        input_nombre.classList.remove('error');
        error = true;
    }
    if (input_masa.value == '') {
        input_masa.classList.add('error');
        error = false;
    } else {
        input_masa.classList.remove('error');
        error = true;
    }
    if (input_temp_media.value == '') {
        input_temp_media.classList.add('error');
        error = false;
    } else {
        input_temp_media.classList.remove('error');
        error = true;
    }
    if (input_duracion_dia.value == '') {
        input_duracion_dia.classList.add('error');
        error = false;
    } else {
        input_duracion_dia.classList.remove('error');
        error = true;
    };
    if (txt_select.value == 'estrella') {
        if (input_edad.value == '') {
            input_edad.classList.add('error');
            error = false;
        } else {
            input_edad.classList.remove('error');
            error = true;
        }
        if (input_composicion.value == '') {
            input_composicion.classList.add('error');
            error = false;
        } else {
            input_composicion.classList.remove('error');
            error = true;
        }
        if (input_intensidad.value == '') {
            input_intensidad.classList.add('error');
            error = false;
        } else {
            input_intensidad.classList.remove('error');
            error = true;
        }
        if (input_tamano.value == '') {
            input_tamano.classList.add('error');
            error = false;
        } else {
            input_tamano.classList.remove('error');
            error = true;
        }
    }
    if (txt_select.value == 'planeta') {
        if (input_distancia.value == '') {
            input_distancia.classList.add('error');
            error = false;
        } else {
            input_distancia.classList.remove('error');
            error = true;
        }
        if (input_duracion_ano.value == '') {
            input_duracion_ano.classList.add('error');
            error = false;
        } else {
            input_duracion_ano.classList.remove('error');
            error = true;
        }
        if (input_cantidad.value == '') {
            input_cantidad.classList.add('error');
            error = false;
        } else {
            input_cantidad.classList.remove('error');
            error = true;
        }
        if (input_satelites_orbita.value == '') {
            input_satelites_orbita.classList.add('error');
            error = false;
        } else {
            input_satelites_orbita.classList.remove('error');
            error = true;
        }
    }
    if (txt_select.value == 'satelite') {
        if (input_distancia_entre.value == '') {
            input_distancia_entre.classList.add('error');
            error = false;
        } else {
            input_distancia_entre.classList.remove('error');
            error = true;
        }
        if (input_caracteristicas.value == '') {
            input_caracteristicas.classList.add('error');
            error = false;
        } else {
            input_caracteristicas.classList.remove('error');
            error = true;
        }
        if (input_planeta_pertenece.value == '') {
            input_planeta_pertenece.classList.add('error');
            error = false;
        } else {
            input_planeta_pertenece.classList.remove('error');
            error = true;
        }
    }
    return error;
};