'use strict';

document.getElementById('programa_form').onsubmit = (e) => {
    e.preventDefault();
    var formData = new FormData(document.querySelector('form'));
    const object = {};
    let invalid = false;

    formData.forEach((value, key) => {
        if (!value) {
            invalid = true;
            document.getElementsByName(key)[0].classList.add("error");
        } else {
            document.getElementsByName(key)[0].classList.remove("error");
            object[key] = value;
        }
    });
    if (!invalid) {
        let programa;
        programa = new Programa(
            object.txt_nombre_programa,
            object.txt_fecha_inicio,
            object.txt_fecha_final,
            object.txt_alcance,
            object.txt_alcance,

        );
        Swal.fire(
            'Registro exitoso!',
            'Se registro un programa espacial exitosamente.',
            'success'
        )
        document.getElementById("programa_form").reset();
        lista_programas.push(programa);
        localStorage.setItem('lista_programas', JSON.stringify(lista_programas));
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Faltan imformación!',
            text: 'Por favor llenar las campos en rojos',
        })
    }
};