export default class Pagination {
  constructor(sourceId, page = 1) {
    this.sourceId = sourceId;
    this.pageNumber = page;
  }
  get pageNumber() {
    return this._pageNumber;
  }
  get sourceId() {
    return this._sourceId;
  }
  set pageNumber(newValue) {
    this._pageNumber = newValue;
  }
  set sourceId(newValue) {
    this._pageNumber = 1;
    this._sourceId = newValue;
  }
}
