const modal = document.getElementById("meuModal");
const btnAbrir = document.querySelector(".modalButton");
const btnFechar = document.querySelector(".fechar");

btnAbrir.onclick = function () {
  modal.style.display = "block";
};

btnFechar.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
