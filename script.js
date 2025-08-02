document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("languageToggle");
  if (!toggleButton) {
    console.error("Toggle button #languageToggle not found");
    return;
  }

  const elements = document.querySelectorAll("[data-en][data-zh]");
  if (elements.length === 0) {
    console.warn("No translatable elements found (missing data-en/data-zh?)");
  }

  let currentLang = localStorage.getItem("lang") || "en";

  function switchLanguage(lang) {
    elements.forEach(el => {
      el.textContent = el.dataset[lang];
    });
    toggleButton.textContent = lang === "en" ? "中文" : "English";
    localStorage.setItem("lang", lang);
  }

  toggleButton.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "zh" : "en";
    switchLanguage(currentLang);
  });

  switchLanguage(currentLang);
});