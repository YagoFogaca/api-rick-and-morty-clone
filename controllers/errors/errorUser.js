class MyError extends Error {
  constructor(data) {
    super(data.message);
    this.status = data.status;
    this.message = data.message;
  }
}

export function errorController(data1 = '1', data2 = '1', data3 = '1') {
  if (data1.length === 0) {
    throw new MyError({ status: 204, message: 'Users not found' });
  }
  if (!data1) {
    throw new MyError({ status: 404, message: 'Not Found' });
  }
  if (!data2 || data2 === false) {
    throw new MyError({ status: 400, message: 'Login failed' });
  }
  if (!data3) {
    throw new MyError({ status: 400, message: 'Bad Request' });
  }
}
