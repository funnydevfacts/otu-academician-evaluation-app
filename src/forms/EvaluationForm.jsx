import Button from "@components/Button.jsx";
import ProgressTracker from "@components/ProgressTracker";
import CategoryContainer from "@components/CategoryContainer.jsx";

import { PageContext } from "@context/PageContext.jsx";
import { useState, useContext } from "react";

import questions from '@data/questions.json';

import './EvaluationForm.scss';

export default function EvaluationFormView() {
  const { page, setPage } = useContext(PageContext);
  const isViewingPage = (pageName) => {
    return page === pageName
  }

  const [currentCategory, setCurrentCategory] = useState('scientificResearch');

  return (
    <div className={"evaluation-form-view " + (isViewingPage('evaluationFormPage') ? '' : 'is-sliding-right')} >
      <div className="progress-wrapper">
        <ProgressTracker
          index={1}
          title="Bilimsel Araştırma"
          category={'scientificResearch'}
          currentCategory={currentCategory}
          onClick={(newCategory) => setCurrentCategory(newCategory)}
        />
        <ProgressTracker
          index={2}
          title="Proje"
          category={'project'}
          currentCategory={currentCategory}
          onClick={(newCategory) => setCurrentCategory(newCategory)}
        />
        <ProgressTracker
          index={3}
          title="Hizmet Faaliyetleri"
          category={'services'}
          currentCategory={currentCategory}
          onClick={(newCategory) => setCurrentCategory(newCategory)}
        />
        <ProgressTracker
          index={4}
          title="Tanıtım"
          category={'introduction'}
          currentCategory={currentCategory}
          onClick={(newCategory) => setCurrentCategory(newCategory)}
        />
      </div>
      <CategoryContainer categoryData={questions.scientificResearch} />
    </div>
  );
}