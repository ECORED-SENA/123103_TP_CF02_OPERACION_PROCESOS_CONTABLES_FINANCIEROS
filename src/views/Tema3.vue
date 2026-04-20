<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Auditoría tributaria aplicada y gestión de hallazgos
    .row.justify-content-center.align-items-center.mb-5
      .col-xl
        .caja-tema1.mb-4.mb-lg-0(data-aos="fade-right")
          p.mb-0 La auditoría tributaria aplicada es el proceso de verificación sistemática que permite confirmar que una declaración está bien construida, sustentada y lista para soportar revisiones posteriores. Su utilidad es práctica: detectar inconsistencias antes de presentar, documentar la evidencia que respalda cada cifra y reducir la probabilidad de correcciones, sanciones o controversias. En Colombia, este enfoque se relaciona con las facultades de fiscalización de la DIAN para verificar la exactitud de las declaraciones y solicitar pruebas cuando lo considere necesario.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img1.png', alt='').m-auto
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img2.png', alt='').m-auto
      .col-xl
        .caja-tema1.ajuste-color-2(data-aos="fade-left")
          p.mb-0 Este criterio de #[b auditoría aplicada al cumplimiento] implica que no se trata únicamente de revisar cifras, sino de #[b analizar el ciclo completo soporte–dato–casilla–evidencia y de elaborar papeles de trabajo que expliquen de manera clara el resultado obtenido]. Tal perspectiva se articula con el régimen probatorio tributario, según el cual las decisiones de la administración deben sustentarse en hechos demostrados dentro del expediente mediante medios de prueba compatibles con la legislación tributaria.
    p.mb-0 Además, el alcance de la auditoría tributaria no se limita a impuestos administrados por la DIAN. En aportes al Sistema de Protección Social, la UGPP también fiscaliza y busca determinar la liquidación y pago adecuado, completo y oportuno de las contribuciones parafiscales, por lo que el control del expediente y la coherencia de la información son igualmente relevantes. (UGPP).
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Planeación de auditoría
    p.mb-5 A continuación, se presenta un pódcast que explica los elementos fundamentales de la planeación de auditoría tributaria, con énfasis en la definición del alcance, los criterios de evaluación y la aplicación del muestreo basado en riesgos.
    .row.align-items-center.m-0.mb-5
      .col-xl
        .row.align-items-center.justify-content-center.caja-tema3(data-aos="zoom-in")
          .col-auto.mb-4.mb-lg-0
            figure(data-aos="fade-right")
              img(src="@/assets/curso/tema3/img3.svg" style="max-width: 220px").m-auto
          .col
            h4.mb-4 Pódcast
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="Planeación de auditoría"
              :audio="require('@/assets/curso/podcast/Planeacion_auditoria.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
      .col-xl-auto.d-none.d-xl-block
        figure(data-aos="fade-left")
          img(src="@/assets/curso/tema3/img4.png" ).m-auto
    p.mb-5 Para organizar la planeación del trabajo, se puede utilizar un formato base de plan de auditoría tributaria aplicada:
    .bg-carrusel
      .px-5
        SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/img5.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Objetivo
            p.mb-0.text-center Qué se busca asegurar con la auditoría.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/img5.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Alcance
            p.mb-0.text-center Impuestos o formularios revisados, periodo, rubros incluidos y límites.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/img5.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Criterios
            p.mb-0.text-center Normas aplicables, instructivos y procedimientos internos.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/img5.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Fuentes
            p.mb-0.text-center Contabilidad, reportes de terceros, facturación electrónica, declaraciones previas y soportes.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/img5.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Riesgos priorizados
            p.mb-0.text-center Omisiones, duplicidades, soportes insuficientes o parametrización errada.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/img5.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Muestreo
            p.mb-0.text-center Método utilizado, tamaño y justificación.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/img5.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Entregables
            p.mb-0.text-center Papeles de trabajo, informe y plan de acción.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/img5.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Responsables y fechas
            p.mb-0.text-center Responsable, revisores y cronograma.
    p.mb-0 Esta estructura permite orientar la auditoría desde un enfoque preventivo, facilitar la documentación del trabajo realizado y fortalecer la capacidad de respuesta ante eventuales procesos de fiscalización.
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Pruebas y papeles de trabajo
    .row.justify-content-center.align-items-center.mb-5
      .col-xl
        .caja-tema1.ajuste-color-2.mb-4.mb-lg-0(data-aos="fade-right")
          p Las pruebas de auditoría tributaria buscan demostrar que cada valor declarado puede rastrearse desde la casilla del formulario hasta el dato calculado y el soporte que respalda el hecho económico. Este enfoque responde al principio probatorio tributario (art. 742 E.T.).
          p.mb-0 En contribuyentes obligados a llevar contabilidad, los registros contables constituyen medio de prueba cuando se llevan en debida forma (art. 772 E.T.). Por ello, la auditoría suele iniciar con cruces contables y continuar con pruebas documentales. Para comprender la lógica de verificación de la información declarada, se presenta la siguiente secuencia de prueba tributaria.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img6.png', alt='').m-auto
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema2.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/tema3/img7.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Soporte
            p.mb-0.text-center Existencia del hecho económico y su periodo.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema2.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/img8.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Dato calculado
            p.mb-0.text-center Correcta determinación del valor.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema2.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/img9.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Casilla del formulario
            p.mb-0.text-center Registro adecuado en la declaración.
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .caja-tema2.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/tema3/img10.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Evidencia
            p.mb-0.text-center Documentación disponible para responder fiscalización.
    p.mb-5 Esta secuencia permite asegurar trazabilidad de la información y preparar la atención de requerimientos de la administración tributaria, dado el deber legal de aportar información y pruebas (art. 686 E.T.).
    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
      h5 Figura 2.
      span Papel de trabajo soporte–dato–casilla
    figure(data-aos="zoom-in").mb-5
      img(src='@/assets/curso/tema3/img11.svg', alt='Formato tabla de auditoría tributaria con columnas de rubro auditado, valor en papel de trabajo, casilla del formulario, soporte, prueba aplicada y resultado.').m-auto
    p.mb-0 El papel de trabajo funciona como instrumento técnico para sustentar la declaración y responder con solvencia ante revisiones posteriores.
    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Hallazgos
    .row.justify-content-center.align-items-center.mb-5
      .col-xl
        .caja-tema1.ajuste-color-4-2.mb-4.mb-lg-0(data-aos="fade-right")
          p.mb-0 Un hallazgo corresponde a una diferencia verificable entre lo observado durante la auditoría y el criterio definido en la planeación. Para que el hallazgo sea útil, debe sustentarse con evidencia organizada y demostrable conforme al principio probatorio tributario (art. 742 E.T.).
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img12.png', alt='').m-auto
    .caja-tema1-4.ajuste-color-3(data-aos="zoom-in").mb-5
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/tema3/img13.jpg', alt='').m-auto
        .col-xl
          p.mb-4 En auditoría de declaraciones tributarias, los hallazgos pueden comprender diferentes dimensiones del proceso de elaboración y sustentación de la información. De manera práctica, su análisis suele considerar los siguientes aspectos:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-2
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Qué ocurrió]: descripción concreta de la diferencia detectada.
            li.mb-2
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Dónde se evidencia]: renglón, anexo, papel de trabajo o soporte donde se identifica la situación.
            li.mb-2
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Qué criterio se afecta]: norma tributaria, instructivo o control interno definido en la planeación.
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Qué prueba lo respalda]: evidencia documental o cálculo que demuestra la diferencia.
    p.mb-5 Desde la experiencia operativa, las tipologías de hallazgos más frecuentes se relacionan con errores de exactitud, omisiones de completitud, diferencias de consistencia y situaciones formales o documentales. Un criterio práctico para su gestión consiste en establecer si el hallazgo impacta el impuesto a cargo o el saldo a favor, o si corresponde a un aspecto formal. Esta distinción facilita priorizar acciones correctivas y dimensionar el riesgo fiscal asociado.
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/tema3/img14.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Exactitud").ajuste-cajaAcordion
            p.mb-3 Se presenta cuando existe un error en el cálculo o en la clasificación de rubros, por ejemplo, una base o retención mal determinada. Se prueba mediante el recálculo con soportes y papeles de trabajo. Se cuantifica por la diferencia en el impuesto a cargo o en el saldo a favor. La prioridad sugerida es alta.
          .row(titulo="Completitud").ajuste-cajaAcordion
            p.mb-3 Ocurre cuando se omiten ingresos, retenciones u otros conceptos exigibles. Se evidencia al comparar certificados o reportes con los valores declarados. Se cuantifica por la diferencia en el saldo final de la declaración. La prioridad sugerida es alta.
          .row(titulo="Consistencia").ajuste-cajaAcordion
            p.mb-3 Surge cuando los cálculos no concilian entre soportes, papeles de trabajo y formulario presentado, por ejemplo, diferencias entre Excel y el formulario. Se prueba mediante el cruce renglón a renglón. Se cuantifica por diferencias derivadas de digitación o ubicación incorrecta. La prioridad sugerida es media.
          .row(titulo="Soporte").ajuste-cajaAcordion
            p.mb-3 Se presenta cuando una deducción o impuesto descontable carece de soporte idóneo. Se verifica con la revisión documental de requisitos formales. Se cuantifica en términos de riesgo de rechazo del rubro en una fiscalización. La prioridad sugerida es alta.
          .row(titulo="Formal").ajuste-cajaAcordion
            p.mb-3 Se relaciona con aspectos como evidencia incompleta de presentación, periodo o archivo. Se comprueba al constatar la ausencia de PDF, constancias u otros documentos. Se cuantifica como riesgo documental o probatorio. La prioridad sugerida es media.
    .bg-2
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-10
            .caja-tema3-1(data-aos="zoom-in")
              .row.align-items-center
                .col-xl-auto
                  figure
                    img(src='@/assets/curso/tema3/img15.jpg', alt='').m-auto
                .col-xl
                  p La identificación de la causa raíz permite explicar el origen del hallazgo y orientar acciones correctivas efectivas. Para este análisis se recomienda utilizar herramientas sencillas como:
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-2
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Análisis de los cinco porqués.
                    li.mb-2
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Diagrama causa–efecto.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Revisión de frecuencia de errores.
        p.mb-0 Estas herramientas facilitan establecer si la diferencia se origina en parametrización incorrecta del periodo, ausencia de conciliaciones, falta de controles internos o deficiencias en la custodia del expediente. Este análisis fortalece la argumentación técnica y la preparación del contribuyente frente a eventuales procesos de fiscalización.      
        Separador
        #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.4 Informe de auditoría, recomendaciones y plan de acción
        p.mb-5 Un informe útil no se limita a describir fallas. También debe plantear acciones concretas con responsables, plazos y evidencias de cierre, de manera que contribuya a la mejora del proceso tributario. En entornos empresariales, el revisor fiscal cumple un papel relevante en la vigilancia del cumplimiento y en el reporte de irregularidades. 
        .row.justify-content-center.mb-5
          .col-xl-10
            .caja-tema3-2(data-aos="zoom-in")
              .row.align-items-center
                .col-xl.order-2.order-lg-1
                  p.mb-0 El Código de Comercio (artículo 207) establece funciones orientadas a verificar que las operaciones se ajusten a los estatutos y decisiones sociales, así como a informar oportunamente situaciones irregulares.
                .col-xl-auto.order-1.order-lg-2
                  figure
                    img(src='@/assets/curso/tema3/img16.jpg', alt='').m-auto
        p.mb-5 De forma complementaria, la Junta Central de Contadores ejerce inspección y vigilancia sobre el ejercicio profesional, lo cual refuerza la responsabilidad de documentar el trabajo realizado con diligencia.
        SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/img17.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Identificación
            p.mb-0.text-center Incluye el periodo auditado, el impuesto revisado, el formulario correspondiente y el equipo auditor responsable.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/img18.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Objetivo y alcance
            p.mb-0.text-center Define el propósito del trabajo y delimita los aspectos revisados, los límites del análisis y su justificación.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/img19.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Criterios
            p.mb-0.text-center Señala las normas tributarias aplicables, instructivos, controles internos y papeles de trabajo considerados.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/img20.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Metodología
            p.mb-0.text-center Explica el tipo de muestreo, las pruebas aplicadas y las fuentes de información utilizadas en la revisión.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/img21.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Hallazgos
            p.mb-0.text-center Presenta las diferencias encontradas, la evidencia disponible, el criterio afectado y el impacto identificado.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/img22.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Recomendaciones
            p.mb-0.text-center Plantea acciones preventivas o correctivas orientadas a mejorar el proceso y evitar recurrencia de fallas.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/img23.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Plan de acción
            p.mb-0.text-center Define responsables, fechas de cumplimiento y evidencias requeridas para el cierre de cada acción.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/img24.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Anexos
            p.mb-0.text-center Incorpora matrices de auditoría, conciliaciones y soportes relevantes que respaldan el informe.
    p.mb-0 Las recomendaciones deben formularse como mejoras de proceso, por ejemplo: implementar conciliación de retenciones por pagador antes del diligenciamiento, bloquear los parámetros del año gravable en las herramientas de cálculo o definir evidencia mínima requerida para cada rubro tributario sensible. El plan de acción puede estructurarse mediante el formato 5W2H, con el fin de asegurar seguimiento medible y verificable.
    Separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.5 Seguimiento y cierre de acciones correctivas
    .row.justify-content-center.align-items-center.mb-5
      .col-xl
        .caja-tema1.ajuste-color-4-1.mb-4.mb-lg-0(data-aos="fade-right")
          p.mb-0 El seguimiento es la etapa que permite convertir la auditoría en mejora real del proceso tributario. Consiste en verificar que cada acción correctiva se ejecutó conforme a lo planeado, que dejó evidencia suficiente y que la causa raíz del hallazgo fue controlada. Cuando no existe seguimiento, los hallazgos tienden a repetirse en periodos posteriores y el proceso se vuelve reactivo.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img25.png', alt='').m-auto
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-tema1-4.ajuste-color-6(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/tema3/img26.jpg', alt='').m-auto
            .col-xl
              p Desde el enfoque operativo, el seguimiento del plan de acción implica desarrollar actividades concretas como:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-2
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Verificar la ejecución de la acción correctiva conforme al compromiso definido.
                li.mb-2
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Confirmar la existencia de evidencia documental que respalde la corrección realizada.
                li.mb-2
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Evaluar si la causa raíz del hallazgo fue realmente controlada.
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Realizar una verificación independiente para evitar cierres sin soporte suficiente.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl
        .caja-tema1.mb-4.mb-lg-0(data-aos="fade-right")
          p.mb-0 Una práctica útil consiste en implementar un tablero simple de seguimiento que permita controlar el avance de las acciones y dejar trazabilidad del proceso. Este tablero puede incluir información como la acción definida, el responsable, la fecha compromiso, el estado de ejecución, la evidencia disponible y la verificación realizada.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img27.png', alt='').m-auto
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-auto.col-md-9(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img28.png', alt='').m-auto
      .col-xl
        .caja-tema1.ajuste-color-2.mb-4.mb-lg-0(data-aos="fade-left")
          p.mb-0 En procesos donde interviene la UGPP, el seguimiento adquiere especial relevancia debido a que esta entidad desarrolla procesos formales de fiscalización orientados a verificar la adecuada, completa y oportuna liquidación y pago de aportes al Sistema de Protección Social. En este contexto, el control preventivo y el cierre adecuado de las acciones correctivas constituyen un mecanismo práctico de defensa para el aportante. El cierre correcto del proceso implica actualizar el expediente tributario incorporando:
    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
      h5 Figura 3.
      span Matriz de seguimiento y cierre de acciones correctivas 
    figure(data-aos="zoom-in").mb-5
      img(src='@/assets/curso/tema3/img29.svg', alt='Formato tabla de control de hallazgos que integra campos de acción correctiva, responsable, fecha compromiso, estado, evidencia de cierre y verificación. ').m-auto
    .bg-1
      .px-5
        .row.justify-content-center.align-items-center.mb-5
          .col-xl
            .caja-tema1.ajuste-color-7.mb-4.mb-lg-0(data-aos="fade-right")
              p El proceso de determinación y fiscalización de la UGPP constituye un contexto relevante para el seguimiento en materia de aportes al Sistema de Protección Social.
              p.mb-0 El desarrollo de la auditoría tributaria aplicada permite transformar la elaboración de declaraciones en un proceso controlado, verificable y sustentado. 
          .col-xl-auto.col-md-9(data-aos="fade-left")
            figure
              img(src='@/assets/curso/tema3/img30.png', alt='').m-auto
        p.mb-5 Su importancia radica en anticipar riesgos antes de la presentación y fortalecer la defensa técnica del contribuyente después de presentar, mediante la documentación de papeles de trabajo que conectan soporte, dato y casilla. Como recomendaciones prácticas finales, se sugiere:
        .row.justify-content-center.mb-5
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .caja-tema2.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-right")
                    img(src='@/assets/curso/tema3/img31.svg', alt="" style="max-width: 90px").m-auto
                p.mb-0.text-center Mantener una planeación mínima de auditoría en cada periodo fiscal.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .caja-tema2.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="zoom-in")
                    img(src='@/assets/curso/tema3/img32.svg', alt="" style="max-width: 90px").m-auto
                p.mb-0.text-center Estandarizar los papeles de trabajo mediante matrices de trazabilidad y conciliaciones.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .caja-tema2.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="zoom-in")
                    img(src='@/assets/curso/tema3/img33.svg', alt="" style="max-width: 90px").m-auto
                p.mb-0.text-center Documentar los hallazgos con cuantificación de impacto para priorizar acciones.
          .col-xl-3.col-md-9(data-aos="zoom-in")
            .caja-tema2.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-left")
                    img(src='@/assets/curso/tema3/img34.svg', alt="" style="max-width: 90px").m-auto
                p.mb-0.text-center Cerrar cada auditoría con informe, plan de acción y seguimiento con evidencia.
        p.mb-5 Este enfoque favorece la mejora continua del proceso tributario y contribuye a lograr mayor exactitud, consistencia y oportunidad en la elaboración de declaraciones.
    .caja-tema1-5.mb-0(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/tema1/img23.svg', alt='' style="max-width: 85px").m-auto
        .col-xl.mb-4.mb-lg-0
          h4 Defensa del contribuyente en la fiscalización de los tributos
          p.mb-0 Se invita a consultar este recurso audiovisual con el propósito de fortalecer la comprensión sobre la importancia de la evidencia, la trazabilidad de la información y la actuación adecuada del contribuyente durante los procesos de fiscalización tributaria.
        .col-xl-2
          a.boton.color-acento-botones.texto-negro(:href="('https://www.youtube.com/watch?v=UbMBnXJw9_c')" target="_blank" type="website")
            span Abrir #[i web]
            i.fas.fa-external-link
</template>

<script>
export default {
  name: 'Tema3',
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
