import './ProgressTracker.scss';

export default function ProgressTracker({ index, title, currentCategory, category, onClick = () => { } }) {
  const isActive = currentCategory == category;

  return (
    <div className="progress-tracker" onClick={(e) => { onClick(category); }}>
      <div className={'text-container' + (isActive ? ' selected' : '')}>
        <span className={'index' + (isActive ? ' selected' : '')}>{index}</span>
        <span className={'title' + (isActive ? ' selected' : '')}>{title}</span>
      </div>
      <div>
        <div className={'progress-bar' + (isActive ? ' selected' : '')}>
          <div className="progress"></div>
        </div>
      </div>
    </div>
  );
}