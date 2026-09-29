const mesesPorExperiencia = {
    "6 meses": 6,
    "1 ano": 12,
    "2 anos": 24
};

export function chooseBestJob(jobs, candidateProfile) {
    const compatibleJobs = jobs.filter((job) => {
        const score =
            job.analisarVaga(candidateProfile).percentualCompatibilidade;

        return job.area === candidateProfile.areaInteresse &&
            mesesPorExperiencia[candidateProfile.tempoExperiencia] >=
            mesesPorExperiencia[job.experiencia] &&
            score >= 50;
    });

        return compatibleJobs.reduce((best, job) => {
        if (best === null) return job;

        const currentScore =
            job.analisarVaga(candidateProfile).percentualCompatibilidade;
        const bestScore =
            best.analisarVaga(candidateProfile).percentualCompatibilidade;

        return currentScore > bestScore ? job : best;
    }, null);
}
