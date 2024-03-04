import './DashboardView.scss';
import PersonalInfoForm from '@forms/PersonalInfoForm.jsx';
import { useRef, useState, useContext } from "react";
import { PageContext } from '@context/PageContext.jsx';

function DashboardView() {
  const { page, setPage } = useContext(PageContext);
  const isViewingPage = (pageName) => {
    return page === pageName
  }

  return (
    <div className={"dashboard-view " + (!isViewingPage('userInfoFormPage') ? 'is-sliding-left' : '')}>
      <div className='form-title'>
        <h1>Kişisel Bilgi Formu</h1>
      </div>
      <div className='form-container-wrapper'>
        <div className='form-container'>
          <PersonalInfoForm />
        </div>
      </div>
    </div>
  );
}

export default DashboardView;