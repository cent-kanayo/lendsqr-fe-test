import { Link } from 'react-router-dom';

import EyeIcon from '../../assets/eye.png';
import CheckUser from '../../assets/check-user.png';
import DeleteUSer from '../../assets/delete-user.png';
import { Users } from '../../Types/usertypes';

const UserDetailsModal = ({ userId }: { userId: string }) => {
  return (
    <div className="user-details__modal flex-col">
      <Link to={`/users/${userId}`} className="flex">
        <span>
          <img src={EyeIcon} alt="" />
        </span>
        <span>View Details</span>
      </Link>
      <div className="flex">
        <span>
          <img src={DeleteUSer} alt="" />
        </span>
        <span>Blacklist User</span>
      </div>
      <div className="flex">
        <span>
          <img src={CheckUser} alt="" />
        </span>
        <span>Activate User</span>
      </div>
    </div>
  );
};

export default UserDetailsModal;
