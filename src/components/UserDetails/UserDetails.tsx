import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Users } from '../../Types/usertypes';
import Arrow from '../../assets/arrowL.png';
import Startfill from '../../assets/starfill.png';
import Startsolid from '../../assets/starsolid.png';
import { customFetch, fetchSingleUserFromLocalStorage } from '../../utils';

import UserRecords from './UserRecords';

import './_userdetails.scss';
const UserDetails = () => {
  const [user, setUser] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchSingleUser = async () => {
      try {
        const { data } = await customFetch.get<Promise<Users>>(`/users/${id}`);
        setUser(data);
      } catch (error: any) {
        console.log(error.message);
      }
    };
    fetchSingleUser();
  }, [id]);
  if (!user) return <h1>Loading...</h1>;
  return (
    <section>
      <div className="user-details-page flex">
        <Link to="/users">
          <div className="margin-bottom flex">
            <span>
              <img src={Arrow} alt="Back icon" />
            </span>
            <span className="text-color2">Back to Users</span>
          </div>
        </Link>
      </div>
      <div className="user-details__header margin-bottom flex-center">
        <div>
          <h4>User details</h4>
        </div>
        <div className="flex">
          <button className="btn__blacklist">Blacklist user</button>
          <button className="btn__activate">Activate user</button>
        </div>
      </div>
      <div className="user-details">
        <div className="user-details__info flex">
          <div className="user-image flex">
            <img
              src={user?.profile?.avatar}
              alt="User Avatar"
              className="user__image"
            />
          </div>
          <div className="user-name">
            <h3 className="text-color1 bottom-margin">{`${user?.profile?.firstName} ${user?.profile?.lastName}`}</h3>
            <p className="text-color2">LSQFf587g90</p>
          </div>
          <div className="user-division"></div>
          <div className="user-rating text-color2">
            <p className="bottom-margin">User's Tier</p>
            <span className="flex">
              <img src={Startsolid} alt="Rating stars" />
              <img src={Startfill} alt="Rating stars" />
              <img src={Startfill} alt="Rating stars" />
            </span>
          </div>
          <div className="user-division"></div>
          <div className="user-bank-detail text-color1">
            <h4 className="bottom-margin">₦{user?.accountBalance}</h4>
            <p>{`${user?.accountNumber}`}/Providus Bank</p>
          </div>
        </div>
        <div className="user-details__btn-container">
          <button className="user-details__btns user-details__btns-active">
            General Details
          </button>
          <button className="user-details__btns">Documents</button>
          <button className="user-details__btns">Bank Details</button>
          <button className="user-details__btns">Loans</button>
          <button className="user-details__btns">Savings</button>
          <button className="user-details__btns">App and System</button>
        </div>
      </div>
      <UserRecords />
    </section>
  );
};

export default UserDetails;
