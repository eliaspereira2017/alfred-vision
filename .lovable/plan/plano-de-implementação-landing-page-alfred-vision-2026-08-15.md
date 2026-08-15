# Plano de Implementação - Landing Page ALFRED VISION

Criar uma Landing Page moderna e de alta conversão para o produto "ALFRED VISION", seguindo as especificações de design cyberpunk, efeito Matrix e foco em vendas.

## Alterações Visuais e Funcionais

### 1. Estrutura e Estilo (CSS)

- Configurar paleta de cores: Fundo escuro (#0a0a0a) com detalhes em Verde Neon (#00ff66).
- Implementar tipografia moderna ('Inter' via Google Fonts).
- Criar componentes com Tailwind CSS v4 para manter a consistência e modernidade:
  - Header fixo com navegação por âncoras.
  - Seção Hero impactante com H1, subtítulo e CTA brilhante.
  - Cards de recursos com bordas neon e efeitos hover.
  - Seção de FAQ com accordions.
  - Rodapé com informações legais.

### 2. Efeito de Fundo (Matrix Digital Rain)

- Implementar um componente `MatrixRain` usando HTML5 Canvas e JavaScript.
- Garantir que o efeito seja leve, discreto e não prejudique a legibilidade do conteúdo.

### 3. Conteúdo e Conversão

- Inserir textos persuasivos conforme fornecido.
- Adicionar área de vídeo demonstrativo (16:9).
- Configurar botões CTA para o link de afiliado: `https://alfredcursos.com.br/?ref=I107105867N` abrindo em nova aba.

## Detalhes Técnicos

- **Tecnologia:** React 19 + TanStack Start + Tailwind CSS v4.
- **Responsividade:** Layout Mobile-First garantindo visual perfeito em todos os dispositivos.
- **SEO:** Configurar metadados (head) específicos para a rota `/` (título, descrição e OG tags).

---

## Passos de Execução

1. **Configurar Metadados:** Adicionar `head()` na rota `src/routes/index.tsx`.
2. **Criar Componente MatrixRain:** Implementar a lógica do canvas em um arquivo separado para organização.
3. **Desenvolver a UI:** Construir as seções da Landing Page em `src/routes/index.tsx` usando Tailwind.
4. **Finalizar Ações:** Validar links e responsividade.  
  
preciso do arquivo index.html na raiz do projeto.
5. &nbsp;