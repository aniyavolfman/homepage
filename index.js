const skillsSelect = document.querySelector("#skills");

skillsSelect.addEventListener('click', toggleSkillsList);

function toggleSkillsList() {
  const hardSkillsList = document.querySelector("#hardSkillsList");
  const softSkillsList = document.querySelector("#softSkillsList");
  if (skillsSelect.value === "hard") {
    hardSkillsList.style.display = "block";
    softSkillsList.style.display = "none";
  } else if (skillsSelect.value === "soft") {
    hardSkillsList.style.display = "none";
    softSkillsList.style.display = "block";
  } else {
      hardSkillsList.style.display = "none";
      softSkillsList.style.display = "none";
  }
}
