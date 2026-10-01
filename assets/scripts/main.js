import { readCandidateProfile } from "./profile.js";
import { renderResults, renderStatus } from "./results.js";
import { chooseBestJob, recommendStudy } from "./recommendation.js";
import { saveCandidateSearch } from "./history-storage.js";
import { carregarVagas } from "./job-data.js";
import { createSearchCounter } from "./search-counter.js";



const form = document.getElementById("profile-form");

const clearButton = document.getElementById("clear-form");

clearButton.addEventListener("click", function () {
    form.reset();
});

const countSearch = createSearchCounter();

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
    const studyRecommendation = recommendStudy(resultados);

    renderResults(resultados, melhorVaga, candidateProfile, studyRecommendation);
    saveCandidateSearch(candidateProfile, melhorVaga);
    
    const totalSearches = countSearch();
    const counter = document.getElementById("search-counter");
    
    counter.textContent = `Pesquisas concluídas nesta sessão: ${totalSearches}`;


});




