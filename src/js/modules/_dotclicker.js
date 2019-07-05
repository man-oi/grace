class DotClicker {
  constructor(element, ...options) {
    this.defaults = {
      // set your default options here
      initDotsAmount: 5,
      dotsAmount: 1,
    };

    this.element = element;
    this.options = Object.assign({}, this.defaults, ...options);

    this.init();
  }

  init() {
    // init everything needed and call methods
    this.element.innerHTML = '';
    this.addDots(this.options.initDotsAmount);
    this.bindEvents();
  }

  addDots(count) {
    for (let i = 0; i < count; i += 1) {
      this.addDot();
    }
  }

  addDot() {
    const text = this.element.innerHTML;
    this.element.innerHTML = `${text}.`;
  }

  handleClick() {
    this.addDots(this.options.dotsAmount);
  }

  bindEvents() {
    // add event listeners
    this.element.addEventListener('click', this.handleClick.bind(this));
  }
}
