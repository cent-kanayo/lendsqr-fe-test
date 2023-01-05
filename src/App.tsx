import { useEffect, useState } from 'react';
import axios from 'axios';
import { Users } from '../usertypes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login, SharedLayout, UsersPage } from './components';

import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import paginate from './utils';

function App() {
  const [users, setUsers] = useState([] as Users[][]);
  const usersUrl = `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get<Promise<Users[]>>(usersUrl);
        const modifiedData = (await data).map((item, index) => {
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

        setUsers(paginate(modifiedData));
        // console.log(data);
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
          <Route index element={<UsersPage users={users[0]} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
