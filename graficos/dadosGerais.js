const url = 'https://raw.githubusercontent.com/leoda17/Base_Json/refs/heads/main/dados.json';

async function vizualizarInformacoes() {
    const res = await fetch(url);
    const dados = await res.json();

    const esporteMaisPraticado = dados[0].esporte;
    const numeroDePraticantes = dados[0].praticantes;
    const locais = dados[0].locais;

    const paragrafo = document.createElement('p');
    paragrafo.classList.add('caixa-grafico__texto');
    paragrafo.innerHTML = `Em busca de descobrir os esportes mais praticados, foi feita uma série de pesquisas em diferentes fontes. Com o auxílio de ferramentas de análise de dados, foi possível estimar que o esporte mais praticado foi <span>${esporteMaisPraticado}</span>, com um total de aproximadamente <span>${numeroDePraticantes} praticantes</span> nos locais <span>${locais}</span>.`;

    const caixa = document.getElementById('caixa-grafico');
    caixa.appendChild(paragrafo);
}

vizualizarInformacoes();
