import tour1 from '../assets/images/database.jpg'
import tour2 from '../assets/images/exactas.jpg'
import tour3 from '../assets/images/desarrollo.png'
import tour4 from '../assets/images/pensamiento.jpg'

export const links = [
    {
      id: 1,
      link: "introduccion",
    },
    {
      id: 2,
      link: "jefe",
    },
    {
      id: 3,
      link: "mercado",
    },
    {
      id: 4,
      link: "materias",
    },
  ];

  export const socialLinks = [
    {
        id: 1,
        link: 'facebook'
      },
      {
        id: 2,
        link: "twitter",
      },
      {
        id: 3,
        link: "squarespace",
      },
  ]

  export const services = [
    {
        id: 1,
        icon: "fas fa-briefcase fa-fw",
        title: "organizaciones",
        text: ' En cualquier organización que cuente o requiera un sistema informático.'
      },
      {
        id: 2,
        icon: "fas fa-certificate fa-fw",
        title: "grupos",
        text: ' En grupos multidisciplinarios que desarrollen soluciones de software o hardware.'
      },
      {
        id: 3,
        icon: "fas fa-industry fa-fw",
        title: "empresas internacionales",
        text: ' Aplicando conceptos de teletrabajo vía Internet.'
      },
      {
        id: 4,
        icon: "fas fa-home fa-fw",
        title: "start up",
        text: 'En su propia empresa.'
      },
  ]

  export const tours = [
    {
      id: 1,
      image: tour1,
      date: "10:00 - 12:00",
      title: "Base de Datos",
      info: `Una base de datos es una herramienta para recopilar y organizar información. Las bases de datos pueden almacenar información sobre personas, productos, pedidos u otras cosas. Muchas bases de datos comienzan como una lista en una hoja de cálculo o en un programa de procesamiento de texto.`,
      location: "Aula Pirai - Post Grado",
      duration: 4,
      cost: 2100,
    },
    {
      id: 2,
      image: tour2,
      date: "07:45 - 09:45",
      title: "Algebra lineal",
      info: `El álgebra lineal es una rama de las matemáticas que estudia conceptos tales como vectores, matrices, espacio dual, sistemas de ecuaciones lineales y en su enfoque de manera más formal, espacios vectoriales y sus transformaciones lineales.`,
      location: "A-12 - Campus UPB",
      duration: 4,
      cost: 2100,
    },
    {
      id: 3,
      image: tour3,
      date: "12:15 - 14:15",
      title: "Certificacion React",
      info: `React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre. `,
      location: "Aula Prisma - Campus UPB",
      duration: 4,
      cost: 2100,
    },
    {
      id: 4,
      image: tour4,
      date: "19:30 - 21:30",
      title: "Algoritmica",
      info: ` El pensamiento algorítmico es la capacidad para realizar el proceso de abstracción, modelización de un problema, deducciones lógicas y síntesis de la solución que conduzca a escribir el algoritmo correcto`,
      location: "Virtual",
      duration: 4,
      cost: 2100,
    },
  ];