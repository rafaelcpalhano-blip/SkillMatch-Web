// Importa as funções responsáveis por cada etapa da aplicação
import { readCandidateProfile } from "./profile.js";
import { renderResults, renderStatus } from "./results.js";
import { chooseBestJob, recommendStudy } from "./recommendation.js";
import { saveCandidateSearch } from "./history-storage.js";
import { carregarVagas } from "./job-data.js";
import { createSearchCounter } from "./search-counter.js";



const form = document.getElementById("profile-form");

// Cria o contador de pesquisas realizadas na sessão
const countSearch = createSearchCounter();

// Executa a análise quando o formulário é enviado
form.addEventListener("submit", async function (event) {
    event.preventDefault();

    // Lê e valida os dados preenchidos pelo candidato
    const candidateProfile = readCandidateProfile(form);

    if (candidateProfile === null) {
        return;
    }

    // Informa ao usuário que as vagas estão sendo carregadas
    renderStatus("Carregando vagas...");

    const vagas = await carregarVagas();


    // Interrompe a análise caso ocorra erro no carregamento
    if (!vagas) {
        renderStatus("Não foi possível carregar as vagas. Tente novamente.");
        return;
    }

     // Interrompe a análise caso não existam vagas disponíveis
    if (vagas.length === 0) {
        renderStatus("Nenhuma vaga está disponível no momento.");
        return;
    }


    // Seleciona a vaga com melhor compatibilidade
    const melhorVaga = chooseBestJob(vagas, candidateProfile);

    // Analisa a compatibilidade do candidato com todas as vagas
    const resultados = vagas.map((vaga) => vaga.analisarVaga(candidateProfile));

    // Gera uma recomendação de estudo com base nos resultados
    const studyRecommendation = recommendStudy(resultados);

    // Exibe os resultados da análise na página
    renderResults(resultados, melhorVaga, candidateProfile, studyRecommendation);

    // Salva a pesquisa no histórico
    saveCandidateSearch(candidateProfile, melhorVaga);

    // Atualiza o contador de pesquisas da sessão
    const totalSearches = countSearch();
    const counter = document.getElementById("search-counter");

    counter.textContent = `Pesquisas concluídas nesta sessão: ${totalSearches}`;

});




