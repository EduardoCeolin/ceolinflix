import URL from '../config';

const URL_CATEGORIES = `${URL}`;

function getAllCategories() {
  return fetch(`${URL_CATEGORIES}/categorias`).then(async (res) => {
    if (res.ok) {
      const response = await res.json();

      return response;
    }
    throw new Error('Não foi possível pegar os dados');
  });
}

function getAllCategoriesWithVideos() {
  return fetch(`${URL_CATEGORIES}/categorias?_embed=videos`).then(
    async (res) => {
      if (res.ok) {
        const response = await res.json();

        return response;
      }
      throw new Error('Não foi possível pegar os dados');
    }
  );
}

export default { getAllCategoriesWithVideos, getAllCategories };
