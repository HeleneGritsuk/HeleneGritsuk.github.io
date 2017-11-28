import Pagination from './app/pagination';
import { headerTmpl, tmpl, channelsContainer, newsContainer,
  channelTmpl, channels, proxyurl, apiUrl, apiKey } from './app/constants';
import prepareChannelItem from './app/prepareChannel';
import prepareNewsItem from './app/prepareNewsItem';
import prepareNewsHeader from './app/prepareNewsHeader';
import HttpClient from './app/httpClient';
import Renderer from './app/renderer';
import Actions from './app/actions';

const newsPagination = new Pagination();
const httpClient = new HttpClient(proxyurl + apiUrl, apiKey);
const channelRenderer = new Renderer(channelTmpl, channelsContainer, prepareChannelItem);
const newsRenderer = new Renderer(tmpl, newsContainer, prepareNewsItem);
const headerRenderer = new Renderer(headerTmpl, newsContainer, prepareNewsHeader);
const seeMoreBtn = document.querySelector('.btn-more');
const sources = document.querySelector('.sources');

const appendNews = (data) => {
  const { articles } = data;
  const [{ source: { name: sourceName } }] = articles;
  if (newsPagination.pageNumber === 1) {
    headerRenderer.render([sourceName]);
  }
  newsRenderer.render(articles);
  seeMoreBtn.setAttribute('style', 'display:block');
};

const handleClick = (e) => {
  e.preventDefault();
  const { target } = e;

  target.id ? (newsPagination.sourceId = target.id) : (newsPagination.pageNumber += 1);

  return httpClient
    .get(`&sources=${newsPagination.sourceId}&page=${newsPagination.pageNumber}`)
    .then(response => response.json())
    .then(data => appendNews(data))
    .catch();
};


channelRenderer.render(channels);
const actions = new Actions();
actions.bindHandlers([sources, seeMoreBtn], handleClick);
