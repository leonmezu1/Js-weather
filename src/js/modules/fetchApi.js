
const fetchResponse = async (url) => {
  try {
    const response = await fetch(url, { mode: 'cors' });
    return response.json();
  } catch (e) {
    return e;
  }
};

export default fetchResponse;