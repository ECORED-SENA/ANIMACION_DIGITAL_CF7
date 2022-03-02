export default {
  global: {
    componenteFormativo: 'Efectos y <i>render</i>',
    descripcionCurso:
      'Con el estudio de este componente, el aprendiz estará mejor capacitado en los aspectos clave de la de la teoría de la luz, los efectos visuales y sonoros, los gráficos en movimiento y la salida de <i>render</i>, en el marco de desarrollos de animación digital.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Conceptos básicos de iluminación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Teoría de la luz',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Teoría del color',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Triángulo de iluminación',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Reloj de iluminación',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Propiedades de la luz',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Parámetros de reflexión y refracción en animación 3D',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Tipos de luces en <i>After Effects</i>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: '<i>Motion graphics</i>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Efectos visuales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Efectos de sonido',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '7.1',
            titulo: 'El sonido',
            hash: 't_7_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.2',
            titulo: 'La música en el cine 3D',
            hash: 't_7_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.3',
            titulo: 'Elementos de análisis del sonido',
            hash: 't_7_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.4',
            titulo: 'Formatos de sonido',
            hash: 't_7_4',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: '<i>Render</i>',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      //{
      //  nombreRuta: 'complementario',
      //  icono: 'far fa-folder-open',
      //  titulo: 'Material complementario',
      //},
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'González, C. y Vallejo, D. (2009). Fundamentos de Síntesis de Imagen 3D. Un Enfoque práctico a Blender. Escuela Superior de Informática. Universidad de Castilla-La Mancha. ',
      link:
        'http://www.esi.uclm.es/www/cglez/fundamentos3D/03.03.Iluminacion.html',
    },
    {
      referencia:
        'Guerra, S. (2021). La importancia del sonido en una producción audiovisual. Eusa. ',
      link:
        'https://www.eusa.es/blog/la-importancia-del-sonido-en-una-produccion-audiovisual/',
    },
    {
      referencia:
        'León, G. y Acero, H. (2020). Fundamentos de sonido: conociendo el sonido y sus aplicaciones. Politécnico Grancolombiano. Catálogo Editorial. ',
      link:
        'https://journal.poligran.edu.co/index.php/libros/article/view/2270',
    },
    {
      referencia:
        'Muñoz, D. (2014). Reloj de Millerson. Vivencias Fotográficas. ',
      link:
        'http://vivenciasfotograficas.blogspot.com/2014/02/reloj-de-millerson.html',
    },
    {
      referencia:
        'Rojas, I. (2016). La iluminación en los videojuegos. Imgvideogames. ',
      link:
        'https://imgvideogame.wordpress.com/2016/04/12/la-iluminacion-en-los-videojuegos/',
    },
    {
      referencia:
        'Vidal, M. (2013). Iluminación básica. Reloj de Millerson. MayteVidal fotografía. ',
      link:
        'http://maytevidalfotografia.blogspot.com/2013/08/iluminacion-basica-reloj-de-millerson.html',
    },
  ],
  glosario: [
    {
      termino: 'Amplitud',
      significado:
        'Es la cantidad de energía (intensidad) que posee una onda sonora.',
    },
    {
      termino: 'Cabezote',
      significado:
        'Es una apertura cuyo objetivo es presentar una pequeña introducción al espectador de lo que viene a continuación.',
    },
    {
      termino: 'Decibel',
      significado:
        'Es la unidad de medición en cuanto a la intensidad que tiene un sonido.',
    },
    {
      termino: '<em>Foley</em>',
      significado:
        'Son aquellos sonidos que vienen a representar los sonidos que generan las cosas cotidianas, como pasos, sonido de cosas al caer, etc.',
    },
    {
      termino: 'Frecuencia',
      significado:
        'Se refiere al número de vibraciones que produce un cuerpo por segundo y que afecta el tono.',
    },
    {
      termino: 'Motor de <em>render</em>',
      significado: 'Programa para generar imágenes 2D a partir de objetos 3D.',
    },
    {
      termino: 'Reflexión',
      significado:
        'Cuando un rayo de luz choca y rebota contra una superficie.',
    },
    {
      termino: 'Refracción',
      significado:
        'Cuando los rayos de luz pasan de un medio a otro con diferente densidad, ocasionando un cambio de dirección y velocidad de propagación.',
    },
    {
      termino: 'Renderizar',
      significado:
        'Es el proceso en el que un elemento que se encuentra en el mundo 3D es procesado en una imagen o un video para ser visualizado fuera del <em>software</em>.',
    },
  ],
  complementario: [
    {
      texto:
        'BIC., (2015). “2 minutos para entender el desarrollo sostenible – Spanish”',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      texto:
        'Arnold, M. y Osorio, F., (1998). Introducción a los conceptos básicos de la Teoría general de sistemas. Cinta moebio 3: 40-49',
      tipo: 'Página web',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto:
        'Balboa, C. y Dominguez, M. (2014). Economía circular como marco para el ecodiseño: el modelo ECO-3. Informador Técnico (Colombia) Volumen 78, No. 1. Pág. 52-90.',
      tipo: 'Artículo científico',
      link: 'https://www.google.com/',
    },
    {
      texto: 'Economía de Rosquilla. (s.f.).',
      tipo: 'Página web',
      descarga: ['/downloads/prueba.pdf', '/downloads/prueba.pdf'],
    },
    {
      texto: '2 minutos para entender el desarrollo sostenible – Spanish',
      tipo: 'Video',
      link: ['https://www.google.com/', 'https://www.google.com/'],
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Fabian Andrés Gómez pico',
        cargo: 'Experto temático',
        centro:
          'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
      },
      {
        nombre: 'Johnier Felipe Perafán Ledezma',
        cargo: 'Experto temático',
        centro:
          'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador instruccional',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oscar Ivan Uribe Ortiz',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lady Adriana Ariza Luque',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniela Muñoz Bedoya',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Villamizar',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo Front-end',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
