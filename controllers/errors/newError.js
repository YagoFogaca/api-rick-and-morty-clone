export class newError extends Error {
  constructor(data) {
    super(data.message);
    this.status = data.status;
    this.message = data.message;
  }
}
