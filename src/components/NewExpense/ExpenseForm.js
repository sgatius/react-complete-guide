import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [openForm, setOpenForm] = useState(false);

    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
    };

    const handleChangeAmount = (event) => {
        setAmount(event.target.value);
    };

    const handleChangeDate = (event) => {
        setDate(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const expenseData = {
            title: title,
            amount,
            date: new Date(date),
        };
        props.onSaveExpenseData(expenseData);
        setOpenForm(false);
        setTitle("");
        setAmount("");
        setDate("");
    };

    const handleCancel = (event) => {
        event.preventDefault();
        setOpenForm(false);
    };

    const handleOpenForm = () => {
        setOpenForm(true);
    };

    return (
        <div>
            {openForm && (
                <form onSubmit={handleSubmit}>
                    <div className="new-expense__controls">
                        <div className="new-expense__control">
                            <label>Title</label>
                            <input type="text" onChange={handleChangeTitle} />
                        </div>
                        <div className="new-expense__control">
                            <label>Amount</label>
                            <input
                                type="number"
                                min="0.01"
                                step="0.01"
                                onChange={handleChangeAmount}
                            />
                        </div>
                        <div className="new-expense__control">
                            <label>Date</label>
                            <input
                                type="date"
                                min="2019-01-01"
                                max="2022-12-31"
                                onChange={handleChangeDate}
                            />
                        </div>
                    </div>
                    <div className="new-expense__actions">
                        <button onClick={handleCancel}>Cancel</button>
                        <button type="submit">Add Expense</button>
                    </div>
                </form>
            )}
            {!openForm && (
                <div className="new-expense__actions">
                    <button onClick={handleOpenForm}>Add New Expense</button>
                </div>
            )}
        </div>
    );
};

export default ExpenseForm;
