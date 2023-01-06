import { User } from './UsersPage';
import { Table } from 'react-bootstrap';
import FilterIcon from '../../assets/filter-results-button.png';
import Dots from '../../assets/dots.png';
const UsersTable = ({ users }: User) => {
  return (
    <div className="table">
      <Table
        responsive
        width="100%"
        cellSpacing="20px"
        bordered={true}
        cellPadding="20px"
      >
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
              <tr key={user.id} className="table__data">
                <td>{user.orgName}</td>

                <td>{`${user.profile.firstName} ${user.profile.lastName}`}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.createdAt.toLocaleLowerCase()}</td>
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
                  <img src={Dots} alt="toggle" />
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
