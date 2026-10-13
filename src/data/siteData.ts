
import jazzMusicLogo from '../assets/projects/Logo_jazz_music_oscuro.png'
import futbolAnaliticoLogo from '../assets/projects/FutbolAnaliticoLogo.png'
import byChandanaLogo from '../assets/projects/Bychandana_isologo.jpeg'

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
    name: 'Jazz Music',
    description: 'Catálogo web para una tienda de instrumentos, con productos, ofertas y contacto directo por WhatsApp.',
    url: 'https://jazzmusicavellaneda.com',
    logo: jazzMusicLogo,
    background: '#111111',
    glow: 'rgba(181, 154, 106, 0.24)'
  },
  {
    name: 'Fútbol Analítico',
    description: 'Portal deportivo con noticias, predicciones, buscador y panel de administración.',
    url: 'https://futbolanalitico.com',
    logo: futbolAnaliticoLogo,
    background: '#071827',
    glow: 'rgba(24, 187, 209, 0.22)'
  },
  {
    name: 'ByChandana',
    description: 'Web institucional para una marca con dominio propio y presencia profesional.',
    url: 'https://bychandana.com',
    logo: byChandanaLogo,
    background: '#f4ece4',
    glow: 'rgba(181, 154, 106, 0.2)'
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
