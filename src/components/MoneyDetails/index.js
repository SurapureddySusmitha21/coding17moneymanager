// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {isBalance, isIncome, isExpenses} = props
  return (
    <div className="money-details-container">
      <div className="balence-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image-url"
        />
        <div className="">
          <p className="your-balance-heading">Your Balance</p>
          <p className="balance-amount" data-testid="balanceAmount">
            RS {isBalance}
          </p>
        </div>
      </div>
      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="image-url"
        />
        <div className="">
          <p className="your-balance-heading">Your Income</p>
          <p className="balance-amount" data-testid="incomeAmount">
            RS {isIncome}
          </p>
        </div>
      </div>
      <div className="expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="image-url"
        />
        <div className="">
          <p className="your-balance-heading">Your Expenses</p>
          <p className="balance-amount" data-testid="expensesAmount">
            RS {isExpenses}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
