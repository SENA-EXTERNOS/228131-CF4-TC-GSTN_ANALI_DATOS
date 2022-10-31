<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Organiza una tabla de datos y los tipos de variable

    .tarjeta.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-2
          img(src="@/assets/curso/temas/T2/img-1.png")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-4 Se hará mención a la organización de los datos en un esquema con las respectivas variables.
              p.mb-4 En las filas de una tabla de datos, se debe colocar observaciones o individuos y en las columnas las variables.
              p.mb-4 En la tabla 1 hay 5 observaciones iniciando en 1 y terminando en 5.
              p.mb-4 En las columnas se anotan las diferentes variables: edad, sexo, cabeza de hogar, caracterización ciudadana, estrato.

      .titulo-sexto.color-acento-contenido
        p.mb-0 
          p.mb-1 <b>Tabla 1</b> Tabla de datos en las columnas las variables vs observaciones en las filas

      .tabla-a.color-acento-botones.mb-5 
        table
          caption Nota.  Muestra en las filas las observaciones y en las columnas las variables. 
          thead
            tr
              th.tabla-b__header Observación o Individuo
              th.tabla-b__header Edad
              th.tabla-b__header Sexo
              th.tabla-b__header Cabeza de hogar
              th.tabla-b__header Tipo de trabajo
              th.tabla-b__header Estrato
          tbody
            tr
              td 1
              td 45
              td masculino
              td si
              td independiente
              td 1.0
            tr
              td 2
              td 45
              td femenino
              td no
              td otro
              td 3.0
            tr
              td 3
              td 28
              td femenino
              td no
              td otro
              td 3.0

            tr
              td 4
              td 30
              td femenino
              td si
              td emprendedor
              td 3.0
            tr
              td 5
              td 36
              td femenino
              td no
              td independiente
              td 2.0
            


    .row.justify-content-center(data-aos="fade-down").mt-5
      .col-10.col-lg-3
        .row.px-2.pt-2.h-100
          .col-10.m-0.nav-holder2.align-items-center.rounded-15.box-shadow.px-0
            figure
              img(src="@/assets/curso/temas/T2/img-2.png", alt="Texto que describa la imagen")
            .text.p-lg-2.p-4
              .row.text-center.px-1.pt-1.mt-md-4.pt-md-0.mt-lg-3.mt-xl-4
                .h4.small-text.mt-sm-3.mt-md-0 Edad 
                p.mt-3.small-text Esta es una variable numérica discreta toma los valores: 45, 28, 30,36.

      .col-10.col-lg-3
        .row.px-2.pt-2.h-100
          .col-10.m-0.nav-holder2.align-items-center.rounded-15.box-shadow.px-0
            figure
              img(src="@/assets/curso/temas/T2/img-3.png", alt="Texto que describa la imagen")
            .text.p-lg-2.p-4
              .row.text-center.px-1.pt-1.mt-1.mt-md-4.mt-lg-3.mt-xl-4.pt-md-0
                .h4.small-text.mt-1.mt-md-0 Sexo o género 
                p.mt-3.small-text Es una variable categórica nominal toma los valores: masculino y femenino.
      .col-10.col-lg-3
        .row.px-2.pt-2.h-100
          .col-10.m-0.nav-holder2.align-items-center.rounded-15.box-shadow.px-0
            figure
              img(src="@/assets/curso/temas/T2/img-4.png", alt="Texto que describa la imagen")
            .text.p-lg-2.p-4
              .row.text-center.px-1.pt-1.mt-1.mt-md-4.mt-lg-3.mt-xl-4.pt-md-0
                .h4.small-text.mt-1.mt-md-0 Cabeza de hogar 
                p.mt-3.small-text Es una distinción categórica nominal toma los valores: si, no.

      .col-10.col-lg-3
        .row.px-2.pt-2.h-100
          .col-10.m-0.nav-holder2.align-items-center.rounded-15.box-shadow.px-0
            figure
              img(src="@/assets/curso/temas/T2/img-5.png", alt="Texto que describa la imagen")
            .text.p-lg-2.p-4
              .row.text-center.px-1.pt-1.mt-1.mt-md-4.mt-lg-3.mt-xl-4.pt-md-0
                .h4.small-text.mt-1.mt-md-0 Tipo de trabajo
                p.mt-3.small-text Dicho ítem es una variable categórica nominal toma los valores: independiente, otro, emprendedor.
  

    .row.justify-content-center(data-aos="fade-down").mt-5
      .col-10.col-lg-3
        .row.px-2.pt-2.h-100
          .col-10.m-0.nav-holder2.align-items-center.rounded-15.box-shadow.px-0
            figure
              img(src="@/assets/curso/temas/T2/img-6.png", alt="Texto que describa la imagen")
            .text.p-lg-2.p-4
              .row.text-center.px-1.pt-1.mt-md-4.pt-md-0.mt-lg-3.mt-xl-4
                .h4.small-text.mt-sm-3.mt-md-0 Estrato 
                p.mt-3.small-text En este caso es una variable numérica discreta toma los valores: 1.0, 2.0, 3.0.

      .col-10.col-lg-3
        .row.px-2.pt-2.h-100
          .col-10.m-0.nav-holder2.align-items-center.rounded-15.box-shadow.px-0
            figure
              img(src="@/assets/curso/temas/T2/img-7.png", alt="Texto que describa la imagen")
            .text.p-lg-2.p-4
              .row.text-center.px-1.pt-1.mt-1.mt-md-4.mt-lg-3.mt-xl-4.pt-md-0
                .h4.small-text.mt-1.mt-md-0 Variables 
                p.mt-0.small-text Las cuantitativas son continuas y discretas.
                p.mt-0.small-text Ejemplo: el peso, la edad tomando los meses, días
                p.mt-1.small-text Las cualitativas: categóricas ordinales y categóricas nominales
      .col-10.col-lg-3
        .row.px-2.pt-2.h-100
          .col-10.m-0.nav-holder2.align-items-center.rounded-15.box-shadow.px-0
            figure
              img(src="@/assets/curso/temas/T2/img-8.png", alt="Texto que describa la imagen")
            .text.p-lg-2.p-4
              .row.text-center.px-1.pt-1.mt-1.mt-md-4.mt-lg-3.mt-xl-4.pt-md-0
                .h4.small-text.mt-1.mt-md-0 Categórica nominal
                p.mt-3.small-text representan estados sin clasificación intrínseca, ejemplo: marcas de zapatos, género, raza, etnia.

      .col-10.col-lg-3
        .row.px-2.pt-2.h-100
          .col-10.m-0.nav-holder2.align-items-center.rounded-15.box-shadow.px-0
            figure
              img(src="@/assets/curso/temas/T2/img-9.png", alt="Texto que describa la imagen")
            .text.p-lg-2.p-4
              .row.text-center.px-1.pt-1.mt-1.mt-md-4.mt-lg-3.mt-xl-4.pt-md-0
                .h4.small-text.mt-1.mt-md-0 Categórico ordinal
                p.mt-1.small-text Hace referencia a calificar valores que representan categorías con datos intrínsecos, tiene características de orden, ejemplo: malo, bueno, excelente.
    
    
    .col-sm.mb-5.mb-sm-0.align-items-center.mt-5
      ul.lista-ul.mb-5
        li 
          i.fas.fa-angle-right.color-acento-contenido
          | Esos datos deben estar colocados en una tabla organizada.
        li 
          i.fas.fa-angle-right.color-acento-contenido
          | Las tablas deben estar numeradas y explicar brevemente que contienen. Las tablas deben llevar un nombre generalmente en la parte superior.
        li 
          i.fas.fa-angle-right.color-acento-contenido
          | Las tablas se pueden numerar con números romanos: I, II, III, IV, V, VI, VII, etc.
        li 
          i.fas.fa-angle-right.color-acento-contenido
          | Las tablas se pueden numerar con números arábigos: 1, 2, 3,4, 5, 6, 7, 8, etc.
        li 
          i.fas.fa-angle-right.color-acento-contenido
          | La frecuencia absoluta es las veces que se repite el dato.
        li 
          i.fas.fa-angle-right.color-acento-contenido
          | Dentro de la tabla se debe especificar la variable o dato a estudiar o analizar.

      p.mt-3 <b>Lind et al, (2019)</b>


      .tarjeta.p-3.mt-5
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-2
            img(src="@/assets/curso/temas/T2/img-10.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                p.mb-3 Se emplearon referentes de créditos de consumo otorgados en Medellín y obtenidos de la página de datos abiertos de la alcaldía de la capital de Antioquía en formato csv, Metada alcaldía de Medellín, (2022). 
                p.mb-3 <b>Se construirá una tabla de distribución de frecuencias por año:</b>
          
      .titulo-sexto.color-acento-contenido.mt-5
        p.mb-0 
          p.mb-1 <b>Tabla 2</b> Año Vs. Frecuencia absoluta de beneficiarios del crédito de consumo

      .tabla-a.color-acento-botones.mb-5 
        table
          caption Nota. Muestra año Vs. Número de beneficiarios del crédito de consumo.  
          thead
            tr
              th.tabla-b__header Año
              th.tabla-b__header Total, beneficiarios por año (frecuencia absoluta)

          tbody
            tr
              td 2017
              td 1921
            tr
              td 2018
              td 8765
            tr
              td 2019
              td 1466
            tr
              td Total
              td 12152
            


    .row.mb-5.mt-5
      .col-md-4.mb-5.mb-md-0
        figure
          img(data-aos='fade-right')(src='@/assets/curso/temas/T2/img-13.png', alt='')

      .col-md-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="fac")
          .row(titulo="Frecuencia absoluta acumulada")
            .col-md-10.mb-4.mb-md-0
              p.mb-3 Es cuando se van sumando las frecuencias por cada año de forma acumulada.

          .row(titulo="Frecuencia absoluta relativa")
            .col-md-10.mb-4.mb-md-0
              p Es el resultado de dividir la frecuencia absoluta acumulada entre el total de las repeticiones en este caso 12152.
          
          .row(titulo="Frecuencia absoluta relativa porcentual")
            .col-md-10.mb-4.mb-md-0
              p Se calcula la frecuencia absoluta relativa porcentual: multiplicando por 100 la absoluta relativa.




      .titulo-sexto.color-acento-contenido.mt-5
        p.mb-0 
          p.mb-1 <b>Tabla 3</b> Año vs frecuencia absoluta relativa de beneficiarios del crédito de consumo

      .tabla-a.color-acento-botones.mb-5 
        table
          caption Nota. Muestra año vs frecuencia absoluta relativa y porcentual de beneficiarios del crédito de consumo. 
          thead
            tr
              th.tabla-b__header Año
              th.tabla-b__header Total beneficiarios por año (frecuencia absoluta)
              th.tabla-b__header Frecuencia absoluta acumulada
              th.tabla-b__header Frecuencia absoluta relativa
              th.tabla-b__header Frecuencia absoluta relativa porcentual (%)

          tbody
            tr
              td 2017
              td 1921
              td 1921
              td 1921/12152 = 0.158
              td 15.80%
            tr
              td 2018
              td 8765
              td 10686
              td 10686/12152=0.8793
              td 87.93%
            tr
              td 2019
              td 1466
              td 12152
              td 12152/12152 = 1
              td 100%
            tr
              td <b>Total</b>
              td 12152
              td 
              td 
              td 

      p.mb-5 La tabla de datos esta ordenada mediante filas y columnas, las primeras corresponden a la información en forma horizontal, cada uno de los individuos. Las columnas en forma vertical haciendo referencia a cada una de las variables de las reseñas consignadas. La idea fundamental es hacer un tabloide y comparar de forma fácil las diversas características que tienen cada una de las variables de estudio en el problema a resolver. Los datos pueden ser cualitativos o cuantitativos.

    .bloque-texto-a.fab.p-4.p-md-4.mb-5 
      .row.m-0.align-items-center.justify-content-between.zoom-in
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p <b>Intervalos de clase:</b> son aquellos en los que se agrupan y ordenan los valores observados. Una variable de la tabla se puede agrupar por intervalo y para ello, se debe tomar los valores máximo y mínimo y dividirlo en cuantas clases o intervalos de clase se va a dividir dicho intervalo. Estos siempre serán cerrados por la izquierda y abiertos por la derecha, excepto el ultimo. La frecuencia o número de casos que cae en ese estaría en una columna al lado llamada frecuencia absoluta o simplemente frecuencia.        

        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/temas/T2/img-14.png", alt="Logo de la normatividad")

    p.mb-5 <b>Ejemplo</b>

    .titulo-sexto.color-acento-contenido.mt-5
      p.mb-0 
        p.mb-1 <b>Tabla 4</b> Muestra intervalos vs frecuencia absoluta


    .tabla-b.color-acento-contenido.mb-5
      .tabla-b__header
        h4.mb-0 Intervalo Vs Frecuencia
      table
        caption Nota.: muestra intervalos vs frecuencia absoluta. 
        tr
          th.h4.fae Intervalo
          th.h4.fae Frecuencia
        tr
          td.h5 [0,2)
          td.h5 2
        tr
          td.h5 [2,4)
          td.h5 3
        tr
          td.h5 [4,6)
          td.h5 4
        tr
          td.h5 [6,8)
          td.h5 5
        tr
          td.h5 [8,10)
          td.h5 3

    .row.mb-5.mt-5
      .col-md-4.mb-5.mb-md-0
        figure
          img(data-aos='fade-right')(src='@/assets/curso/temas/T2/img-15.png', alt='')

      .col-md-8
        p.mb-3 Se tienen las siguientes 12 notas calificadas del número 1 al 10 en una evaluación de matemáticas correspondiente a la primera evaluación, siendo 1 la menor y 10 la mayor. Se quieren agrupar por intervalos mediante 5 clases. Las 12 notas son:
        p.mb-0 2,3,5,6,7,8,9,3,7,9,10,9
        p.mb-3 Este conjunto de datos se quiere agrupar en forma de intervalo.
        p.mb-3 Primero se extraerá el valor menor y el mayor. En este caso la estimación mínima es 2 y la máxima es 10, se calcula el tamaño del intervalo, posteriormente se mira cuantos datos caen en ese intervalo, generalmente no se trabajan con más de 10, se puede buscar que la longitud o amplitud del intervalo sea un numero entero, aunque no es estricto, podría ser decimal.
       
    TabsC.color-primario
      .py-3.py-md-4(titulo="Amplitud")
        .row
          .col-md-12.mb-4.mb-md-0
            h4 Amplitud
            p.mb-3 Para calcular la amplitud o longitud del intervalo se utiliza la siguiente fórmula:
          .row.justify-content-around.align-items-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/T2/img-16.png', alt='Texto que describa la imagen')
            p.mb-3 Suponiendo que se quieren 4 clases por lo tanto el número de clases = 4
            p.mb-3 Valor máximo es 10, por lo tanto, el máximo = 10
            p.mb-3 Valor mínimo es 2, por lo tanto, mínimo = 2
            p.mb-3 La diferencia entre el valor máximo y mínimo es 8, por ende, valor máximo-valor mínimo = 8 
            p.mb-3 <b>Para hallar la amplitud o longitud del intervalo</b> el valor anterior lo divididos entre el número de clases que escogimos, en este caso 4
            p.mb-3 Por lo tanto, seria 8 dividido en 4 resultando 2, entonces, la amplitud o longitud del intervalo = 2
            p.mb-3 Se inicia con el valor mínimo y el intervalo cerrado a la izquierda y abierto a la derecha con una longitud de 2, es decir, [2,4) (ver tabla 5)
        
      .py-3.py-md-4(titulo="Datos que caben en el intervalo")
        .row
          .col-md-12.mb-4.mb-md-0
            h4 Datos que caben en el intervalo
            p.mb-3 Se observa cuantas notas caen en cada uno de los intervalos ordenados de forma creciente y se coloca el número en la columna de la frecuencia.
            p.mb-3 La suma de las frecuencias debe ser igual al número total de notas en este caso 12
            .titulo-sexto.color-acento-contenido.mt-5
              p.mb-0 
                p.mb-1 <b>Tabla 5</b> Intervalo Vs Frecuencia notas
          .row.justify-content-around.align-items-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/T2/img-17.png', alt='Texto que describa la imagen')

          .col-sm.mb-5.mb-sm-0.align-items-center.mt-5
            ul.lista-ul.mb-5
              li 
                i.fas.fa-angle-right.color-acento-contenido
                | Se observa que el primer intervalo [2,4) tiene una frecuencia de 3 que son los datos: 2, 3,3
              li 
                i.fas.fa-angle-right.color-acento-contenido
                | Se evidencia que el segundo intervalo [4,6) tiene una frecuencia de 1 que es el dato: 5
              li 
                i.fas.fa-angle-right.color-acento-contenido
                | Para el tercer intervalo se aprecia que [6,8) tiene una frecuencia de 3 que son los datos: 6, 7, 7
              li 
                i.fas.fa-angle-right.color-acento-contenido
                | Se examina que el cuarto intervalo [8,10] tiene una frecuencia de 5 que son los datos: 8, 9, 9 ,9, 10
        
      .py-3.py-md-4(titulo="Promedio")
        .row
          .col-md-12.mb-4.mb-md-0
            h4 Promedio 
            p.mb-3 Si se tienen los datos agrupados como en la tabla 5. Ahora se pide calcular el promedio, tomando un punto medio de cada intervalo, se llama marca de clase, luego se debe multiplicar por la frecuencia y dividirlo por el número total de la frecuencia.
            .col-sm.mb-5.mb-sm-0.align-items-center.mt-5
              ul.lista-ul.mb-5
                li 
                  i.fas.fa-angle-right.color-acento-contenido
                  | En el primer intervalo el punto medio o marca de clase es 3
                li 
                  i.fas.fa-angle-right.color-acento-contenido
                  | En el segundo intervalo el punto medio o marca de clase es 5
                li 
                  i.fas.fa-angle-right.color-acento-contenido
                  | En el tercer intervalo el punto medio o marca de clase es 7
                li 
                  i.fas.fa-angle-right.color-acento-contenido
                  | En el cuarto intervalo el punto medio o marca de clase es 9
            .row.mb-3
              .col-8
                img(src='@/assets/curso/temas/T2/img-18.png', alt='Texto que describa la imagen')

            p.mb-3 El valor anterior es una aproximación del promedio.
            p.mb-3 El verdadero valor del promedio se puede calcular si no se tienen los datos agrupados por intervalos. En este caso se tiene los valores exactos, por lo tanto, se podría calcular.

            .row.mb-3
              .col-8
                img(src='@/assets/curso/temas/T2/img-19.png', alt='Texto que describa la imagen')

        
          

</template>

<script>
export default {
  name: 'Tema2',
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
