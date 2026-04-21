<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Marco normativo de revisión, corrección y sanciones
    .row.justify-content-center.align-items-center.mb-5
      .col-xl
        .caja-tema1.mb-4.mb-lg-0(data-aos="fade-right")
          p La elaboración de declaraciones tributarias no finaliza con la presentación del formulario ante la DIAN. El sistema tributario colombiano contempla mecanismos que permiten revisar, corregir y, cuando corresponda, sancionar las inconsistencias detectadas en la información declarada. 
          p.mb-0 Estas disposiciones hacen parte del marco normativo que regula la relación entre el contribuyente y la administración tributaria y permiten ajustar los datos presentados cuando se identifican errores, omisiones o diferencias frente a la realidad económica.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img1.png', alt='').m-auto
    p.mb-5 Para comprender el alcance de este marco normativo, es importante reconocer los elementos que intervienen en la revisión posterior de las declaraciones.
    .bg-slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Revisión de la declaración
                p.mb-0 La administración tributaria puede verificar posteriormente la información presentada mediante procesos de fiscalización. Esta revisión permite identificar inconsistencias, solicitar aclaraciones o requerir soportes que sustenten los valores declarados.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema2/img2.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Corrección de la información
                p.mb-0 Cuando el contribuyente detecta errores u omisiones, la normativa establece procedimientos para realizar correcciones voluntarias que permitan ajustar la declaración a la realidad económica antes o después de la intervención de la administración tributaria.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema2/img3.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Sanciones tributarias
                p.mb-0 Si las inconsistencias no son corregidas oportunamente o se incumplen obligaciones formales o sustanciales, pueden generarse sanciones o intereses conforme a las disposiciones legales vigentes.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema2/img4.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Devoluciones y compensaciones
                p.mb-0 Cuando existe un saldo a favor debidamente soportado, la normativa contempla procedimientos para solicitar su devolución o compensación con otras obligaciones tributarias.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema2/img5.png', alt='' style="max-width: 500px").m-auto
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img6.png', alt='').m-auto
      .col-xl
        .caja-tema1(data-aos="fade-left")
          p.mb-0 Comprender este marco resulta fundamental para quienes elaboran declaraciones tributarias, ya que los errores pueden presentarse en diferentes momentos del proceso, como durante el cálculo, en el diligenciamiento del formulario o incluso después de la presentación cuando se identifican nuevas evidencias. En estos casos, la normativa establece procedimientos para responder a requerimientos de la administración tributaria o para realizar ajustes que permitan reducir riesgos asociados a sanciones o intereses.
    .row.justify-content-center.align-items-center.mb-0
      .col-xl.mb-4.mb-lg-0(data-aos="fade-right")
        .caja-tema1-3.ajuste-caja-tema1-3(data-aos="fade-right")
          p.mb-0 Adicionalmente, el sistema tributario colombiano se fundamenta en el principio de autodeterminación del impuesto. Esto implica que el propio contribuyente liquida y declara el tributo correspondiente; sin embargo, la administración tributaria conserva la facultad de revisar posteriormente la información presentada. En este contexto, la conservación de soportes y la trazabilidad de los datos se convierten en elementos esenciales para sustentar lo declarado.
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema2/img7.jpg', alt='').m-auto
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Reglas para correcciones y declaraciones rectificatorias
    p.mb-5 El Estatuto Tributario establece que los contribuyentes pueden corregir sus declaraciones cuando detecten errores u omisiones en la información presentada. Este mecanismo permite modificar los valores inicialmente declarados, ya sea para aumentar el impuesto a cargo, disminuir un saldo a favor o corregir datos incorrectos del formulario. La corrección se realiza mediante la presentación de una nueva declaración que reemplaza la anterior, conservando el mismo período y el mismo tipo de impuesto. Para comprender cuándo procede cada tipo de corrección, es necesario identificar las situaciones previstas en la normativa tributaria.
    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema2.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/tema2/img8.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Corrección que incrementa el impuesto a pagar o disminuye el saldo a favor
            p.mb-0 Se presenta cuando el contribuyente detecta errores u omisiones que aumentan el valor del impuesto. El artículo 588 del Estatuto Tributario permite realizar la corrección voluntaria dentro del término de firmeza de la declaración, mediante la presentación de una nueva declaración y el pago de la diferencia correspondiente junto con la sanción por corrección cuando sea aplicable.
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema2.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/img9.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Corrección que disminuye el impuesto a pagar o aumenta el saldo a favor
            p.mb-0 Ocurre cuando el ajuste beneficia al contribuyente. El artículo 589 del Estatuto Tributario establece que esta corrección requiere autorización previa de la administración tributaria mediante solicitud formal, lo que evidencia un control adicional sobre este tipo de modificaciones.
      .col-xl-4.col-md-9(data-aos="zoom-in")
        .caja-tema2.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/tema2/img10.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Corrección de datos formales o inconsistencias del formulario
            p.mb-0 Procede cuando se identifican errores en la información registrada que no necesariamente afectan el valor del impuesto, como datos incorrectos del formulario o inconsistencias en el diligenciamiento. La corrección se realiza mediante la presentación de una nueva declaración que sustituye la anterior.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl
        .caja-tema1.ajuste-color-4.mb-4.mb-lg-0(data-aos="fade-right")
          p.mb-0 En todos los casos, resulta indispensable conservar los soportes que justifican la corrección realizada. Estos pueden incluir papeles de trabajo actualizados, conciliaciones de información, certificados de retención corregidos o documentos contables que expliquen el ajuste efectuado. La corrección no solo modifica la declaración presentada, sino que exige actualizar el expediente tributario del período para mantener la trazabilidad de los cambios. Con el fin de sintetizar las condiciones normativas aplicables, se presenta la referencia operativa.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img11.png', alt='').m-auto
    .row.justify-content-center.mb-0
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema2-1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/tema2/img12.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Corrección que aumenta el impuesto
            ul.fa-ul.mb-0
              li.mb-1
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Error que incrementa el valor a pagar.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Presentar nueva declaración y pagar la diferencia con sanción cuando aplique.
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema2-1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/img13.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Corrección que disminuye el saldo a favor
            ul.fa-ul.mb-0
              li.mb-1
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Error en valores declarados.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Presentar nueva declaración con el ajuste correspondiente.
      .col-xl-4.col-md-9(data-aos="zoom-in")
        .caja-tema2-1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/tema2/img14.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Corrección que disminuye impuesto o aumenta saldo a favor
            ul.fa-ul.mb-0
              li.mb-1
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Ajuste que beneficia al contribuyente.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Requiere solicitud previa ante la DIAN.
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Sanciones, intereses y consecuencias de errores o extemporaneidad
    .row.justify-content-center.align-items-center.mb-5
      .col-xl
        .caja-tema1.ajuste-color-4.mb-4.mb-lg-0(data-aos="fade-right")
          p.mb-0 El incumplimiento de las obligaciones tributarias puede generar sanciones económicas y el pago de intereses moratorios. Estas consecuencias se aplican cuando la declaración se presenta fuera del plazo establecido o cuando contiene errores que afectan el impuesto determinado. Su finalidad es garantizar el cumplimiento oportuno de las obligaciones fiscales y desincentivar la presentación tardía o incorrecta de la información tributaria. 
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img15.png', alt='').m-auto
    p.mb-5 Para comprender las principales consecuencias normativas asociadas a errores o extemporaneidad, se sintetizan a continuación las sanciones más frecuentes previstas en el Estatuto Tributario: 
    .row.justify-content-center.mb-5
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 5.
          span Principales sanciones relacionadas con declaraciones tributarias
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Tipo de sanción
                th.ajuste-border-tabla.texto-left Situación que la genera
                th.texto-left Norma aplicable
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Sanción por extemporaneidad
                td.ajuste-border-tabla.texto-left Presentar la declaración después del plazo establecido en el calendario tributario
                td.texto-left Artículo 641 del Estatuto Tributario
              tr
                td.ajuste-border-tabla.texto-left Intereses moratorios
                td.ajuste-border-tabla.texto-left Pagar el impuesto después de la fecha de vencimiento
                td.texto-left Artículo 635 del Estatuto Tributario
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Sanción por inexactitud
                td.ajuste-border-tabla.texto-left Declarar información incorrecta que afecta el valor del impuesto
                td.texto-left Artículo 647 del Estatuto Tributario
    p.mb-0 La sanción por extemporaneidad se calcula como un porcentaje del impuesto a cargo por cada mes o fracción de mes de retraso, conforme a lo establecido en la normativa vigente. Además, cuando el impuesto se paga de manera tardía, se generan intereses moratorios que se liquidan desde la fecha de vencimiento hasta la fecha de pago efectivo.
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Evidencia y trazabilidad
    .row.justify-content-center.align-items-center.mb-5
      .col-xl
        .caja-tema1.mb-4.mb-lg-0(data-aos="fade-right")
          p.mb-0 La trazabilidad de la información tributaria es un elemento central para sustentar las cifras declaradas. Cuando la administración tributaria revisa una declaración, suele contrastar la información presentada con diversas fuentes disponibles, tales como la contabilidad del contribuyente, los reportes de terceros o las declaraciones de periodos anteriores.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img16.png', alt='').m-auto
    p.mb-5 Este contraste permite verificar la coherencia de los valores registrados y la procedencia de los soportes que respaldan la información tributaria. A continuación, se presentan las principales fuentes de verificación utilizadas en los procesos de revisión y su utilidad práctica para sustentar la declaración.
    .bg-slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Contabilidad
                p.mb-0 En el caso de contribuyentes obligados a llevar contabilidad, esta constituye el principal soporte de la información tributaria, ya que refleja los hechos económicos mediante registros estructurados de ingresos, costos, gastos, activos, pasivos y patrimonio. La contabilidad permite rastrear la construcción de las cifras declaradas y facilita a la #[b DIAN] contrastar la información del formulario con libros contables, auxiliares y comprobantes, verificando que los valores declarados se encuentren debidamente registrados y respaldados con la documentación soporte correspondiente.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema2/img17.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Reportes de terceros
                p.mb-0 La #[b DIAN] dispone de información proveniente de terceros que puede utilizar para verificar las declaraciones presentadas. Estos reportes pueden originarse en empleadores, entidades financieras, clientes, proveedores u otros pagadores que informan operaciones realizadas con el contribuyente. La comparación entre lo declarado y lo reportado por terceros permite detectar omisiones de ingresos, diferencias en retenciones, pagos no incluidos o inconsistencias en los valores registrados.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema2/img18.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Facturación electrónica y documentos electrónicos asociados
                p.mb-0 La facturación electrónica constituye una fuente relevante de verificación porque genera trazabilidad digital de las operaciones económicas. A través de la factura electrónica, los documentos equivalentes electrónicos y los documentos soporte, la #[b DIAN] puede contrastar bases gravables, valores y periodos declarados, especialmente en obligaciones como el impuesto sobre las ventas, la retención en la fuente o la determinación de costos y deducciones en renta.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema2/img19.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Declaraciones de periodos anteriores
                p.mb-0 Las declaraciones tributarias de años o periodos anteriores también funcionan como referencia para la revisión. La #[b DIAN] puede analizar la coherencia histórica de la información, identificar variaciones significativas en ingresos, patrimonio, costos o deducciones y verificar la continuidad de saldos como anticipos, pérdidas fiscales o saldos a favor. Estas comparaciones pueden generar alertas que motiven procesos de fiscalización.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema2/img20.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Soportes documentales
                p.mb-0 Los soportes documentales constituyen la evidencia directa de los hechos económicos declarados. Su adecuada conservación permite sustentar rubros específicos cuando la #[b DIAN] solicita aclaraciones o pruebas en el marco de procesos de revisión o control. En particular, para costos, deducciones e impuestos descontables, la normativa exige soportes idóneos que cumplan requisitos formales, lo cual convierte la verificación documental en un punto crítico del control tributario.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema2/img21.png', alt='' style="max-width: 500px").m-auto
    p.mb-0 Esta organización permite comprender que la revisión tributaria implica un análisis integral de fuentes contables, documentales y declarativas, por lo que la adecuada estructuración del expediente del contribuyente resulta fundamental para responder a eventuales procesos de fiscalización.
    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4 Procedimientos asociados
    .row.justify-content-center.align-items-center.mb-5
      .col-xl
        .caja-tema1.ajuste-color-5.mb-4.mb-lg-0(data-aos="fade-right")
          p.mb-0 Después de presentar una declaración, pueden activarse procedimientos que tienen impacto directo en el contribuyente: solicitar la devolución o compensación de un saldo a favor, o atender requerimientos de información y actuaciones de fiscalización. Estos procedimientos son relevantes porque conectan la declaración “en papel” con sus efectos prácticos: recuperación de recursos (saldos a favor), cruce de obligaciones (compensación) y verificación oficial de lo declarado (requerimientos). En todos los casos, la calidad del expediente (soportes, conciliaciones, papeles de trabajo y evidencias de presentación) determina la rapidez y solidez de la respuesta.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img22.svg', alt='').m-auto
    .caja-tema2-2.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema2/img23.svg" style="max-width: 60px").m-auto
      .col
        h3 Devoluciones de saldos a favor
    p.mb-5 Para comprender el trámite de devolución y sus implicaciones en el control tributario, se sintetizan a continuación los aspectos normativos y operativos más relevantes.
    .bg-slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Concepto de devolución
                p.mb-0 La devolución es el trámite mediante el cual el contribuyente solicita a la #[b DIAN] la entrega del saldo a favor originado en una declaración tributaria, como puede ocurrir en el impuesto sobre la renta o en el impuesto sobre las ventas, o en un acto administrativo, cuando dicho saldo no ha sido utilizado previamente por imputación o compensación.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema2/img24.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Marco normativo aplicable
                p.mb-0 La #[b DIAN] concentra el marco normativo de devoluciones y compensaciones e indica como referencia los artículos 815, 816 y 850 a 865 del Estatuto Tributario, así como la reglamentación contenida en el Decreto 1625 de 2016 en la parte correspondiente a estos trámites.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema2/img25.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Requisitos desde el enfoque de control
                p.mb-0 La devolución exige que el saldo a favor esté correctamente determinado y sustentado. Antes de radicar la solicitud, el contribuyente debe tener conciliadas las retenciones, los anticipos y los demás rubros que originaron el saldo, y contar con soportes claros y consistentes que respalden la información declarada. Una solicitud insuficientemente sustentada puede ser devuelta para subsanar requisitos o generar requerimientos adicionales.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema2/img26.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Gestión operativa del trámite
                p.mb-0 El procedimiento se realiza a través de los canales dispuestos por la #[b DIAN] y suele requerir el alistamiento documental y la verificación previa de requisitos. La entidad pública guía paso a paso para solicitar devoluciones y compensaciones por saldos a favor en el impuesto sobre la renta, así como documentos de apoyo para el trámite en el impuesto sobre las ventas, donde se describen rutas de acceso y recomendaciones prácticas.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema2/img48.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Tiempos de respuesta
                p.mb-0 La #[b DIAN] informa que los términos de respuesta pueden variar según el tipo de devolución solicitada, como ocurre en los casos de devolución automática, devolución con garantía u otros procedimientos específicos. Esta información se encuentra disponible en la sección institucional de “Trámite y requisitos”.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema2/img49.png', alt='' style="max-width: 500px").m-auto
    p.mb-5 Esta organización permite comprender que la devolución de saldos a favor requiere coherencia en la determinación del saldo, adecuada preparación documental y trazabilidad de la información tributaria.
    .caja-tema2-2.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema2/img23.svg" style="max-width: 60px").m-auto
      .col
        h3 Compensaciones de saldos a favor
    .bg-1
      .px-5
        .row.justify-content-center.align-items-center.mb-5
          .col-xl
            .caja-tema1.ajuste-color-5.mb-4.mb-lg-0(data-aos="fade-right")
              p.mb-0 La compensación es el procedimiento mediante el cual el contribuyente puede aplicar un saldo a favor a otras obligaciones tributarias a su cargo, tales como impuestos, anticipos, retenciones, intereses o sanciones, o imputarlo al periodo siguiente del mismo impuesto. Esta posibilidad está prevista en el artículo 815 del Estatuto Tributario, el cual describe las alternativas disponibles para utilizar el saldo a favor determinado en una declaración.
          .col-xl-auto.col-md-9(data-aos="fade-left")
            figure
              img(src='@/assets/curso/tema2/img27.jpg', alt='').m-auto
        p.mb-5 Desde la utilidad práctica, la compensación constituye una alternativa frecuente cuando el contribuyente tiene obligaciones vigentes y prefiere aplicar el saldo a favor mediante el cruce de valores en lugar de solicitar la devolución en dinero.
        .row.justify-content-center.mb-5
          .col-xl-10
            .caja-tema2-3(data-aos="flip-up")
              .row.align-items-center
                .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                  figure
                    img(src='@/assets/curso/tema2/img28.svg', alt='' style="width: 85px").m-auto
                .col-xl.col-md-10
                  p.mb-0 Desde el enfoque del control tributario, esta decisión #[b exige verificar previamente el estado de cuenta y las obligaciones pendientes], ya que la compensación resulta pertinente cuando existe deuda exigible o cuando se proyecta utilizar el saldo a favor en el siguiente periodo fiscal.
        p.mb-5 Para comprender el procedimiento desde la perspectiva operativa y documental, se sintetizan a continuación sus principales elementos. 
        .row.align-items-center.mb-5
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src="@/assets/curso/tema2/img29.png", alt="" ).m-auto
          .col-xl
            AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
              .row(titulo="Concepto de compensación").ajuste-cajaAcordion
                p.mb-3 Permite aplicar el saldo a favor a deudas tributarias vigentes o imputarlo al periodo siguiente del mismo impuesto, conforme a lo previsto en el artículo 815 del Estatuto Tributario.
              .row(titulo="Utilidad en la gestión tributaria").ajuste-cajaAcordion
                p.mb-3 Constituye una alternativa cuando el contribuyente tiene obligaciones pendientes y prefiere cruzar el saldo a favor en lugar de solicitar devolución en dinero, lo que facilita el cumplimiento oportuno de sus obligaciones fiscales.
              .row(titulo="Verificación previa necesaria").ajuste-cajaAcordion
                p.mb-3 Implica revisar el estado de cuenta del contribuyente, identificar deudas exigibles y confirmar la pertinencia de aplicar el saldo a favor al periodo siguiente o a obligaciones existentes.
              .row(titulo="Evidencia documental requerida").ajuste-cajaAcordion
                p.mb-3 El expediente tributario debe incluir la declaración que origina el saldo a favor, las conciliaciones y papeles de trabajo que sustentan su determinación, así como la trazabilidad del registro de imputación o compensación realizado.
    p.mb-5 Esta organización permite comprender que la compensación no solo es una decisión financiera, sino un procedimiento que exige coherencia en la determinación del saldo y adecuada preparación documental.
    .caja-tema2-2.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema2/img23.svg" style="max-width: 60px").m-auto
      .col
        h3 Comparación práctica entre devolución y compensación
    p.mb-5 Permite identificar de manera práctica cuándo conviene solicitar la devolución de un saldo a favor o cuándo resulta más pertinente optar por la compensación, según la situación financiera y las obligaciones tributarias vigentes del contribuyente.
    .bg-carrusel
      .px-5
        SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img31.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Finalidad
            ul.fa-ul.estilo___ul.mb-0
              li.mb-2
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Recuperar el saldo a favor en dinero.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Aplicar el saldo a favor a deudas o al periodo siguiente.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img32.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Cuando suele convenir
            ul.fa-ul.estilo___ul.mb-0
              li.mb-2
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Cuando no existen deudas tributarias y se requiere liquidez.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Cuando existen obligaciones pendientes o se prefiere cruzar saldos.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img33.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Riesgo frecuente
            ul.fa-ul.estilo___ul.mb-0
              li.mb-2
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Solicitar devolución sin soportes suficientes o con saldo mal determinado.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Compensar sin verificar deudas vigentes o periodos correctos.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img34.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Evidencia mínima
            ul.fa-ul.estilo___ul.mb-0
              li.mb-2
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Solicitud formal, soportes del saldo y resultado del trámite.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Registro de imputación o solicitud de compensación, soportes y evidencia del cruce aplicado.
    .caja-tema2-4.mb-5(data-aos="fade-right")   
      h4.mb-0 Tipos de devoluciones y/o compensaciones según la DIAN
    .row.justify-content-center.align-items-center.mb-5
      .col-xl
        .caja-tema1.ajuste-color-4.mb-4.mb-lg-0(data-aos="fade-right")
          p.mb-0 Además de las devoluciones o compensaciones derivadas de declaraciones de renta o IVA, la DIAN contempla otros trámites según el tipo de impuesto, el origen del pago y el perfil del solicitante. Por esta razón, antes de iniciar cualquier solicitud, es necesario identificar el procedimiento exacto y los requisitos aplicables, ya que pueden variar los soportes exigidos, las validaciones y el proceso administrativo. A continuación, los principales trámites que la DIAN relaciona en su sección de devoluciones y compensaciones: 
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img35.jpg', alt='').m-auto
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/tema2/img36.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Devolución o compensación del IVA pagado en adquisición de materiales para vivienda VIS/VIP").ajuste-cajaAcordion
            p.mb-3 Se utiliza cuando el constructor solicita recuperar el IVA pagado en materiales empleados en proyectos VIS o VIP. Suele aplicar a constructores de vivienda de interés social o prioritario. Permite verificar el cumplimiento de requisitos del proyecto, los soportes de compras y la correcta aplicación del beneficio.
          .row(titulo="Devolución o compensación por saldos a favor en renta").ajuste-cajaAcordion
            p.mb-3 Aplica cuando la declaración de renta genera saldo a favor y se solicita su devolución o compensación con otras obligaciones. Es común en contribuyentes que registran saldo a favor en renta. Facilita confirmar la adecuada determinación y conciliación del saldo.
          .row(titulo="Devolución o compensación del saldo a favor del IVA").ajuste-cajaAcordion
            p.mb-3 Se utiliza cuando en el impuesto sobre las ventas se origina saldo a favor y se solicita devolución o compensación. Es frecuente en responsables del IVA con dicho saldo. Permite revisar la coherencia de las operaciones, los soportes y los periodos declarados.
          .row(titulo="Devolución del IVA e INC a diplomáticos y organismos internacionales").ajuste-cajaAcordion
            p.mb-3 Procede cuando aplica el régimen de privilegios fiscales conforme a acreditación y convenios vigentes. Suele corresponder a misiones diplomáticas y organismos acreditados. Contribuye a validar la existencia de acreditación y la facturación según requisitos.
    .row.align-items-center.mb-5
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-right")
          .row(titulo="Devolución del IVA a instituciones estatales u oficiales de educación superior").ajuste-cajaAcordion
            p.mb-3 Se usa cuando una institución estatal solicita la devolución del IVA pagado en bienes o servicios. Aplica a instituciones oficiales de educación superior. Permite confirmar el cumplimiento de las condiciones del procedimiento y los soportes de adquisición.
          .row(titulo="Devolución de pagos en exceso o de lo no debido").ajuste-cajaAcordion
            p.mb-3 Aplica cuando se demuestra un pago superior al debido o sin causa legal. Puede presentarse en contribuyentes que acreditan dicho pago. Facilita verificar la evidencia del pago y la inexistencia de obligación.
          .row(titulo="Devolución de IVA a turistas extranjeros").ajuste-cajaAcordion
            p.mb-3 Procede cuando turistas no residentes solicitan la devolución del IVA por compras que salen del país. Aplica a turistas extranjeros que cumplen requisitos. Permite validar las condiciones exigidas, la facturación válida y la salida efectiva de los bienes.
          .row(titulo="Devoluciones de oficio").ajuste-cajaAcordion
            p.mb-3 Opera cuando el sistema automático de devolución actúa bajo condiciones definidas por la DIAN. Aplica a contribuyentes que cumplen los criterios del sistema. Permite confirmar el cumplimiento de requisitos y los controles de seguridad.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/tema2/img37.png", alt="" ).m-auto
    .caja-tema2-2.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema2/img23.svg" style="max-width: 60px").m-auto
      .col
        h3 Requerimientos y actuaciones de fiscalización
    p.mb-5 Para comprender el manejo de los requerimientos en el control tributario, se sintetizan a continuación los elementos normativos, operativos y documentales más relevantes.
    .bg-slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Concepto de requerimiento
                p.mb-0 Los requerimientos son solicitudes formales de información, pruebas o aclaraciones relacionadas con la verificación de la situación tributaria del contribuyente. Estas actuaciones se fundamentan en las facultades de fiscalización e investigación de la administración tributaria previstas en el artículo 684 del Estatuto Tributario, que incluyen verificar la exactitud de las declaraciones, solicitar documentos, exigir exhibición de libros y realizar cruces de información con terceros.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema2/img38.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Deber de atender requerimientos
                p.mb-0 El Estatuto Tributario establece la obligación del contribuyente de atender los requerimientos de información y pruebas formulados por la administración tributaria (artículo 686) (Congreso de la República, 1989). En términos operativos, esto implica responder de forma completa y oportuna, aportando evidencias organizadas que permitan sustentar los valores declarados.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema2/img39.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Instrumentos que fortalecen la respuesta
                p.mb-0 La experiencia práctica muestra que una respuesta sólida se construye con instrumentos de control como la matriz soporte–dato–casilla, conciliaciones que expliquen el origen de las cifras, papeles de trabajo que reproduzcan el cálculo realizado y evidencias del trámite de presentación, tales como el formulario presentado en PDF, la constancia de presentación y el soporte de pago cuando corresponda.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema2/img40.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Tipos de actuaciones de fiscalización
                p.mb-0 Es importante distinguir entre actuaciones previas de verificación, como requerimientos ordinarios de información, autos de verificación o cruces, y actuaciones propias del proceso de determinación oficial del impuesto. El requerimiento especial constituye una etapa previa a la liquidación oficial de revisión conforme al artículo 703 del Estatuto Tributario.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema2/img41.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Riesgo operativo asociado
                p.mb-0 Una respuesta tardía o insuficientemente sustentada puede generar el escalamiento del proceso administrativo hacia etapas formales de determinación del impuesto, lo cual puede implicar ajustes oficiales o sanciones.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema2/img42.png', alt='' style="max-width: 500px").m-auto
    p.mb-5 Para orientar la preparación de la respuesta, se presenta la siguiente guía práctica: 
    .row.justify-content-center
      .col-lg-10
        PasosA.color-acento-contenido(tipo="l")
          .row
            .col-lg.mb-4.mb-lg-0
              h3 Soporte de ingresos
              p.mb-0 Debe entregar certificados, extractos y reportes por fuente junto con la conciliación correspondiente. Se sustenta en el expediente mediante una hoja de conciliación con los soportes organizados por cada pagador.
            .col-auto(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/tema2/img43.svg', alt='' style="width: 140px").m-auto
          .row
            .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/tema2/img44.svg', alt='' style="width: 140px").m-auto
            .col-lg.fit___pasosA-left
              h3 Soporte de costos o deducciones
              p.mb-0 Debe presentar facturas, documentos equivalentes o documento soporte, comprobantes de pago y una relación detallada. La sustentación se realiza con una matriz soporte–dato–casilla que confirma el cumplimiento de requisitos formales.
          .row
            .col-lg.mb-4.mb-lg-0
              h3 Retenciones en la fuente
              p.mb-0 Debe aportar certificados expedidos por los agentes retenedores y la conciliación de los valores. Se respalda con una tabla de cruce entre las retenciones declaradas y las certificadas.
            .col-auto(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/tema2/img45.svg', alt='' style="width: 140px").m-auto
          .row
            .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/tema2/img46.svg', alt='' style="width: 140px").m-auto
            .col-lg.fit___pasosA-left
              h3 Estados financieros o contabilidad (si aplica)
              p.mb-0 Debe entregar estados financieros, auxiliares contables, libros y soportes documentales. Se sustenta con una carpeta contable organizada que incluye referencias a los renglones de la declaración.
          .row
            .col-lg.mb-4.mb-lg-0
              h3 Explicación de variaciones
              p.mb-0 Debe anexar una nota explicativa con la comparación interanual de cifras. Se soporta mediante un papel de trabajo comparativo acompañado de los documentos que justifican los cambios.
            .col-auto(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/tema2/img47.svg', alt='' style="width: 140px").m-auto
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
