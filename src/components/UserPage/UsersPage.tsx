import UserInfoCard from './UserInfoCard';
import User1 from '../../assets/user-1.png';
import User2 from '../../assets/user-2.png';
import User3 from '../../assets/user-3.png';
import User4 from '../../assets/user-4.png';
import NextBtn from '../../assets/next-btn.png';
import PrevBtn from '../../assets/prev-btn.png';
import DropDown from '../../assets/switch-dropdown.png';

import { Users } from '../../../usertypes';

import UsersTable from './UsersTable';
import { useRef, useState } from 'react';
import FormModal from './FormModal';
import UserDetailsModal from './UserDetailsModal';

export interface User {
  users: Users[];
  setPage: (page: number) => void;
}

const UsersPage = ({ users, setPage }: User) => {
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const userInput = useRef(null);
  return (
    <div className="users">
      <h4 className="text-color1">Users</h4>
      <div className="users__summary">
        <UserInfoCard image={User1} text="users" figure={2453} />
        <UserInfoCard image={User2} text="active users" figure={2453} />
        <UserInfoCard image={User3} text="users with loans" figure={12453} />
        <UserInfoCard image={User4} text="users with savings" figure={102453} />
      </div>
      <div className="table__container">
        <UsersTable
          users={users}
          showDetails={showDetails}
          setShowFilter={setShowFilter}
          setShowDetails={setShowDetails}
        />
        {showFilter && (
          <div className="table__filters">
            <FormModal />
          </div>
        )}
      </div>
      <div className="filters">
        <div className="flex text-color2">
          <span>Showing</span>
          <div className="flex text-color1 select">
            <select name="" id="" value="10">
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">40</option>
            </select>
            <span>
              <img src={DropDown} alt="Drop down icon" />
            </span>
          </div>
          <span>Out 100</span>
        </div>
        <div className="filters__btn flex text-color2">
          <div>
            <button aria-label="prev button">
              <img src={PrevBtn} alt="" />
            </button>
          </div>
          {users?.slice(0, 3).map((_, index) => {
            return <button onClick={() => setPage(index)}>{index + 1}</button>;
          })}
          <span>...</span>
          {users?.slice(users.length - 2).map((_, index) => {
            return <button>{index + 1}</button>;
          })}
          <div>
            <button aria-label="next button">
              <img src={NextBtn} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
