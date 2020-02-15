# Praticar a manipulação do DOM criando um "Verificador de Palíndromo"

Javascript, linguagem formalmente chama de ECMAscript, foi criada pelo `Brandon Eich` com o propósito de tornar a web mais dinâmica.
Compreenda e estude os conceitos básicos, para assim conseguir criar um "Verificador de Palíndromo"!
Mas o que é um palíndromo afinal? Segundo o dicionário: diz-se de ou frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa.
Com isto, crie uma aplicação que recebe um texto e exibir se é ou não um Palíndromo, juntamente com o histórico de verificaçōes.

## Requisitos

Você precisará do Nodejs (LTS ou Current) instalado em sua máquina.

Na primeira execução rodar o comando:

	npm install


## Tópicos

Com esse desafio, você aprenderá:

- Conceitos base da linguagem
- Manipulação do DOM
- Eventos e Listeners

### Tarefas

- Deve-se criar um arquivo `index.html` dentro do diretório 'public'
- Ler o conteúdo de um campo `input` ao pressionar a tecla `enter`
- Se o texto __for__ um palíndromo, exibir o texto com um indicador positivo
- Se o texto __não for__ um palíndromo, exibir o texto com um indicador negativo
- Limpar o `input` depois da verificação
- Manter a lista de verificações
- Adicionar um botão para "limpar o histórico" 
- Se o conteúdo do input estiver em branco (vazio), não faça nada.

### Exemplo

![](https://codenation-challenges.s3-us-west-1.amazonaws.com/vue-0/l5gAaPL+-+Imgur.gif)

### Atenção

O `input` do formulário __deve__ conter um atributo `data-test` com o valor `entrada`
O botão de "limpar o histórico" __deve__ conter um atributo `data-test` com o valor de `limpar-dados`
O element que o texto verificado se encontra __deve__ conter um atributo `data-verificado` com o valor `positivo` ou `negativo` respectivamente.
