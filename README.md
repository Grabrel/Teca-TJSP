# Teca Academia 4.0 — Kalu

Site de preparação TJ-SP para publicar gratuitamente no **GitHub Pages**. Esta atualização preserva a Aulona (366 slides), o Simulado e o painel inicial, e acrescenta **Kalu**, mascote original com corpo de estrela vermelha, barba e cabelo grisalhos, foice e martelo.

## Atualizar o repositório existente

1. Extraia o ZIP `teca_academia_4_0_kalu_github_pages.zip` no seu computador.
2. Acesse seu repositório: https://github.com/Grabrel/Teca-TJSP
3. Clique em **Add file → Upload files**.
4. **Envie o conteúdo da pasta extraída, não a pasta inteira**. Aceite sobrescrever os arquivos de nomes iguais: `index.html`, `aulona.html`, `simulado.html`, `shared.css`, `shared.js`, `README.md`.
5. Envie também os novos arquivos `kalu.js`, `kalu.css`, `kalu-knowledge.js` e a pasta `assets/` com o arquivo `kalu.webp`.
6. Clique em **Commit changes**. A configuração existente **Settings → Pages → Deploy from a branch → main → /(root)** pode ser mantida.
7. Aguarde o deploy na aba Actions e entre em https://grabrel.github.io/Teca-TJSP/ . Se a página mostrar uma versão antiga, atualize forçando recarregamento (Ctrl+Shift+R).

**Importante:** se não puder substituir arquivos antigos diretamente pela interface de upload, use o editor web do GitHub (`.` dentro do repositório) ou o GitHub Desktop. Todos os arquivos precisam ficar na raiz, exceto `assets/kalu.webp`.

## Como usar o Kalu

- Clique no **personagem** para abrir a conversa. Use o campo de texto para perguntas de temas já presentes na Aulona, como `O que é mandado de segurança?`, `Me dê um exemplo de crase` ou `Onde parei?`.
- Kalu oferece botões de **Abrir aula**, **Simulado**, **Revisar erros** e **Continuar** conforme a pergunta.
- **⚙ Preferências:** ligue/desligue sugestões, voz do navegador e frases motivacionais de inspiração comunista; também é possível pausar sugestões por 30 minutos ou ocultar o assistente.
- Durante a prova, Kalu fica **compacto e silencioso**, sem revelar explicações nem respostas.
- O botão `?` da plataforma permanece disponível para ajuda contextual, inclusive durante a prova.
- A imagem do mascote está em `assets/kalu.webp`, com transparência, e pode ser reutilizada na interface.

## O que significa “IA local” aqui

O Kalu **não é uma IA generativa nem um modelo treinado do zero**. Ele usa busca por palavras-chave em uma base local de 122 tópicos extraídos dos 366 slides e regras para intenções comuns. As respostas usam o conteúdo existente e incluem um link para a aula. Uma pergunta fora da base recebe indicação de que não foi encontrada resposta segura.

Sem chave de API, sem servidor de chat e sem enviar perguntas para serviços externos. Funciona no GitHub Pages; a síntese de voz depende do navegador e da disponibilidade de vozes pt-BR. Estudo, configurações e histórico ficam salvos no navegador e **não sincronizam entre dispositivos**. Recomendamos exportar backup no painel inicial.

## Estrutura

- `index.html` — painel inicial, estatísticas e backup.
- `aulona.html` — 366 slides, exemplos, questões e anotações.
- `simulado.html` — 70 questões por prova, histórico e correção.
- `shared.css`, `shared.js` — controles globais e ajuda contextual.
- `kalu.css`, `kalu.js` — interface, eventos, voz e buscas do Kalu.
- `kalu-knowledge.js` — índice local dos 122 assuntos da Aulona.
- `assets/kalu.webp` — imagem aprovada do mascote.

## Limitações e avisos

Projeto independente, não afiliado ao TJ-SP, Vunesp ou Autodesk. Não substitui curso oficial, legislação vigente ou recursos de IA conectada. O banco do simulado mantém variações de enunciados existentes no material anterior. O conteúdo da Aulona não foi atualizado ou verificado juridicamente nesta alteração. Os testes automáticos de abertura visual foram bloqueados neste ambiente; foram executadas verificações estáticas e de sintaxe. Após o upload, teste a página em Chrome ou Edge.
