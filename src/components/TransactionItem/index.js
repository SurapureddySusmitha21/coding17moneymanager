// Write your code here
import './index.css'

const TransactionItem = props => {
  const {detailsOfTransaction, getDelete} = props
  const {id, title, amount, type} = detailsOfTransaction

  const onClickDelete = () => {
    getDelete(id)
  }

  return (
    <li className="li-container">
      <p className="paragraph">{title}</p>
      <p className="paragraph">{amount}</p>
      <p className="paragraph">{type}</p>
      <button
        className="delete-btn"
        type="button"
        onClick={onClickDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}
export default TransactionItem
