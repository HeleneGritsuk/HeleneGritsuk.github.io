export default class Actions {
  bindHandlers(target, handler) {
    target.forEach((elem) => { elem.addEventListener('click', handler); });
  }
}
