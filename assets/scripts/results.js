export function renderResults(resultados, melhorVaga, candidateProfile) {
    const section = document.getElementById("results");
    const title = section.querySelector("h2");
    const list = document.createElement("ul");

    for (const resultado of resultados) {
        const item = document.createElement("li");

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
        if (
            melhorVaga !== null &&
            resultado.empresa === melhorVaga.empresa &&
            resultado.cargo === melhorVaga.cargo
        ) {
            const destaque = document.createElement("p");
            destaque.textContent = "Vaga recomendada";
            item.prepend(destaque);
            item.classList.add("recommended-job");
        }
        list.appendChild(item);
    }
    const recommendationTitle = document.createElement("h3");
    recommendationTitle.textContent = "Recomendação";

    const recommendation = document.createElement("p");

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

    section.replaceChildren(title, recommendationTitle, recommendation, list);
}