import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
    const { data } = props;
    return (
        <div className="expenses">
            {data.map((item) => (
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
