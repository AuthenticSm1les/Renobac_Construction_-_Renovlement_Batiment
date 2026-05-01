const companyInfo = {
  name: "Renobac Construction & Rénovlement Bâtiment",
  phone: "+213 560 32 62 77",
  email: "renobac1998@gmail.com",
  address: "Rue Shaboot Boualam, Alger, Algérie",
  experience: "25+ ans d'expérience"
};

const team = [
  {
    name: "Abdnour Merdas",
    role: "PDG / CEO",
    initials: "AM",
    photo: "https://ui-avatars.com/api/?name=Abdnour+Merdas&background=C8862A&color=fff&size=200",
    bio: "Fondateur de Renobac, Abdnour dirige l'entreprise avec plus de 25 ans d'expérience dans le bâtiment et la rénovation. Il a bâti Renobac sur des valeurs de qualité, de confiance et d'excellence."
  },
  {
    name: "Issam Merdas",
    role: "Directeur Technique",
    initials: "IM",
    photo: "assets/IssamMerdas.jpg",
    bio: "Directeur Technique de Renobac, Issam supervise tous les chantiers et garantit le respect des normes de construction. Son expertise technique assure la réussite de chaque projet."
  },
  {
    name: "Zaki Merdas",
    role: "Chauffeur ",
    initials: "ZM",
    photo: "https://ui-avatars.com/api/?name=Zaki+Merdas&background=C8862A&color=fff&size=200",
    bio: "un chauffeur professionnel et rapide qui assure la logistique de nos chantiers. Zaki est un pilier de notre équipe, garantissant que les matériaux et les équipes arrivent à temps sur les sites."
  },
	{
    name: "Khidarlamine Hamdi",
    role: "Chef Programmeur",
    initials: "KH",
    photo: "https://ui-avatars.com/api/?name=Khidarlamine+Hamdi&background=C8862A&color=fff&size=200",
    bio: "Chef Programmeur, Khidarlamine Hamdi est originaire de Laghouat et a étudié à l'Université Innopolis. Il supervise les solutions numériques et l'infrastructure informatique de Renobac."
  },
  {
    name: "Amina Kaci",
    role: "Architecte Senior",
    initials: "AK",
    photo: "https://ui-avatars.com/api/?name=Amina+Kaci&background=C8862A&color=fff&size=200",
    bio: "Spécialisée en architecture bioclimatique, Amina conçoit des espaces à la fois esthétiques et énergétiquement efficaces. Elle a réalisé plus de 40 projets résidentiels haut de gamme."
  },
  {
    name: "Rachid Belkacem",
    role: "Architecte Senior",
    initials: "RB",
    photo: "https://ui-avatars.com/api/?name=Rachid+Belkacem&background=C8862A&color=fff&size=200",
    bio: "Passionné par le patrimoine bâti, Rachid dirige nos projets de rénovation de façades et de monuments historiques. Son expertise en restauration est reconnue en Algérie."
  },
  {
    name: "Nadia Terki",
    role: "Chef de Projet",
    initials: "NT",
    photo: "https://ui-avatars.com/api/?name=Nadia+Terki&background=C8862A&color=fff&size=200",
    bio: "Nadia coordonne les chantiers de construction neuve, de la planification à la livraison. Elle est certifiée en gestion de projet PMP et maîtrise les délais serrés."
  },
  {
    name: "Mohamed Salah",
    role: "Chef de Projet",
    initials: "MS",
    photo: "https://ui-avatars.com/api/?name=Mohamed+Salah&background=C8862A&color=fff&size=200",
    bio: "Mohamed gère nos projets de rénovation intérieure, en liaison directe avec les clients particuliers. Son sens du détail garantit une finition impeccable."
  },
  {
    name: "Youcef Maache",
    role: "Ingénieur Génie Civil",
    initials: "YM",
    photo: "https://ui-avatars.com/api/?name=Youcef+Maache&background=C8862A&color=fff&size=200",
    bio: "Youcef calcule les structures et assure la solidité de tous nos ouvrages. Il supervise les tests de matériaux et la conformité aux normes sismiques."
  },
  {
    name: "Leila Zerrouki",
    role: "Responsable Commercial",
    initials: "LZ",
    photo: "https://ui-avatars.com/api/?name=Leila+Zerrouki&background=C8862A&color=fff&size=200",
    bio: "Leila accompagne les clients dans le choix de leurs prestations et établit les devis personnalisés. Elle est la référente pour tous les nouveaux dossiers."
  }
];

