import Logo from "../../img/Design_sem_nome_-_2026-08-30T172737.744-removebg-preview.png";

// companyConfig.ts

export interface CompanyData {
  name: string;
  slogan: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  about: {
    title: string;
    paragraphs: string[];
    stats: { value: string; label: string }[];
  };
  contact: {
    phone: string;
    phone2?: string;
    email: string;
    address: string;
    addressComplement?: string;
    hours: string[];
    parking: string;
    mapSrc: string;
  };
  social: {
    instagram: string;
    whatsapp: string;
  };
  images: {
    hero: string;
    aboutMain: string;
    aboutSmall: string;
    boutique: string;
    logo: string;
  };
  services: { icon: string; title: string; text: string }[];
  differentials: { icon: string; title: string; text: string }[];
  specialties: string[];
  diagnosticServices: string[];
  boardingServices: string[];
  boutiqueItems: string[];
  appointment: {
    title: string;
    description: string;
    listItems: string[];
  };
  footer: {
    about: string;
    links: {
      explore: { label: string; href: string }[];
      visit: { label: string; href: string }[];
      social: { label: string; href: string }[];
    };
  };
}

export const companyData: CompanyData = {
  // ========== DADOS PRINCIPAIS ==========
  name: "VetCare",
  slogan: "Cuidado que faz a diferença.",
  description:
    "Clínica veterinária e pet shop com estrutura completa e equipe altamente qualificada para cuidar do seu melhor amigo.",
  heroTitle: "Saúde e felicidade",
  heroSubtitle:
    "Atendimento humanizado, tecnologia de ponta e amor pelos animais em cada detalhe.",

  // ========== SEÇÃO SOBRE ==========
  about: {
    title: "Paixão que virou profissão.",
    paragraphs: [
      "Fundada em 2010, a VetCare nasceu do sonho de oferecer um atendimento veterinário que une excelência técnica e acolhimento.",
      "Nossa equipe é formada por especialistas em diversas áreas, todos comprometidos com o bem-estar e a qualidade de vida dos pets.",
      "Acreditamos que cada animal é único, por isso criamos protocolos personalizados e um ambiente seguro para que vocês se sintam em casa.",
    ],
    stats: [
      { value: "15+", label: "anos de estrada" },
      { value: "5k+", label: "pets atendidos" },
    ],
  },

  // ========== CONTATO E ENDEREÇO ==========
  contact: {
    phone: "(11) 99999-9999",
    phone2: "(11) 3333-4444",
    email: "contato@vetcare.com.br",
    address: "Rua das Flores, 123 — Jardim Botânico, São Paulo — SP",
    addressComplement: "Próximo ao metrô Santa Cruz",
    hours: [
      "Segunda a Sexta: 08h às 20h",
      "Sábado: 08h às 14h",
      "Domingo: emergências 24h",
    ],
    parking: "Estacionamento gratuito para clientes",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.097407234829!2d-46.6547894!3d-23.564224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7f8b6c8f5%3A0x5c3f6c4b2e9e8f0d!2sR.%20das%20Flores%2C%20123%20-%20Jardim%20Bot%C3%A2nico%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001234-567!5e0!3m2!1spt-BR!2sbr!4v1712345678901",
  },

  // ========== REDES SOCIAIS ==========
  social: {
    instagram: "https://instagram.com/vetcareoficial",
    whatsapp: "https://wa.me/5511999999999",
  },

  // ========== IMAGENS (substitua pelos URLs reais) ==========
  images: {
    hero: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&h=600&fit=crop",
    aboutMain:
      "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=600&h=500&fit=crop",
    aboutSmall:
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=300&fit=crop",
    boutique:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=400&fit=crop",
    logo: Logo,
  },

  // ========== SERVIÇOS ==========
  services: [
    {
      icon: "Stethoscope",
      title: "Consultas",
      text: "Atendimento clínico completo com profissionais especializados.",
    },
    {
      icon: "Syringe",
      title: "Vacinação",
      text: "Calendário vacinal atualizado e protocolos seguros.",
    },
    {
      icon: "Microscope",
      title: "Exames e diagnóstico",
      text: "Ultrassonografia, radiografia, laboratório e muito mais.",
    },
    {
      icon: "Scissors",
      title: "Cirurgias",
      text: "Cirurgias simples, complexas, ortopédicas e neurocirurgias.",
    },
    {
      icon: "Building2",
      title: "Internamento",
      text: "Internação 24h com acompanhamento veterinário.",
    },
    {
      icon: "FlaskConical",
      title: "Especialidades",
      text: "Cardiologia, dermatologia, oftalmologia, ortopedia e mais.",
    },
    {
      icon: "Pill",
      title: "Farmácia e pet shop",
      text: "Medicamentos, rações premium, acessórios e perfumaria.",
    },
    {
      icon: "Heart",
      title: "Banho e tosa",
      text: "Estética e bem-estar para o seu pet.",
    },
  ],

  // ========== DIFERENCIAIS ==========
  differentials: [
    {
      icon: "Clock",
      title: "Atendimento 24h",
      text: "Estamos disponíveis quando seu pet mais precisa.",
    },
    {
      icon: "Building2",
      title: "Estrutura completa",
      text: "Hospital, laboratório interno e instalações modernas.",
    },
    {
      icon: "Stethoscope",
      title: "Equipe multidisciplinar",
      text: "Profissionais especializados em diversas áreas.",
    },
    {
      icon: "DollarSign",
      title: "Preços acessíveis",
      text: "Qualidade e cuidado por valores justos.",
    },
    {
      icon: "Car",
      title: "Estacionamento grátis",
      text: "Mais praticidade para você e seu pet.",
    },
    {
      icon: "Heart",
      title: "Compromisso com a saúde",
      text: "Cuidado humano para uma vida mais feliz.",
    },
    {
      icon: "Star",
      title: "5 estrelas no Google",
      text: "Reconhecidos pela excelência no atendimento.",
    },
  ],

  // ========== ESPECIALIDADES ==========
  specialties: [
    "Medicina Felina",
    "Ortopedia",
    "Cardiologia",
    "Dermatologia",
    "Endocrinologia",
    "Neurologia",
    "Oftalmologia",
    "Oncologia",
  ],

  // ========== EXAMES ==========
  diagnosticServices: [
    "Ultrassonografia",
    "Radiografia",
    "Endoscopia",
    "Laboratório hematológico",
    "Raio X",
  ],

  // ========== INTERNAMENTO ==========
  boardingServices: [
    "UTI 24h",
    "Internamento infeccioso",
    "Ambientes separados para cães e gatos",
    "Acompanhamento veterinário 24h",
  ],

  // ========== ITENS DA BOUTIQUE ==========
  boutiqueItems: [
    "Roupas",
    "Acessórios",
    "Bolsas",
    "Brinquedos",
    "Camas",
    "Guias e coleiras",
    "Rações premium",
    "Perfumaria",
  ],

  // ========== AGENDAMENTO ==========
  appointment: {
    title: "Seu pet merece um cuidado pensado para ele.",
    description:
      "Conte um pouco sobre o que vocês precisam. Nossa equipe entra em contato para confirmar o melhor horário.",
    listItems: [
      "Escolha o serviço e a data que prefere",
      "Receba a confirmação da nossa equipe",
      "Atendimento acolhedor do início ao fim",
    ],
  },

  // ========== RODAPÉ ==========
  footer: {
    about: "Cuidado, carinho e excelência para o seu pet.",
    links: {
      explore: [
        { label: "Início", href: "#inicio" },
        { label: "Sobre nós", href: "#sobre" },
        { label: "Serviços", href: "#servicos" },
        { label: "Diferenciais", href: "#diferenciais" },
      ],
      visit: [
        { label: "Estrutura", href: "#estrutura" },
        { label: "Boutique", href: "#boutique" },
        { label: "Confiança", href: "#depoimentos" },
        { label: "Contato", href: "#contato" },
      ],
      social: [
        { label: "Instagram", href: "https://instagram.com/vetcareoficial" },
        { label: "WhatsApp", href: "https://wa.me/5511999999999" },
      ],
    },
  },
};
