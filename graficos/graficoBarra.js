import { pegarCSS, configuraEixo } from "./comum.js";

async function criarGraficoBarra() {
    const url = 'https://raw.githubusercontent.com/leoda17/Base_Json/refs/heads/main/grafico.json';
    const res = await fetch(url);
    const dados = await res.json();
    const esportes = dados.map(item => item.esporte);
    const praticantes = dados.map(item => item.praticantes);

    const data = [
        {
            x: esportes,
            y: praticantes,
            type: 'bar',
            marker: {
                color: pegarCSS('--cinza')
            }
        }
    ];

    const layout = {
        plot_bgcolor: pegarCSS('--branco'),
        paper_bgcolor: pegarCSS('--laranja'),
        title: {
            text: 'Os esportes mais praticados no Mundo',
            font: {
                color: pegarCSS('--branco'),
                family: pegarCSS('--fonte-titulo'),
                size: 30
            }
        },
        xaxis: {
            tickfont: configuraEixo,
            tickangle: 45
        },
        yaxis: {
            tickfont: configuraEixo,
            title: 'Número de Praticantes'
        }
    };

    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    document.getElementById('caixa-grafico').appendChild(grafico);
    Plotly.newPlot(grafico, data, layout);
}

criarGraficoBarra();
