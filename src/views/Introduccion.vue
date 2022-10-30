<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row
      .col-xl-8.mb-4
        .bloque-texto-q.color-secundario.p-4
          .bloque-texto-b__texto
            p.mt-5 Estimado aprendiz, reciba una cordial bienvenida a este recurso de aprendizaje orientado a la estadística descriptiva. Durante su desarrollo, se abordarán los principios básicos, la organización de datos y tipos de variables, y finalmente la realización de informes estadísticos. Al finalizar, obtendrá los conocimientos para desenvolverse en el campo de la estadística descriptiva, específicamente será capaz de clasificar datos muestrales, elaborar tablas, crear gráficas y diseñar un informe. Antes de empezar el desarrollo del componente formativo, se sugiere revisar el siguiente video para que amplíe e identifique el panorama de aprendizaje:
            p.mt-3 <b>¡Muchos éxitos, que tenga un aprendizaje significativo!</b>

      .col-xl-3
        figure.mt-5
          img(data-aos='fade-right')(src='@/assets/curso/temas/introduccion/img-1.png', alt='')
      
    .col-12.mt-5
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
