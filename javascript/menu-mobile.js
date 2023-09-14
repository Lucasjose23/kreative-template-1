function openMobileMenu() {
  let x = document.getElementById("menu-itens-mobile");
  openClose(x);
}

function openClose(x) {
  if (x.style.display === "block") {
    x.style.display = "none";
    document.getElementById("icon-menu-mobile").classList.remove("fa-close");
    document.getElementById("icon-menu-mobile").classList.add("fa-bars");
  } else {
    x.style.display = "block";
    document.getElementById("icon-menu-mobile").classList.remove("fa-bars");
    document.getElementById("icon-menu-mobile").classList.add("fa-close");
  }
}

function clickMenu(id) {
  document.querySelectorAll(".menu-itens div a").forEach(element=>element.classList.remove('active'));
  document.querySelector(id).classList.add("active");
}
