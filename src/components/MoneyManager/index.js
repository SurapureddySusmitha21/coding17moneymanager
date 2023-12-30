import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    moneyTransctionList: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  onClickTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onClickAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onAddMoney = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const typeOfTransction = transactionTypeOptions.find(
      each => each.optionId === optionId,
    )

    const {displayText} = typeOfTransction
    const newmoney = {
      id: uuidv4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }
    this.setState(prevState => ({
      moneyTransctionList: [...prevState.moneyTransctionList, newmoney],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  deleteTransction = id => {
    const {moneyTransctionList} = this.state
    const deleteTransctionList = moneyTransctionList.filter(
      eachTransction => eachTransction.id !== id,
    )
    this.setState({moneyTransctionList: deleteTransctionList})
  }

  onChangeOption = event => {
    this.setState({optionId: event.target.value})
  }

  getIncome = () => {
    const {moneyTransctionList} = this.state
    let incomeAmount = 0
    moneyTransctionList.forEach(eachItem => {
      if (eachItem.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachItem.amount
      }
    })
    return incomeAmount
  }

  getExpenses = () => {
    const {moneyTransctionList} = this.state
    let expensesAmount = 0
    moneyTransctionList.forEach(eachItem => {
      if (eachItem.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachItem.amount
      }
    })
    return expensesAmount
  }

  getBalance = () => {
    const {moneyTransctionList} = this.state

    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0

    moneyTransctionList.forEach(eachItem => {
      if (eachItem.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachItem.amount
      } else {
        expensesAmount += eachItem.amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount

    return balanceAmount
  }

  render() {
    const {titleInput, amountInput, moneyTransctionList} = this.state
    const balanceAmount = this.getBalance()

    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()
    console.log(incomeAmount)
    console.log(expensesAmount)

    return (
      <div className="bg-container">
        <div className="richard-container">
          <h1 className="richard-heading">Hi Richard</h1>
          <p className="money-manager-paragraph">
            Welcome back to your Money Manager
            <span className="span-manager-paragraph"> Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          isBalance={balanceAmount}
          isIncome={incomeAmount}
          isExpenses={expensesAmount}
        />
        <div className="form-and-history-container">
          <div className="forms-container">
            <h1 className="transaction-heading">Add Transaction</h1>
            <form className="form-container" onSubmit={this.onAddMoney}>
              <div className="container">
                <label htmlFor="title" className="label">
                  TITLE
                </label>
                <br />
                <input
                  className="title-input"
                  id="title"
                  type="text"
                  placeholder="TITLE"
                  onChange={this.onClickTitle}
                  value={titleInput}
                />
              </div>
              <div className="container">
                <label htmlFor="amount" className="label">
                  AMOUNT
                </label>
                <br />
                <input
                  className="amount-input"
                  id="amount"
                  type="text"
                  placeholder="AMOUNT"
                  onChange={this.onClickAmount}
                  value={amountInput}
                />
              </div>
              <div className="container">
                <label className="label" htmlFor="select-option">
                  TYPE
                </label>
                <br />
                <select
                  className="select-option"
                  id="select-option"
                  onChange={this.onChangeOption}
                >
                  {transactionTypeOptions.map(eachTransction => (
                    <option
                      key={eachTransction.optionId}
                      value={eachTransction.optionId}
                    >
                      {eachTransction.displayText}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
          </div>
          <div className="history-container">
            <h1 className="history-heading">History</h1>
            <div className="title-amount-type-con">
              <ul className="ul-type-con">
                <li className="li">
                  <p className="paragraph">Title</p>
                  <p className="paragraph">Amount</p>
                  <p className="paragraph">Type</p>
                </li>

                {moneyTransctionList.map(each => (
                  <TransactionItem
                    key={each.id}
                    detailsOfTransaction={each}
                    getDelete={this.deleteTransction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
// Write your code here
