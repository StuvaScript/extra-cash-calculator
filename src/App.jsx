import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";
import { useState } from "react";
// import styles from "./App.module.css";

const url = `https://api.airtable.com/v0/${
  import.meta.env.VITE_AIRTABLE_BASE_ID
}/${import.meta.env.VITE_TABLE_NAME}`;

function App() {
  const [goals, setGoals] = useState([]);
  console.log(goals);

  const postData = async ({ goalName, moneyAmount, dueDate }) => {
    try {
      const airtableData = {
        fields: {
          goal: goalName,
          "money amount": Number(moneyAmount),
          "due date": dueDate,
        },
      };

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
        },
        body: JSON.stringify(airtableData),
      };

      const res = await fetch(url, options);

      if (!res.ok) {
        const message = `Error: ${res.status}`;
        throw new Error(message);
      }

      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error.message);
      return null;
    }
  };

  const handleAddGoal = async (newGoal) => {
    console.log(newGoal);
    setGoals([...goals, newGoal]);
    const res = await postData(newGoal);
    console.log(res);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home goals={goals} />} />
        <Route path="/new-goal" element={<Form onAddGoal={handleAddGoal} />} />
      </Routes>
    </Router>
  );
}

export default App;
