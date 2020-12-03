'use strict';

class Cuerpo_celeste {
    constructor(nombre, masa, temp_media, duracion_dia, tipo) {
        this.nombre = nombre;
        this.masa = masa;
        this.temp_media = temp_media;
        this.duracion_dia = duracion_dia;
        this.tipo = tipo;
    };

};
class Estrella extends Cuerpo_celeste {
    constructor(nombre, masa, temp_media, duracion_dia, edad, composicion, intensidad, tamano) {
        super(nombre, masa, temp_media, duracion_dia, 'estrella');
        this.edad = edad;
        this.composicion = composicion;
        this.intensidad = intensidad;
        this.tamano = tamano;
    }
};
class Planeta extends Cuerpo_celeste {
    constructor(nombre, masa, temp_media, duracion_dia, distancia, duracion_ano, cantidad, satelites_orbita) {
        super(nombre, masa, temp_media, duracion_dia, 'planeta');
        this.distancia = distancia;
        this.duracion_ano = duracion_ano;
        this.cantidad = cantidad;
        this.satelites_orbita = satelites_orbita;
    }
};
class Satelite extends Cuerpo_celeste {
    constructor(nombre, masa, temp_media, duracion_dia, distancia_entre, caracteristicas, planeta_pertenece) {
        super(nombre, masa, temp_media, duracion_dia, 'satelite');
        this.distancia_entre = distancia_entre;
        this.caracteristicas = caracteristicas;
        this.planeta_pertenece = planeta_pertenece;
    }
};

class Mision {
    constructor(nombre_mision, nombre_tripulantes, fecha_lanzamiento, duracion, datos_interes, resultado, nave, destino, txt_programa) {
        this.nombre_mision = nombre_mision;
        this.nombre_tripulantes = nombre_tripulantes;
        this.fecha_lanzamiento = fecha_lanzamiento;
        this.duracion = duracion;
        this.datos_interes = datos_interes;
        this.resultado = resultado;
        this.nave = nave;
        this.destino = destino;
        this.programa = txt_programa;
    };

};
class Programa {
    constructor(nombre_programa, fecha_inicio, fecha_final, alcance) {
        this.nombre_programa = nombre_programa;
        this.fecha_inicio = fecha_inicio;
        this.fecha_final = fecha_final;
        this.alcance = alcance;
    };
};