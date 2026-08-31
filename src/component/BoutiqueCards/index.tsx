import { useState, useEffect } from "react";
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
//  COMPONENTE
// ============================================================

function BoutiqueCards() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch(
          "https://backend-barbearia-ten.vercel.app/api/produtos",
        );
        if (!response.ok) {
          throw new Error(`Erro: ${response.status}`);
        }
        const data: ApiResponse = await response.json();
        const destaques =
          data.results?.filter((produto) => produto.destaque === true) || [];
        setProdutos(destaques);
      } catch (err) {
        console.error("Erro ao buscar produtos:", err);
        setError("Não foi possível carregar os produtos em destaque.");
      } finally {
        setLoading(false);
      }
    };

    fetchProdutos();
  }, []);

  if (loading) {
    return (
      <div className={styles.loading}>
        <p>Carregando produtos em destaque...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.error}>
        <p>{error}</p>
      </div>
    );
  }

  if (produtos.length === 0) {
    return (
      <div className={styles.empty}>
        <p>Nenhum produto em destaque no momento.</p>
      </div>
    );
  }

  return (
    <div className={styles.boutiqueContainer}>
      <div className={styles.boutiqueGrid}>
        {produtos.map((produto) => {
          const productUrl = `https://petshopbrasil.vercel.app/produto/${produto._id}`;
          return (
            <div key={produto._id} className={styles.card}>
              <div className={styles.cardImage}>
                {produto.fotos && produto.fotos.length > 0 ? (
                  <img
                    src={produto.fotos[0]}
                    alt={produto.nome}
                    loading="lazy"
                  />
                ) : (
                  <div className={styles.imagePlaceholder}>
                    <span>📸</span>
                  </div>
                )}
                {produto.desconto_percentual > 0 && (
                  <span className={styles.discountBadge}>
                    {produto.desconto_percentual}% OFF
                  </span>
                )}
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{produto.nome}</h3>
                <p className={styles.cardBrand}>{produto.marca}</p>
                <p className={styles.cardDescription}>
                  {produto.descricao?.substring(0, 80)}
                  {produto.descricao && produto.descricao.length > 80
                    ? "..."
                    : ""}
                </p>
                <div className={styles.cardFooter}>
                  <span className={styles.cardPrice}>
                    R$ {produto.preco_pacote_fechado?.toFixed(2)}
                  </span>
                  <a
                    href={productUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.whatsappButton}
                  >
                    Comprar
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BoutiqueCards;
