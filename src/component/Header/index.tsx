import { useState } from "react";
import { ArrowUpRight, PhoneCall } from "lucide-react";
import style from "./Header.module.css";
import Logo from "../../img/Design_sem_nome_-_2026-08-30T172737.744-removebg-preview.png";
import Whatsapp from "../../img/whatsapp_logo_icon_186881.ico";

const menuItems = [
  ["Início", "#inicio"],
  ["Sobre nós", "#sobre"],
  ["Serviços", "#servicos"],
  ["Diferenciais", "#diferenciais"],
  ["Estrutura", "#estrutura"],
  ["Confiança", "#depoimentos"],
  ["Contato", "#contato"],
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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
            <a className={style.logo} href="/" aria-label="Animal Amigo — início">
              <img src={Logo} alt="" />
              <span>
                <strong>Animal Amigo</strong>
                <small>Clínica veterinária</small>
              </span>
            </a>
          </div>

          <nav className={style.nav} aria-label="Navegação principal">
            {menuItems.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>

          <div className={style.headerRight}>
            <a className={style.phoneLink} href="tel:+5582999410544">
              <PhoneCall size={16} />
              <span>(82) 99941-0544</span>
            </a>
            <a
              className={style.headerCta}
              href="https://wa.me/5582999410544"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Whatsapp} alt="" />
              <span>Agende pelo WhatsApp</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </header>

      <aside
        className={`${style.mobileMenu} ${menuOpen ? style.open : ""}`}
        id="mobileMenu"
        aria-label="Menu mobile"
        aria-hidden={!menuOpen}
      >
        <div className={style.mobileMenuBrand}>
          <img src={Logo} alt="" />
          <div>
            <strong>Animal Amigo</strong>
            <small>Clínica veterinária</small>
          </div>
        </div>
        <nav>
          {menuItems.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
              {label}
              <ArrowUpRight size={16} />
            </a>
          ))}
        </nav>
        <a
          className={style.mobileCta}
          href="https://wa.me/5582999410544"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
          tabIndex={menuOpen ? 0 : -1}
        >
          <img src={Whatsapp} alt="" />
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
