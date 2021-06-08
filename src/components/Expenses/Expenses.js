import { useState } from "react";
import ExpensesFilter from "../FilterExpenses/ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
    const { data } = props;
    const [filterData, setFilterData] = useState("2020");

    const handleFilterYear = (year) => {
        setFilterData(year);
    };
    const filteredExpenses = data.filter(
        (item) => item.date.getFullYear() == filterData
    );
    return (
        <div className="expenses">
            <ExpensesFilter
                selected={filterData}
                onFilterYear={handleFilterYear}
            />
            {filteredExpenses.length === 0 && <p>No expenses found.</p>}
            {filteredExpenses.length > 0 && (
                <ExpensesChart expenses={filteredExpenses} />
            )}
            {filteredExpenses.length > 0 &&
                filteredExpenses.map((item) => (
                    <ExpenseItem
                        key={item.id}
                        title={item.title}
                        amount={item.amount}
                        date={item.date}
                    />
                ))}
        </div>
    );
}

export default Expenses;
