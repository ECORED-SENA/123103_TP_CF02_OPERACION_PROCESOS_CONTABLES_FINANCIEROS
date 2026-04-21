<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Mejora continua y gobierno del proceso tributario
    .row.justify-content-center.align-items-center.mb-5
      .col-xl
        .caja-tema1.mb-4.mb-lg-0(data-aos="fade-right")
          p.mb-0 La mejora continua en los procesos tributarios busca un resultado concreto: que cada periodo de declaración se gestione con mayor calidad que el anterior, reduciendo correcciones, disminuyendo riesgos de sanciones, mejorando la coherencia entre fuentes de información y fortaleciendo la capacidad de respuesta ante revisiones fiscales.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img1.png', alt='').m-auto
    .caja-tema1-4(data-aos="zoom-in").mb-5
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/tema4/img2.jpg', alt='').m-auto
        .col-xl
          p.mb-4 En la práctica, este propósito se alcanza cuando el proceso deja de depender exclusivamente de la memoria o experiencia individual y pasa a sustentarse en mecanismos formales de control. Entre estos mecanismos se destacan:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-1
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | Uso de indicadores de desempeño del proceso tributario.
            li.mb-1
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | Aplicación de formatos estandarizados de revisión y conciliación.
            li.mb-1
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | Definición de protocolos operativos para cada etapa de la declaración.
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | Organización sistemática de la evidencia documental del expediente.
    p.mb-5 No se trata únicamente de cumplir correctamente en un periodo determinado, sino de contar con un sistema que permita mantener la calidad del proceso a lo largo del tiempo, incluso cuando cambian los responsables, aumenta el volumen de operaciones o se actualiza la normatividad aplicable.
    .caja-tema1-4(data-aos="zoom-in").mb-5
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/tema4/img3.jpg', alt='').m-auto
        .col-xl
          p.mb-4 La lógica metodológica de la mejora continua suele apoyarse en el ciclo PHVA, utilizado en sistemas de gestión de calidad para estructurar el control y la mejora de los procesos. Ciclo de mejora continua aplicado al proceso tributario:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-1
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Planear]: Definir controles, criterios de auditoría, responsables y riesgos del proceso.
            li.mb-1
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Hacer]: Ejecutar la elaboración, revisión y presentación de la declaración conforme a lo planificado.
            li.mb-1
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Verificar]: Evaluar resultados mediante indicadores, conciliaciones y auditoría tributaria aplicada.
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Actuar]: Implementar acciones correctivas y ajustes para el siguiente periodo fiscal.
    .caja-tema1(data-aos="zoom-in")
      .row.align-items-center.justify-content-center
        .col-xl.mb-4.mb-lg-0
          p Esta lógica permite estructurar un proceso tributario dinámico, en el cual cada ciclo de declaración se convierte en una oportunidad de aprendizaje y mejora.
          p.mb-0 Finalmente, el gobierno del proceso tributario implica establecer reglas claras sobre la asignación de responsabilidades, la actualización frente a cambios normativos, el control de versiones de los documentos y la conservación adecuada de la evidencia. Este enfoque se relaciona directamente con la gestión documental y con los lineamientos normativos existentes en Colombia sobre organización y conservación de expedientes.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/tema4/img4.png', alt='').m-auto
    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Indicadores de desempeño
    .bg-3
      .px-5
        .row.justify-content-center.align-items-center.mb-5
          .col-xl.mb-4.mb-lg-0
            p Medir el proceso tributario permite pasar de percepciones generales sobre el resultado de las declaraciones a evidencia concreta de desempeño. En términos prácticos, los indicadores facilitan evaluar si las obligaciones se están cumpliendo dentro de los plazos establecidos, si la calidad del cálculo está mejorando en el tiempo y si la organización está reduciendo la exposición a costos asociados a correcciones, intereses o sanciones.
            p.mb-0 Desde el enfoque de gestión, los indicadores deben diseñarse para apoyar la toma de decisiones. Para ello, se recomienda que cumplan características como:
          .col-xl-auto.col-md-9(data-aos="fade-left")
            figure
              img(src='@/assets/curso/tema4/img5.png', alt='').m-auto
        .row.justify-content-center.mb-5
          .col-xl-3.col-md-9.fit___space-card(data-aos="zoom-in")
            .caja-tema4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-right")
                    img(src='@/assets/curso/tema4/img6.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Ser pocos y accionables
                p.mb-0.text-center Permiten concentrar el análisis en aspectos críticos del proceso.
          .col-xl-3.col-md-9.fit___space-card(data-aos="zoom-in")
            .caja-tema4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-right")
                    img(src='@/assets/curso/tema4/img6.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Relacionarse con riesgos concretos
                p.mb-0.text-center Facilitan identificar causas como parametrización incorrecta, conciliación insuficiente o controles previos débiles.
          .col-xl-3.col-md-9.fit___space-card(data-aos="zoom-in")
            .caja-tema4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-left")
                    img(src='@/assets/curso/tema4/img6.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Conectar medición con mejora
                p.mb-0.text-center Permiten ajustar controles preventivos en periodos posteriores.
          .col-xl-3.col-md-9(data-aos="zoom-in")
            .caja-tema4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-left")
                    img(src='@/assets/curso/tema4/img6.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Integrarse al ciclo PHVA
                p.mb-0.text-center Apoyan la planeación de metas, la verificación de resultados y la implementación de acciones correctivas.   
        .caja-tema2-2.mb-5.mt-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/tema2/img23.svg" style="max-width: 60px").m-auto
          .col
            h3 Indicadores recomendados para control y mejora del proceso tributario
        p.mb-5 Para medir la oportunidad, la calidad del cálculo y la capacidad de respuesta del proceso, se proponen los siguientes indicadores.
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 6.
          span Indicadores para control y mejora del proceso tributario
        .tabla-a(data-aos="zoom-in").mb-5
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Indicador
                th.ajuste-border-tabla.texto-left Cómo se calcula
                th.ajuste-border-tabla.texto-left Qué permite detectar
                th.texto-left Evidencia
            tbody
              tr
                td.ajuste-border-tabla.texto-left Oportunidad de presentación
                td.ajuste-border-tabla.texto-left Declaraciones presentadas dentro del plazo / total de declaraciones
                td.ajuste-border-tabla.texto-left Riesgo de extemporaneidad
                td.texto-left Constancias de presentación y calendario aplicado
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Tasa de corrección
                td.ajuste-border-tabla.texto-left Declaraciones corregidas / total de declaraciones
                td.ajuste-border-tabla.texto-left Fallas recurrentes del proceso
                td.texto-left Historial de versiones y registros de corrección
              tr
                td.ajuste-border-tabla.texto-left Exposición a sanciones e intereses
                td.ajuste-border-tabla.texto-left Valor de sanciones e intereses en el periodo
                td.ajuste-border-tabla.texto-left Costo de no calidad del proceso
                td.texto-left Actos administrativos, recibos y soportes de pago
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Consistencia cálculo vs formulario
                td.ajuste-border-tabla.texto-left Número de diferencias detectadas antes de presentar
                td.ajuste-border-tabla.texto-left Errores de diligenciamiento o clasificación
                td.texto-left #[i Checklist] final y conciliaciones
              tr
                td.ajuste-border-tabla.texto-left Requerimientos atendidos en plazo
                td.ajuste-border-tabla.texto-left Requerimientos respondidos oportunamente / total recibidos
                td.ajuste-border-tabla.texto-left Riesgo por respuesta tardía
                td.texto-left Radicados, anexos y evidencia de envío
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Hallazgos repetidos
                td.ajuste-border-tabla.texto-left Hallazgos repetidos / total de hallazgos identificados
                td.ajuste-border-tabla.texto-left Falta de efectividad de acciones correctivas
                td.texto-left Matriz de hallazgos y registros de seguimiento
    .row.justify-content-center.align-items-center.mb-5
      .col-xl
        .caja-tema1.mb-4.mb-lg-0(data-aos="fade-right")
          p Una vez definidos, los indicadores deben integrarse al proceso para evitar que se conviertan en registros aislados. En la práctica, su análisis permite identificar desviaciones, priorizar acciones correctivas y verificar si los ajustes implementados contribuyen a mejorar los resultados en periodos posteriores.
          p.mb-0 En este sentido, la gestión de indicadores se articula con el ciclo PHVA: primero se establecen metas y controles, luego se ejecuta el proceso, posteriormente se verifican los resultados mediante la medición y finalmente se aplican ajustes que fortalecen la calidad del proceso tributario en el siguiente ciclo.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img7.png', alt='').m-auto
    .row.align-items-center.mb-5
      .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 4.
          span Ciclo PHVA aplicado al proceso tributario
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema4/img8.svg', alt='Esquema del ciclo de mejora continua que presenta las fases planear, hacer, verificar y actuar dentro del proceso tributario. ').m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Planear").ajuste-cajaAcordion
            p.mb-0 Definir metas del periodo, identificar riesgos tributarios, establecer controles preventivos, organizar el cronograma y asignar responsables del proceso.
          .row(titulo="Hacer").ajuste-cajaAcordion
            p.mb-0 Ejecutar la elaboración, revisión y presentación de las declaraciones conforme a la guía técnica y a los controles definidos previamente.
          .row(titulo="Verificar").ajuste-cajaAcordion
            p.mb-0 Medir resultados mediante indicadores, evidenciar hallazgos a través de conciliaciones, listas de chequeo y pruebas documentales.
          .row(titulo="Actuar").ajuste-cajaAcordion
            p.mb-0 Implementar acciones correctivas y preventivas, actualizar formatos y protocolos, y controlar las versiones del proceso tributario.
    p.mb-0 Esta figura presenta la lógica mediante la cual los indicadores alimentan la mejora continua del proceso tributario, permitiendo planear controles, ejecutar las actividades, verificar resultados y actuar con ajustes para el siguiente periodo. Este enfoque se relaciona con el modelo de mejora continua descrito en la norma ISO 9001.
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Herramientas de mejora
    .row.justify-content-center.align-items-center.mb-5
      .col-xl
        .caja-tema1.mb-4.mb-lg-0(data-aos="fade-right")
          p.mb-0 Las herramientas de mejora son instrumentos prácticos para sostener la calidad sin depender de la memoria. En procesos tributarios, las más efectivas suelen ser: un tablero de control (indicadores + alertas), un cronograma de vencimientos (por impuesto y responsable), formatos de control (listas de chequeo, matrices de validación) y un registro de fallas con causa raíz y acción aplicada.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img9.png', alt='').m-auto
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema4/img10.png', alt='').m-auto
      .col-xl
        .caja-tema1.ajuste-color-2(data-aos="fade-left")
          p.mb-0 Un tablero útil no es una “presentación”; es una hoja o tablero operativo que se actualiza en cada periodo y dispara decisiones. Por ejemplo, si el indicador de consistencia “cálculo vs formulario” sube, el tablero debe llevar a reforzar el control previo (revisión cruzada del borrador, bloqueo de celdas de parámetros, validación de retenciones). Esta lógica es coherente con una gestión por procesos y control de operaciones, como se plantea en enfoques de sistemas de calidad. (Icontec Internacional, 2015).
    p.mb-5 Esta tabla define herramientas mínimas y su función. Se recomienda que cada herramienta tenga responsable, frecuencia de actualización y evidencia de uso:
    .row.justify-content-center.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 7.
          span #[i Kit] de herramientas mínimas para mejora continua en declaraciones
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Herramienta
                th.ajuste-border-tabla.texto-left Para qué sirve
                th.ajuste-border-tabla.texto-left Frecuencia
                th.texto-left Evidencia
            tbody
              tr
                td.ajuste-border-tabla.texto-left Tablero de indicadores
                td.ajuste-border-tabla.texto-left Medir desempeño y disparar acciones
                td.ajuste-border-tabla.texto-left Mensual / por vencimiento
                td.texto-left Captura o exportable del tablero
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Cronograma tributario
                td.ajuste-border-tabla.texto-left Controlar vencimientos y preparación
                td.ajuste-border-tabla.texto-left Permanente (revisión semanal)
                td.texto-left Cronograma con responsables
              tr
                td.ajuste-border-tabla.texto-left Lista de chequeo previo a presentar
                td.ajuste-border-tabla.texto-left Evitar omisiones antes de firmar/presentar
                td.ajuste-border-tabla.texto-left Cada declaración
                td.texto-left #[i Checklist] diligenciado
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Matriz soporte–dato–casilla
                td.ajuste-border-tabla.texto-left Garantizar trazabilidad de rubros
                td.ajuste-border-tabla.texto-left Cada declaración (rubros sensibles)
                td.texto-left Matriz archivada en expediente
              tr
                td.ajuste-border-tabla.texto-left Registro de fallas
                td.ajuste-border-tabla.texto-left Capturar errores, causa raíz y solución
                td.ajuste-border-tabla.texto-left Cada evento
                td.texto-left Log de fallas con cierre
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Matriz de hallazgos
                td.ajuste-border-tabla.texto-left Priorizar y hacer seguimiento
                td.ajuste-border-tabla.texto-left Mensual / por auditoría
                td.texto-left Matriz con estado y evidencia
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .caja-tema1.mb-3(data-aos="fade-right")
          p.mb-0 Las herramientas listadas permiten sostener el proceso en el tiempo porque estandarizan qué se debe hacer, cuándo y con qué evidencia. Sin embargo, para que la mejora continua sea real, no basta con tener formatos y tableros: es necesario capturar lo que falla, por qué falla y qué se hizo para evitar que se repita. Por eso, además de la lista de chequeo, la matriz de trazabilidad y el cronograma, se requiere un mecanismo específico de aprendizaje del proceso: un registro de fallas.
        p.mb-0 Este registro convierte cada error (por ejemplo, una inconsistencia en retenciones, una parametrización incorrecta del año o una omisión de un anexo) en información útil para tomar decisiones, priorizar acciones correctivas y ajustar controles preventivos para el siguiente periodo. En la siguiente figura se presenta la plantilla del registro de fallas, que debe diligenciarse cada vez que ocurra un evento, dejando evidencia del impacto y del cierre. 
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img11.png', alt='').m-auto
    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
      h5 Figura 5.
      span Registro de fallas del proceso tributario 
    figure(data-aos="zoom-in").mb-5
      img(src='@/assets/curso/tema4/img53.svg', alt='Formato tabular para documentar fecha, proceso o impuesto, falla identificada, causa raíz, impacto, acción aplicada, evidencia y estado. ').m-auto
    .row.justify-content-center.align-items-center.mb-0
      .col-xl
        .caja-tema1.ajuste-color-2.mb-4.mb-lg-0(data-aos="fade-right")
          p En conclusión, las herramientas de mejora (tablero, cronograma, formatos de control y registro de fallas) permiten que el proceso tributario sea repetible y verificable, reduciendo la dependencia de la memoria y disminuyendo errores por omisiones, duplicidades o falta de revisión. 
          p.mb-0 Al estandarizar controles y documentar fallas con su causa raíz y acción aplicada, se construye un aprendizaje acumulativo: cada periodo deja ajustes concretos que fortalecen la oportunidad, la consistencia del cálculo y la calidad de la evidencia. Con esta base, el siguiente paso es formalizar cómo se sostienen esos cambios en el tiempo mediante protocolos institucionales, definiendo responsabilidades, actualización normativa y comunicación de cambios.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img12.png', alt='').m-auto
    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3 Protocolos institucionales
    p.mb-5 El principal riesgo institucional en los procesos tributarios consiste en que la normativa cambie mientras el procedimiento interno permanece sin ajustes. Para evitar esta situación, es necesario establecer un protocolo formal de actualización normativa que permita identificar cambios oportunamente y traducirlos en ajustes concretos del proceso. 
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-tema1-4(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/tema4/img13.jpg', alt='').m-auto
            .col-xl
              p.mb-4 Desde el enfoque operativo, un protocolo de actualización normativa debe definir aspectos como:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-1
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Fuentes de información oficial que deben consultarse periódicamente.
                li.mb-1
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Frecuencia de revisión de normas, instructivos y formularios vigentes.
                li.mb-1
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Responsables encargados de validar el impacto de los cambios normativos.
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Mecanismos de comunicación interna para difundir las actualizaciones al equipo.
    p.mb-5 Una práctica funcional consiste en establecer puntos de control normativo dentro del proceso tributario. Estos puntos permiten:
    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema2.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/tema4/img14.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Realizar revisión periódica del repositorio oficial de formularios e instructivos.
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema2.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/tema4/img15.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Hacer seguimiento a resoluciones y orientaciones aplicables al año gravable.
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema2.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/tema4/img16.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Actualizar plantillas de cálculo, parámetros, topes y casillas impactadas por cambios normativos.
    p.mb-5 Este enfoque reduce el riesgo de utilizar formularios desactualizados o aplicar procedimientos que ya no corresponden al periodo fiscal vigente.
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-tema1-4(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/tema4/img17.jpg', alt='').m-auto
            .col-xl
              p.mb-4 El gobierno del proceso tributario también requiere definir roles claros en cada etapa del ciclo. Para ello, puede utilizarse una estructura tipo RACI que permita asignar responsabilidades relacionadas con:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-1
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Parametrización del año gravable.
                li.mb-1
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Conciliación de fuentes y revisión de soportes.
                li.mb-1
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Validación del borrador del formulario.
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Firma, presentación y cierre documental del proceso.
    p.mb-5 Esta definición resulta especialmente útil en contextos con rotación de personal o cuando el proceso es ejecutado por más de un responsable. Esta tabla permite asegurar que cada cambio normativo se traduzca en ajustes verificables del proceso tributario.
    .row.justify-content-center.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 8.
          span Protocolo de actualización normativa y gestión de cambios 
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Etapa
                th.ajuste-border-tabla.texto-left Qué se hace
                th.ajuste-border-tabla.texto-left Responsable
                th.texto-left Evidencia
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Monitoreo
                td.ajuste-border-tabla.texto-left Revisar fuentes oficiales como formularios, instructivos y trámites vigentes.
                td.ajuste-border-tabla.texto-left Responsable tributario
                td.texto-left Registro de revisión normativa
              tr
                td.ajuste-border-tabla.texto-left Evaluación
                td.ajuste-border-tabla.texto-left Identificar impacto del cambio en cálculos, formularios y evidencias requeridas.
                td.ajuste-border-tabla.texto-left Revisor o auditor interno
                td.texto-left Matriz de impacto normativo
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Actualización
                td.ajuste-border-tabla.texto-left Ajustar plantillas, listas de chequeo, cronogramas y guías internas.
                td.ajuste-border-tabla.texto-left Responsable del proceso y aprobador
                td.texto-left Versión nueva controlada
              tr
                td.ajuste-border-tabla.texto-left Comunicación
                td.ajuste-border-tabla.texto-left Informar cambios y capacitar al equipo involucrado.
                td.ajuste-border-tabla.texto-left Líder del proceso
                td.texto-left Actas, correos o evidencias de capacitación
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Verificación
                td.ajuste-border-tabla.texto-left Confirmar aplicación correcta de los cambios en el siguiente periodo fiscal.
                td.ajuste-border-tabla.texto-left Auditor interno
                td.texto-left #[i Checklist] de control y registro de hallazgos
    .row.justify-content-center.align-items-center.mb-5
      .col-xl
        .caja-tema1.mb-4.mb-lg-0(data-aos="fade-right")
          p.mb-0 En conclusión, los protocolos institucionales permiten que el control tributario sea sostenible en el tiempo, ya que garantizan que los cambios normativos y operativos se traduzcan en ajustes reales del proceso. Al definir cómo se monitorean las fuentes oficiales, cómo se evalúa el impacto en formularios y evidencias, y cómo se actualizan versiones de plantillas y cronogramas, se reduce el riesgo de mantener prácticas desactualizadas.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img18.png', alt='').m-auto
    .row.justify-content-center.align-items-center.mb-0
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema4/img19.png', alt='').m-auto
      .col-xl
        .caja-tema1.ajuste-color-2(data-aos="fade-left")
          p.mb-0 Asimismo, la asignación clara de roles y la definición de rutas de comunicación favorecen la continuidad del proceso aun cuando exista rotación de personal, fortaleciendo la responsabilidad sobre cada etapa y preparando el proceso para la gestión documental y la conservación de la evidencia en el tiempo.
    Separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.4 Sistema de gestión documental
    p.mb-5 Un sistema de gestión documental en materia tributaria corresponde al conjunto de reglas y prácticas orientadas a crear, organizar, conservar y recuperar de manera confiable los documentos y evidencias que soportan la elaboración y presentación de declaraciones. Su utilidad es inmediata, ya que permite responder con rapidez cuando una cifra declarada es cuestionada, mostrando el soporte, el papel de trabajo y la evidencia del trámite correspondiente.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-8.mb-4.mb-lg-0
        .caja-tema4-1(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/tema4/img20.jpg', alt='').m-auto
            .col-xl
              p.mb-0 En Colombia, #[b la gestión documental] cuenta con un marco normativo general establecido en la #[b Ley 594 de 2000], relacionada con la función archivística, y en el #[b Decreto 2609 de 2012], que regula la gestión documental e incorpora lineamientos para documentos electrónicos.
      .col-xl-4
        p.mb-0 Sin un sistema de gestión documental adecuado, el control tributario pierde sostenibilidad, se debilita la trazabilidad del proceso y aumenta el riesgo de errores repetidos o respuestas incompletas ante verificaciones. Desde el enfoque operativo, la sostenibilidad del expediente tributario depende de dos principios fundamentales:
    .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
      .col-xl-6.col-md-10.tarjeta.color-acento-contenido.text-white.p-5.mb-4.mb-lg-0
        .row.d-flex.align-items-end.mb-4
          .col-auto(data-aos="fade-right")
            figure
              img(src='@/assets/curso/tema4/img21.svg', alt='' style="max-width: 100px")
        h2 Integridad
        p.mb-0 Garantiza que el documento conserve su contenido, contexto y estructura original.
      .col-xl-6.col-md-10.tarjeta.color-primario.p-5
        .row.d-flex.align-items-end.mb-4
          .col-auto(data-aos="fade-right")
            figure
              img(src='@/assets/curso/tema4/img22.svg', alt='' style="max-width: 100px")
        h2 Trazabilidad
        p.mb-0 Permite identificar quién creó el documento, cuándo, con qué propósito y cómo se relaciona con el expediente del periodo.
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-tema4-2(data-aos="zoom-in")
          .row.align-items-center
            .col-xl.order-2.order-lg-1
              p.mb-4 Este subtema se centra en cuatro prácticas que fortalecen la defensa técnica del proceso tributario:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-1
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Control de versiones de documentos.
                li.mb-1
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Custodia y seguridad de la evidencia.
                li.mb-1
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Definición de evidencias mínimas por etapa del proceso.
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Estructuración del expediente tributario, incluido el expediente electrónico.
            .col-xl-auto.order-1.order-lg-2
              figure
                img(src='@/assets/curso/tema4/img23.jpg', alt='').m-auto
    p.mb-5 Estas prácticas se relacionan directamente con el deber de conservación de documentos, informaciones y pruebas en materia tributaria.
    .caja-tema2-2.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema2/img23.svg" style="max-width: 60px").m-auto
      .col
        h3 Control de versiones en documentos tributarios
    p.mb-5 El control de versiones evita confusiones frecuentes entre borradores y documentos definitivos. En la práctica, este problema ocurre cuando se archiva un borrador como si fuera la declaración presentada o cuando se modifica el archivo de cálculo después de la presentación, afectando la trazabilidad del proceso. Por ello, una regla operativa básica consiste en que todo documento del proceso debe indicar claramente:
    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema2.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/tema4/img24.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Número o denominación de versión.
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema2.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/tema4/img25.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Fecha de elaboración o modificación.
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema2.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/tema4/img26.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Estado del documento, como borrador, revisado o presentado.
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-tema4-2(data-aos="zoom-in")
          .row.align-items-center
            .col-xl.order-2.order-lg-1
              p.mb-4 Un control funcional distingue tres tipos de documentos tributarios:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-1
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | #[b Papeles de trabajo]: Corresponden a los archivos de cálculo y conciliación.
                li.mb-1
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | #[b Documentos de soporte]: Constituyen la evidencia del hecho económico declarado.
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | #[b Documentos de trámite]: Incluyen el formulario presentado, la constancia y el comprobante de pago.
            .col-xl-auto.order-1.order-lg-2
              figure
                img(src='@/assets/curso/tema4/img27.jpg', alt='').m-auto
    p.mb-5 Los documentos de trámite deben conservarse sin modificaciones una vez realizada la presentación, garantizando la integridad de la evidencia del cumplimiento.
    .caja-tema2-2.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema2/img23.svg" style="max-width: 60px").m-auto
      .col
        h3 Custodia y evidencias: qué conservar y por qué
    p.mb-5 La custodia documental implica mantener disponibles documentos íntegros y recuperables que permitan demostrar el origen de los valores declarados y la realización del trámite tributario. El artículo 632 del Estatuto Tributario establece el deber de conservar documentos, informaciones y pruebas por un término mínimo de cinco años, contados desde el primero de enero del año siguiente a su elaboración, expedición o recibo.
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-tema4-2(data-aos="zoom-in")
          .row.align-items-center
            .col-xl.order-2.order-lg-1
              p.mb-4 En la práctica, la custodia exige conservar el expediente completo del periodo, asegurando coherencia interna entre:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-1
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Soportes documentales, como certificados, extractos, facturas o documentos equivalentes.
                li.mb-1
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Papeles de trabajo que evidencien conciliaciones y cálculos.
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Evidencias del trámite, como el formulario presentado, la constancia y el comprobante de pago.
            .col-xl-auto.order-1.order-lg-2
              figure
                img(src='@/assets/curso/tema4/img28.jpg', alt='').m-auto
    p.mb-5 Cuando estos elementos se almacenan de forma dispersa, la respuesta a requerimientos puede resultar lenta o inconsistente.
    .bg-1
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 9.
              span Evidencias mínimas por etapa del proceso tributario
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Etapa
                    th.ajuste-border-tabla.texto-left Evidencia mínima
                    th.texto-left Ubicación sugerida en el expediente
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left Alistamiento
                    td.ajuste-border-tabla.texto-left Parámetros del año, clasificación del contribuyente y lista de chequeo inicial.
                    td.texto-left 01_Parámetros / 02_Control
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Cálculo
                    td.ajuste-border-tabla.texto-left Archivo final de cálculo, conciliaciones de ingresos y retenciones, tablero de validación.
                    td.texto-left 03_Cálculo / 02_Control
                  tr
                    td.ajuste-border-tabla.texto-left Diligenciamiento
                    td.ajuste-border-tabla.texto-left Borrador revisado y verificación de coherencia entre cálculo y formulario.
                    td.texto-left 04_Borradores
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Presentación
                    td.ajuste-border-tabla.texto-left Formulario presentado en PDF y constancia o acuse de recibo.
                    td.texto-left 05_Presentado
                  tr
                    td.ajuste-border-tabla.texto-left Pago
                    td.ajuste-border-tabla.texto-left Recibo y comprobante de pago cuando corresponda.
                    td.texto-left 06_Pagos
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Cierre
                    td.ajuste-border-tabla.texto-left Acta de cierre del periodo y registro del control de versiones.
                    td.texto-left 07_Cierre
        .caja-tema2-2.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/tema2/img23.svg" style="max-width: 60px").m-auto
          .col
            h3 Expediente electrónico y sostenibilidad del proceso   
        .row.justify-content-center.align-items-center.mb-5
          .col-xl
            .caja-tema1.ajuste-color-3.mb-4.mb-lg-0(data-aos="fade-right")
              p Cuando el expediente se gestiona en formato electrónico, la sostenibilidad del proceso depende no solo de conservar los archivos, sino también de su contexto documental. Esto incluye metadatos, estructura del expediente y vínculos archivísticos que permitan comprender la relación entre los documentos.
              p Las guías técnicas del Archivo General de la Nación orientan la organización de expedientes electrónicos y constituyen una referencia para estructurar sistemas documentales digitales confiables. La sostenibilidad del proceso tributario se logra cuando:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-1
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Cada cifra declarada puede recuperarse rápidamente con su soporte correspondiente.
                li.mb-1
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Un tercero puede comprender el expediente sin depender de explicaciones verbales.
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | La evidencia se mantiene organizada conforme a criterios archivísticos y de control.
          .col-xl-auto.col-md-9(data-aos="fade-left")
            figure
              img(src='@/assets/curso/tema4/img29.png', alt='').m-auto
        p.mb-5 Esta tabla permite estandarizar la conservación documental y asegurar la continuidad del proceso: 
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 10.
              span Evidencias mínimas y control de versiones del expediente tributario 
            .tabla-a(data-aos="zoom-in")
              table
                caption Nota. Marco general de gestión documental establecido en la Ley 594 de 2000, el Decreto 2609 de 2012 y las guías técnicas del Archivo General de la Nación.
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Elemento
                    th.ajuste-border-tabla.texto-left Versión mínima
                    th.ajuste-border-tabla.texto-left Ubicación de archivo
                    th.texto-left Regla de custodia
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left Papeles de trabajo
                    td.ajuste-border-tabla.texto-left Versiones borrador, revisado y final.
                    td.ajuste-border-tabla.texto-left Carpeta del periodo.
                    td.texto-left Registrar cambios.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Listas de chequeo y matrices
                    td.ajuste-border-tabla.texto-left Versión correspondiente al periodo.
                    td.ajuste-border-tabla.texto-left Carpeta de control o calidad.
                    td.texto-left Identificar responsable.
                  tr
                    td.ajuste-border-tabla.texto-left Formulario presentado
                    td.ajuste-border-tabla.texto-left Versión presentada.
                    td.ajuste-border-tabla.texto-left Carpeta de declaración presentada.
                    td.texto-left No modificar.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Constancia de presentación
                    td.ajuste-border-tabla.texto-left Evidencia del trámite.
                    td.ajuste-border-tabla.texto-left Carpeta de declaración presentada.
                    td.texto-left No modificar.
                  tr
                    td.ajuste-border-tabla.texto-left Soporte de pago
                    td.ajuste-border-tabla.texto-left Comprobante del periodo.
                    td.ajuste-border-tabla.texto-left Carpeta de pagos.
                    td.texto-left No modificar.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Informe y plan de mejora
                    td.ajuste-border-tabla.texto-left Versión aprobada.
                    td.ajuste-border-tabla.texto-left Carpeta de auditoría y mejora.
                    td.texto-left Control de versiones.
    p.mb-0 El sistema de gestión documental constituye el soporte que mantiene la trazabilidad del cumplimiento tributario en el tiempo. Permite controlar versiones, custodiar documentos críticos y recuperar información de manera eficiente ante revisiones o requerimientos. Cuando estas reglas se encuentran estandarizadas, el proceso tributario se vuelve sostenible y replicable, facilitando su integración en un esquema integral de control y mejora continua.
    Separador
    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.5 Producto integrador
    .row.justify-content-center.align-items-center.mb-5
      .col-xl
        .caja-tema1.mb-4.mb-lg-0(data-aos="fade-right")
          p.mb-0 El producto integrador reúne en un solo paquete los instrumentos que permiten que la elaboración de declaraciones se desarrolle como un proceso controlado y sostenible. Su lógica operativa articula cuatro acciones fundamentales: #[b medir el desempeño, verificar antes de presentar, sustentar con evidencia y mejorar de manera continua].
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img30.png', alt='').m-auto
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema4/img31.png', alt='').m-auto
      .col-xl
        .caja-tema1.ajuste-color-2(data-aos="fade-left")
          p.mb-0 En consecuencia, su utilidad para el contribuyente es directa. Reduce errores repetitivos, disminuye la necesidad de correcciones posteriores, mejora la oportunidad de presentación y fortalece la capacidad de respuesta ante revisiones o requerimientos, dado que cada fase deja evidencia documentada y trazable.
    p.mb-5 Este conjunto de herramientas no sustituye el cálculo ni el diligenciamiento de la declaración. Por el contrario, los respalda mediante procedimientos estandarizados que permiten responder con evidencia a cuatro preguntas recurrentes en la práctica tributaria:
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.fit___space-card(data-aos="zoom-in")
        .caja-tema4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/tema4/img32.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Cómo se confirma que la declaración se presentó oportunamente.
      .col-xl-3.col-md-9.fit___space-card(data-aos="zoom-in")
        .caja-tema4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/tema4/img32.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Cómo se garantiza que fue revisada de manera adecuada.
      .col-xl-3.col-md-9.fit___space-card(data-aos="zoom-in")
        .caja-tema4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/tema4/img32.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Cómo se sustenta la información declarada.
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .caja-tema4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/tema4/img32.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Qué acciones se implementarán para evitar fallas en periodos posteriores.
    br
    p Cuando estas respuestas quedan registradas en documentos estructurados, el proceso deja de depender de la memoria individual y adquiere carácter replicable. Además, se asegura la continuidad operativa incluso ante cambios de responsables o incrementos en el volumen de operaciones.
    p.mb-5 De esta forma, cualquier revisor puede comprender el estado del periodo, identificar verificaciones realizadas, reconocer hallazgos detectados y evaluar acciones implementadas. Esta dinámica se vincula directamente con la gestión documental tratada en el subtema anterior, ya que sin control de versiones, custodia adecuada y respaldo de evidencias, el producto integrador pierde efectividad como instrumento de control. A continuación se presenta la estructura del producto integrador y el propósito de cada uno de sus componentes.
    .bg-slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Tablero de control
                p.mb-0 Permite medir el desempeño del periodo y generar alertas frente a desviaciones. Se utiliza durante el desarrollo del periodo y al momento del cierre. Deja como evidencia indicadores, semáforos de gestión y análisis de tendencias.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema4/img33.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Lista de chequeo
                p.mb-0 Facilita verificar el cumplimiento de requisitos mínimos antes de la presentación de la declaración. Se emplea antes de firmar o presentar. Genera como evidencia un registro de verificación con observaciones y confirmaciones.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema4/img34.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Informe de auditoría
                p.mb-0 Sirve para sustentar, mediante pruebas, que el proceso y la declaración fueron objeto de revisión. Puede utilizarse antes o después de la presentación. Deja evidencia de hallazgos, pruebas recopiladas, impactos identificados y recomendaciones.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema4/img35.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Plan de mejora
                p.mb-0 Contribuye a reducir la recurrencia de fallas mediante acciones concretas y medibles. Se aplica después de la verificación o auditoría. Produce evidencia de acciones definidas, responsables asignados, fechas de ejecución y soportes de cierre.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema4/img36.png', alt='' style="max-width: 500px").m-auto
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-tema1-1.ajuste-color-1(data-aos="zoom-in")
          p.mb-0 El producto integrador constituye un mecanismo sistemático que articula control, verificación, sustento técnico y mejora continua, fortaleciendo la calidad del proceso de cumplimiento tributario.
    p.mb-5 De acuerdo con los lineamientos institucionales de redacción y organización del contenido digital educativo establecidos en la guía correspondiente, esta estructura favorece la coherencia narrativa, la trazabilidad documental y la navegabilidad pedagógica del material formativo.
    .caja-tema2-2.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema2/img23.svg" style="max-width: 60px").m-auto
      .col
        h3 Tablero de control 
    p.mb-5 El tablero de control es una hoja de seguimiento que permite monitorear, mediante indicadores simples, si el proceso tributario cumple aspectos críticos como la oportunidad de presentación, la calidad del cálculo y diligenciamiento, el nivel de correcciones posteriores y la capacidad de respuesta ante requerimientos.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-8.mb-4.mb-lg-0
        .caja-tema4-1(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/tema4/img37.jpg', alt='').m-auto
            .col-xl
              p.mb-0 Su utilidad radica en facilitar la toma de decisiones. Cuando un indicador presenta deterioro, el tablero debe conducir a acciones concretas, como reforzar conciliaciones, ajustar parámetros del periodo o exigir una revisión adicional del borrador de la declaración.
      .col-xl-4
        p.mb-0 Para asegurar su aplicación práctica, el tablero debe incorporar metas definidas y un sistema de semáforo. La meta establece el nivel aceptable de desempeño, mientras que el semáforo permite clasificar rápidamente el estado del proceso en cumplimiento, revisión o condición crítica.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        p.mb-0 El tablero se actualiza por periodo o por vencimiento y debe archivarse en el expediente como evidencia de seguimiento y gobierno del proceso tributario. Además, conviene diferenciar entre indicadores de resultado e indicadores de causa. Cuando aumentan las correcciones, se debe registrar el motivo específico —como errores de parametrización, retenciones no conciliadas o soportes insuficientes— con el fin de alimentar el plan de mejora.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img38.png', alt='').m-auto
    p.mb-5 A continuación, se presenta una plantilla de tablero de control aplicable al proceso tributario.
    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
      h5 Figura 6.
      span Tablero de control del proceso tributario
    figure(data-aos="zoom-in").mb-5
      img(src='@/assets/curso/tema4/img39.svg', alt='Formato tabla de indicadores con columnas de fórmula, meta, resultado, estado y acción inmediata para variables como oportunidad, correcciones, sanciones y requerimientos. ').m-auto
    .caja-tema2-2.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema2/img23.svg" style="max-width: 60px").m-auto
      .col
        h3 Lista de chequeo (cómo se asegura la verificación antes de presentar)
    .row.justify-content-center.align-items-center.mb-5
      .col-xl
        .caja-tema1.ajuste-color-3.mb-4.mb-lg-0(data-aos="fade-right")
          p La lista de chequeo constituye un control preventivo que obliga a verificar los requisitos mínimos antes de firmar y presentar la declaración. Su propósito es reducir omisiones y errores que generan reprocesos, tales como el uso de formularios incorrectos, la selección equivocada del periodo, la falta de conciliación de retenciones, la ausencia de anexos o las diferencias entre el papel de trabajo y el borrador. Para que cumpla su función operativa, la lista debe reunir dos condiciones esenciales:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-1
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | Ser breve y aplicable, con un máximo sugerido de doce a quince ítems por declaración.
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | Dejar evidencia verificable, identificando quién realizó la revisión, en qué fecha y qué observaciones quedaron registradas.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img40.png', alt='').m-auto
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema4/img41.jpg', alt='').m-auto
      .col-xl
        p En el contexto formativo, esta herramienta adquiere valor evaluativo, dado que permite demostrar que la verificación se ejecutó mediante un procedimiento documentado.
        p.mb-0 Se recomienda estructurar una lista base de carácter transversal y complementar, cuando sea necesario, con secciones específicas según el tipo de declaración (renta, IVA, retención en la fuente o régimen SIMPLE). De esta manera se mantiene un núcleo estable de control y se reconocen las particularidades de cada obligación tributaria.
    p.mb-5 A continuación, se presenta un modelo transversal de lista de chequeo previa a la presentación de declaraciones.
    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
      h5 Figura 7.
      span Lista de chequeo previa a presentar una declaración
    figure(data-aos="zoom-in").mb-5
      img(src='@/assets/curso/tema4/img42.svg', alt='Formato de verificación con ítems, opciones de respuesta y espacio para evidencia u observaciones sobre requisitos del periodo y del formulario. ').m-auto
    .caja-tema2-2.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema2/img23.svg" style="max-width: 60px").m-auto
      .col
        h3 Informe de auditoría
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .caja-tema1.mb-3(data-aos="fade-right")
          p.mb-0 El informe de auditoría es el documento que demuestra, con pruebas verificables, que la declaración tributaria y su proceso de elaboración fueron objeto de revisión conforme a criterios previamente definidos. Debe caracterizarse por su brevedad y solidez técnica, integrando elementos como objetivo, alcance, criterios aplicados, pruebas ejecutadas, hallazgos identificados, impactos determinados y recomendaciones formuladas.
        p.mb-0 Su valor operativo consiste en transformar revisiones dispersas en un documento único que puede ser comprendido por terceros, tales como un nuevo responsable del proceso, un auditor interno, el revisor fiscal o cualquier instancia que requiera sustentar la información declarada o atender requerimientos formales.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img43.png', alt='').m-auto
    .caja-tema4-1(data-aos="zoom-in").mb-5
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/tema4/img44.jpg', alt='').m-auto
        .col-xl
          p.mb-0 Para asegurar su carácter defendible, #[b el informe debe apoyarse en papeles de trabajo estructurados, en especial en la trazabilidad soporte–dato–casilla]. Esta relación permite identificar con precisión dónde se encuentra el soporte, cuál fue el valor calculado, en qué renglón del formulario quedó registrado y qué prueba se aplicó, por ejemplo: conciliaciones, recálculos, cruces con certificados o verificaciones del periodo. Sin este encadenamiento técnico, el informe se convierte en un documento opinativo y pierde utilidad como evidencia.
    p.mb-5 Adicionalmente, es recomendable clasificar los hallazgos según su impacto, diferenciando entre aquellos que afectan el impuesto o el saldo, los de naturaleza formal o documental y las desviaciones frente a procedimientos internos. Esta clasificación contribuye a priorizar acciones correctivas y evita asignar la misma urgencia a situaciones de naturaleza distinta.
    .caja-tema2-2.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema2/img23.svg" style="max-width: 60px").m-auto
      .col
        h3 Plan de mejora
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .caja-tema1.mb-3(data-aos="fade-right")
          p.mb-0 El plan de mejora constituye el instrumento que transforma los hallazgos identificados en acciones medibles y verificables. Su finalidad es prevenir la repetición de problemas en periodos posteriores mediante la intervención de la causa raíz y no únicamente del síntoma operativo.
        p Por ejemplo, si se detecta la omisión de retenciones, la acción correctiva no debe limitarse a ajustar el valor omitido. Resulta necesario implementar controles estructurales, como una conciliación obligatoria por agente retenedor antes de la presentación de la declaración y su correspondiente registro como evidencia del proceso. Para garantizar su efectividad, cada acción debe incluir los siguientes elementos mínimos:
        ul.fa-ul.estilo___ul.mb-0
          li.mb-1
            span.fa-li
              i.fas.fa-arrow-alt-circle-right
            | Responsable de ejecución.
          li.mb-1
            span.fa-li
              i.fas.fa-arrow-alt-circle-right
            | Fecha de cumplimiento.
          li.mb-1
            span.fa-li
              i.fas.fa-arrow-alt-circle-right
            | Evidencia de cierre.
          li.mb-0
            span.fa-li
              i.fas.fa-arrow-alt-circle-right
            | Criterio de verificación.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img45.jpg', alt='').m-auto
    p.mb-5 Cuando estos componentes no se definen, el plan pierde su capacidad de seguimiento y se convierte en una relación de propósitos sin control operativo. Por esta razón, se recomienda redactar las acciones bajo esquemas como la metodología 5W2H (qué, por qué, quién, cuándo, dónde, cómo y cuánto), o al menos conservar la estructura básica acción–responsable–fecha–evidencia.
    .caja-tema2-2.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema2/img23.svg" style="max-width: 60px").m-auto
      .col
        h3 Integración y entrega del producto integrador 
    p.mb-5 Para que el producto integrador cumpla su función práctica, debe consolidarse como un paquete único por periodo e impuesto, con control de versiones y ubicación definida dentro del expediente tributario. Una estructura recomendada comprende los siguientes componentes organizados secuencialmente:
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-tema4-2(data-aos="zoom-in").mb-3
          .row.align-items-center
            .col-xl.order-2.order-lg-1
              ol.lista-ol--cuadro.mb-0
                li
                  .lista-ol--cuadro__vineta
                    span 1
                  | Tablero.
                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  | Lista de chequeo.
                li 
                  .lista-ol--cuadro__vineta
                    span 3
                  | Auditoria.
                li 
                  .lista-ol--cuadro__vineta
                    span 4
                  | PlanMejora.
                li 
                  .lista-ol--cuadro__vineta
                    span 5
                  | Anexos técnicos, como matrices y conciliaciones.
            .col-xl-auto.order-1.order-lg-2
              figure
                img(src='@/assets/curso/tema4/img46.jpg', alt='').m-auto
        .caja-tema1(data-aos="fade-right")
          p.mb-0 Esta organización facilita la entrega integral de la información ante revisiones, evitando reconstrucciones posteriores del proceso.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        p Asimismo, se recomienda identificar formalmente al responsable del producto integrador mediante registro de nombre, rol y fecha, y archivar el paquete junto con las evidencias del trámite, tales como el formulario presentado en formato PDF, la constancia de presentación y el soporte de pago cuando corresponda. De este modo, el expediente no solo contiene el resultado del cumplimiento, sino también la evidencia de control, revisión y mejora.
        p.mb-0 La integración de estos instrumentos permite cerrar el ciclo de mejora continua. El tablero de control y el informe de auditoría alimentan el plan de mejora; este plan ajusta la lista de chequeo y los controles operativos; y dichos ajustes impactan positivamente los indicadores del siguiente periodo. A continuación se presenta la forma  para el control de entrega del paquete integrador por periodo.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img47.png', alt='').m-auto
    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
      h5 Figura 8.
      span  Paquete integrador del periodo 
    figure(data-aos="zoom-in").mb-5
      img(src='@/assets/curso/tema4/img48.svg', alt='Formato tabla de control de entrega que relaciona elementos como tablero, lista de chequeo, informe de auditoría, plan de mejora y evidencias con versión, ubicación, responsable y fecha.').m-auto
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        p Con lo desarrollado en este subtema, el producto integrador se consolida como evidencia práctica del gobierno del proceso tributario. Permite medir el desempeño mediante indicadores, verificar condiciones mínimas antes de presentar, sustentar técnicamente la revisión realizada y reducir la recurrencia de errores mediante acciones correctivas estructuradas.
        p.mb-0 Cuando estos instrumentos se elaboran de forma periódica, se versionan y se archivan junto con las evidencias de presentación y pago, el cumplimiento tributario deja de ser una actividad aislada y se configura como un proceso controlado, documentado y sostenible en el tiempo.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img49.png', alt='').m-auto
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img50.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Su aplicabilidad se evidencia en la capacidad de actuar frente a situaciones reales del contribuyente, tales como #[b efectuar correcciones oportunas, comprender las consecuencias de errores o extemporaneidad, sustentar la información con trazabilidad y responder ante procesos de devolución, compensación o requerimientos administrativos].
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .caja-tema1.mb-3(data-aos="fade-right")
          p.mb-0 La auditoría tributaria aplicada posibilita documentar hallazgos con evidencia verificable, cuantificar impactos y convertirlos en acciones correctivas medibles, lo cual contribuye a disminuir la recurrencia de fallas y a fortalecer la defensa técnica del contribuyente en eventuales procesos de revisión.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img51.png', alt='').m-auto
    .caja-tema4-1(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/tema4/img52.jpg', alt='').m-auto
        .col-xl
          p.mb-0 Finalmente, la integración de indicadores, herramientas de mejora, protocolos institucionales y gestión documental permite que el proceso tributario sea gobernable y replicable en cada periodo. De esta manera, cualquier responsable puede continuar su ejecución con claridad metodológica, control de versiones y evidencia completa, consolidando un enfoque preventivo y sostenible orientado a reducir riesgos fiscales, evitar costos por no calidad y asegurar declaraciones oportunas, coherentes y sustentable.
</template>

<script>
export default {
  name: 'Tema4',
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
