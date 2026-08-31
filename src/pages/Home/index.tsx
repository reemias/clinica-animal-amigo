import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Car,
  Check,
  Clock,
  DollarSign,
  FlaskConical,
  Heart,
  Mail,
  MapPin,
  MessageCircle,
  Microscope,
  PawPrint,
  Phone,
  Pill,
  Quote,
  Scissors,
  ShieldCheck,
  Star,
  Stethoscope,
  Syringe,
  UsersRound,
} from "lucide-react";
import style from "./Home.module.css";
import Formulario from "../../component/Formulario";
import heroPhoto from "../../img/funcoHero.png";
import aboutPhoto from "../../img/Design sem nome - 2026-08-30T191922.274.png";
import boutiquePhoto from "../../img/Design sem nome - 2026-08-30T190529.563.png";
import receptionPhoto from "../../img/Design sem nome - 2026-08-30T185318.118.png";

const services = [
  {
    icon: Stethoscope,
    title: "Consultas",
    text: "Atendimento clínico completo com profissionais especializados.",
  },
  {
    icon: Syringe,
    title: "Vacinação",
    text: "Calendário vacinal atualizado e protocolos seguros.",
  },
  {
    icon: Microscope,
    title: "Exames e diagnóstico",
    text: "Ultrassonografia, radiografia, laboratório e muito mais.",
  },
  {
    icon: Scissors,
    title: "Cirurgias",
    text: "Cirurgias simples, complexas, ortopédicas e neurocirurgias.",
  },
  {
    icon: Building2,
    title: "Internamento",
    text: "Internação 24h com acompanhamento veterinário.",
  },
  {
    icon: FlaskConical,
    title: "Especialidades",
    text: "Cardiologia, dermatologia, oftalmologia, ortopedia e mais.",
  },
  {
    icon: Pill,
    title: "Farmácia e pet shop",
    text: "Medicamentos, rações premium, acessórios e perfumaria.",
  },
  {
    icon: Heart,
    title: "Banho e tosa",
    text: "Estética e bem-estar para o seu pet.",
  },
];

const differentials = [
  {
    icon: Clock,
    title: "Atendimento 24h",
    text: "Estamos disponíveis quando seu pet mais precisa.",
  },
  {
    icon: Building2,
    title: "Estrutura completa",
    text: "Hospital, laboratório interno e instalações modernas.",
  },
  {
    icon: Stethoscope,
    title: "Equipe multidisciplinar",
    text: "Profissionais especializados em diversas áreas.",
  },
  {
    icon: DollarSign,
    title: "Preços acessíveis",
    text: "Qualidade e cuidado por valores justos.",
  },
  {
    icon: Car,
    title: "Estacionamento grátis",
    text: "Mais praticidade para você e seu pet.",
  },
  {
    icon: Heart,
    title: "Compromisso com a saúde",
    text: "Cuidado humano para uma vida mais feliz.",
  },
  {
    icon: Star,
    title: "5 estrelas no Google",
    text: "Reconhecidos pela excelência no atendimento.",
  },
];

const specialties = [
  "Medicina Felina",
  "Ortopedia",
  "Cardiologia",
  "Dermatologia",
  "Endocrinologia",
  "Neurologia",
  "Oftalmologia",
  "Oncologia",
];

const diagnosticServices = [
  "Ultrassonografia",
  "Radiografia",
  "Endoscopia",
  "Laboratório hematológico",
  "Raio X",
];

const boardingServices = [
  "UTI 24h",
  "Internamento infeccioso",
  "Ambientes separados para cães e gatos",
  "Acompanhamento veterinário 24h",
];

const boutiqueItems = [
  "Roupas",
  "Acessórios",
  "Bolsas",
  "Brinquedos",
  "Camas",
  "Guias e coleiras",
  "Rações premium",
  "Perfumaria",
];

