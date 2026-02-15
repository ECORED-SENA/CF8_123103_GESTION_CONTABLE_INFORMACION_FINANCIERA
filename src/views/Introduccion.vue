<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1(data-aos="zoom-in") Introducción

    .row.bg-intro1
      .col-12
        .p-5
          p El presente componente aborda el concepto, importancia, clasificación, normativa y tratamiento contable de la propiedad, planta y equipo, un rubro importante dentro de los elementos que conforman los estados financieros. A continuación, encontrará el desarrollo de cada uno de los temas para mayor comprensión.

          .row.justify-content-center.mt-4 
            .col-lg-8
              p.p-4.bg-intro2(data-aos="fade-left") #[b Nota aclaratoria:] las tablas que se toman como referencia en los ejemplos de cada uno de los temas desarrollados, elaboradas mediante el programa Excel son derivadas de estos ejercicios, la elaboración es propia del autor del presente componente, por lo tanto, no se numeran y no se establece un nombre específico.
            .col-lg-4.d-none.d-lg-block
              figure(data-aos="fade-up")
                img(src='@/assets/curso/intro/img1.png', alt='', style="width: 480px").m-auto
            


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
