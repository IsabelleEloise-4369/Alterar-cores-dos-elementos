// OBTER ELEMENTOS

// Obtendo o elemento com o id 'seletorCores' 
const seletorCores = document.querySelector('#seletorCores');

// Obtendo o elemento com o id 'elemento' 
const elementoSelecionado = document.querySelector('#elemento');


// CRIAR AS FUNÇÕES

// Função que será chamada quando ocorrer um evento de mudança (change)
const alteraCor = (e) => {
    // ARMAZENAR VALORES SELECIONADOS

    // Obtendo o valor selecionado no seletor de cores
    const corSelecionada = seletorCores.value;

    // Obtendo o valor selecionado no seletor de elementos
    const elemento = elementoSelecionado.value;

  
    // Isso impede o comportamento padrão do navegador de recarregar a página quando o evento ocorre
    e.preventDefault();

    // SWITCH CASE PARA LIDAR COM DIFERENTES ELEMENTOS

    // O switch case avalia o valor do elemento selecionado e executa o código apropriado com base nesse valor
    switch (elemento) {
        case 'titulo':
            // Se o elemento selecionado for 'titulo', obtém o elemento h1 e define a cor do texto como a cor selecionada
            const tituloPag = document.querySelector('h1');
            tituloPag.style.color = corSelecionada;
            break;

        case 'texto-cabecalho-tabela':
            // Se o elemento selecionado for 'texto-cabecalho-tabela', obtém todos os elementos th dentro de tabelas e define a cor do texto como a cor selecionada
            const textocabecalhotabela = document.querySelectorAll('.tabela th');
            textocabecalhotabela.forEach(cabecalho => {
                cabecalho.style.color = corSelecionada;
            });
            break;

        case 'itens-tabela':
            // Se o elemento selecionado for 'itens-tabela', obtém todas as linhas dentro do corpo (tbody) de tabelas e define a cor do texto como a cor selecionada
            const linhaTabela = document.querySelectorAll('.tabela tbody tr');
            for (const linha of linhaTabela) {
                linha.style.backgroundColor = corSelecionada;
            }
            break;


        case 'fundo-pagina':
            const fundoPg = document.querySelector('body');
            fundoPg.style.backgroundColor = corSelecionada;
            break;

        case 'cor-botoes':
            const botoes = document.querySelector('.container__formulario button');
            botoes.style.backgroundColor = corSelecionada;
            break;


        case 'botoes-tabela':
            const btnTabela = document.querySelectorAll('.container__tabela button');
            for (const linha of btnTabela) {
                linha.style.backgroundColor = corSelecionada;
            }
            break


        case 'texto-tabela':
            const itensLinhasTabela = document.querySelectorAll('.tabela tbody tr');
            for (const linha of itensLinhasTabela) {
                linha.style.color = corSelecionada;
            }
            break;

        case 'cabecalho-tabela':
           const fundoCabecalho = document.querySelectorAll('.tabela thead th');
           fundoCabecalho.forEach(cor => {
            cor.style.backgroundColor = corSelecionada;
           })
           break;

       case 'campo-formulario':
        const campoFormulario = document.querySelector('input');
        campoFormulario.style.backgroundColor = corSelecionada;
        break;

        case 'fundo-formulario':
            const fundoFormulario = document.querySelector('.container__formulario');
            fundoFormulario.style.backgroundColor = corSelecionada;
            break;


        
    }
}


// ATRIBUIR EVENTOS

// Adicionando um ouvinte de evento 'change' ao seletor de cores, que chamará a função alteraCor quando houver uma mudança
seletorCores.addEventListener('change', alteraCor);

// Adicionando um ouvinte de evento 'change' ao seletor de elementos, que chamará a função alteraCor quando houver uma mudança
elementoSelecionado.addEventListener('change', alteraCor);
