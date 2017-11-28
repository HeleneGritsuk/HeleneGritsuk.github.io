class Renderer {
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

class NewsRenderer extends Renderer {
  render(data) {
    super.render(data);
    const seeMoreBtn = document.querySelector('.btn-more');
    seeMoreBtn.setAttribute('style', 'display:block');
  }
}

class HeaderRenderer extends Renderer {
  constructor(tmpl, container, prepareContent, pagination) {
    super(tmpl, container, prepareContent);
    this.pagination = pagination;
  }
  render(data) {
    this.pagination.pageNumber == 1 ? super.render(data) : '';
  }
}

export { Renderer, NewsRenderer, HeaderRenderer };
