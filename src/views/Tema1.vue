<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido.mb-0(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Conceptos básicos de iluminación
    .row.bg-color2
      .px-5.pt-5
        .col-12
          .row.justify-content-center
            .col-10(data-aos="slide-left")
              .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
                .row.m-0.align-items-center.justify-content-between
                  .col-lg-4.mb-4.mb-lg-0
                    br
                  .col-lg-8
                    .bloque-texto-a__texto.p-4
                      p Uno de los aspectos más importantes en la creación de imágenes y su integración en escenarios es la definición de los elementos que iluminan la escena. Por esta razón, es necesario definir los objetos que añaden iluminación a los objetos que constituyen la escena, los tipos de luces y sus características básicas.
        #t_1_1
        .titulo-segundo.color-secundario
          h2 1.1 Teoría de luz
        p.mb-5 Los puntos de iluminación, sin duda, hacen parte del realismo que le integramos a la atmósfera o al ambiente que estamos creando y, a su vez, son elementos más delicados de utilizar, al influir enormemente en el tiempo necesario para renderizar una escena. Cada uno de los objetos utilizados dispone de parámetros y propiedades específicas, que pueden ser, o no, comunes a los tipos de iluminación, tal como se verá en este contenido.
        .row.justify-content-center
          .col-10(data-aos="slide-up")
            img(src='@/assets/curso/tema1/img2.png', style='width: 800px').m-auto
    .row.mb-5
      .col-12.bg-color3
        .p-5
          h3.text-center.text-deco1.mb-4 Teoría básica luces y sombras
          p.mb-4 ¿Cómo se afecta la percepción de los objetos según la clase de luz que los ilumina? Estos van a mostrar ciertas características gracias al tipo de iluminación que se utiliza.  Es posible distinguir ciertos aspectos de los elementos, tales como su color, textura, volumen, forma, ubicación en el espacio, entre otros, los cuales pueden variar debido al uso de un tipo de iluminación en particular. Gracias a las luces y sombras, es posible percibir la forma tridimensional de un objeto, por eso es preciso mencionar que hay que tener en cuenta qué tipo de iluminación está afectando nuestra escena; para ello, a continuación, se mencionan los tipos de luces que se implementan:
          .row
            .col-lg-6.mb-4.mb-lg-0.d-flex
              .p-5.bg-color4
                p #[b Luz natural]: la luz natural es la que emite el sol y se proyecta sobre los cuerpos, pero varía según la hora del día. Por ello, es posible notar el momento del día según la posición del sol. Asimismo, las sombras variarán y será posible ver que, según se mueva el sol, las sombras serán más largas o más cortas sobre el piso, las sombras de los objetos serán marcadas de forma dura y densa. Esto puede variar solo cuando se encuentra un cielo nublado, el cual sirve de filtro, lo que hará que la luz sea menos densa y las sombras sean más tenues, menos marcadas. La hora del día también influirá en cómo se ve cualquier objeto, si se ve más frío o más cálido.
            .col-lg-6
              .p-5.bg-color4
                p #[b Luz artificial]: la luz artificial sería toda aquella producida por linternas, lámparas, bombillos, fogatas, velas, antorchas, entre otras. Puede propagarse de forma recta o radial, puede tener diferentes posiciones y orientaciones, así como también variedad de colores, intensidades y texturas
                img(src='@/assets/curso/tema1/img3.svg', style='width: 250px').m-auto
    TabsC.color-primario
      .py-3.py-md-4(titulo="Aspectos importantes de la luz")
        .row
          .col-12
            SlyderE(indicadores="derecha")
              .row
                .col-lg-6.mb-4.mb-lg-0
                  .cajon.color-secundario.p-4.mb-4
                    ul.lista-ul--color.lista-ul
                      li 
                        i.fas.fa-gamepad(style="color: #FA9300")
                        |
                        p #[b Luz directa]: es la luz que se emite desde una fuente propia, por ejemplo, el sol, bombillos, antorchas.
                      li 
                        i.fas.fa-gamepad(style="color: #FA9300")
                        |
                        p #[b Luz reflejada]: es la luz que se recibe de un cuerpo u objeto que la refleja, pero no es propia de él; un ejemplo de ello serían las luces que llegan a los objetos luego de rebotar en superficies metálicas.
                      li 
                        i.fas.fa-gamepad(style="color: #FA9300")
                        |
                        p #[b Dirección de la luz]: es la posición del foco de luz con respecto al elemento que vamos a iluminar.
                      li 
                        i.fas.fa-gamepad(style="color: #FA9300")
                        |
                        p #[b Luz frontal]: situada frente al objeto.
                .col-lg-6
                  .titulo-sexto.color-acento-contenido
                    p.mb-0 #[b Figura 3]. Ejemplo de luz frontal en #[i software Blender]
                  img(src='@/assets/curso/tema1/img3.png', style='width: 650px').m-auto
              .row
                .col-lg-6.mb-4.mb-lg-0
                  .cajon.color-secundario.p-4.mb-4
                    ul.lista-ul--color.lista-ul
                      li 
                        i.fas.fa-gamepad(style="color: #FA9300")
                        |
                        p #[b Luz lateral]: situada a alguno de los lados del objeto.
                .col-lg-6
                  .titulo-sexto.color-acento-contenido
                    p.mb-0 #[b Figura 4]. Ejemplo de luz lateral en #[i software Blender]
                  SlyderA
                    .row
                      .col-12
                        img(src='@/assets/curso/tema1/img4.png', style='width: 650px')
                    div
                      img(src='@/assets/curso/tema1/img5.png', style='width: 463px')
              .row
                .col-lg-6.mb-4.mb-lg-0
                  .cajon.color-secundario.p-4.mb-4
                    ul.lista-ul--color.lista-ul
                      li 
                        i.fas.fa-gamepad(style="color: #FA9300")
                        |
                        p #[b Luz cenital]: situada arriba del objeto.
                .col-lg-6
                  .titulo-sexto.color-acento-contenido
                    p.mb-0 #[b Figura 5]. Ejemplo de luz cenital en #[i software Blender]
                  img(src='@/assets/curso/tema1/img6.png', style='width: 650px').m-auto
              .row
                .col-lg-6.mb-4.mb-lg-0
                  .cajon.color-secundario.p-4.mb-4
                    ul.lista-ul--color.lista-ul
                      li 
                        i.fas.fa-gamepad(style="color: #FA9300")
                        |
                        p #[b Contraluz]: esta luz se sitúa detrás del objeto.
                .col-lg-6
                  .titulo-sexto.color-acento-contenido
                    p.mb-0 #[b Figura 6]. Ejemplo de contraluz en #[i software Blender]
                  img(src='@/assets/curso/tema1/img7.png', style='width: 650px').m-auto
              .row
                .col-lg-6.mb-4.mb-lg-0
                  .cajon.color-secundario.p-4.mb-4
                    ul.lista-ul--color.lista-ul
                      li 
                        i.fas.fa-gamepad(style="color: #FA9300")
                        |
                        p #[b Luz suave]: se genera cuando la fuente de luz se extiende y se dispersa, como sería el caso de los rayos del sol filtrados por nubes, o una bombilla con un pedazo de tela, o una lámpara, lo cual hace que la luz se difumine y produzca sombras transparentes no tan #[b perceptibles] como con la luz dura.
                .col-lg-6
                  .titulo-sexto.color-acento-contenido
                    p.mb-0 #[b Figura 7]. Ejemplo de luz suave en #[i software Blender]
                  img(src='@/assets/curso/tema1/img8.png', style='width: 650px').m-auto
      .py-3.py-md-4(titulo="Intensidad de la luz")
        .row
          .col-lg-6.mb-4.mb-lg-0
            p Las propiedades de la luz cuando golpean al objeto se pueden clasificar de dos maneras principales, que son:
            .cajon.color-secundario.p-4.mb-4
              ul.lista-ul--color.lista-ul
                li 
                  i.fas.fa-gamepad(style="color: #FA9300")
                  |
                  p #[b Luz dura]: se genera por una fuente con foco intenso, esta va a generar sombras más marcadas y más oscuras.
          .col-lg-6
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 8]. Ejemplo de luz dura en #[i software Blender]
            img(src='@/assets/curso/tema1/img9.png', style='width: 650px').m-auto
      .py-3.py-md-4(titulo="Aspectos importantes de las sombras")
        .row
          .col-lg-6.mb-4.mb-lg-0
            p Las sombras cumplen un papel fundamental en cualquier composición, pues ayudan a generar volumen a los objetos. Se pueden clasificar de tres maneras:
            .cajon.color-secundario.p-4.mb-4
              ul.lista-ul--color.lista-ul
                li 
                  i.fas.fa-gamepad(style="color: #FA9300")
                  |
                  p #[b Sombras propias]: son las sombras que se encuentran en los objetos, en las partes del mismo donde la luz no alcanza a llegar.
                li 
                  i.fas.fa-gamepad(style="color: #FA9300")
                  |
                  p #[b Sombras proyectadas]: son las sombras que un objeto proyecta sobre la superficie donde se encuentra estacionado.
                li 
                  i.fas.fa-gamepad(style="color: #FA9300")
                  |
                  p #[b Sombra reflejada]: son las sombras que el objeto genera en otro objeto cercano a este.
          .col-lg-6
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 9]. Ejemplo de luces y sombras afectando a un grupo de objetos
            img(src='@/assets/curso/tema1/img10.png', style='width: 350px').m-auto
      .py-3.py-md-4(titulo="Triángulo básico de iluminación")
        .row
          .col-lg-6.mb-4.mb-lg-0
            p Es el set adecuado para iluminar una escena y así conseguir resultados efectivos. Este esquema situaría la luz principal, una luz de relleno y la contraluz, que se complementan entre sí. La luz principal se sitúa hacia el objeto, la luz de relleno va al lado opuesto, con una intensidad más baja, y la contraluz se sitúa por detrás, para darle profundidad a la escena.
          .col-lg-6
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 10]. Triángulo de iluminación
            img(src='@/assets/curso/tema1/img11.png', style='width: 350px').m-auto
    separador
    #t_1_2
    .titulo-segundo.color-secundario
      h2 1.2 Teoría del color
    figure(data-aos="slide-up")
      img(src='@/assets/curso/tema1/img4.svg').m-auto
    .row.mb-4.bg-color6
      .p-4
        p.mb-0 Estudie atentamente los principales colores, sus efectos y reacciones positivas y negativas en las emociones y estados de ánimo:
    p.mb-5 En el desarrollo de videojuegos, los colores tienen diversos significados y funcionalidades, esenciales en el diseño de escenarios idóneos que logren transmitir diferentes sensaciones y emociones en puntos concretos del juego, a esto se le conoce como psicología del color. Un mismo color puede brindar sentimientos divergentes dependiendo de la situación, por ejemplo, el rojo se usa generalmente para simbolizar el amor, pero también se puede relacionar con la agresión; o el verde muchas veces lo asociamos con la naturaleza, la tranquilidad, de igual forma, puede representar algo tóxico o venenoso, es decir, todo depende del contexto en el que se encuentre.
    .row.justify-content-center.mb-5
      .col-8.bg-color5
        .p-4
          p.mb-0 A continuación, se podrá conocer las diferentes texturas y las disposiciones que hay para los colores.
    .tabla-b.color-acento-contenido.mb-5
      table
        tr(style='background-color: #D44F4A')
            th.text-center.text-white Color
            th.text-center.text-white Emociones positivas
            th.text-center.text-white Emociones negativas
        tr
          th
            .row.align-items-center
              .col-auto
                img(src='@/assets/curso/tema1/img5.svg', style='width: 30px').m-auto
              .col
                p.mb-0 Negro
          td Sofisticación, seguridad, poder, sustancia, elegancia, autoridad.
          td Opresión, amenaza, frialdad, pesadez, luto, maldad.
        tr
          th
            .row.align-items-center
              .col-auto
                img(src='@/assets/curso/tema1/img6.svg', style='width: 30px').m-auto
              .col
                p.mb-0 Gris
          td Atemporalidad, fuerza, fiabilidad, neutralidad, balance, inteligencia.
          td Desconfianza, depresión, adormecimiento, mansedumbre, falta de energía.
        tr
          th
            .row.align-items-center
              .col-auto
                img(src='@/assets/curso/tema1/img7.svg', style='width: 30px').m-auto
              .col
                p.mb-0 Blanco
          td Pureza, sofisticación, claridad, frescura, simplicidad, limpieza.
          td Esterilidad, frialdad, elitismo, hostilidad, aislamiento, vacío.
        tr
          th
            .row.align-items-center
              .col-auto
                img(src='@/assets/curso/tema1/img8.svg', style='width: 30px').m-auto
              .col
                p.mb-0 Rojo
          td Aventura, poder, pasión, acción, fuerza, intrepidez, amor.
          td Ira, desafío, peligro, advertencia, agresión, dolor.
        tr
          th
            .row.align-items-center
              .col-auto
                img(src='@/assets/curso/tema1/img9.svg', style='width: 30px').m-auto
              .col
                p.mb-0 Naranja
          td Valor, confidencialidad, calidez, optimismo, entusiasmo, energía.
          td Privación, frustración, inmadurez,  frivolidad, letargo, ignorancia.
        tr
          th
            .row.align-items-center
              .col-auto
                img(src='@/assets/curso/tema1/img10.svg', style='width: 30px').m-auto
              .col
                p.mb-0 Amarillo
          td Optimismo, felicidad, extroversión, curiosidad, creatividad, calidez.
          td Irracionalidad, temor, precaución,  cobardía, ansiedad, frustración.
        tr
          th
            .row.align-items-center
              .col-auto
                img(src='@/assets/curso/tema1/img11.svg', style='width: 30px').m-auto
              .col
                p.mb-0 Verde
          td Naturaleza, prosperidad, esperanza, suerte, armonía, frescura, salud.
          td Aburrimiento, estancación, envidia, insipidez, enfermedad, enervación.
        tr
          th
            .row.align-items-center
              .col-auto
                img(src='@/assets/curso/tema1/img12.svg', style='width: 30px').m-auto
              .col
                p.mb-0 Turquesa
          td Comunicación, verdad, claridad, calma, salud, poder, inspiración.
          td Jactancia, misterio, desconfianza,  reticencia, indiferencia.
        tr
          th
            .row.align-items-center
              .col-auto
                img(src='@/assets/curso/tema1/img13.svg', style='width: 30px').m-auto
              .col
                p.mb-0 Azul
          td Simpatía, armonía, amistad, lógica, seguridad, serenidad, confianza.
          td Frialdad, indiferencia, antipatía, desánimo, inapetencia, descuido.
        tr
          th
            .row.align-items-center
              .col-auto
                img(src='@/assets/curso/tema1/img14.svg', style='width: 30px').m-auto
              .col
                p.mb-0 Violeta
          td Sabiduría, riqueza, imaginación, misterio, creatividad, lujo, fantasía.
          td Introversión, decadencia, mal humor, supresión, inferioridad, extravagancia.
        tr
          th
            .row.align-items-center
              .col-auto
                img(src='@/assets/curso/tema1/img15.svg', style='width: 30px').m-auto
              .col
                p.mb-0 Magenta
          td Transformación, creatividad, pasión, imaginación, balance, innovación.
          td Indignación, inconformidad, efimeridad, impulsividad, ligereza.
        tr
          th
            .row.align-items-center
              .col-auto
                img(src='@/assets/curso/tema1/img16.svg', style='width: 30px').m-auto
              .col
                p.mb-0 Café
          td Seriedad, calidez, responsabilidad, terrosidad, soporte, autenticidad.
          td Falta de humor y sofisticación, suciedad, tristeza, conservadurismo.
    h3.mb-5 Temperatura del color
    figure.mb-5(data-aos="slide-right")
      img(src='@/assets/curso/tema1/img12.png').m.auto
      figcaption.mt-2 Escenas del videojuego #[i Ori and The Blind Forest] (2015)
    p.mb-5 Comparando las imágenes anteriores se puede percibir que cada una de ellas evoca emociones diferentes. ¿Por qué sucede esto?, la respuesta está en el uso de los colores. En la imagen superior se destacan los colores azules, violetas y algunos tintes de verde que dan la sensación de que se trata de un mundo nocturno o frío; en contraste con la imagen inferior en la que se destacan los colores amarillos, amarillos verdosos, naranjas, terrosos y ocres que brindan la ilusión de un mundo más cálido.
    .row.justify-content-center
      .col-lg-10(data-aos="slide-left")
        .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Esto significa que brindan una percepción subjetiva de la sensación de temperatura y con base a esta se puede determinar si se trata de colores cálidos o fríos, los cuales influyen en las emociones y afectan el estado de ánimo.
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure(data-aos="flip-right")
              img(src='@/assets/curso/tema1/img17.svg')
        h2.text-center Colores cálidos o activos
        p Son aquellos asociados a efectos visuales de calor como la luz solar, el fuego, los atardeceres, la arena, la playa, etc., evocando fuertes sentimientos que promueven el movimiento. Funcionan bien en espacios grandes, haciéndolos sentir seguros, acogedores y más cercanos.
      .col-md.tarjeta.color-acento-botones1.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure(data-aos="flip-left")
              img(src='@/assets/curso/tema1/img18.svg')
        h2.text-center Colores fríos o pasivos
        p  Se relacionan con efectos visuales asociados al frío como la luz de luna, el agua, el amanecer, la nieve, naturaleza verde, etc., transmitiendo una sensación de frescura y calma. Funcionan bien en espacios pequeños, aumentando la percepción de su tamaño, haciéndolos sentir más grandes, abiertos y lejanos.
    p.mb-5 Realizando una mezcla adecuada de colores cálidos y fríos se logra un equilibrio con un mayor contraste y mejor definición, que mejora la estética del videojuego, haciéndolo más agradable para el espectador.
    .row.justify-content-center
      .col-lg-7
        .titulo-sexto.color-acento-contenido
          p.mb-0 Temperatura del color y sus efectos en la mente
      .col-lg-6
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/img19.svg', style="width: 400px").m-auto
          .tarjeta.color-acento-botones.p-3(x="13%" y="31%" numero="")
            p Evocan sensaciones de resequedad, el ánimo, algunos estadios de la excitación, movimiento y energía.
          .tarjeta.color-acento-botones.p-3(x="13%" y="57.3%" numero="")
            p Se relacionan con la humedad, la calma y estadios de depresión, evocan además frescura, dinamismo y vida.
          .tarjeta.color-acento-botones.p-3(x="13%" y="76%" numero="")
            p Su percepción no genera sensación térmica y por su efecto visual posibilita utilizarse en decoraciones y vestimentas sobrias.
          .tarjeta.color-acento-botones.p-3(x="77%" y="5%" numero="")
            .titulo-sexto.color-1.mb-0
              h3.mb-0 Dorado
            p.mb-0 Opulencia
          .tarjeta.color-acento-botones.p-3(x="77%" y="12%" numero="")
            .titulo-sexto.color-2.mb-0
              h3.mb-0 Marrón
            p.mb-0 Profundidad o experiencia
          .tarjeta.color-acento-botones.p-3(x="77%" y="18%" numero="")
            .titulo-sexto.color-3.mb-0
              h3.mb-0 Amarillo
            p.mb-0 Actitud positiva y alegría
          .tarjeta.color-acento-botones.p-3(x="77%" y="25%" numero="")
            .titulo-sexto.color-4.mb-0
              h3.mb-0 Rojo
            p.mb-0 Pasión y excitación
          .tarjeta.color-acento-botones.p-3(x="77%" y="31%" numero="")
            .titulo-sexto.color-5.mb-0
              h3.mb-0 Rosa
            p.mb-0 Feminidad
          .tarjeta.color-acento-botones.p-3(x="77%" y="38%" numero="")
            .titulo-sexto.color-6.mb-0
              h3.mb-0 Plata
            p.mb-0 Intelectualidad
          .tarjeta.color-acento-botones.p-3(x="77%" y="44.4%" numero="")
            .titulo-sexto.color-7.mb-0
              h3.mb-0 Azul
            p.mb-0 Tristeza o depresión
          .tarjeta.color-acento-botones.p-3(x="77%" y="51%" numero="")
            .titulo-sexto.color-8.mb-0
              h3.mb-0 Verde
            p.mb-0 Renovación o vida
          .tarjeta.color-acento-botones.p-3(x="77%" y="57.5%" numero="")
            .titulo-sexto.color-9.mb-0
              h3.mb-0 Violeta
            p.mb-0 Espiritualidad
          .tarjeta.color-acento-botones.p-3(x="77%" y="64%" numero="")
            .titulo-sexto.color-10.mb-0
              h3.mb-0 Gris
            p.mb-0 Neutralidad y serenidad
          .tarjeta.color-acento-botones.p-3(x="77%" y="70.7%" numero="")
            .titulo-sexto.color-11.mb-0
              h3.mb-0 Blanco
            p.mb-0 Pureza
          .tarjeta.color-acento-botones.p-3(x="77%" y="77%" numero="")
            .titulo-sexto.color-12.mb-0
              h3.mb-0 Negro
            p.mb-0 Elegancia
    figure.mb-5(data-aos="slide-left")
      img(src='@/assets/curso/tema1/img20.png').m-auto
    p.mb-5 Adicionalmente, puede conocer sobre la teoría del color y cómo se requiere de una referencia para mezclar los colores y conseguir un efecto en concreto:
    h3.mb-5 Teoría del color
    LineaTiempoD.color-primario
      .row(numero="1" titulo="Modelos de color")
        .col-12
          p Los modelos de color permiten catalogar los colores y que se pueda trabajar con ellos por medios digitales. A través de los modelos se accede a diferentes sistemas para visualizar y modificar una imagen:
          .row
            .col-lg-4.mb-4.mb-lg-0
              .p-4
                img(src='@/assets/curso/tema1/img22.svg', style='width: 400px').mb-4.m-auto
                p.mb-0 #[b Modelo RGB]
                p Modelo aditivo que se basa en los colores luz. El ojo humano cuenta con 3 tipos de conos o células foto receptoras que determinan los 3 colores primarios: rojo, verde y azul (RGB por siglas en inglés). De la combinación de estos 3 se obtiene el color blanco y la ausencia de los mismos dará como resultado el negro. Este modelo de color es usado para toda clase de dispositivos como pantallas, celulares, etc.
            .col-lg-4.mb-4.mb-lg-0
              .p-4
                img(src='@/assets/curso/tema1/img23.svg', style='width: 400px').mb-4.m-auto
                p.mb-0 #[b Modelo CMYK]
                p Modelo sustractivo basado en los colores pigmento o físicos. Los colores primarios en este modelo son: amarillo, cían y magenta (CMYK por sus siglas en inglés). Al contrario del modelo RGB, la combinación de los 3 primarios genera el color negro (#[i key] o #[i black]). Este modelo es usado en pintura, tintes e impresión.
            .col-lg-4
              .p-4
                img(src='@/assets/curso/tema1/img24.svg', style='width: 400px').mb-4.m-auto
                p.mb-0 #[b Modelo HSV]
                p Se basa en las propiedades del color (tono , saturación y luminosidad), las cuales se explican en mayor detalle en la siguiente lección.
      .row(numero="2" titulo="Propiedades del color")
        .col-lg-6.mb-4.mb-lg-0
          img(src='@/assets/curso/tema1/img21.svg', style='width: 400px').m-auto
        .col-lg-6
          p.mb-0 #[b a. Tono (#[i Hue])]
          p.mb-4 Es el color en concreto y ayuda a diferenciarlos. Por ejemplo, al ver un objeto se dice que tiene un tono azul o anaranjado.
          p.mb-0 #[b b. Saturación (#[i Saturation])]
          p.mb-4 Intensidad o pureza del color. En otras palabras, la cantidad de gris que se le ha agregado a un tono; así entre más saturado es un color, más vibrante es, mientras que, entre menos saturado, dará mayor descanso al ojo.
          p.mb-0 #[b c. Luminosidad o valor (#[i Value])]
          p.mb-4 Describe el valor de claridad u oscuridad, en otras palabras, cantidad relativa de blanco o negro en un tono. Si agregamos el blanco a un color, obtendremos valores más claros del tono, llamados tintes. Por otro lado, si el que agregamos es el negro, tendremos valores más oscuros del tono, conocidos como matices. Por ejemplo, decimos que el rosa es un tinte del color rojo primario y el borgoña o rojo oscuro es un matiz (Whelan, 1994).
      .row(numero="3" titulo="Círculo cromático")
        .col-lg-6.mb-4.mb-lg-0
          img(src='@/assets/curso/tema1/img25.svg', style='width: 400px').m-auto
        .col-lg-6
          p Se divide en doce segmentos, incluyendo los tonos primarios, secundarios y terciarios. Los tres colores primarios: rojo, amarillo y azul, forman un triángulo equilátero dentro del círculo. Si se mezclan en igual medida dos colores primarios, se obtiene un color secundario; y si se mezcla un primario con un secundario se tiene un terciario.
      .row(numero="4" titulo="Armonía del color")
        .col-12.mb-4.mb-lg-0
          p.mb-4 Se debe saber que algunos colores se ven mejor juntos que otros, pero esto puede generar confusión si se trata de recordar cada uno. Por tanto, a continuación, se verán los 6 esquemas más efectivos de la armonía de color:
          .row
            .col-lg-6
              .p-4
                img(src='@/assets/curso/tema1/img21.png', style='width: 500px').mb-4.m-auto
                p.mb-0 #[b Mocromático]
                p Es uno de los más fáciles de recordar, ya que es un solo color. Debido a la ausencia de otros colores, el espectador se enfoca en las diferencias de valor y saturación.
            .col-lg-6
              .p-4
                img(src='@/assets/curso/tema1/img22.png', style='width: 500px').mb-4.m-auto
                p.mb-0 #[b Análogo]
                p Se usan colores adyacentes uno del otro. Es un esquema presente en la naturaleza, por ende, crean una sensación de calma, paz y comodidad.
            .col-lg-6
              .p-4
                img(src='@/assets/curso/tema1/img23.png', style='width: 500px').mb-4.m-auto
                p.mb-0 #[b Complementario]
                p Es el esquema más popular, donde se usan colores de lados opuestos del círculo. Naturalmente siempre van bien juntos; sin embargo, como en el esquema de triada, se debe elegir un color predominante y usar el tono complementario para crear contraste o puntos de interés.
            .col-lg-6
              .p-4
                img(src='@/assets/curso/tema1/img24.png', style='width: 500px').mb-4.m-auto
                p.mb-0 #[b Triada]
                p Quizás es una de las más difíciles de usar correctamente. Son tres colores que son equidistantes. El reto está en el equilibrio de cada uno de los tonos, dado que al usarse en la misma medida generará caos. Suele usarse para escenas con estilo #[i cartoon], orientado al público infantil.
            .col-lg-6
              .p-4
                img(src='@/assets/curso/tema1/img25.png', style='width: 500px').mb-4.m-auto
                p.mb-0 #[b Complementario dividido]
                p Similar al complementario, pero este esquema usa tres colores. Se debe seleccionar el tono complementario y dividirlo, es decir, tomar los dos colores adyacentes. Es útil para extender las posibilidades de la paleta de color, cuando dos tonos no son suficientes.
            .col-lg-6
              .p-4
                img(src='@/assets/curso/tema1/img26.png', style='width: 500px').mb-4.m-auto
                p.mb-0 #[b Complementario doble]
                p Justo como el esquema complementario pero doble. Dos pares de colores complementarios (sin importar su posición dentro del círculo). Se debe ser muy cuidadoso con este esquema, pues sin el equilibrio adecuado creará caos. Lo mejor es usar un par en primer plano y el otro en el fondo.
          .row.justify-content-center
            .col-10
              a.anexo.mb-4.mb-lg-0(href="https://color.adobe.com/es/create/color-wheel" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p  Para crear paletas de color y jugar con diferentes esquemas puede consultar la herramienta creada por Adobe llamada Adobe Color, anteriormente conocida como Kuler desde internet.
      .row(numero="5" titulo="Psicología del color")
        .col-12
          p.mb-4 Como lo menciona Bride M. Whelan, “El color es a la vez simple y complejo. Este significa cosas distintas para distintas personas en culturas diferentes. Ningún color es visto del mismo modo por dos personas. El color es personal y universal, y envía mensajes de inagotable variedad”. (Whelan, 1994).
          .row
            .col-lg-6
              .p-4
                img(src='@/assets/curso/tema1/img26.svg').m-auto
            .col-lg-6
              .p-4
                img(src='@/assets/curso/tema1/img27.svg').m-auto
            .col-lg-6
              .p-4
                img(src='@/assets/curso/tema1/img28.svg').m-auto
            .col-lg-6
              .p-4
                img(src='@/assets/curso/tema1/img29.svg').m-auto
            .col-lg-6
              .p-4
                img(src='@/assets/curso/tema1/img30.svg').m-auto
            .col-lg-6
              .p-4
                img(src='@/assets/curso/tema1/img31.svg').m-auto
            .col-lg-6
              .p-4
                img(src='@/assets/curso/tema1/img32.svg').m-auto
            .col-lg-6
              .p-4
                img(src='@/assets/curso/tema1/img33.svg').m-auto
            .col-lg-6
              .p-4
                img(src='@/assets/curso/tema1/img34.svg').m-auto
            .col-lg-6
              .p-4
                img(src='@/assets/curso/tema1/img35.svg').m-auto
    separador.mb-5
    .row.bg-color7
      .px-5
        .col-12.mt-5
          #t_1_3
          .titulo-segundo.color-secundario
            h2 1.3 Triángulo de iluminación
          p.mb-4 El triángulo de iluminación es el set adecuado para iluminar una escena y así conseguir resultados efectivos. Este esquema situaría la luz principal, una luz de relleno y la contraluz, que se complementan entre sí. La luz principal se sitúa hacia el objeto, la luz de relleno va al lado opuesto, con una intensidad más baja, y la contraluz se sitúa por detrás, para darle profundidad a la escena.
          .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Figura 6]. Triángulo de iluminación.
          figure
            img(src='@/assets/curso/tema1/img37.svg', style='width: 1000px').m-auto
    br
    br
    .row.justify-content-center
      .col-8.mb-5.bg-color8
        .p-4
          .row.align-items-center.justify-content-center
            .col.mb-4.mb-lg-0
              p.mb-0 Para profundizar en este concepto, aplicado en blender sobre un personaje y un escenario, consulte el Anexo_1_TrianguloDeIluminación
            .col-auto
              a(:href="obtenerLink('/downloads/anexo_triangulodeiluminacion.pdf')" target="_blank")
                figure.efect1
                  img(src="@/assets/curso/tema1/img38.svg", style="width:150px").m-auto
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Ug4XECwsp_E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    separador
    #t_1_4
    .titulo-segundo.color-secundario
      h2 1.4 Reloj de iluminación
    p.mb-5 El reloj de iluminación es un método que se utiliza para aplicar la iluminación en un objeto ubicando la luz según el esquema de una rueda de reloj, teniendo el rostro perpendicular a la cámara. Con el objeto en el centro de la esfera, mirando de frente, marcando las 6.
    .titulo-sexto.color-acento-contenido
      p.mb-0 #[b Figura 2]. Reloj de iluminación
    .row.justify-content-center.mb-4
      .col-lg-10
        SlyderC(:datos="datosSlyder")
    .row.justify-content-center
      .col-8.bg-color9
        .p-4
          .row.align-items-center.justify-content-center
            .col.mb-4.mb-lg-0
              p.mb-0 Consulte el Anexo_2_RelojDeIluminación y estudie a profundidad, el paso a paso del proceso Reloj de Iluminación.
            .col-auto
              a(:href="obtenerLink('/downloads/anexo_relojdeiluminacion.pdf')" target="_blank")
                figure.efect1
                  img(src="@/assets/curso/tema1/img38.svg", style="width:150px").m-auto

</template>
<script>
export default {
  name: 'Tema1',
  data: () => ({
    datosSlyder: [
      {
        titulo: '',
        texto: '',
        imagen: require('@/assets/curso/tema1/img40.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto: '',
        imagen: require('@/assets/curso/tema1/img41.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto: '',
        imagen: require('@/assets/curso/tema1/img42.svg'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto: '',
        imagen: require('@/assets/curso/tema1/img43.svg'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto: '',
        imagen: require('@/assets/curso/tema1/img44.svg'),
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
