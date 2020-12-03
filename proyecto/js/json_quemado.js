'use strict';
const lista_cuerpos_celestes2 = [{
        'nombre': 'Sirio',
        'masa': '2,02',
        'temp_media': '9940K',
        'tipo': 'estrella',
        'edad': '2·10',
        'composicion': 'carbono y oxígeno',
        'intensidad': '24,5',
        'tamano': ' 12 000 km de diámetro'
    }, {
        'nombre': 'Arturo',
        'masa': '2,22',
        'temp_media': '96540K',
        'tipo': 'estrella',
        'edad': '7',
        'composicion': 'carbono y oxígeno',
        'intensidad': '23,5',
        'tamano': ' 15 000 km de diámetro'
    }, {
        'nombre': 'Vega',
        'masa': '2,00',
        'temp_media': '8740K',
        'tipo': 'estrella',
        'edad': '6',
        'composicion': 'carbono y oxígeno',
        'intensidad': '21,5',
        'tamano': ' 11 000 km de diámetro'
    }, {
        'nombre': 'Alfa Centauri',
        'masa': '2,02',
        'temp_media': '9940K',
        'tipo': 'estrella',
        'edad': '12',
        'composicion': 'carbono y oxígeno',
        'intensidad': '24,5',
        'tamano': ' 12 000 km de diámetro'
    },
    {
        'nombre': 'Canopus',
        'masa': '3,02',
        'temp_media': '7727K',
        'tipo': 'estrella',
        'edad': '4·9',
        'composicion': 'carbono y oxígeno',
        'intensidad': '60,5',
        'tamano': ' 6 500 km de diámetro'
    },
    {
        'nombre': 'Saturno',
        'masa': '5,688×10',
        'temp_media': 'Mínima 82K, Media 143K Máxima ?',
        'tipo': 'planeta',
        'distancia': '1418 millones de kilómetros',
        'duracion_ano': '29,4 años terrestres',
        'cantidad': 55,
        'satelites_orbita': 82,
    },
    {
        'nombre': 'Jupiter',
        'masa': '5,688×10',
        'temp_media': 'Mínima 82K, Media 143K Máxima ?',
        'tipo': 'planeta',
        'distancia': '1418 millones de kilómetros',
        'duracion_ano': '29,4 años terrestres',
        'cantidad': 55,
        'satelites_orbita': 82,
    },
    {
        'nombre': 'Venus',
        'masa': '0,815 tierras',
        'temp_media': 'Mínima*	228 K -45,15  Máxima 773 K 499,85 °C',
        'tipo': 'planeta',
        'distancia': '1.39AU',
        'duracion_ano': '59 días terrestres',
        'cantidad': 0,
        'satelites_orbita': 0,
    },
    {
        'nombre': 'Urano',
        'masa': '5,688×10',
        'temp_media': 'Mínima 82K, Media 143K Máxima ?',
        'tipo': 'planeta',
        'distancia': '1418 millones de kilómetros',
        'duracion_ano': '29,4 años terrestres',
        'cantidad': 55,
        'satelites_orbita': 82,
    },
    {
        'nombre': 'Mercurio',
        'masa': '0.055 tierras',
        'temp_media': '178.9 ºC',
        'tipo': 'planeta',
        'distancia': '0.39AU',
        'duracion_ano': '59 días terrestres',
        'cantidad': 0,
        'satelites_orbita': 0,
    },
    {
        'nombre': 'Marte',
        'masa': '0.055 tierras',
        'temp_media': '178.9 ºC',
        'tipo': 'planeta',
        'distancia': '0.39AU',
        'duracion_ano': '59 días terrestres',
        'cantidad': 2,
        'satelites_orbita': 2,
    },
    {
        'nombre': 'Luna',
        'masa': '7,349 × 10',
        'temp_media': 'Mínima 40K, Media 380K Máxima 396K',
        'tipo': 'satelite',
        'distancia_entre': '36 000 km',
        'caracteristicas': 'Gravedad	1,62 m/s²',
        'planeta_pertenece': 'Tierra',
    }, {
        'nombre': 'ERS-2',
        'masa': '2516 kg',
        'temp_media': '-',
        'tipo': 'satelite',
        'distancia_entre': '10 000 km',
        'caracteristicas': 'Tipo de órbita circular',
        'planeta_pertenece': 'Tierra',
    }
];

