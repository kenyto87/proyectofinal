const btnSeeMore = document.getElementById("btn-see-more");
const seeMore = document.querySelector(".see-more");
const hobbies = document.querySelectorAll(".hobbies li");
const display = document.querySelector(".display");
let act = false;
btnSeeMore.addEventListener("click", function () {
  if (!act) {
    seeMore.classList.add("active");
    btnSeeMore.innerHTML = "Ocultar";
    act = true;
  } else {
    seeMore.classList.remove("active");
    btnSeeMore.innerHTML = "Ver más";
    act = false;
  }
});

hobbies.forEach((element, i) => {
  element.addEventListener("mouseover", function () {
    if (i == 0) {
      display.innerHTML = "Me gusta escuchar música, recarga mis energías.";
    }
    if (i == 1) {
      display.innerHTML = "Componer música es mi pasión.";
    }
    if (i == 2) {
      display.innerHTML =
        "El deporte es el complemento que necesito para comenzar el día.";
    }
    if (i == 3) {
      display.innerHTML = "Leer me distrae y ayuda a fortalecer conocimientos.";
    }
  });
  element.addEventListener("mouseout", function () {
    display.innerHTML = "";
  });
});
