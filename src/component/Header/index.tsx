import { useState } from "react";
import style from "./Header.module.css";
import Logo from "../../img/Design_sem_nome_-_2026-08-30T172737.744-removebg-preview.png";
import Whatsapp from "../../img/whatsapp_logo_icon_186881.ico";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={style.header}>
        <div className={style.headerLeft}>
          <button
            className={`${style.hamburger} ${menuOpen ? style.active : ""}`}
            onClick={toggleMenu}
            aria-label="Abrir menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className={style.logo}>
            <a href="/">
              <img src={Logo} alt="Animal Amigo" />
              <h2>Animal amigo</h2>
            </a>
          </div>
        </div>

        <nav className={style.nav}>
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre Nós</a>
          <a href="#servicos">Serviços</a>
          <a href="#diferenciais">Diferenciais</a>
          <a href="#estrutura">Estrutura</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#contato">Contato</a>
        </nav>

        <div className={style.headerRight}>
          <a
            href="https://wa.me/5582999410544"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              <img src={Whatsapp} alt="WhatsApp" />
              Contato
            </button>
          </a>
          <a href="tel:+5582999410544">(82) 99941-0544</a>
        </div>
      </header>

      {/* Menu Mobile */}
      <div
        className={`${style.mobileMenu} ${menuOpen ? style.open : ""}`}
        id="mobileMenu"
      >
        <a href="#inicio" onClick={closeMenu}>
          Início
        </a>
        <a href="#sobre" onClick={closeMenu}>
          Sobre Nós
        </a>
        <a href="#servicos" onClick={closeMenu}>
          Serviços
        </a>
        <a href="#diferenciais" onClick={closeMenu}>
          Diferenciais
        </a>
        <a href="#estrutura" onClick={closeMenu}>
          Estrutura
        </a>
        <a href="#depoimentos" onClick={closeMenu}>
          Depoimentos
        </a>
        <a href="#contato" onClick={closeMenu}>
          Contato
        </a>
      </div>
      <div
        className={`${style.overlay} ${menuOpen ? style.active : ""}`}
        onClick={closeMenu}
      ></div>
    </>
  );
}

export default Header;
