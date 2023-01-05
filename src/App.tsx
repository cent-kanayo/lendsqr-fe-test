import { useEffect, useState } from 'react';
import axios from 'axios';
import { Users } from '../usertypes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login, SharedLayout, UsersPage } from './components';
function App() {
  const [users, setUsers] = useState([] as Users[]);
  const usersUrl = `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get<Promise<Users[]>>(usersUrl);
        setUsers(await data);
        console.log(data);
      } catch (error: any) {
        console.log(error.message);
      }
    };
    fetchUsers();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<UsersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
