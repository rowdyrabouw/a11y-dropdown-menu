const resetMenu = () => {
  document.querySelectorAll("li.has-submenu").forEach((el) => {
    el.className = "has-submenu";
    el.querySelector("a").setAttribute("aria-expanded", "false");
    el.querySelector("ul").className = "hidden";
  });
};

document.querySelectorAll("li.has-submenu").forEach((el) => {
  el.querySelector("a").addEventListener("click", function (event) {
    if (this.parentNode.className == "has-submenu") {
      this.parentNode.className = "has-submenu open-submenu";
      this.setAttribute("aria-expanded", "true");
    } else {
      this.parentNode.className = "has-submenu";
      this.setAttribute("aria-expanded", "false");
    }
    this.nextElementSibling.classList.toggle("hidden");
    event.preventDefault();
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    resetMenu();
  }
});

resetMenu();