const lista_programa2 = [

    {
        'nombre_programa': 'Programa espacial de la Unión Soviética',
        'fecha_inicio': '1955-01-20',
        'fecha_final': '1975-08-02',
        'alcance': 'La Unión Soviética comenzó su programa espacial con una gran ventaja sobre los Estados Unidos Esto ocurrió porque, debido a problemas técnicos para fabricar arcos nucleares más débiles, los misiles lanzadores intercontinentales de la Unión Soviética eran inmensos y potentes comparados con sus similares estadounidenses. Así, los cohetes para su programa espacial ya estaban listos como resultado del esfuerzo militar soviético resultante de la guerra fría. Como consecuencia, los soviéticos fueron capaces de enviar el primer satélite artificial en órbita (el Sputnik, de casi 84 kg) y el primer hombre, Yuri Gagarin. El lanzamiento del Sputnik fue parte de un esfuerzo de preparación de la Unión Soviética para enviar misiones tripuladas al espacio. Consistió en ocho vuelos no tripulados: Sputnik 1, Sputnik 2, Sputnik 3, Sputnik 4, Sputnik 5, Korabl-Sputnik-3, Korabl-Sputnik-4 y Korabl-Sputnik-5. Los dos últimos usando naves Vostok y ya con patrón compatible al envío de seres humanos al espacio. Su programa espacial incluía planos para llevar hombres a Luna (este programa se llamaba Lunar L1). La prueba de esto es la existencia de un módulo lunar soviético, llamado LK, pero cuya existencia era desconocida hasta hace poco en Occidente. El programa tripulado soviético, durante la carrera espacial, consistió en tres programas el Programa Vostok (nave con capacidad para un cosmonauta), Vosjod (para dos o tres cosmonautas) y Programa Soyuz (para tres cosmonautas) que aproximadamente acompañaban las capacidades de los EE. UU con los programas Mercury , Gemini y Apolo. Estación espacial Mir Sin embargo, no todo eran éxitos en el lado de la Unión Soviética. En un accidente ocurrido en la plataforma de lanzamiento en 1960 decenas de científicos y técnicos soviéticos murieron, atrasando los planes espaciales soviéticos. Pero el peor ocurrió en 1966 con la prematura muerte de Serguéi Koroliov, el ingeniero-jefe del programa espacial soviético. El accidente con la Soyuz 1, en abril de 1967, con la muerte del cosmonauta Vladímir Komarov, atrasó el Programa Soyuz 18 meses. Estos hechos sumados la falta de presupuesto, poco control de calidad de la industria soviética[cita requerida] y el desinterés de los militares de la cúpula del régimen por el programa espacial fueron las principales causas del fracaso de los soviéticos en llegar a la Luna. Además de los programas Vostok y Soyuz, la Unión Soviética desarrolló los proyectos Salyut y Almaz, de permanencia de seres humanos a largo plazo en el espacio, usando estaciones espaciales. Aún no habiendo conseguido llevar hombres a la Luna, el programa espacial soviético fue muy exitoso en varios aspectos, ahí se incluye la estación espacial Mir - un esbozo y campo de pruebas para lo que vendría a ser la Estación Espacial Internacional. La Unión Soviética también desarrolló un vehículo reutilizable, semejante al Transbordador espacial de los EE. UU., llamado Buran. Sin embargo, el vehículo fue usado solo una vez en 1988, en un vuelo no tripulado, y después abandonado.',
    },
    {
        'nombre_programa': 'Programa espacial de los EE. UU.',
        'fecha_inicio': '1955-01-20',
        'fecha_final': '1975-08-02',
        'alcance': 'Mucho del atraso inicial del programa espacial de los Estados Unidos se puede atribuir a un error estratégico de invertir inicialmente en los lanzadores Vanguard, más complejos y menos confiables que los lanzadores Redstone (basados en las antiguas V-2 alemanas). Esto acarreó que la capacidad de lanzamiento estadounidense era de 5 kg en el momento en que la Sputnik I, de 84 kg pero con capacidad de 500 kg, fue recién lanzada por la Unión Soviética. Aun así, después de la Sputnik, los EE. UU. respondieron con la Explorer I y las Vanguard I, II e III. Mucho tenía que hacerse para llegar al gigantesco cohete Saturno V, desarrollado por el equipo capitaneado por Von Braun, y que permitiría enviar la nave Apolo a la Luna. Saturno V tenía 110 m de altura y 2,7 millones de kg impulsados por los cinco poderosos motores F-1 y J-2. En julio de 1958 se crea la agencia espacial de los EE. UU., la NASA, responsable de coordinar todo el esfuerzo estadounidense de exploración espacial y administrar el programa espacial de los EE. UU. El programa espacial de los EE. UU. se inició con el Programa Mercury, basado en una nave con capacidad para un astronauta y maniobras en órbita con la Tierra. A continuación, la NASA desarrolló el Programa Gemini, que consistía en una nave con capacidad para dos astronautas y maniobras en órbita con Tierra. Los principales objetivos de las misiones Gemini eran probar el acoplamiento en órbita y actividades extravehiculares, dos habilidades consideradas necesarias para el aterrizaje en la Luna. El lanzador usado en el Programa Gemini fue el cohete Atlas. El Programa Gemini también hizo uso del Agena, un vehículo de entrenamiento y acoplamiento. Hubo doce vuelos en el Programa Gemini, diez de ellos tripulados, que tuvieron lugar entre marzo de 1965 y noviembre de 1966. El proyecto fue exitoso en sus objetivos de desarrollar la tecnología y preparar a los astronautas para las misiones en la Luna. Finalmente, los Estados Unidos lograron su objetivo de alcanzar la Luna antes que la Unión Soviética, en 1969, con el Programa Apolo. Este proyecto envolvió un extraordinario esfuerzo económico de 25 400 millones de dólares (de 1973),28​ 20 000 compañías que desarrollaron/fabricaron componentes y piezas, y 300 000 trabajadores. Seis misiones Apolo se posaron en la Luna (un total de doce astronautas caminaron sobre la Luna). Todas las misiones tripuladas Apolo hicieron uso del cohete Saturno V, con excepción de las Apolo 7, Skylab 2, Skylab 3 y Skylab 4, y Apolo 19, que usaron el cohete Saturno IB, menos potente y más barato, pues estas misiones fueron misiones con pequeña carga en órbita terrestre.',
    },
];
const lista_misiones2 = [

    {
        'datos_interes': "Realizar observaciones de los fenómenos del campo magnético, llamaradas solares, y de ionización en la región interplanetaria",
        'destino': "Orbital",
        'duracion': "3 dias",
        'fecha_lanzamiento': "1960-08-13",
        'nave': "Thor DM-18 Able I",
        'nombre_mision': "Pioneer 5",
        'nombre_tripulantes': [
            "Franklin Chang-Díaz",
            "Buzz Aldrin",
            "Laika"
        ],
        'programa': "Programa espacial de la Unión Soviética",
        'resultado': "Éxito",
    },
    {
        'datos_interes': "Destinada como parte de la red de Pioneer 6-9; no logró alcanzar la órbita de la Tierra",
        'destino': "Orbital",
        'duracion': "3 dias",
        'fecha_lanzamiento': "1969-08-13",
        'nave': "Delta E1",
        'nombre_mision': "Pioneer E",
        'nombre_tripulantes': [
            "John Glenn",
            "Laika",
            "Ham"
        ],
        'programa': "Programa espacial de los EE. UU.",
        'resultado': "Fracaso",
    },
    {
        'datos_interes': "Red de monitoreo solar en órbita del clima espacial, observando del viento solar, rayos cósmicos y campos magnéticos",
        'destino': "Luna",
        'duracion': "10 dias",
        'fecha_lanzamiento': "2020-08-13",
        'nave': "EVA-01",
        'nombre_mision': "ACE",
        'nombre_tripulantes': [
            "Franklin Chang-Díaz",
            "Yuri Gagarin",
            "Sally Ride"
        ],
        'programa': "Programa espacial de la Unión Soviética",
        'resultado': "Éxito",
    },
    {
        'datos_interes': "Observaciones de viento solar, campos eléctricos y magnéticos, rayos cósmicos y el polvo cósmico entre la Tierra y el Sol",
        'destino': "Orbital",
        'duracion': "8 dias",
        'fecha_lanzamiento': "2001-08-13",
        'nave': "Delta E1",
        'nombre_mision': "Génesis",
        'nombre_tripulantes': [
            "John Glenn",
            "Buzz Aldrin",
            "Ham"
        ],
        'programa': "Programa espacial de los EE. UU.",
        'resultado': "Éxito",
    }
];