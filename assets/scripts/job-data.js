import { VagaFrontEnd } from "./engine.js";

export async function carregarVagas() {
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
            vagaData.experiencia,
            vagaData.area
        ),
        );

        return vagas;


    } catch (error) {
        console.error("Erro ao carregar vagas:", error);
    }
}