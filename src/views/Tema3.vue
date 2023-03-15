<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Gráficos
    
    .tarjeta.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-2
          img(src="@/assets/curso/temas/T3/img-1.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p La parte visual es importante en cualquier tipo de análisis o estudio; mediante un gráfico, se facilita la comprensión de los datos y la relevancia en la investigación planteada. Existen representaciones animadas dinámicas y estáticas y, en esta sección, se trabajará con dinámicas. Los dinámicos con la librería Plotly, que es una librería Python, de uso sencillo y mayor generalización al crear gráficos dinámicos, utilizando las funciones del módulo Ploty Express.

    .tarjeta.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-3 <b>Se abordarán diferentes gráficos estadísticos:</b>
              p.mb-3 Para estas se emplearon referentes de créditos de consumo otorgados en Medellín y obtenidos de la página de datos abiertos de la Alcaldía de la capital de Antioquia en formato csv (Metadata Alcaldía de Medellín, 2022).  
              
        .col-3.col-sm-2.col-lg-4
          img(src="@/assets/curso/temas/T3/img-2.png")
        
    h3.mb-3 Gráfico de histograma
    p.mb-3 Se representa en forma horizontal o vertical, también a manera de barras muestra el dato y las veces que se repite o su frecuencia.

    p.mb-1 <i>Muestra un histograma cantidad de hombres versus cantidad de mujeres.</i>


    .row.justify-content-around.align-items-center.mb-3
      .col-8
        img(src='@/assets/curso/temas/T3/img-3.png', alt='Texto que describa la imagen')

    h3.mb-3 Gráfico circular
    p.mb-3 Muestra en forma de círculo, generalmente en porcentaje, e indica la proporción que aparece en la cifra, con respecto al total.

    .row.mb-5.md-5
      .col-md-6.mb-5.mb-md-0
        p.mb-3 Muestra un gráfico circular género versus monto del préstamo.
        figure
          img(data-aos='fade-right')(src='@/assets/curso/temas/T3/img-4.png', alt='')

      .col-md-6
        p.mb-3 Muestra un gráfico circular, el porcentaje por estratos, los cuales reciben el monto del préstamo.
        figure
          img(data-aos='fade-right')(src='@/assets/curso/temas/T3/img-5.png', alt='')

    h3.mb-3 Gráfico de cajas y bigotes
    p.mb-3 Estos en forma de caja o rectángulo se emplean para apreciar los cuartiles y el valor mínimo a la izquierda, valor máximo a la derecha con líneas verticales.
    p.mb-3 Q1: cuartil 1, Q2: cuartil 2(mediana), Q3: cuartil 3, valor mínimo, valor máximo
    p.mb-3 Debajo del Cuartil 1(Q1) está el 25% de los datos, debajo del cuartil 2(Q2) es la mediana o dato central se ubica el 50 % de los datos, debajo del Q3 se obtiene el 75 % de los datos.
    p.mb-3 En el rango intercuartil = Q3-Q1 está el 50 % de los datos.
    p.mb-3 Por debajo del valor mínimo y por encima del máximo están los valores atípicos o en inglés outliers.  
    p.mb-5 A continuación, se presenta la muestra de un gráfico de cajas y bigotes, para la edad de las personas que reciben préstamo.        
    .row.mb-5.md-5
      .col-md-6.mb-5.mb-md-0
        

        
        p Retomemos la muestra de un gráfico de cajas y bigotes, para la edad de las personas que reciben préstamo, vista anteriormente.
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/T3/img-6.png', alt='Texto que describa la imagen')

          .tarjeta.faf.p-3(x="8%" y="50%" numero="P1")
            p.texto-blanco Muestra el número 18. La edad mínima de las personas que reciben préstamo.

          .tarjeta.faf.p-3(x="27%" y="63%" numero="P2")
            p.texto-blanco Cuartil 1 (Q1 = 31) debajo de ese valor está el 25 % de la edad de las personas que reciben préstamo.

          .tarjeta.faf.p-3(x="45%" y="13%" numero="P3")
            p.texto-blanco Cuartil 2 (Q2 = 45). La mediana debajo de ese valor está el 50 % de la edad de las personas que reciben préstamo.

          .tarjeta.faf.p-3(x="60%" y="63%" numero="P4")
            p.texto-blanco Cuartil 3 (Q3 = 57). Debajo de ese valor está el 75 % de edad de las personas que reciben préstamo.

          .tarjeta.faf.p-3(x="91%" y="50%" numero="P5")
            p.texto-blanco Muestra el número 84. La edad máxima de las personas que reciben préstamo.




      .col-md-6
        
        p Gráfico de cajas y bigotes estrato versus edad de las personas que reciben crédito. 
          
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/T3/img-7.png', alt='Texto que describa la imagen')

          .tarjeta.faf.p-3(x="24%" y="30%" numero="P1")
            p.texto-blanco <b>Estrato 0</b>, 50 % tiene una edad entre 32 y 50 años.

          .tarjeta.faf.p-3(x="33%" y="77%" numero="P2")
            p.texto-blanco <b>Estrato 1</b>, 50 % tiene una edad entre 27 y 51 años.

          .tarjeta.faf.p-3(x="43%" y="19%" numero="P3")
            p.texto-blanco <b>Estrato 2</b>, 50 % tiene una edad entre 30 y 54 años.

          .tarjeta.faf.p-3(x="52%" y="77%" numero="P4")
            p.texto-blanco <b>Estrato 3</b>, 50% tiene la edad entre 35 y 63 años.

          .tarjeta.faf.p-3(x="62%" y="25%" numero="P5")
            p.texto-blanco <b>Estrato 4</b>, 50 % tiene una edad entre 28 y 54 años.

          .tarjeta.faf.p-3(x="71%" y="75%" numero="P6")
            p.texto-blanco <b>Estrato 5</b>, 50 % tiene una entre 27 y 46.5 años.

          .tarjeta.faf.p-3(x="80%" y="45%" numero="P7")
            p.texto-blanco <b>Estrato 6</b>, *Solo 2 personas tienen una edad de 24 y 49 años respectivamente.

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
