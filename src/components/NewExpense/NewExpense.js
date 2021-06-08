import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const handleSaveExpensData = (newExpenseData) => {
        const expenseData = {
            ...newExpenseData,
            id: Math.random().toString(),
        };
        props.onNewExpense(expenseData);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={handleSaveExpensData} />
        </div>
    );
};

export default NewExpense;
