import React, { useState } from 'react'
 import "./ExpenseForm.css"

const ExpenseForm = () => {
   const [enteredTitle, SetenteredTitle]=useState("")
   const[enteredAmount, SetenteredAmount]=useState("")
    const [enteredDate, SetenteredDate]=useState("")
   const titleChangeHandeler=(Event)=>{
    SetenteredTitle(Event.target.value)
   }
   
    const amountChangeHandler= (Event) => {
      SetenteredAmount(Event.target.value)
    }
    
     const dateChangeler=(Event)=>{
      SetenteredDate(Event.target.value)
     }
  return (

    <form>
            <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandeler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeler}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
 </form>
  )
}

export default ExpenseForm