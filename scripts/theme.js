function changeLightDarkMode() {
  const btnChangeTheme = document.querySelector(".change-theme");
  const dmIcon = document.querySelector(".dm-icon");
  const html = document.querySelector("html");
  
  btnChangeTheme.addEventListener("click", ()=> {
    html.classList.toggle("dark-mode");
    dmIcon.classList.toggle("text-white");
  
    const preference = localStorage.getItem('darkmode');
    if(!preference) {
      localStorage.setItem("darkmode", true);
    } else{
      localStorage.removeItem("darkmode");
    }

    if (dmIcon.classList.contains("text-white")) {
      dmIcon.src = "/assets/img/sun.png";
      dmIcon.alt = "sun";
    } else{
      dmIcon.src = "/assets/img/moon.png";
      dmIcon.alt = "moon";
    }
  });
}

changeLightDarkMode();