const projects = [
  {
    id: "proj1",
    name: "Hôtel Safir Alger",
    category: "Commercial",
    categories: ["Construction", "Commercial"],
    location: "Alger",
    year: 2023,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
    description: "Construction et aménagement complet de l'Hôtel Safir à Alger, comprenant 120 chambres, espaces de réception et restaurant.",
    surface: "8500m²",
    duration: "18 mois",
    client: "Groupe Hôtelier"
  },
  {
    id: "proj2",
    name: "Dar Atika",
    category: "Résidentiel",
    categories: ["Rénovation", "Résidentiel"],
    location: "Alger",
    year: 2022,
    image: "https://images.unsplash.com/photo-1518782779855-1d4e2858dff6?w=600&h=400&fit=crop",
    description: "Rénovation complète de la structure Dar Atika, préservation du patrimoine architectural avec modernisation des installations.",
    surface: "1200m²",
    duration: "10 mois",
    client: "Entreprise"
  },
  {
    id: "proj3",
    name: "La Kasba",
    category: "Résidentiel",
    categories: ["Rénovation", "Résidentiel"],
    location: "Alger",
    year: 2023,
    image: "https://images.unsplash.com/photo-1545558010-3c051d6f3c5a?w=600&h=400&fit=crop",
    description: "Rénovation et restauration d'un bâtiment traditionnel à La Casbah, intégration de confort moderne tout en respectant l'architecture d'origine.",
    surface: "800m²",
    duration: "8 mois",
    client: "Particulier"
  },
  {
    id: "proj4",
    name: "Monument des Martyrs",
    category: "Commercial",
    categories: ["Rénovation", "Commercial"],
    location: "Alger",
    year: 2021,
    image: "https://images.unsplash.com/photo-1584464491033-066a4bf3ea4?w=600&h=400&fit=crop",
    description: "Travaux de restauration et d'entretien du Monument des Martyrs, un projet d'envergure nationale nécessitant une expertise technique rigoureuse.",
    surface: "3000m²",
    duration: "12 mois",
    client: "État"
  },
  {
    id: "proj5",
    name: "Villa Séhawla 4 Étages",
    category: "Résidentiel",
    categories: ["Construction", "Résidentiel"],
    location: "Séhawla",
    year: 2024,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
    description: "Construction d'une villa de standing de 4 étages avec finitions haut de gamme, système de domotique et sécurité intégrée.",
    surface: "480m²",
    duration: "14 mois",
    client: "Particulier"
  },
  {
    id: "proj6",
    name: "Villa Les Palmiers Maritimes 4 Étages",
    category: "Résidentiel",
    categories: ["Construction", "Résidentiel"],
    location: "Les Palmiers, Alger",
    year: 2024,
    image: "https://images.unsplash.com/photo-1600596542815-ffad1c34cd59?w=600&h=400&fit=crop",
    description: "Villa de luxe de 4 étages dans le quartier des Palmiers Maritimes, avec vue mer, piscine et aménagement paysager complet.",
    surface: "520m²",
    duration: "15 mois",
    client: "Particulier"
  },
  {
    id: "proj7",
    name: "Villa Delis Bomerdas 2 Étages + Piscine",
    category: "Résidentiel",
    categories: ["Construction", "Résidentiel"],
    location: "Delis, Bumerdas",
    year: 2023,
    image: "https://images.unsplash.com/photo-1600601937934-3623107c0f8e?w=600&h=400&fit=crop",
    description: "Construction d'une villa de 2 étages avec piscine, carrelage en marbre, cuisine équipée et système de climatisation centralisé.",
    surface: "320m²",
    duration: "10 mois",
    client: "Particulier"
  },
  {
    id: "proj8",
    name: "Siège de l'Entreprise - Rue Shaboot Boualam",
    category: "Commercial",
    categories: ["Construction", "Commercial"],
    location: "Alger",
    year: 2020,
    image: "https://images.unsplash.com/photo-1486406146926-c2099e2f6b3c?w=600&h=400&fit=crop",
    description: "Construction du siège social de Renobac sur la Rue Shaboot Boualam, bâtiment de 3 étages avec bureaux modernes et salle de réunion.",
    surface: "650m²",
    duration: "8 mois",
    client: "Renobac"
  },
  {
    id: "proj9",
    name: "Villa 213 Les Palmiers El Mohamadia",
    category: "Résidentiel",
    categories: ["Construction", "Résidentiel"],
    location: "El Mohamadia",
    year: 2024,
    image: "https://images.unsplash.com/photo-1600566753190-23a4bd7f35d?w=600&h=400&fit=crop",
    description: "Villa individuelle de standing à Les Palmiers El Mohamadia, 3 étages, finitions luxe, portail automatique et système d'alarme.",
    surface: "380m²",
    duration: "11 mois",
    client: "Particulier"
  },
  {
    id: "proj10",
    name: "Restauration du Patrimoine",
    category: "Résidentiel",
    categories: ["Rénovation", "Résidentiel"],
    location: "Alger",
    year: 2022,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop",
    description: "Projet de restauration de plusieurs bâtiments du patrimoine architectural algérois, préservation des façades et structures d'origine.",
    surface: "2500m²",
    duration: "16 mois",
    client: "État / Mairie"
  }
];

