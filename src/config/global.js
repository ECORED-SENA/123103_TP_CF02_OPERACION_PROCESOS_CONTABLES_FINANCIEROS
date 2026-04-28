export default {
  global: {
    Name: 'Control, auditoría y mejora de procesos tributarios',
    Description:
      'Este componente formativo desarrolla el control, la auditoría y la mejora continua en la elaboración de declaraciones tributarias, con enfoque en la normativa fiscal y la guía técnica aplicable. Aborda criterios de calidad (exactitud, completitud y consistencia), riesgos del ciclo declarar–presentar–pagar–archivar, reglas de corrección y sanciones, y procedimientos asociados como devoluciones, compensaciones y atención de requerimientos. Además, fortalece la auditoría tributaria aplicada mediante papeles de trabajo y gestión de hallazgos, e integra herramientas de gobierno del proceso (indicadores, tableros, protocolos y gestión documental) para asegurar un cumplimiento oportuno, verificable y sostenible.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Control y aseguramiento de calidad en la elaboración de declaraciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Exactitud, completitud y consistencia',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Riesgos frecuentes y puntos críticos del ciclo ',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Técnicas de coherencia y conciliación de información',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Listas de chequeo y matrices de validación para declaraciones',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Marco normativo de revisión, corrección y sanciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Reglas para correcciones y declaraciones rectificatorias',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Sanciones, intereses y consecuencias de errores o extemporaneidad',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Evidencia y trazabilidad',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Procedimientos asociados',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Auditoría tributaria aplicada y gestión de hallazgos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Planeación de auditoría',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Pruebas y papeles de trabajo',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Hallazgos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Informe de auditoría, recomendaciones y plan de acción',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Seguimiento y cierre de acciones correctivas',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Mejora continua y gobierno del proceso tributario',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Indicadores de desempeño',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Herramientas de mejora',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Protocolos institucionales',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Sistema de gestión documental',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Producto integrador',
            hash: 't_4_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/123103_CF2_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Aseguramiento de calidad',
      significado:
        'Conjunto de controles preventivos y verificaciones que buscan que la declaración sea exacta, completa, consistente y sustentable antes de presentarla.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Capacidad de rastrear cada cifra declarada desde el soporte documental hasta el papel de trabajo y la casilla o renglón del formulario.',
    },
    {
      termino: 'Conciliación',
      significado:
        'Cruce de información entre fuentes (soportes, bancos, certificados, contabilidad, reportes) para detectar diferencias, omisiones o duplicidades.',
    },
    {
      termino: 'Control interno',
      significado:
        'Procedimientos y responsabilidades definidos para reducir riesgos y asegurar el cumplimiento oportuno y correcto de las obligaciones tributarias.',
    },
    {
      termino: 'Corrección de declaración',
      significado:
        'Presentación de una nueva declaración del mismo periodo para ajustar errores u omisiones, conforme a las reglas aplicables.',
    },
    {
      termino: 'Sanción por extemporaneidad',
      significado:
        'Consecuencia económica por presentar una declaración después del vencimiento, calculada según la norma vigente.',
    },
    {
      termino: 'Intereses moratorios',
      significado:
        'Intereses que se generan por pagar el impuesto después del plazo establecido, hasta la fecha de pago.',
    },
    {
      termino: 'Hallazgo',
      significado:
        'Diferencia comprobable entre lo observado en la auditoría y el criterio definido (norma, instructivo o procedimiento interno), sustentada con evidencia.',
    },

    {
      termino: 'Plan de acción',
      significado:
        'Documento que define acciones correctivas o preventivas, responsables, fechas y evidencias para cerrar hallazgos y evitar recurrencia.',
    },
    {
      termino: 'Expediente tributario',
      significado:
        'Conjunto organizado de soportes, papeles de trabajo, formularios presentados, constancias y pagos (si aplica) que sustentan el cumplimiento de un periodo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Archivo General de la Nación. (2000). Ley 594 de 2000 por medio de la cual se dicta la Ley General de Archivos y se dictan otras disposiciones.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1989). Decreto Ley 624 de 1989 por el cual se expide el Estatuto Tributario de los impuestos administrados por la Dirección de Impuestos Nacionales.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2012). Decreto 2609 de 2012 por el cual se reglamenta el Título V de la Ley 594 de 2000 en materia de gestión documental.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2015). Decreto 2420 de 2015 por medio del cual se expide el Decreto Único Reglamentario de las normas de contabilidad, de información financiera y de aseguramiento de la información.',
      link: '',
    },
    {
      referencia:
        'Consejo de Estado. (2014, abril 30). Sentencia 76001-23-31-000-2006-00242-01 (18971).',
      link: '',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (2019). Portal transaccional.',
      link: '',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (2020). Impuesto sobre la renta personas naturales año gravable 2020.',
      link: '',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (2020, febrero 25). Formulario 300. Declaración del impuesto sobre las ventas – IVA.',
      link: '',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (2025). Concepto 0101 de 2025.',
      link: '',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (2026). Formularios e instructivos.',
      link: '',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (s.f.). Devoluciones y compensaciones.',
      link: '',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (s.f.). Formulario 350. Declaración de retenciones en la fuente.',
      link: '',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (s.f.). Formularios e instructivos.',
      link: '',
    },
    {
      referencia:
        'ICONTEC Internacional. (2015). Norma técnica colombiana NTC-ISO 9001:2015. Sistemas de gestión de la calidad.',
      link: '',
    },
    {
      referencia:
        'Junta Central de Contadores. (s.f.). Inspección y vigilancia.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones. (2017). G.INF.07 Guía para la gestión de documentos y expedientes electrónicos.',
      link: '',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1971). Decreto 410 de 1971 por el cual se expide el Código de Comercio.',
      link: '',
    },
    {
      referencia:
        'Secretaría General del Senado de la República. (2026). Estatuto tributario. Artículo 765. Prueba documental.',
      link: '',
    },
    {
      referencia:
        'Unidad de Gestión Pensional y Parafiscales. (s.f.). Proceso de determinación y fiscalización.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Andrea Tello Zambrano',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristian Fernando Martinez Sanchez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
