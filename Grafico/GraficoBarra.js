import { pegarCss, configuraEixo } from "./comum.js";

async function criarGraficoBarra() {
    const url = 'https://raw.githubusercontent.com/leoda17/Base_Json/refs/heads/main/grafico.json'; // URL do JSON
    const res = await fetch(url);

    if (!res.ok) {
        console.error('Erro ao buscar os dados:', res.statusText);
        return;
    }

    const dados = await res.json();
    
    // Extrai os esportes e suas porcentagens
    const esporte = Object.keys(dados);
    const porcentagem = Object.values(dados);

    const data = [
        {
            x: esporte,
            y: porcentagem,
            type: 'bar',
            marker: {
                color: pegarCss('--verde-escuro') // Cor das barras
            }
        }
    ];

    const layout = {
        plot_bgcolor: pegarCss('--verde-médio'), // Cor de fundo do gráfico
        paper_bgcolor: pegarCss('--verde-médio'), // Cor do papel
        title: {
            text: 'Os Esportes Mais Praticados',
            font: {
                color: pegarCss('--branco'), // Cor do texto do título
                family: pegarCss('--fonte-titulo'),
                size: 50
            }
        },
        xaxis: {
            tickfont: {
                color: pegarCss('--branco'), // Cor dos rótulos do eixo X
                ...configuraEixo
            },
            tickangle: 20 // Ângulo dos rótulos do eixo X
        },
        yaxis: {
            tickfont: {
                color: pegarCss('--branco'), // Cor dos rótulos do eixo Y
                ...configuraEixo
            }
        }
    };

    // Cria e anexa o gráfico ao DOM
    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    document.getElementById('caixa-grafico').appendChild(grafico);

    // Plota o gráfico
    Plotly.newPlot(grafico, data, layout);
}

// Chama a função para criar o gráfico
criarGraficoBarra();
