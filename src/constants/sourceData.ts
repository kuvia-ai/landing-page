import press_image_360dx from '../assets/images/press-images/press-image-360dx.jpg';
import press_image_harvard_hackathon from '../assets/images/press-images/press-image-harvard-hackathon.jpg';
import press_image_red_bull_basement from '../assets/images/press-images/press-image-red-bull-basement.jpg';
import press_image_cnn_press_arg from '../assets/images/press-images/press-image-cnn-press-arg.png';
import press_image_transformar_salud from '../assets/images/press-images/press-image-transformar-salud.jpg';
import press_image_talentoargen from '../assets/images/press-images/press-image-talentoargen.jpg';
import press_image_tn_arg from '../assets/images/press-images/press-image-tn-arg.jpeg';
import press_image_amz_on_air from '../assets/images/press-images/press-image-amz-on-air.jpeg';
import press_image_ministerio from '../assets/images/press-images/press-image-ministerio.jpeg';
import press_image_endeavor from '../assets/images/press-images/press-image-endeavor.jpeg';
import press_image_clarin_posadas from '../assets/images/press-images/press-image-clarin-posadas.jpeg';

import scientificImg1 from '../assets/images/press-images/scientific-asco.jpeg';

import award_redbull from '../assets/images/awards-images/award-redbull.jpeg';
import award_swiss_medical from '../assets/images/awards-images/award-swiss-medical.jpeg';
import award_harvard from '../assets/images/awards-images/award-harvard.png';
import award_transformar_salud from '../assets/images/awards-images/award-transformar-salud.jpeg';
import award_vercel from '../assets/images/awards-images/award-vercel.jpeg';
import award_nvidia from '../assets/images/awards-images/award-nvidia.jpeg';
import award_aws_pitch from '../assets/images/awards-images/award-aws-pitch.jpeg';
import award_ministerio from '../assets/images/awards-images/award-ministerio.png';

export type Language = 'en' | 'es';

type Localized = Record<Language, string>;

interface PressItem {
  description: Localized;
  URL: string;
  date: string;
  img: string;
  type: string;
  imagePosition?: string;
}

interface AwardItem {
  title: Localized;
  text: Localized;
  img: string;
  imagePosition?: string;
  imageFit?: string;
  imageScale?: number;
}

