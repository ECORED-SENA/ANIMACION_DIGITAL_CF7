<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Tipos de luces en #[i After Effects]
    .row.justify-content-center
      .col-10(data-aos="slide-right")
          .bloque-texto-a.color-acento-botones.p-4.p-md-5.mb-5 
            .row.m-0.align-items-center.justify-content-between
              .col-lg-4.mb-4.mb-lg-0
                br
              .col-lg-8
                .bloque-texto-a__texto.p-4
                  p Las luces en After Effects, como en la vida real, son las que proporcionan, mediante su intensidad, valores tonales y de profundidad, generando sombras y puntos de iluminación cuando activamos las capas para volverlas capas 3D. Esto permite resaltar algún objeto, personaje o escenario dentro de la escena. Asimismo, con la iluminación se puede dar color a las escenas, lo que permite asignar una emoción a la toma, como tristeza, alegría, ira, suspenso, entre otras.
          p.text-center.mb-5 Conozca, a continuación, los tipos de luces más destacados en #[i After Effects]:
          LineaTiempoD.color-primario.mb-5
            .row(numero="1" titulo="Luz ambiental")
              .col-12
                p.mb-4 Esta luz no proviene de una fuente o foco de luz definido, sino que se encuentra en todas partes (como la luz del sol), creando una iluminación general para toda la escena y no genera ninguna sombra. Se utiliza frecuentemente en escenarios diurnos, en espacios abiertos o, si se requiere, para iluminar por igual toda la escena. La luz ambiental no se puede mover de sitio ni posee parámetros de ajuste, por lo que no se tiene mucho control sobre ella.
                img(src='@/assets/curso/tema4/img2.png', style='width: 800px').m-auto
            .row(numero="2" titulo="Luz concentrada")
              .col-12
                p.mb-4 Se caracteriza porque los rayos de luz emitidos presentan una densidad lumínica uniforme y emergen desde una única fuente de luz, permitiendo que se puedan dirigir o enfocar para iluminar un área o parte de un elemento en específico (como funciona una linterna). Suelen ser luces pequeñas y circulares, que emiten un haz de luz limitado por un cono de dirección al que se le puede ajustar el radio de iluminación y grado de nitidez. Se usan para iluminar y destacar una parte específica de una escena.
                img(src='@/assets/curso/tema4/img3.png', style='width: 800px').m-auto
            .row(numero="3" titulo="Luz puntual")
              .col-12
                p.mb-4 Luz ilimitada y omnidireccional; todos sus rayos provienen de un mismo punto o fuente de luz (como un bombillo colgado sobre un objeto para iluminarlo). La luz puntual puede acomodarse en diferentes sitios, para iluminar, puntualmente, un elemento o escena. Permite controlar la intensidad del brillo, entre mayor sea éste, mayor será el área de la escena directamente iluminada y mayor sombra se generará en los alrededores más alejados de la fuente de luz. A diferencia de la luz concentrada, en este tipo de luz no se puede ajustar el radio de luz.
                img(src='@/assets/curso/tema4/img4.png', style='width: 800px').m-auto
            .row(numero="4" titulo="Luz paralela")
              .col-12
                p.mb-4 Generalmente, tipo de luz que posee una luz que se distribuye de manera homogénea y uniforme en un área de cobertura más amplia. Es similar a una proyección de luz ilimitada desde una fuente de luz plana, en la que los rayos de luz emitidos tienen la misma potencia, son paralelos entre sí y se dirigen en una única dirección, ocasionando que no se genere una atenuación con la distancia, para lograr elementos o escenas mejor enfocadas.
                img(src='@/assets/curso/tema4/img5.png', style='width: 800px').m-auto
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/EfHSfM9h7PI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
  
</template>

<script>
export default {
  name: 'Tema1',
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
