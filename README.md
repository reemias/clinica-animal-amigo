# Animal Amigo

Site institucional da **Animal Amigo**, clínica veterinária, pet shop e serviço de banho e tosa em Maceió. A aplicação apresenta a estrutura, os serviços, os diferenciais, a história da clínica, a boutique, os canais de contato e um formulário para solicitação de agendamento.

> **Objetivo do projeto:** oferecer uma experiência digital acolhedora, clara e responsiva para tutores que procuram atendimento veterinário, informações sobre a clínica ou contato direto pelo WhatsApp.

## Visão geral

A interface utiliza a identidade visual existente da clínica, baseada principalmente em verde institucional, coral, creme, ciano e nos elementos gráficos do logotipo. A Home foi organizada como uma narrativa contínua: apresentação da marca, diferenciais, agendamento, história, serviços, infraestrutura, boutique, confiança e contato.

O projeto é uma aplicação frontend estática, sem backend próprio. O formulário de agendamento envia os dados para o serviço externo Web3Forms e exibe os estados de sucesso ou erro com SweetAlert2.

## Tecnologias

| Categoria | Tecnologia |
| --- | --- |
| Interface | React 19 + TypeScript |
| Build e desenvolvimento | Vite 7 |
| Roteamento | React Router DOM 7 |
| Ícones | Lucide React |
| Formulário | React DatePicker + date-fns locale `ptBR` |
| Feedback visual | SweetAlert2 |
| PWA | vite-plugin-pwa + Workbox |
| Qualidade | ESLint + TypeScript |

## Requisitos

Antes de começar, instale uma versão recente do **Node.js** com o **npm** disponível no terminal. O projeto foi desenvolvido para rodar em ambientes modernos com suporte a módulos ES.

## Como executar

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento com hot reload:

```bash
npm run dev
```

Por padrão, o Vite disponibiliza a aplicação no endereço indicado no terminal, normalmente `http://localhost:5173`.

Para gerar a versão de produção:

```bash
npm run build
```

Para servir localmente o build gerado:

```bash
npm run preview
```

Para executar a análise estática do código:

```bash
npm run lint
```

## Estrutura do projeto

```text
.
├── public/
│   └── favicon.svg
├── src/
│   ├── component/
│   │   ├── Formulario/
│   │   │   ├── Formulario.module.css
│   │   │   └── index.tsx
│   │   └── Header/
│   │       ├── Header.module.css
│   │       └── index.tsx
│   ├── img/
│   │   ├── imagens da clínica e do pet shop
│   │   ├── logotipo da Animal Amigo
│   │   └── ícone do WhatsApp
│   ├── pages/
│   │   └── Home/
│   │       ├── Home.module.css
│   │       └── index.tsx
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── Routers.tsx
├── index.html
├── package.json
└── vite.config.ts
```

A aplicação possui atualmente uma rota pública principal:

| Rota | Página | Descrição |
| --- | --- | --- |
| `/` | Home | Página institucional completa da Animal Amigo |

## Organização da Home

A página inicial está dividida nas seguintes seções:

1. **Hero:** mensagem principal, CTAs, nota de confiança e fotografia da fachada.
2. **Faixa de confiança:** cuidado seguro, atendimento humano e estrutura completa.
3. **Diferenciais:** atendimento 24h, estrutura, equipe, preços, estacionamento, compromisso com a saúde e avaliação no Google.
4. **Agendamento:** formulário com dados do tutor, serviço, data, horário e observações.
5. **Sobre nós:** história de Paula Nunes, Dr. Paulo Bezerra e o legado familiar da clínica.
6. **Serviços:** consultas, vacinação, exames, cirurgias, internamento, especialidades, pet shop e banho e tosa.
7. **Infraestrutura:** especialidades, exames e diagnóstico e internamento.
8. **Boutique:** produtos e itens selecionados para cães e gatos.
9. **Confiança:** mensagens institucionais sobre acolhimento e acompanhamento próximo.
10. **Contato:** endereço, telefones, e-mail, horário, estacionamento e mapa.
11. **Rodapé:** atalhos de navegação, contatos e Instagram.

## Formulário de agendamento

O componente `src/component/Formulario` concentra a lógica de solicitação de agendamento. Os horários são gerados em intervalos de 30 minutos, considerando os períodos de atendimento configurados no componente. A data utiliza `react-datepicker` com localização em português do Brasil e bloqueia datas anteriores ao dia atual.

O envio é feito para o endpoint do Web3Forms. Em uma evolução futura, recomenda-se mover a chave de integração para uma estratégia de configuração segura, evitando mantê-la diretamente no código-fonte público.

## Diretrizes visuais

A interface deve preservar a combinação de **verde institucional** para confiança e estabilidade, **coral** para chamadas e destaques, **creme** para acolhimento e **ciano/laranja** como referências presentes nos ativos originais da marca.

Os estilos globais estão em `src/index.css`. Os componentes e páginas utilizam CSS Modules para evitar colisões entre regras. Novas seções devem priorizar grids responsivos, contraste adequado, foco visível para teclado, textos legíveis e interações rápidas.

Em telas menores, a ordem recomendada é manter o conteúdo textual e os CTAs antes das imagens quando houver uma seção editorial. O menu mobile deve permanecer acessível por teclado e os links de navegação devem apontar para âncoras existentes na Home.

## Convenções de desenvolvimento

Use componentes React funcionais com TypeScript e mantenha a lógica de negócio próxima do componente ao qual ela pertence. Prefira componentes pequenos e reutilizáveis para blocos repetidos, como cards de serviço, diferenciais e informações de contato.

Ao adicionar uma nova imagem, mantenha o `alt` descritivo e verifique se o uso do ativo preserva o contraste e o enquadramento em diferentes larguras de tela. Ao alterar uma âncora de navegação, atualize também o menu desktop, o menu mobile e o rodapé.

Antes de abrir um pull request ou enviar alterações, execute:

```bash
npm run lint
npm run build
```

## Contato da clínica

| Canal | Informação |
| --- | --- |
| Telefone principal | [(82) 99941-0544](tel:+5582999410544) |
| Telefone fixo | [(82) 3028-5726](tel:+558230285726) |
| E-mail | [animalamigomaceio@gmail.com](mailto:animalamigomaceio@gmail.com) |
| Instagram | [@animal.amigo](https://www.instagram.com/animal.amigo/) |
| Endereço | Av. Dr. Antônio Gomes de Barros, 1176 — Jatiúca, Maceió — AL |

## Licença e conteúdo

Este repositório contém a implementação do site e ativos visuais da Animal Amigo. Textos, fotografias, logotipo e demais materiais institucionais devem ser tratados como conteúdo da marca e não devem ser reutilizados sem autorização.