function Home() {
  return (
    <div className={style.Home}>
      <main>
        <section className={style.hero} id="inicio">
          <div className={style.container}>
            <div className={style.heroCopy}>
              <div className={style.eyebrow}>
                <span className={style.eyebrowDot} />
                Clínica veterinária em Maceió
              </div>
              <h1>
                Um cuidado que <em>entende</em> o seu melhor amigo.
              </h1>
              <p className={style.heroLead}>
                Tradição, acolhimento e inovação para acompanhar cada fase da
                vida do seu pet — com atendimento próximo e estrutura completa.
              </p>
              <div className={style.heroButtons}>
                <a
                  href="https://wa.me/5582999410544"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={style.btnPrimary}
                >
                  <MessageCircle size={18} />
                  Fale com a clínica
                  <ArrowUpRight size={16} />
                </a>
                <a href="#servicos" className={style.btnText}>
                  Conheça nossos serviços
                  <ArrowRight size={17} />
                </a>
              </div>
              <div className={style.heroTrust}>
                <div className={style.heroRating}>
                  <Star size={17} fill="currentColor" />
                  <strong>5,0</strong>
                </div>
                <span>Excelência reconhecida por quem cuida</span>
              </div>
            </div>

            <div className={style.heroVisual}>
              <div className={style.heroImageFrame}>
                <img
                  src={heroPhoto}
                  alt="Fachada da Clínica Animal Amigo em Maceió"
                />
              </div>
              <div className={style.heroBadge}>
                <span>24h</span>
                <small>Cuidado quando você precisa</small>
              </div>
              <div className={style.heroStamp}>
                <PawPrint size={18} />
                <span>amor que cuida</span>
              </div>
            </div>
          </div>
        </section>

        <section className={style.trustStrip} aria-label="Números da Animal Amigo">
          <div className={`${style.container} ${style.trustGrid}`}>
            <div className={style.trustItem}>
              <span className={style.trustIcon}>
                <ShieldCheck size={21} />
              </span>
              <div>
                <strong>Cuidado seguro</strong>
                <span>Equipe preparada para acolher</span>
              </div>
            </div>
            <div className={style.trustItem}>
              <span className={style.trustIcon}>
                <UsersRound size={21} />
              </span>
              <div>
                <strong>Atendimento humano</strong>
                <span>Respeito em cada encontro</span>
              </div>
            </div>
            <div className={style.trustItem}>
              <span className={style.trustIcon}>
                <Building2 size={21} />
              </span>
              <div>
                <strong>Estrutura completa</strong>
                <span>Tudo em um só lugar</span>
              </div>
            </div>
          </div>
        </section>

        <section className={style.diferenciais} id="diferenciais">
          <div className={style.container}>
            <div className={style.sectionHeader}>
              <span className={style.kicker}>Por que Animal Amigo</span>
              <h2>Cuidado que vai além do esperado.</h2>
              <p>
                Uma experiência completa para você e seu pet, do primeiro
                carinho ao acompanhamento de todos os dias.
              </p>
            </div>
            <div className={style.diffGrid}>
              {differentials.map(({ icon: Icon, title, text }, index) => (
                <article
                  className={`${style.diffCard} ${index === 0 ? style.diffCardFeatured : ""}`}
                  key={title}
                >
                  <span className={style.cardNumber}>0{index + 1}</span>
                  <Icon className={style.diffIcon} size={23} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={style.agendamento} id="agendamento">
          <div className={style.container}>
            <div className={style.appointmentShell}>
              <div className={style.appointmentCopy}>
                <span className={style.kickerLight}>Vamos cuidar juntos</span>
                <h2>Seu pet merece um cuidado pensado para ele.</h2>
                <p>
                  Conte um pouco sobre o que vocês precisam. Nossa equipe entra
                  em contato para confirmar o melhor horário.
                </p>
                <ul className={style.appointmentList}>
                  <li>
                    <Check size={16} />
                    Escolha o serviço e a data que prefere
                  </li>
                  <li>
                    <Check size={16} />
                    Receba a confirmação da nossa equipe
                  </li>
                  <li>
                    <Check size={16} />
                    Atendimento acolhedor do início ao fim
                  </li>
                </ul>
                <a className={style.appointmentPhone} href="tel:+5582999410544">
                  <Phone size={17} />
                  Prefere falar agora? (82) 99941-0544
                </a>
              </div>
              <Formulario />
            </div>
          </div>
        </section>

        <section className={style.sobre} id="sobre">
          <div className={`${style.container} ${style.aboutGrid}`}>
            <div className={style.aboutVisual}>
              <div className={style.aboutImageMain}>
                <img
                  src={aboutPhoto}
                  alt="Paula Nunes e Dr. Paulo Bezerra"
                  loading="lazy"
                />
              </div>
              <div className={style.aboutImageSmall}>
                <img
                  src={receptionPhoto}
                  alt="Atendimento na recepção da Animal Amigo"
                  loading="lazy"
                />
              </div>
              <div className={style.aboutCaption}>
                <strong>25+</strong>
                <span>anos de dedicação</span>
              </div>
            </div>
            <div className={style.aboutCopy}>
              <span className={style.kicker}>Quem somos</span>
              <h2>Uma história de amor pelos animais.</h2>
              <p>
                Olá, eu sou <strong>Paula Nunes</strong>, médica veterinária
                formada pela UFRPE há mais de 25 anos e pós-graduanda em
                Neonatologia e Geriatria Veterinária. Sou fundadora da Animal
                Amigo.
              </p>
              <p>
                Minha história com a medicina veterinária nasceu dentro de casa,
                inspirada pelo meu pai, <strong>Dr. Paulo Bezerra</strong> — o
                primeiro médico veterinário do estado de Alagoas (CRMV-AL 001).
              </p>
              <p>
                Desse legado nasceu um propósito: oferecer mais do que
                tratamentos. Oferecer acolhimento, amor e um cuidado realmente
                humano para cada pet e cada família.
              </p>
              <div className={style.aboutStats}>
                <div>
                  <strong>01</strong>
                  <span>propósito: cuidar</span>
                </div>
                <div>
                  <strong>24h</strong>
                  <span>ao lado do seu pet</span>
                </div>
              </div>
              <a
                href="https://wa.me/5582999410544"
                target="_blank"
                rel="noopener noreferrer"
                className={style.btnPrimary}
              >
                <span>Conheça nossa história</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section className={style.servicos} id="servicos">
          <div className={style.container}>
            <div className={style.sectionHeaderRow}>
              <div className={style.sectionHeaderCompact}>
                <span className={style.kicker}>Nossos serviços</span>
                <h2>Cuidado completo para o seu pet.</h2>
              </div>
              <p>
                Da prevenção ao tratamento, estamos aqui para cuidar de quem
                você ama — com atenção em cada detalhe.
              </p>
            </div>
            <div className={style.servicosGrid}>
              {services.map(({ icon: Icon, title, text }, index) => (
                <article className={style.servicoCard} key={title}>
                  <div className={style.servicoCardTop}>
                    <span className={style.serviceIndex}>0{index + 1}</span>
                    <Icon className={style.servicoIcon} size={23} />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <span className={style.cardArrow} aria-hidden="true">
                    <ArrowUpRight size={15} />
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={style.estrutura} id="estrutura">
          <div className={style.container}>
            <div className={style.sectionHeaderRow + " " + style.structureHeader}>
              <div className={style.sectionHeaderCompact}>
                <span className={style.kickerLight}>Infraestrutura</span>
                <h2>Prontos para todas as fases do cuidado.</h2>
              </div>
              <p>
                Instalações modernas e equipamentos de ponta para acompanhar o
                seu pet com segurança e tranquilidade.
              </p>
            </div>
            <div className={style.estruturaGrid}>
              <article className={style.estruturaCard}>
                <div className={style.structureIcon}>
                  <Stethoscope size={21} />
                </div>
                <h3>Especialidades</h3>
                <ul>
                  {specialties.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
              <article className={style.estruturaCard}>
                <div className={style.structureIcon}>
                  <Microscope size={21} />
                </div>
                <h3>Exames e diagnóstico</h3>
                <ul>
                  {diagnosticServices.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
              <article className={style.estruturaCard}>
                <div className={style.structureIcon}>
                  <Building2 size={21} />
                </div>
                <h3>Internamento</h3>
                <ul>
                  {boardingServices.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className={style.boutique} id="boutique">
          <div className={`${style.container} ${style.boutiqueGrid}`}>
            <div className={style.boutiqueCopy}>
              <span className={style.kicker}>Boutique Animal Amigo</span>
              <h2>Bem-estar também mora nos pequenos detalhes.</h2>
              <p>
                Depois do atendimento, continue esse cuidado em casa. Nossa
                boutique reúne itens selecionados para tornar a rotina do seu
                pet mais gostosa, segura e cheia de personalidade.
              </p>
              <ul className={style.boutiqueList}>
                {boutiqueItems.map((item) => (
                  <li key={item}>
                    <Check size={14} />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contato" className={style.btnSecondary}>
                Visite a boutique
                <ArrowRight size={16} />
              </a>
            </div>
            <div className={style.boutiqueVisual}>
              <img
                src={boutiquePhoto}
                alt="Pet shop da Animal Amigo com produtos para cães e gatos"
                loading="lazy"
              />
              <div className={style.boutiqueNote}>
                <PawPrint size={17} />
                <span>para todos os estilos</span>
              </div>
            </div>
          </div>
        </section>

        <section className={style.confidence} id="depoimentos">
          <div className={style.container}>
            <div className={style.sectionHeader}>
              <span className={style.kicker}>Confiança que se constrói</span>
              <h2>O cuidado que você sente desde a chegada.</h2>
              <p>
                Cada escolha da Animal Amigo existe para que vocês se sintam em
                casa — com segurança, escuta e carinho.
              </p>
            </div>
            <div className={style.confidenceGrid}>
              <article className={style.confidenceCard}>
                <Quote size={25} />
                <p>Um espaço acolhedor, seguro e pensado em cada detalhe.</p>
                <strong>Para você e seu pet</strong>
              </article>
              <article className={style.confidenceCard}>
                <Quote size={25} />
                <p>Profissionais especializados para acompanhar cada necessidade.</p>
                <strong>Equipe multidisciplinar</strong>
              </article>
              <article className={style.confidenceCard}>
                <Quote size={25} />
                <p>Mais do que tratamentos: presença, respeito e cuidado humano.</p>
                <strong>Nosso jeito de cuidar</strong>
              </article>
            </div>
          </div>
        </section>

        <section className={style.contato} id="contato">
          <div className={style.container}>
            <div className={style.sectionHeaderRow}>
              <div className={style.sectionHeaderCompact}>
                <span className={style.kicker}>Contato</span>
                <h2>Estamos prontos para receber vocês.</h2>
              </div>
              <p>
                Um espaço acolhedor, seguro e pensado em cada detalhe para a sua
                próxima visita.
              </p>
            </div>
            <div className={style.contatoGrid}>
              <div className={style.contatoInfo}>
                <div className={style.contatoItem}>
                  <span className={style.contactIcon}>
                    <MapPin size={19} />
                  </span>
                  <div>
                    <strong>Endereço</strong>
                    <p>
                      Av. Dr. Antônio Gomes de Barros, 1176 — Jatiúca, Maceió —
                      AL
                    </p>
                    <small>(Antiga Av. Amélia Rosa)</small>
                  </div>
                </div>
                <div className={style.contatoItem}>
                  <span className={style.contactIcon}>
                    <Phone size={19} />
                  </span>
                  <div>
                    <strong>Telefone</strong>
                    <p>
                      <a href="tel:+5582999410544">(82) 99941-0544</a>
                    </p>
                    <p>
                      <a href="tel:+558230285726">(82) 3028-5726</a>
                    </p>
                  </div>
                </div>
                <div className={style.contatoItem}>
                  <span className={style.contactIcon}>
                    <Mail size={19} />
                  </span>
                  <div>
                    <strong>E-mail</strong>
                    <p>
                      <a href="mailto:animalamigomaceio@gmail.com">
                        animalamigomaceio@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className={style.contactHours}>
                  <div>
                    <Clock size={18} />
                    <strong>Horário de funcionamento</strong>
                  </div>
                  <p>Seg à Sex: 08h às 18h</p>
                  <p>Sábado: 08h às 12h</p>
                  <small>Atendimento com horário marcado.</small>
                </div>
                <div className={style.parkingNote}>
                  <Car size={18} />
                  Estacionamento próprio e gratuito
                </div>
              </div>
              <div className={style.contatoMapa}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.350883402848!2d-35.71177989999999!3d-9.651029699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x70145bba3ec13a3%3A0xaecb9c5f20553107!2sAnimal%20Amigo%3A%20Cl%C3%ADnica%20Veterin%C3%A1ria%2C%20Banho%20e%20Tosa%20e%20Pet%20Shop%20em%20Macei%C3%B3!5e0!3m2!1spt-BR!2sbr!4v1765216204994!5m2!1spt-BR!2sbr"
                  title="Mapa da Clínica Animal Amigo"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={style.footer}>
        <div className={style.container}>
          <div className={style.footerMain}>
            <div className={style.footerBrand}>
              <div className={style.footerBrandMark}>
                <PawPrint size={19} />
              </div>
              <div>
                <h3>Animal Amigo</h3>
                <p>Cuidado, carinho e excelência para o seu pet.</p>
              </div>
            </div>
            <a
              className={style.footerCta}
              href="https://wa.me/5582999410544"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale com a clínica
              <ArrowUpRight size={16} />
            </a>
          </div>
          <div className={style.footerColumns}>
            <div className={style.footerCol}>
              <h4>Explorar</h4>
              <a href="#inicio">Início</a>
              <a href="#sobre">Sobre nós</a>
              <a href="#servicos">Serviços</a>
              <a href="#diferenciais">Diferenciais</a>
            </div>
            <div className={style.footerCol}>
              <h4>Visite também</h4>
              <a href="#estrutura">Estrutura</a>
              <a href="#boutique">Boutique</a>
              <a href="#depoimentos">Confiança</a>
              <a href="#contato">Contato</a>
            </div>
            <div className={style.footerCol}>
              <h4>Fale conosco</h4>
              <a href="tel:+5582999410544">(82) 99941-0544</a>
              <a href="mailto:animalamigomaceio@gmail.com">
                animalamigomaceio@gmail.com
              </a>
              <a
                href="https://www.instagram.com/animal.amigo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram @animal.amigo
              </a>
            </div>
          </div>
          <div className={style.footerBottom}>
            <span>© 2026 Animal Amigo</span>
            <span>Todos os direitos reservados</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
