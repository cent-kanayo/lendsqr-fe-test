import { useEffect, useState } from 'react';
import { Users } from '../usertypes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login, SharedLayout, UsersPage, UserDetails } from './components';
import { fetchUsersFromLocalStorage } from './utils';
import paginate, { customFetch } from './utils';

function App() {
  const [numberPerPage, setNumberPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [users, setUsers] = useState(
    paginate(fetchUsersFromLocalStorage(), numberPerPage) as Users[][]
  );
  const [paginated, setPaginated] = useState(users[page]);
  const [userInput, setUserInput] = useState(numberPerPage);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await customFetch.get('/users');
        const modifiedData = data.map((item: Users, index: number) => {
          return {
            ...item,
            status:
              index % 3 === 0
                ? 'active'
                : index % 5 === 0
                ? 'blacklisted'
                : index % 7 === 0
                ? 'inactive'
                : 'pending',
          };
        });
        localStorage.setItem('Users', JSON.stringify(modifiedData));
      } catch (error: any) {
        console.log(error.message);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    setPaginated(users[page]);
  }, [page]);
  useEffect(() => {
    setNumberPerPage(userInput);
  }, [numberPerPage]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={<UsersPage users={paginated} setPage={setPage} />}
          />
          <Route path="users/:id" element={<UserDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
