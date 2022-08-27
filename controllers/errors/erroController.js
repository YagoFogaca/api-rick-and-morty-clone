import { newError } from './newError.js';

export function errors(data) {
  if (data.length === 0) {
    console.log(data);
    throw new newError({ status: 204, message: 'No content' });
  }

  if (!data) {
    throw new newError({ status: 404, message: 'Not Found' });
  }

  if (data === false) {
    throw new newError({ status: 400, message: 'Bad Request' });
  }
}
