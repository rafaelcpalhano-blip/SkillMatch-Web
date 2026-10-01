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

export function recommendStudy(resultados) {
    const contagem = {};

    resultados.forEach((resultado) => {
        resultado.requisitosFaltantes.forEach((habilidade) => {
            if (contagem[habilidade]) {
                contagem[habilidade]++;
            } else {
                contagem[habilidade] = 1;
            }
        });
    });

    const habilidades = Object.keys(contagem);

    if (habilidades.length === 0) {
        return "Você atende a todos os requisitos de habilidades das vagas analisadas.";
    }

    const habilidadePrioritaria = habilidades.reduce((melhor, atual) => {
        if (contagem[atual] > contagem[melhor]) {
            return atual;
        }

        return melhor;
    });

    return `Recomendação de estudo: priorize ${habilidadePrioritaria}, ` +
        `habilidade faltante em ${contagem[habilidadePrioritaria]} vaga(s) analisada(s).`;
}