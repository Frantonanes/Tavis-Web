import jazzMusicLogo from '../assets/projects/Logo_jazz_music_oscuro.png'
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
    category: 'Campañas y promociones',
    title: 'Landing page',
    text:
      'Una página enfocada en presentar una propuesta concreta y convertir visitas en consultas, reservas o ventas.',
    features: [
      'Diseño enfocado en conversiones',
      'Presentación clara de la propuesta',
      'Llamadas a la acción',
      'Contacto directo por WhatsApp',
      'Adaptación a celulares',
      'Optimización básica para buscadores'
    ],
    message:
      'Hola, quiero consultar por el desarrollo de una landing page.'
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
  },
  {
    category: 'Soporte para tu sitio',
    title: 'Mantenimiento web',
    text:
      'Un servicio para mantener tu página actualizada, funcionando correctamente y acompañar los cambios que necesite tu negocio.',
    features: [
      'Actualización de contenidos',
      'Corrección de errores',
      'Cambios en textos e imágenes',
      'Mejoras de funcionamiento',
      'Revisión general del sitio',
      'Soporte técnico'
    ],
    message:
      'Hola, quiero consultar por el servicio de mantenimiento web.'
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
    name: 'ByChandana',
    description:
      'Tienda online de libros con catálogo, carrito de compras, filtros, pedidos por WhatsApp y panel de administración.',
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