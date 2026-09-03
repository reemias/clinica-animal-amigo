import { useState, useEffect, useRef } from "react";
import styles from "./BoutiqueCards.module.css";

// ============================================================
//  TIPOS
// ============================================================

interface Produto {
  _id: string;
  sku: string;
  nome: string;
  descricao?: string;
  marca: string;
  categoria: string;
  subcategoria: string;
  fotos: string[];
  preco_pacote_fechado: number;
  desconto_percentual: number;
  destaque: boolean;
  tipo_produto: boolean;
}

interface ApiResponse {
  results: Produto[];
  total: number;
  page: number;
  limit: number;
}

// ============================================================
//  COMPONENTE PRINCIPAL
// ============================================================

function PopupBoutique() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isClosedPermanently, setIsClosedPermanently] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const hasTriggeredRef = useRef(false);

  // Busca produtos
  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch(
          "https://backend-barbearia-ten.vercel.app/api/produtos",
        );
        if (!response.ok) throw new Error(`Erro: ${response.status}`);
        const data: ApiResponse = await response.json();
        const destaques =
          data.results?.filter((p) => p.destaque === true) || [];
        setProdutos(destaques);
      } catch (err) {
        console.error("Erro ao buscar produtos:", err);
        setError("Não foi possível carregar os produtos.");
      } finally {
        setLoading(false);
      }
    };
    fetchProdutos();
  }, []);

  // Listener de scroll
  useEffect(() => {
    const handleScroll = () => {
      if (hasTriggeredRef.current) return;
      if (isClosedPermanently) return;
      if (loading) return;

      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;

      if (scrollPercent >= 0.1 && produtos.length > 0) {
        hasTriggeredRef.current = true;
        setIsOpen(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, produtos.length, isClosedPermanently]);

  // Fechar o pop-up permanentemente (até recarregar a página)
  const closePopup = () => {
    setIsOpen(false);
    setIsClosedPermanently(true);
    hasTriggeredRef.current = true;
  };

  // Navegação do carrossel
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % produtos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + produtos.length) % produtos.length);
  };

  // Se não houver produtos ou houve erro, não mostra o pop-up
  if (loading || error || produtos.length === 0) return null;

  if (!isOpen) return null;
  return (
    <div className={styles.overlay} onClick={closePopup}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={closePopup}>
          ✕
        </button>

        <div className={styles.container}>
          {/* Área 1: título (ocupa 2 colunas) */}
          <div className={styles.titulo}>
            <h2>compre na nossa Pet-shop</h2>
          </div>

          {/* Área 2: slide (coluna esquerda) */}
          <div className={styles.slide}>
            <div className={styles.carouselWrapper}>
              <button className={styles.arrowLeft} onClick={prevSlide}>
                ‹
              </button>
              <div className={styles.slideContainer}>
                <div
                  className={styles.slideTrack}
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {produtos.map((produto) => (
                    <div key={produto._id} className={styles.slideItem}>
                      <div className={styles.imageWrapper}>
                        {produto.fotos?.length > 0 ? (
                          <img
                            src={produto.fotos[0]}
                            alt={produto.nome}
                            loading="lazy"
                          />
                        ) : (
                          <div className={styles.imagePlaceholder}>📸</div>
                        )}
                        {produto.desconto_percentual > 0 && (
                          <span className={styles.discount}>
                            {produto.desconto_percentual}% OFF
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button className={styles.arrowRight} onClick={nextSlide}>
                ›
              </button>
            </div>
            {/* Dots dentro da área slide (abaixo das imagens) */}
            <div className={styles.dots}>
              {produtos.map((_, index) => (
                <span
                  key={index}
                  className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ""}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>

          {/* Área 3: informação do produto (coluna direita) */}
          <div className={styles.informacao}>
            <h3 className={styles.productName}>
              {produtos[currentSlide].nome}
            </h3>
            <p className={styles.productBrand}>
              {produtos[currentSlide].marca}
            </p>
            <p className={styles.productPrice}>
              R$ {produtos[currentSlide].preco_pacote_fechado.toFixed(2)}
            </p>
            <a
              href={`https://petshopbrasil.vercel.app/produto/${produtos[currentSlide]._id}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.buyButton}
            >
              Comprar
            </a>
          </div>

          {/* Área 4: botão "conheça nossa pet-shop" (rodapé, 2 colunas) */}
          <div className={styles.buttonIrPetShop}>
            <a
              href="https://petshopbrasil.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.shopButton}
            >
              conheça nossa pet-shop →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopupBoutique;
