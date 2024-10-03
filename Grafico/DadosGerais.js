const url = 'https://raw.githubusercontent.com/leoda17/Base_Json/refs/heads/main/dados.json';

async function visualizarInformacoes() {
    const res = await fetch(url);
    const dados = await res.json();
    
    const esporteMaisPraticado = Object.keys(dados)[0]; // Pega a chave do primeiro esporte
    const numeroDePessoas = dados[esporteMaisPraticado]; // Pega o número de votos
    const porcentagem = dados[esporteMaisPraticado].porcentagem; // Acesse a porcentagem corretamente

    console.log(esporteMaisPraticado);

    const paragrafo = document.createElement('p');
paragrafo.classList.add('caixa-grafico__texto');
paragrafo.innerHTML = `
    Após uma extensa pesquisa para identificar os esportes mais praticados, 
    os resultados revelaram que o esporte predominante é <span>Futebol</span>. 
    Este esporte conta com aproximadamente <span>10.000.000</span> praticantes, 
    o que representa uma impressionante porcentagem de <span>40%</span> 
    da população envolvida em atividades esportivas. 
    Esse dado não apenas destaca a popularidade do futebol, 
    mas também enfatiza a importância da prática esportiva na promoção da saúde e bem-estar.`;


    const caixa = document.getElementById('caixa-grafico');
    caixa.appendChild(paragrafo);
}

visualizarInformacoes();
