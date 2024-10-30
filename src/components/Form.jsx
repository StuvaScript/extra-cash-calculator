import PropTypes from "prop-types";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Form({ onAddGoal }) {
  const [formData, setFormData] = useState({});
  console.log(formData);

  const navigate = useNavigate();

  const handleInputChange = (event, inputField) => {
    setFormData({ ...formData, [inputField]: event.target.value });
  };

  //todo **`` Since the data coming back reformats itself, move this code to the GoalsListItems.jsx file for reformatting.
  const reformattedData = (formData) => {
    //? **`` Reformatting the date.
    const year = formData.dueDate && formData.dueDate.slice(0, 4);
    const monthAndDay = formData.dueDate && formData.dueDate.slice(5);
    const joined = `${monthAndDay}-${year}`;
    const newFormat = { ...formData, dueDate: joined };
    return newFormat;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddGoal(reformattedData(formData));
    setFormData({});
    navigate("/");
  };

  const today = new Date().toISOString().slice(0, 10);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="goal-name">Goal Name: </label>
      <input
        type="text"
        id="goal-name"
        name="goal-name"
        value={formData.goalName || ""}
        onChange={(e) => handleInputChange(e, "goalName")}
        required
      />
      <br />

      <label htmlFor="money-amount">Money Amount: $</label>
      <input
        type="number"
        min="0"
        id="money-amount"
        name="money-amount"
        value={formData.moneyAmount || ""}
        onChange={(e) => handleInputChange(e, "moneyAmount")}
        required
      />
      <br />

      <label htmlFor="due-date">Due Date: </label>
      <input
        type="date"
        min={today}
        id="due-date"
        name="due-date"
        value={formData.dueDate || ""}
        onChange={(e) => handleInputChange(e, "dueDate")}
        required
      />
      <div>
        <button type="button">
          <Link to="/">cancel</Link>
        </button>
        <button type="submit">Add Goal</button>
      </div>
    </form>
  );
}

Form.propTypes = {
  onAddGoal: PropTypes.func,
};
