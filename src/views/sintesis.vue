<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p A continuación, se presenta una síntesis de la temática estudiada en el componente formativo.
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Esta síntesis desarrolla el aseguramiento, control, auditoría y mejora continua del proceso tributario para elaborar declaraciones conforme a la guía técnica y la normativa fiscal, fortaleciendo la calidad del dato (exactitud, completitud y consistencia), la trazabilidad soporte–dato–casilla y la gestión de riesgos en el ciclo calcular–diligenciar–presentar–pagar–archivar. Integra el marco normativo para correcciones, sanciones, devoluciones, compensaciones y atención de requerimientos, y aplica herramientas prácticas como listas de chequeo, matrices de validación, papeles de trabajo e informes de auditoría con hallazgos, causas raíz y planes de acción. El resultado es un proceso gobernable y sostenible, respaldado por indicadores, protocolos institucionales y gestión documental, que reduce errores recurrentes y fortalece la capacidad de sustentar y defender lo declarado. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
