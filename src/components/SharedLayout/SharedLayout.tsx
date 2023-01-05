import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
const SharedLayout = () => {
  return (
    <div>
      <Header />
      <div className="layout">
        <Sidebar />
        <div className="layout__outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SharedLayout;
