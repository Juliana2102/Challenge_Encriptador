# Curso Alura e ONE-Oracle Next Education
# Decodificador de Texto
## Descrição
Praticando lógica de programação: Challenge Decodificador de Texto
decodificador de texto desenvolvido utilizando HTML, CSS e JavaScript. A aplicação permite criptografar e descriptografar textos de acordo com regras específicas, possibilitando a troca de mensagens secretas entre usuários que conheçam o método de criptografia utilizado.

## Funcionalidades
Criptografar Texto: Converte letras específicas para suas sequências criptografadas correspondentes.
Descriptografar Texto: Reverte a criptografia, convertendo as sequências de volta para as letras originais.
Copiar Texto: Copia o texto criptografado ou descriptografado para a área de transferência.
Regras de Criptografia
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"
Exemplos
"gato" => "gaitober"
"gaitober" => "gato"
Estrutura do Projeto

### HTML

O HTML define a estrutura da página, incluindo áreas de texto para entrada e saída, botões para criptografar, descriptografar e copiar o texto, além de um cabeçalho com o logotipo da Alura.

### CSS

O CSS estiliza a página, tornando-a visualmente agradável e responsiva.

### JavaScript

O JavaScript implementa a lógica de criptografia e descriptografia:

### Funções encriptar e desencriptar:

*Encriptar* : Substitui caracteres específicos do texto conforme as regras de criptografia fornecidas;
*Desencriptar*: Reverte a criptografia, substituindo as sequências específicas de volta para os caracteres originais;

### Manipulação do DOM:

Seleciona os elementos HTML relevantes (áreas de texto e botões).
Adiciona ouvintes de eventos aos botões para realizar as ações de criptografia, descriptografia e cópia.

## Como Usar

*Inserir Texto* : Digite o texto a ser criptografado ou descriptografado na área de texto superior.
*Selecionar Ação* : Clique em "Criptografar" para criptografar o texto ou em "Descriptografar" para descriptografar o texto.
*Copiar Resultado* : Clique em "Copiar" para copiar o resultado para a área de transferência.

### Requisitos
Funciona apenas com letras minúsculas.
Não aceita letras com acentos nem caracteres especiais.
