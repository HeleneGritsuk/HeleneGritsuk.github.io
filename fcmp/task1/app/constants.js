const headerTmpl = document.querySelector('#news-header');
const tmpl = document.querySelector('#news-template');
const channelTmpl = document.querySelector('#channel-template');

const channelsContainer = document.querySelector('.sources .row');
const newsContainer = document.querySelector('.articles__content');

const channels = [
  { id: 'abc-news', name: 'ABC News', imgUrl: 'https://icons.better-idea.org/icon?url=http://abcnews.go.com&amp;size=70..120..200' },
  { id: 'the-washington-post', name: 'The Washington Post', imgUrl: 'https://icons.better-idea.org/icon?url=https://www.washingtonpost.com&size=70..120..200' },
  { id: 'the-new-york-times', name: 'The New York Times', imgUrl: 'https://icons.better-idea.org/icon?url=http://www.nytimes.com&size=70..120..200' },
];

const proxyurl = 'https://cors-anywhere.herokuapp.com/';
const apiUrl = 'https://newsapi.org/v2/everything?';
const apiKey = 'e79543cdac79424d903e67af4125a6d4';

export { headerTmpl, tmpl, channelTmpl, channels, proxyurl, apiUrl, apiKey, channelsContainer, newsContainer };
