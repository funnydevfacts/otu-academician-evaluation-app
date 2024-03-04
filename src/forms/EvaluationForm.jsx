import Button from "@components/Button.jsx";
import { PageContext } from "@context/PageContext";
import { useContext } from "react";

import './EvaluationForm.scss';

export default function EvaluationFormView() {
  const { page, setPage } = useContext(PageContext);
  const isViewingPage = (pageName) => {
    return page === pageName
  }

  return (
    <div className={"evaluation-form-view " + (isViewingPage('evaluationFormPage') ? '' : 'is-sliding-right')} >
      <h1>Evaluation Form</h1>
      <Button label="Submit" onClick={() => {
        console.log('Submit clicked!');
        setPage('userInfoFormPage');
      }} />
    </div>
  );
}