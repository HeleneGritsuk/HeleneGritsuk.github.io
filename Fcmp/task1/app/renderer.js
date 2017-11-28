export default class Renderer {
  constructor(tmpl, container, prepareContent) {
    this.tmpl = tmpl;
    this.container = container;
    this.prepareContent = prepareContent;
  }

  render(data) {
    const elementsArray = data.map(elem => this.prepareContent(this.tmpl, elem));
    elementsArray.forEach((elem) => { this.container.appendChild(elem); });
  }
}
