import { VagaFrontEnd } from "./engine.js";
import {readCandidateProfile } from "./profile.js";

const form = document.getElementById("profile-form");

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const candidateProfile = readCandidateProfile(form);

    if (candidateProfile === null) {
        return;
    }

    const vagas = await carregarVagas();
if (!vagas) {
    return;
}

const resultados = vagas.map((vaga) => vaga.analisarVaga(candidateProfile));
console.log(resultados);
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
    vagaData.experiencia
),
);

return vagas;

    
} catch (error) {
    console.error("Erro ao carregar vagas:", error);
}
}


