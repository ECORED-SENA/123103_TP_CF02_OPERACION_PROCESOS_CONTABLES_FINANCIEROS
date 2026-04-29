<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Control y aseguramiento de calidad en la elaboración de declaraciones
    .row.justify-content-center.align-items-center.mb-5
      .col-xl
        .caja-tema1.mb-4.mb-lg-0(data-aos="fade-right")
          p.mb-0 A continuación, se presenta un video sobre el control y aseguramiento de la calidad en la elaboración y presentación de declaraciones tributarias, orientado a comprender su importancia práctica, sus fundamentos normativos y las estrategias básicas para fortalecer los procesos de verificación y soporte documental.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img1.png', alt='').m-auto
    figure(data-aos="zoom-in").mb-0
      .video.mb-1
        iframe(width="560" height="315" src="https://www.youtube.com/embed/J9phHcsgP2c?si=63_n358CVFppTmzj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption(data-aos="zoom-in") #[b Video]. Control y aseguramiento de calidad en la elaboración de declaraciones.
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Exactitud, completitud y consistencia
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        p La calidad de una declaración tributaria depende de la verificación de criterios que permiten asegurar que las cifras reflejen fielmente los hechos económicos del período y que el proceso de elaboración cumpla los parámetros normativos del año gravable correspondiente. Estos criterios orientan el control previo a la presentación y facilitan la organización del trabajo técnico.
        .caja-tema1-1(data-aos="fade-right")
          p.mb-0 Antes de presentar la declaración, es necesario comprender el alcance operativo de cada criterio de calidad, ya que su aplicación permite prevenir errores de cálculo, omisiones de información o inconsistencias entre los documentos de soporte y el formulario: 
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img2.png', alt='').m-auto
    .bg-slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Exactitud
                p.mb-0 La exactitud en una declaración implica que las cifras representen de forma fiel los hechos económicos del período y que los cálculos se realicen de acuerdo con la norma vigente y los parámetros del año gravable. Este criterio se protege mediante la elaboración de papeles de trabajo verificables que permitan comprobar sumas, cruces y límites, así como mediante la conservación de soportes documentales que sustenten el origen de cada valor incluido en la declaración presentada.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema1/img4.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Completitud
                p.mb-0 La completitud significa que la declaración contenga todos los rubros exigidos y que no se omita información relevante por desconocimiento, desorganización o falta de conciliación previa. Se garantiza, al revisar de manera integral el proceso de preparación, consolidar el expediente tributario, analizar fuentes documentales como certificados y extractos, y diligenciar una lista de chequeo que confirme que cada componente requerido ha sido incorporado antes de presentar formalmente la declaración.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema1/img5.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Consistencia
                p.mb-0 La consistencia se refiere a que los valores declarados coincidan entre las distintas etapas del proceso, desde los soportes iniciales y los papeles de trabajo hasta el formulario final presentado. Este criterio se asegura mediante controles cruzados y validaciones sistemáticas que comparen los totales calculados con los registrados en el borrador del formulario, con el propósito de evitar diferencias derivadas de errores de digitación, ubicación o aplicación de parámetros distintos.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema1/img6.png', alt='' style="max-width: 500px").m-auto
    p.mb-5 Esta organización permite comprender que el control de calidad en declaraciones tributarias no se limita al diligenciamiento del formulario, sino que implica la revisión integral del proceso de preparación y validación de la información.
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-tema1-2.mb-3(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/tema1/img7.jpg', alt='').m-auto
            .col-xl
              p.mb-0 Por otra parte, es importante que el aprendiz reconozca que los instructivos de formularios constituyen una guía general y no sustituyen la aplicación directa de la norma al caso concreto. En los instructivos oficiales del impuesto sobre las ventas (Formulario 300) y de retención en la fuente (Formulario 350), la DIAN advierte expresamente que estas orientaciones no eximen del cumplimiento de las disposiciones legales que regulan cada impuesto (DIAN, 2020).
        .caja-tema1-1(data-aos="zoom-in")
          p.mb-0 Con el fin de facilitar el control previo a la presentación, los criterios de calidad pueden traducirse en preguntas operativas que permiten verificar el cumplimiento del proceso y dejar evidencia del trabajo realizado.
    .row.justify-content-center.mb-0
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 1.
          span Criterios de calidad en declaraciones y preguntas de control
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Criterio
                th.ajuste-border-tabla.texto-left Pregunta de control
                th.texto-left Evidencia mínima
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Exactitud
                td.ajuste-border-tabla.texto-left ¿Cada cifra tiene soporte y el cálculo se puede reproducir?
                td.texto-left Papeles de trabajo + soportes
              tr
                td.ajuste-border-tabla.texto-left Completitud
                td.ajuste-border-tabla.texto-left ¿Están todos los rubros exigibles y anexos (si aplican)?
                td.texto-left #[i Checklist] diligenciado
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Consistencia
                td.ajuste-border-tabla.texto-left ¿Los totales concilian entre soportes, cálculo y formulario?
                td.texto-left Cruces y conciliaciones
              tr
                td.ajuste-border-tabla.texto-left Oportunidad
                td.ajuste-border-tabla.texto-left ¿Está dentro del vencimiento y canal correcto?
                td.texto-left Evidencia de calendario y constancia
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Trazabilidad
                td.ajuste-border-tabla.texto-left ¿Se puede rastrear soporte → dato → casilla?
                td.texto-left Matriz soporte–dato–casilla
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Riesgos frecuentes y puntos críticos del ciclo 
    .bg-1
      .px-5
        .row.justify-content-center.align-items-center.mb-5
          .col-xl.mb-4.mb-lg-0(data-aos="fade-right")
            .caja-tema1-3(data-aos="fade-right")
              p.mb-0 Los riesgos más frecuentes en el proceso tributario aparecen en puntos críticos del ciclo y no de manera aleatoria. Identificarlos permite aplicar controles oportunos que reduzcan errores en la elaboración, presentación y sustentación de la declaración.
          .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/tema1/img8.png', alt='').m-auto
          .col-xl
            p.mb-0 El ciclo de control tributario puede comprenderse como una secuencia estructurada de actividades orientadas a calcular, presentar y archivar la información declarada. Cada etapa concentra riesgos específicos que deben verificarse antes de avanzar en el proceso.
        p.mb-5 Para facilitar la comprensión del ciclo, a continuación, se organizan las etapas con los riesgos principales asociados: 
        .row.justify-content-center.mb-5
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 1.
              span Ciclo de control tributario
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/img10.svg', alt='Diagrama del ciclo de control tributario que incluye etapas como definir contexto, calcular y validar, diligenciar borrador, firmar y presentar, archivar evidencias y retroalimentar el proceso. ').m-auto
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/tema1/img11.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Definir contexto").ajuste-cajaAcordion
            p.mb-3 Consiste en precisar el año gravable, el tipo de obligación, el formulario aplicable y el canal de presentación. Esta fase permite iniciar el proceso con parámetros correctos, evitando errores de base que pueden afectar el cálculo y la presentación posterior.
          .row(titulo="Calcular y validar").ajuste-cajaAcordion
            p.mb-3 Comprende la elaboración de los papeles de trabajo, la consolidación de información y la conciliación de fuentes. Su finalidad es obtener cifras coherentes y sustentadas antes de diligenciar el formulario.
          .row(titulo="Diligenciar y verificar borrador").ajuste-cajaAcordion
            p.mb-3 Implica registrar las cifras en el formulario y revisar que coincidan con el resumen del cálculo. Esta validación permite detectar errores de digitación o ubicación antes del envío definitivo.
          .row(titulo="Firmar, presentar y pagar").ajuste-cajaAcordion
            p.mb-3 Corresponde formalizar la declaración mediante la firma electrónica o el mecanismo autorizado, realizar la presentación dentro del plazo y efectuar el pago correspondiente cuando exista obligación.
          .row(titulo="Archivar evidencias").ajuste-cajaAcordion
            p.mb-3 Incluye conservar el formulario presentado, la constancia de envío, el soporte de pago y la versión final del cálculo. Este archivo permite sustentar la información declarada ante eventuales revisiones.
          .row(titulo="Retroalimentar").ajuste-cajaAcordion
            p.mb-3 Consiste en analizar el proceso realizado, identificar fallas o mejoras y ajustar los controles para el siguiente período, fortaleciendo el ciclo de control tributario.
    .row.justify-content-center.mb-0
      .col-xl-10
        .caja-tema1-1.ajuste-color-1(data-aos="zoom-in").mb-5
          p.mb-0 Esta organización permite comprender que el control tributario debe aplicarse de manera continua desde la validación del contexto hasta la conservación de evidencias. En coherencia con esta secuencia, la siguiente tabla representa el ciclo completo y ubica los momentos en los que se recomienda aplicar controles obligatorios.
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 2.
          span Riesgos frecuentes y controles preventivos por etapa
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Etapa
                th.ajuste-border-tabla.texto-left Riesgo frecuente
                th.ajuste-border-tabla.texto-left Control preventivo
                th.texto-left Evidencia
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Definir contexto
                td.ajuste-border-tabla.texto-left Año o formulario incorrecto
                td.ajuste-border-tabla.texto-left Confirmar formulario en DIAN + registrar año gravable
                td.texto-left Captura o registro del formulario
              tr
                td.ajuste-border-tabla.texto-left Calcular y validar
                td.ajuste-border-tabla.texto-left Duplicidades u omisiones
                td.ajuste-border-tabla.texto-left Conciliación por fuente + tablero de validación
                td.texto-left Hoja “Control” y conciliación
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Diligenciar y verificar borrador
                td.ajuste-border-tabla.texto-left Diferencia cálculo vs borrador
                td.ajuste-border-tabla.texto-left Comparación renglón a renglón con resumen final
                td.texto-left #[i Checklist] final
              tr
                td.ajuste-border-tabla.texto-left Firmar / presentar / pagar
                td.ajuste-border-tabla.texto-left Fallas de acceso o canal
                td.ajuste-border-tabla.texto-left Validar usuario registrado y firma (si aplica)
                td.texto-left Evidencia de ingreso y trámite
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Archivar evidencias
                td.ajuste-border-tabla.texto-left No conservar evidencias
                td.ajuste-border-tabla.texto-left Archivar PDF, constancia y pago
                td.texto-left Carpeta de cierre
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Técnicas de coherencia y conciliación de información
    p.mb-5 La coherencia de la información tributaria se logra mediante la comparación sistemática de fuentes independientes, con el fin de asegurar que lo declarado corresponda a la realidad económica y esté respaldado con evidencia suficiente. En el proceso de elaboración de declaraciones, las técnicas de conciliación permiten identificar diferencias antes de la presentación. A continuación, se organizan las principales técnicas de coherencia utilizadas en la práctica.
    .bg-slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Conciliación de ingresos por fuente
                p.mb-0 Consiste en comparar la información proveniente de pagadores, bancos o plataformas con los registros propios del contribuyente, con el fin de detectar omisiones o duplicidades en los ingresos declarados.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema1/img12.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Conciliación de retenciones con certificados
                p.mb-0 Implica contrastar las retenciones registradas en los papeles de trabajo con los certificados expedidos por los agentes retenedores, lo cual permite identificar valores omitidos o duplicados.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema1/img13.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Conciliación de IVA con facturación y soportes
                p.mb-0 Permite verificar la coherencia entre las ventas y compras registradas, la base gravable utilizada y el impuesto sobre las ventas declarado, con el fin de detectar diferencias por tarifa o por base de cálculo.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema1/img14.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Conciliación de anticipos y pagos
                p.mb-0 Consiste en comparar los valores registrados como anticipos o pagos con los recibos oficiales y extractos financieros, con el propósito de confirmar su correcta imputación en la declaración.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema1/img15.png', alt='' style="max-width: 500px").m-auto
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img16.png', alt='').m-auto
      .col-xl
        .caja-tema1(data-aos="fade-left")
          p.mb-0 En el caso de las personas naturales, una técnica adicional de coherencia consiste en contrastar la información propia con la información sugerida disponible en los servicios de la DIAN. Esta comparación debe realizarse teniendo en cuenta la realidad económica del contribuyente. La entidad explica la ruta de acceso a la declaración sugerida mediante usuario registrado y recuerda que la información sugerida debe ser revisada antes de la presentación (DIAN, 2020). En este sentido, la declaración sugerida funciona como una señal de alerta que permite investigar diferencias antes de presentar.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0(data-aos="fade-right")
        .caja-tema1-3.ajuste-caja-tema1-3(data-aos="fade-right")
          p.mb-0 La calidad de una declaración tributaria depende de la verificación de criterios que permiten asegurar que las cifras reflejen fielmente los hechos económicos del período y que el proceso de elaboración cumpla los parámetros normativos del año gravable correspondiente. Estos criterios orientan el control previo a la presentación y facilitan la organización del trabajo técnico.
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema1/img17.png', alt='').m-auto
      .col-xl
        p.mb-0 La DIAN explica que cuando el proveedor no está obligado a expedir factura electrónica, el comprador debe elaborar el documento soporte con numeración autorizada para respaldar costos, deducciones o impuestos descontables. De manera complementaria, el micrositio de documentos equivalentes electrónicos indica que estos otorgan derecho a impuestos descontables en IVA y a costos y deducciones en renta siempre que cumplan los requisitos técnicos.
    p.mb-5 Finalmente, el proceso de conciliación debe dejar evidencia verificable. Esto implica elaborar una hoja de conciliación en la que se registre qué fuentes se compararon, qué diferencias se identificaron, cuál fue la explicación correspondiente y qué ajuste se realizó. Asimismo, debe existir un registro de decisión que permita establecer si la información fue corregida, excluida o documentada. Esta evidencia se integra al expediente tributario y fortalece el cumplimiento del deber de conservación de información (Secretaría Senado, 2026). Para facilitar la aplicación práctica de estas técnicas, se sintetizan a continuación los aspectos que permiten detectar.
    .bg-1
      .px-5
        .row.justify-content-center.mb-0
          .col-xl-8
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 3.
              span Técnicas de conciliación recomendadas y qué detectan
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Técnica
                    th.ajuste-border-tabla.texto-left Qué compara
                    th.texto-left Qué detecta
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Conciliación por fuente
                    td.ajuste-border-tabla.texto-left Pagadores vs bancos vs expediente
                    td.texto-left Omisiones y duplicidades
                  tr
                    td.ajuste-border-tabla.texto-left Retenciones vs certificados
                    td.ajuste-border-tabla.texto-left Registros propios vs certificados
                    td.texto-left Retenciones omitidas o duplicadas
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left IVA vs facturación
                    td.ajuste-border-tabla.texto-left Ventas y compras vs IVA declarado
                    td.texto-left Diferencias por base o tarifa
                  tr
                    td.ajuste-border-tabla.texto-left Declaración sugerida
                    td.ajuste-border-tabla.texto-left Información DIAN vs realidad
                    td.texto-left Alertas de inconsistencias
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Soporte idóneo
                    td.ajuste-border-tabla.texto-left Gasto vs soporte exigible
                    td.texto-left Riesgo de improcedencia
        Separador
        #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.4 Listas de chequeo y matrices de validación para declaraciones
        .row.justify-content-center.align-items-center.mb-5
          .col-xl
            .caja-tema1.ajuste-color-2.mb-4.mb-lg-0(data-aos="fade-right")
              p Las listas de chequeo y las matrices de validación son instrumentos de control que permiten convertir una revisión general en una revisión verificable. Su utilidad es doble, ya que estandarizan el proceso y dejan evidencia del control realizado.
              p.mb-0 En el contexto formativo, se recomienda que toda declaración tributaria cuente al menos con dos instrumentos: un #[i checklist] previo a la presentación y una matriz soporte–dato–casilla para los rubros más relevantes. A continuación, se sintetiza el uso de estos instrumentos en el proceso de elaboración de declaraciones tributarias.
          .col-xl-auto.col-md-9(data-aos="fade-left")
            figure
              img(src='@/assets/curso/tema1/img18.png', alt='').m-auto
    .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
      .col-xl-6.col-md-10.tarjeta.color-acento-contenido.text-white.p-5.mb-4.mb-lg-0
        .row.d-flex.align-items-end.mb-4
          .col-auto(data-aos="fade-right")
            figure
              img(src='@/assets/curso/tema1/img19.svg', alt='' style="max-width: 100px")
        h2 Lista de chequeo previa a la presentación
        p.mb-0 Permite verificar de forma estructurada los aspectos esenciales del proceso antes de presentar la declaración. Su utilización evita que la revisión dependa únicamente de la memoria del responsable y facilita confirmar que se han realizado conciliaciones, validaciones del formulario y verificación de evidencias.
      .col-xl-6.col-md-10.tarjeta.color-primario.p-5
        .row.d-flex.align-items-end.mb-4
          .col-auto(data-aos="fade-right")
            figure
              img(src='@/assets/curso/tema1/img20.svg', alt='' style="max-width: 100px")
        h2 Matriz soporte–dato–casilla
        p.mb-0 Permite rastrear el origen de los valores declarados y su ubicación en el formulario. Este instrumento resulta especialmente útil en rubros sensibles como ingresos, retenciones, deducciones y anticipos, ya que facilita comprobar la coherencia entre soportes documentales, cálculos y registro final.
    p.mb-5 Para diferenciar obligaciones tributarias, el #[i Checklist] debe ajustarse al tipo de declaración y al formulario oficial correspondiente. La DIAN centraliza los formularios e instructivos vigentes, lo cual permite confirmar el formulario correcto y su guía de diligenciamiento (Formularios e instructivos, 2026). Asimismo, los instructivos oficiales del impuesto sobre las ventas, de retención en la fuente y del régimen SIMPLE contienen orientaciones operativas útiles para la construcción de controles, como advertencias sobre la naturaleza general del instructivo y condiciones del proceso (DIAN, s.f.).
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-tema1-4(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/tema1/img21.jpg', alt='').m-auto
            .col-xl
              p Su aplicación varía según el tipo de impuesto, pero en todos los casos contribuye a mantener la consistencia entre la información soporte, los cálculos realizados y los valores finalmente declarados:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-2
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | En las declaraciones del #[b impuesto sobre la renta, la matriz soporte–dato–casilla] resulta especialmente relevante porque permite rastrear el origen de los valores registrados en el formulario. 
                li.mb-2
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | En #[b el impuesto sobre las ventas y en la retención en la fuente], este instrumento facilita vincular bases, tarifas y valores declarados con la facturación, los soportes y los certificados correspondientes.
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | #[b En el régimen SIMPLE], su uso cobra importancia debido a la necesidad de asegurar la coherencia entre el formulario anual consolidado y los anticipos bimestrales junto con el recibo electrónico correspondiente.
    p.mb-5 Finalmente, se recomienda que estos instrumentos de control se archiven junto con el formulario presentado en formato PDF, la constancia de presentación y el soporte de pago cuando aplique, en cumplimiento del deber de conservación de información. Para facilitar su aplicación, a continuación, se presenta una lista de chequeo mínima sugerida según el tipo de declaración.
    .row.justify-content-center.mb-5
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 4.
          span Lista de chequeo mínima por tipo de declaración
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Declaración
                th.ajuste-border-tabla.texto-left #[i Checklist] mínimo recomendado
                th.texto-left Fuente guía
            tbody
              tr
                td.ajuste-border-tabla.texto-left Renta (210/110)
                td.ajuste-border-tabla.texto-left Verificar perfil y formulario correctos, conciliación de ingresos y retenciones, revisión del cálculo frente al borrador y conservación de evidencias como PDF, constancia y soporte de pago
                td.texto-left Formularios DIAN
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left IVA (300)
                td.ajuste-border-tabla.texto-left Confirmar período, bases y tarifas aplicadas, validación del IVA generado y descontable cuando aplique, cruces con facturación y revisión del instructivo oficial
                td.texto-left Instructivo 300
              tr
                td.ajuste-border-tabla.texto-left Retención (350)
                td.ajuste-border-tabla.texto-left Verificar hechos sujetos a retención, bases y tarifas aplicadas, consolidación por concepto, confirmación de pago y período, y evidencia documental de soporte
                td.texto-left Instructivo 350
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left SIMPLE (260 + 2593)
                td.ajuste-border-tabla.texto-left Confirmar presentación de anticipos bimestrales, coherencia anual consolidada, validación del RUT y datos del contribuyente, y evidencias de pago
                td.texto-left Guías 260 y 2593
    .row.justify-content-center.align-items-center.mb-5
      .col-xl
        .caja-tema1.ajuste-color-2.mb-4.mb-lg-0(data-aos="fade-right")
          p El proceso de elaboración de declaraciones tributarias no finaliza con la presentación del formulario ante la administración tributaria. El sistema tributario contempla mecanismos para revisar, corregir o sancionar inconsistencias detectadas posteriormente. 
          p.mb-0 Comprender este marco normativo resulta fundamental, ya que los errores pueden presentarse durante el cálculo, en el diligenciamiento o después de la presentación cuando surgen nuevas evidencias. 
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img22.png', alt='').m-auto
    p.mb-5 En estos casos, la normativa establece procedimientos para realizar correcciones, atender requerimientos o solicitar devoluciones cuando existe saldo a favor, lo que permite actuar oportunamente y reducir riesgos asociados a sanciones o intereses.
    .caja-tema1-5.mb-0(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/tema1/img23.svg', alt='' style="max-width: 85px").m-auto
        .col-xl.mb-4.mb-lg-0
          h4 Consulta de formularios e instructivos DIAN
          p.mb-0 Antes de avanzar, se invita a realizar la consulta de los instructivos y guías oficiales de la DIAN, los cuales orientan el diligenciamiento adecuado de los formularios y el cumplimiento correcto de las obligaciones tributarias.
        .col-xl-2
          a.boton.color-acento-botones.texto-negro(:href="('https://www.dian.gov.co/atencionciudadano/formulariosinstructivos/Paginas/default.aspx')" target="_blank" type="website")
            span Abrir #[i web]
            i.fas.fa-external-link
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
