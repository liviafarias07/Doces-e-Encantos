// -------------------------------
// Interação com o botão "Voltar"
// -------------------------------
document.addEventListener("DOMContentLoaded", function() {
  const btnTopo = document.getElementById("btnTopo");

  // Mostra/esconde conforme o scroll
  window.addEventListener("scroll", () => {
    btnTopo.style.display = window.scrollY > 300 ? "flex" : "none";
  });

  // Ao clicar, rola suavemente pro topo
  btnTopo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});



