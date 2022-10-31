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
              p La parte visual es importante en cualquier tipo de análisis o estudio mediante un gráfico se facilita la comprensión de los datos y la relevancia en la investigación planteada. Existen representaciones animadas dinámicas y estáticas en esta sección se trabajará con dinámicos. Los dinámicos con la librería plotly, plotly, (2022).

    .tarjeta.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-3 <b>Se abordarán diferentes gráficos estadísticos:</b>
              p.mb-3 Para estas se emplearon referentes de créditos de consumo otorgados en Medellín y obtenidos de la página de datos abiertos de la alcaldía de la capital de Antioquia en formato csv, Metada alcaldía de Medellín, (2022). 
              
        .col-3.col-sm-2.col-lg-4
          img(src="@/assets/curso/temas/T3/img-2.png")
        
    h3.mb-3 Gráfico de histograma
    p.mb-3 Se representa en  forma horizontal o vertical, también a manera de barras muestra el dato y las veces que se repite o su frecuencia


    .titulo-sexto.color-acento-contenido.mt-5
      p.mb-0 
        p.mb-1 <b>Figura 1</b>  Muestra un histograma cantidad de hombres vs. cantidad de mujeres.


    .row.justify-content-around.align-items-center.mb-3
      .col-8
        img(src='@/assets/curso/temas/T3/img-3.png', alt='Texto que describa la imagen')

    h3.mb-3 Gráfico circular
    p.mb-3 muestra en forma de círculo generalmente en porcentaje, indica la proporción que aparece la cifra respecto al total.

    .row.mb-5.md-5
      .col-md-6.mb-5.mb-md-0
        .titulo-sexto.color-acento-contenido.mt-5
          p.mb-0 
            p.mb-1 <b>Figura 2</b>  Muestra un gráfico Circular género Vs. monto del préstamo.
        figure
          img(data-aos='fade-right')(src='@/assets/curso/temas/T3/img-4.png', alt='')

      .col-md-6
        .titulo-sexto.color-acento-contenido.mt-5
          p.mb-0 
            p.mb-0 <b>Figura 3</b> Muestra un gráfico Circular el porcentaje por estratos los cuales reciben el monto del préstamo.
        figure
          img(data-aos='fade-right')(src='@/assets/curso/temas/T3/img-5.png', alt='')

    h3.mb-3 Gráfico de cajas y bigotes
    p.mb-3 Estos en forma de caja o rectángulo se emplean para apreciar los cuartiles y el valor mínimo a la izquierda, valor máximo a la derecha con líneas verticales.
    p.mb-3 <b>Q1: cuartil 1, Q2: cuartil 2(mediana), Q3: cuartil 3, valor mínimo, valor máximo</b>
    p.mb-3 Debajo del Cuartil 1(Q1) está el 25% de los datos, debajo del cuartil 2(Q2) es la mediana o dato central se ubica el 50% de los datos, debajo del Q3 se obtiene el 75% de los datos.
    p.mb-3 En el rango intercuartil = Q3-Q1 está el 50% de los datos
    p.mb-3 Por debajo del valor mínimo y por encima del máximo están los valores atípicos o en inglés <i>outliers</i> 
        

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
