import { pegarCSS } from "./comum.js";

async function criaGraficoPizza() {
    const url = 'https://raw.githubusercontent.com/leoda17/Base_Json/refs/heads/main/GraficoPizza.json';
    const res = await fetch(url);
    const dados = await res.json();
    const esportes = dados.map(item => item.esporte);
    const praticantes = dados.map(item => item.praticantes);

    const data = [
        {
            values: praticantes,
            labels: esportes,
            type: 'pie',
            textinfo: 'label + percent'
        }
    ];

    const layout = {
        height: 400,
        width: 600,
        plot_bgcolor: pegarCSS('--cinza'),
        paper_bgcolor: pegarCSS('--laranja')
    };

    const indiesTitulo = document.createElement('h3');
    indiesTitulo.classList.add('caixa-grafico__titulo');
    indiesTitulo.innerHTML = `<span> Os esportes mais praticados em 2023 </span> `;

    const grafico = document.createElement('div');
    grafico.className = 'grafico-disco';
    document.getElementById('caixa-grafico').appendChild(indiesTitulo);
    document.getElementById('caixa-grafico').appendChild(grafico);
    Plotly.newPlot(grafico, data, layout);
}

criaGraficoPizza();
