<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1(data-aos="zoom-in") Propiedad, planta y equipo

    .row.bg-t1-1
      .col-12
        .p-5
          .row.justify-content-center.align-items-center
            .col-lg-8
              p.p-4.bg-t1-2(data-aos="fade-left") La propiedad, planta y equipo son bienes que poseen las empresas para su uso diario y con los cuales cuentan para realizar las actividades correspondientes al objeto social. Por otro lado, es importante hacer referencia a las políticas contables de la empresa, que son los procedimientos o reglas a tener en cuenta por cada criterio generado, en este caso el reconocimiento, medición, presentación y revelación de propiedad, planta y equipo. 
            .col-lg-4.d-none.d-lg-block 
              figure(data-aos="fade-up")
                img(src='@/assets/curso/tema1/img1.png', alt='', style="width: 406px").m-auto


          .titulo-tres.mt-4: h3 Trámites legales para ejercer el comercio

          p.mt-4 La propiedad, planta y equipo son activos que tienen apariencia física, los cuales se adquieren para el desarrollo del objeto social o actividad de esta. La propiedad, planta y equipo posee las siguientes características:

          .row.justify-content-center.align-items-center
            .col-lg-7
              ul.lista-ul--color.p-4.bg-t1-3
                li.d-flex
                  i.bg-icon-ul
                  p.mb-0.ms-2 Son bienes tangibles.

                li.d-flex
                  i.bg-icon-ul
                  p.mb-0.ms-2 No están para la venta en condiciones normales.

                li.d-flex
                  i.bg-icon-ul
                  p.mb-0.ms-2 Son clasificados como activos no corriente o de largo plazo.

                li.d-flex
                  i.bg-icon-ul
                  p.mb-0.ms-2 Generan beneficios económicos a futuro para la empresa. 

                li.d-flex
                  i.bg-icon-ul
                  p.mb-0.ms-2 De acuerdo con la generación de flujos de caja, se clasifica en: propiedad, planta y equipo (NIC 16), propiedades de inversión (NIC 40) y activos fijos para la venta (NIIF 5).

            .col-lg-5.d-none.d-lg-block 
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/img2.png', alt='', style="width: 500px").m-auto

          p.mt-4 La propiedad, planta y equipo cumple una función muy importante dentro de las empresas, debido a que sin estos activos fijos no se pueden ejecutar las funciones correspondientes de acuerdo con el objeto social, puesto que son activos tangibles que tiene una entidad para su uso en la producción o en la comercialización de bienes y prestación de servicios, para arrendarlos a terceros o para propósitos administrativos; y, por ende, se utiliza más de un periodo.

    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1  Política contable PPYE

    p La propiedad, planta y equipo (PPYE) se reconoce por su costo inicial, el cual incluye todos los desembolsos necesarios para poner el activo en condiciones de uso. Posteriormente, se mide al costo menos la depreciación acumulada y cualquier pérdida por deterioro. La depreciación se calcula de forma sistemática según la vida útil estimada de cada activo. Estos se dan de baja del balance cuando se venden, reemplazan o dejan de generar beneficios económicos.

    .video.mb-5.mt-4
      iframe(width="560" height="315" src="https://www.youtube.com/embed/UKfzqh6BdCw?si=cSrFu-Yj663X-3zS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Compra de propiedad, planta y equipo en moneda local y moneda extranjera

    .row.bg-t1-1.a-m
      .col-12
        .p-5
          .row.justify-content-center.align-items-center
            .col-lg-8
              p.p-4.bg-t1-2(data-aos="fade-left") Al momento de adquirir un activo de propiedad, planta y equipo, se debe determinar el criterio de medición que se implementará de acuerdo con la política inicialmente planteada. Según la NIC 16, hace referencia al modelo del costo, lo que cuesta comprar el activo (máquina, equipo de oficina, computadores, bienes inmuebles, entre otros), más los costos asociados e impuestos no recuperables para poner en funcionamiento el activo. Igualmente, es importante revisar la clasificación de la propiedad, planta y equipo según los años de vida útil establecidos en Colombia en la norma fiscal. 

            .col-lg-4.d-none.d-lg-block 
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/img3.png', alt='', style="width: 406px").m-auto

          p.mt-4 Por ende, es indispensable hacer referencia a la ley 1819 del 2016, en la cual se modifica el artículo 137 del Estatuto Tributario, en el cual se establece lo siguiente:

          .row.justify-content-center.mt-4
            .col-lg-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 1.
                span Tasas de depreciación fiscal anual por tipo de bien  
              
              .table-responsive
                table.table-bordered
                  thead
                    tr(style="background-color: #FED6A8")
                      th Conceptos de bienes a depreciar
                      th Tasa de depreciación fiscal anual %
                  tbody
                    tr(style="background-color: #FFF")
                      td.text-start Construcciones y edificaciones
                      td 2.22 %
                    tr(style="background-color: #F6F6F6")
                      td.text-start Acueducto, planta y redes
                      td 2.50 %
                    tr(style="background-color: #FFF")
                      td.text-start Vías de comunicación
                      td 2.50 %
                    tr(style="background-color: #F6F6F6")
                      td.text-start Flota y equipo aéreo
                      td 3.33 %
                    tr(style="background-color: #FFF")
                      td.text-start Flota y equipo férreo
                      td 5.00 %
                    tr(style="background-color: #F6F6F6")
                      td.text-start Flota y equipo fluvial
                      td 6.67 %
                    tr(style="background-color: #FFF")
                      td.text-start Armamento y equipo de vigilancia
                      td 10.00 %
                    tr(style="background-color: #F6F6F6")
                      td.text-start Equipo eléctrico
                      td 10.00 %
                    tr(style="background-color: #FFF")
                      td.text-start Flota y equipo de transporte terrestre
                      td 10.00 %
                    tr(style="background-color: #F6F6F6")
                      td.text-start Maquinaria, equipos 
                      td 10.00 %
                    tr(style="background-color: #FFF")
                      td.text-start Muebles y enseres
                      td 10.00 %
                    tr(style="background-color: #F6F6F6")
                      td.text-start Equipo médico científico
                      td 12.50 %
                    tr(style="background-color: #FFF")
                      td.text-start Envases, empaques y herramientas
                      td 20.00 %
                    tr(style="background-color: #F6F6F6")
                      td.text-start Equipo de computación
                      td 20.00 %
                    tr(style="background-color: #FFF")
                      td.text-start  Redes de procesamiento de datos
                      td 20.00 %
                    tr(style="background-color: #F6F6F6")
                      td.text-start Equipo de comunicación
                      td 20.00 %
          
    .titulo-tres: h3 Tributario E. (2016) art. 137 Limitación a la deducción, Estatuto Tributario Nacional
    
    p Sin embargo, según la norma internacional y la política contable definida por cada entidad, los años de vida útil los establece la empresa, así mismo, el valor residual, que es el valor recuperable una vez que se haya depreciado totalmente el activo.

    p #[b Por lo tanto, para ilustrar un poco la compra de propiedad, planta y equipo se presenta el siguiente ejemplo:]

    .row.mt-4.bg-t1-4.p-4
      p La empresa ABC Ltda. responsable de IVA, compra una máquina para uso de la empresa por valor de $3.000.000 a la empresa Eléctricos S.A.S, responsable de IVA, gran contribuyente. Además, se pagan fletes por $150.000 y servicio de instalación por valor de $350.000. Los años de vida útil estipulados son de 10 años, se estima un desmantelamiento por $1.000.000 a una tasa de descuento de 9 % E.A. 

      .row
        .col-lg-5
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 2.
            span  Reconocimiento del activo de propiedad, planta y equipo

          .table-responsive
            table.table.table-bordered.bg-t1-5
              thead
                tr
                  th.text-center Concepto
                  th.text-center Valor
              tbody
                tr
                  td Maquinaria 
                  td.text-end $3.000.000
                tr
                  td.bg-t1-8 Fletes 
                  td.bg-t1-8.text-end $150.000 
                tr
                  td IVA 19 % 
                  td.text-end $598.500 
                tr
                  td.bg-t1-8 Retefuente 2,5 % 
                  td.bg-t1-8.text-end $78.750 

          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 3. 
            span Costo estimado de desmantelamiento

          .table-responsive
            table.table.table-bordered
              tbody
                tr
                  td.text-center(style="background-color: #F8D7B0 !important") #[b Cálculo ]
                  td.text-center(style="background-color: #F8D7B0 !important") #[b Valor]
                tr
                  td VP = VF / (1 + i)^n
                  td.text-end $422.411

        .col-lg-7
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 4. 
            span Medición inicial del activo

          .table-responsive
            table.table.table-bordered.bg-t1-6
              tbody
                tr
                  td.bg-t1-7.text-center #[b Código]
                  td.bg-t1-7.text-center  #[b Cuenta]
                  td.bg-t1-7.text-center  #[b Debe]
                  td.bg-t1-7.text-center  #[b Crédito]
                tr
                  td 152001
                  td Maquinaria y equipo
                  td.text-end $4.170.911
                  td.text-end -
                tr
                  td.bg-t1-8 236540 
                  td.bg-t1-8 Retefuente
                  td.bg-t1-8.text-end -
                  td.bg-t1-8.text-end $78.750 
                tr
                  td 299501
                  td Prov desmantelamiento
                  td.text-end -
                  td.text-end $422.411 
                tr
                  td.bg-t1-8 233505
                  td.bg-t1-8 Costos y gastos por pagar
                  td.bg-t1-8.text-end -
                  td.bg-t1-8.text-end $3.669.750 
          

    .row.mt-4.justify-content-center
      .col-lg-10
        p.p-4.bg-t1-9 Así mismo, se debe reconocer la propiedad, planta y equipo que se adquiera en moneda extranjera, haciendo la conversión a la moneda de presentación de los estados financieros, teniendo en cuenta la TRM (tasa representativa del mercado) en el momento en el que ocurrió el hecho económico. 

    separador
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Ajuste de la diferencia en cambio

    .row.bg-t1-1.a-m
      .col-12
        .p-5
          .row.justify-content-center.align-items-center
            .col-lg-8.p-4.bg-t1-2(data-aos="fade-left")
              p Cuando se compra una propiedad, planta y equipo en moneda extranjera, se debe tener en cuenta el criterio de medición implementado. Teniendo en cuenta que se reconoce el costo en el momento de la transacción, es allí donde se realiza la conversión a la moneda funcional.

              p Si el activo se reconoce a valor razonable, se presentaría variación de la moneda, por lo que, al cierre del periodo contable, se debe hacer el ajuste de la diferencia en cambio. Si se presenta aumento del valor de la moneda, es una valorización, y si sufre una disminución es un deterioro, el cual se presenta como un gasto en los estados financieros. 
            .col-lg-4.d-none.d-lg-block
              figure(data-aos="fade-up")
                img(src='@/assets/curso/tema1/img4.png', alt='', style="width: 480px").m-auto

          p.mt-4 #[b Ejemplo:]

          .row.justify-content-center.bg-t1-10.p-5
            p La empresa ABC Ltda., responsable de IVA, compra una máquina en el exterior para uso de la empresa por valor de USD 5.000. En la fecha de la compra, la tasa de cambio es de $3.500, pero el pago de la máquina se hace cuando se recibe en Colombia y está dispuesta para ser usada, en ese momento el valor del dólar es $3.750.

            .col-lg-6
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 5. 
                span Medición inicial de maquinaria adquirida en el exterior

              .table-responsive
                table.table.table-bordered
                  tbody
                    tr
                      td.text-center(style="background-color: #F8D7B0 !important") #[b Concepto]
                      td.text-center(style="background-color: #F8D7B0 !important") #[b Valor]
                    tr
                      td Maquinaria
                      td.text-end $17.500.000
                    tr
                      td.bg-t1-8 Acreedores del exterior
                      td.bg-t1-8.text-end $17.500.000

              p.mt-2 El valor posterior de la máquina es de $18.750.000, se reconoce la diferencia en comparación con el costo inicial.

              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 6. 
                span Reconocimiento de la diferencia en cambio

              .table-responsive
                table.table.table-bordered
                  tbody
                    tr
                      td.text-center(style="background-color: #F8D7B0 !important") #[b Concepto]
                      td.text-center(style="background-color: #F8D7B0 !important") #[b Valor]
                    tr
                      td Gastos por diferencia en cambio
                      td.text-end $1.250.000
                    tr
                      td.bg-t1-8 Acreedores del exterior
                      td.bg-t1-8.text-end $1.250.000

            .col-lg-6
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/img5.png', alt='', style="width: 480px").m-auto

    separador
    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4 Desmantelamiento, rehabilitación, componentes

    .row.bg-t1-1
      .col-12
        .p-5
          .row.justify-content-center.align-items-center
            .col-lg-8.p-4.bg-t1-2(data-aos="fade-down")
              p El desmantelamiento o retiro es una provisión que se hace al momento de la medición inicial, que es lo que cuesta soltar las piezas de una máquina, derribar un edificio o una construcción en un futuro cuando se termine su vida útil. Esto hace referencia a la rehabilitación del lugar donde se usó el activo, dejando nuevamente habilitado el espacio para construir o instalar una nueva máquina, generando un costo para la empresa, el cual debe reconocerse contablemente. En el siguiente caso se puede observar el cálculo del valor.

            .col-lg-4.d-none.d-lg-block
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/img6.png', alt='', style="width: 480px").m-auto

          p.mt-4 #[b Ejemplo:]

          .row.justify-content-center.bg-t1-10.p-5
            p La empresa ABC SAS adquiere una oficina por valor de $50.000.000, el 10 % corresponde a terrenos, y el resto es construcción, se estima un desmantelamiento de $5.000.000 a una tasa del 6 % E.A. al finalizar su vida útil de 20 años.

            .col-lg-6
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 7. 
                span Reconocimiento del activo: construcción y terreno

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
                      td.bg-t1-8.text-end  $5.000.000

              p.mt-2 El valor posterior de la máquina es de $18.750.000, se reconoce la diferencia en comparación con el costo inicial

              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 8. 
                span Costo estimado de desmantelamiento

              .table-responsive
                table.table.table-bordered
                  tbody
                    tr
                      td.text-center(style="background-color: #F8D7B0 !important") #[b Cálculo]
                      td.text-center(style="background-color: #F8D7B0 !important") #[b Valor]
                    tr
                      td VP = VF / (1 + i)^n
                      td.text-end  $1.250.000
                    tr
                      td.bg-t1-8 Acreedores del exterior
                      td.bg-t1-8.text-end  $1.559.024

            .col-lg-6
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 9. 
                span Medición inicial del activo adquirido

              .table-responsive
                table.table.table-bordered.bg-t1-6
                  colgroup
                    col(style='width: 20%')
                    col(style='width: 30%')
                    col(style='width: 25%')
                    col(style='width: 25%')
                  tbody
                    tr
                      td.bg-t1-7.text-center #[b Código]
                      td.bg-t1-7.text-center  #[b Cuenta ]
                      td.bg-t1-7.text-center  #[b Debe ]
                      td.bg-t1-7.text-center  #[b Valor ]
                    tr
                      td 150405
                      td Terrenos urbanos
                      td.text-end  $5.000.000 
                      td.text-end -
                    tr
                      td.bg-t1-8 151610
                      td.bg-t1-8 Oficina
                      td.bg-t1-8.text-end  $46.559.024
                      td.bg-t1-8.text-end - 
                    tr
                      td 299501
                      td Prov desmantelamiento
                      td.text-end -
                      td.text-end  $$1.559.024 
                    tr
                      td.bg-t1-8 233505
                      td.bg-t1-8 Costos y gastos por pagar
                      td.bg-t1-8.text-end -
                      td.bg-t1-8.text-end  $50.000.000 

    .row.mt4
      p La depreciación es un concepto muy importante a tener en cuenta dentro del reconocimiento y medición de la propiedad, planta y equipo, que es la pérdida de valor que sufre un bien por su uso. Por ende, cada activo debe tener estipulado sus años de vida útil. Sin embargo, puede ocurrir también el deterioro (pérdida) por un factor externo, por ejemplo: un accidente de un vehículo, daños de vías donde esté ubicado el bien inmueble.

      p #[b A continuación, se desarrolla la depreciación anual del ejemplo anterior:]

    .row.mt-4.justify-content-center
      .col-8
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 10. 
          span Cálculo de depreciación lineal para un activo con vida útil de 20 años

        .table-responsive
          table.table.table-bordered.bg-t1-6
            tbody
              tr
                td.bg-t1-7.text-center #[b Periodo]
                td.bg-t1-7.text-center #[b Depreciación]
                td.bg-t1-7.text-center #[b Depreciación acumulada]
                td.bg-t1-7.text-center #[b Saldo]
              tr
                td.text-center  0
                td.text-end  -
                td.text-end  -
                td.text-end $46.559.024
              tr
                td.bg-t1-8.text-center  1
                td.text-end.bg-t1-8  $2.327.951
                td.text-end.bg-t1-8  $2.327.951
                td.text-end.bg-t1-8 $44.231.072
              tr
                td.text-center  2
                td.text-end  $2.327.951
                td.text-end  $4.655.902
                td.text-end $41.903.121
              tr
                td.bg-t1-8.text-center  3
                td.text-end.bg-t1-8  $2.327.951
                td.text-end.bg-t1-8  $6.983.854
                td.text-end.bg-t1-8 $39.575.170
              tr
                td.text-center  4
                td.text-end $2.327.951
                td.text-end  $9.311.805
                td.text-end $37.247.219
              tr
                td.bg-t1-8.text-center  5
                td.text-end.bg-t1-8  $2.327.951
                td.text-end.bg-t1-8  $11.639.756
                td.text-end.bg-t1-8 $34.919.268
              tr
                td.text-center  6
                td.text-end  $2.327.951
                td.text-end  $13.967.707
                td.text-end $32.591.317
              tr
                td.bg-t1-8.text-center  7
                td.text-end.bg-t1-8  $2.327.951
                td.text-end.bg-t1-8  $16.295.658
                td.text-end.bg-t1-8 $30.263.365
              tr
                td.text-center  8
                td.text-end  $2.327.951
                td.text-end  $18.623.609
                td.text-end $27.935.414
              tr
                td.bg-t1-8.text-center  9
                td.text-end.bg-t1-8  $2.327.951
                td.text-end.bg-t1-8  $20.951.561
                td.text-end.bg-t1-8 $25.607.463
              tr
                td.text-center  10
                td.text-end  $2.327.951
                td.text-end  $23.279.512
                td.text-end $23.279.512
              tr
                td.bg-t1-8.text-center 11
                td.text-end.bg-t1-8  $2.327.951
                td.text-end.bg-t1-8  $25.607.463
                td.text-end.bg-t1-8 $20.951.561
              tr
                td.text-center  12
                td.text-end  $2.327.951
                td.text-end  $27.935.414
                td.text-end $18.623.609
              tr
                td.bg-t1-8.text-center  13
                td.text-end.bg-t1-8  $2.327.951
                td.text-end.bg-t1-8  $30.263.365
                td.text-end.bg-t1-8 $16.295.658
              tr
                td.text-center 14
                td.text-end  $2.327.951
                td.text-end  $32.591.317
                td.text-end $13.967.707
              tr
                td.bg-t1-8.text-center 15
                td.text-end.bg-t1-8 $2.327.951
                td.text-end.bg-t1-8 $34.919.268
                td.text-end.bg-t1-8 $11.639.756
              tr
                td.text-center 16
                td.text-end  $2.327.951
                td.text-end  $37.247.219
                td.text-end $9.311.805
              tr
                td.bg-t1-8.text-center 17
                td.text-end.bg-t1-8 $2.327.951
                td.text-end.bg-t1-8 $39.575.170
                td.text-end.bg-t1-8 $6.983.854
              tr
                td.text-center 18
                td.text-end $2.327.951
                td.text-end $41.903.121
                td.text-end $4.655.902
              tr
                td.bg-t1-8.text-center 19
                td.text-end.bg-t1-8 $2.327.951
                td.text-end.bg-t1-8 $44.231.072
                td.text-end.bg-t1-8 $2.327.951
              tr
                td.text-center 20
                td.text-end $2.327.951
                td.text-end $46.559.024
                td.text-end -


    .tarjeta.bg-t1-11.p-4.mt-4
      .row.justify-content-around.align-items-center
        .col-auto
          img(src="@/assets/curso/tema1/img7.svg", style="width: 72px")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1(style="color: #FD9826 !important") Deterioro de propiedad, planta y equipo
              p.text-small.mb-0.text-white El deterioro del valor o las pérdidas de los elementos de propiedades, planta y equipo son hechos separables de las reclamaciones de pagos o compensaciones de terceros, así como, de cualquier compra posterior o construcción de activos que reemplacen a los citados elementos, y por ello se contabilizarán de forma separada, por tal motivo lo invitamos a consultar el siguiente enlace.

            .col-sm-auto
              a.boton.color-acento-botones(href="downloads/anexos/Anexo_1_Deterioro_PPYE.pdf" target="_blank")
                span.text-black Descargar
                i.fas.fa-file-download.text-black

    p.mt-4 #[b Ejemplo: ]

          .row.justify-content-center.bg-t1-10.p-5
            p Se compra un computador por valor de $3.000.000 IVA incluido, para uso de la empresa, con 5 años de vida útil, transcurrido dos años el equipo se dejó caer del mueble y sufrió daños, el deterioro se estima en $500.000, reconozca el deterioro presentado. 

            .col-lg-6
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 11. 
                span Reconocimiento inicial del computador

              .table-responsive
                table.table.table-bordered
                  tbody
                    tr
                      td.text-center(style="background-color: #F8D7B0 !important") #[b Código]
                      td.text-center(style="background-color: #F8D7B0 !important") #[b Cuenta]
                      td.text-center(style="background-color: #F8D7B0 !important") #[b Valor]
                    tr
                      td 152801
                      td Computador
                      td.text-end $3.000.000
                    tr
                      td.bg-t1-8 233505
                      td.bg-t1-8 Costos y gastos por pagar
                      td.bg-t1-8.text-end $3.000.000

              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 12. 
                span Cálculo de depreciación del computador (vida útil: 5 años)

              .table-responsive
                table.table.table-bordered
                  tbody
                    tr
                      td.text-center(style="background-color: #F8D7B0 !important") #[b Periodo]
                      td.text-center(style="background-color: #F8D7B0 !important") #[b Depreciación]
                      td.text-center(style="background-color: #F8D7B0 !important") #[b Depreciación acumulada]
                      td.text-center(style="background-color: #F8D7B0 !important") #[b Saldo]
                    tr
                      td.text-center #[b 0]
                      td.text-end #[b -]
                      td.text-end #[b -]
                      td.text-end $3.000.000 
                    tr
                      td.bg-t1-8.text-center #[b 1]
                      td.bg-t1-8.text-end $600.000 
                      td.bg-t1-8.text-end $600.000 
                      td.bg-t1-8.text-end $2.400.000 
                    tr
                      td.bg-t1-8.text-center #[b 2]
                      td.bg-t1-8.text-end $600.000 
                      td.bg-t1-8.text-end $1.200.000 
                      td.bg-t1-8.text-end $1.800.000 
                    tr
                      td.bg-t1-8.text-center #[b 3]
                      td.bg-t1-8.text-end $600.000 
                      td.bg-t1-8.text-end $1.800.000 
                      td.bg-t1-8.text-end $1.200.000 
                    tr
                      td.bg-t1-8.text-center #[b 4]
                      td.bg-t1-8.text-end $600.000 
                      td.bg-t1-8.text-end $2.400.000 
                      td.bg-t1-8.text-end $600.000 
                    tr
                      td.bg-t1-8.text-center #[b 5]
                      td.bg-t1-8.text-end $600.000 
                      td.bg-t1-8.text-end $3.000.000 
                      td.bg-t1-8.text-end #[b -]


            .col-lg-10.mt-4
              .row.justify-content-center
                .col-lg-12(data-aos="fade-down")
                  .row.d-flex.align-items-stretch.bg-t1-3
                    .col-xl.d-flex
                      .p-4.w-100.align-items-center
                        p #[b En el año dos sufre el deterioro por $500.000]
                        p Computador: $3.000.000
                        p Depreciación: $1.200.000
                        p Deterioro: $500.000
                        p Valor residual: $1.300.000
                        p 159902 deterioro computador $500.000
                        p 519801 deterioro $500.000 

                    .col-xl-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                      figure.m-0.p-0.w-100.h-100.d-flex(data-aos="zoom-in")
                        img(src='@/assets/curso/tema1/img8.png', alt='', class="w-100 h-100 object-fit-cover")

              p.mt-4 Se hace ajuste en la depreciación por los periodos que faltan para terminar su vida útil.

              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 13. 
                span Ajuste en la depreciación del activo por cambio en la vida útil o método

              .table-responsive
                table.table.table-bordered
                  tbody
                    tr
                      td.text-center(style="background-color: #F8D7B0 !important") #[b Periodo]
                      td.text-center(style="background-color: #F8D7B0 !important") #[b Depreciación]
                      td.text-center(style="background-color: #F8D7B0 !important") #[b Depreciación acumulada]
                      td.text-center(style="background-color: #F8D7B0 !important") #[b Saldo]
                    tr
                      td.bg-t1-8.text-center  2
                      td.bg-t1-8.text-end $600.000 
                      td.bg-t1-8.text-end $1.200.000 
                      td.bg-t1-8.text-end $1.300.000 
                    tr
                      td.bg-t1-8.text-center  3
                      td.bg-t1-8.text-end $433.333 
                      td.bg-t1-8.text-end $433.333 
                      td.bg-t1-8.text-end $866.667 
                    tr
                      td.bg-t1-8.text-center  4
                      td.bg-t1-8.text-end $433.333 
                      td.bg-t1-8.text-end $866.667 
                      td.bg-t1-8.text-end $433.333 
                    tr
                      td.bg-t1-8.text-center  5
                      td.bg-t1-8.text-end $433.333 
                      td.bg-t1-8.text-end $1.300.000 
                      td.bg-t1-8.text-end  -
                    
                    
    separador
    #t_1_5.titulo-segundo.color-acento-contenido
      h2 1.5 Reconocimiento, medición, presentación y revelación

    .row.p-4.bg-t1-12
      p #[b Reconocimiento:] al momento de reconocer un bien como propiedad, planta y equipo, se debe identificar la definición del activo, es decir, que a futuro genere beneficios económicos de la utilización de este dentro de la empresa; además, debe cumplir con la condición de que el precio de ese activo sea fiable. 

    .row.p-4.bg-t1-12.mt-4
      p #[b Medición inicial:] en los bienes de propiedad, planta y equipo se debe utilizar el criterio de medición al costo, el cual se debe tener presente no solo el valor de compra del activo, sino también los aranceles de importación, impuestos no recuperables, transportes, asesorías, desmantelamiento y demás costos en los que se incurra para poner en funcionamiento el activo. 

    .row.p-4.bg-t1-12.justify-content-center.mt-4
      p #[b Medición posterior:] después de estar usando un bien y de la disminución de su vida útil. Se puede medir con los siguientes criterios: 
      .col-lg-11
        .row.p-5.bg-t1-13.justify-content-center
          p
          p.mt-4 #[b Modelo del costo:] este modelo consiste en disminuir del costo inicial el valor de la depreciación acumulada, así como el valor por deterioro si lo hay, en el momento de cierre del periodo.

          p #[b Ejemplo:] la empresa TRAPITOS S.A., el día primero de marzo compra una máquina de coser por valor de $6.500.000, adicionalmente se canceló servicio de transporte por $250.000, se estima un desmantelamiento en 10 años por valor de $2.000.000 a una tasa de 6 % EA

          .col-lg-4
            .row.bg-t1-9.p-4 
              p.mb-0 VP= VF/ (1+i)^n
              p.mb-0 VP= $2000000/(1+0.06)^10
              p.mb-3 VP= $1.116.790
              
              p.mb-0 Maquinaria $6.500.000
              p.mb-0 IVA $1.235.000
              p.mb-3 Fletes $250.000
              
              p.mb-0 Desmantelamiento $1.116.790 
              p.mb-0 Valor a depreciar: $9.101.790
              p.mb-0 Depreciación anual: $910.179
              p.mb-0 Depreciación mensual: $75.848

          .col-lg-6
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Tabla 14. 
              span Reconocimiento inicial de la máquina de coser
            .table-responsive
                table.table.table-bordered
                  tbody
                    tr
                      td.text-center(style="background-color: #F8D7B0 !important") #[b Código]
                      td.text-center(style="background-color: #F8D7B0 !important") #[b Cuenta]
                      td.text-center(style="background-color: #F8D7B0 !important") #[b Valor]

                    tr
                      td 299501
                      td.text-start Máquina de coser 
                      td.text-end $9.101.790

                    tr
                      td.bg-t1-8 152001
                      td.bg-t1-8.text-start Desmantelamiento
                      td.bg-t1-8.text-end $1.116.790

                    tr
                      td 233505
                      td.text-start Costos por pagar
                      td.text-end $7.985.000

            .titulo-sexto.color-acento-contenido.mb-3
              h5  Tabla 15. 
              span Registro de depreciación al finalizar el año
            .table-responsive
                table.table.table-bordered
                  tbody
                    tr
                      td.text-center(style="background-color: #F8D7B0 !important") #[b Código]
                      td.text-center(style="background-color: #F8D7B0 !important") #[b Cuenta]
                      td.text-center(style="background-color: #F8D7B0 !important") #[b Valor]

                    tr
                      td 516020
                      td.text-start Depreciación
                      td.text-end $758.480

                    tr
                      td.bg-t1-8 159220
                      td.bg-t1-8.text-start Depreciación Acumulada
                      td.bg-t1-8.text-end $758.480

            .titulo-sexto.color-acento-contenido.mb-3
              h5  Tabla 16. 
              span Ajuste del costo por desmantelamiento
            .table-responsive
                table.table.table-bordered
                  tbody
                    tr
                      td.text-center(style="background-color: #F8D7B0 !important") #[b Concepto]
                      td.text-center(style="background-color: #F8D7B0 !important") #[b Total]

                    tr
                      td Tasa EA
                      td.text-center 6,00 %

                    tr
                      td.bg-t1-8 Tasa nominal
                      td.bg-t1-8.text-center 5,84 %

                    tr
                      td Tasa mensual
                      td.text-center 0,487 %

            .row.bg-t1-9.p-4 
              p.mb-0 VF=VP (1+TI)^n
              p.mb-0 VF= $1.116.790 (1+0.00487)^10
              p.mb-0 VF= $1.172.357
              p.mb-0 VP-VF= $1.116.790 - $1.172.357 = $55.567

          .col-lg-8.mt-4
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Tabla 17. 
              span Registro del gasto por actualización de la provisión de desmantelamiento

            .table-responsive
              table.table.table-bordered
                tbody
                  tr
                    td.text-center(style="background-color: #F8D7B0 !important") #[b Código]
                    td.text-center(style="background-color: #F8D7B0 !important") #[b Cuenta]
                    td.text-center(style="background-color: #F8D7B0 !important") #[b Débito]
                    td.text-center(style="background-color: #F8D7B0 !important") #[b Crédito]
                  tr
                    td 152001
                    td Gastos de prov. Desmantelamiento	
                    td.text-end $55.567	
                    td.text-end -
                  tr
                    td.bg-t1-8 299501
                    td.bg-t1-8 Desmantelamiento
                    td.bg-t1-8.text-end  -
                    td.bg-t1-8.text-end $55.567


    .row.p-4.bg-t1-12.justify-content-center.mt-4
      .col-lg-11
        .row.p-5.bg-t1-14.justify-content-center
          p
          p.mt-4 #[b Modelo de revaluación:] cuando un activo es reconocido un valor razonable y varía el precio de este, se revalúa tomando el valor razonable menos la depreciación y deterioros que se presentaron, este modelo se debe estar aplicando constantemente para que la información contable sea fiable y oportuna. 

          .col-lg-8 
            .row.bg-t1-9.p-4
              p #[b Ejemplo:]
              p.mb-0 Costo de adquisición - depreciación acumulada = valor en libros 
              p.mb-0 $6.500.000   -   $758.480 = $5.741.520 
              p.mb-0 Valorización con respecto al costo histórico
              p.mb-0 $8.000.000 – $5.741.520 = $2.258.480
              p.mb-0 Valoración / costo histórico
              p.mb-0 $2.258.480 / $5.741.520 = 39,34 %
              p.mb-0 Depreciación * 39,34 % = valor ajustado de depreciación 
              p.mb-0 $758.480*39,34 %= $298.386
              p.mb-0 Costo histórico*39.34 %= valor ajuste costo histórico 
              p.mb-0 $6.500.000*39.34 %= $2.535.000
          .col-lg-4.d-none.d-lg-block
            figure(data-aos="fade-up")
              img(src='@/assets/curso/tema1/img9.png', alt='', style="width: 480px").m-auto

          .titulo-sexto.color-acento-contenido.mt-4
            h5 Tabla 18. 
            span Registro del superávit por revaluación

          .table-responsive
            table.table.table-bordered
              tbody
                tr
                  td.text-center(style="background-color: #F8D7B0 !important") #[b Código]
                  td.text-center(style="background-color: #F8D7B0 !important") #[b Cuenta]
                  td.text-center(style="background-color: #F8D7B0 !important") #[b Débito]
                  td.text-center(style="background-color: #F8D7B0 !important") #[b Crédito]
                tr
                  td 152001
                  td Máquina de coser
                  td.text-end $2.535.000
                  td.text-end -
                tr
                  td.bg-t1-8 159220
                  td.bg-t1-8 Depreciación acumulada
                  td.bg-t1-8.text-end  -
                  td.bg-t1-8.text-end $298.386

                tr
                  td 429501
                  td Superávit de revaluación
                  td.text-end -
                  td.text-end $2.236.614

    .row.mt-4
      p.p-4.bg-t1-12 #[b Presentación y revelación:] la propiedad, planta y equipo se presenta y se revela teniendo en cuenta el criterio de medición de cada uno de los elementos de propiedad, planta y equipo, los métodos de depreciación utilizados, los años de vida útil, el valor de salvamento, que es el valor residual que queda del activo después de su depreciación transcurrido los años de vida útil, si se presentó deterioro por cualquier factor en el transcurso del tiempo, los incrementos o disminuciones surgidas de revaluaciones, por diferencia en cambio, sí se presenta, entre otras variaciones.

    .tarjeta.bg-t1-11.p-4.mt-4
      .row.justify-content-around.align-items-center
        .col-auto
          img(src="@/assets/curso/tema1/img7.svg", style="width: 72px")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1(style="color: #FD9826 !important") Norma Internacional de Contabilidad número dieciséis 
              p.text-small.mb-0.text-white Propiedad planta y equipo.
    
            .col-sm-auto
              a.boton.color-acento-botones(href="downloads/anexos/Anexo_2_Norma_NIC _40.pdf" target="_blank")
                span.text-black Descargar
                i.fas.fa-file-download.text-black


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
