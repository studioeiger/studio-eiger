// Adresse de reception des demandes
const CONTACT_EMAIL = "contact@studioeiger.fr";

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

// Menu burger (mobile/tablette)
const navToggle = document.getElementById("nav-toggle");
const mainNav = document.getElementById("main-nav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", function () {
    const isOpen = mainNav.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Ferme le menu automatiquement après avoir cliqué un lien
  mainNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      mainNav.classList.remove("is-open");
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}
