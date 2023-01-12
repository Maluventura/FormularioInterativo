var buttons = document.querySelectorAll(".botoes");
var selecionado = undefined;

function selectUserRanting(userRanting) {
  selecionado = userRanting;
  for (let i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    if (button.value == userRanting) {
      button.style.background = "orange";
    } else {
      button.style.background = "#262F38";
    }
  }
}

function enviar() {
  window.location = `/resultado.html?ranting=${selecionado}`;
}
