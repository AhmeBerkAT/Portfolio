const projects = [
  {
    id: "optix",
    title: "OptiX CUDA Path Tracer",
    description: "Moteur de rendu progressif implémentant le Next Event Estimation.",
    fullDescription: "Développement d'un path tracer en C++ et CUDA utilisant NVIDIA OptiX. Implémentation du Next Event Estimation (NEE), gestion des rebonds et parsing des matériaux .obj pour un rendu photoréaliste.",
    year: "M2",
    type: "Académique",
    categories: ["Computer Graphics & VR"],
    tags: ["C++", "CUDA", "OptiX", "En développement"],
    image: "https://images.unsplash.com/photo-1618218168350-6e7c81151b64?auto=format&fit=crop&w=800&q=80",
    gallery: [],
    repo: "",
    video: "",
    pdfs: []
  },
  {
    id: "vr-collab",
    title: "Visualisation de Cartes en VR Collaborative",
    description: "Édition de cartes multijoueur en environnement hétérogène.",
    fullDescription: "Projet de recherche (TER) portant sur l'édition collaborative et la visualisation de cartes en Réalité Virtuelle. Utilisation du Meta Quest 3, de Cesium for Unity et du XR Interaction Toolkit. Implémentation d'une architecture réseau hôte-client (Netcode for GameObjects) pour la synchronisation des annotations spatiales et développement de modes de navigation pour limiter le cybersickness sur des données à l'échelle mondiale.",
    year: "M1",
    type: "Académique",
    categories: ["Computer Graphics & VR", "Réseau & Base de Données", "Recherche & Académique"],
    tags: ["Unity", "C#", "Meta Quest", "OpenXR"],
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&w=800&q=80",
    gallery: [],
    repo: "https://git.unistra.fr/abates/mapcesium", 
    video: "",
    pdfs: [
      { title: "Rapport de TER", url: "pdfs/TER_AHMET_ATES_CARTOGRAPHIE.pdf" }
    ]
  },
  {
    id: "brain-dashboard",
    title: "Prototypage de Dashboard - ITO",
    description: "Stage : Prototypage interactif Balsamiq pour la Chambre de Commerce d'Istanbul.",
    fullDescription: "Stage de 3 mois chez Brain LCAP. Conception d'un prototype interactif pour le panneau d'administration de l'Istanbul Chamber of Commerce (ITO). Documentation des besoins, consensus client.",
    year: "M1",
    type: "Stage",
    categories: ["Développement & Logiciel"],
    tags: ["Balsamiq", "Design", "UI/UX"],
    image: "coverITO.png", 
    gallery: [],
    repo: "",
    video: "",
    pdfs: [
      { title: "Internship report", url: "pdfs/StageM1_IIRVIJ_ATES.pdf" }   
    ]
  },
  {
    id: "insa-gnss",
    title: "Masques d'Obstruction GNSS",
    description: "Application Python topologique pour les stations d'observation.",
    fullDescription: "Stage de deux mois à l'INSA Strasbourg. Développement autonome d'une application Python utilisant des méthodes topologiques et l'interpolation orbitale de satellites pour construire des masques d'obstruction d'élévation autour des stations d'observation GNSS.",
    year: "L3",
    type: "Stage",
    categories: ["IA & Data Science", "Développement & Logiciel", "Recherche & Académique"],
    tags: ["Python", "Topographie", "GNSS", "Géomatique"],
    image: "masque.png",
    gallery: [],
    repo: "",
    video: "",
    pdfs: [
      { title: "Internship report", url: "pdfs/StageATES_Masques.pdf" }
    ]
  },
  {
    id: "akead-mobile",
    title: "Application Mobile AKEAD",
    description: "Développement de pages pour une application interne de gestion de projets.",
    fullDescription: "Stage d'un mois en développement mobile chez AKEAD (Sevilog) à Strasbourg. Contribution à une application existante dédiée à la gestion de projets en interne. Développement et intégration de nouvelles pages en utilisant le framework Flutter (Dart) pour le front-end, en lien avec un back-end sous Symfony.",
    year: "L1",
    type: "Stage",
    categories: ["Développement & Logiciel"],
    tags: ["Dart", "Symfony", "Mobile"],
    image: "",
    gallery: [],
    repo: "",
    video: "",
    pdfs: []
  },
  {
    id: "streaming-database",
    title: "Streaming Platform Database System",
    description: "Relational database architecture and PL/SQL implementation for a video streaming service.",
    fullDescription: "Designed and implemented a complete database system including Entity-Relationship and relational models for a video streaming and archiving platform. The project features advanced PL/SQL triggers for automated 7-day archiving, dynamic constraints for data validation, and optimized SQL queries for user analytics, watch history, and recommendation systems. Test data generation and validation were handled using Mockaroo.",
    year: "L3",
    type: "Académique",
    categories: ["Réseau & Base de Données"],
    tags: ["SQL", "PL/SQL", "Data Modeling"],
    image: "", 
    gallery: [],
    repo: "https://github.com/AhmeBerkAT/PROJECT_SQL", 
    video: "",
    pdfs: [
      { title: "Technical Report", url: "https://drive.google.com/file/d/1D4mH3ShrJ9eyw3Zbv8oNKrfSqrJ2SWdN/preview" },
      { title: "Modele E-A", url: "pdfs/MODELE_EA.pdf" }
    ]
  },
  {
    id: "dlcv-highdim",
    title: "High Dimensionality Visualization",
    description: "Analyse de la topologie des espaces latents de réseaux de neurones avec UMAP.",
    fullDescription: "Projet universitaire (Master 1) explorant la visualisation des espaces latents de réseaux de neurones profonds. Utilisation de l'algorithme de réduction de dimensionnalité UMAP pour analyser la dynamique d'apprentissage, l'impact du pré-entraînement (ResNet18, ResNet50) et la capacité des modèles à structurer l'information pour séparer les classes sur des jeux de données variés. Réalisé en binôme avec Elouan Simon.",
    year: "M1",
    type: "Académique",
    categories: ["IA & Data Science", "Recherche & Académique"],
    tags: ["Python", "UMAP", "PyTorch", "ResNet", "Deep Learning","CMI"],
    image: "HDV.png", 
    gallery: [],
    repo: "https://www.kaggle.com/code/elouansimon/notebook32689bd5c2", 
    video: "",
    pdfs: [
      { title: "Rapport de Projet", url: "pdfs/DLCV-HIGHDIM.pdf" }
    ]
  },
  {
    id: "reseaux-ip",
    title: "Configuration et Routage de Réseaux IP",
    description: "Conception, adressage et configuration de sous-réseaux avec GNS3.",
    fullDescription: "Projet académique portant sur la conception et la configuration de topologies réseaux sous GNS3. Les tâches comprenaient le calcul de masques de sous-réseaux personnalisés (VLSM), la configuration d'interfaces sur des hôtes Linux et des routeurs Cisco (CLI), la mise en place du routage statique, et l'analyse de trames (ARP, ICMP, requêtes Traceroute UDP/TTL) à l'aide de Wireshark pour diagnostiquer la connectivité. Réalisé en binôme avec Rayen Zaeid.",
    year: "L2",
    type: "Académique",
    categories: ["Réseau & Base de Données"],
    tags: ["GNS3", "Wireshark", "Routage"],
    image: "Routage.png", 
    gallery: [],
    repo: "", 
    video: "",
    pdfs: [
      { title: "Rapport de Projet", url: "pdfs/RESAUXIP_RENDU.pdf" }
    ]
  },
  {
    id: "ia-l3-rnn",
    title: "Évaluation de la contribution des attributs (RNN)",
    description: "Projet d'IA sur l'interprétabilité des réseaux de neurones par approximations locales.",
    fullDescription: "Dans le cadre de la L3 Informatique, conception et entraînement d'un réseau de neurones artificiel from scratch pour la classification (dataset Iris). Le projet explore l'explicabilité de l'IA en sélectionnant des instances incertaines, en générant des voisinages bruités et en construisant des arbres de décision locaux (profondeur 4) pour approximer et évaluer la contribution des attributs d'entrée aux prédictions du modèle. Réalisé avec Antoine Gautheron et Baptiste Gauchard.",
    year: "L3",
    type: "Académique",
    categories: ["IA & Data Science"],
    tags: ["Python", "Neural Networks", "Interprétabilité"],
    image: "", 
    gallery: [],
    repo: "https://git.unistra.fr/a.gautheron/ai_project", 
    video: "",
    pdfs: [
      { title: "Rapport de Projet", url: "pdfs/IA_L3_RNN.pdf" }
    ]
  },
  {
    id: "gem-hunter",
    title: "Gem Hunter (Projet Intégrateur)",
    description: "Jeu de tir 3D multijoueur en réseau inspiré de Pokémon Snap.",
    fullDescription: "Développement d'un jeu 3D multijoueur en ligne (jusqu'à 4 joueurs) sous Unity dans le cadre du Projet Intégrateur (L3). Le jeu repose sur une architecture client-serveur centralisée utilisant Mirror Networking et une API .NET sécurisée (HTTPS) reliée à une base de données MySQL pour la gestion des comptes, du matchmaking, du système d'amis et des scores. Adaptation complète du jeu et de son interface pour un déploiement Web (WebGL).",
    year: "L3",
    type: "Académique",
    categories: ["Computer Graphics & VR", "Réseau & Base de Données", "Développement & Logiciel"],
    tags: ["Unity", "C#", "Mirror", "MySQL", "WebGL", "Agile"],
    image: "images/gameTrailer.jpeg", 
    gallery: [
      "images/affiche.jpeg",
      "images/gameTrailer.jpeg",
      "images/gameTrailer2.jpeg"
    ],
    repo: "", 
    video: "https://www.youtube.com/embed/ya4AlxpDagc?start=277",
    pdfs: [
      { title: "Rapport Final", url: "pdfs/L3PI_Final_report_group4A.pdf" },
      { title: "Cahier des Charges", url: "pdfs/Requirements document.pdf" },
      { title: "Plan de Communication", url: "pdfs/L3PI_Communication_document_group4A.pdf" },
      { title: "Manuel Utilisateur", url: "pdfs/L3PI_User_documentation_group4A.pdf" }
    ]
  },
  {
    id: "vr-agisme",
    title: "Étude de l'âgisme en Réalité Virtuelle",
    description: "Environnement expérimental modulaire en VR (Projet en développement).",
    fullDescription: "Projet de Master (150h) pour le laboratoire ICube. Conception d'un environnement expérimental en réalité virtuelle pour étudier l'âgisme. Le projet utilise Unity 3D, le Meta XR SDK pour les casques Meta Quest 2 et 3, ainsi que des capteurs biométriques et le FACS pour les expressions faciales de la cible. Le projet est actuellement <strong>en cours de développement</strong>, avec une architecture modulaire axée sur le tracking complet de la caméra et des joueurs.",
    year: "M2",
    type: "Académique",
    categories: ["Computer Graphics & VR", "Recherche & Académique"],
    tags: ["Unity", "C#", "Meta Quest", "En développement"],
    image: "", 
    gallery: [],
    repo: "", 
    video: "",
    pdfs: [
      { title: "Cahier des Charges", url: "pdfs/CahierCharge.pdf" }
    ]
  },
  {
    id: "tower-defense",
    title: "Jeu Tower Defense (Programmation Avancée)",
    description: "Développement d'un jeu appliquant les concepts avancés des langages de programmation.",
    fullDescription: "Conception et développement collaboratif d'un jeu de Tower Defense dans le cadre de l'UE Programmation Avancée. Ce projet met en pratique de manière concrète les concepts fondamentaux de l'informatique : paradigme orienté objet (classes, polymorphisme ad-hoc et paramétrique, sous-typage, héritage), typage fort/statique, gestion de la mémoire (pointeurs intelligents, références), et liaison dynamique. Le développement a exigé une application stricte des normes de programmation et l'intégration de divers modèles de conception (design patterns).",
    year: "M1",
    type: "Académique",
    categories: ["Développement & Logiciel"],
    tags: ["C++", "POO", "Design Patterns"],
    image: "tower.png", 
    gallery: [],
    repo: "https://github.com/0xCoox/TowerDefense/tree/ahmet", 
    video: "",
    pdfs: []
  },
  {
    id: "fain",
    title: "Projet FAIN : Éditeur Vectoriel 2D (OpenGL)",
    description: "Application interactive de dessin et de rastérisation 2D en C.",
    fullDescription: "Développement d'une application de dessin interactif en C utilisant OpenGL et GLUT dans le cadre du projet académique FAIN à l'Université de Strasbourg. Implémentation from scratch d'algorithmes fondamentaux d'infographie : tracé de segments (algorithme de Bresenham), remplissage de polygones par ligne de balayage (scanline algorithm), et rendu de marqueurs. Le programme propose plusieurs modes d'édition géométrique (ajout, sélection et déplacement de sommets, insertion de points sur arête) ainsi qu'un système de vue dynamique (zoom, focus). Gestion de version et collaboration via le GitLab de l'université.",
    year: "M1",
    type: "Académique",
    categories: ["Computer Graphics & VR", "Développement & Logiciel"],
    tags: ["C", "OpenGL", "GLUT", "Algorithmique"],
    image: "etoile.png", 
    gallery: [],
    repo: "https://git.unistra.fr/abates/fain", 
    video: "",
    pdfs: []
  },
  {
    id: "prepost-simulation",
    title: "Pre & Post-Processing (Simulation Thermoélectrique)",
    description: "Pipeline numérique complet de génération de maillage et d'analyse de simulation pour un électro-aimant.",
    fullDescription: "Projet (M1) portant sur l'implémentation d'un pipeline numérique complet de la génération de géométrie à l'analyse de résultats pour un électro-aimant (hélice et anneau). Génération automatisée de géométries et maillages 3D via l'API Python de Gmsh. Résolution de problèmes thermoélectriques couplés à l'aide de Feel++ sur le cluster de calcul Gaya, avec partitionnement et parallélisation. Analyse et post-traitement des champs de température, de densité de courant et de potentiel électrique à l'aide de ParaView (rendus volumétriques, streamlines, tracés comparatifs). Réalisé en collaboration avec Hanna Chetouane.",
    year: "M1",
    type: "Académique",
    categories: ["IA & Data Science"],
    tags: ["Python", "Gmsh", "Feel++", "ParaView", "HPC", "CMI"],
    image: "prePost.png", 
    gallery: [],
    repo: "https://github.com/AhmeBerkAT/PrePost", 
    video: "",
    pdfs: [
      { title: "Rapport de Projet", url: "pdfs/report.pdf" }
    ]
  },
  {
    id: "recherche-l2",
    title: "Initiation à la Recherche : L'IA Générative",
    description: "Projet de recherche académique (L2) sur le fonctionnement et les impacts de l'IA générative de code.",
    fullDescription: "Dans le cadre d'une initiation à la recherche académique pour le Cursus Master en Ingénierie (CMI), rédaction d'un rapport de recherche sur 'La génération de codes par IA, promesses et périls'. Rédaction de la section scientifique approfondie détaillant le fonctionnement de l'IA générative : modélisation des réseaux de neurones artificiels, concepts du Deep Learning et des Large Language Models (LLM), explication de l'architecture des Transformers, et principe du Fine-tuning. Projet mené avec Ugo Berton et Antoine Gautheron, sous la direction de M. Basile Sauvage.",
    year: "L2",
    type: "Académique",
    categories: ["IA & Data Science", "Recherche & Académique"],
    tags: ["Deep Learning", "LLM", "Transformers", "CMI"],
    image: "prds.png", 
    gallery: [],
    repo: "", 
    video: "",
    pdfs: [
      { title: "Projet de Recherche (L2)", url: "pdfs/Projet_Recherche_L2_Génération_de_code_par_IA.pdf" }
    ]
  },
  {
    id: "kaggle-fib-sem",
    title: "Classification d'Images Biologiques FIB/SEM",
    description: "Compétition Kaggle : Modèle de Deep Learning pour la classification cellulaire 3D.",
    fullDescription: "Participation au concours Kaggle '2025 Competition Apprentissage I-3-D'. L'objectif était de développer un modèle de Vision par Ordinateur (Deep Learning) capable de classifier le pixel central d'imagettes 2D issues d'imagerie FIB/SEM à très haute résolution (3 nm). Le modèle devait discriminer 5 classes biologiques complexes : mitochondries, réticulum endoplasmique, membranes nucléaires, membranes cellulaires et autres. Le livrable comprenait l'entraînement du modèle, l'optimisation de l'accuracy et la justification méthodologique via un notebook. Ce projet a été réalisé en binôme avec Elouan Simon, et notre modèle a remporté la deuxième place de la compétition.<br><br><a href='https://www.kaggle.com/competitions/2025-competition-apprentissage-i-3-d/leaderboard' target='_blank' style='color: #60A5FA; text-decoration: underline;'>🏆 Voir le classement de la compétition Kaggle</a>",
    year: "M1",
    type: "Académique",
    categories: ["IA & Data Science"],
    tags: ["Python", "Kaggle", "PyTorch", "Computer Vision"],
    image: "cells.png", 
    gallery: [],
    repo: "https://www.kaggle.com/code/abates03/api-projet", 
    video: "",
    pdfs: []
  }
];

const yearOrder = ["M2", "M1", "L3", "L2", "L1"];
projects.sort((a, b) => yearOrder.indexOf(a.year) - yearOrder.indexOf(b.year));
