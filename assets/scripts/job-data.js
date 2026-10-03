// Importa a classe usada para criar os objetos de vaga
import { VagaFrontEnd } from "./engine.js";

// Carrega as vagas cadastradas no arquivo JSON
export async function carregarVagas() {
    const caminhoVagas = "./assets/data/jobs.json";

    try {
        // Busca os dados do arquivo JSON
        const response = await fetch(caminhoVagas);

        // Interrompe a execução caso o carregamento falhe
        if (response.ok == false) {
            console.error("Erro ao carregar o arquivo JSON:", response.status);
            return null;
        }

        // Converte a resposta para dados JavaScript
        const data = await response.json();

        // Transforma cada registro do JSON em um objeto VagaFrontEnd
        const vagas = data.map((vagaData) => new VagaFrontEnd(
            vagaData.empresa,
            vagaData.cargo,
            vagaData.requisitos,
            vagaData.experiencia,
            vagaData.area
        ),
        );

        // Retorna a lista de vagas carregadas
        return vagas;


    } catch (error) {
        // Captura possíveis erros durante o carregamento
        console.error("Erro ao carregar vagas:", error);
    }
}