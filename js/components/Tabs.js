class TabLink {
  constructor(element) {
    this.link = element;
    this.data = this.link.dataset.tab;
    this.tabContentContainer = document.querySelector(
      `.tab-content-container[data-tab="${this.data}"]`
    );
    this.tabContent = new TabContent(this.tabContentContainer);

    this.link.addEventListener('click', () => {
      this.select();
    });
  }

  select() {
    const tabLink = document.querySelectorAll('.tab-link');

    tabLink.forEach((link) => {
      link.classList.remove('tab-link-selected');
    });

    this.link.classList.add('tab-link-selected');
    this.tabContent.select();
  }
}

class TabContent {
  constructor(element) {
    this.element = element;
    console.log(this.element);
  }

  select() {
    const tabContent = document.querySelectorAll('.tab-content-container');
    tabContent.forEach((tab) => {
      tab.classList.remove('tab-content-selected');
    });
    this.element.classList.add('tab-content-selected');
  }
}

let tabLinks = document.querySelectorAll('.tab-link');
tabLinks = Array.from(tabLinks).map((link) => new TabLink(link));

tabLinks[0].select();
