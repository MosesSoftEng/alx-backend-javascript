export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({
      status: 200,
      body: 'success',
    }))
    .catch(() => new Error())
    // eslint-disable-next-line no-console
    .finally(() => console.log('Got a response from the API'));
}
