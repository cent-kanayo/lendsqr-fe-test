import { Table } from 'react-bootstrap';
import FilterIcon from '../../assets/filter-results-button.png';
import Dots from '../../assets/dots.png';
import { Link } from 'react-router-dom';
import { Users } from '../../../usertypes';
import { Dispatch, SetStateAction } from 'react';
import UserDetailsModal from './UserDetailsModal';

type Prop = {
  users: Users[];
  showDetails: boolean;
  setShowFilter: Dispatch<SetStateAction<boolean>>;
  setShowDetails: Dispatch<SetStateAction<boolean>>;
};
const UsersTable = ({
  users,
  showDetails,
  setShowFilter,
  setShowDetails,
}: Prop) => {
  return (
    <div className="table">
      <Table responsive width="100%" cellSpacing="20px">
        <thead>
          <tr style={{ borderBottom: '1px solid gray' }}>
            <th align="left">
              <div className="flex">
                <span>Organization</span>
                <button
                  type="button"
                  onClick={() => setShowFilter((prev: boolean) => !prev)}
                >
                  <img src={FilterIcon} alt="filter icon" />
                </button>
              </div>
            </th>
            <th align="left">
              <div className="flex">
                <span>Username</span>
                <button
                  type="button"
                  onClick={() => setShowFilter((prev: boolean) => !prev)}
                >
                  <img src={FilterIcon} alt="filter icon" />
                </button>
              </div>
            </th>
            <th align="left">
              <div className="flex">
                <span>Email</span>
                <button
                  type="button"
                  onClick={() => setShowFilter((prev: boolean) => !prev)}
                >
                  <img src={FilterIcon} alt="filter icon" />
                </button>
              </div>
            </th>
            <th align="left">
              <div className="flex">
                <span>Phone number</span>
                <button
                  type="button"
                  onClick={() => setShowFilter((prev: boolean) => !prev)}
                >
                  <img src={FilterIcon} alt="filter icon" />
                </button>
              </div>
            </th>
            <th align="left">
              <div className="flex">
                <span>Date Joined</span>
                <button
                  type="button"
                  onClick={() => setShowFilter((prev: boolean) => !prev)}
                >
                  <img src={FilterIcon} alt="filter icon" />
                </button>
              </div>
            </th>
            <th align="left">
              <div className="flex">
                <span>Status</span>
                <button
                  type="button"
                  onClick={() => setShowFilter((prev: boolean) => !prev)}
                >
                  <img src={FilterIcon} alt="filter icon" />
                </button>
              </div>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <>
                <tr key={user.id} className="table__data">
                  <td>{user.orgName}</td>
                  <td>{`${user.profile.firstName} ${user.profile.lastName}`}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{user.createdAt}</td>
                  <td
                    className={
                      user.status === 'active'
                        ? 'active'
                        : user.status === 'inactive'
                        ? 'inactive'
                        : user.status === 'pending'
                        ? 'pending'
                        : 'blacklisted'
                    }
                  >
                    {user.status}
                  </td>
                  <td align="right">
                    <img
                      src={Dots}
                      alt="toggle"
                      onClick={() => setShowDetails((prev) => !prev)}
                    />
                  </td>
                  {showDetails && (
                    <div>
                      <UserDetailsModal userId={user.id} />
                    </div>
                  )}
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default UsersTable;
