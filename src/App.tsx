import { useEffect, useState } from 'react';
import { Users } from '../usertypes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login, SharedLayout, UsersPage, UserDetails } from './components';

import paginate, { customFetch } from './utils';

function App() {
  const [users, setUsers] = useState([] as Users[][]);
  const [page, setPage] = useState(0);
  const [paginated, setPaginated] = useState(users[page]);

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

        setUsers(paginate(modifiedData, 9));
      } catch (error: any) {
        console.log(error.message);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    setPaginated(users[page]);
  }, [page]);
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
