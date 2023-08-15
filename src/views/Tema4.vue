<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Elaboración del informe estadístico

    .tarjeta.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-2
          img(src="@/assets/curso/temas/T4/img-1.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-3 Es la forma de mostrar datos, gráficos, tablas, análisis, resultados y conclusiones del estudio o investigación realizada.
              p.mb-5 Este documento debe contener planteamiento del problema, objetivo general, objetivos específicos, metodología, análisis, resultados y por último conclusiones.


    .row.mb-5.mt-5
      .col-md-4.mb-5.mb-md-0
        figure
          img(data-aos='fade-right')(src='@/assets/curso/temas/T4/img-2.png', alt='')

      .col-md-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta")
          .row.justify-content-around.align-items-center(titulo="Planteamiento del problema")
            .col-md-10.mb-4.mb-md-0
              p.mb-3 Se explica lo que se quiere resolver o investigar.

          .row(titulo="Objetivo general")
            .col-md-10.mb-4.mb-md-0
              p Se centra en solucionar un problema o investigación de estudio.
          
          .row(titulo="Objetivos específicos")
            .col-md-10.mb-4.mb-md-0
              p Son los pasos para obtener el objetivo general.

          .row(titulo="Metodología")
            .col-md-10.mb-4.mb-md-0
              p Se debe aclarar si es un informe estadístico descriptivo o inferencial, la población de estudio, el tamaño de la muestra. El tiempo de estudio y <i>software</i> utilizado.

          .row(titulo="Análisis y resultados")
            .col-md-10.mb-4.mb-md-0
              p Presentación de gráficos, tablas, análisis con los respectivos hallazgos. Las tablas y gráficos deben estar enumerados y explicados. Señalados en este componente en el tema de gráficos.

          .row(titulo="Conclusiones")
            .col-md-10.mb-4.mb-md-0
              p Explicar de forma clara empleando los porcentajes y/o totales, además de hallazgos resultado de todo el análisis estadístico a la población objeto. 

    h4.mb-5 Ejemplo de Informe estadístico:
    p.mb-5 Anteriormente se explicaron los elementos a tener presentes en un informe estadístico; ahora, mediante un ejemplo, se plantea cómo se interpreta el paso a paso de un informe estadístico que servirá de guía a la hora de realizarlo.

    TabsA.color-acento-botones.mb-5
      .tarjeta.fag.p-4(titulo="Informe estadístico")
        
        .row
          .col-xl-8
            p Comparar los créditos de consumo otorgado en Medellín por la alcaldía desde el año 2017 hasta 2019.
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/temas/T4/img-3.png', alt='Texto que describa la imagen')

      .tarjeta.fag.p-4(titulo="Objetivo general")

        .row
          .col-xl-8
            p Cotejar los créditos de consumo otorgado en Medellín por la alcaldía desde el año 2017 hasta 2019.
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/temas/T4/img-4.png', alt='Texto que describa la imagen')
           

      .tarjeta.fag.p-4(titulo="Objetivos específicos")
        
        .row
          .col-xl-8
            p.mb-4 Analizar los créditos de consumo otorgado en Medellín por la alcaldía desde el año 2017 hasta 2019.
            p.mb-4 Examinar los créditos de consumo otorgado en Medellín por la alcaldía desde año 2017 hasta 2019 por estrato, edad y género.
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/temas/T4/img-5.png', alt='Texto que describa la imagen')

      .tarjeta.fag.p-4(titulo="Metodología")
        
        .row
          .col-xl-8
            p.mb-4 La población de estudio se refiere a personas que obtuvieron créditos de consumo otorgados en Medellín por la Alcaldía, desde el año 2017 hasta el 2019 (en este caso análisis de tipo estadístico descriptivo), utilizando medidas de tendencia central como: la media, moda y desviación. Gráficos estadísticos: de cajas y bigotes, histograma, apilados, estáticos utilizando las librerías, Matplotlib, Seaborn, Vega-Altair, empleando Google Colab con el lenguaje Python y manejo de tablas de datos.
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/temas/T4/img-6.png', alt='Texto que describa la imagen')

      .tarjeta.fag.p-4(titulo="Resultados y análisis")
        
        .row
          .col-xl-8
            p.mb-4 Un total de 12152 personas recibieron créditos, de los cuales 8069 fueron mujeres y 4083 hombres. De estos corresponden a 67.2 % para el género femenino y 32.8 % para el masculino. Monto prestado valor mínimo $50.000, máximo $450.000. Los estratos van del 0 al 6. Solo 2 personas en el estrato 6 recibieron crédito.
            .tarjeta.fah.p-3.mb-5
              .row.justify-content-around.align-items-center
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0.texto-blanco
                      p Se muestra el análisis de ejemplo de las tablas y gráficos. 
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-negro(:href="obtenerLink('downloads/análisis_de_ejemplo_de_las_tablas_y_graficos.pdf')" target="_blank")
                        span Descargar
                        i.fas.fa-file-download
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/temas/T4/img-7.png', alt='Texto que describa la imagen')

      .tarjeta.fag.p-4(titulo="Conclusiones")
        
        .row
          .col-xl-8
            ul.lista-ul.mb-5
              li 
                i.fas.fa-angle-right.color-acento-contenido
                | Las edades de las personas oscilan entre 18 y 84 años.
              li 
                i.fas.fa-angle-right.color-acento-contenido
                | Monto prestado valor mínimo $50.000 máximo $450.000
              li 
                i.fas.fa-angle-right.color-acento-contenido
                | 12152 personas recibieron créditos de consumo otorgado en Medellín por la Alcaldía.
              li 
                i.fas.fa-angle-right.color-acento-contenido
                | 67.2 % fueron para el género femenino y 32.8 % para el masculino.
              li 
                i.fas.fa-angle-right.color-acento-contenido
                | 8069 eran mujeres y 4083 hombres.
              li 
                i.fas.fa-angle-right.color-acento-contenido
                | 8117 un 66.7 % se beneficiaron con un crédito de $ 200.000.00.
              li 
                i.fas.fa-angle-right.color-acento-contenido
                | El 2018 fue el año donde se otorgaron más créditos, un total de 8765.
              li 
                i.fas.fa-angle-right.color-acento-contenido
                | Los estratos de los beneficiarios van del 0 al 6 en este último solo 2 personas recibieron el crédito con edad de 24 años y 49 años respectivamente.

          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/temas/T4/img-8.png', alt='Texto que describa la imagen')

    .tarjeta.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-2
          img(src="@/assets/curso/temas/T4/img-9.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-3 Puede profundizar y afianzar sus conocimientos en gráficos estáticos y dinámicos, utilizando librerías como Plotly, matplotlib, Seaborn, Altair. Usando Google Colab.
              p.mb-3 Por favor observar el siguiente video, donde se trabaja con datos reales, sobre créditos de consumo otorgados en Medellín. Obtenidos de la página de datos abiertos de la capital de Antioquia. 

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/vBluABwrPF4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-4 Para comprender fácilmente el video, específicamente el manejo de Google Colab y el documento Jupyter, Notebook con extensión ipynb, se recomienda descargar los 3 archivos adjuntos.

    .row.justify-content-center.align-items-center
      .col-lg-9
        .row.justify-content-center.align-items-center
          .col-lg-4.mb-5
            div.tarjeta.faf.p-4.mb-3
              img.img-106.mb-3(src="@/assets/curso/temas/T4/img-10.svg")
              h5.texto-blanco.text-center Manejo de Google <br>Colab.pdf
            div.text-center
              a.boton--sm.color-acento-botones.me-3(:href="obtenerLink('downloads/MANEJO_DE_GOOGLE_COLAB.pdf')" target="_blank" type="application/pdf")
                span Descargar
                i.fas.fa-file-download
          .col-lg-4.mb-5
            div.tarjeta.faf.p-4.mb-3
              img.img-106.mb-3(src="@/assets/curso/temas/T4/img-11.svg")
              h5.texto-blanco.text-center Créditos de consumo otorgados.csv
            div.text-center
              a.boton--sm.color-acento-botones.me-3(:href="obtenerLink('downloads/creditos_de_consumo_otorgados.csv')" target="_blank" type="application/pdf")
                span Descargar
                i.fas.fa-file-download

          .col-lg-4.mb-5
            div.tarjeta.faf.p-4.mb-3
              img.img-106.mb-3(src="@/assets/curso/temas/T4/img-12.svg")
              h5.texto-blanco.text-center Gráficos Plotly <br>video.ipynb
            div.text-center
              a.boton--sm.color-acento-botones.me-3(:href="obtenerLink('downloads/gráficos_Plotly_video.ipynb')" target="_blank" type="application/pdf")
                span Descargar
                i.fas.fa-file-download                  



    .tarjeta.p-3.mb-5
      .row.justify-content-center.align-items-center
        .col-3.col-sm-2.col-lg-2
          img(src="@/assets/curso/temas/T4/img-13.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-5 En Google Colab se tienen máquinas virtuales con tarjetas gráficas. Permite ejecutar el código en el lenguaje Python dentro de la nube con el formato de Jupyter notebook extensión ipynb. 

           
    .tarjeta.fai.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-between.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.mb-3 Jupyter notebook se puede utilizar localmente o en la nube con Google Colab. Para usarlo localmente debe tenerlo instalado en su computador.
            p.mb-3 Dentro de Google Colab se está en un entorno interactivo denominado notebook de Colab, que permite escribir y ejecutar código celda por celda o todo de una vez, se obtiene en la pestaña código.
            p.mb-3 Escribe en un lenguaje etiquetado especial llamado Markdown, se obtiene en la pestaña de nombre texto.
          .col-md-6
            h5
              em Pantalla de inicio de Google Colab
            figure
              img(src='@/assets/curso/temas/T4/img-14.png', alt='Texto que describa la imagen')
          
        .row.justify-content-between.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4.mb-3 Instalar una librería o paquete
            p.mb-0 <b>Ejemplo:</b>
            p.mb-0 <i>pip install pandas</i>
            p.mb-4 Instalaría la librería de nombre pandas si ya está instalada lo dirá.
            h4.mb-3 Importar librería con un alias(as)
            p.mb-0 <b>Ejemplo:</b>
            p.mb-0 <i>import</i>pandas as pd 
            p.mb-4 cargar la librería pandas con el alias o abreviación pd
            p.mb-0 <b>Ejemplo:</b>
            p.mb-0 <i>import math</i>
            p.mb-3 Cargar la librería de nombre <i>math</i> referente a matemática.
            p.mb-3 <i>print(dir(math))</i>
            p.mb-3 Muestra las funciones que están dentro de la librería <i>math.</i>
            p.mb-3 Pow (2,3) una de las funciones que están en la librería <i>math</i>, es la función potencia en inglés Power, pow (2,3) significa que eleva el número 2 a la 3 da como resultado 8.


        
          .col-md-6
            h5
              em Importar la librería math y utilizar la función potencia: pow()
            figure
              img(src='@/assets/curso/temas/T4/img-15.png', alt='Texto que describa la imagen')

        .row.justify-content-between.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4.mb-3 DataFrame
            p.mb-3 Es una estructura de datos con dos dimensiones (filas y columnas), se puede guardar referencias de distintos tipos (caracteres, enteros, valores de punto flotante, etc.) en columnas. Es similar a una hoja de cálculo o una tabla de SQL.
            p.mb-3 Un archivo CSV (valores separados por comas) es un documento de texto con un formato específico que permite guardar los datos en una configuración de tabla estructurada.
            p.mb-0 Un archivo CSV puede tener diferentes separadores diferentes de la coma (,) como: 
            p.mb-3 punto y coma (;), barra espaciadora (/), guion del medio (-), guion de piso (_), etc.

        
          .col-md-6
            h5
              em Muestra la lectura y contenido del data frame utilizando el alias pd.read_csv()
            figure
              img(src='@/assets/curso/temas/T4/img-16.png', alt='Texto que describa la imagen')

        .row.justify-content-between.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4.mb-3 Lectura de archivos CSV
            p.mb-3 Para leer en formato CSV se utiliza el comando pd.read_csv('nombre del archivo.csv'), pd es la abreviación de la librería pandas.
            p.mb-3 En la parte nombre del archivo se debe escribir la ruta o dirección donde está el archivo al final de esa ruta el nombre con extensión.csv
            p.mb-3 Se puede utilizar el comando pwd para saber la ruta donde se está ubicado.
            p.mb-3 Para cambiar el directorio o ruta se utiliza el comando cd
            p.mb-3 <b>Ejemplo:</b> cd /content/sample_data/
            p.mb-3 <b>Ejemplo:</b> leer un archivo csv, utilizando el alias de pandas pd, nombrar el data_frame y visualizarlo con el nombre que se le colocó en este caso data_frame
            p.mb-0 <i>import pandas as pd</i>
            p.mb-0 <i>data_frame= pd.read_csv('california_housing_test.csv')</i>
            p.mb-0 <i>data_frame</i>
        
          .col-md-6
            h5
              em Muestra la lectura y contenido del data frame utilizando el alias pd.read_csv()
            figure
              img(src='@/assets/curso/temas/T4/img-16.png', alt='Texto que describa la imagen')
          
        .row.justify-content-between.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4.mb-5 Obtener determinado número de filas
            p.mb-0 Para obtener las primeras 5 filas de la data frame se escribe:
            p.mb-3 <i>data_frame.head(5)</i>
            p.mb-0 Para obtener las últimas 5 filas del data frame
            p.mb-3 <i>data_frame.tail()</i>
        
          .col-md-6
            h5
              em Contenido de las primeras y últimas 5 filas del data frame
            figure
              img(src='@/assets/curso/temas/T4/img-17.png', alt='Texto que describa la imagen')
              

        .row.justify-content-between.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4.mb-5 Visualizar dimensión
            p.mb-3 Para ver la dimensión (largo y ancho), filas y columnas también el nombre de las columnas, en este caso 3000 filas 9 columnas se utilizan los comandos:
            p.mb-0 <i>print("Dimensión: ", data_frame.shape)</i>
            p.mb-0 <i>print("Columnas: ", data_frame.columns)</i>
            p.mb-0 <i>Shape:  (3000, 9)</i>
        
          .col-md-6
            h5
              em Muestra la dimensión y el nombre de las columnas del data frame
            figure
              img(src='@/assets/curso/temas/T4/img-18.png', alt='Texto que describa la imagen')

        .row.justify-content-between.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.mb-3 Información sobre los estadísticos descriptivos de la columna con nombre 'total_rooms', se escribe el nombre entre comillas sencillas o dobles.
            p.mb-3 <i>data_frame['total_rooms'].describe()</i>
            p.mb-4 También se puede: <i>data_frame["total_rooms"].describe()</i>
            p.mb-3 Redondear la salida de los valores a 2 decimales.
        
          .col-md-6
            h5
              em Información sobre los estadísticos descriptivos de la columna con nombre 'total_rooms'
            figure
              img(src='@/assets/curso/temas/T4/img-19.png', alt='Texto que describa la imagen')
    p.mb-5 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
