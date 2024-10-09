import { pegarCSS } from "./comum.js";

async function graficosEsportes() {
    const url = 'https://raw.githubusercontent.com/leoda17/Base_Json/refs/heads/main/Tancredo.Json';
    const res = await fetch(url);
    const dados = await res.json();

    // Ignorando a primeira linha (cabeçalho) e extraindo os esportes
    const esportesVotados = dados.slice(1).map(item => item[2]);

    const contagemEsportes = esportesVotados.reduce((acc, esporte) => {
        // Tratando o caso de múltiplos esportes em uma única entrada
        esporte.split(',').forEach(esporteIndividual => {
            esporteIndividual = esporteIndividual.trim(); // Removendo espaços em branco
            acc[esporteIndividual] = (acc[esporteIndividual] || 0) + 1;
        });
        return acc;
    }, {});

    const valores = Object.values(contagemEsportes);
    const etiqueta = Object.keys(contagemEsportes);

    const data = [
        {
            values: valores,
            labels: etiqueta,
            type: 'pie',
            textinfo: 'label+percent'
        }
    ];

    const layout = {
        plot_bgcolor: pegarCSS('--cinza'),
        paper_bgcolor: pegarCSS('--laranja')
    };

    const pesquisaTitulo = document.createElement('h3');
    pesquisaTitulo.classList.add('caixa-grafico__titulo');
    pesquisaTitulo.innerHTML = `Os esportes mais praticados na escola <span>Tancredo</span>`;

    const grafico = document.createElement('div');
    grafico.className = 'grafico-disco';
    document.getElementById('caixa-grafico').appendChild(pesquisaTitulo);
    document.getElementById('caixa-grafico').appendChild(grafico);
    const config = {
        responsive: true,
        displayModeBar: false
    };
    Plotly.newPlot(grafico, data, layout, config);

    const caixa = document.getElementById('caixa-grafico');
    const paragrafo = document.createElement('p');
    paragrafo.classList.add('caixa-grafico__texto');
    paragrafo.innerHTML = 'Nota-se que o esporte mais praticado na escola <span>Tancredo</span> pode diferir das preferências globais. Enquanto os alunos elegeram o <span>Futebol</span> como o esporte mais popular, pesquisas globais indicam que esportes como <span>Basquete</span> e <span>Natação</span> também têm grande número de praticantes.';

    caixa.appendChild(paragrafo);
}

graficosEsportes();
