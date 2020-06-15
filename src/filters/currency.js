export default (value) => {
  if (value === undefined || value === null) {
    return null;
  }

  return value.toLocaleString('de-DE', {
    style: 'currency',
    currency: 'EUR',
  });
};
