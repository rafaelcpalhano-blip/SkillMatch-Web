import { VagaFrontEnd } from "./engine.js";

const vagas = [
  
    new VagaFrontEnd(
        "PixelCode Digital",
        "Programador Web Júnior",
        [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Git"
        ],
        "6 meses"
    ),

];

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

    const resultado = vagas[0].analisarVaga(candidato)
    const resultado2 = vagas[0].apresentarVaga()

    
  console.log(resultado);
  console.log(resultado2);