import { v4 as uuidv4 } from 'uuid';

export const DEFAULT_SOCIAL_MEDIA = [
  { id: uuidv4(), title: 'Instagram', link: 'instagram.com' },
  { id: uuidv4(), title: 'youtube', link: 'youtube.com' },
  { id: uuidv4(), title: 'wikipedia', link: 'wikipedia.com' },
];

export const getProducts = async () => {
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();
  console.log(data);
  return data;
};
export const onClick = (e) => {
  e.preventDefault();
  console.log(getProducts());
};
