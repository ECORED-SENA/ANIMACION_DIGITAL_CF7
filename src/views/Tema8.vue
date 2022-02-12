<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Render
    .row.justify-content-center
      .col-10
          .bloque-texto-a.color-terciario.p-4.p-md-5.mb-5 
            .row.m-0.align-items-center.justify-content-between
              .col-lg-4.mb-4.mb-lg-0
                br
              .col-lg-8
                .bloque-texto-a__texto.p-4
                  p El #[b #[i Render]] es el proceso que realiza la interpretación de una escena con varios elementos en ella, para ser “revelada” o convertida en una imagen o clip 2D, teniendo en cuenta información de luz, color, textura, profundidad, entre otros. Consiste en generar la animación final, basada en los parámetros que se les dieron a las diferentes capas y modos de fusión entre ellas, así como también los parámetros establecidos asignados.
          p.mb-5 El render tiene como fin que el clip de video resultante pueda ser visto con todos los elementos integrados, de manera fluida, y pueda ser llevado a diferentes plataformas, teniendo en cuenta también los parámetros de salida que se le asignaron al momento de renderizar.
      .col-8.mb-5.bg-color17
        .p-4
          p.mb-0.text-center Estas son algunas generalidades y acciones prácticas que usted debe conocer para renderizar:
    SlyderB(:datos="datosSlyder")

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Para renderizar',
        texto:
          'En adobe <b><i>After Effects</i></b>, exportar el video; la ruta para renderizar será la que se muestra en la imagen.',
        imagen: require('@/assets/curso/tema8/img2.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Llamado a software especializado',
        texto:
          'Al dar clic, <b><i>After Effects</b></i> hará el llamado a otro software especializado (<i>adobe media encoder</i>) para renderizado. Este es más rápido y eficiente que el que tiene <i>After Effects</i> integrado, el cual se despliega si le damos en “añadir a la cola de procesamiento”.',
        imagen: require('@/assets/curso/tema8/img3.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Selección del archivo',
        texto:
          'Se selecciona <b>h.264</b>, que es el archivo que, actualmente, se maneja mejor, pero es posible exportar el clip en otros formatos, desde imágenes hasta solo audio. Al desplegar dicha opción, se verán los formatos a escoger.',
        imagen: require('@/assets/curso/tema8/img4.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Parámetros',
        texto:
          'Se pueden variar muchos otros parámetros, tales como la velocidad de <b><i>bits</b></i>, si se desea que el video salga sin audio, o solo audio sin video, o si se quiere que salga adaptado a diversas plataformas de video, como <b><i>YouTube</b></i> o <b><i>Vimeo</b></i>.',
        imagen: require('@/assets/curso/tema8/img5.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Adaptación a plataformas de video',
        texto:
          'Para ello, se hace clic en <b>ajustes preestablecidos</b>, lo cual desplegará una ventana flotante; en ella, se seleccionan los parámetros de salida, según se desee.',
        imagen: require('@/assets/curso/tema8/img6.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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
