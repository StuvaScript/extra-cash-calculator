import { useState } from "react";
import { Link } from "react-router-dom";

export default function Form() {
  const [formData, setFormData] = useState({ goalName: "" });
  console.log(formData);

  const handleInputChange = (event) =>
    setFormData({ goalName: event.target.value });

  return (
    <form>
      <label htmlFor="goal-name">Goal Name: </label>
      <input
        type="text"
        id="goal-name"
        name="goal-name"
        value={formData.goalName}
        onChange={handleInputChange}
      />
      <div>
        <button>
          <Link to="/">cancel</Link>
        </button>
        <button>Add Goal</button>
      </div>
    </form>
  );
}
