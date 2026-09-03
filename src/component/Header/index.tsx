import { useState, useEffect, useRef } from "react";
import {
  ArrowUpRight,
  PhoneCall,
  HelpCircle,
  Building2,
  List,
  MessageCircle,
} from "lucide-react";
import { renderToStaticMarkup } from "react-dom/server";
import style from "./Header.module.css";
import { useCompany } from "../../context/CompanyContext";
import Whatsapp from "../../img/whatsapp_logo_icon_186881.ico";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

const menuItems = [
  ["Início", "#inicio"],
  ["Sobre nós", "#sobre"],
  ["Serviços", "#servicos"],
  ["Diferenciais", "#diferenciais"],
  ["Estrutura", "#estrutura"],
  ["Confiança", "#depoimentos"],
  ["Contato", "#contato"],
];

/**
 * Hook personalizado que gerencia o tour guiado pelo Driver.js
 * Substitui os emojis por ícones Lucide renderizados via HTML (string)
 */
function useTour(companyName: string, phone: string) {
  const [tourStarted, setTourStarted] = useState(false);

  const logoRef = useRef<HTMLAnchorElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const phoneRef = useRef<HTMLAnchorElement>(null);
  const whatsappRef = useRef<HTMLAnchorElement>(null);

  // Retorna uma string HTML com o ícone e o texto, para ser usada no title do popover
  const iconWithText = (icon: React.ReactElement, text: string): string => {
    const iconHtml = renderToStaticMarkup(icon);
    return `<span style="display:inline-flex;align-items:center;gap:6px;">${iconHtml} ${text}</span>`;
  };

  const startTour = () => {
    if (tourStarted) return;
    setTourStarted(true);

    const driverObj = driver({
      showProgress: true,
      steps: [
        {
          element: logoRef.current!,
          popover: {
            title: iconWithText(<Building2 size={18} />, "Logo"),
            description: `Esta é a logo da ${companyName}. Clique para voltar ao início.`,
            side: "bottom",
            align: "start",
          },
        },
        {
          element: navRef.current!,
          popover: {
            title: iconWithText(<List size={18} />, "Navegação"),
            description:
              "Aqui você encontra todas as seções do site: serviços, estrutura, contato e muito mais.",
            side: "bottom",
            align: "center",
          },
        },
        {
          element: phoneRef.current!,
          popover: {
            title: iconWithText(<PhoneCall size={18} />, "Telefone"),
            description: `Ligue diretamente para a clínica: ${phone}`,
            side: "bottom",
            align: "end",
          },
        },
        {
          element: whatsappRef.current!,
          popover: {
            title: iconWithText(<MessageCircle size={18} />, "WhatsApp"),
            description:
              "Agende consultas, tire dúvidas ou fale com nossa equipe pelo WhatsApp.",
            side: "bottom",
            align: "end",
          },
        },
      ],
      onDestroyed: () => {
        setTourStarted(false);
      },
    });

    driverObj.drive();
  };

  // Inicia o tour automaticamente 2 segundos após o carregamento
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!tourStarted) {
        startTour();
      }
    }, 2000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    logoRef,
    navRef,
    phoneRef,
    whatsappRef,
    startTour,
    tourStarted,
  };
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const company = useCompany();

  const { logoRef, navRef, phoneRef, whatsappRef, startTour, tourStarted } =
    useTour(company.name, company.contact.phone);

  const toggleMenu = () => setMenuOpen((open) => !open);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={style.header}>
        <div className={style.headerInner}>
          <div className={style.headerLeft}>
            <button
              className={`${style.hamburger} ${menuOpen ? style.active : ""}`}
              onClick={toggleMenu}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobileMenu"
            >
              <span />
              <span />
              <span />
            </button>
            <a
              ref={logoRef}
              className={style.logo}
              href="/"
              aria-label={`${company.name} — início`}
            >
              <img src={company.images.logo} alt={company.name} />
              <span>
                <strong>{company.name}</strong>
                <small>{company.slogan}</small>
              </span>
            </a>
          </div>

          <nav
            ref={navRef}
            className={style.nav}
            aria-label="Navegação principal"
          >
            {menuItems.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>

          <div className={style.headerRight}>
            <a
              ref={phoneRef}
              className={style.phoneLink}
              href={`tel:${company.contact.phone.replace(/\D/g, "")}`}
            >
              <PhoneCall size={16} />
              <span>{company.contact.phone}</span>
            </a>
            <a
              ref={whatsappRef}
              className={style.headerCta}
              href={company.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Whatsapp} alt="WhatsApp" />
              <span>WhatsApp</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </header>

      {/* Botão flutuante para reiniciar o tour (visível apenas se o tour já tiver sido iniciado) */}
      {tourStarted && (
        <button
          className={style.tourTrigger}
          onClick={startTour}
          aria-label="Reiniciar tour"
          title="Ver tour novamente"
        >
          <HelpCircle size={20} />
        </button>
      )}

      {/* Mobile menu e overlay */}
      <aside
        className={`${style.mobileMenu} ${menuOpen ? style.open : ""}`}
        id="mobileMenu"
        aria-label="Menu mobile"
        aria-hidden={!menuOpen}
      >
        <div className={style.mobileMenuBrand}>
          <img src={company.images.logo} alt={company.name} />
          <div>
            <strong>{company.name}</strong>
            <small>{company.slogan}</small>
          </div>
        </div>
        <nav>
          {menuItems.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
            >
              {label}
              <ArrowUpRight size={16} />
            </a>
          ))}
        </nav>
        <a
          className={style.mobileCta}
          href={company.social.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
          tabIndex={menuOpen ? 0 : -1}
        >
          <MessageCircle size={18} />
          Falar com a clínica
        </a>
      </aside>
      <button
        className={`${style.overlay} ${menuOpen ? style.active : ""}`}
        onClick={closeMenu}
        aria-label="Fechar menu"
        tabIndex={menuOpen ? 0 : -1}
      />
    </>
  );
}

export default Header;
