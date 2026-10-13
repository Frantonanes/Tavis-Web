
import jazzMusicLogo from '../assets/projects/Logo_jazz_music_oscuro.png'
import futbolAnaliticoLogo from '../assets/projects/FutbolAnaliticoLogo.png'
import byChandanaLogo from '../assets/projects/Bychandana_isologo.jpeg'

import byChandanaPreview from '../assets/projects/bychandana-preview.png'
import jazzMusicPreview from '../assets/projects/jazzmusic-preview.png'

export const whatsappNumber = '5491156152870'

export function getWhatsappLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const webStyles = [
  {
    category: 'Vendé por internet',
    title: 'Tiendas online',
    text: 'Tu propia tienda para mostrar productos, recibir pedidos y administrar tus ventas.',
    features: [
      'Diseño adaptado a tu marca',
      'Catálogo con categorías y filtros',
      'Carrito de compras',
      'Integración con medios de pago',
      'Panel para administrar productos',
      'Diseño adaptable a celulares'
    ],
    message: 'Hola, quiero consultar por el desarrollo de una tienda online.'
  },
  {
    category: 'Mostrá tus productos',
    title: 'Catálogos digitales',
    text: 'Organizá tus productos en un solo lugar y facilitá las consultas por WhatsApp.',
    features: [
      'Categorías y filtros de productos',
      'Fichas individuales de productos',
      'Galerías de imágenes',
      'Consultas directas por WhatsApp',
      'Panel para administrar productos',
      'Diseño adaptable a celulares'
    ],
    message: 'Hola, quiero consultar por el desarrollo de un catálogo digital.'
  },
  {
    category: 'Presentá tu empresa',
    title: 'Webs institucionales',
    text: 'Mostrá quiénes son, qué hacen y cómo pueden contactarlos.',
    features: [
      'Presentación de la empresa',
      'Historia y valores de la marca',
      'Productos o áreas de actividad',
      'Información y medios de contacto',
      'Enlaces a redes sociales',
      'Optimización básica para buscadores'
    ],
    message: 'Hola, quiero consultar por el desarrollo de una web institucional.'
  },
  {
    category: 'Generá consultas',
    title: 'Webs de servicios',
    text: 'Presentá tus servicios de manera profesional y ayudá a tus clientes a encontrarte.',
    features: [
      'Presentación del negocio',
      'Páginas o secciones de servicios',
      'Galería de trabajos realizados',
      'Preguntas frecuentes',
      'Contacto directo por WhatsApp',
      'Optimización básica para buscadores'
    ],
    message: 'Hola, quiero consultar por el desarrollo de una web de servicios.'
  },
  {
    category: 'Una propuesta concreta',
    title: 'Landing pages',
    text: 'Una página enfocada en presentar una oferta, producto o servicio y motivar una acción.',
    features: [
      'Mensaje principal claro y atractivo',
      'Presentación de beneficios',
      'Secciones enfocadas en una oferta',
      'Botones de contacto destacados',
      'Formulario de consulta opcional',
      'Diseño adaptable a celulares'
    ],
    message: 'Hola, quiero consultar por el desarrollo de una landing page.'
  },
  {
    category: 'Mostrá tu trabajo',
    title: 'Webs personales y portfolios',
    text: 'Presentá tu experiencia, tus proyectos y tu identidad profesional en un solo lugar.',
    features: [
      'Presentación personal',
      'Portfolio de proyectos',
      'Experiencia y habilidades',
      'Enlaces a redes profesionales',
      'Formulario o medios de contacto',
      'Diseño adaptado a tu identidad'
    ],
    message: 'Hola, quiero consultar por el desarrollo de una web personal o portfolio.'
  }
]

// Se conservan los datos de proyectos y contacto sin cambios en esta etapa.

export const projects = [
  {
    name: 'ByChandana',
    type: 'Tienda online',
    featured: true,

    description:
      'Desarrollamos una tienda online para una marca de productos artesanales. Un espacio diseñado para representar su identidad, organizar sus creaciones y facilitar la experiencia de compra.',

    features: [
      'Catálogo de productos',
      'Carrito de compras',
      'Filtros y categorías',
      'Pedidos por WhatsApp',
      'Panel de administración',
      'Diseño responsive'
    ],

    url: 'https://bychandana.com',

    logo: byChandanaLogo,
    preview: byChandanaPreview,

    background: '#f4ece4',
    glow: 'rgba(181, 154, 106, 0.20)'
  },

  {
    name: 'Jazz Music',
    type: 'Catálogo digital',
    featured: true,

    description:
      'Creamos un catálogo digital para una tienda de instrumentos musicales de Avellaneda. Una web que permite explorar productos, conocer ofertas y realizar consultas de manera directa.',

    features: [
      'Catálogo de instrumentos',
      'Categorías de productos',
      'Buscador y filtros',
      'Productos en oferta',
      'Fichas de productos',
      'Contacto por WhatsApp'
    ],

    url: 'https://jazzmusicavellaneda.com',

    logo: jazzMusicLogo,
    preview: jazzMusicPreview,

    background: '#111111',
    glow: 'rgba(181, 154, 106, 0.24)'
  },

  {
    name: 'Fútbol Analítico',
    type: 'Portal deportivo',
    featured: false,

    description:
      'Portal deportivo con noticias, predicciones, buscador y panel de administración.',

    features: [
      'Portal de noticias',
      'Buscador de contenidos',
      'Panel de administración'
    ],

    url: 'https://futbolanalitico.com',

    logo: futbolAnaliticoLogo,
    preview: futbolAnaliticoLogo,

    background: '#071827',
    glow: 'rgba(24, 187, 209, 0.22)'
  }
]


export const contactOptions = [
  {
    title: 'Consultar por WhatsApp',
    text: 'La forma más rápida de contarme tu idea y descubrir qué tipo de web necesitás.',
    href: getWhatsappLink('Hola, quiero consultar por una página web para mi negocio.')
  },
  {
    title: 'Pedir presupuesto',
    text: 'Si ya tenés una idea más clara, podemos revisar el alcance, las secciones y los tiempos.',
    href: getWhatsappLink('Hola, quiero pedir un presupuesto para una página web.')
  },
  {
    title: 'Enviar referencias',
    text: 'Podés enviarme webs que te gusten, colores, logos o ejemplos visuales.',
    href: getWhatsappLink('Hola, quiero enviarte algunas referencias para mi página web.')
  }
]