export const pressReleasesSource: PressItem[] = [
  {
    description: {
      en: 'Argentinian group uses AI-based digital pathology model to classify microsatellite instability.',
      es: 'Un grupo argentino usa un modelo de patología digital basado en IA para clasificar la inestabilidad de microsatélites.',
    },
    URL: 'https://www.360dx.com/cancer/argentinian-group-uses-ai-based-digital-pathology-model-classify-microsatellite-instability',
    date: 'June 4, 2024',
    img: press_image_360dx,
    type: 'Press Release',
  },
  {
    description: {
      en: 'Kuvia: the Argentine winners of the Harvard international competition, driving health innovation using AI.',
      es: 'Kuvia: los ganadores argentinos de la competencia internacional de Harvard, impulsando la innovación en salud con IA.',
    },
    URL: 'https://www.infobae.com/salud/2025/04/16/quienes-son-los-ganadores-argentinos-del-desafio-internacional-de-harvard-que-impulsa-la-innovacion-en-ia-para-la-salud/',
    date: 'April 16, 2025',
    img: press_image_harvard_hackathon,
    type: 'Press Release',
  },
  {
    description: {
      en: 'Red Bull Basement 2024: Kuvia revolutionizes healthcare with AI and travels to Tokyo to represent Argentina.',
      es: 'Red Bull Basement 2024: Kuvia revoluciona la salud con IA y viaja a Tokio para representar a Argentina.',
    },
    URL: 'https://www.infobae.com/malditos-nerds/2024/11/19/red-bull-basement-2024-dos-argentinas-revolucionan-la-salud-con-ia-y-viajan-a-tokio-para-representar-al-pais/',
    date: 'November 19, 2024',
    img: press_image_red_bull_basement,
    type: 'Press Release',
  },
  {
    description: {
      en: 'Kuvia on CNN Radio Argentina: sharing our vision for AI-driven healthcare innovation.',
      es: 'Kuvia en CNN Radio Argentina: compartiendo nuestra visión sobre la innovación en salud impulsada por IA.',
    },
    URL: 'https://radiocut.fm/audiocut/estudiantes-del-itba-crean-algoritmo-deteccion-temprana-cancer-colon/',
    date: 'December 13, 2024',
    img: press_image_cnn_press_arg,
    type: 'Press Release',
  },
  {
    description: {
      en: 'Transformar Salud 2025: celebrating our award showcasing the scalability of our AI tool to detect BRAF in pediatric tumors, in collaboration with Roche and Fundación Garrahan.',
      es: 'Transformar Salud 2025: celebramos nuestro premio que muestra la escalabilidad de nuestra herramienta de IA para detectar BRAF en tumores pediátricos, en colaboración con Roche y la Fundación Garrahan.',
    },
    URL: 'https://www.transformarsaludfundaciongarrahan.org/ganadores2025-2026',
    date: 'September 12, 2025',
    img: press_image_transformar_salud,
    type: 'Press Release',
  },
  {
    description: {
      en: 'Kuvia featured by Talento Argentino showcasing our mission to accelerate cancer diagnostics through artificial intelligence.',
      es: 'Kuvia destacada por Talento Argentino, mostrando nuestra misión de acelerar el diagnóstico del cáncer con inteligencia artificial.',
    },
    URL: 'https://x.com/Talentoargen/status/2052801011857699299?s=20',
    date: 'May 8, 2026',
    img: press_image_talentoargen,
    type: 'Press Release',
  },
  {
    description: {
      en: 'Kuvia featured on TN showcasing how AI can accelerate cancer biomarker detection and expand access to precision diagnostics.',
      es: 'Kuvia en TN, mostrando cómo la IA puede acelerar la detección de biomarcadores de cáncer y ampliar el acceso al diagnóstico de precisión.',
    },
    URL: 'https://drive.google.com/file/d/1VRrOIi9CA92nLcVn-LZ7aktBIfETJFL9/view?usp=sharing',
    date: 'May 17, 2026',
    img: press_image_tn_arg,
    type: 'Press Release',
  },
  {
    description: {
      en: 'Kuvia on the AWS On Air podcast sharing our experience developing and deploying AI solutions for cancer diagnostics.',
      es: 'Kuvia en el podcast AWS On Air, compartiendo nuestra experiencia desarrollando e implementando soluciones de IA para el diagnóstico del cáncer.',
    },
    URL: 'https://www.twitch.tv/videos/2767220737?filter=all&sort=time',
    date: 'May 8, 2026',
    img: press_image_amz_on_air,
    type: 'Press Release',
  },
  {
    description: {
      en: 'Kuvia’s founders Ana Gorodisch and Martina Belluomini were honored by Argentina’s Ministry of Health with an innovation in healthcare award, recognizing their work expanding access to precision oncology through artificial intelligence.',
      es: 'Las fundadoras de Kuvia, Ana Gorodisch y Martina Belluomini, fueron reconocidas por el Ministerio de Salud de Argentina con un premio a la innovación en salud, por su trabajo ampliando el acceso a la oncología de precisión a través de la inteligencia artificial.',
    },
    URL: 'https://x.com/mariolugones_ar/status/2062306176453284196?s=46',
    date: 'June 3, 2026',
    img: press_image_ministerio,
    type: 'Press Release',
    imagePosition: '50% 20%',
  },
  {
    description: {
      en: 'Kuvia’s CEO Ana Gorodisch took the stage at Endeavor Experience Buenos Aires, sharing the company’s journey and mission to expand access to precision cancer diagnostics through artificial intelligence.',
      es: 'La CEO de Kuvia, Ana Gorodisch, subió al escenario de Endeavor Experience Buenos Aires, compartiendo el recorrido de la empresa y su misión de ampliar el acceso al diagnóstico de cáncer de precisión a través de la inteligencia artificial.',
    },
    URL: 'https://www.youtube.com/watch?v=SLwtRnciEh8',
    date: 'June 11, 2026',
    img: press_image_endeavor,
    type: 'Press Release',
  },
  {
    description: {
      en: 'In Clarín, Kuvia shared its vision for AI in oncology and its collaboration with Hospital Posadas to advance precision cancer diagnostics in Argentina.',
      es: 'En Clarín, Kuvia compartió su visión sobre la IA en oncología y su colaboración con el Hospital Posadas para avanzar en el diagnóstico de cáncer de precisión en Argentina.',
    },
    URL: 'https://www.kiosco.clarin.com/zonal-oeste/20260618',
    date: 'June 18, 2026',
    img: press_image_clarin_posadas,
    type: 'Press Release',
    imagePosition: 'top',
  },
];

