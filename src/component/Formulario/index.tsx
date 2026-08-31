import React, { useState } from "react";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ptBR } from "date-fns/locale"; // para exibir em português
import styles from "./Formulario.module.css";
import { Dog } from "lucide-react";

// Lista de serviços organizada por categoria (mantida igual)
const servicos = {
  "ÁREAS CLÍNICAS": [
    "Anestesia",
    "Animais Silvestres e Exóticos (NAC)",
    "Cardiologia",
    "Clínica Médica de Pequenos Animais",
    "Dermatologia",
    "Endocrinologia",
    "Fisioterapia",
    "Gastroenterologia",
    "Geriatria",
    "Medicina Felina",
    "Nefrologia",
    "Nefrologia e Urologia",
    "Neonatologia",
    "Neurologia",
    "Odontologia Veterinária",
    "Oftalmologia",
    "Oncologia Veterinária",
    "Ortopedia",
    "Ultrassonografia",
  ],
  "ÁREAS CIRÚRGICAS": [
    "Anestesiologia e Dor",
    "Cirurgia Geral",
    "Cirurgia de Tecidos Moles",
    "Cirurgia Oftálmica",
    "Cirurgia Oncológica",
    "Odontologia",
    "Ortopedia e Traumatologia",
  ],
  "DIAGNÓSTICO E IMAGEM": [
    "Anatomia Patológica",
    "Citopatologia",
    "Histopatologia",
    "Patologia Clínica (Laboratorial)",
    "Radiologia / Ultrassonografia",
  ],
};

// Gera horários de 30 em 30 minutos entre 08:00–12:00 e 13:00–18:00
const gerarHorarios = (): string[] => {
  const horarios: string[] = [];
  const periodos = [
    { inicio: 8, fim: 12 },
    { inicio: 13, fim: 18 },
  ];

  periodos.forEach(({ inicio, fim }) => {
    for (let hora = inicio; hora < fim; hora++) {
      for (const minuto of [0, 30]) {
        const horaStr = String(hora).padStart(2, "0");
        const minStr = String(minuto).padStart(2, "0");
        horarios.push(`${horaStr}:${minStr}`);
      }
    }
  });
  return horarios;
};

const horariosDisponiveis = gerarHorarios();

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Estado para a data selecionada no DatePicker
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    // ⚠️ ATENÇÃO: Substitua pela sua chave do Web3Forms
    formData.append("access_key", "b518a046-ccd9-48f8-b26a-fafcd2fddebf");

    // Adiciona a data formatada (YYYY-MM-DD) se existir
    if (selectedDate) {
      const year = selectedDate.getFullYear();
      const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
      const day = String(selectedDate.getDate()).padStart(2, "0");
      formData.append("data", `${year}-${month}-${day}`);
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        await Swal.fire({
          icon: "success",
          title: "Agendamento solicitado! 🐾",
          text: "Entraremos em contato para confirmar. Obrigado!",
          confirmButtonColor: "#4CAF50",
          confirmButtonText: "Ótimo!",
        });
        event.currentTarget.reset(); // Limpa campos do formulário
        setSelectedDate(null); // Reseta a data selecionada
      } else {
        await Swal.fire({
          icon: "error",
          title: "Erro ao enviar",
          text: data.message || "Tente novamente mais tarde.",
          confirmButtonColor: "#d33",
          confirmButtonText: "Entendi",
        });
      }
    } catch {
      await Swal.fire({
        icon: "error",
        title: "Erro de conexão",
        text: "Verifique sua internet e tente novamente.",
        confirmButtonColor: "#d33",
        confirmButtonText: "Tentar novamente",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>
        Agendamento Veterinário <Dog />
      </h2>
      <p className={styles.subtitle}>
        Preencha os dados abaixo e em breve confirmaremos sua consulta.
      </p>

      <form onSubmit={onSubmit} className={styles.form}>
        {/* Nome */}
        <div className={styles.inputGroup}>
          <label htmlFor="nome">Nome do Tutor</label>
          <input
            type="text"
            id="nome"
            name="nome"
            required
            placeholder="Seu nome completo"
            className={styles.input}
          />
        </div>

        {/* E-mail */}
        <div className={styles.inputGroup}>
          <label htmlFor="email">E-mail para contato</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="exemplo@email.com"
            className={styles.input}
          />
        </div>

        {/* Serviço (com agrupamento) */}
        <div className={styles.inputGroup}>
          <label htmlFor="servico">Escolha o Serviço</label>
          <select
            id="servico"
            name="servico"
            required
            className={styles.select}
          >
            <option value="">-- Selecione --</option>
            {Object.entries(servicos).map(([categoria, lista]) => (
              <optgroup key={categoria} label={categoria}>
                {lista.map((servico) => (
                  <option key={servico} value={servico}>
                    {servico}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>

        {/* Data com react-datepicker */}
        <div className={styles.inputGroup}>
          <label htmlFor="data">Data do Agendamento</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date: Date | null) => setSelectedDate(date)} // ✅ tipagem explícita
            dateFormat="dd/MM/yyyy"
            locale={ptBR}
            minDate={new Date()}
            placeholderText="Selecione uma data"
            className={styles.input}
            wrapperClassName={styles.datePickerWrapper}
            calendarClassName={styles.calendar}
            required
          />
        </div>

        {/* Horário */}
        <div className={styles.inputGroup}>
          <label htmlFor="horario">Horário Desejado</label>
          <select
            id="horario"
            name="horario"
            required
            className={styles.select}
          >
            <option value="">-- Selecione um horário --</option>
            {horariosDisponiveis.map((h) => (
              <option key={h} value={h}>
                {h}
              </option>
            ))}
          </select>
        </div>

        {/* Observações (opcional) */}
        <div className={styles.inputGroup}>
          <label htmlFor="observacoes">Observações (opcional)</label>
          <textarea
            id="observacoes"
            name="observacoes"
            placeholder="Informe algo relevante, como nome do pet, etc."
            className={styles.textarea}
            rows={3}
          />
        </div>

        <button type="submit" className={styles.button} disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Solicitar agendamento"}
        </button>
      </form>
    </div>
  );
}
