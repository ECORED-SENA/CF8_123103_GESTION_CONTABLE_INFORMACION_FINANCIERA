<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Reconocimiento contable de propiedades, planta y equipo',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> identificar los conceptos clave relacionados con el reconocimiento, medición, presentación y revelación contable de propiedades, planta y equipo, propiedades de inversión y activos mantenidos para la venta conforme a la normativa vigente.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál de las siguientes características corresponde a la propiedad, planta y equipo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Generan gastos financieros inmediatos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'No requieren políticas contables específicas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Son bienes tangibles que generan beneficios económicos a futuro.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Se usan exclusivamente para la venta en el corto plazo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué norma contable regula el tratamiento de las propiedades, planta y equipo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'NIC 40.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'NIC 16.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'NIC 8.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'NIIF 5.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es el modelo de medición posterior que utiliza el valor razonable menos la depreciación o deterioro?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Modelo de revaluación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Modelo por componentes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Modelo simplificado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Modelo de eficiencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Según la NIC 16, ¿qué elementos deben considerarse en la medición inicial de un activo?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Intereses financieros y dividendos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo costos operativos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Costo del activo, costos de desmantelamiento, fletes e impuestos no recuperables.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Solo el valor del bien sin impuestos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué sucede con un activo clasificado como mantenido para la venta según la NIIF 5?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Debe revaluarse cada mes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'No se deprecia mientras esté clasificado como tal.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Debe darse de baja inmediatamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se incrementa su depreciación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué representa el valor residual de un activo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El valor histórico del activo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El valor estimado que se recuperará al final de su vida útil.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El monto total invertido en su adquisición.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El valor por el que se vende en el mercado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué tasa de depreciación fiscal anual aplica para construcciones y edificaciones en Colombia?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '3.33 %',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '2.22 %',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '10.00 %',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '5.00 %',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué se entiende por deterioro en contabilidad?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Revalorización mensual del activo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pérdida de valor de un activo por causas externas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Deducción de impuestos sobre la propiedad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Incremento en el valor contable del activo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es el objetivo principal de las propiedades de inversión?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Servir de garantía financiera.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir la carga tributaria.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Generar rentabilidad económica mediante alquiler o valorización.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Funcionamiento operativo de la empresa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué condición debe cumplir un activo para ser clasificado como mantenido para la venta?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Estar disponible para la venta inmediata y negociado en menos de un año.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Haber sido revaluado previamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ser utilizado por más de 5 años.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Haber generado pérdidas continuas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'El modelo del costo consiste en revaluar el activo periódicamente a valor de mercado.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'La política contable define cómo se reconocen y miden los activos en una empresa.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'El deterioro de una propiedad de inversión debe reconocerse de forma separada al resto del activo.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Todos los activos mantenidos para la venta deben continuar depreciándose hasta su venta.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'El modelo de revaluación exige aplicar ajustes con suficiente regularidad para mantener información fiable.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
