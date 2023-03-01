export default {
  global: {
    componenteFormativo:
      'Estadística descriptiva, gráficas e informe estadístico',
    descripcionCurso:
      'En este componente, se manejan las bases de la estadística descriptiva, empleando conceptos fundamentales como el de promedio o media de un conjunto, para así tener la fundamentación teórica y la compresión del análisis estadístico, utilizando diferentes gráficas como: histogramas, gráfico circular, cajas y bigotes, de forma dinámica. Todo esto, presentado detalladamente con contraste y observación de datos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal-1.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
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
        titulo: 'Estadística descriptiva',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Organiza una tabla de datos y los tipos de variable',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Gráficos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Elaboración del informe estadístico',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
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
  complementario: [
    {
      tema: 'Estadística descriptiva.',
      referencia:
        'Aguilar, J. (2021). <i>Estadística Descriptiva regresión y probabilidades con aplicaciones.</i> Ediciones de la U. ',
      tipo: 'Libro digital',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=15156&pg=202',
    },
    {
      tema: 'Gráficos',
      referencia:
        'Moreno, A. & Córcoles, S. (2020). <i>Python práctico.</i> Ediciones de la U.',
      tipo: 'Libro digital',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=10285&pg=1',
    },
    {
      tema: 'Gráficos',
      referencia:
        'Toomey, D. (2017).<i> Your One-stop Guide to Building an Efficient Data Science Pipeline Using Jupyter</i>. Packt Publishing. ',
      tipo: 'Libro',
      link:
        'https://search-ebscohost-com.bdigital.sena.edu.co/login.aspx?direct=true&db=e000xww&AN=1637911&lang=es&site=ehost-live',
    },
    {
      tema: 'Gráficos',
      referencia:
        'Toomey, D. (2018).<i> Explore Interactive Computing Using Python.</i> Packt Publishing.',
      tipo: 'Libro',
      link:
        'https://search-ebscohost-com.bdigital.sena.edu.co/login.aspx?direct=true&db=e000xww&AN=1881491&lang=es&site=ehost-live',
    },
    {
      tema: 'Estadística descriptiva',
      referencia:
        'Triola, M. (2018).<i> Estadística</i> (12 edición). Pearson. ',
      tipo: 'Libro digital',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=7386&pg=149',
    },
  ],
  glosario: [
    {
      termino: 'Censo',
      significado:
        'un conjunto de actividades destinadas a recoger, recopilar, el padrón o lista de la población de una nación en un momento determinado, la información demográfica social y económica, para luego evaluar, analizar y publicar o divulgar.',
    },
    {
      termino: 'Continua',
      significado:
        'es aquella que puede tomar un número infinito de valores entre dos valores distintos de una característica. La altura de las 5 personas: 1.85, 1.89, 1.93, 1.59, 1.65. En la práctica se mide la altura con dos decimales, pero también se puede dar con tres decimales o más.',
    },
    {
      termino: 'Cualitativa',
      significado:
        'son aquellas en la que los resultados posibles no son valores numéricos. Por ejemplo: color del pelo, tipo de ropa preferida, lugar de veraneo, etc.',
    },
    {
      termino: 'Cuantitativa',
      significado:
        'se trata de características cuyas variaciones pueden ser expresadas de forma numérica. Por ejemplo: edad, peso, estatura, número de hijos, años de servicio, etc.',
    },
    {
      termino: 'Cuartiles',
      significado:
        'son 4 dividen un conjunto de datos ordenados en cuatro partes iguales. Cuartil 1 (Q1) 25 %, la mediana es el Cuartil 2 (Q2) 50 %,Cuartil 3 (Q3) 75 % Cuartil 4 (Q4) 100 %.Se trabaja principalmente con los Q1, Q2, Q3.',
    },
    {
      termino: 'Dato atípico',
      significado: 'es un valor mayor a 1.5 veces el rango intercuartil.',
    },
    {
      termino: 'Desviación estándar',
      significado:
        'mide la dispersión de una distribución de datos. Entre más dispersa está una distribución de referencias, más grande es su desviación estándar.',
    },
    {
      termino: 'Discreta',
      significado:
        'es cuando no se puede tomar ningún valor entre dos consecutivos, y que es continua al momento de  tomar cualquier valor dentro de un intervalo. Ejemplos de variable discreta: número de empleados de una fábrica; número de hijos; número de cuentas en un banco.',
    },
    {
      termino: 'Escala cronológica',
      significado:
        'hace referencia a los sucesos, es la ubicación de éstos en una línea temporal.',
    },
    {
      termino: 'Escala nominal',
      significado:
        'es la gama de medición en la cual los números sirven como “etiquetas” solamente para identificar o clasificar un objeto. normalmente trata solo con variables no numéricas (no cuantitativas).',
    },
    {
      termino: 'Escala ordinal',
      significado:
        'es la que permite evaluar la actitud de un encuestado con respecto a un tema utilizando un conjunto de respuestas ordenadas. Por ejemplo: “Muy satisfecho”, “Satisfecho”, “Insatisfecho” y “Muy insatisfecho”.',
    },
    {
      termino: 'Estadísticos',
      significado:
        'hace referencia a cualquier función real medible de la muestra en una variable aleatoria.',
    },
    {
      termino: 'Media',
      significado:
        'resultado que se obtiene al dividir la suma de varias cantidades por el número de sumandos.',
    },
    {
      termino: 'Muestreo',
      significado:
        'selección de un conjunto de personas o cosas que se consideran representativas del grupo al que pertenecen, con la finalidad de estudiar o determinar las características del grupo.',
    },
    {
      termino: 'Rango intercuartil',
      significado:
        'es una medida de dispersión. Se obtiene restando el cuartil 3 (Q3) menos el cuartil 1(Q1); Q3-Q1 en ese rango está el 50 % de los datos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Lind, D. & Marchal, W. (2019).<i> Estadística Aplicada a los negocios y la economía</i>',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=9246&pg=315. ',
    },
    {
      referencia:
        'Metada Alcaldía de Medellín. (2022). <i>Créditos de consumo otorgados.</i>',
      link: 'https://acortar.link/zGU2gK',
    },
    {
      referencia: 'Martínez, C. (2019). <i>Estadística y muestreo.</i>',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=9278&pg=387.',
    },
    {
      referencia: 'Martínez, C. (2019). <i>Estadística básica aplicada.</i>',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=8975&pg=82',
    },
    {
      referencia: 'Matplotlib. (2022). <i>Visualización con Python.</i>',
      link: ' https://matplotlib.org/',
    },
    {
      referencia:
        'Plotly. (2022). <i>Plotly Biblioteca de gráficos de código abierto para Python.</i>',
      link: 'https://plotly.com/python/',
    },
    {
      referencia:
        'Seaborn. (2022). <i>Visualización de datos estadísticos.</i>',
      link: 'https://seaborn.pydata.org/',
    },
    {
      referencia:
        'Vega-Altair. (2022). <i>Visualización declarativa en Python.</i>',
      link: 'https://altair-viz.github.io/',
    },
    {
      referencia:
        'Vladimirovna, O. & Gutiérrez, E. (2016). <i>Estadística inferencial 1 para ingeniería y ciencias.</i>',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/40474?page=69',
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
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
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
