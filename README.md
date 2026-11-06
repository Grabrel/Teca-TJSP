# Teca Academia 3.0 — TJ-SP

Plataforma estática em HTML, CSS e JavaScript para estudar para Escrevente Técnico Judiciário (TJ-SP). Material de treinamento **independente**, sem vínculo com o Tribunal de Justiça do Estado de São Paulo nem com a Vunesp.

## Páginas

- `index.html` — menu principal, estatísticas, flashcards, backup e ajuda contextual.
- `aulona.html` — Aulona com 366 slides e exercícios, reaproveitada da ferramenta original.
- `simulado.html` — simulado com 70 perguntas sorteadas do banco original de 350 enunciados/variações, correção, áudio e modo de foco.
- `shared.css` e `shared.js` — botão contextual `?`, menu de retorno e controles compartilhados.

## Publicar grátis no GitHub Pages

1. Crie um repositório no GitHub (por exemplo, `teca-academia`).
2. Envie **todos os arquivos desta pasta**, sem uma pasta intermediária, para a raiz do repositório.
3. Em **Settings → Pages → Build and deployment**, selecione **Deploy from a branch**, branch `main` e pasta `/ (root)`; salve.
4. Aguarde a publicação. O endereço costuma ser `https://SEU-USUARIO.github.io/teca-academia/`.

Também é possível abrir `index.html` diretamente no navegador para ver a interface, mas o armazenamento local e o áudio funcionam melhor via GitHub Pages ou servidor local.

## Limitações e privacidade

- Os dados ficam no `localStorage` do navegador. GitHub Pages não sincroniza resultados entre dispositivos ou perfis. Faça backup geral pelo painel antes de mudar de aparelho ou limpar dados.
- O banco de 350 itens inclui **variações de enunciados semelhantes**, não 350 assuntos diferentes; as perguntas são autorais, não oficiais.
- O link “Aprender este assunto” utiliza aproximação por palavras e disciplina. Pode sugerir uma aula relacionada em vez de correspondência exata.
- A Aulona é conteúdo introdutório. Conferir sempre atualizações do edital, da banca e da legislação.
- No simulado, o modo rigoroso continua anulando a tentativa se a aba perder foco. O modo equilibrado pausa o tempo quando a aba fica oculta. Navegar para outra página durante a prova não preserva a tentativa em andamento.
- A opção de áudio do simulado mantém os ruídos do arquivo original; o áudio do painel e da Aulona oferece um ruído ambiente simples, iniciado somente por clique.

## Uso local para desenvolvedores

No terminal, na pasta do projeto:

```bash
python -m http.server 8000
```

Abra `http://localhost:8000/`.
