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
  Microscope,
  PawPrint,
  Phone,
  Pill,
  Quote,
  Scissors,
  Star,
  Stethoscope,
  Syringe,
} from "lucide-react";
import style from "./Home.module.css";
import Formulario from "../../component/Formulario";
import { useCompany } from "../../context/CompanyContext";
import PopupBoutique from "../../component/BoutiqueCards";

// Mapeamento dos nomes dos ícones para os componentes importados
const getIcon = (iconName: string) => {
  const icons: Record<string, React.ElementType> = {
    Stethoscope,
    Syringe,
    Microscope,
    Scissors,
    Building2,
    FlaskConical,
    Pill,
    Heart,
    Clock,
    DollarSign,
    Car,
    Star,
  };
  return icons[iconName] || Stethoscope;
};

function Home() {
  const data = useCompany();

  return (
    <div className={style.Home}>
      <main>
        {/* ===== HERO ===== */}
        <section className={style.hero} id="inicio">
          <div className={style.container}>
            <div className={style.heroCopy}>
              <span className={style.eyebrow}>
                <span className={style.eyebrowDot} />
                {data.name}
              </span>
              <h1>
                {data.heroTitle} <em>para o seu pet</em>
              </h1>
              <p className={style.heroLead}>{data.heroSubtitle}</p>
              <div className={style.heroButtons}>
                <a
                  href="#agendamento"
                  rel="noopener noreferrer"
                  className={style.btnPrimary}
                >
                  <span>Agendar agora</span>
                  <ArrowRight size={16} />
                </a>
                <a href="#servicos" className={style.btnSecondary}>
                  Conhecer serviços
                </a>
              </div>
              <div className={style.heroTrust}>
                <span className={style.heroRating}>
                  <Star size={14} fill="#f4845f" />
                  <strong>4.9</strong> (120+ avaliações)
                </span>
                <span>•</span>
                <span>Atendimento 24h</span>
              </div>
            </div>
            <div className={style.heroVisual}>
              <div className={style.heroImageFrame}>
                <img src={data.images.hero} alt={data.name} loading="lazy" />
              </div>
              <div className={style.heroStamp}>
                <PawPrint size={16} />
                <span>amor & cuidado</span>
              </div>
            </div>
          </div>
        </section>
        {/* ===== AGENDAMENTO ===== */}
        <section className={style.agendamento} id="agendamento">
          <div className={style.container}>
            <div className={style.appointmentShell}>
              <div className={style.appointmentCopy}>
                <span className={style.kickerLight}>Vamos cuidar juntos</span>
                <h2>{data.appointment.title}</h2>
                <p>{data.appointment.description}</p>
                <ul className={style.appointmentList}>
                  {data.appointment.listItems.map((item) => (
                    <li key={item}>
                      <Check size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  className={style.appointmentPhone}
                  href={`tel:${data.contact.phone.replace(/\D/g, "")}`}
                >
                  <Phone size={17} />
                  Prefere falar agora? {data.contact.phone}
                </a>
              </div>
              <Formulario />
            </div>
          </div>
        </section>

        {/* ===== DIFERENCIAIS ===== */}
        <section className={style.diferenciais} id="diferenciais">
          <div className={style.container}>
            <div className={style.sectionHeader}>
              <span className={style.kicker}>Por que {data.name}</span>
              <h2>Cuidado que vai além do esperado.</h2>
              <p>
                Uma experiência completa para você e seu pet, do primeiro
                carinho ao acompanhamento de todos os dias.
              </p>
            </div>
            <div className={style.diffGrid}>
              {data.differentials.map((diff, index) => {
                const Icon = getIcon(diff.icon);
                return (
                  <article
                    className={`${style.diffCard} ${index === 0 ? style.diffCardFeatured : ""}`}
                    key={diff.title}
                  >
                    <span className={style.cardNumber}>0{index + 1}</span>
                    <Icon className={style.diffIcon} size={23} />
                    <h3>{diff.title}</h3>
                    <p>{diff.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== SOBRE ===== */}
        <section className={style.sobre} id="sobre">
          <div className={`${style.container} ${style.aboutGrid}`}>
            <div className={style.aboutVisual}>
              <div className={style.aboutImageMain}>
                <img
                  src={data.images.aboutMain}
                  alt="Sobre nós"
                  loading="lazy"
                />
              </div>
              <div className={style.aboutImageSmall}>
                <img
                  src={data.images.aboutSmall}
                  alt="Ambiente"
                  loading="lazy"
                />
              </div>
              <div className={style.aboutCaption}>
                <strong>+20</strong>
                <span>anos de experiência</span>
              </div>
            </div>
            <div className={style.aboutCopy}>
              <span className={style.kicker}>Quem somos</span>
              <h2>{data.about.title}</h2>
              {data.about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <div className={style.aboutStats}>
                {data.about.stats.map((stat) => (
                  <div key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
              <a
                href={data.social.whatsapp}
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

        {/* ===== SERVIÇOS ===== */}
        <section className={style.servicos} id="servicos">
          <div className={style.container}>
            <div className={style.sectionHeaderRow}>
              <div className={style.sectionHeaderCompact}>
                <span className={style.kicker}>Nossos serviços</span>
                <h2>Cuidado completo para o seu pet.</h2>
              </div>
              <p>
                Da prevenção ao tratamento, estamos aqui para cuidar de quem
                você ama.
              </p>
            </div>
            <div className={style.servicosGrid}>
              {data.services.map((service, index) => {
                const Icon = getIcon(service.icon);
                return (
                  <article className={style.servicoCard} key={service.title}>
                    <div className={style.servicoCardTop}>
                      <span className={style.serviceIndex}>0{index + 1}</span>
                      <Icon className={style.servicoIcon} size={23} />
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                    <span className={style.cardArrow} aria-hidden="true">
                      <ArrowUpRight size={15} />
                    </span>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== ESTRUTURA ===== */}
        <section className={style.estrutura} id="estrutura">
          <div className={style.container}>
            <div
              className={`${style.sectionHeaderRow} ${style.structureHeader}`}
            >
              <div className={style.sectionHeaderCompact}>
                <span className={style.kickerLight}>Infraestrutura</span>
                <h2>Prontos para todas as fases do cuidado.</h2>
              </div>
              <p>
                Instalações modernas e equipamentos de ponta para acompanhar o
                seu pet com segurança.
              </p>
            </div>
            <div className={style.estruturaGrid}>
              <article className={style.estruturaCard}>
                <div className={style.structureIcon}>
                  <Stethoscope size={21} />
                </div>
                <h3>Especialidades</h3>
                <ul>
                  {data.specialties.map((item) => (
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
                  {data.diagnosticServices.map((item) => (
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
                  {data.boardingServices.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* ===== BOUTIQUE ===== */}
        <section className={style.boutique} id="boutique">
          <div className={`${style.container} ${style.boutiqueGrid}`}>
            <div className={style.boutiqueCopy}>
              <span className={style.kicker}>Boutique {data.name}</span>
              <h2>Bem-estar também mora nos pequenos detalhes.</h2>
              <p>
                Depois do atendimento, continue esse cuidado em casa. Nossa
                boutique reúne itens selecionados para tornar a rotina do seu
                pet mais gostosa, segura e cheia de personalidade.
              </p>
              <ul className={style.boutiqueList}>
                {data.boutiqueItems.map((item) => (
                  <li key={item}>
                    <Check size={14} />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://petshopbrasil.vercel.app"
                className={style.btnSecondary}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visite a boutique
                <ArrowRight size={16} />
              </a>
            </div>
            <div className={style.boutiqueVisual}>
              <img src={data.images.boutique} alt="Pet shop" loading="lazy" />
              <div className={style.boutiqueNote}>
                <PawPrint size={17} />
                <span>para todos os estilos</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CONFIANÇA ===== */}
        <section className={style.confidence} id="depoimentos">
          <div className={style.container}>
            <div className={style.sectionHeader}>
              <span className={style.kicker}>Confiança que se constrói</span>
              <h2>O cuidado que você sente desde a chegada.</h2>
              <p>
                Cada escolha da {data.name} existe para que vocês se sintam em
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
                <p>
                  Profissionais especializados para acompanhar cada necessidade.
                </p>
                <strong>Equipe multidisciplinar</strong>
              </article>
              <article className={style.confidenceCard}>
                <Quote size={25} />
                <p>
                  Mais do que tratamentos: presença, respeito e cuidado humano.
                </p>
                <strong>Nosso jeito de cuidar</strong>
              </article>
            </div>
          </div>
        </section>

        {/* ===== CONTATO ===== */}
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
                    <p>{data.contact.address}</p>
                    {data.contact.addressComplement && (
                      <small>{data.contact.addressComplement}</small>
                    )}
                  </div>
                </div>
                <div className={style.contatoItem}>
                  <span className={style.contactIcon}>
                    <Phone size={19} />
                  </span>
                  <div>
                    <strong>Telefone</strong>
                    <p>
                      <a href={`tel:${data.contact.phone.replace(/\D/g, "")}`}>
                        {data.contact.phone}
                      </a>
                    </p>
                    {data.contact.phone2 && (
                      <p>
                        <a
                          href={`tel:${data.contact.phone2.replace(/\D/g, "")}`}
                        >
                          {data.contact.phone2}
                        </a>
                      </p>
                    )}
                  </div>
                </div>
                <div className={style.contatoItem}>
                  <span className={style.contactIcon}>
                    <Mail size={19} />
                  </span>
                  <div>
                    <strong>E-mail</strong>
                    <p>
                      <a href={`mailto:${data.contact.email}`}>
                        {data.contact.email}
                      </a>
                    </p>
                  </div>
                </div>
                <div className={style.contactHours}>
                  <div>
                    <Clock size={18} />
                    <strong>Horário de funcionamento</strong>
                  </div>
                  {data.contact.hours.map((h) => (
                    <p key={h}>{h}</p>
                  ))}
                  <small>Atendimento com horário marcado.</small>
                </div>
                <div className={style.parkingNote}>
                  <Car size={18} />
                  {data.contact.parking}
                </div>
              </div>
              <div className={style.contatoMapa}>
                <iframe
                  src={data.contact.mapSrc}
                  title={`Mapa ${data.name}`}
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
                <img src={data.images.logo} alt={data.name} />
              </div>
              <div>
                <h3>{data.name}</h3>
                <p>{data.footer.about}</p>
              </div>
            </div>
            <a
              className={style.footerCta}
              href={data.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale conosco
              <ArrowUpRight size={16} />
            </a>
          </div>
          <div className={style.footerColumns}>
            <div className={style.footerCol}>
              <h4>Explorar</h4>
              {data.footer.links.explore.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
            <div className={style.footerCol}>
              <h4>Visite também</h4>
              {data.footer.links.visit.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
            <div className={style.footerCol}>
              <h4>Fale conosco</h4>
              <a href={`tel:${data.contact.phone.replace(/\D/g, "")}`}>
                {data.contact.phone}
              </a>
              <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
              <a
                href={data.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram @{data.name.replace(/\s/g, "").toLowerCase()}
              </a>
            </div>
          </div>
          <div className={style.footerBottom}>
            <span>
              © {new Date().getFullYear()} {data.name}
            </span>
            <span>Todos os direitos reservados</span>
          </div>
        </div>
      </footer>
      <PopupBoutique />
    </div>
  );
}

export default Home;