const services = [
  {
    id: 1,
    title: "Construction Neuve",
    icon: '<svg viewBox="0 0 24 24" width="48" height="48"><path d="M12 2L2 7V17L12 22L22 17V7L12 2ZM12 15H4V9L12 4L20 9V15H12Z" fill="var(--color-accent)"/></svg>',
    description: "Nous réalisons vos projets de construction de A à Z, du terrassement à la livraison clé en main. Notre équipe maîtrise les techniques les plus récentes de gros œuvre et de second œuvre. Nous garantissons des délais respectés et une qualité conforme aux normes en vigueur."
  },
  {
    id: 2,
    title: "Rénovation Intérieure",
    icon: '<svg viewBox="0 0 24 24" width="48" height="48"><path d="M12 3L2 12H5V20H19V12H22L12 3ZM12 7.5L17 12H15V18H9V12H7L12 7.5Z" fill="var(--color-accent)"/></svg>',
    description: "Transformez votre intérieur avec nos solutions de rénovation complète ou partielle. Nous intervenons sur les espaces de vie, les cuisines, les salles de bain et les bureaux. Chaque projet est personnalisé selon vos goûts et votre budget."
  },
  {
    id: 3,
    title: "Rénovation de Façade",
    icon: '<svg viewBox="0 0 24 24" width="48" height="48"><path d="M19 4H5C3.9 4 3 4.9 3 6V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V6C21 4.9 20.1 4 19 4ZM19 18H5V8L12 13L19 8V18Z" fill="var(--color-accent)"/></svg>',
    description: "Redonnez de l'éclat à votre bâtiment avec notre expertise en ravalement de façade. Nous traitons les problématiques d'isolation thermique, d'étanchéité et de protection contre les intempéries. Nos travaux respectent l'esthétique d'origine des constructions."
  },
  {
    id: 4,
    title: "Aménagement Paysager",
    icon: '<svg viewBox="0 0 24 24" width="48" height="48"><path d="M12 22C8.13 22 5 18.87 5 15C5 12.33 7.67 8 12 4C16.33 8 19 12.33 19 15C19 18.87 16.87 22 12 22ZM12 17C14.21 17 16 15.21 16 13C16 10.79 14.21 9 12 9C9.79 9 8 10.79 8 13C8 15.21 9.79 17 12 17Z" fill="var(--color-accent)"/></svg>',
    description: "Créez un espace extérieur à votre image avec nos services d'aménagement paysager. De la conception à l'entretien, nous intégrons végétation, allées, éclairage et systèmes d'arrosage. Nos réalisations allient beauté, durabilité et respect de l'environnement."
  },
  {
    id: 5,
    title: "Isolation & Étanchéité",
    icon: '<svg viewBox="0 0 24 24" width="48" height="48"><path d="M18 4H6C4.9 4 4 4.9 4 6V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V6C20 4.9 19.1 4 18 4ZM18 18H6V6H18V18ZM9 15H15V17H9V15ZM9 11H15V13H9V11ZM9 7H15V9H9V7Z" fill="var(--color-accent)"/></svg>',
    description: "Optimisez la performance énergétique de votre bâtiment avec nos solutions d'isolation et d'étanchéité. Nous intervenons sur les toitures, les murs et les sols pour réduire vos factures d'énergie. Tous nos matériaux sont certifiés écologiques et durables."
  },
  {
    id: 6,
    title: "Consultation & Expertise",
    icon: '<svg viewBox="0 0 24 24" width="48" height="48"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="var(--color-accent)"/></svg>',
    description: "Bénéficiez de notre expertise technique pour vos projets de construction ou de rénovation. Nous rédigeons des audits, des diagnostics techniques et des études de faisabilité. Nos conseils vous permettent de prendre les meilleures décisions stratégiques."
  }
];

