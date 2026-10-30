# Portfólio Pessoal — Mateus Gomes (Desenvolvedor Web)

Site de portfólio pessoal independente desenvolvido para **Mateus Gomes**, **Desenvolvedor Web**, combinando estética editorial, identidade visual tecnológica e sofisticada (**Preto & Roxo**) e um **Hero Section Cinematográfico** com retrato de alta resolução em destaque.

---

## 📸 Hero Section Cinematográfico

- **Imagem de Fundo:** Retrato em alta resolução (`assets/images/hero-portrait.png`) com composição em fundo preto e traços geométricos modernos.
- **Configuração de Exibição:**
  - `background-size: cover;`
  - `background-position: center 35%;` (ajustado para `72% 28%` no mobile para manter o rosto centralizado)
  - `background-repeat: no-repeat;`
- **Gradiente Dinâmico para Legibilidade:**
  - Camada de gradiente linear da esquerda para a direita (`rgba(9, 9, 11, 0.96)` até transparência sobre o rosto), garantindo contraste absoluto para leitura sobre área escura.
  - Gradiente vertical nas extremidades para transição invisível com o cabeçalho e com a seção seguinte.
- **Altura Responsiva:** `clamp(620px, 88vh, 100svh)` em desktops/telas amplas e `88svh` em celulares.
- **Alinhamento à Esquerda:** Título, parágrafo descritivo e botões de ação organizados à esquerda, aproveitando a área útil do contêiner sem centralizações forçadas.

---

## 🎨 Identidade Visual: Preto & Roxo

- **Fundo Principal:** `#09090B` (preto profundo sofisticado)
- **Fundo Secundário:** `#111116` (transição suave entre seções)
- **Superfícies & Cards Elevados:** `#181820` (cards de projetos, caixas de formulário, modais)
- **Roxo Principal (Destaque):** `#8B5CF6` (botões primários, links ativos, badges, realces tipográficos)
- **Roxo Claro (Hover & Foco):** `#A78BFA` (estados interativos, transições suaves)
- **Roxo Escuro (Active):** `#6D28D9` (clique ativo e botões pressionados)
- **Texto Principal:** `#F5F3FF` (alta legibilidade, contraste refinado)
- **Texto Secundário:** `#A1A1AA` (cinza neutro para descrições e parágrafos)
- **Bordas Discretas:** `#2A2635` (delimitação elegante sem poluição visual)

### Tipografia
- **Títulos e Destaques Editoriais:** `Averia Serif Libre` (Google Fonts, serifada contemporânea)
- **Textos de Apoio, Menus e Interface:** `Schibsted Grotesk` (Google Fonts, sans-serif limpa e geométrica)

---

## 📐 Layout Responsivo & Aproveitamento da Tela

- **Contêiner Estrutural:** `width: min(100% - 48px, 1440px); margin: 0 auto;` (com margens laterais de 20 a 24 px no mobile), eliminando colunas estreitas e aproveitando melhor a área útil da tela.
- **Alinhamento à Esquerda:** Títulos de seção, descrições, cards e listas alinhados à esquerda por padrão.
- **Grids Fluidos:**
  - *Projetos*: 3 colunas em telas amplas, 2 em tablets e 1 em smartphones.
  - *Explorar*: 12 colunas alternadas com fotos e descrições detalhadas.
  - *Trajetória*: 3 colunas por ano (2024, 2023, 2022).
  - *Sobre mim*: 4 colunas estruturadas (Serviços, Conhecimentos, Contato e Localização).
- **Sem Rolagem Horizontal:** Todas as imagens utilizam `object-fit: cover` e contêineres fluídos.

---

## 📁 Estrutura de Arquivos

```
c:\Users\mateus.gomes\Desktop\Portifólio\
├── index.html               # Estrutura semântica HTML5 com todas as 10 seções preservadas
├── assets/
│   └── images/
│       └── hero-portrait.png # Retrato de Mateus Gomes em alta resolução (1.5 MB)
├── css/
│   ├── variables.css        # Variáveis CSS: paleta preto/roxo, tipografia e tokens fluidos
│   ├── base.css             # Resets, contêiner fluido width: min(100% - 48px, 1440px)
│   ├── layout.css           # Header com backdrop blur escuro, navegação e drawer mobile
│   ├── components.css       # Botões roxos com glow, inputs escuros, badges e modal
│   └── sections.css         # Hero cinematográfico, Projetos, Explorar, Trajetória, etc.
├── js/
│   ├── main.js              # Inicialização de scripts e controle de scroll
│   ├── navigation.js        # Menu responsivo mobile, scrollspy e acessibilidade
│   ├── form.js              # Validação de formulário e integração com endpoint de envio
│   └── projects-modal.js    # Modal interativo de detalhes e estudos de caso
└── README.md                # Documentação completa do projeto
```

---

## 🚀 Como Executar Localmente

### Servidor Local com Python:
No terminal, dentro da pasta do projeto:
```powershell
python -m http.server 3000
```
Em seguida, abra o navegador em: [http://localhost:3000](http://localhost:3000)

Ou abra o arquivo `index.html` diretamente em qualquer navegador moderno.
