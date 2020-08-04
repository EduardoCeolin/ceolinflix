import URL from '../config';

const URL_VIDEOS = `${URL}/videos?_embed=videos`;

function create(video) {
  return fetch(URL_VIDEOS, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(video),
  }).then(async (res) => {
    if (res.ok) {
      const response = await res.json();

      return response;
    }
    throw new Error('Não foi possível pegar os dados');
  });
}

export default { create };
