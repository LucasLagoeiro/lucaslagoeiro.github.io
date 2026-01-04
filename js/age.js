function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);

    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birth.getDate())
    ) {
        age--;
    }

    return age;
}

const birthDate = "2002-02-10";

// Espera o HTML carregar antes de acessar o DOM
document.addEventListener("DOMContentLoaded", () => {
  const ageElement = document.getElementById("age");

  if (ageElement) {
    ageElement.textContent = calculateAge(birthDate);
  }
});