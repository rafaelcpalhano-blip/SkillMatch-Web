// Converte os níveis de experiência para meses
const mesesPorExperiencia = {
    "6 meses": 6,
    "1 ano": 12,
    "2 anos": 24
};

// Seleciona a vaga mais compatível com o perfil do candidato
export function chooseBestJob(jobs, candidateProfile) {

    // Filtra vagas compatíveis por área, experiência e percentual mínimo
    const compatibleJobs = jobs.filter((job) => {
        const score =
            job.analisarVaga(candidateProfile).percentualCompatibilidade;

        return job.area === candidateProfile.areaInteresse &&
            mesesPorExperiencia[candidateProfile.tempoExperiencia] >=
            mesesPorExperiencia[job.experiencia] &&
            score >= 50;
    });

    // Escolhe a vaga com maior percentual de compatibilidade
    return compatibleJobs.reduce((best, job) => {
        if (best === null) return job;

        const currentScore =
            job.analisarVaga(candidateProfile).percentualCompatibilidade;
        const bestScore =
            best.analisarVaga(candidateProfile).percentualCompatibilidade;

        return currentScore > bestScore ? job : best;
    }, null);
}

// Recomenda a habilidade que mais aparece entre os requisitos faltantes
export function recommendStudy(resultados) {
    const contagem = {};

    // Conta quantas vezes cada habilidade faltante aparece
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

    // Retorna uma mensagem caso nenhuma habilidade esteja faltando
    if (habilidades.length === 0) {
        return "Você atende a todos os requisitos de habilidades das vagas analisadas.";
    }

    // Identifica a habilidade faltante mais recorrente
    const habilidadePrioritaria = habilidades.reduce((melhor, atual) => {
        if (contagem[atual] > contagem[melhor]) {
            return atual;
        }

        return melhor;
    });

    // Retorna a recomendação de estudo
    return `Recomendação de estudo: priorize ${habilidadePrioritaria}, ` +
        `habilidade faltante em ${contagem[habilidadePrioritaria]} vaga(s) analisada(s).`;
}