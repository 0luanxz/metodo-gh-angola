const texto = "Descubra sua altura real escondida...";
let i = 0;
function escreverTexto() {
  if (i < texto.length) {
    document.getElementById("typedText").innerHTML += texto.charAt(i);
    i++;
    setTimeout(escreverTexto, 50);
  }
}
window.onload = escreverTexto;
