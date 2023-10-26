import React, {useState} from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
   const [title, SetTitle] = useState(props.title)
   const clickHandler =()=>{
    SetTitle("Updated")
   }
  return (
    <>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
         <button onClick={clickHandler}>change title</button>
      </Card>
    </>
  );
}

export default ExpenseItem;
