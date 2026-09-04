//Livia//


//Kassy//
// Essa parte do site ativa a animação da frase "Um pedacinho de felicidade em cada mordida." quando aparece na tela
window.addEventListener("scroll", function() {
  const section = document.querySelector(".navcards");
  const rect = section.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top <= windowHeight - 100) {
    section.classList.add("show");
  }
});
// Animação da seção "Quem somos" ao rolar
window.addEventListener("scroll", function() {
const section = document.querySelector(".quem-somos-section");
const rect = section.getBoundingClientRect();
const windowHeight = window.innerHeight;
if (rect.top <= windowHeight - 100) {
section.classList.add("show");
}
})


//arthur//
// -------------------------------
// Validação do formulário de contato
// -------------------------------

document.addEventListener("DOMContentLoaded", function() {
  // Seleciona o formulário dentro da seção de contato
  const form = document.querySelector(".contato-form form");

  // Verifica se o formulário existe antes de adicionar o evento
  if (!form) return;

  // Quando o usuário clicar em "Enviar"
  form.addEventListener("submit", function(event) {
    // Pega os valores digitados e remove espaços extras
    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const telefone = form.telefone.value.trim();

    // Teste simples para verificar se o e-mail tem "@" e "."
    const emailValido = email.includes("@") && email.includes(".");

    // Verificações
    if (!nome || !email || !telefone) {
      alert("Por favor, preencha todos os campos antes de enviar 🍬");
      event.preventDefault(); // impede o envio
    } else if (!emailValido) {
      alert("Digite um e-mail válido, por favor! 📧");
      event.preventDefault();
    } else {
      alert(`Mensagem enviada com sucesso! Obrigado, ${nome}!`);
    }
  });
});

// -------------------------------
// Interação com o botão "Encomende agora!"
// -------------------------------

document.addEventListener("DOMContentLoaded", function() {
  // Pega o botão da seção principal
  const botaoEncomenda = document.querySelector(".button");

  // Garante que o botão existe antes de usar
  if (!botaoEncomenda) return;

  // Adiciona o que vai acontecer quando clicarem nele
  botaoEncomenda.addEventListener("click", function() {
    alert("Em breve você poderá fazer sua encomenda online! 🍰");
  });
});


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


// -------------------------------
// Rolagem suave ao clicar nos links do menu
// -------------------------------
document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll('a[href^="#"]'); // pega todos os links âncora

  links.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault(); // impede o comportamento padrão

      const targetId = this.getAttribute("href"); // pega o destino
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // ajusta se tiver um header fixo
          behavior: "smooth" // efeito suave
        });
      }
    });
  });
});
// -------------------------------
// Rolagem suave personalizada ao clicar nos links do menu
// -------------------------------
document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        smoothScrollTo(targetElement.offsetTop - 80, 1500); // 1500ms = 1.5 segundos
      }
    });
  });

  // Função de rolagem suave com tempo personalizado
  function smoothScrollTo(target, duration) {
    const start = window.scrollY;
    const distance = target - start;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Função de aceleração/desaceleração suave (ease-in-out)
      const ease = progress < 0.5
        ? 2 * progress * progress
        : -1 + (4 - 2 * progress) * progress;

      window.scrollTo(0, start + distance * ease);

      if (elapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  }
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


