import React from 'react';
import './RowContainer.scss';

function RowContainer({ children, gap = "2rem" }) {
  const childCount = React.Children.count(children);

  return (
    <div className='row-container' style={{ '--gap': gap }}>
      {children}
    </div>
  );
}

export default RowContainer;