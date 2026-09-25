import { VagaFrontEnd } from "./engine.js";

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

console.log(vagas[3].analisarVaga(candidato));

    
} catch (error) {
    console.error("Erro ao carregar vagas:", error);
}
}

const candidato = {             // Objeto com os dados do candidato
    nome: "Rafael Palhano",
    areaInteresse: "Desenvolvimento Front-End",
    habilidades: [
        "HTML",
        "CSS",
        "JavaScript",
        "Git",
        "Responsividade"
    ],
    tempoExperiencia: "6 meses",
};

carregarVagas()