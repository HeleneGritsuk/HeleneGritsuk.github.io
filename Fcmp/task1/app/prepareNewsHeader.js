const prepareNewsHeader = (tmpl, channelName) => {
  const newsHeader = tmpl.content.querySelector('.news-header');
  const container = document.querySelector('.articles__content');
  container.innerHTML = '';
  newsHeader.textContent = `${channelName} news`;
  return document.importNode(tmpl.content, true);
};
export default prepareNewsHeader;
