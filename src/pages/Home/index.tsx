import {
  Clock,
  Building2,
  Stethoscope,
  DollarSign,
  Car,
  Heart,
  Star,
  Syringe,
  Microscope,
  Scissors,
  FlaskConical,
  Pill,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import style from "./Home.module.css";
import Formulario from "../../component/Formulario";

function Home() {
  return (
    <div className={style.Home}>
      {/* ===== MAIN ===== */}
      <main>
        {/* HERO */}
        <section className={style.hero} id="inicio">
          <div className={style.container}>
            <div className={style.heroContent}>
              <span className={style.tag}>
                🐾 Clínica Veterinária em Maceió
              </span>
              <h1>
                Tradição e Inovação <br />
                em Cuidados Veterinários
              </h1>
              <p className={style.lead}>
                Estamos comprometidos em oferecer os melhores cuidados para o
                seu companheiro de quatro patas. Nossos serviços atendem às
                necessidades individuais do seu pet, com preços acessíveis e
                atendimento 24h.
              </p>
              <div className={style.heroButtons}>
                <a
                  href="https://wa.me/5582999410544"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={style.btnPrimary}
                >
                  Fale Conosco
                </a>
                <a href="#servicos" className={style.btnSecondary}>
                  Conheça nossos serviços
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section className={style.diferenciais} id="diferenciais">
          <div className={style.container}>
            <div className={style.sectionHeader}>
              <span className={style.tag}>Por que escolher a Animal Amigo</span>
              <h2>Cuidado que vai além do esperado</h2>
              <p className={style.lead}>
                Oferecemos uma experiência completa para você e seu pet.
              </p>
            </div>
            <div className={style.diffGrid}>
              <div className={style.diffCard}>
                <Clock className={style.diffIcon} size={48} />
                <h5>Atendimento 24h</h5>
                <p>
                  Estamos disponíveis a qualquer hora para garantir que seu pet
                  receba cuidados sempre que precisar.
                </p>
              </div>
              <div className={style.diffCard}>
                <Building2 className={style.diffIcon} size={48} />
                <h5>Estrutura Completa</h5>
                <p>
                  Nosso hospital está equipado com laboratório interno e
                  instalações modernas para o bem-estar do seu pet.
                </p>
              </div>
              <div className={style.diffCard}>
                <Stethoscope className={style.diffIcon} size={48} />
                <h5>Equipe Multidisciplinar</h5>
                <p>
                  Profissionais especializados em diversas áreas para garantir o
                  melhor tratamento para o seu pet.
                </p>
              </div>
              <div className={style.diffCard}>
                <DollarSign className={style.diffIcon} size={48} />
                <h5>Preços Acessíveis</h5>
                <p>
                  Acreditamos que cada pet merece cuidados de qualidade a preços
                  justos.
                </p>
              </div>
              <div className={style.diffCard}>
                <Car className={style.diffIcon} size={48} />
                <h5>Estacionamento Grátis</h5>
                <p>
                  Possuímos estacionamento próprio e gratuito para tornar sua
                  visita mais conveniente.
                </p>
              </div>
              <div className={style.diffCard}>
                <Heart className={style.diffIcon} size={48} />
                <h5>Compromisso com a Saúde</h5>
                <p>
                  Estamos dedicados a fornecer o melhor tratamento para manter
                  seu pet saudável e feliz.
                </p>
              </div>
              <div className={style.diffCard}>
                <Star className={style.diffIcon} size={48} />
                <h5>5 Estrelas no Google</h5>
                <p>
                  Reconhecidos pela excelência no atendimento e cuidado com os
                  pets.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Formulario />

        {/* SOBRE */}
        <section className={style.sobre} id="sobre">
          <div className={style.container}>
            <div className={style.sobreContent}>
              <span className={style.tag}>Quem Somos</span>
              <h2>Uma história de amor pelos animais</h2>
              <p>
                Olá, eu sou <strong>Paula Nunes</strong>, médica veterinária
                formada pela UFRPE há mais de 25 anos, Pós-Graduanda em
                Neonatologia e Geriatria Veterinária. Fundadora da Animal Amigo.
              </p>
              <p>
                Minha história com a medicina veterinária nasceu dentro de casa,
                inspirada pelo meu pai, <strong>Dr. Paulo Bezerra</strong> – o
                primeiro médico veterinário do estado de Alagoas (CRMV-AL 001) –
                de quem herdei não apenas a vocação, mas uma paixão profunda
                pelo cuidado com os animais.
              </p>
              <p>
                Desde muito jovem, compreendi que meu propósito seria honrar
                esse legado, oferecendo mais do que tratamentos: oferecendo
                acolhimento, amor e um cuidado verdadeiramente humano aos pets.
              </p>
              <a
                href="https://wa.me/5582999410544"
                target="_blank"
                rel="noopener noreferrer"
                className={style.btnPrimary}
              >
                Conheça nossa história
              </a>
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section className={style.servicos} id="servicos">
          <div className={style.container}>
            <div className={style.sectionHeader}>
              <span className={style.tag}>Nossos Serviços</span>
              <h2>Cuidado completo para o seu pet</h2>
              <p className={style.lead}>
                Da prevenção ao tratamento, estamos aqui para cuidar de quem
                você ama.
              </p>
            </div>
            <div className={style.servicosGrid}>
              <div className={style.servicoCard}>
                <Stethoscope className={style.servicoIcon} size={48} />
                <h5>Consultas</h5>
                <p>
                  Atendimento clínico completo com profissionais especializados.
                </p>
              </div>
              <div className={style.servicoCard}>
                <Syringe className={style.servicoIcon} size={48} />
                <h5>Vacinação</h5>
                <p>Calendário vacinal atualizado e protocolos seguros.</p>
              </div>
              <div className={style.servicoCard}>
                <Microscope className={style.servicoIcon} size={48} />
                <h5>Exames e Diagnóstico</h5>
                <p>Ultrassonografia, radiografia, laboratório e muito mais.</p>
              </div>
              <div className={style.servicoCard}>
                <Scissors className={style.servicoIcon} size={48} />
                <h5>Cirurgias</h5>
                <p>
                  Cirurgias simples, complexas, ortopédicas e neurocirurgias.
                </p>
              </div>
              <div className={style.servicoCard}>
                <Building2 className={style.servicoIcon} size={48} />
                <h5>Internamento</h5>
                <p>Internação 24h com acompanhamento veterinário.</p>
              </div>
              <div className={style.servicoCard}>
                <FlaskConical className={style.servicoIcon} size={48} />
                <h5>Especialidades</h5>
                <p>
                  Cardiologia, dermatologia, oftalmologia, ortopedia e mais.
                </p>
              </div>
              <div className={style.servicoCard}>
                <Pill className={style.servicoIcon} size={48} />
                <h5>Farmácia e Pet Shop</h5>
                <p>Medicamentos, rações premium, acessórios e perfumaria.</p>
              </div>
              <div className={style.servicoCard}>
                <Scissors className={style.servicoIcon} size={48} />
                <h5>Banho e Tosa</h5>
                <p>Estética e bem-estar para o seu pet.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ESTRUTURA */}
        <section className={style.estrutura} id="estrutura">
          <div className={style.container}>
            <div className={style.sectionHeader}>
              <span className={style.tag}>Infraestrutura</span>
              <h2>Estrutura completa para o seu pet</h2>
              <p className={style.lead}>
                Contamos com instalações modernas e equipamentos de ponta.
              </p>
            </div>
            <div className={style.estruturaGrid}>
              <div className={style.estruturaCard}>
                <h5>
                  <Stethoscope size={24} /> Especialidades
                </h5>
                <ul>
                  <li>Medicina Felina</li>
                  <li>Ortopedia</li>
                  <li>Cardiologia</li>
                  <li>Dermatologia</li>
                  <li>Endocrinologia</li>
                  <li>Neurologia</li>
                  <li>Oftalmologia</li>
                  <li>Oncologia</li>
                </ul>
              </div>
              <div className={style.estruturaCard}>
                <h5>
                  <Microscope size={24} /> Exames e Diagnóstico
                </h5>
                <ul>
                  <li>Ultrassonografia</li>
                  <li>Radiografia</li>
                  <li>Endoscopia</li>
                  <li>Laboratório hematológico</li>
                  <li>Raio X</li>
                </ul>
              </div>
              <div className={style.estruturaCard}>
                <h5>
                  <Building2 size={24} /> Internamento
                </h5>
                <ul>
                  <li>UTI 24h</li>
                  <li>Internamento infeccioso</li>
                  <li>Internamento separado para cães e gatos</li>
                  <li>Acompanhamento veterinário 24h</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* BOUTIQUE */}
        <section className={style.boutique} id="boutique">
          <div className={style.container}>
            <div className={style.sectionHeader}>
              <span className={style.tag}>Boutique</span>
              <h2>Boutique Animal Amigo</h2>
              <p
                className={style.lead}
                style={{ maxWidth: "700px", margin: "0 auto" }}
              >
                Acreditamos que bem‑estar vai além do atendimento veterinário.
                Por isso, nossa boutique oferece itens selecionados para
                proporcionar ao seu pet uma experiência de cuidado completa.
              </p>
            </div>
            <ul className={style.boutiqueList}>
              <li>Roupas</li>
              <li>Acessórios</li>
              <li>Bolsas</li>
              <li>Brinquedos</li>
              <li>Cama</li>
              <li>Guias e Coleiras</li>
              <li>Rações Premium</li>
              <li>Perfumaria</li>
            </ul>
          </div>
        </section>

        {/* CONTATO */}
        <section className={style.contato} id="contato">
          <div className={style.container}>
            <div className={style.sectionHeader}>
              <span className={style.tag}>Contato</span>
              <h2>Estamos prontos para atender você e seu pet</h2>
              <p className={style.lead}>
                Localizada em um ponto privilegiado, a Animal Amigo recebe você
                e seu pet em um espaço acolhedor, seguro e pensado em cada
                detalhe.
              </p>
            </div>
            <div className={style.contatoGrid}>
              <div className={style.contatoInfo}>
                <div className={style.contatoItem}>
                  <MapPin size={32} />
                  <div>
                    <strong>Endereço</strong>
                    <p>
                      Av. Dr. Antônio Gomes de Barros, 1176 - Jatiúca, Maceió -
                      AL
                    </p>
                    <small>(Antiga Av. Amélia Rosa)</small>
                  </div>
                </div>
                <div className={style.contatoItem}>
                  <Phone size={32} />
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
                  <Mail size={32} />
                  <div>
                    <strong>E-mail</strong>
                    <p>
                      <a href="mailto:animalamigomaceio@gmail.com">
                        animalamigomaceio@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className={style.contatoItem}>
                  <Clock size={32} />
                  <div>
                    <strong>Horário de Funcionamento</strong>
                    <p>Seg à Sex: 08h às 18h</p>
                    <p>Sábado: 08h às 12h</p>
                    <small>
                      Atendimento com horário marcado para sua comodidade
                    </small>
                  </div>
                </div>
                <div className={style.contatoItem}>
                  <Car size={32} />
                  <div>
                    <strong>Estacionamento</strong>
                    <p>Estacionamento próprio e gratuito</p>
                  </div>
                </div>
              </div>
              <div className={style.contatoMapa}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.350883402848!2d-35.71177989999999!3d-9.651029699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x70145bba3ec13a3%3A0xaecb9c5f20553107!2sAnimal%20Amigo%3A%20Cl%C3%ADnica%20Veterin%C3%A1ria%2C%20Banho%20e%20Tosa%20e%20Pet%20Shop%20em%20Macei%C3%B3!5e0!3m2!1spt-BR!2sbr!4v1765216204994!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="400"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa Animal Amigo"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className={style.footer}>
        <div className={style.container}>
          <div className={style.footerCol}>
            <h3>Animal Amigo</h3>
            <p>Cuidado, carinho e excelência para o seu pet.</p>
          </div>
          <div className={style.footerCol}>
            <h4>Menu</h4>
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre Nós</a>
            <a href="#servicos">Serviços</a>
            <a href="#diferenciais">Diferenciais</a>
            <a href="#estrutura">Estrutura</a>
            <a href="#depoimentos">Depoimentos</a>
            <a href="#contato">Contato</a>
          </div>
          <div className={style.footerCol}>
            <h4>Redes Sociais</h4>
            <div className={style.footerSocial}>
              <a
                href="https://www.instagram.com/animal.amigo/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                instagram
              </a>
            </div>
          </div>
        </div>
        <div className={style.footerBottom}>
          <p>&copy; 2026 Animal Amigo · Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
