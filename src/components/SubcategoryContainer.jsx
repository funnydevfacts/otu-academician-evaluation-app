import './SubcategoryContainer.scss';

import QuestionContainer from '@components/QuestionContainer.jsx';

export default function SubcategoryContainer({ subcategoryData }) {
  return (
    <div className="subcategory-container">
      <div className="subcategory-header">
        <h2>{subcategoryData.title}</h2>
      </div>
      <table className="subcategory-content" style={{ borderSpacing: 0 }}>
        <thead>
          <tr>
            <th className='center'>Sıra</th>
            <th className='left'>Kriterler</th>
          </tr>
        </thead>
        <tbody>
          {subcategoryData.questions.map((question, index) => {
            return (
              <QuestionContainer question={question} key={question.index} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}