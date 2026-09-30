import { VagaFrontEnd } from "./engine.js";
import { readCandidateProfile } from "./profile.js";
import { renderResults, renderStatus } from "./results.js";
import { chooseBestJob } from "./recommendation.js";
import { saveCandidateSearch } from "./history-storage.js";


const form = document.getElementById("profile-form");

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const candidateProfile = readCandidateProfile(form);

    if (candidateProfile === null) {
        return;
    }

    renderStatus("Carregando vagas...");

    const vagas = await carregarVagas();


    if (!vagas) {
        renderStatus("Não foi possível carregar as vagas. Tente novamente.");
        return;
    }

    if (vagas.length === 0) {
        renderStatus("Nenhuma vaga está disponível no momento.");
        return;
    }


    const melhorVaga = chooseBestJob(vagas, candidateProfile);


    const resultados = vagas.map((vaga) => vaga.analisarVaga(candidateProfile));

    renderResults(resultados, melhorVaga, candidateProfile);
    saveCandidateSearch(candidateProfile, melhorVaga);


});

async function carregarVagas() {
    const caminhoVagas = "./assets/data/jobs.json";

    try {
        const response = await fetch(caminhoVagas);

        if (response.ok == false) {
            throw new Error(`Erro ao carregar o arquivo JSON: ${response.status}`);
        }

        const data = await response.json();

        const vagas = data.map((vagaData) => new VagaFrontEnd(
            vagaData.empresa,
            vagaData.cargo,
            vagaData.requisitos,
            vagaData.experiencia,
            vagaData.area
        ),
        );

        return vagas;


    } catch (error) {
        console.error("Erro ao carregar vagas:", error);
    }
}


