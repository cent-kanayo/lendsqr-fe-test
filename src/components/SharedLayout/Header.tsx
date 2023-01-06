import Logo from '../../assets/logo.png';
import User from '../../assets/user.png';
import Dropdown from '../../assets/drop.png';
import Notification from '../../assets/notification.png';
import SearchIcon from '../../assets/search.png';
import './_layout.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__l">
        <div className="header__logo flex">
          <div>
            <span>|</span>
            <span>|</span>
            <span>|</span>
          </div>
          <img src={Logo} alt="Brand Logo" />
        </div>
        <div className="header__input">
          <input type="text" placeholder="Search for anything" />
          <span>
            <img src={SearchIcon} alt="search icon" />
          </span>
        </div>
      </div>
      <div className="header__r">
        <div className="docs">
          <a href="#">Docs</a>
          <img src={Notification} alt="Notification Icon" />
        </div>
        <div className="user-info">
          <img src={User} alt="user avatar" className="user-icon" />
          <h5>Adedeji</h5>
          <img src={Dropdown} alt="Dropdown icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
