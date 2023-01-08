import { Dispatch, SetStateAction } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import './_layout.scss';
export interface SidebarProp {
  showSidebar?: boolean;
  setShowSidebar?: Dispatch<SetStateAction<Boolean>>;
}
const SharedLayout = ({ showSidebar, setShowSidebar }: SidebarProp) => {
  return (
    <div>
      <Header setShowSidebar={setShowSidebar} />
      <div className="layout ">
        <div className="sidebar__container">
          <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        </div>
        <div className="layout__outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SharedLayout;
