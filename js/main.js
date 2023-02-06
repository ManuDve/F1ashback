function toggleDarkLight() {
    let body = document.querySelector("body");
    let currentClass = body.className;
    body.className = currentClass == "light" ? "dark" : "light";
  }

  let toggler = document.querySelector('#colormodes');
  toggler.addEventListener('click', toggleDarkLight );