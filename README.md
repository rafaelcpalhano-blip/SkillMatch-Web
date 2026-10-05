# Skill Match Web: Simulador de Compatibilidade com Vagas

Projeto avaliativo final desenvolvido com HTML, CSS e JavaScript durante o primeiro módulo do curso de Front-End React do SESI/SENAI.

O sistema permite cadastrar um candidato e analisar sua compatibilidade com vagas de desenvolvimento Front-End, Web e React, comparando habilidades, requisitos e experiência.

## Sobre o projeto

O projeto dá continuidade ao SkillMatch JS, acrescentando uma interface para cadastro, apresentação dos resultados e consulta do histórico.

A partir das informações preenchidas, o sistema:

- compara as habilidades do candidato com os requisitos de dez vagas;
- identifica requisitos atendidos e faltantes;
- calcula o percentual de compatibilidade;
- classifica os resultados;
- recomenda uma vaga considerando área, experiência e habilidades;
- indica uma habilidade que pode ser priorizada nos estudos;
- salva o perfil e a recomendação no histórico;
- contabiliza as pesquisas concluídas na sessão.

As empresas e vagas utilizadas são fictícias e têm finalidade educacional.

## Como funciona

1. O usuário informa nome, área de interesse, pelo menos cinco habilidades e tempo de experiência.
2. O sistema carrega as vagas de um arquivo JSON.
3. As habilidades são comparadas com os requisitos de cada vaga.
4. Os resultados são apresentados em cartões.
5. Uma vaga é recomendada quando atende aos critérios definidos.
6. O sistema apresenta uma recomendação de estudo.
7. O cadastro e os detalhes da vaga recomendada ficam disponíveis no histórico.

## Cálculo de compatibilidade

O percentual considera a quantidade de requisitos atendidos em relação ao total de requisitos da vaga.

`(Requisitos atendidos / Total de requisitos) * 100`

Exemplo: se o candidato atende quatro dos cinco requisitos:

`(4 / 5) * 100 = 80%`

A classificação segue os seguintes intervalos:

- **Alta compatibilidade:** 80% ou mais.
- **Média compatibilidade:** de 50% até menos de 80%.
- **Baixa compatibilidade:** abaixo de 50%.

## Recomendação de vaga e estudo

Para receber uma recomendação, a vaga precisa:

- corresponder à área de interesse escolhida;
- exigir uma experiência igual ou inferior à informada;
- apresentar pelo menos 50% de compatibilidade nas habilidades.

Entre as vagas que atendem a esses critérios, o sistema recomenda aquela com o maior percentual. Em caso de empate, mantém a primeira encontrada.

A recomendação de estudo considera a habilidade faltante que aparece com maior frequência no conjunto das vagas analisadas.

Quando nenhuma vaga atende aos critérios, o sistema informa essa situação e mantém os resultados disponíveis para consulta.

## Histórico de candidatos

Os cadastros são armazenados no navegador utilizando `localStorage`.

O histórico apresenta:

- nome, área de interesse, habilidades e experiência do candidato;
- data e hora da pesquisa;
- empresa, cargo e detalhes da vaga recomendada;
- percentual, classificação e requisitos atendidos e faltantes.

Quando não há uma vaga recomendada, essa informação também é registrada.

O formulário inicia em branco ao recarregar a página para facilitar novos cadastros. A consulta dos perfis anteriores fica concentrada na página de histórico.

Os registros permanecem no navegador utilizado e podem ser removidos ao limpar os dados do site.

## Interface e responsividade

O visual foi inspirado em programas de computador antigos, com cores e elementos que remetem ao Windows 95.

Os cartões de resultados utilizam Flexbox e media query para apresentar duas colunas em telas maiores e uma coluna no celular.

Também foram utilizados HTML semântico, rótulos nos campos, texto alternativo na logo e mensagens de validação.

## Tecnologias e conceitos aplicados

- HTML e CSS;
- Flexbox e media query;
- JavaScript;
- objetos, arrays e funções;
- classes, herança e sobrescrita de métodos;
- `map()`, `filter()`, `find()`, `reduce()` e `forEach()`;
- `Object.keys()`;
- callbacks e closure;
- manipulação do DOM e eventos;
- módulos com `import` e `export`;
- JSON e `fetch`;
- Promise, `async`, `await` e `try/catch`;
- `localStorage`;
- Git e GitHub.

## Como executar

1. Baixe ou clone o repositório.
2. Abra a pasta do projeto no Visual Studio Code.
3. Instale a extensão **Live Server**, caso ainda não esteja instalada.
4. Clique com o botão direito no arquivo `index.html`.
5. Selecione **Open with Live Server**.
6. Preencha o formulário e clique em **Analisar vagas**.

O projeto deve ser aberto por um servidor local, pois utiliza módulos JavaScript e carrega o arquivo JSON com `fetch`.

## Desenvolvimento e aprendizados

Este projeto ampliou a lógica do trabalho anterior, integrando a análise das vagas com formulário, resultados visuais e armazenamento no navegador.

Uma das principais dificuldades foi organizar a comunicação entre os módulos e entender como os dados preenchidos no formulário chegavam à análise e à apresentação dos resultados.

Também foi necessário corrigir problemas de validação, referências a elementos do HTML e organização do CSS.

Durante o desenvolvimento, foram realizados testes de cadastro, recomendação, histórico, navegação por teclado, leitura com o Narrador e visualização em diferentes tamanhos de tela. O Lighthouse também foi utilizado para avaliar as páginas.

As etapas foram organizadas no Trello e desenvolvidas em branches separadas, com commits e merges na `develop`.

## Possíveis melhorias

- permitir excluir registros do histórico;
- oferecer filtros e ordenação dos resultados;
- permitir editar ou reutilizar um perfil salvo;
- ampliar o catálogo de vagas.

## Uso de IA

A IA foi utilizada como ferramenta de apoio durante o desenvolvimento.

O apoio incluiu:

- explicações sobre conceitos e funcionamento do código;
- revisão e ajustes de trechos de HTML, CSS e JavaScript;
- investigação de erros e sugestões de correção;
- criação e ajuste da logo;
- ajuste visual e revisão de responsividade;
- organização de branches e commits;
- conferência dos requisitos do trabalho.

As sugestões foram aplicadas manualmente, revisadas e testadas ao longo do desenvolvimento, buscando compreender o funcionamento do projeto, atender aos requisitos do trabalho e adaptar as soluções às minhas próprias decisões e à proposta que defini para a aplicação.

## Links

- **Repositório:** [Acessar o repositório](https://github.com/rafaelcpalhano-blip/SkillMatch-Web)
- **Kanban / Trello:** [Acessar o Trello](https://trello.com/b/URE6JVAB/projeto-avaliativo-final-rafael)
- **Vídeo de apresentação:** [Acessar o Drive](https://drive.google.com/file/d/1OXTHY8gS0qVqKRlpiRi70CDAgqBaIo0d/view?usp=sharing)

## Autor

**Rafael Caron Palhano**

Projeto desenvolvido para fins educacionais durante o curso de Front-End React do SESI/SENAI.