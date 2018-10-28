class NavBurger {
  constructor(item) {
    this.navBurger = item;
    this.burgerButton = document.querySelector('.nav-burger-button');
    this.burgerButton.addEventListener('click', () => {
      this.toggleBurger();
      this.toggleIcons();
    });
  }

  toggleBurger() {
    this.navBurger.classList.toggle('toggle-burger');
  }

  toggleIcons() {
    this.burgerBars = document.querySelectorAll('.bar');

    if (this.burgerButton.classList.contains('change')) {
      this.burgerButton.classList.remove('change');
    } else {
      this.burgerButton.classList.add('change');
    }
  }
}

let navBurger = document.querySelectorAll('.nav-burger-links');
navBurger = Array.from(navBurger).map(
  (burgerItems) => new NavBurger(burgerItems)
);
