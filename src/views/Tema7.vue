<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido.mb-0(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Efectos de sonido
    .row.bg-color10
      .px-5.pt-5
        .col-12
          .row.justify-content-center.mb-5
            .col-10
              p.mb-5 Los efectos de sonido permiten ajustar el sonido final, para poder adaptarlo a un proyecto audiovisual que se esté realizando. Estos efectos se pueden aplicar de forma digital, pero anteriormente se realizaban de forma manual. La aplicación de efectos de sonido permite que las escenas sean creíbles, ya que le aportan cercanía a la realidad.
              img(src='@/assets/curso/tema7/img1.png', style='width: 800px')(data-aos="slide-up").m-auto.mb-5
            .col-10.mb-5
              .p-4.bg-color11
                p.mb-0 Entre los sonidos más comúnmente usados, están las pisadas, el sonido del viento, sonidos de animales, el agua, los murmullos, los gritos, vehículos que pasan, golpes, caídas, entre muchos más.
          #t_7_1
          .titulo-segundo.color-secundario
            h2 7.1 El sonido
    p.mb-5 Todo aquello que está en movimiento genera diferentes vibraciones u ondas sonoras (producción de sonido) que se desplazan a través de un medio que puede ser sólido, líquido o gaseoso, por ejemplo, el aire, el agua, o un metal (capacidad de propagación); tales ondas sonoras son captadas por el oído (órgano perceptor) y convertidas en impulsos eléctricos que el cerebro interpreta como sonidos diversos, generando variedad de sensaciones y emociones.
    .row.justify-content-center
      .col-10
        img(src='@/assets/curso/tema7/img1.svg', style='width: 800px').m-auto
      .col-12
        .p-4.bg-color13
          p.mb-0.text-center.text-white #[b Las principales características del sonido son:]
      .col-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/eVP6V0bS5bQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    separador
    .row.bg-color14
      .px-5.pt-5
        .col-12
          #t_7_2
          .titulo-segundo.color-secundario
            h2 7.2 La música en el cine 3D
          .row.justify-content-center
            .col-10.bg-color15.mb-5
              .p-4
                .row.justify-content-end
                  .col-8.col-lg6.bg-color16.my-5(data-aos="slide-left")
                    .p-4
                      p.mt-5 La música en el cine es una parte fundamental para efectos narrativos, que puede ser compuesta, arreglada o recopilada, la cual en sincronía va sujeta a cada momento del proyecto audiovisual. La música, entonces, es funcional, va de la mano con la imagen a la que acompaña, contextualizando el proyecto, dotándolo de características físicas, psicológicas, técnicas, entre otras.
                      img(src='@/assets/curso/tema7/img3.png', style='width: 200px; position: relative; top: 50px').m-auto
            h3.mb-5.text-center A continuación, se detallan algunos aspectos importantes de dichas características:
            .col-10
              LineaTiempoD.color-primario
                .row(numero="1" titulo="Características físicas")
                  .col-12
                    .p-4
                      .row
                        .col-4
                          img(src='@/assets/curso/tema7/img4.png', style='width: 400px').m-auto
                        .col-8
                          p Musicalizando el paso a paso de un personaje de animación, como se hacía con Mickey Mouse, o sonando una samba para acentuar geográficamente que los sucesos están ocurriendo en Brasil, o música barroca para acentuar los sucesos en una época temporal como la del siglo XVI, así como también la recreación de eventos meteorológicos, como lluvia, nieve, brisa, etc.
                .row(numero="2" titulo="Características psicológicas")
                  .col-12
                    .p-4
                      .row
                        .col-4
                          img(src='@/assets/curso/tema7/img5.png', style='width: 400px').m-auto
                        .col-8
                          p Genera el estado de ánimo de la escena, así como también enfatiza las emociones de personajes en momentos determinados; a su vez, genera estados de ánimo al espectador, informa sobre cosas que están sucediendo en la escena, pero no se ven, como pasos acercándose. Predispone al espectador a momentos álgidos de euforia o miedo.
                .row(numero="3" titulo="Características técnicas")
                  .col-12
                    .p-4
                      .row
                        .col-4
                          img(src='@/assets/curso/tema7/img6.png', style='width: 400px').m-auto
                        .col-8
                          p Sirve de conexión entre escenas, haciendo la transición entre ellas de manera fluida; genera continuidad en todo el proyecto audiovisual, utilizando coherencia con sonidos que pueden repetirse y complementarse.
                .row(numero="4" titulo="Apoyo y fuerza")
                  .col-12
                    .p-4
                      .row
                        .col-4
                          img(src='@/assets/curso/tema7/img7.png', style='width: 400px').m-auto
                        .col-8
                          p La música y los sonidos seleccionados correctamente apoyan y dan fuerza a cada escena, ayudando a que el público se sienta inmerso dentro de las mismas, brindando una experiencia más realista, con calidad acústica, capaz de transmitir diferentes sensaciones y emociones, ya sean de tristeza, alegría, temor, frustración, tranquilidad, entre otras, que enriquecen la experiencia.
    separador.mb-5
    #t_7_3
    .titulo-segundo.color-secundario
      h2 7.3 Elementos de análisis del sonido
    p.mb-5 Los sonidos, música y cualquier efecto sonoro que se incluya en un proyecto audiovisual ha de ser analizado desde tres aspectos fundamentales: banda sonora, ambientación sonora y efectos de audio.
    img(src='@/assets/curso/tema7/img3.svg', style='width: 900px')(data-aos="slide-right").m-auto.mb-5
    p.mb-5.text-center Se muestran, a continuación, detalles específicos de los puntos de análisis del sonido en la animación y producciones audiovisuales:
    .row
      .col-12
        .p-2
          .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = true")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema7/img4.svg')})`}")
              .tarjeta-slide__contenido.p-4.p-xl-5
                p.text-center Banda sonora, ambientación sonora y efectos de audio.
      .col-12.col-lg-6.d-flex
        .p-2
          .tarjeta.tarjeta-slide.izquierda.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema7/img5.svg')})`}")
              .tarjeta-slide__contenido.p-4.p-xl-5
                p #[b Música o banda sonora] es, básicamente, la que empodera la historia, le brinda diferentes estados de ánimo, dependiendo del contexto de cada escena, y ayuda a marcar el ritmo del proyecto audiovisual.
      .col-12.col-lg-6
        .p-2
          .tarjeta.tarjeta-slide.derecha.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema7/img6.svg')})`}")
              .tarjeta-slide__contenido.p-4.p-xl-5
                p La #[b ambientación sonora] es la que sugiere el tipo de atmósfera que se debe manejar para cada escenario; por ejemplo, en el escenario de Silent Hill, lo que generalmente se escucharía en dicho ambiente serían sonidos de alarma al cambiar al mundo pesadilla, transmitiendo un aire de intranquilidad.
      .col-12
        .p-2
          .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = true")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema7/img7.svg')})`}")
              .tarjeta-slide__contenido.p-4.p-xl-5
                p Brindan información importante al espectador, ya sea a través del diálogo con otros personajes o por la producción de algún sonido específico, por ejemplo, el sonido lejano de alguien pidiendo ayuda, el cual se va incrementando a medida que se acerca, dando contexto a la ubicación; o de una alarma que se dispara, que generalmente es indicativo de que algo grave va a pasar.
                p.mb-0 También, los pesados pasos de un monstruo que se acerca, que, aún sin verlo, su sonido nos sugiere que se trata de algo de gran tamaño, generando temor al imaginar con quién habría un enfrentamiento; es decir, mejoran la inmersión.
      .col-12.col-lg-6
        .p-2
          .tarjeta.tarjeta-slide.izquierda.color-primario(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema7/img8.svg')})`}")
              .tarjeta-slide__contenido.p-4.p-xl-5
                p Cada uno de estos elementos debe ser acorde con los demás elementos que hacen parte de la atmósfera.
                p.mb-0 La iluminación y paleta de colores influyen en la psique del jugador. Al usar colores cálidos y buena iluminación, se pueden usar melodías y efectos de sonido más alegres y optimistas; mientras que, al usar colores fríos e iluminación tenue, se pueden usar sonidos y melodías relacionadas con el misticismo, la calma o la tensión, todo depende de lo que se quiera reflejar en escena.
      .col-12.col-lg-6.d-flex
        .p-2
          .tarjeta.tarjeta-slide.derecha.color-primario(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema7/img9.svg')})`}")
              .tarjeta-slide__contenido.p-4.p-xl-5
                p Si hay lluvia, se usarán efectos de esta golpeando el suelo y música de calma, dependiendo del contexto en que se esté desarrollando la escena; la neblina se asocia con una melodía alusiva al misterio; o si hay rayos, se usarán efectos de trueno y una musicalidad en concordancia con el tema del escenario.
      .col-12
        .p-2
          .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = true")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema7/img10.svg')})`}")
              .tarjeta-slide__contenido.p-4.p-xl-5
                p Si se trata de una batalla post apocalíptica con armas láser, se usarán efectos especiales de cómo sonaría un disparo de rayos láser; o si se trata de una escena donde hay fuego, es necesario reproducir el efecto chisporroteante del fuego al arder; o si se lanza algún hechizo o conjuro, se debe usar un efecto místico o mágico. 
                p.mb-0 #[b ¡Importante!]
                p.mb-0 Todos los efectos sonoros se deben utilizar teniendo en cuenta su duración e intensidad, pues deben encajar perfectamente con los efectos visuales presentados en escena, de manera que mantengan la atención del espectador, logrando emocionarlo, desconcertarlo, asustarlo, etc.
    separador.mb-5
    #t_7_4
    .titulo-segundo.color-secundario
      h2 7.4 Formatos de sonido
    p.mb-5 Los formatos de sonido son decodificadores que transmiten la señal junto al video; los más usados por la industria de los videojuegos son, entre otros, #[i Dolby Digital], #[i Digital Sourround], #[i WAV] y #[i AIFF], AIFF#[i AIFF], #[i AAC], #[i WMA].
    .row.py-5.justify-content-center
      .col-10.bg-color3.mb-5(data-aos="slide-up")
        .row.text-deco3
          .col-12
            img(src='@/assets/curso/tema7/img11.svg', style='width: 500px').m-auto
            .p-4
              p.mb-0.text-center Conozca las especificidades de los formatos de sonido más usuales en la industria de la animación y de producción audiovisual:
      .col-10
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Dolby Digital")
            .row.align-items-center
              .col-12
                img(src='@/assets/curso/tema7/img12.svg', style='width: 300px').m-auto.mb-3
                p.mb-0 Es el más utilizado a lo largo de la historia, gracias a que presenta mayor compatibilidad con un gran número de equipos, aunque puede sufrir cierta pérdida de calidad al comprimir el sonido. En los últimos años, ha venido trabajando con otros formatos #[i Dolby Digital Plus, Dolby Digital TRUE HD y Dolby ATOMS], que evitan comprimir el audio, conservando la fidelidad de los sonidos.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Digital Surround (DTS)")
            .row.align-items-center
              .col-12
                img(src='@/assets/curso/tema7/img13.svg', style='width: 300px').m-auto.mb-3
                p.mb-0 Es competencia directa de #[i Dolby Digital]; se caracteriza por conservar un sonido fuerte y nítido, aunque, al comprimirse, también presenta pérdida de calidad, pero menor que #[i Dolby Digital], y, al igual que esta, ha venido trabajando en su formato DTS – HD sin compresión, con el fin de conservar la alta definición del sonido.
          .tarjeta.color-acento-botones--borde.p-4(titulo="MAV y AIFF")
            .row.align-items-center
              .col-12
                img(src='@/assets/curso/tema7/img14.svg', style='width: 300px').m-auto.mb-3
                p.mb-0 Son formatos de archivo sin compresión similares, aunque tienen ciertas diferencias de encapsulado. Mientras que el formato de archivo con compresión más utilizado en la programación de videojuegos es el #[i MP3] y, aunque el #[i AAC] de Apple y el #[i WMA] de Microsoft ofrecen versiones mejoradas al #[i MP3], en el mundo de la programación para videojuegos no se suelen usar, debido a su falta de compatibilidad.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Foley")
            .row.align-items-center
              .col-12
                img(src='@/assets/curso/tema7/img15.svg', style='width: 300px').m-auto.mb-3
                p.mb-0 Su origen se da en 1927, gracias a #[i Jack Foley], quien desarrolló esta técnica para la película Showboat, realizando para ella efectos de sonido en tiempo real. Los #[i Foley] son aquellos sonidos que vienen a representar los sonidos que generan las cosas cotidianas, como pasos, sonido de cosas cayéndose, ráfagas de viento, vidrios rompiéndose, el choque de elementos, el crujir de la leña en el fuego, entre otros.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Particularidades de los Foley")
            .row.align-items-center
              .col-12
                img(src='@/assets/curso/tema7/img16.svg', style='width: 300px').m-auto.mb-3
                p.mb-0 Los sonidos #[i Foley] pueden lograrse desde muchas fuentes, diferentes tipos de material, pisos, líquidos, etc., realizándose pruebas para conseguir el sonido ideal para cada situación que lo amerite. Hay algunos tips que se utilizan frecuentemente para generar sonidos específicos: para sillas viejas, se crean sonidos crujientes, para los cuales se tiene control de la intensidad y de la duración; para fracturas, se suele emplear el crujir de un tallo de apio partiéndose…
    p.mb-5 Aprenda a asignar efectos de audio, como #[i reverb], #[i delay], entre otros; descubra cómo cortar y editar sonido, aumentar volumen y generar transición entre sonidos, visualizando el siguiente video: #[b Edición y efectos de audio].
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/b9YcZPKEE4g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
  
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
