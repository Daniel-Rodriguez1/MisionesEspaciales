'use strict';
const txt_programa = document.querySelector('#txt_programa_pertenece');
const txt_destino_select = document.querySelector('#txt_destino');

const creacion_del_select = () => {
    lista_cuerpos_celestes.forEach(element => {
        let option = document.createElement('option');
        option.innerHTML = element.nombre;

        txt_destino_select.appendChild(option);

    });
};
creacion_del_select();

const creacion_del_select2 = () => {
    lista_programas.forEach(element => {
        let option = document.createElement('option');
        option.innerHTML = element.nombre_programa;

        txt_programa.appendChild(option);

    });
};
creacion_del_select2();

$.fn.selectpicker.Constructor.DEFAULTS.noneSelectedText = 'Seleccionar...';

document.getElementById('mision_form').onsubmit = (e) => {
    e.preventDefault();

    var formData = new FormData(document.querySelector('form'))
    const object = {};
    let invalid = false;

    formData.forEach((value, key) => {
        if (!value) {
            invalid = true;
            document.getElementsByName(key)[0].classList.add("error");
            console.log(document.getElementsByName(key)[0].parentElement);
        } else {
            document.getElementsByName(key)[0].classList.remove("error");
            object[key] = value;
        }
    });

    if (!$(".selectpicker").val()) {
        $("[data-id='select']").addClass("error");
    } else {
        $("[data-id='select']").removeClass("error");
    }
    if (!invalid) {
        let mision;
        mision = new Mision(
            object.txt_nombre_mision,
            $(".selectpicker").val(),
            object.txt_fecha_lanzamiento,
            object.txt_duracion,
            object.txt_datos_interes,
            object.txt_resultado,
            object.txt_nave,
            object.txt_destino,
            object.txt_programa,

        );
        Swal.fire(
            'Registro completado!',
            'Se registro una misión exitosamente.',
            'success'
        )
        document.getElementById("mision_form").reset();
        lista_misiones.push(mision);
        localStorage.setItem('lista_misiones', JSON.stringify(lista_misiones));
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Faltan imformación!',
            text: 'Por favor llenar las campos en rojos',
        })
    }
};