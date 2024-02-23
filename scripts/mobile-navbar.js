class MobileNavbar {
  constructor(mobileMenuSelector, navListSelector, navLinksSelector) {
      this.mobileMenu = document.querySelector(mobileMenuSelector);
      this.navList = document.querySelector(navListSelector);
      this.navLinks = document.querySelectorAll(navLinksSelector);
      this.activeClass = "active";
      
      if (!this.mobileMenu || !this.navList || !this.navLinks.length) {
          throw new Error("Elementos não encontrados. Verifique os seletores fornecidos.");
      }
      
      this.handleClick = this.handleClick.bind(this);
      this.closeMenu = this.closeMenu.bind(this); // Nova função para fechar o menu
      this.init();
  }
  
  animateLinks() {
    this.navLinks.forEach((link, index) => {
        const animationDelay = index / 7 + 0.3;
        link.style.animation = ""; // Remover a animação anteriormente aplicada
        setTimeout(() => {
            link.style.animation = `navLinkFade 0.5s ease forwards ${animationDelay}s`;
        }, 1); // Aguardar um curto período para forçar o reinício da animação
    });
}




  
  handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
  }

  closeMenu() {
      // Fecha o menu se estiver aberto
      if (this.navList.classList.contains(this.activeClass)) {
          this.navList.classList.remove(this.activeClass);
          this.mobileMenu.classList.remove(this.activeClass);
      }
  }
  
  addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
      // Adiciona evento de clique a cada item do menu para fechar o menu
      this.navLinks.forEach(link => {
          link.addEventListener("click", this.closeMenu);
      });
  }
  
  init() {
      this.addClickEvent();
  }
}

// Função para obter o valor de um cookie
function getCookie(name) {
  const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
    const [cookieName, cookieValue] = cookie.split("=");
    acc[cookieName] = cookieValue;
    return acc;
  }, {});
  return cookies[name];
}

try {
  const mobileNavbar = new MobileNavbar(
      ".mobile-menu",
      ".nav-list",
      ".nav-list li"
  );
} catch (error) {
  console.error(error.message);
}


// Seleciona o header
const header = document.querySelector('header');

// Guarda a posição inicial do scroll
let lastScroll = window.pageYOffset;

// Função para verificar a direção do scroll e mostrar/esconder o header com animação
function handleScroll() {
    const currentScroll = window.pageYOffset;

    // Verifica se a direção do scroll é para baixo e se a distância percorrida é maior que 80px
    if (currentScroll > lastScroll && currentScroll > 80) {
        // Esconde o header com animação
        header.style.transform = 'translateY(-100%)';
        header.style.transition = 'transform 0.3s ease-in-out';
    } else {
        // Mostra o header com animação
        header.style.transform = 'translateY(0)';
        header.style.transition = 'transform 0.3s ease-in-out';
    }

    // Atualiza a posição do último scroll
    lastScroll = currentScroll;
}

// Adiciona um event listener para o evento scroll
window.addEventListener('scroll', handleScroll);


