// Classe base para representar uma vaga
class Vaga {
    constructor(empresa, cargo, requisitos) {
        this.empresa = empresa;
        this.cargo = cargo;
        this.requisitos = requisitos;

    };

    // Retorna uma apresentação básica da vaga
    apresentarVaga() {
        return `Vaga ${this.cargo}, na empresa ${this.empresa}`;
    };

    // Analisa a compatibilidade entre o candidato e os requisitos da vaga
    analisarVaga(candidato) {
        // Filtra os requisitos que o candidato possui
        const requisitosAtendidos = this.requisitos.filter((requisito) => {
            return candidato.habilidades.find((habilidade) => {
                return habilidade === requisito;
            });
        });

        // Filtra os requisitos que o candidato ainda não possui
        const requisitosFaltantes = this.requisitos.filter((requisito) => {
            return !candidato.habilidades.find((habilidade) => {
                return habilidade === requisito;
            });
        });

        // Calcula o percentual de compatibilidade
        const percentualCompatibilidade =
            (requisitosAtendidos.length / this.requisitos.length) * 100;


        // Define a classificação conforme o percentual obtido
        let classificacao;

        if (percentualCompatibilidade >= 80) {
            classificacao = "Alta Compatibilidade!";
        } else if (percentualCompatibilidade >= 50) {
            classificacao = "Média Compatibilidade!";
        } else {
            classificacao = "Baixa Compatibilidade!"
        }

        // Retorna os dados completos da análise
        return {
            empresa: this.empresa,
            cargo: this.cargo,
            requisitosAtendidos,
            requisitosFaltantes,
            percentualCompatibilidade,
            classificacao
        };

    }

};

// Subclasse especializada em vagas de Front-End
export class VagaFrontEnd extends Vaga {
    constructor(empresa, cargo, requisitos, experiencia, area) {
        super(empresa, cargo, requisitos);
        this.experiencia = experiencia;
        this.area = area;
    };

    // Complementa a apresentação da vaga com a experiência exigida
    apresentarVaga() {
        const descricaoVaga = super.apresentarVaga();
        return `${descricaoVaga}. Experiência exigida: ${this.experiencia}`;
    }

};