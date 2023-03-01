export default class ErrorBarrel extends Error {
  constructor(message: string, code = '404') {
    super(message);
    this.stack = code;
  }
}
