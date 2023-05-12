import axios from 'axios';
const IMAGES_PER_PAGE = 12;
const URL = 'https://pixabay.com/api/';
const options = {
  params: {
    key: '34570965-f4c02bf2bd7f36d8810cb4ca2',
    q: ``,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: IMAGES_PER_PAGE,
  },
};

export const fetchImages = async value => {
  options.params.q = value;
  options.params.page = 1;
  const response = await axios.get(URL, options);
  const array = response.data.hits;
  console.log(array);
  return array.map(({ id, webformatURL, largeImageURL }) => ({
    id,
    webformatURL,
    largeImageURL,
  }));
};
export const loadMoreDataFromAPI = async () => {
  options.params.page += 1;
  const response = await axios.get(URL, options);
  const array = response.data.hits;
  console.log(array);
  return array.map(({ id, webformatURL, largeImageURL }) => ({
    id,
    webformatURL,
    largeImageURL,
  }));
};
