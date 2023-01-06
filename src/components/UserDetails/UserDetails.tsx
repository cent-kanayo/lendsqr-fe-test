import Arrow from '../../assets/arrowL.png';
import Avatar from '../../assets/avatar.png';
import Startfill from '../../assets/starfill.png';
import Startsolid from '../../assets/starsolid.png';

import './_userdetails.scss';
const UserDetails = () => {
  return (
    <section>
      <div className="flex">
        <span>
          <img src={Arrow} alt="Back icon" />
        </span>
        <span>Back to Users</span>
      </div>
      <div className="flex-btw">
        <div>
          <h4>User details</h4>
        </div>
        <div className="flex">
          <button className="btn__blacklist">Blacklist user</button>
          <button className="btn__activate">Activate user</button>
        </div>
      </div>
      <div className="user-details">
        <div className="user-detail__info flex">
          <div className="flex">
            <img src={Avatar} alt="User Avatar" className="user__image" />
            <div>
              <h3>Grace Anjorin</h3>
              <p>Lshghjljgl</p>
            </div>
          </div>
          <div>
            <span>User's Tier</span>
            <span className="flex">
              <img src={Startsolid} alt="Rating stars" />
              <img src={Startfill} alt="Rating stars" />
              <img src={Startfill} alt="Rating stars" />
            </span>
          </div>
          <div>
            <h4>#200,000.00</h4>
            <p>8997879-0-0/Providus Bank</p>
          </div>
        </div>
        <div className="flex-btw">
          <button style={{ border: '1px solid red' }}>General Details</button>
          <button>Documents</button>
          <button>Bank Details</button>
          <button>Loans</button>
          <button>Savings</button>
          <button>App and System</button>
        </div>
      </div>
    </section>
  );
};

export default UserDetails;
