// Adresse de reception des demandes
const CONTACT_EMAIL = "vianneygerard@icloud.com";

const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const type = form.querySelector('input[name="type"]:checked').value;
    const nom = form.nom.value.trim();
    const entreprise = form.entreprise.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    const subject = `Nouveau contact Studio Eiger - ${type}`;

    const bodyLines = [
      `Type : ${type}`,
      `Nom : ${nom}`,
      `Entreprise : ${entreprise || "-"}`,
      `Email : ${email}`,
      "",
      "Projet :",
      message
    ];

    const mailtoUrl =
      `mailto:${CONTACT_EMAIL}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailtoUrl;
  });
}
