

class Vaga {                   // Classe com constructor, atributos e método
    constructor(empresa, cargo, requisitos) { // Constructor da classe
        this.empresa = empresa;
        this.cargo = cargo;
        this.requisitos = requisitos;
    };

    apresentarVaga() {         // Método da classe
        return `Vaga ${this.cargo}, na empresa ${this.empresa}`; // Método utilizando this
    };

    analisarVaga(candidato) { //  Função principal de análise de cada vaga
        const requisitosAtendidos = this.requisitos.filter((requisito) => { // filter seleciona requisitos atendidos
            return candidato.habilidades.find((habilidade) => { // find procura uma habilidade correspondente
                return habilidade === requisito; //  Comparação entre habilidade e requisito
            });
        });
        const requisitosFaltantes = this.requisitos.filter((requisito) => { //  filter identifica requisitos faltantes
            return !candidato.habilidades.find((habilidade) => { //  find verifica se a habilidade não existe no candidato
                return habilidade === requisito;
            });
        });

        const percentualCompatibilidade = //  Cálculo do percentual de compatibilidade
            (requisitosAtendidos.length / this.requisitos.length) * 100; // Toda extenção de requisitos atendidos ÷ total de requisitos × 100


        let classificacao;  // Variável que recebe a classificação

        if (percentualCompatibilidade >= 80) {          // Entre 80 a 100 = Alta Compatibilidade
            classificacao = "Alta Compatibilidade!";
        } else if (percentualCompatibilidade >= 50) {   // Entre 50 a 79 = Média Compatibilidade
            classificacao = "Média Compatibilidade!";
        } else {                                        // 0 a 49 = Baixa Compatibilidade
            classificacao = "Baixa Compatibilidade!"
        }
        return { // Retorna objeto com o resultado completo da análise
            empresa: this.empresa,
            cargo: this.cargo,
            requisitosAtendidos,
            requisitosFaltantes,
            percentualCompatibilidade,
            classificacao
        };

    }

};

export class VagaFrontEnd extends Vaga { // Herança com extends
    constructor(empresa, cargo, requisitos, experiencia) {
        super(empresa, cargo, requisitos); // super chama o constructor da classe Vaga
        this.experiencia = experiencia; // Subclasse adiciona novo atributo e utiliza this
    };

apresentarVaga() {
    const descricaoVaga = super.apresentarVaga();
    return `${descricaoVaga}. Experiência exigida: ${this.experiencia}`;
}

};



