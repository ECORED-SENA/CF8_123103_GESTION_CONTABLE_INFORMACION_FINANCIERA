<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1(data-aos="zoom-in") Activos mantenidos para la venta

    .row.bg-t1-1.a-m
      .col-12
        .p-5
          .row.align-items-center
            .col-lg-8
              .row.p-4.bg-t1-2(data-aos="fade-left")
                p Los activos no corrientes mantenidos para la venta serán clasificados por la entidad si su importe en libros se recuperará fundamentalmente a través de una transacción de venta, a diferencia de activos que tienen uso continuo, los cuales tienen otra finalidad. 

                p Para efectuar la clasificación anterior, el activo debe estar a disposición y en condiciones actuales para su venta inmediata, sujeto a los términos usuales y habituales para la venta y negociado razonablemente; este debe ser vendido en menos de un año.
            .col-lg-4.d-none.d-lg-block
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/img1.png', alt='', style="width: 295px").m-auto

          separador
          #t_3_1.titulo-segundo.color-acento-contenido
            h2 3.1 Política contable

          .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema3/img2.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 La política contable de cualquier activo establece las características de reconocimiento, medición inicial y posterior, presentación y revelación de la información contable y financiera de los activos que posee la entidad al cierre del periodo contable. Además, debe cumplir los requerimientos para ser clasificación; según la NIIF 5 “Activos no corrientes mantenidos para la venta”. Se debe reconocer si el valor de esos activos se recupera por medio de ventas y no por uso de este. Igualmente, se debe determinar el criterio de medición establecido en la norma.

    separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.2 Reconocimiento, medición, presentación y revelación

    .row.bg-t1-12.p-4
      p #[b Reconocimiento:] los activos fijos disponibles para la venta se reconocen en el momento de su clasificación, después de haber cumplido con los requisitos del literal 8 de la NIIF 5, y su valor contable se recuperará, a través de la venta.

      p Los activos que se encuentran mantenidos para la venta NO serán objeto de depreciación, mientras el mismo esté clasificado con esas características.

    .row.bg-t1-12.p-5.mt-4
      p #[b Medición:]  una entidad medirá sus activos no corrientes mantenidos para la venta, al menor valor entre su valor en libros y su valor razonable, menos los gastos para ser vendidos. Es decir, se debe reclasificar al menor valor; además, los activos se deben presentar de manera separada en los estados financieros. Por último, es importante conocer que en este tipo de activos el valor se recupera con la venta y no con su uso.

      .row.justify-content-center.bg-t1-15.p-5.align-items-center
            
        p.mt-4 #[b Ejemplo:]

        p Se compra una casa por valor de $100.000.000, para venderla posteriormente

        .col-lg-7
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 25. 
            span Medición inicial del activo adquirido como inversión

          .table-responsive
            table.table.table-bordered
              tbody
                tr
                  td.text-center(style="background-color: #F8D7B0 !important") #[b Código]
                  td.text-center(style="background-color: #F8D7B0 !important") #[b Cuenta]
                  td.text-center(style="background-color: #F8D7B0 !important") #[b Débito]
                  td.text-center(style="background-color: #F8D7B0 !important") #[b Crédito]
                tr
                  td 151601
                  td Casa para venta
                  td.text-end $100.000.000 
                  td.text-end $0
                tr
                  td.bg-t1-8 233505
                  td.bg-t1-8 Costos y gastos por pagar
                  td.bg-t1-8.text-end $0
                  td.bg-t1-8.text-end $100.000.000
        .col-lg-4.d-none.d-lg-block
          figure(data-aos="fade-left")
            img(src='@/assets/curso/tema3/img3.png', alt='', style="width: 190px")

    .row.bg-t1-12.p-5.mt-4
      p #[b Operaciones discontinuadas.] Son flujos u operaciones que se pueden distinguir claramente de otros flujos u operaciones, si estos se clasifican como mantenidos para la venta y se manejan como operaciones discontinuadas, es decir, aquellos activos de la entidad que han sido clasificados como mantenidos para la venta.

      .row.justify-content-center.bg-t1-15.p-5.align-items-center

        .col-lg-8     
          p.mt-4 #[b Ejemplo:]

          p Se tiene un número de tiendas de ropa, pero se decide cerrar una de ellas, todos los activos que están relacionados con esa tienda los podemos clasificar como mantenidos para la venta y los flujos de efectivo y operaciones que sigan teniendo esa tienda se continúan manejando como operaciones discontinuadas.

          p Se catalogan operaciones discontinuadas porque, se espera que en el corto plazo ya no se siguen presentando.

        .col-lg-4.d-none.d-lg-block
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/tema3/img4.png', alt='', style="width: 295px")

    .row.bg-t1-12.p-5.mt-4
      p #[b Información a revelar.] Una entidad presentará y revelará información que permita a los usuarios de los estados financieros evaluar los efectos financieros de las operaciones discontinuadas y las disposiciones de los activos no corrientes. (CTCP, 2016b)

      p Igualmente, una empresa presentará en sus estados de situación financiera un activo no corriente de manera separada como mantenidos para la venta, al igual que los pasivos involucrados por este concepto. 

      p Además, la empresa revelará el resultado después de impuestos de las operaciones discontinuadas, las ganancias o pérdidas derivadas de la diferencia entre el valor razonable menos costos de ventas, suministrando una descripción de la venta ocurrida. 

      p Consulte la Norma Internacional de Contabilidad número cinco, activos mantenidos para la venta.

    .tarjeta.bg-t1-11.p-4.mt-4
      .row.justify-content-around.align-items-center
        .col-auto
          img(src="@/assets/curso/tema1/img7.svg", style="width: 72px")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1(style="color: #FD9826 !important") Norma Internacional de Contabilidad número cinco
              p.text-small.mb-0.text-white activos mantenidos para la venta.

            .col-sm-auto
              a.boton.color-acento-botones(href="downloads/anexos/Anexo_5_Norma_NIIF_5.pdf" target="_blank")
                span.text-black Descargar
                i.fas.fa-file-download.text-black

      

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
