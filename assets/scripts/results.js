export function renderResults(resultados) {
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
        list.appendChild(item);
    }

    section.replaceChildren(title, list);
}