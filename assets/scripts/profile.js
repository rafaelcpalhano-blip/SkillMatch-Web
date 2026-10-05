// Lê e valida os dados preenchidos no formulário do candidato
export function readCandidateProfile(form) {
    const nameInput = document.getElementById("candidatename");
    const candidateName = nameInput.value.trim();
    const nameError = document.getElementById("name-error");

     // Limpa mensagens anteriores de erro no nome
    nameError.textContent = "";

    // Valida se o nome foi informado
    if (candidateName === "") {
        nameError.textContent = "Por favor, informe um nome válido.";
        return null;
    }

    // Recupera a área de interesse selecionada
    const selectedArea = form.querySelector('input[name="interestArea"]:checked');
    const interestArea = selectedArea.value;

    // Recupera as habilidades selecionadas
    const selectedSkills = form.querySelectorAll('input[name="skills"]:checked');
    const skillsError = document.getElementById("skills-error");

    // Recupera o tempo de experiência selecionado
    const experienceSelect = document.getElementById("experience");
    const experiencetime = experienceSelect.value;

    // Exige pelo menos 5 habilidades selecionadas
    if (selectedSkills.length < 5) {
        skillsError.textContent = "Por favor, selecione pelo menos 5 habilidades.";
        return null;
    }

    skillsError.textContent = "";

    // Converte as habilidades selecionadas em uma lista de valores
    const skills = [];

    for (let i = 0; i < selectedSkills.length; i++) {
        skills.push(selectedSkills[i].value);
    }

    // Organiza os dados do candidato em um único objeto
    const candidateProfile = {
        nome: candidateName,
        areaInteresse: interestArea,
        habilidades: skills,
        tempoExperiencia: experiencetime
    };

    return candidateProfile;
}