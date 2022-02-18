<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido.mb-0(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 #[i Motion graphics]
    .row.bg-color10
      .px-5.pt-5
        .col-12
          .row.justify-content-center
            .col-10
              p.mb-5 Los #[i #[b motion graphics]], o grafismos en movimiento, son un estilo de animación que combina múltiples disciplinas, como el diseño gráfico, la fotografía, la ilustración, el 3D, VFX, música, video, etc., con el fin de añadir movimiento a elementos estáticos y producir una composición dinámica. Estos elementos pueden ser fotografías, gráficos, frases, imágenes, logos.
          img(src='@/assets/curso/tema5/img1.png', style='width: 800px')(data-aos="slide-up").m-auto.mb-5
          .row.mb-5
            .col-lg-4.mb-4.mb-lg-0
              .p-4.bg-color12
                p.mb-0.text-center Cambios de tamaño
            .col-lg-4.mb-4.mb-lg-0
              .p-4.bg-color12
                p.mb-0.text-center Transiciones
            .col-lg-4
              .p-4.bg-color12
                p.mb-0.text-center Principios de animación
          p.mb-5.text-center Los elementos básicos para el diseño y producción de un #[i motion graphics] son:
    .tarjeta.tarjeta--azul.p-4.mb-5
      PasosB.color-acento-contenido
        .row(titulo="Líneas").justify-content-center
          .col-10
            p.mb-5 Muchos objetos usados para realizar un #[i motion graphic] se construyen sobre componentes lineales, generalmente direccionales, que sugieren un movimiento natural, dirigiendo la vista y la atención de los espectadores a lo largo de la pieza.
            img(src='@/assets/curso/tema5/img3.png', style='width: 820px').m-auto
        .row(titulo="Color").justify-content-center
          .col-10
            p.mb-5 Subdividido en tono de brillo y saturación, la intensidad de un tono de color es un tema muy complejo, pero tiene mucho potencial para su uso en los #[i motion graphics].
            img(src='@/assets/curso/tema5/img4.png', style='width: 820px').m-auto
        .row(titulo="Textura").justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            p Transmite una sensación táctil al espectador, por lo cual es conveniente pensar en cómo y cuándo usar elementos con curvas y superficies suaves o cuándo es mejor utilizar elementos angulares o dentados y con superficies rugosas; todo depende de lo que se quiera transmitir. Sirve tener cierta consistencia en la textura o, de lo contrario, el trabajo puede generar demasiado “ruido visual”, haciendo que se vea sobrecargado y pesado.
          .col-lg-4
            img(src='@/assets/curso/tema5/img5.png', style='width: 420px').m-auto
        .row(titulo="Valores").justify-content-center
          .col-10
            p.mb-5 Se refieren al juego de luces y sombras, las cuales se pueden generar fácilmente, dependiendo del programa en el que se esté trabajando, por ejemplo, #[i Blender], que permite generar luces virtuales para crear sombras virtuales, simplemente ubicando el foco de luz orientado hacia los elementos que se quiere iluminar y sombrear.
            img(src='@/assets/curso/tema5/img6.png', style='width: 820px').m-auto
        .row(titulo="Formas").justify-content-center
          .col-10
            p.mb-5 Se trata de la dimensión o área delimitada del elemento o figura geométrica con la que se está trabajando, la cual se puede alterar realizándole diferentes variaciones isotópicas, modificando su grosor y relleno.
            img(src='@/assets/curso/tema5/img7.png', style='width: 820px').m-auto
        .row(titulo="Espacio").justify-content-center
          .col-10
            p.mb-5 Lugar que ocupará cada uno de los elementos; se divide, básicamente, en dos: espacio negativo y espacio positivo, lo cual es útil para enmarcar una pieza o composición y establecer qué detalles son importantes y cuáles no lo son tanto. En el espacio positivo, se ubica lo que se quiere resaltar y que se considera tiene mayor importancia.
            img(src='@/assets/curso/tema5/img8.png', style='width: 820px').m-auto
        .row(titulo="Morphing").justify-content-center
          .col-lg-4.mb-4.mb-lg-0
            img(src='@/assets/curso/tema5/img1.gif', style='width: 420px').m-auto
          .col-lg-6
            p Es una de las técnicas más usadas en #[i motion graphics]; consiste en tomar la imagen o video de un personaje u objeto inicial, el cual puede ser real o no, para transformarlo en otro diferente, haciendo uso de #[i softwares] de procesamiento de imágenes y video. Permite crear personajes, objetos y acciones que brinden la sensación de haber producido una metamorfosis. Para ello, se necesita digitalizar las imágenes del elemento inicial y el objeto final en el que va a quedar transformado; posteriormente, el #[i software] busca los puntos en común entre ambas imágenes, procesa la transformación y realiza la animación.
    p.mb-5 Afiance su conocimiento en las técnicas de efectos visuales y genere elementos animados para proyectos de animación digital. Visualice cada uno de los siguientes videos explicativos y lleve registro de los aspectos más importantes:
    LineaTiempoD.color-primario.mb-5
      .row(numero="1" titulo="Formas")
        .col-12
          .p-4
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/LnusEG9-Knw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .row(numero="2" titulo="Transformación y color")
        .col-12
          .p-4
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/It8Ki4V-qT0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .row(numero="3" titulo="Editor de gráficos")
        .col-12
          .p-4
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/6K8yGckJCTs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .row(numero="4" titulo="Texto")
        .col-12
          .p-4
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/F5_-PUR_3ek" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .row(numero="5" titulo="Máscara sena")
        .col-12
          .p-4
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/4UrN3ROshY8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    img(src='@/assets/curso/tema5/img2.svg', style='width: 420px')(data-aos="slide-left").m-auto
  
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
