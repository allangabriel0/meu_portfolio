const changeThemeBtn = document.querySelector("#change-theme, #change-theme-white")

// Toglle white mode

function toggleWhiteTheme() {
  document.body.classList.toggle("white")
}

// Load light or dark mode

changeThemeBtn.addEventListener("change", function(){
  toggleWhiteTheme()
})

// Função para verificar o tema do sistema
function verificarTema() {
  // Obter a mídia query para o tema do sistema
  const query = window.matchMedia("(prefers-color-scheme: dark)");

  // Se o tema do sistema for escuro, aplica o tema escuro no site
  if (query.matches) {
    document.body.classList.remove("white");
  } else {
    // Se o tema do sistema for claro, aplica o tema claro no site
    document.body.classList.add("white");
  }

  // Adicionar um listener para mudanças no tema do sistema
  query.addEventListener("change", function () {
    verificarTema();
  });
}

// Chamar a função para verificar o tema do sistema
verificarTema();














