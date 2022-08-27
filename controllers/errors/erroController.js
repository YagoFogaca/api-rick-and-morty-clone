import { newError } from './newError.js';

export function errors(data) {
  console.log(data);
  if (!data) {
    throw new newError({ status: 404, message: 'Not Found' });
  }

  if (data === false) {
    throw new newError({ status: 400, message: 'Bad Request' });
  }

  if (data.length === 0) {
    throw new newError({ status: 204, message: 'No content' });
  }
}
