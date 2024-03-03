import './MainView.scss';

import Navbar from './Navbar.jsx';
import Dashboard from './DashboardView.jsx';

function MainView() {
  return (
    <>
      <div className="main-view">
        <Navbar />
        <Dashboard />
      </div>
    </>
  );
}

export default MainView;