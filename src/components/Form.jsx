import PropTypes from "prop-types";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Form({ handleAddGoal }) {
  const [formData, setFormData] = useState({});

  const navigate = useNavigate();

  const handleInputChange = (event, inputField) => {
    setFormData({ ...formData, [inputField]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddGoal(formData);
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
        value={formData["goal"] || ""}
        onChange={(e) => handleInputChange(e, "goal")}
        required
      />
      <br />

      <label htmlFor="money-amount">Money Amount: $</label>
      <input
        type="number"
        min="0"
        id="money-amount"
        name="money-amount"
        value={formData["money amount"] || ""}
        onChange={(e) => handleInputChange(e, "money amount")}
        required
      />
      <br />

      <label htmlFor="due-date">Due Date: </label>
      <input
        type="date"
        min={today}
        id="due-date"
        name="due-date"
        value={formData["due date"] || ""}
        onChange={(e) => handleInputChange(e, "due date")}
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
  handleAddGoal: PropTypes.func,
};
