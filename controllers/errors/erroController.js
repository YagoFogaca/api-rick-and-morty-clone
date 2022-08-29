export function errors(data) {
  if (!data) {
    throw new Error({ message: 'Not Found' });
  }

  if (data === false) {
    throw new Error({ message: 'Bad Request' });
  }

  if (data.length === 0) {
    throw new Error({ message: 'No content' });
  }
}
