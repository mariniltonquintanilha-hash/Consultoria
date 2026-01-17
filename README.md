Consultoria

forneça um readme profissional do codigo
📄 Verkupp - Consultoria de TI Estratégica
📌 Visão Geral
Este é um site institucional responsivo para a Verkupp Consultoria de TI Estratégica, desenvolvido como uma SPA (Single Page Application) puramente com HTML, CSS e JavaScript (sem frameworks). O projeto apresenta uma interface moderna, otimizada para conversão e navegação fluida entre seções.

🚀 Características Principais
✅ Design Moderno & Profissional – Paleta com cores corporativas (azul, ciano, tons escuros)

✅ Totalmente Responsivo – Adaptação para mobile, tablet e desktop

✅ SPA Nativa (JavaScript Vanilla) – Navegação entre páginas sem recarregamento

✅ 6 Seções Principais:

Home (com 6 subseções: Hero, Serviços, Casos, Tecnologias, Processo, CTA)

Serviços Detalhados

Casos de Sucesso

Equipe

Blog

Contato

✅ Menu de Navegação Interativo – com estado ativo e efeitos hover

✅ Formulário de Contato Funcional – com validação básica e feedback

✅ Footer Completo – com links, informações e redes sociais

✅ Animações Suaves – transições e efeitos visuais

🛠️ Tecnologias Utilizadas
Tecnologia	Descrição
HTML5	Estrutura semântica
CSS3	Estilos customizados com variáveis CSS
JavaScript	Lógica SPA e interatividade
Google Fonts	Fontes Inter e Space Grotesk
Font Awesome	Ícones
CSS Grid/Flex	Layouts responsivos
📁 Estrutura do Código
text
index.html
├── <head>
│   ├── Meta tags e viewport
│   ├── Fontes (Google Fonts)
│   ├── Ícones (Font Awesome)
│   └── CSS interno (estilos completos)
├── <body>
│   ├── Header / Navegação
│   ├── Seções da SPA (6 páginas)
│   │   ├── Home (6 subseções)
│   │   ├── Serviços
│   │   ├── Casos de Sucesso
│   │   ├── Equipe
│   │   ├── Blog
│   │   └── Contato
│   ├── Footer
│   └── JavaScript (lógica SPA)
🧭 Navegação SPA
O sistema de navegação funciona através de funções JavaScript:

showPage(pageId): Exibe a seção correspondente e oculta as demais.

toggleMobileMenu(): Controla a visibilidade do menu em dispositivos móveis.

Links do menu possuem onclick que chama showPage().

Páginas disponíveis: home, services, success, team, blog, contact.

🎨 Estilos e Design System
Cores (CSS Variables)
css
--primary-blue: #0066FF;
--blue-dark: #0052CC;
--cyber-teal: #00D4C6;
--dark-bg: #0A0F1C;
--dark-card: #131A2E;
--gray-bg: #F8FAFC;
--white: #FFFFFF;
Tipografia
Títulos: Space Grotesk (700 weight)

Corpo: Inter (300–800 weights)

Componentes
Botões: btn-primary, btn-outline, btn-cyber

Cards: service-card, case-card, detail-card

Seções: .section-padding, .section-title, .section-subtitle

📱 Responsividade
O layout se adapta em três breakpoints principais:

Desktop (> 992px) – Layout completo com grids e flex

Tablet (768px – 992px) – Ajustes de fontes e espaçamento

Mobile (< 768px) – Menu hambúrguer, coluna única, ocultação de elementos

⚙️ Funcionalidades JavaScript
1. Sistema de Páginas (SPA)
js
showPage('home'); // Exibe a página inicial
Gerencia a visibilidade das seções

Atualiza o estado ativo do menu

Faz scroll suave para o topo

2. Menu Mobile
js
toggleMobileMenu(); // Alterna abertura/fechamento
3. Formulário de Contato
Validação HTML5 (required)

Feedback via alert() (simulação de envio)

📂 Como Usar
Clone ou faça download do arquivo index.html

Abra no navegador – não requer servidor ou build

Navegue clicando nos links do menu

Teste em dispositivos diferentes para ver a responsividade

🔧 Personalização
Para alterar cores:
Modifique as variáveis CSS no seletor :root.

Para alterar conteúdos:
Edite diretamente o HTML dentro de cada #id da seção correspondente.

Para adicionar novas páginas:
Crie uma nova <div id="nova-pagina" class="page-section hidden">

Adicione um link no menu: <a onclick="showPage('nova-pagina')">

Atualize a lógica JS se necessário.

📄 Licença e Uso
Este código é um modelo de site institucional para consultoria de TI. Pode ser usado livremente para fins educacionais, pessoais ou comerciais, com ou sem modificações.
