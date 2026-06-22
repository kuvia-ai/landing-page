import React from 'react';

export type Language = 'en' | 'es';

type Dict = Record<string, React.ReactNode>;

export const translations: Record<Language, Dict> = {
  en: {
    // Navbar
    'nav.what-we-do': 'What We Do',
    'nav.why-kuvia': 'Why Kuvia',
    'nav.product': 'Product',
    'nav.about-us': 'About Us',
    'nav.contact-us': 'Contact Us',

    // Buttons
    'button.contactUs': 'Contact Us',
    'button.moreInfo': 'More info',

    // Hero
    'hero.title': (
      <>
        Redefining diagnostics,
        <br /> unlocking precision
        <br /> medicine with AI
      </>
    ),
    'hero.readMore': 'Read More',

    // What we do
    'whatWeDo.title': 'What we do',
    'whatWeDo.description': (
      <>
        At Kuvia, our mission is to harness the power of artificial intelligence
        (AI) to transform cancer diagnostics,{' '}
        <b>enabling faster and accessible</b> <b>biomarker detection</b> for
        better patient outcomes.
      </>
    ),
    'whatWeDo.item1.title': 'Why does biomarker detection matter?',
    'whatWeDo.item1.desc': (
      <p>
        When a patient is diagnosed with cancer, identifying specific biological
        markers in the tumor allows doctors to categorize the disease more
        precisely and match patients with the most effective, targeted
        treatments. This step, known as biomarker detection, is essential, as
        patients can benefit from therapies that can significantly increase
        their chances of survival.
      </p>
    ),
    'whatWeDo.item2.title':
      'What are the challenges in current biomarker detection?',
    'whatWeDo.item2.desc': (
      <p>
        Current testing methods are <b>slow</b>, <b>costly</b>, and out of reach
        for many clinics due to the need for specialized infrastructure,
        resulting in <b>low accessibility</b>, especially in underserved
        regions.
      </p>
    ),
    'whatWeDo.item3.title': 'What are the effects of limited access?',
    'whatWeDo.item3.desc': (
      <p>
        <b>Delayed diagnostics. Suboptimal treatments. Avoidable outcomes.</b>
        <br />
        <br /> Without timely access to biomarker testing, patients frequently
        receive standard treatments that may not align with their tumor’s
        biology. This one-size-fits-all approach reduces the likelihood of
        treatment success and can ultimately impact survival.
      </p>
    ),

    // Why Kuvia
    'whyKuvia.title': 'Why Kuvia?',
    'whyKuvia.description': (
      <>
        Kuvia is helping lead a new wave of healthtech innovation, using AI to
        detect biomarkers directly from digitized tissue images{' '}
        <b>in just 5 minutes</b>. While designed for scalability worldwide,
        Kuvia is actively driving this transformation in Latin America, making
        precision medicine <b>faster</b> and more <b>accessible</b>.
      </>
    ),
    'whyKuvia.item1': 'Enhances accessibility',
    'whyKuvia.item2': 'Reduces time to diagnosis',
    'whyKuvia.item3': 'Reduces costs',
    'whyKuvia.item4': 'Empowers clinical decision-making',

    // Product - how it works
    'product.howItWorks': 'How it works',
    'product.step1.title': 'Biopsy Collection',
    'product.step1.text': 'Histological tissue sample is obtained from biopsy.',
    'product.step2.title': 'Tissue Digitization',
    'product.step2.text':
      'The tissue slide is digitized into a Whole Slide Image (WSI).',
    'product.step3.title': 'AI Analysis',
    'product.step3.text': 'Advanced AI technology instantly analyzes the image.',
    'product.step4.title': 'Instant Results',
    'product.step4.text': 'Immediate biomarker status prediction.',
    'product.step5.title': 'Targeted Therapy',
    'product.step5.text': 'Optimal treatment selection for patients.',

    // Product - our product
    'product.ourProduct': (
      <>
        Our
        <br />
        Product
      </>
    ),
    'product.footer.ourProduct': 'Our product',
    'product.slide1': (
      <span>
        <b>Kuvia-MSI</b> is an AI-powered software for detecting{' '}
        <b>Microsatellite Instability (MSI)</b> in colorectal and endometrial
        cancer.
      </span>
    ),
    'product.slide2': (
      <span>
        MSI is a key biomarker across solid tumors, as its presence indicates
        that a patient is likely to benefit from immunotherapy. Detecting MSI
        can guide access to life-extending treatments that would otherwise be
        missed.
      </span>
    ),
    'product.clinicalContext': 'Clinical context for MSI',
    'product.tag1.title': '#2 & #3',
    'product.tag1.text':
      'In 2023, colorectal cancer was the world’s second leading cause of cancer-related deaths and the third most frequently diagnosed cancer.',
    'product.tag2.title': 'MSI Rates',
    'product.tag2.text':
      'Approximately 10–15% of colorectal cancers, and 20% to 30% of endometrial carcinomas exhibit high microsatellite instability (MSI-H) or are mismatch repair deficient (dMMR), with higher rates observed in early-stage tumors.',
    'product.tag3.title': '#6',
    'product.tag3.text':
      'Endometrial cancer is the sixth most common cancer among women worldwide, with over 420,000 new cases reported in 2022.',

    // Product - BRAF / Garrahan
    'product.braf.title': (
      <>
        Collaboration with
        <br />
        Hospital Garrahan
      </>
    ),
    'product.braf.body': (
      <>
        <span>
          Together with Hospital Garrahan, we were awarded the{' '}
          <b>Transformar Salud</b> initiative to develop AI for detecting the{' '}
          <b>BRAF V600E mutation</b> in pediatric cancers.
        </span>
        <br />
        <br />
        <span>
          By bringing molecular profiling into routine pathology, we aim to
          accelerate diagnosis and improve treatment selection for pediatric
          patients.
        </span>
      </>
    ),
    'product.braf.tag1.title': 'AI for Multiple Indications',
    'product.braf.tag1.text':
      'Our BRAF V600E AI model is being developed for central nervous system tumors, histiocytosis, thyroid cancer, and melanocytic lesions, where this biomarker plays a critical role in treatment selection and disease management.',
    'product.braf.tag2.title': 'BRAF V600E Rates',
    'product.braf.tag2.text':
      'Approximately 50–60% of pediatric low-grade gliomas, 40–60% of Langerhans cell histiocytosis, 40–60% of papillary thyroid carcinomas, and 40–50% of melanocytic lesions harbor the BRAF V600E mutation.',

    // Product - scalability
    'product.scalability.title': 'Scalability',
    'product.scalability.body': (
      <>
        We have developed a <b>scalable AI architecture</b> with the potential
        to be applied across a wide range of biomarkers and cancer types. Our
        current efforts are focused on expanding the platform beyond MSI, aiming
        to enable broader applications in precision medicine and accelerate
        access to personalized treatments.
      </>
    ),

    // About us / Newsroom
    'aboutUs.newsroom': 'Newsroom',
    'aboutUs.pressRelease': 'Press Release',
    'aboutUs.scientificPublications': 'Scientific Publications',
    'aboutUs.awards': 'Awards & Recognitions',
    'aboutUs.team': 'Team',
    'tag.pressRelease': 'Press Release',
    'tag.scientificPublication': 'Scientific Publication',
    'role.ceo': 'CEO & Co-Founder',
    'role.cto': 'CTO & Co-Founder',
    'role.aiEngineer': 'Senior AI Engineer',

    // Contact us
    'contact.title': 'Get in Touch',
    'contact.description': (
      <>
        Have any questions or need more information about our services? <br />{' '}
        Please fill out the form below, and we'll get back to you as soon as
        possible.
      </>
    ),
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.namePlaceholder': 'Your name',
    'contact.emailPlaceholder': 'Your email',
    'contact.messageDefault': 'Hi! I would like to know more about …',
    'contact.send': 'Send',
    'contact.sending': 'Sending...',
    'contact.sentTitle': 'Message sent successfully!',
    'contact.sentBody': (
      <>
        Thanks for getting in touch! We’ve received your message and will get
        back to you as soon as we can.
      </>
    ),
    'contact.error': 'Failed to send message, please try again later.',
  },

  es: {
    // Navbar
    'nav.what-we-do': 'Qué Hacemos',
    'nav.why-kuvia': 'Por Qué Kuvia',
    'nav.product': 'Producto',
    'nav.about-us': 'Nosotros',
    'nav.contact-us': 'Contacto',

    // Buttons
    'button.contactUs': 'Contactanos',
    'button.moreInfo': 'Más info',

    // Hero
    'hero.title': (
      <>
        Redefiniendo el diagnóstico,
        <br /> abriendo la medicina
        <br /> de precisión con IA
      </>
    ),
    'hero.readMore': 'Leer más',

    // What we do
    'whatWeDo.title': 'Qué hacemos',
    'whatWeDo.description': (
      <>
        En Kuvia, nuestra misión es aprovechar el poder de la inteligencia
        artificial (IA) para transformar el diagnóstico del cáncer,{' '}
        <b>permitiendo una detección de biomarcadores más rápida y accesible</b>{' '}
        para mejores resultados en los pacientes.
      </>
    ),
    'whatWeDo.item1.title': '¿Por qué importa la detección de biomarcadores?',
    'whatWeDo.item1.desc': (
      <p>
        Cuando a un paciente se le diagnostica cáncer, identificar marcadores
        biológicos específicos en el tumor permite a los médicos categorizar la
        enfermedad con mayor precisión y asignar a cada paciente los
        tratamientos dirigidos más efectivos. Este paso, conocido como detección
        de biomarcadores, es esencial, ya que los pacientes pueden beneficiarse
        de terapias que aumentan significativamente sus posibilidades de
        supervivencia.
      </p>
    ),
    'whatWeDo.item2.title':
      '¿Cuáles son los desafíos de la detección de biomarcadores actual?',
    'whatWeDo.item2.desc': (
      <p>
        Los métodos de análisis actuales son <b>lentos</b>, <b>costosos</b> y
        están fuera del alcance de muchas clínicas por la necesidad de
        infraestructura especializada, lo que resulta en una{' '}
        <b>baja accesibilidad</b>, especialmente en regiones desatendidas.
      </p>
    ),
    'whatWeDo.item3.title': '¿Cuáles son los efectos del acceso limitado?',
    'whatWeDo.item3.desc': (
      <p>
        <b>
          Diagnósticos demorados. Tratamientos subóptimos. Desenlaces evitables.
        </b>
        <br />
        <br /> Sin acceso a tiempo a los análisis de biomarcadores, los
        pacientes suelen recibir tratamientos estándar que pueden no alinearse
        con la biología de su tumor. Este enfoque único para todos reduce las
        probabilidades de éxito del tratamiento y, en última instancia, puede
        afectar la supervivencia.
      </p>
    ),

    // Why Kuvia
    'whyKuvia.title': '¿Por qué Kuvia?',
    'whyKuvia.description': (
      <>
        Kuvia está ayudando a liderar una nueva ola de innovación en healthtech,
        usando IA para detectar biomarcadores directamente desde imágenes
        digitalizadas de tejido <b>en solo 5 minutos</b>. Diseñada para escalar
        a nivel mundial, Kuvia impulsa activamente esta transformación en
        América Latina, haciendo que la medicina de precisión sea{' '}
        <b>más rápida</b> y <b>accesible</b>.
      </>
    ),
    'whyKuvia.item1': 'Mejora la accesibilidad',
    'whyKuvia.item2': 'Reduce el tiempo de diagnóstico',
    'whyKuvia.item3': 'Reduce costos',
    'whyKuvia.item4': 'Potencia la toma de decisiones clínicas',

    // Product - how it works
    'product.howItWorks': 'Cómo funciona',
    'product.step1.title': 'Toma de biopsia',
    'product.step1.text':
      'Se obtiene una muestra de tejido histológico a partir de una biopsia.',
    'product.step2.title': 'Digitalización del tejido',
    'product.step2.text':
      'El preparado de tejido se digitaliza en una imagen de portaobjetos completo (WSI).',
    'product.step3.title': 'Análisis con IA',
    'product.step3.text':
      'Tecnología de IA avanzada analiza la imagen al instante.',
    'product.step4.title': 'Resultados instantáneos',
    'product.step4.text': 'Predicción inmediata del estado del biomarcador.',
    'product.step5.title': 'Terapia dirigida',
    'product.step5.text':
      'Selección del tratamiento óptimo para los pacientes.',

    // Product - our product
    'product.ourProduct': (
      <>
        Nuestro
        <br />
        Producto
      </>
    ),
    'product.footer.ourProduct': 'Nuestro producto',
    'product.slide1': (
      <span>
        <b>Kuvia-MSI</b> es un software impulsado por IA para detectar{' '}
        <b>inestabilidad de microsatélites (MSI)</b> en cáncer colorrectal y de
        endometrio.
      </span>
    ),
    'product.slide2': (
      <span>
        La MSI es un biomarcador clave en tumores sólidos, ya que su presencia
        indica que un paciente probablemente se beneficie de la inmunoterapia.
        Detectar la MSI puede guiar el acceso a tratamientos que prolongan la
        vida y que de otro modo se pasarían por alto.
      </span>
    ),
    'product.clinicalContext': 'Contexto clínico de la MSI',
    'product.tag1.title': '#2 & #3',
    'product.tag1.text':
      'En 2023, el cáncer colorrectal fue la segunda causa de muertes relacionadas con el cáncer en el mundo y el tercer cáncer más diagnosticado.',
    'product.tag2.title': 'Tasas de MSI',
    'product.tag2.text':
      'Aproximadamente el 10–15% de los cánceres colorrectales y el 20% a 30% de los carcinomas de endometrio presentan alta inestabilidad de microsatélites (MSI-H) o deficiencia en la reparación de errores de apareamiento (dMMR), con tasas más altas en tumores en etapa temprana.',
    'product.tag3.title': '#6',
    'product.tag3.text':
      'El cáncer de endometrio es el sexto cáncer más común entre las mujeres a nivel mundial, con más de 420.000 casos nuevos reportados en 2022.',

    // Product - BRAF / Garrahan
    'product.braf.title': (
      <>
        Colaboración con
        <br />
        Hospital Garrahan
      </>
    ),
    'product.braf.body': (
      <>
        <span>
          Junto al Hospital Garrahan, fuimos premiados en la iniciativa{' '}
          <b>Transformar Salud</b> para desarrollar IA que detecte la{' '}
          <b>mutación BRAF V600E</b> en cánceres pediátricos.
        </span>
        <br />
        <br />
        <span>
          Al incorporar el perfilado molecular a la patología de rutina,
          buscamos acelerar el diagnóstico y mejorar la selección de
          tratamientos para pacientes pediátricos.
        </span>
      </>
    ),
    'product.braf.tag1.title': 'IA para múltiples indicaciones',
    'product.braf.tag1.text':
      'Nuestro modelo de IA para BRAF V600E se está desarrollando para tumores del sistema nervioso central, histiocitosis, cáncer de tiroides y lesiones melanocíticas, donde este biomarcador cumple un rol clave en la selección del tratamiento y el manejo de la enfermedad.',
    'product.braf.tag2.title': 'Tasas de BRAF V600E',
    'product.braf.tag2.text':
      'Aproximadamente el 50–60% de los gliomas pediátricos de bajo grado, el 40–60% de las histiocitosis de células de Langerhans, el 40–60% de los carcinomas papilares de tiroides y el 40–50% de las lesiones melanocíticas presentan la mutación BRAF V600E.',

    // Product - scalability
    'product.scalability.title': 'Escalabilidad',
    'product.scalability.body': (
      <>
        Desarrollamos una <b>arquitectura de IA escalable</b> con el potencial
        de aplicarse a una amplia gama de biomarcadores y tipos de cáncer.
        Nuestros esfuerzos actuales se centran en expandir la plataforma más
        allá de la MSI, con el objetivo de habilitar aplicaciones más amplias en
        medicina de precisión y acelerar el acceso a tratamientos
        personalizados.
      </>
    ),

    // About us / Newsroom
    'aboutUs.newsroom': 'Novedades',
    'aboutUs.pressRelease': 'Prensa',
    'aboutUs.scientificPublications': 'Publicaciones científicas',
    'aboutUs.awards': 'Premios y reconocimientos',
    'aboutUs.team': 'Equipo',
    'tag.pressRelease': 'Prensa',
    'tag.scientificPublication': 'Publicación científica',
    'role.ceo': 'CEO y Cofundadora',
    'role.cto': 'CTO y Cofundadora',
    'role.aiEngineer': 'Ingeniero de IA Senior',

    // Contact us
    'contact.title': 'Ponete en contacto',
    'contact.description': (
      <>
        ¿Tenés alguna pregunta o necesitás más información sobre nuestros
        servicios? <br /> Completá el formulario y te responderemos lo antes
        posible.
      </>
    ),
    'contact.name': 'Nombre',
    'contact.email': 'Email',
    'contact.message': 'Mensaje',
    'contact.namePlaceholder': 'Tu nombre',
    'contact.emailPlaceholder': 'Tu email',
    'contact.messageDefault': '¡Hola! Me gustaría saber más sobre …',
    'contact.send': 'Enviar',
    'contact.sending': 'Enviando...',
    'contact.sentTitle': '¡Mensaje enviado con éxito!',
    'contact.sentBody': (
      <>
        ¡Gracias por escribirnos! Recibimos tu mensaje y te responderemos a la
        brevedad.
      </>
    ),
    'contact.error':
      'No se pudo enviar el mensaje, intentá de nuevo más tarde.',
  },
};
