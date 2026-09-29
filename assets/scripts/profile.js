export function readCandidateProfile(form) {
    const nameInput = document.getElementById("candidatename");
    const candidateName = nameInput.value.trim();
    const selectedArea = form.querySelector('input[name="interestArea"]:checked');
    const interestArea = selectedArea.value;
    const selectedSkills = form.querySelectorAll('input[name="skills"]:checked');
    const skillsError = document.getElementById("skills-error");
    const experienceSelect = document.getElementById("experience");
    const experiencetime = experienceSelect.value;

    if (selectedSkills.length < 5) {
        skillsError.textContent = "Por favor, selecione pelo menos 5 habilidades.";
        return null;
    }

    skillsError.textContent = "";

    const skills = [];

    for (let i = 0; i < selectedSkills.length; i++) {
        skills.push(selectedSkills[i].value);
    }

    const candidateProfile = {
        nome: candidateName,
        areaInteresse: interestArea,
        habilidades: skills,
        tempoExperiencia: experiencetime
    };

    return candidateProfile;
}