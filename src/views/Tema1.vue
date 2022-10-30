<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Titulo de primer nivel
      
    .tarjeta.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-2
          img(src="@/assets/curso/temas/T1/img-1.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p La estadística descriptiva, como la estadística inferencial, es una de las dos ramas principales de la estadística. Es la disciplina responsable de recopilar, almacenar, organizar, tabular o graficar y calcular los parámetros básicos de los conjuntos de datos. Para luego describirlos cuantitativamente. En este apartado se abordará en forma amplia la estadística descriptiva partiendo de conceptos básicos, para que logre el aprendizaje necesario que le permitirá llevar a la práctica lo aprendido en el análisis de datos.

    .tarjeta.faa.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.mb-5 Para entrar en materia se dará la explicación de los conceptos teóricos y prácticos referente a la estadística descriptiva, Martínez, (2019).
            p.mb-3 El promedio o media <i><b>XX</b></i> se calcula sumando todos los datos y dividiendo entre el número total de los mismos.
            p.mb-3 El promedio se simboliza con la letra X y una barra lineal ━ encima de esa letra: X
            p.mb-3 <i><b>XX</b></i> = promedio = media

          .col-md-6
            figure
              img(src='@/assets/curso/temas/T1/img-2.png', alt='Texto que describa la imagen')
            
        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.mb-2 <b>Ejemplo:</b>
            p.mb-5 calcular el promedio de los siguientes valores: 3, 4, 5, 6,3
        
          
            figure
              img(src='@/assets/curso/temas/T1/img-3.png', alt='Texto que describa la imagen')
              figcaption n = número de datos = 5

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.mb-3 La desviación estándar mide qué tanto se alejan los datos del promedio, es decir, si hay mucha variación entre los datos. Si estos se alejan el valor de la desviación va a crecer, pero si se acercan va a disminuir.
            p.mb-3 La desviación se simboliza con la letra griega sigma: σσ
            p.mb-3 La desviación es la raíz cuadrada de la varianza:
            .row.mb-3
              .col-5
                img(src='@/assets/curso/temas/T1/img-5.png', alt='Texto que describa la imagen')
            p.mb-3 La varianza se simboliza con (σ)<span class="exponente">2</span> (σ)<span class="exponente">2</span> 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T1/img-4.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.mb-0 <b>Moda:</b> es el dato que más se repite.
            p.mb-3 En este caso la moda es 3 se repite 2 veces.
            p.mb-3 <b>Media geométrica:</b> Es la raíz enésima del producto de los números.
            p.mb-3 En el ejemplo 3, 4, 5, 6,3 la media geométrica sería la raíz quinta debido a que son 5 de la multiplicación de los 5 elementos
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T1/img-6.png', alt='Texto que describa la imagen')
              figcaption Se utiliza generalmente para promediar porcentajes, índices y el incremento gradual distante de un periodo a otro en alguna actividad económica.

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.mb-0 <b>Media armónica:</b> es el recíproco de la media aritmética. Se calcula como el número total de observaciones dividido por la suma de los recíprocos
            .row.mb-3
              .col-5
                img(src='@/assets/curso/temas/T1/img-8.png', alt='Texto que describa la imagen')
            p.mb-3 Se emplea cuando la variable viene expresada en unidades que son el cociente de dos magnitudes simples. <b>Ejemplo:</b> para el cálculo del promedio de velocidad que se define como distancia sobre tiempo.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T1/img-7.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.mb-3 <b>Rango de los datos: </b>se calcula restando el valor máximo de los datos menos el valor mínimo de los mismos.
            .row.mb-3
              .col-10
                img(src='@/assets/curso/temas/T1/img-10.png', alt='Texto que describa la imagen')
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/T1/img-9.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.mb-3 <b>Cálculo de cuartiles: </b>
            p.mb-3 Debajo del Cuartil 1(Q1) está el 25% de los datos, debajo del cuartil 2(Q2) es la mediana o dato central se ubica el 50% de los datos, debajo del Q3 se obtiene el 75% de los referentes.
            p.mb-3 Para el cálculo de los cuartiles primero se ordena de menor a mayor.
            p.mb-3 Cuando el número es par se utiliza la fórmula para la posición del cuartil en la secuencia ordenada:

          .col-md-6
            figure
              img(src='@/assets/curso/temas/T1/img-11.png', alt='Texto que describa la imagen')
              figcaption Donde k es el número del cuartil K=1, 2, 3 N = es el número de datos


        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.mb-3 En caso de que el número de datos sea impar se coloca la fórmula para la posición del cuartil en la secuencia ordenada:
            .row.mb-3
              .col-10
                img(src='@/assets/curso/temas/T1/img-13.png', alt='Texto que describa la imagen')

          .col-md-6
            figure
              img(src='@/assets/curso/temas/T1/img-12.png', alt='Texto que describa la imagen')

    .bloque-texto-a.fab.p-4.p-md-4.mb-5 
      .row.m-0.align-items-center.justify-content-between.zoom-in
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p En el siguiente ejercicio se aprecia mejor el cálculo de cuartiles.
            p.mb-0 Dados los siguientes números calcule los cuartiles: 
            p.mt-3 cuartil 1(Q1), cuartil 2 (Q2), cuartil 3 (Q3)
            .row.mb-3
              .col-10
                img(src='@/assets/curso/temas/T1/img-15.png', alt='Texto que describa la imagen')            

        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/temas/T1/img-14.png", alt="Logo de la normatividad") 

    .row.mb-5.md-5
      .col-md-4.mb-5.mb-md-0
        figure
          img(data-aos='fade-right')(src='@/assets/curso/temas/T1/img-16.png', alt='')

      .col-md-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="fac")
          .row(titulo="Se ordena de menor a mayor ")
            .col-md-10.mb-4.mb-md-0
              p.mb-3 3, 3, 4, 5, 6 es impar N=5
              p.mb-1 La posición del  Q<span class="exponentes">1</span> Q<span class="exponentes">1</span> es
              .row.mb-3
                .col-10
                  img(src='@/assets/curso/temas/T1/img-17.png', alt='Texto que describa la imagen')

          .row(titulo="La posición 1.5")
            .col-md-10.mb-4.mb-md-0
              p La posición 1.5 se obtiene promediando el primer elemento y el segundo.
              .row.mb-3
                .col-7
                  img(src='@/assets/curso/temas/T1/img-18.png', alt='Texto que describa la imagen')
          
          .row(titulo="La posición del Q2 Q2")
            .col-md-10.mb-4.mb-md-0
              p La posición del  Q<span class="exponentes">2</span> Q<span class="exponentes">2</span> es
              .row.mb-3
                .col-7
                  img(src='@/assets/curso/temas/T1/img-19.png', alt='Texto que describa la imagen')

          .row(titulo="El valor del cuartil 2")
            .col-md-7.mb-4.mb-md-0
              p.mb-2 El valor del cuartil 2 Q<span class="exponentes">2</span> Q<span class="exponentes">2</span> es el elemento que está en la tercera posición de la secuencia
              p.mb-2 El valor del Q<span class="exponentes">2</span> Q<span class="exponentes">2</span>: es Q<span class="exponentes">2</span> = 4 Q<span class="exponentes">2</span> = 4
              p.mb-4 La posición del Q<span class="exponentes">3</span> Q<span class="exponentes">3</span>
          
            .col-md-5
              figure
                img(src='@/assets/curso/temas/T1/img-20.png', alt='Texto que describa la imagen')

          .row(titulo="El valor del Q3 Q3")
            .col-md-10.mb-4.mb-md-0
              p es: el promedio del elemento que está en la posición 4 con el que está en la posición 5.
              .row.mb-3
                .col-7
                  img(src='@/assets/curso/temas/T1/img-21.png', alt='Texto que describa la imagen')

    .p-3.mb-5
      .row.justify-content-around.align-items-center
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-4 <b>Detección de datos atípicos (<i>outliers</i>):</b>
              p Los valores atípicos o en inglés <i>outliers</i> se caracterizan por ser extremadamente grandes o pequeños, diferentes a los comunes de la muestra. los cuales pueden influenciar en la media y desviación de una muestra. Principalmente si el valor atípico es grande referente a los otros.
            
        .col-3.col-sm-2.col-lg-2
          img(data-aos='fade-left')(src='@/assets/curso/temas/T1/img-22.png')

    h3.mb-4 Ejemplos 
    p En la siguiente serie de datos [2, 6, 8, 20, 30, 40 500] el valor atípico es 500, esta cifra puede influenciar en la media y desviación de un muestreo.


    PasosA.color-acento-botones.mb-3
      .row.justify-content-around.align-items-center
        .col.mb-8.mb-md-0
          p En la siguiente serie de datos [500, 600,700, 2,5, 1000, 500] los valores atípicos son 2 y 5. 
          
        .col-md-4
          figure
            img(src='@/assets/curso/temas/T1/img-23.png')


      .row.justify-content-around.align-items-center
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/T1/img-24.png')
        .col.mb-8.mb-md-0.text-start
          p Para hallar el intervalo de los valores atípicos primero se calcula la diferencia entre Q3(cuartil 3) y Q1(cuartil 1), obteniendo el rango intercuartil iqr = Q3-Q1. Este rango intercuartil abarca el 50% de los datos. 
          


      .row
        .col.mb-8.mb-md-0
          p Luego se calcula el intervalo (Q1-1.5iqr, Q3 +1.5iqr), la parte de la izquierda del intervalo, otro valor que sea inferior se considera atípico. La parte derecha del intervalo cualquier valor que esté por encima se denomina valor atípico.
          
        .col-md-4
          figure
            img(src='@/assets/curso/temas/T1/img-25.png')



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
