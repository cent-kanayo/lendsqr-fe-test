import Brief from '../../assets/brief.png';
import Dropdown from '../../assets/switch-dropdown.png';
import Home from '../../assets/home.png';
import Signout from '../../assets/sign.png';
import { sidebarLinks } from './sharedutils';

import '../../styles/_main.scss';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar flexCol">
      <div className="padding flex">
        <span>
          <img src={Brief} alt="Briefcase" />
        </span>
        <span>Switch Organization</span>
        <span>
          <img src={Dropdown} alt="Dropdown icon" />
        </span>
      </div>
      <div className="padding flex">
        <span>
          <img src={Home} alt="Home icon" />
        </span>
        <span>Dashboard</span>
      </div>
      <div className="padding">
        {sidebarLinks.map(({ links, title, id }) => {
          return (
            <div key={id} className="sidebar__links">
              <h5>{title}</h5>
              <div className="sidebar__sublinks">
                {links.map(({ path, text, icon }) => {
                  return (
                    <div key={text} className="flex">
                      <img src={icon} alt="Link icon" />
                      <span>{text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <hr />
      <div className="padding flex">
        <span>
          <img src={Signout} alt="Sign out icon" />
        </span>
        <span>Logout</span>
      </div>
      <p>v1.2.0</p>
    </aside>
  );
};

export default Sidebar;
