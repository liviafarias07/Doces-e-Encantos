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














// === POPUP DE PROMOÇÃO ELEGANTE ===
window.addEventListener("load", () => {
  const promocoes = [
    {
      titulo: "Cupcake + Café",
      descricao: "A combinação perfeita por apenas R$12,00 🍰☕",
      imagem: "https://i.pinimg.com/736x/b7/fa/57/b7fa57e496ffe71ccb95200efa9c1014.jpg"
    },
    {
      titulo: "Brownie Encantado",
      descricao: "Peça 2 brownies e ganhe o 3º de presente 💚",
      imagem: "https://recipesblob.oetker.in/assets/9a89b75f976642dcab8ae407e2f4344e/750x400/chocolate-brownie.jpg"
    },
    {
      titulo: "Donuts Recheados",
      descricao: "Leve 3 e pague 2! Sabor e fofura garantidos 🍩",
      imagem: "https://s2-receitas.glbimg.com/2tJWD0tnppCIhHmhhpmR67ZqV8Y=/1366x0/filters:format(jpeg)/https://i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2025/9/x/r6EV23R0ixXlFU7Wi9yg/donut-facil-receita.jpg"
    },
    {
      titulo: "Mini Torta de Limão",
      descricao: "Refrescante, leve e irresistível — R$8,00 🍋",
      imagem: "https://laferretti.com.br/wp-content/uploads/2015/06/949641961-985x515.webp"
    },
  ];

  const popup = document.getElementById("popupPromo");
  const img = document.getElementById("promoImagem");
  const titulo = document.getElementById("promoTitulo");
  const descricao = document.getElementById("promoDescricao");

  // Escolhe promoção aleatória
  const promoAleatoria = promocoes[Math.floor(Math.random() * promocoes.length)];
  img.src = promoAleatoria.imagem;
  titulo.textContent = promoAleatoria.titulo;
  descricao.textContent = promoAleatoria.descricao;

  // Mostra o popup
  setTimeout(() => {
    popup.classList.add("show");
  }, 1000);

  // Some depois de 7 segundos
  setTimeout(() => {
    popup.classList.remove("show");
  }, 8000);
});






// === Mensagem de boas-vindas ===
window.addEventListener("load", () => {
  const msg = document.getElementById("boasVindas");
  msg.classList.add("show");
  // some automaticamente depois de 4 segundos
  setTimeout(() => {
    msg.classList.remove("show");
  }, 4000);
});
// pedir agora produtos
function pedirAgora(produto, preco) {
  alert(
    "Você selecionou: " + produto +
    "\nPreço a partir de: R$ " + preco +
    "\n\nPara finalizar, fale conosco pelo WhatsApp!"
  );
}
// ABRIR POPUP EXPLORAR
function explorarMais() {
  const popup = document.getElementById("popupExplorar");
  popup.style.display = "flex";
}
// FECHAR POPUP EXPLORAR
function fecharExplorar() {
  document.getElementById("popupExplorar").style.display = "none";
}
// botao pedir agora do topo//
function rolarParaCardapio() {
  const destino = document.querySelector(".menu-section");

  destino.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}



// === Animação de entrada dos cards do cardápio ===
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".menu-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.2, // ativa quando 20% do card aparece
    }
  );

  cards.forEach((card) => observer.observe(card));
});

