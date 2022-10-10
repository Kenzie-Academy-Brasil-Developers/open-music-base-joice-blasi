function changeLightDarkMode() {
  const btnChangeTheme = document.querySelector(".change-theme");
  const dmIcon = document.querySelector(".dm-icon");
  const html = document.querySelector("html");
  
  btnChangeTheme.addEventListener("click", ()=> {
    html.classList.toggle("dark-mode");
    dmIcon.classList.toggle("text-white");
  
    const preference = localStorage.getItem("darkmode");
    if(preference === "true") {
      localStorage.setItem("darkmode", "false");
      html.classList.remove("dark-mode");
      dmIcon.src = "/assets/img/moon.png";
      dmIcon.alt = "moon";
    } else if(preference === "false") {
      localStorage.setItem("darkmode", "true");
      html.classList.add("dark-mode");
      dmIcon.classList.add("text-white");
      dmIcon.src = "/assets/img/sun.png";
      dmIcon.alt = "sun";
    } else if(preference === null) {
      localStorage.setItem("darkmode", "false");
      html.classList.remove("dark-mode");
      dmIcon.classList.remove("text-white");
      dmIcon.src = "/assets/img/moon.png";
      dmIcon.alt = "moon";
    }
  });
}

changeLightDarkMode();