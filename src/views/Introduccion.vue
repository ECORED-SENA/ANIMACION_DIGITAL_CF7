<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center
      .col-8.bg-color1
        p
    .row.justify-content-center
      .col-11.col-lg-10.bg-color2
        .row.justify-content-end.align-items-center
          img(src='@/assets/curso/tema1/img1.svg' style='width: 240px').m-auto.img-deco1(data-aos="slide-up").d-none.d-lg-block
          .col-12.col-lg-8.me-xl-5
            p.text-center.my-4 Se le da la bienvenida al estudio del componente siete de Animación digital. Para comenzar, visualice el recurso que se muestra a continuación. #[span.text-deco1 #[b ¡Adelante!]]
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/sA8Z4TQwLrA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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
