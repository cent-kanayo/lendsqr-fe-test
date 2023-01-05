import UserInfoCard from './UserInfoCard';
import User1 from '../../assets/user-1.png';
import User2 from '../../assets/user-2.png';
import User3 from '../../assets/user-3.png';
import User4 from '../../assets/user-4.png';
import { Users } from '../../../usertypes';

import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import { useState } from 'react';

interface User {
  users: Users[];
}
const UsersPage = ({ users }: User) => {
  return (
    <div className="users">
      <h4 className="text-color1">Users</h4>
      <div className="users__summary">
        <UserInfoCard image={User1} text="users" figure={2453} />
        <UserInfoCard image={User2} text="active users" figure={2453} />
        <UserInfoCard image={User3} text="users with loans" figure={12453} />
        <UserInfoCard image={User4} text="users with savings" figure={102453} />
      </div>
      <div></div>
    </div>
  );
};

export default UsersPage;
