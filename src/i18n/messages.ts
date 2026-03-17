import { Code2, Database, LayoutPanelTop, ServerCog } from "lucide-react";

export const localeOptions = [
  { code: "pt", label: "PT", nativeLabel: "Português" },
  { code: "en", label: "EN", nativeLabel: "English" },
] as const;

export type Locale = (typeof localeOptions)[number]["code"];

const highlightIcons = {
  frontend: LayoutPanelTop,
  backend: ServerCog,
  data: Database,
  code: Code2,
} as const;

export const messages = {
  pt: {
    metadata: {
      title: "Guilherme Pavani | Desenvolvedor Fullstack",
    },
    nav: {
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
      items: [
        { href: "#home", text: "Início" },
        { href: "#experience", text: "Experiência" },
        { href: "#about", text: "Sobre" },
        { href: "#contact", text: "Contato" },
      ],
    },
    languageSwitcher: {
      label: "Idioma",
      ariaLabel: "Selecionar idioma",
    },
    cv: {
      button: "Baixar CV",
      items: [
        {
          href: "/pdf/CV-PT.pdf",
          download: "Guilherme-Sapateiro-CV-PT.pdf",
          label: "🇧🇷 Português",
        },
        {
          href: "/pdf/CV-EN.pdf",
          download: "Guilherme-Sapateiro-CV-EN.pdf",
          label: "🇺🇸 English",
        },
      ],
    },
    hero: {
      role: "Desenvolvedor Fullstack",
      summaryPrefix: "Desenvolvedor fullstack com especialidade em ",
      summaryHighlight: "TypeScript, React, PHP e Laravel.",
      profileAlt: "Foto de perfil de Guilherme Pavani",
    },
    about: {
      eyebrow: "Sobre",
      title: "Construo aplicações úteis, escaláveis e pensadas para o mundo real.",
      paragraphs: [
        "Sou desenvolvedor fullstack com experiência na construção de aplicações web em produção, atuando desde a modelagem de fluxos no backend até a criação de interfaces claras, responsivas e fáceis de evoluir.",
        "Já trabalhei com sistemas de rastreamento e telemetria, ERPs e integrações orientadas a dados, utilizando tecnologias como React, TypeScript, Laravel, PostgreSQL, Redis e Docker para entregar soluções consistentes e sustentáveis.",
        "Tenho interesse especial por arquitetura de software, organização de estado no frontend, comunicação entre serviços e experiências que equilibrem desempenho, legibilidade e impacto real no negócio.",
      ],
      stats: [
        {
          value: "3+",
          label: "anos estudando software e construindo aplicações",
        },
        {
          value: "Fullstack",
          label: "atuando do backend à experiência final da interface",
        },
      ],
      highlights: [
        {
          icon: highlightIcons.frontend,
          title: "Frontend com intenção",
          description:
            "Interfaces responsivas, consistentes e pensadas para comunicar valor com clareza.",
        },
        {
          icon: highlightIcons.backend,
          title: "Backend e integrações",
          description:
            "APIs, regras de negócio, comunicação entre serviços e fluxos preparados para evoluir.",
        },
        {
          icon: highlightIcons.data,
          title: "Dados e performance",
          description:
            "Experiência com PostgreSQL, Redis, TimescaleDB e modelagem voltada para aplicações reais.",
        },
        {
          icon: highlightIcons.code,
          title: "Código sustentável",
          description:
            "Estrutura organizada, legível e feita para manutenção contínua sem virar dívida técnica cedo demais.",
        },
      ],
    },
    experience: {
      eyebrow: "Experiência",
      title: "Experiências profissionais que moldaram meu jeito de construir software.",
      intro:
        "Mais do que listar tecnologias, esta seção mostra o que aprendi em ambientes reais de produto, os problemas que ajudei a resolver e o impacto técnico dessas experiências no negócio.",
      learnedTitle: "O que aprendi",
      impactTitle: "Impacto na aplicação e no negócio",
      items: [
        {
          company: "Buscalog",
          role: "Desenvolvedor Fullstack",
          description:
            "Plataforma de rastreamento e telemetria veicular em produção, com foco em monitoramento em tempo real, processamento de dados geográficos e comunicação com dispositivos de campo.",
          learned: [
            "Arquitetura e dockerização de aplicações para ambientes mais consistentes entre desenvolvimento e produção.",
            "Uso de Redis para cache e otimização de leitura, reduzindo gargalos em fluxos com alto volume de dados.",
            "Uso de Redux para organização do estado global da aplicação, facilitando o gerenciamento de dados em tempo real e a previsibilidade dos fluxos no frontend.",
            "Modelagem e consulta de dados geoespaciais com PostGIS para suportar funcionalidades de mapa e localização.",
            "Armazenamento e análise de séries temporais com TimescaleDB para lidar com eventos e telemetria em tempo real.",
            "Comunicação com rastreadores via TCP, incluindo serialização e desserialização de mensagens de protocolos como GT06.",
            "Integração entre frontend e backend em fluxos críticos, garantindo visualização confiável dos dados recebidos dos dispositivos.",
          ],
          impact: [
            "Melhoria da confiabilidade na leitura e processamento das mensagens enviadas pelos rastreadores.",
            "Maior eficiência no tratamento de grandes volumes de dados de localização e telemetria.",
            "Base técnica mais robusta para funcionalidades em tempo real, mapas interativos e histórico operacional.",
            "Apoio direto à operação da empresa com uma plataforma mais escalável, consistente e preparada para crescer.",
            "Melhor organização dos fluxos de dados no frontend, tornando a aplicação mais previsível, escalável e fácil de manter.",
          ],
          stack: [
            "Laravel",
            "PostgreSQL",
            "PostGIS",
            "TimescaleDB",
            "Redis",
            "React",
            "Redux",
            "TypeScript",
            "Tailwind CSS",
            "Docker",
            "TCP",
          ],
        },
        {
          company: "Cifra ERP",
          role: "Desenvolvedor",
          description:
            "Sistema ERP voltado para gestão de ativos financeiros e processos internos, com foco em produtividade, organização operacional e interfaces administrativas.",
          learned: [
            "Construção de interfaces e fluxos administrativos utilizando Laravel no ecossistema fullstack do framework.",
            "Uso de Livewire para criação de experiências mais dinâmicas sem depender de uma arquitetura SPA completa.",
            "Utilização de Flux UI para acelerar a construção de interfaces consistentes e reutilizáveis.",
            "Trabalho com Docker para padronização do ambiente e facilitação do fluxo de desenvolvimento.",
            "Organização de regras de negócio e manutenção de aplicações com foco em clareza, produtividade e evolução contínua.",
          ],
          impact: [
            "Entrega mais rápida de funcionalidades administrativas e operacionais.",
            "Maior consistência visual e estrutural nas telas do sistema.",
            "Redução de atrito no ambiente de desenvolvimento com setup mais previsível.",
            "Contribuição para uma base de código mais sustentável e adaptável às necessidades do negócio.",
          ],
          stack: ["PHP", "Laravel", "Livewire", "Flux UI", "PostgreSQL", "Docker"],
        },
      ],
    },
    contact: {
      eyebrow: "Contato",
      title: "Vamos conversar sobre produto, software ou uma oportunidade concreta.",
      intro:
        "Se você quer discutir uma vaga, um projeto ou uma colaboração, estes são os canais mais diretos para falar comigo.",
      emailLabel: "Email",
      emailValue: "guipavanis2@gmail.com",
      emailDescription:
        "Para propostas, freelas, networking ou qualquer conversa mais detalhada.",
      emailAction: "Enviar email",
      phoneLabel: "WhatsApp",
      phoneValue: "+55 11 95004-9668",
      phoneDescription:
        "Para um contato mais rápido, direto e prático pelo celular.",
      phoneAction: "Chamar no WhatsApp",
    },
  },
  en: {
    metadata: {
      title: "Guilherme Pavani | Fullstack Developer",
    },
    nav: {
      openMenu: "Open menu",
      closeMenu: "Close menu",
      items: [
        { href: "#home", text: "Home" },
        { href: "#experience", text: "Experience" },
        { href: "#about", text: "About" },
        { href: "#contact", text: "Contact" },
      ],
    },
    languageSwitcher: {
      label: "Language",
      ariaLabel: "Select language",
    },
    cv: {
      button: "Download CV",
      items: [
        {
          href: "/pdf/cv-guilherme-sapateiro-pt.pdf",
          download: "Guilherme-Sapateiro-CV-PT.pdf",
          label: "🇧🇷 Portuguese",
        },
        {
          href: "/pdf/cv-guilherme-sapateiro-en.pdf",
          download: "Guilherme-Sapateiro-CV-EN.pdf",
          label: "🇺🇸 English",
        },
      ],
    },
    hero: {
      role: "Fullstack Developer",
      summaryPrefix: "Fullstack developer specialized in ",
      summaryHighlight: "TypeScript, React, PHP, and Laravel.",
      profileAlt: "Profile photo of Guilherme Pavani",
    },
    about: {
      eyebrow: "About",
      title: "I build useful, scalable applications designed for real-world use.",
      paragraphs: [
        "I am a fullstack developer with experience building production web applications, working from backend flow modeling to clear, responsive interfaces that stay easy to evolve.",
        "I have worked on tracking and telemetry systems, ERPs, and data-driven integrations, using technologies like React, TypeScript, Laravel, PostgreSQL, Redis, and Docker to deliver consistent, sustainable solutions.",
        "I am especially interested in software architecture, frontend state organization, service communication, and experiences that balance performance, readability, and real business impact.",
      ],
      stats: [
        {
          value: "3+",
          label: "years studying software and building applications",
        },
        {
          value: "Fullstack",
          label: "working from backend systems to the final interface experience",
        },
      ],
      highlights: [
        {
          icon: highlightIcons.frontend,
          title: "Intentional frontend",
          description:
            "Responsive, consistent interfaces designed to communicate value clearly.",
        },
        {
          icon: highlightIcons.backend,
          title: "Backend and integrations",
          description:
            "APIs, business rules, service communication, and flows built to evolve.",
        },
        {
          icon: highlightIcons.data,
          title: "Data and performance",
          description:
            "Experience with PostgreSQL, Redis, TimescaleDB, and data models shaped for real applications.",
        },
        {
          icon: highlightIcons.code,
          title: "Sustainable code",
          description:
            "Organized, readable structure built for ongoing maintenance without turning into technical debt too early.",
        },
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "Professional experience that shaped how I build software.",
      intro:
        "More than a list of technologies, this section shows what I learned in real product environments, the problems I helped solve, and the technical impact of those experiences on the business.",
      learnedTitle: "What I learned",
      impactTitle: "Impact on the product and business",
      items: [
        {
          company: "Buscalog",
          role: "Fullstack Developer",
          description:
            "Production vehicle tracking and telemetry platform focused on real-time monitoring, geospatial data processing, and communication with field devices.",
          learned: [
            "Application architecture and containerization for more consistent development and production environments.",
            "Redis for caching and read optimization, reducing bottlenecks in high-volume data flows.",
            "Redux for organizing global application state, improving real-time data handling and predictability in frontend flows.",
            "Geospatial data modeling and querying with PostGIS to support maps and location features.",
            "Time-series storage and analysis with TimescaleDB to handle real-time events and telemetry.",
            "Tracker communication over TCP, including message serialization and deserialization for protocols such as GT06.",
            "Frontend and backend integration across critical flows, ensuring reliable visualization of data received from devices.",
          ],
          impact: [
            "Improved reliability in reading and processing messages sent by tracking devices.",
            "Greater efficiency in handling large volumes of location and telemetry data.",
            "A stronger technical foundation for real-time features, interactive maps, and operational history.",
            "Direct support for the company operation through a more scalable, consistent platform ready to grow.",
            "Better organization of frontend data flows, making the application more predictable, scalable, and easier to maintain.",
          ],
          stack: [
            "Laravel",
            "PostgreSQL",
            "PostGIS",
            "TimescaleDB",
            "Redis",
            "React",
            "Redux",
            "TypeScript",
            "Tailwind CSS",
            "Docker",
            "TCP",
          ],
        },
        {
          company: "Cifra ERP",
          role: "Developer",
          description:
            "ERP system focused on financial asset management and internal processes, with emphasis on productivity, operational organization, and administrative interfaces.",
          learned: [
            "Administrative interfaces and flows built with Laravel inside the framework's fullstack ecosystem.",
            "Livewire for more dynamic experiences without depending on a full SPA architecture.",
            "Flux UI to speed up the creation of consistent, reusable interfaces.",
            "Docker for environment standardization and a smoother development workflow.",
            "Business rule organization and application maintenance with focus on clarity, productivity, and continuous evolution.",
          ],
          impact: [
            "Faster delivery of administrative and operational features.",
            "Greater visual and structural consistency across the system screens.",
            "Less friction in development through a more predictable setup.",
            "Contribution to a more sustainable codebase that adapts better to business needs.",
          ],
          stack: ["PHP", "Laravel", "Livewire", "Flux UI", "PostgreSQL", "Docker"],
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let’s talk about product, software, or a concrete opportunity.",
      intro:
        "If you want to discuss a role, a project, or a collaboration, these are the most direct ways to reach me.",
      emailLabel: "Email",
      emailValue: "guipavanis2@gmail.com",
      emailDescription:
        "For job opportunities, freelance work, networking, or more detailed conversations.",
      emailAction: "Send email",
      phoneLabel: "WhatsApp",
      phoneValue: "+55 11 95004-9668",
      phoneDescription:
        "For faster, more direct contact on mobile.",
      phoneAction: "Message on WhatsApp",
    },
  },
} as const;

export type Messages = (typeof messages)[Locale];
