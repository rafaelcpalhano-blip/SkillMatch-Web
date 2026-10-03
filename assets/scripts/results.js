// Exibe os resultados da análise e a recomendação final
export function renderResults(resultados, melhorVaga, candidateProfile, studyRecommendation) {
    const section = document.getElementById("results");
    const title = section.querySelector("h2");
    const list = document.createElement("ul");

    // Cria um item para cada resultado analisado
    for (let i = 0; i < resultados.length; i++) {
        const resultado = resultados[i];

        const item = document.createElement("li");

        // Dados da vaga analisada
        const empresa = document.createElement("h3");
        empresa.textContent = `Empresa: ${resultado.empresa}`;

        const cargo = document.createElement("p");
        cargo.textContent = resultado.cargo;

        const classificacao = document.createElement("p");
        classificacao.textContent = `Classificação: ${resultado.classificacao}`;

        const compatibilidade = document.createElement("p");
        compatibilidade.textContent =
            `Compatibilidade das habilidades: ${resultado.percentualCompatibilidade}%`;

        const atendidos = document.createElement("p");
        atendidos.textContent =
            `Requisitos atendidos: ${resultado.requisitosAtendidos.join(", ") || "Nenhum"}`;

        const faltantes = document.createElement("p");
        faltantes.textContent =
            `Requisitos faltantes: ${resultado.requisitosFaltantes.join(", ") || "Nenhum"}`;

        item.append(empresa, cargo, classificacao, compatibilidade, atendidos, faltantes);
        
        // Destaca visualmente a vaga recomendada
        if (
            melhorVaga !== null &&
            resultado.empresa === melhorVaga.empresa &&
            resultado.cargo === melhorVaga.cargo
        ) {
            const destaque = document.createElement("p");
            destaque.textContent = "Vaga recomendada";
            destaque.classList.add("recommended-label");
            item.prepend(destaque);
            item.classList.add("recommended-job");
        }
        list.appendChild(item);
    }
    // Cria a recomendação principal
    const recommendationTitle = document.createElement("h3");
    recommendationTitle.textContent = "Recomendação";

    const recommendation = document.createElement("p");

    // Exibe mensagem diferente quando nenhuma vaga é compatível
    if (melhorVaga === null) {
        recommendation.textContent =
            "Nenhuma vaga reúne a área escolhida, a experiência exigida " +
            "e pelo menos 50% das habilidades. Consulte os resultados abaixo " +
            "para ver o que falta desenvolver.";
    } else {
        recommendation.textContent =
            `Para ${candidateProfile.nome}, ${melhorVaga.cargo}: ` +
            `Empresa ${melhorVaga.empresa}.`;
    }

    // Exibe a recomendação de estudo
    const study = document.createElement("p");
    study.textContent = studyRecommendation;

    // Atualiza a área de resultados
    section.replaceChildren(title, recommendationTitle, recommendation, study, list);
}

// Exibe mensagens temporárias de status na área de resultados
export function renderStatus(message) {
    const resultsSection = document.getElementById("results");
    const title = document.getElementById("results-title");
    const status = document.createElement("p");

    status.setAttribute("role", "status");
    status.textContent = message;

    // Substitui o conteúdo atual pela mensagem de status
    resultsSection.replaceChildren(title, status);
}
