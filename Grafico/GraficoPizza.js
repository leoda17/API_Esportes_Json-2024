import { pegarCss } from "./comum.js";

async function criarGraficoPizza() {
    const url = 'https://raw.githubusercontent.com/leoda17/Base_Json/refs/heads/main/GraficoPizza.json'; // URL do JSON
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
            labels: esporte,
            values: porcentagem,
            type: 'pie',
            marker: {
                colors: [
                    '#FF5733', // Cor 1 (laranja)
                    '#33FF57', // Cor 2 (verde)
                    '#3357FF', // Cor 3 (azul)
                    '#F0E68C', // Cor 4 (amarelo claro)
                    '#FF33A1'  // Cor 5 (rosa)
                ] // Cores dos setores
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
criarGraficoPizza();
