import './DashboardView.scss';
import PersonalInfoForm from '../../forms/PersonalInfoForm.jsx';
import { useRef, useState, useEffect } from "react";

function DashboardView() {

  const [name, setName] = useState("Name Surname");
  const [count, setCount] = useState(0);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/todos/1").then(async (response) => {

      const resData = await response.json();

      const tempName = resData.title;

      console.log(resData);
      console.log(resData.title);

      if (tempName) {
        setName(tempName);
      }
    });
  }, []);

  return (
    <>
      <div className="dashboard-view">
        <div className='form-title'>
          <h1>Kişisel Bilgi Formu</h1>
        </div>
        <div className='form-container-wrapper'>
          <div className='form-container'>
            <PersonalInfoForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardView;