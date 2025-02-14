# Amigo Secreto - Jogo em JavaScript

## Descrição

Este é um jogo de Amigo Secreto desenvolvido em JavaScript, onde os participantes são sorteados aleatoriamente para trocar presentes entre si. O jogo pode ser jogado em um navegador web e permite uma experiência interativa e divertida para os participantes.

## Funcionalidades

Cadastro de participantes

Sorteio aleatório dos amigos secretos

Exibição do resultado de forma individual e privada

Opção para re-sortear caso necessário

## Tecnologias Utilizadas

JavaScript (Lógica do sorteio e interação)

HTML (Interface do usuário)

CSS (Estilização da página)

Como Executar o Jogo

Clone este repositório:

git clone https://github.com/seu-usuario/amigo-secreto.git

Acesse o diretório do projeto:

cd amigo-secreto

Abra o arquivo index.html em um navegador.

## Como Jogar

Adicione os nomes dos participantes.

Clique no botão de "Sortear".

Cada participante pode visualizar seu amigo secreto de forma privada.


### Divirta-se trocando presentes!



## Exemplo de Código (Sorteio Aleatório em JavaScript)

    let listaNomes = [];
    let pessoas = document.getElementById("listaAmigos");
    let limpar = document.querySelector('input');
    let resultado = document.getElementById('resultado')

    
    document.addEventListener('keypress', function (event) {

    const nome = document.querySelector('input').value;

    if (event.key === 'Enter') {

        if (nome == "" || nome == " ") {
            alert('POR FAVOR INSIRA UM NOME !!!')
        } else {
            listaNomes.push(nome);
            pessoas.innerHTML = listaNomes.join(" - ");

        }

        limpar.value = ''

    }


    });



    function adicionarAmigo() {


    const nome = document.querySelector('input').value;

    if (nome == '' || nome == ' ') {
        alert('POR FAVOR INSIRA UM NOME !!!')
    } else {

        listaNomes.push(nome);
        pessoas.innerHTML = listaNomes.join(" - ");

    }

    limpar.value = ''

    }

    function sortearAmigo() {
    const sorteado = listaNomes[Math.floor(Math.random() * listaNomes.length)];
    resultado.innerHTML = sorteado;
    listaNomes = listaNomes.filter(item => item !== sorteado)

    if(listaNomes == ''){
        alert('TODOS FORAM SORTEADOS')
        window.location.reload()
    }
    
    }
   

# Contribuição

Sinta-se à vontade para contribuir com melhorias no código, interface ou adicionar novas funcionalidades. Basta abrir um Pull Request.

Licença

Este projeto é Aberto.

Divirta-se com o Amigo Secreto! 🎁
