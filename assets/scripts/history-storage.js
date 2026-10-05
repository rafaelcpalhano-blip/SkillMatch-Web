// Chave usada para salvar o histórico no localStorage
const STORAGE_KEY = "skillmatch-candidate-history";

// Recupera o histórico salvo ou retorna uma lista vazia
export function getCandidateHistory() {
    const savedHistory = localStorage.getItem(STORAGE_KEY);
    return savedHistory ? JSON.parse(savedHistory) : [];
}

// Salva uma nova análise de candidato no histórico
export function saveCandidateSearch(candidateProfile, bestJob) {
    let recommendation = null;

    // Cria a recomendação caso exista uma vaga compatível
    if (bestJob !== null) {
        const analysis = bestJob.analisarVaga(candidateProfile);

        recommendation = {
            empresa: analysis.empresa,
            cargo: analysis.cargo,
            requisitosAtendidos: analysis.requisitosAtendidos,
            requisitosFaltantes: analysis.requisitosFaltantes,
            percentualCompatibilidade: analysis.percentualCompatibilidade,
            classificacao: analysis.classificacao,
            area: bestJob.area,
            experiencia: bestJob.experiencia
        };
    }

    // Cria o registro da pesquisa com data, candidato e recomendação
    const entry = {
        data: new Date().toISOString(),
        candidato: candidateProfile,
        recomendacao: recommendation
    };

    const history = getCandidateHistory();
    const updatedHistory = [];

    // Adiciona o registro mais recente no início do histórico
    updatedHistory.push(entry);

    // Mantém os registros anteriores
    for (let i = 0; i < history.length; i++) {
        updatedHistory.push(history[i]);
    }

    // Salva o histórico atualizado no localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory));
}