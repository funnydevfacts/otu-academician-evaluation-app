import './QuestionContainer.scss'

export default function QuestionContainer({ question }) {
  return (
    <tr className="question-container">
      <td className='center emph'>
        <p>{question.index}</p>
      </td>
      <td>
        <p>{question.text}</p>
      </td>
    </tr>
  );
}