export const scientificPublicationsSource: PressItem[] = [
  {
    description: {
      en: 'Kuvia presents their work at ASCO 2024 poster session.',
      es: 'Kuvia presenta su trabajo en la sesión de pósters de ASCO 2024.',
    },
    URL: 'https://doi.org/10.1200/JCO.2024.42.16_suppl.11152',
    date: 'May 29, 2024',
    img: scientificImg1,
    type: 'Scientific Publication',
    imagePosition: '50% 70%',
  },
];

export const awardsRecognitionsSource: AwardItem[] = [
  {
    title: {
      en: 'Innovation in Healthcare Award',
      es: 'Premio a la Innovación en Salud',
    },
    text: {
      en: 'Kuvia was awarded the Innovation in Healthcare Award by Argentina’s Ministry of Health.',
      es: 'Kuvia recibió el Premio a la Innovación en Salud otorgado por el Ministerio de Salud de Argentina.',
    },
    img: award_ministerio,
  },
  {
    title: {
      en: 'AWS AI Pitch Competition',
      es: 'AWS AI Pitch Competition',
    },
    text: {
      en: 'Kuvia got 2nd place at the AWS AI pitch competition at NVIDIA GTC 2026.',
      es: 'Kuvia obtuvo el 2.º puesto en la AWS AI Pitch Competition en NVIDIA GTC 2026.',
    },
    img: award_aws_pitch,
    imagePosition: '50% 75%',
  },
  {
    title: {
      en: 'NVIDIA Inception Program',
      es: 'NVIDIA Inception Program',
    },
    text: {
      en: 'Kuvia is a member of NVIDIA Inception.',
      es: 'Kuvia es miembro de NVIDIA Inception.',
    },
    img: award_nvidia,
  },
  {
    title: {
      en: 'Vercel AI Accelerator',
      es: 'Vercel AI Accelerator',
    },
    text: {
      en: 'Kuvia was selected to join the Vercel AI Accelerator 2026.',
      es: 'Kuvia fue seleccionada para unirse al Vercel AI Accelerator 2026.',
    },
    img: award_vercel,
    imagePosition: '50% 25%',
  },
  {
    title: {
      en: 'Transformar Salud',
      es: 'Transformar Salud',
    },
    text: {
      en: 'In collaboration with Hospital Garrahan we were awarded the 2025 Transformar Salud initiative.',
      es: 'En colaboración con el Hospital Garrahan, fuimos premiados en la iniciativa Transformar Salud 2025.',
    },
    img: award_transformar_salud,
    imageFit: 'contain',
    imageScale: 0.7,
  },
  {
    title: {
      en: 'Harvard Health System Innovation Lab',
      es: 'Harvard Health System Innovation Lab',
    },
    text: {
      en: 'Selected as a Top Pick in the Harvard HSIL Venture Building Program.',
      es: 'Seleccionada como Top Pick en el Harvard HSIL Venture Building Program.',
    },
    img: award_harvard,
  },
  {
    title: {
      en: 'Hackathon Swiss Medical',
      es: 'Hackathon Swiss Medical',
    },
    text: {
      en: 'Winners of the Swiss Medical Hackathon 2025.',
      es: 'Ganadoras del Swiss Medical Hackathon 2025.',
    },
    img: award_swiss_medical,
  },
  {
    title: {
      en: 'Red Bull Basement',
      es: 'Red Bull Basement',
    },
    text: {
      en: 'National winners of Red Bull Basement Argentina 2024 and global finalists in Tokyo, Japan.',
      es: 'Ganadoras nacionales de Red Bull Basement Argentina 2024 y finalistas globales en Tokio, Japón.',
    },
    img: award_redbull,
  },
];
