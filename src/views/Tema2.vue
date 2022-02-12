<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Propiedades de la luz
    .row.mb-5.align-items-center
      .col-lg-8.mb-4.mb-lg-0
        .bloque-texto-c.color-secundario.p-4
          i.fas.fa-quote-right
          h2.my-4 Para dar inicio a las propiedades de la luz, vale la pena resolver antes la pregunta #[span.text-deco1 ¿Qué es la luz?] Se puede definir la luz como un fenómeno electromagnético que se propaga en forma de ondas, las cuales pueden ser, o no, percibidas por la visión, utilizando como herramienta los ojos.
      .col-lg-4
        figure(data-aos="flip-left")
          img(src='@/assets/curso/tema2/img1.png', style='width: 400px').m-auto
    p.mb-5 Según la intensidad con que el reflejo de estas ondas ilumina las superficies en el entorno, será posible ver los objetos y distinguir los colores alrededor. Entre las propiedades más importantes de la luz, están las mencionadas a continuación:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Ug4XECwsp_E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.justify-content-center
      .col-lg-8.mb-4
        p Es gracias al fenómeno de reflexión de la luz que se puede visualizar el entorno, los espacios, las cosas; al ser iluminados por una fuente lumínica natural, como el sol, o artificial, como una lámpara, los rayos se reflejan sobre las superficies de los diferentes elementos presentes, favoreciendo conocer detalles, como su tamaño, color y forma.
      .col-lg-8.mb-5.bg-color3
        .p-4
          p.text-center.mb-0 Profundice estos y otros conceptos, a continuación:
    TabsA.color-acento-botones
      .tarjeta.color-acento-botones--borde.p-4(titulo="Imagen especular")
        .row.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img3.png', style='width: 450px')
          .col-lg-6
            p.mb-0 La formación de imágenes en espejos, en donde los rayos de luz rebotan sobre la superficie lisa de un espejo, formando una imagen por efecto de la reflexión de la luz.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Reflexión interna total")
        .row.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img2.png', style='width: 450px')
          .col-lg-6
            p.mb-0 Es un tipo de reflexión especial que se observa en las gemas, en donde los rayos de luz se reflejan y rebotan contra las superficies internas del cristal, produciendo destellos.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Halo solar")
        .row.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img4.png', style='width: 450px')
          .col-lg-6
            p.mb-0 Es un círculo difuso que rodea el sol, producido por la reflexión de la luz en la superficie de las gotas de agua que flotan en la atmósfera.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Tipo de materiales reflectivos")
        .row.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img5.png', style='width: 450px')
          .col-lg-6
            p.mb-0 Entre los materiales u objetos que reflejan una mayor cantidad de luz, se pueden encontrar los cuerpos reflejantes, que son aquellos que no dejan pasar los rayos de luz, sino que la desvían en otra dirección; por ejemplo, los espejos (cuerpos reflejantes por excelencia), el vidrio, los metales pulidos como el acero, la plata, el oro y el aluminio y algunos plásticos transparentes como el Tereftalato de Polietileno (Mylar) y el metacrilato espejo.
      
  
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
