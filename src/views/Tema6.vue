<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Efectos visuales
    p.mb-5 Los efectos visuales básicos para animación digital son aquellos que están presentes en la mayoría de producciones audiovisuales, mediante la manipulación de las imágenes; van desde animaciones hasta eliminación de fondo y #[i #[b matte painting]].
    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema6/img1.svg')
      .tarjeta.color-acento-botones.p-3(x="35.6%" y="34.3%" numero="")
        .row
          .col-4
            img(src='@/assets/curso/tema6/img1.png', style='width: 200px').m-auto
          .col-8
            p Proceso mediante el cual se crean o modifican imágenes de un segmento audiovisual (videojuego, animación, comercial, película, etc.) después de grabarse, añadiendo algún tipo de efecto óptico que brinde al espectador una ilusión realista sobre el escenario, paisaje o personaje de fantasía que esté observando, o sobre las acciones que se estén desarrollando en la pieza audiovisual.
      .tarjeta.color-acento-botones.p-3(x="34.1%" y="50%" numero="")
        .row
          .col-4
            img(src='@/assets/curso/tema6/img2.png', style='width: 200px').m-auto
          .col-8
            p Usualmente, se planifican en etapas previas a la postproducción, pero es en esta última que se diseñan y editan los efectos que se añadirán al audiovisual, a través del uso de técnicas de modelado, diseño gráfico, animación y otros similares, que permiten integrarlos en la composición y visualización de la secuencia.
      .tarjeta.color-acento-botones.p-3(x="37.2%" y="72%" numero="")
        .row
          .col-4
            img(src='@/assets/curso/tema6/img3.png', style='width: 200px').m-auto
          .col-8
            p Se puede decir que el primer gran logro en el campo de los efectos visuales por computador se produjo en 1977, con el estreno de la película Star Wars, donde se utilizaron diferentes técnicas para lograrlos, como el matte painting, maquetas e inserciones digitales.
      .tarjeta.color-acento-botones.p-3(x="64.3%" y="34.3%" numero="")
        .row
          .col-4
            img(src='@/assets/curso/tema6/img4.png', style='width: 200px').m-auto
          .col-8
            p Con los avances tecnológicos y paso del tiempo, se aceleró la implementación de este tipo de efectos: se han ido creando y desarrollando técnicas mejoradas, cada vez más realistas, como el #[i Computer-Generated Imagery] (CGI), utilizado para crear o reconstruir todo tipo de escenarios y personajes digitalmente. Personajes originales (de carne y hueso) reconstruidos por CGI.
      .tarjeta.color-acento-botones.p-3(x="65.9%" y="50%" numero="")
        .row
          .col-4
            img(src='@/assets/curso/tema6/img5.png', style='width: 200px').m-auto
          .col-8
            p Actualmente, se pueden crear todo tipo de efectos visuales y recrear gran parte de una película digitalmente, gracias a la industria de los efectos digitales. En algunas películas de superhéroes de Marvel, el 80% de los planos lleva implementación digital y el 100% se retoca digitalmente; o pueden ser totalmente digitales, como en el caso de Warcraft: El origen (2016), demostrando cuánto ha evolucionado la industria.
      .tarjeta.color-acento-botones.p-3(x="62.6%" y="72%" numero="")
        .row
          .col-4
            img(src='@/assets/curso/tema6/img6.png', style='width: 200px').m-auto
          .col-8
            p #[i Chroma Key] (#[i Keying])
            p #[i Digital Matte Painting]
            p #[i Color grading] o etalonaje
            p #[i Tracking] o seguimiento
    p.mb-5.text-center Conozca y profundice en algunas de las técnicas más utilizadas en los VFX:
    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--verde").mb-5
      .row(titulo="Chroma Key (Keying)")
        .col-12
          .p-4
            img(src='@/assets/curso/tema6/img7.png', style='width: 900px').m-auto.mb-4
            p.mb-0 El #[b #[i chroma key]] o #[b #[i keying]] es una técnica audiovisual de composición que consiste en filmar un personaje u objeto frente a un fondo de color específico, por lo general verde o azul, para aislarlo y recortarlo perfectamente; posteriormente, extraerlo y superponerlo sobre un fondo o escenario diferente, que puede ser real o creado digitalmente.
      div(titulo="Digital Matte Painting")
        .row
          .col-12
            .p-4
              img(src='@/assets/curso/tema6/img8.png', style='width: 900px').m-auto.mb-4
              p.mb-0 El #[b #[i Digital Matte Painting]] hace uso de técnicas 2D y 3D que combinan habilidades de composición fotográfica, producción 3D y pintura digital para el diseño y creación de cualquier tipo de fondo, entorno o escenario digital; haciendo posible la construcción de mundos imaginarios que parecen realistas y que, en la vida real, serían muy costosos o imposibles de filmar.
      div(titulo="Color grading o etalonaje")
        .row
          .col-12
            .p-4
              img(src='@/assets/curso/tema6/img9.png', style='width: 900px').m-auto.mb-4
              p.mb-0 Técnica que permite modificar el color, digitalmente, para realzar los tonos de una pieza audiovisual y corregir problemas de exposición, parámetros de luz, cambiar aspecto o look, siluetas, e integrar los niveles de diferentes planos. Ello para lograr un film con una paleta de colores compacta y homogénea, que transmita emociones correctas al espectador (tristeza, alegría, asombro, empatía, etc.), en el momento adecuado y de acuerdo con su propósito.
      div(titulo="Tracking o seguimiento")
        .row
          .col-12
            .p-4
              img(src='@/assets/curso/tema6/img10.png', style='width: 900px').m-auto.mb-4
              p.mb-0 Uso de marcadores o pixeles situados en lugares frente a la cámara, para establecer puntos de memoria para que el computador reconozca la posición, tanto de la cámara como de los personajes u objetos, antes y después del movimiento, permitiendo calcular su trayectoria en una escena y, posteriormente, superponer otros elementos digitalmente para que sigan la misma trayectoria. Esto permite identificar qué objetos están fijos, cuáles se mueven y revelar la posición y trayectoria de la cámara dentro de una escena, estabilizando así un plano, incluyendo efectos visuales, elementos virtuales y modificar o cambiar el escenario o entorno.
    p.mb-5 Afiance su conocimiento en las técnicas de efectos visuales y genere elementos animados para proyectos de animación digital. Visualice cada uno de los siguientes videos explicativos y lleve registro de los aspectos más importantes:
    LineaTiempoD.color-primario.mb-5
      .row(numero="1" titulo="Fondo verde")
        .col-12
          .p-4
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/K37DUweo7Y4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .row(numero="2" titulo="Track 2")
        .col-12
          .p-4
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/FV-dbYSG7B4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .row(numero="3" titulo="Máscara")
        .col-12
          .p-4
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/AYbnIrcC2gY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .row(numero="4" titulo="Seguir trazado")
        .col-12
          .p-4
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/yVfYWppN1dM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .row(numero="5" titulo="Loop")
        .col-12
          .p-4
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/_qZYr3Pk8BM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .row(numero="6" titulo="Lluvia")
        .col-12
          .p-4
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/UYte59-KAEw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .row(numero="7" titulo="Nubes 2")
        .col-12
          .p-4
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/VtCxpmIW2iI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .row(numero="8" titulo="Efecto Agua")
        .col-12
          .p-4
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/GsdFaHmJ4Uw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .row(numero="9" titulo="Camera Track")
        .col-12
          .p-4
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/pJvVkAH6dFk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .row(numero="10" titulo="Rotoscopia")
        .col-12
          .p-4
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/EBSY1TPDLCU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .row(numero="11" titulo="GreenScreen")
        .col-12
          .p-4
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/EijOKKORZ3o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .row(numero="12" titulo="Rotación continua")
        .col-12
          .p-4
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/gpkptbMWJGA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .row(numero="13" titulo="Partículas")
        .col-12
          .p-4
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/ZEqkTEJCfkg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .row(numero="14" titulo="Nubes")
        .col-12
          .p-4
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/46CEvGZubds" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .row(numero="15" titulo="Fuego toon")
        .col-12
          .p-4
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/S2Q96efUOtw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
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
