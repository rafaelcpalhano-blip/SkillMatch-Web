import { getCandidateHistory } from "./history-storage.js";

const historyList = document.getElementById("history-list");
const entries = getCandidateHistory();

if (entries.length > 0) {
    historyList.replaceChildren();

    entries.forEach((entry) => {
        const card = document.createElement("article");

        const name = document.createElement("h3");
        name.textContent = entry.candidato.nome;

        const date = document.createElement("p");
        date.textContent = `Pesquisa feita em: ${new Date(entry.data).toLocaleString("pt-BR")}`;

        const area = document.createElement("p");
        area.textContent = `Área de interesse: ${entry.candidato.areaInteresse}`;

        const skills = document.createElement("p");
        skills.textContent = `Habilidades: ${entry.candidato.habilidades.join(", ")}`;

        const experience = document.createElement("p");
        experience.textContent = `Experiência: ${entry.candidato.tempoExperiencia}`;

        card.append(name, date, area, skills, experience);

        const recommendationTitle = document.createElement("h4");
        recommendationTitle.textContent = "Vaga recomendada";

        card.append(recommendationTitle);

        if (entry.recomendacao) {
            const job = entry.recomendacao;

            const company = document.createElement("p");
            company.textContent = `Empresa: ${job.empresa}`;

            const role = document.createElement("p");
            role.textContent = `Cargo: ${job.cargo}`;

            const jobArea = document.createElement("p");
            jobArea.textContent = `Área da vaga: ${job.area}`;

            const requiredExperience = document.createElement("p");
            requiredExperience.textContent = `Experiência exigida: ${job.experiencia}`;

            const classification = document.createElement("p");
            classification.textContent = `Classificação: ${job.classificacao}`;

            const match = document.createElement("p");
            match.textContent = `Compatibilidade das habilidades: ${job.percentualCompatibilidade}%`;

            const matched = document.createElement("p");
            matched.textContent = `Requisitos atendidos: ${job.requisitosAtendidos.join(", ") || "Nenhum"}`;

            const missing = document.createElement("p");
            missing.textContent = `Requisitos faltantes: ${job.requisitosFaltantes.join(", ") || "Nenhum"}`;

            card.append(company, role, jobArea, requiredExperience, classification, match, matched, missing);
        } else {
            const message = document.createElement("p");
            message.textContent = "Nenhuma vaga recomendada nesta pesquisa.";
            card.append(message);
        }

        historyList.append(card);
    });
}