const testimonials = [
  {
    name: "Ahmed Boudjema",
    company: "Promoteur Immobilier",
    quote: "Renobac a livré notre résidence en avance sur le planning, avec une qualité de finition exceptionnelle. Leur professionnalisme et leur réactivité ont fait toute la différence.",
    rating: 5
  },
  {
    name: "Samira Hadj",
    company: "Particulier",
    quote: "La rénovation de notre appartement a été menée avec un soin extrême, dans le respect de notre budget. L'équipe a été à l'écoute de nos besoins du début à la fin.",
    rating: 5
  },
  {
    name: "Karim Ziani",
    company: "Groupe Hôtelier",
    quote: "Le chantier de notre hôtel a été géré avec une rigueur impressionnante, malgré les contraintes de fonctionnement en zone occupée. Un partenaire de confiance pour nos futurs projets.",
    rating: 5
  }
];

const faq = [
  {
    question: "Quels sont vos délais de réalisation pour une construction neuve ?",
    answer: "Les délais varient selon la surface et la complexité du projet, mais comptez en moyenne 10 à 15 mois pour une villa de standing. Nous vous fournissons un planning détaillé dès la signature du devis."
  },
  {
    question: "Proposez-vous des garanties sur vos travaux ?",
    answer: "Oui, tous nos travaux sont couverts par la garantie de parfait achèvement (1 an), la garantie de bon fonctionnement (2 ans) et la garantie décennale (10 ans) via notre assurance professionnelle."
  },
  {
    question: "Puis-je suivre l'avancement de mon chantier ?",
    answer: "Absolument, nous envoyons un rapport hebdomadaire avec photos et vidéos, et nous organisons une réunion de chantier tous les 15 jours pour faire le point ensemble."
  },
  {
    question: "Travaillez-vous avec des architectes partenaires ?",
    answer: "Oui, nous collaborons avec plusieurs cabinets d'architecture pour la conception de vos projets. Si vous avez déjà un architecte, nous travaillons main dans la main avec lui."
  },
  {
    question: "Comment obtenir un devis gratuit ?",
    answer: "Il vous suffit de remplir le formulaire de contact ou de nous appeler au 0560 32 62 77. Nous nous déplaçons gratuitement pour étudier votre projet et vous remettons un devis détaillé sous 7 jours."
  }
];

const timeline = [
  {
    year: 1998,
    title: "Fondation de Renobac",
    description: "Création de l'entreprise par Abdnour Merdas, avec une petite équipe de 5 collaborateurs et les premiers chantiers de rénovation à Alger."
  },
  {
    year: 2005,
    title: "Premier grand projet",
    description: "Livraison du premier grand projet commercial, marquant l'entrée de Renobac sur le marché de la construction de grande envergure."
  },
  {
    year: 2010,
    title: "Expansion de l'équipe",
    description: "Arrivée de nouveaux collaborateurs, dont des architectes seniors et chefs de projet, pour répondre à la croissance de la demande."
  },
  {
    year: 2015,
    title: "Certification & Reconnaissance",
    description: "Obtention de certifications qualité et reconnaissance pour l'expertise en restauration du patrimoine bâti algérois."
  },
  {
    year: 2020,
    title: "Nouveau siège social",
    description: "Construction du nouveau siège social sur la Rue Shaboot Boualam, témoin de la croissance de l'entreprise."
  },
  {
    year: 2024,
    title: "25 ans d'excellence",
    description: "Plus de 200 projets livrés avec succès, de la rénovation du patrimoine aux constructions de villas de luxe."
  }
];
