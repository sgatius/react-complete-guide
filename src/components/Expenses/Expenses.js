import { useState } from "react";
import ExpensesFilter from "../FilterExpenses/ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
    const { data } = props;
    const [filterData, setFilterData] = useState("2020");

    const handleFilterYear = (year) => {
        setFilterData(year);
    };
    console.log(filterData);
    return (
        <div className="expenses">
            <ExpensesFilter
                selected={filterData}
                onFilterYear={handleFilterYear}
            />
            {data
                .filter((item) => item.date.getFullYear() == filterData)
                .map((item) => (
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
