import jazzMusicLogo from '../assets/projects/Logo_jazz_music_oscuro.png'
import futbolAnaliticoLogo from '../assets/projects/FutbolAnaliticoLogo.png'
import byChandanaLogo from '../assets/projects/Bychandana_isologo.jpeg'

export const whatsappNumber = '5491156152870'

export const webStyles = [
  {
    category: 'Venta online',
    title: 'E-commerce',
    text:
      'Una tienda online completa para mostrar tus productos, recibir pedidos y vender directamente desde tu web.',
    features: [
      'Diseño adaptado a tu marca',
      'Catálogo de productos',
      'Carrito de compras',
      'Integración con medios de pago',
      'Panel para gestionar productos',
      'Diseño adaptable a celulares'
    ],
    message:
      'Hola, quiero consultar por el desarrollo de una tienda e-commerce.'
  },
  {
    category: 'Presentación de productos',
    title: 'Catálogo digital',
    text:
      'Una web organizada para presentar tus productos y facilitar que los clientes consulten mediante WhatsApp.',
    features: [
      'Categorías y filtros',
      'Ficha individual de cada producto',
      'Galería de imágenes',
      'Consultas por WhatsApp',
      'Panel para administrar productos',
      'Diseño adaptable a celulares'
    ],
    message:
      'Hola, quiero consultar por el desarrollo de un catálogo digital.'
  },
  {
    category: 'Negocios y profesionales',
    title: 'Web de servicios',
    text:
      'Una página profesional para explicar lo que hacés, generar confianza y transformar visitas en consultas.',
    features: [
      'Presentación del negocio',
      'Sección de servicios',
      'Trabajos o casos realizados',
      'Testimonios de clientes',
      'Contacto directo por WhatsApp',
      'Optimización básica para buscadores'
    ],
    message:
      'Hola, quiero consultar por el desarrollo de una web de servicios.'
  },
  {
    category: 'Marca personal',
    title: 'Web personal',
    text:
      'Un espacio propio para presentar quién sos, mostrar tu experiencia y reunir tus trabajos en un mismo lugar.',
    features: [
      'Presentación personal',
      'Portfolio de proyectos',
      'Experiencia y habilidades',
      'Enlaces a redes profesionales',
      'Formulario o medios de contacto',
      'Diseño adaptado a tu identidad'
    ],
    message:
      'Hola, quiero consultar por el desarrollo de una web personal.'
  }
]

export const projects = [
  {
    name: 'Jazz Music',
    description:
      'Catálogo web para una tienda de instrumentos, con productos, ofertas y contacto directo por WhatsApp.',
    url: 'https://jazzmusicavellaneda.com',
    logo: jazzMusicLogo,
    background: '#111111',
    glow: 'rgba(181, 154, 106, 0.24)'
  },
  {
    name: 'Fútbol Analítico',
    description:
      'Portal deportivo con noticias, predicciones, buscador y panel de administración.',
    url: 'https://futbolanalitico.com',
    logo: futbolAnaliticoLogo,
    background: '#071827',
    glow: 'rgba(24, 187, 209, 0.22)'
  },
  {
    name: 'ByChandana',
    description:
      'Web institucional para una marca con dominio propio y presencia profesional.',
    url: 'https://bychandana.com',
    logo: byChandanaLogo,
    background: '#f4ece4',
    glow: 'rgba(181, 154, 106, 0.2)'
  }
]

export const contactOptions = [
  {
    title: 'Consultar por WhatsApp',
    text:
      'La forma más rápida de contarme tu idea y descubrir qué tipo de web necesitás.',
    href: getWhatsappLink(
      'Hola, quiero consultar por una página web para mi negocio.'
    )
  },
  {
    title: 'Pedir presupuesto',
    text:
      'Si ya tenés una idea más clara, podemos revisar el alcance, las secciones y los tiempos.',
    href: getWhatsappLink(
      'Hola, quiero pedir un presupuesto para una página web.'
    )
  },
  {
    title: 'Enviar referencias',
    text:
      'Podés enviarme webs que te gusten, colores, logos o ejemplos visuales.',
    href: getWhatsappLink(
      'Hola, quiero enviarte algunas referencias para mi página web.'
    )
  }
]

export function getWhatsappLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}