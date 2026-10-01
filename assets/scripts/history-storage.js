const STORAGE_KEY = "skillmatch-candidate-history";

export function getCandidateHistory() {
    const savedHistory = localStorage.getItem(STORAGE_KEY);
    return savedHistory ? JSON.parse(savedHistory) : [];
}

export function saveCandidateSearch(candidateProfile, bestJob) {
    let recommendation = null;

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

    const entry = {
        data: new Date().toISOString(),
        candidato: candidateProfile,
        recomendacao: recommendation
    };

    const history = getCandidateHistory();
    const updatedHistory = [];

updatedHistory.push(entry);

for (let i = 0; i < history.length; i++) {
    updatedHistory.push(history[i]);
}

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory));
}