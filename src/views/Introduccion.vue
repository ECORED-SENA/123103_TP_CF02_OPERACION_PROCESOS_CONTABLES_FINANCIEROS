<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5 El cumplimiento tributario no se limita a calcular y presentar una declaración: su valor real está en que la información sea exacta, completa, coherente y sustentable en el tiempo. En la práctica, muchos riesgos para los contribuyentes no nacen de “no declarar”, sino de declarar con inconsistencias: diferencias entre soportes y cifras reportadas, errores de clasificación, omisiones, duplicidades, falta de evidencia o presentaciones fuera de plazo. Estos problemas se traducen en costos adicionales (correcciones, intereses, sanciones) y en pérdida de confianza en la información financiera y fiscal. Por eso, el control y la auditoría tributaria son herramientas de protección y mejora: ayudan a prevenir fallas antes de presentar, a detectar desviaciones a tiempo y a sostener la calidad del cumplimiento.
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Este componente se orienta a fortalecer la competencia “Elaborar declaraciones tributarias de acuerdo con guía técnica y normativa fiscal” desde una mirada de aseguramiento: cómo garantizar que la declaración que se elabora cumpla criterios de calidad y que el proceso esté preparado para responder ante verificaciones, requerimientos o revisiones posteriores. Para ello, se integran cuatro ejes: el control de calidad aplicado al ciclo de la declaración, el marco normativo que rige correcciones y consecuencias, la auditoría tributaria como método de verificación y documentación, y la mejora continua para reducir fallas recurrentes mediante indicadores, formatos y protocolos.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl
        .caja-intro.mb-4.mb-lg-0(data-aos="fade-right")
          p.mb-0 La relevancia de estos temas se refleja en la cotidianidad de personas y organizaciones: un trabajador independiente que no valida sus retenciones, una empresa que no concilia IVA, un contribuyente que aplica un tope mal parametrizado o un responsable que no conserva evidencias puede enfrentar ajustes posteriores. En cambio, cuando existen listas de chequeo, matrices de validación, papeles de trabajo y seguimiento de indicadores, el proceso se vuelve más seguro, repetible y eficiente, disminuyendo la probabilidad de errores y mejorando la oportunidad del cumplimiento.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/intro/img2.svg', alt='').m-auto
    .row.justify-content-center.align-items-center.mb-0
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/intro/img3.svg', alt='').m-auto
      .col-xl
        .caja-intro-1(data-aos="fade-left")
          p.mb-0 Al finalizar, se espera que el aprendiz pueda implementar controles prácticos para revisar declaraciones antes de presentarlas, documentar hallazgos y acciones correctivas cuando corresponda, y proponer mejoras al proceso mediante herramientas simples (#[i checklists], matrices, tableros e indicadores). El propósito es que la elaboración de declaraciones no dependa de la memoria o del ensayo, sino de un proceso controlado y verificable, alineado con la normativa fiscal y con la guía técnica aplicable.
</template>

<script>
export default {
  name: 'Introduccion',
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
