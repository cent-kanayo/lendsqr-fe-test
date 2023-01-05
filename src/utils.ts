import { Users } from '../usertypes';

const paginate = (data: Users[]) => {
  const itemsPerPage = 9;
  const numberOfPages = Math.ceil(data.length / itemsPerPage);

  const newUsers = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  });

  return newUsers;
};

export default paginate;
