import axios from 'axios';
import { Users } from '../usertypes';

const paginate = (data: Users[], userInput: number) => {
  let itemsPerPage = userInput;
  if (itemsPerPage > data.length - 1) {
    itemsPerPage = data.length - 1;
  }
  const numberOfPages = Math.ceil(data.length / itemsPerPage);

  const newUsers = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  });

  return newUsers;
};

export default paginate;

export const customFetch = axios.create({
  baseURL: 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1',
});
