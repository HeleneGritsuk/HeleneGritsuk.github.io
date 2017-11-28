import formatDate from './utils';

const prepareNewsItem = (tmpl, newsData) => {
  const newsImg = tmpl.content.querySelector('.news-item__img');
  const newsTitle = tmpl.content.querySelector('.news-item__title');
  const newsDate = tmpl.content.querySelector('.news-item__date');

  const {
    publishedAt: date,
    title,
    url,
    urlToImage: urlImg,
  } = newsData;

  newsTitle.textContent = title;
  newsDate.textContent = formatDate(date);
  newsImg.setAttribute('style', `background-image: url(${(urlImg || './img/default.jpeg')})`);
  newsTitle.setAttribute('href', url);
  return document.importNode(tmpl.content, true);
};
export default prepareNewsItem;
