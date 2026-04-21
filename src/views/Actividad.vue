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
      tema:
        'Cuestionario de verificación de control y auditoría en procesos tributarios',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Evaluar la comprensión normativa y la aplicación técnica de los procedimientos de control, auditoría y mejora en los procesos tributarios, conforme a la guía técnica y a la normativa fiscal vigente.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            'La exactitud en una declaración tributaria se relaciona principalmente con:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Presentar la declaración antes del vencimiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Que las cifras reflejen fielmente los hechos económicos y los cálculos sean correctos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Archivar el expediente en orden cronológico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Elaborar un cronograma tributario anual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La exactitud exige que los valores declarados correspondan a la realidad económica y estén bien calculados.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: 'La completitud en una declaración tributaria significa que:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Las cifras cuadran entre sí, aunque falten anexos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El formulario fue firmado correctamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Se incluyen todos los rubros exigibles y no se omite información relevante.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El impuesto a cargo fue pagado oportunamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La completitud implica no omitir rubros, anexos ni datos relevantes del proceso declarativo.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'La consistencia en una declaración tributaria se verifica cuando:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Los valores concilian entre soportes, papeles de trabajo, borrador y formulario presentado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El formulario se diligencia con letra legible.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El contribuyente presenta la declaración en la fecha correcta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La DIAN acepta automáticamente la declaración.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La consistencia busca que toda la información coincida desde el soporte hasta el formulario final.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'Antes de iniciar el cálculo de una declaración, uno de los riesgos más frecuentes es:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No elaborar el informe de auditoría.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'No archivar la constancia de pago.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'No medir indicadores de mejora continua.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Parametrizar mal el año gravable o usar un formulario incorrecto.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Un error de parametrización afecta desde el inicio la validez del cálculo y del formulario usado.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'Durante el diligenciamiento y presentación de una declaración, un riesgo frecuente es:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Omitir el análisis de la causa raíz.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Digitar mal un renglón o no validar el borrador.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'No calcular la capacidad instalada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No usar muestreo en auditoría.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. En esta etapa son comunes los errores de digitación o de revisión previa al envío.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: 'Una técnica de conciliación por fuente busca comparar:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El calendario tributario con los vencimientos bancarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El RUT con la cámara de comercio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El plan de acción con el tablero de control.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Pagadores, bancos y expediente del contribuyente.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La conciliación por fuente contrasta distintos orígenes de información para detectar diferencias u omisiones.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            'La principal utilidad de las listas de chequeo y matrices de validación es:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reemplazar los soportes tributarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evitar la firma del contribuyente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Estandarizar la revisión y dejar evidencia del control.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar la necesidad de usar formularios oficiales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Estas herramientas convierten la revisión en un proceso verificable y documentado.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            'Cuando una corrección aumenta el impuesto a pagar o disminuye el saldo a favor, en general procede:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Esperar el siguiente periodo para ajustar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Archivar el expediente sin modificar la declaración.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Presentar nueva declaración y pagar la diferencia con sanción, cuando aplique.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Solicitud previa ante la DIAN sin presentar nueva declaración.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Ese tipo de corrección se hace mediante nueva declaración y pago del mayor valor, con sanción si corresponde.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'Cuando una corrección busca disminuir el impuesto a pagar o aumentar el saldo a favor, según el componente:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Requiere autorización previa de la DIAN.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Siempre se hace con una llamada a la DIAN.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'No necesita soportes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo aplica para IVA.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Este ajuste está sujeto a control adicional y requiere trámite previo ante la DIAN.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: 'La sanción por extemporaneidad se genera cuando:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La declaración contiene un error aritmético.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La declaración se presenta después del plazo establecido.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El contribuyente omite un anexo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El soporte documental está incompleto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La extemporaneidad ocurre por presentar la declaración fuera del vencimiento legal.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: 'Los intereses moratorios se generan cuando:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El formulario se presenta virtualmente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El contribuyente cambia de régimen.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La declaración tiene saldo a favor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El impuesto se paga después del vencimiento.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Los intereses moratorios se causan por el pago tardío del impuesto adeudado.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'Dentro de las fuentes de verificación de la información tributaria se encuentra:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La contabilidad, los reportes de terceros y las declaraciones anteriores.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La política salarial del área comercial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El reglamento interno de trabajo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El manual de convivencia de la empresa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Esas fuentes permiten contrastar y sustentar la información declarada.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: 'Un requerimiento tributario se entiende como:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una devolución automática de saldo a favor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un borrador interno de auditoría.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una solicitud formal de información, pruebas o aclaraciones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un soporte opcional de archivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El requerimiento exige responder formalmente con evidencia organizada y suficiente.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'La finalidad principal de la auditoría tributaria aplicada es:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sustituir la declaración presentada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Detectar inconsistencias, documentar evidencia y reducir riesgos de corrección o sanción.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar la necesidad de controles internos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reemplazar la contabilidad del contribuyente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La auditoría aplicada busca verificar, sustentar y prevenir riesgos en el proceso tributario.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'En la planeación de auditoría, los criterios se recomiendan en tres niveles:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Normativo, técnico-operativo y procedimental interno.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Estratégico, presupuestal y gerencial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Legal, contable y disciplinario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Comercial, financiero y laboral.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Esos tres niveles permiten evaluar con reglas claras y bien definidas.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: 'La matriz soporte–dato–casilla sirve para:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cambiar el formulario tributario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solicitar devoluciones automáticas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Rastrear cada valor declarado desde el soporte hasta la casilla del formulario.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Liquidar sanciones de extemporaneidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La matriz asegura la trazabilidad completa de la información declarada.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: 'Un hallazgo de completitud corresponde, por ejemplo, a:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una retención omitida.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Un archivo PDF con nombre incorrecto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un cronograma desactualizado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un tablero sin colores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Una retención omitida representa información obligatoria que no fue incluida en la declaración.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: 'El informe de auditoría debe incluir, entre otros elementos:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo el nombre del contribuyente y el periodo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Únicamente el saldo a favor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El RUT y el recibo de pago, sin análisis adicional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Objetivo, alcance, criterios, hallazgos y recomendaciones.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El informe debe documentar de forma clara qué se revisó, qué se encontró y qué se recomienda.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: 'El seguimiento y cierre de acciones correctivas busca:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reemplazar el plan de acción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Verificar que cada acción se ejecutó, dejó evidencia y controló la causa raíz.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar la necesidad de indicadores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir el archivo del expediente tributario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El seguimiento convierte el hallazgo en mejora real y evita su repetición.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            'Un indicador de oportunidad de presentación puede calcularse como:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Declaraciones corregidas / total de declaraciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Hallazgos repetidos / total de hallazgos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Declaraciones presentadas en plazo / total.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Sanciones pagadas / declaraciones omitidas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Ese indicador mide el cumplimiento oportuno en la presentación de las declaraciones.',
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
