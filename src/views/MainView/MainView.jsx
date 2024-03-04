import React, { useContext, useState } from 'react';

import { PageContext } from '@context/PageContext.jsx';
import Navbar from '@views/MainView/Navbar.jsx';
import DashboardView from '@views/MainView/DashboardView.jsx';
import EvaluationFormView from '@forms/EvaluationForm.jsx';

import '@views/MainView/MainView.scss';

function MainView() {
  const [page, setPage] = useState('userInfoFormPage');

  return (
    <PageContext.Provider value={{ page, setPage }}>
      <MainContent />
    </PageContext.Provider>
  );
}

function MainContent() {
  const { page, setPage } = useContext(PageContext);

  const isRendering = (pageName) => { return page === pageName };

  return (
    <div className="main-view">
      <Navbar />
      <div className='page-viewer'>
        <DashboardView />
        <EvaluationFormView />
      </div>
    </div>
  );
}

export default MainView;
