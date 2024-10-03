import { pegarCss, configuraEixo } from "./comum.js";

async function criarGraficoBarra() {
    const url = 'https://raw.githubusercontent.com/leoda17/Base_Json/refs/heads/main/grafico.json'; // URL do JSON
    const res = await fetch(url);
    const dados = await res.json();
   
    const esporte = Object.keys(dados);
    const porcentagem = Object.values(dados);

    const data = [
        {
            x: esporte,
            y: porcentagem,
            type: 'bar',
            marker: {
                color: pegarCss('--verde-escuro') 
            }
        }
    ];

    const layout = {
        plot_bgcolor: pegarCss('--verde-médio'), 
        paper_bgcolor: pegarCss('--verde-médio'), 
        title: {
            text: 'Os Esportes Mais Praticados',
            font: {
                color: pegarCss('--branco'), 
                family: pegarCss('--fonte-titulo'),
                size: 50
            }
        },
        xaxis: {
            tickfont: configuraEixo,
            tickangle: 20
        },
        yaxis: {
            tickfont: configuraEixo
        }
    };

    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    document.getElementById('caixa-grafico').appendChild(grafico);

    Plotly.newPlot(grafico, data, layout);
}

criarGraficoBarra();
