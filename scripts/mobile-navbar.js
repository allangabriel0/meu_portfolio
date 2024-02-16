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
      this.init();
  }
  
  animateLinks() {
      this.navLinks.forEach((link, index) => {
          const animationDelay = index / 7 + 0.3;
          link.style.animation = link.style.animation ? "" : `navLinkFade 0.5s ease forwards ${animationDelay}s`;
      });
  }
  
  handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
  }
  
  addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
  }
  
  init() {
      this.addClickEvent();
  }
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


/*
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();
  */

