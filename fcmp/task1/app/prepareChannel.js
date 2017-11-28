const prepareChannelItem = (tmpl, channelData) => {
  const channelBtnGet = tmpl.content.querySelector('.btn-get');
  const channelImg = tmpl.content.querySelector('img');
  const channelTitle = tmpl.content.querySelector('h2');
  const { id, name, imgUrl } = channelData;

  channelBtnGet.setAttribute('id', id);
  channelImg.setAttribute('src', imgUrl);
  channelTitle.textContent = name;
  return document.importNode(tmpl.content, true);
};
export default prepareChannelItem;
