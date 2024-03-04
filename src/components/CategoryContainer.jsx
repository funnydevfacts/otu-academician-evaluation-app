import './CategoryContainer.scss';

import SubcategoryContainer from './SubcategoryContainer.jsx';

export default function CategoryContainer({ categoryData }) {
  return (
    <div>
      {categoryData.subcategories.map((subcategory, index) => {
        return <SubcategoryContainer subcategoryData={subcategory} key={subcategory.index} />;
      })}
    </div>
  );
}