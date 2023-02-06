function toggleDarkLight() {
    let body = document.querySelector("body");
    let currentClass = body.className;
    body.className = currentClass == "light" ? "dark" : "light";
  }

  function toggleTogglerImg() {
    let toggleImg = document.querySelector("#colormodes");
    let currentImg = toggleImg.className;
    toggleImg.className = currentImg == "light-img" ? "dark-img" : "light-img";
  }

  let toggler = document.querySelector('#colormodes');
  toggler.addEventListener('click', () => {
    toggleDarkLight();
    toggleTogglerImg();
  } );