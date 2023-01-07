import { User } from './UsersPage';
import { Table } from 'react-bootstrap';
import FilterIcon from '../../assets/filter-results-button.png';
import Dots from '../../assets/dots.png';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
const UsersTable = ({ users }: User) => {
  return (
    <div className="table">
      <Table responsive width="100%" cellSpacing="20px" cellPadding="10px">
        <thead>
          <tr style={{ borderBottom: '1px solid gray' }}>
            <th align="left">
              <div className="flex">
                <span>Organization</span>
                <button>
                  <img src={FilterIcon} alt="filter icon" />
                </button>
              </div>
            </th>
            <th align="left">
              <div className="flex">
                <span>Username</span>
                <button>
                  <img src={FilterIcon} alt="filter icon" />
                </button>
              </div>
            </th>
            <th align="left">
              <div className="flex">
                <span>Email</span>
                <button>
                  <img src={FilterIcon} alt="filter icon" />
                </button>
              </div>
            </th>
            <th align="left">
              <div className="flex">
                <span>Phone number</span>
                <button>
                  <img src={FilterIcon} alt="filter icon" />
                </button>
              </div>
            </th>
            <th align="left">
              <div className="flex">
                <span>Date Joined</span>
                <button>
                  <img src={FilterIcon} alt="filter icon" />
                </button>
              </div>
            </th>
            <th align="left">
              <div className="flex">
                <span>Status</span>
                <button>
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
                  <Link to={`/users/${user.id}`}>
                    <img src={Dots} alt="toggle" />
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default UsersTable;
