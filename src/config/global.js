export default {
  global: {
    Name:
      'Reconocimiento de propiedad, planta y equipo, propiedades de inversión y activos mantenidos para la venta',
    Description:
      'En este componente se desarrolla la unidad temática de propiedad, planta y equipo o lo que denominamos en la normativa contable “bienes de uso” o “activos fijos”. Estos son indispensables para el funcionamiento de las organizaciones. Por lo tanto, se deben identificar las necesidades requeridas de los activos, sus características, objetivo, finalidad y normatividad vigente aplicable.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        titulo: 'Propiedad, planta y equipo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Política Contable PPYE',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Compra de Propiedad, Planta y Equipo en moneda Local y moneda extranjera',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Ajuste de la diferencia en cambio',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Desmantelamiento, rehabilitación, componentes',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Reconocimiento, medición, presentación y revelación',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Propiedades de inversión',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Política contable',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Reconocimiento, medición, presentación y revelación',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Activos mantenidos para la venta',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Política contable',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Reconocimiento, medición, presentación y revelación',
            hash: 't_3_2',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/123101_CF08_DU.zip',
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
  complementario: [
    {
      tema: 'Política contable PPYE',
      referencia:
        'International Accounting Standards Board (IASB). (2003). <em>NIC 16: Propiedades, Planta y Equipo</em>. Fundación IFRS.',
      tipo: 'Página web',
      link:
        'https://www.ifrs.org/issued-standards/list-of-standards/ias-16-property-plant-and-equipment/',
    },
    {
      tema: 'Política contable',
      referencia:
        'International Accounting Standards Board (IASB). (2003). <em>NIC 40: Propiedades de Inversión</em>. Fundación IFRS.',
      tipo: 'Página web',
      link:
        'https://www.ifrs.org/issued-standards/list-of-standards/ias-40-investment-property/',
    },
    {
      tema: 'Política contable',
      referencia:
        'International Accounting Standards Board (IASB). (2004). <em>NIIF 5: Activos No Corrientes Mantenidos para la Venta y Operaciones Discontinuadas</em>. Fundación IFRS.',
      tipo: 'Página web',
      link:
        'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-5-non-current-assets-held-for-sale-and-discontinued-operations/',
    },
  ],
  glosario: [
    {
      termino: 'Activos mantenidos para la venta',
      significado:
        'Son aquellos bienes que adquiere la empresa con la finalidad de desprenderse de los mismos, a través de la venta.',
    },
    {
      termino: 'Activos de uso',
      significado:
        'Los activos que adquiere la empresa para su funcionamiento y desarrollo de la actividad económica.',
    },
    {
      termino: 'Depreciación',
      significado:
        'Es la pérdida de valor del activo por su uso durante la vida útil.',
    },
    {
      termino: 'Inversión',
      significado:
        'Beneficio económico que se espera obtener a futuro, asumiendo riesgos de este.',
    },
    {
      termino: 'Propiedad de Inversión',
      significado:
        'Son los activos que adquiera la empresa con la finalidad de que generen una rentabilidad económica para sí misma.',
    },
    {
      termino: 'Valor residual',
      significado:
        'El valor residual anteriormente conocido como valor de salvamento es el importe recuperable después de depreciar totalmente el activo durante su vida útil, en la actualidad no existe un método definido, por lo tanto, se determina bajo la política contable de cada empresa.',
    },
    {
      termino: 'Vida útil',
      significado:
        'Es el número de años que tiene durabilidad un activo, tiempo en el cual la empresa espera obtener beneficios económicos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Flórez, E., Rincón, C., Zamorano, R. (2014). Manual contable en la implementación de las NIIF.Bogotá: Ecoe Ediciones.',
      link: '',
    },
    {
      referencia: 'CTCP, (2016a), NIC 16 propiedad planta y equipo.',
      link:
        'http://www.aplicaciones-mcit.gov.co/adjuntos/niif/14%20ES_RedBV2016_IAS16_PartA.pdf',
    },
    {
      referencia:
        'CTCP, (2016b), NIIF 5- Activos no Corrientes Mantenidos para la Venta y Operaciones Discontinuadas.',
      link:
        'https://www.ctcp.gov.co/proyectos/contabilidad-e-informacion-financiera/documentos-organismos-internacionales/compilacion-marcos-tecnicos-de-informacion-financi/1534346664-4845',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gomez Perez',
          cargo: 'Responsable del ecosistema',
          centro: ' Centro Agroturístico- Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Claudia Briseida Coy Coy',
          cargo: 'Experto temático',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Angie Fernanda Salazar',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica. - Regional Distrito Capital',
        },
        {
          nombre: 'Maryuri Agudelo Franco',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica. - Regional Distrito Capital',
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
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cielo Damaris Ángulo Rodríguez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Caceres',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Gilberto Junior Rodriguez Rodriguez',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'María Camila Ovalle',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'María Carolina Tamayo Lopez',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
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
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
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
