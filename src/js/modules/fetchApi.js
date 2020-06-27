// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
import Swal from 'sweetalert2';

const fetchResponse = async (url) => {
  try {
    const response = await fetch(url, { mode: 'cors' });
    if (response.ok) {
      return response.json();
    }
    Swal.fire({
      icon: 'question',
      title: 'Oops!',
      text: 'Something went wrong...',
      footer: '<a href="https://en.wikipedia.org/wiki/HTTP_404">Why do I have this issue?</a>',
    });
    throw new Error('Oops!');
  } catch (error) {
    return error;
  }
};

export default fetchResponse;