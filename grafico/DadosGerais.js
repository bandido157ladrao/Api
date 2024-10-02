const url = 'https://raw.githubusercontent.com/bandido157ladrao/Api/refs/heads/main/volei.json';

async function visualizarInformacoes() {
    const res = await fetch(url);
    const dados = await res.json();

    const jogadorName = dados.melhores_jogadores[0].name;
    const jogadorRank = dados.melhores_jogadores[0].rank;
    const jogadorCountry = dados.melhores_jogadores[0].country;

    // Logando os dados dos melhores jogadores
    console.log(dados.melhores_jogadores);

    const paragrafo = document.createElement('p');
    paragrafo.classList.add('caixa-grafico__texto');

    paragrafo.innerHTML = `Em busca de descobrir quem são os melhores jogadores de vôlei do mundo, foi realizada uma série de pesquisas em diversas fontes. Assim, foi possível identificar que o jogador mais destacado é <span>${jogadorName}</span>, que ocupa o rank <span>${jogadorRank}</span> e representa o país <span>${jogadorCountry}</span>.`;

    const caixa = document.getElementById('caixa-grafico');
    caixa.appendChild(paragrafo);
}

visualizarInformacoes();
