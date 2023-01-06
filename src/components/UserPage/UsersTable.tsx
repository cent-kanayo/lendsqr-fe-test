import { User } from './UsersPage';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FilterIcon from '../../assets/filter-results-button.png';
const UsersTable = ({ users }: User) => {
  return (
    <div className="table">
      <Table responsive width="100%" cellSpacing={0} cellPadding={0}>
        <thead>
          <tr>
            <th align="left">
              <div className="flex">
                <span>Organization</span>
                <span>
                  <img src={FilterIcon} alt="filter icon" />
                </span>
              </div>
            </th>
            <th align="left">
              <div className="flex">
                <span>Username</span>
                <span>
                  <img src={FilterIcon} alt="filter icon" />
                </span>
              </div>
            </th>
            <th align="left">
              <div className="flex">
                <span>Email</span>
                <span>
                  <img src={FilterIcon} alt="filter icon" />
                </span>
              </div>
            </th>
            <th align="left">
              <div className="flex">
                <span>Phone number</span>
                <span>
                  <img src={FilterIcon} alt="filter icon" />
                </span>
              </div>
            </th>
            <th align="left">
              <div className="flex">
                <span>Date Joined</span>
                <span>
                  <img src={FilterIcon} alt="filter icon" />
                </span>
              </div>
            </th>
            <th align="left">
              <div className="flex">
                <span>Status</span>
                <span>
                  <img src={FilterIcon} alt="filter icon" />
                </span>
              </div>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.orgName}</td>
                <td>{`${user.profile.firstName} ${user.profile.lastName}`}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.createdAt.toLocaleLowerCase()}</td>
                <td>{user.status}</td>
                <td>
                  <Link to={`users/${user.id}`}>Userdetail</Link>
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
