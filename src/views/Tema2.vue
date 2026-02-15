<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1(data-aos="zoom-in") Propiedades de inversión 

    .row.align-items-center
      .col-lg-8
        p.p-4.bg-t1-2(data-aos="zoom-in") Son activos de los cuales se espera obtener rendimientos a futuro, generando ingresos no operacionales para la empresa, como son el arriendo de los terrenos, edificios, casas, locales, entre otros. De estos, se obtiene una contraprestación en dinero que incrementa la economía de los propietarios; además, el terreno se valoriza. Por ende, a largo plazo, se obtiene una utilidad cuando el activo es vendido. Por esto, la importancia que revisten las inversiones, no solo en las empresas, sino también, en las personas naturales, que para muchos es su actividad diaria igualmente, algunas personas piensan que invertir es un riesgo, aunque en realidad es una oportunidad para crecer financieramente. 
      .col-lg-4.d-none.d-lg-block
        figure(data-aos="fade-up")
          img(src='@/assets/curso/tema2/img1.png', alt='', style="width: 295px").m-auto

    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1. Política contable

    .row.bg-t1-1
      .col-12
        .p-5
          .row.align-items-center
            .col-lg-8
              p Las políticas contables deben ser coherentes, claras y legibles; por ello, se debe tener en cuenta la Norma Internacional de Contabilidad (NIC) 8 para NIIF plenas y Norma NIIF para Pymes en la sección 10 “Políticas, Estimaciones Y Errores Contables” de acuerdo con el tipo de empresa y grupo de presentación de información financiera.

              p Para la elaboración de las políticas contables de las propiedades de inversión es importante tener en cuenta los criterios de reconocimiento, medición, presentación y revelación, establecidos en la Norma Internacional de Contabilidad (NIC) 40.
            .col-lg-4
              figure(data-aos="fade-up")
                img(src='@/assets/curso/tema2/img2.png', alt='', style="width: 295px").m-auto

          .row.align-items-center
            .col-lg-4.d-none.d-lg-block
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/img3.png', alt='', style="width: 400px").m-auto

            .col-lg-8
              p.p-4.bg-t1-10(data-aos="fade-left") La medición inicial se realiza aplicando el modelo del costo y en la medición posterior se efectúa a valor razonable, con cambios en el resultado, que afectan la utilidad del ejercicio. Sin embargo, en las propiedades de inversión se puede establecer en la política contable el criterio de medición al costo en casos específicos donde sea imposible medir a valor razonable. Es importante hacer referencia a que la norma solicita que todas las entidades midan a valor razonable, sin embargo, esto no es una obligación, pero sí se debe tener presente el mejor criterio que beneficie a la entidad. Por último, se debe tener en cuenta que, al momento de vender una propiedad de inversión, se reconoce a valor razonable, sin importar el criterio de medición establecido para la empresa.

          .tarjeta.bg-t1-11.p-4.mt-4
            .row.justify-content-around.align-items-center
              .col-auto
                img(src="@/assets/curso/tema1/img7.svg", style="width: 72px")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4.mb-1(style="color: #FD9826 !important") Deterioro de propiedad de inversión 
                    p.mb-0.text-white El deterioro de valor de una propiedad de inversión hace referencia a la pérdida de dinero que puede presentar el bien por eventos imprevistos, disminuyendo el valor de este en la contabilidad.

                  .col-sm-auto
                    a.boton.color-acento-botones(href="downloads/anexos/Anexo_3_Deterioro_PPI.pdf" target="_blank")
                      span.text-black Descargar
                      i.fas.fa-file-download.text-black

          p.mt-4 #[b Ejemplo:]

          .row.justify-content-center.bg-t1-10.p-5
            p La empresa X adquiere un local para inversión por valor de $50.000.000, el 10 % corresponde a terrenos, y el resto es construcción, se estima un desmantelamiento de $5.000.000 a una tasa del 6 % E.A. al finalizar su vida útil de 20 años.

            p #[b Medición inicial] 

            .col-lg-6
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 19. 
                span Reconocimiento del activo: construcción, terreno y desmantelamiento

              .table-responsive
                table.table.table-bordered
                  tbody
                    tr
                      td.text-center(style="background-color: #F8D7B0 !important") #[b Concepto]
                      td.text-center(style="background-color: #F8D7B0 !important") #[b Valor]
                    tr
                      td Construcción
                      td.text-end $45.000.000
                    tr
                      td.bg-t1-8 Terreno
                      td.bg-t1-8.text-end $5.000.000

              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 20. 
                span Costo estimado de desmantelamiento

              .table-responsive
                table.table.table-bordered
                  tbody
                    tr
                      td.text-center(style="background-color: #F8D7B0 !important") #[b Cálculo]
                      td.text-center(style="background-color: #F8D7B0 !important") #[b Valor]
                    tr
                      td VP = VF / (1 + i)^n
                      td.text-end $1.559.024


            .col-lg-6
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 21. 
                span Medición inicial del activo adquirido

              .table-responsive
                table.table.table-bordered
                  tbody
                    tr
                      td.text-center(style="background-color: #F8D7B0 !important") #[b Código ]
                      td.text-center(style="background-color: #F8D7B0 !important") #[b Cuenta ]
                      td.text-center(style="background-color: #F8D7B0 !important") #[b Debe ]
                      td.text-center(style="background-color: #F8D7B0 !important") #[b Crédito ]
                    tr
                      td.text-center 150405
                      td.text-start Terrenos urbanos
                      td.text-end $5.000.000 
                      td.text-end -
                    tr
                      td.bg-t1-8.text-center 151610
                      td.bg-t1-8.text-start Bodega
                      td.bg-t1-8.text-end  $46.559.024
                      td.bg-t1-8.text-end -
                    tr
                      td.text-center 233505
                      td.text-start Costos y gastos por pagar
                      td.text-end -
                      td.text-end $50.000.000

          p.mt-4 Pasado un año la bodega sufre un deterioro por inseguridad en el sector y pierde valor por $5.000.000. Se solicita realizar la medición posterior del activo. 

          .row.justify-content-center
            .col-lg-10.mt-4
              .row.justify-content-center
                .col-lg-12(data-aos="fade-down")
                  .row.d-flex.align-items-stretch.bg-t1-3
                    .col-xl.p-4
                      .p-4.w-100.align-items-center
                        p.mb-0 Valor inicial de la bodega        $46.559.024
                        p.mb-0 Depreciación anual                   $2.327.951
                        p.mb-0 Deterioro:                                    $5.000.000
                        p Valor actual:                               $39.321.073
                        
                        p.mb-0 159901 deterioro bodega       $5.000.000
                        p.mb-0 519801 deterioro                      $5.000.000 

                    .col-xl-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                      figure.m-0.p-0.w-100.h-100.d-flex
                        img(src='@/assets/curso/tema2/img4.png', alt='', class="w-100 h-100 object-fit-cover")

    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2. Reconocimiento, medición, presentación y revelación  

    p.p-4.bg-t1-12 #[b Reconocimiento:] la propiedad de inversión se reconoce cuando genere beneficios económicos en el futuro y el costo de esa propiedad de inversión sea confiable. Cabe resaltar, que los costos adicionales en que se incurran son reconocidos como mayor valor del bien, excepto los mantenimientos de estas propiedades que no son reconocidos en el activo, sino en el gasto.

    .p-2
      .row.p-4.bg-t1-12.justify-content-center
        p #[b Medición inicial:] las propiedades de inversión se miden al costo, teniendo en cuenta los valores adicionales como mayor valor del bien, entre los que se pueden encontrar: comisiones, impuestos y demás costos en los que se incurra para poder adquirir el activo.

        .row.justify-content-center.bg-t1-10.p-5
          
          p.mt-4 #[b Ejemplo:]

          p La empresa X adquiere un local para inversión por valor de $50.000.000, el 10 % corresponde a terrenos, y el resto es construcción, tener en cuenta los criterios de medición.

          .col-lg-6
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Tabla 22. 
              span Reconocimiento del activo: construcción, terreno y desmantelamiento

            .table-responsive
              table.table.table-bordered
                tbody
                  tr
                    td.text-center(style="background-color: #F8D7B0 !important") #[b Concepto]
                    td.text-center(style="background-color: #F8D7B0 !important") #[b Valor]
                  tr
                    td Construcción
                    td.text-end $45.000.000
                  tr
                    td.bg-t1-8 Terreno
                    td.bg-t1-8.text-end $5.000.000

            .titulo-sexto.color-acento-contenido.mb-3.mt-4
              h5 Tabla 23. 
              span Costo estimado de desmantelamiento

            .table-responsive
              table.table.table-bordered
                tbody
                  tr
                    td.text-center(style="background-color: #F8D7B0 !important") #[b Cálculo]
                    td.text-center(style="background-color: #F8D7B0 !important") #[b Valor]
                  tr
                    td VP = VF / (1 + i)^n
                    td.text-end $1.559.024

          .col-lg-6
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Tabla 24. 
              span Medición inicial del activo adquirido

            .table-responsive
              table.table.table-bordered.bg-t1-6
                tbody
                  tr
                    td.bg-t1-7.text-center #[b Código]
                    td.bg-t1-7.text-center  #[b Cuenta ]
                    td.bg-t1-7.text-center  #[b Debe ]
                    td.bg-t1-7.text-center  #[b Haber ]
                  tr
                    td 150405
                    td Terrenos inversión
                    td.text-end $5.000.000 
                    td.text-end -
                  tr
                    td.bg-t1-8 151601
                    td.bg-t1-8 Bodega de inversión
                    td.bg-t1-8.text-end $45.000.000
                    td.bg-t1-8.text-end $78.750 
                  tr
                    td 233505
                    td Costos y gastos por pagar  
                    td.text-end -
                    td.text-end $50.000.000 

    p.mt-4.p-4.bg-t1-12 #[b Medición posterior:] las empresas pueden medir al costo o valor razonable las propiedades de inversión, pero debe estar debidamente explícito en la política contable. Sin embargo, aunque la norma no obliga a que debe ser a valor razonable se enfoca en este tipo de criterio de medición, independientemente, si se tiene experiencia con la propiedad de inversión o si es nuevo para la empresa.

    p.p-4.bg-t1-12 #[b Presentación y revelación:] la propiedad de inversión se presenta y se revela teniendo en cuenta el criterio de medición inicialmente estipulados en la política contable. Si es a valor razonable, se debe tener en cuenta que al cierre del periodo se debe hacer el ajuste de acuerdo con el valor del mercado, así mismo, se debe revelar los ingresos obtenidos y los gastos incurridos en esa inversión.

    p Consulte la Norma Internacional de Contabilidad número cuarenta, propiedad de inversión.

    .tarjeta.bg-t1-11.p-4.mt-4
      .row.justify-content-around.align-items-center
        .col-auto
          img(src="@/assets/curso/tema1/img7.svg", style="width: 72px")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1(style="color: #FD9826 !important") Norma Internacional de Contabilidad número cuarenta
              p.text-small.mb-0.text-white propiedad de inversión.

            .col-sm-auto
              a.boton.color-acento-botones(href="downloads/anexos/Anexo_4_Norma _NIC_40_prop_inver.pdf" target="_blank")
                span.text-black Descargar
                i.fas.fa-file-download.text-black


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
