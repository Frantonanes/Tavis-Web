import jazzMusicLogo from '../assets/projects/Logo_jazz_music_oscuro.png'
import byChandanaLogo from '../assets/projects/Bychandana_isologo.jpeg'

export const whatsappNumber = '5491156152870'

export const webStyles = [
  {
    category: 'Negocios y profesionales',
    title: 'Web de servicios',
    text:
      'Ideal para profesionales, emprendimientos y negocios que necesitan explicar qué hacen, mostrar sus trabajos y recibir nuevas consultas.',
    features: [
      'Presentación clara del negocio',
      'Descripción de cada servicio',
      'Trabajos o proyectos realizados',
      'Opiniones de clientes',
      'Contacto directo por WhatsApp',
      'Preparación básica para Google'
    ],
    message:
      'Hola, vi el servicio de web para negocios y profesionales en Estudio Tavis. Quiero contarles sobre mi negocio y consultar qué tipo de página me conviene.'
  },
  {
    category: 'Presentación de productos',
    title: 'Catálogo digital',
    text:
      'Pensado para mostrar productos de manera organizada sin cobrar desde la web. El cliente puede verlos, conocer sus detalles y consultar por WhatsApp.',
    features: [
      'Productos organizados por categorías',
      'Buscador y filtros',
      'Fotos y descripción de cada producto',
      'Consultas o pedidos por WhatsApp',
      'Panel para administrar productos',
      'Diseño adaptado a celulares'
    ],
    message:
      'Hola, vi el servicio de catálogo digital en Estudio Tavis. Quiero mostrar mis productos y recibir consultas o pedidos por WhatsApp.'
  },
  {
    category: 'Venta online',
    title: 'E-commerce',
    text:
      'Una tienda online para que tus clientes puedan conocer los productos, agregarlos al carrito, pagar y completar su compra desde cualquier dispositivo.',
    features: [
      'Catálogo completo de productos',
      'Buscador, categorías y filtros',
      'Carrito de compras',
      'Integración con medios de pago',
      'Panel para administrar la tienda',
      'Seguimiento de pedidos'
    ],
    message:
      'Hola, vi el servicio de tienda e-commerce en Estudio Tavis. Quiero vender mis productos online y consultar cómo podríamos desarrollar la tienda.'
  },
  {
    category: 'Campañas y promociones',
    title: 'Landing page',
    text:
      'Una página breve y directa para promocionar un servicio, producto, evento o campaña y guiar a las personas hacia una acción concreta.',
    features: [
      'Presentación de una propuesta específica',
      'Diseño enfocado en conseguir consultas',
      'Información clara y ordenada',
      'Botones y llamadas a la acción',
      'Contacto, reserva o inscripción',
      'Adaptación a campañas publicitarias'
    ],
    message:
      'Hola, vi el servicio de landing page en Estudio Tavis. Quiero promocionar una propuesta específica y convertir las visitas en consultas.'
  },
  {
    category: 'Marca y portfolio',
    title: 'Web personal',
    text:
      'Un espacio profesional para presentar quién sos, contar tu experiencia, mostrar tus trabajos y reunir toda tu información en un mismo lugar.',
    features: [
      'Presentación personal o profesional',
      'Portfolio de trabajos',
      'Experiencia y habilidades',
      'Servicios ofrecidos',
      'Enlaces a redes y plataformas',
      'Formulario o contacto directo'
    ],
    message:
      'Hola, vi el servicio de web personal en Estudio Tavis. Quiero crear un espacio para presentar mi perfil y mostrar mis trabajos.'
  },
  {
    category: 'Soporte para sitios existentes',
    title: 'Mantenimiento web',
    text:
      'Para negocios que ya tienen una página y necesitan mantenerla actualizada, corregir problemas o realizar mejoras sin desarrollar una web nueva.',
    features: [
      'Actualización de textos e imágenes',
      'Carga de productos o contenidos',
      'Corrección de errores',
      'Mejoras visuales y funcionales',
      'Revisión del funcionamiento',
      'Soporte técnico'
    ],
    message:
      'Hola, vi el servicio de mantenimiento web en Estudio Tavis. Ya tengo una página y necesito consultar por algunas actualizaciones o mejoras.'
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
      'Tienda online de productos artesanales con catálogo, carrito de compras, filtros, pedidos por WhatsApp y panel de administración.',
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