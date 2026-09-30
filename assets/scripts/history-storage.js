const STORAGE_KEY = "skillmatch-candidate-history";

export function getCandidateHistory() {
    const savedHistory = localStorage.getItem(STORAGE_KEY);
    return savedHistory ? JSON.parse(savedHistory) : [];
}

export function saveCandidateSearch(candidateProfile, bestJob) {
    const recommendation = bestJob
        ? {
            ...bestJob.analisarVaga(candidateProfile),
            area: bestJob.area,
            experiencia: bestJob.experiencia
        }
        : null;

    const entry = {
        data: new Date().toISOString(),
        candidato: candidateProfile,
        recomendacao: recommendation
    };

    const history = getCandidateHistory();
    history.unshift(entry);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}