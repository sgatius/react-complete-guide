import React, { useState } from "react";
import Card from "../UI/Card";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
    const { amount, date, title } = props;
    const [myTitle, setMyTitle] = useState(title);

    const handleClick = () => {
        console.log("clicked");
        setMyTitle(window.prompt("Enter a new title"));
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2>{myTitle}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
            <button onClick={handleClick}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;
