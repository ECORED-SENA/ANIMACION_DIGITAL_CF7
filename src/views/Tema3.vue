<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Parámetros de reflexión y refracción en animación 3D
    .row.bg-color10
      .px-5.pt-5
        .col-12
          p.mb-5 La mayoría de los programas utilizados para la animación 3D manejan valores de reflexión y refracción para la creación de materiales y texturas.
          .row.justify-content-center.mb-5
            .col-lg-10
              SlyderF(columnas="col-12")
                .tarjeta.p-4
                  img(src='@/assets/curso/tema3/img1.png', style='width: 600px').m-auto
                .tarjeta.p-4
                  img(src='@/assets/curso/tema3/img2.png', style='width: 600px').m-auto
          .row.pt-5
            .col-lg-4.d-flex.mb-5.mb-lg-0
              .p-4.bg-color11
                img(src='@/assets/curso/tema3/img1.svg', style='width: 100px').m-auto.img-deco2
                .p-4.text-deco2
                  h3.text-center Rango
                  p El nivel de reflexión se manipula con un rango de entre 0 y 1.
            .col-lg-4.d-flex.my-5.my-lg-0
              .p-4.bg-color11
                img(src='@/assets/curso/tema3/img2.svg', style='width: 100px').m-auto.img-deco2
                .p-4.text-deco2
                  h3.text-center Valor de reflexión
                  p Si un material tiene un valor de reflexión de 0, este será mate; en cambio, si tiene un valor de 1, reflejará todos los objetos que se encuentren en su entorno.
            .col-lg-4.mt-5.mt-lg-0
              .p-4.bg-color11
                img(src='@/assets/curso/tema3/img3.svg', style='width: 100px').m-auto.img-deco2
                .p-4.text-deco2
                  h3.text-center Glossiness
                  p Otro valor que se debe tener en cuenta es el glossiness, que usa el mismo rango que el valor anterior. Cuando su valor es 1, entonces la superficie tendrá un reflejo totalmente nítido; sin embargo, en 0, los reflejos se dispersan y se verá borroso.
    img(src='@/assets/curso/tema3/img3.png', style='width: 800px').m-auto.mt-5

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
