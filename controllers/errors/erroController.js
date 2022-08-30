export function errors(data) {
  if (!data) {
    throw new Error('Not Found');
  }

  if (data === false) {
    throw new Error('Bad Request');
  }

  if (data.length === 0) {
    throw new Error('No content');
  }
}
