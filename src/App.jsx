import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";
import { useState } from "react";
// import styles from "./App.module.css";

function App() {
  const [goals, setGoals] = useState([]);
  console.log(goals);

  const handleAddGoal = (newGoal) => {
    setGoals([...goals, newGoal]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-goal" element={<Form onAddGoal={handleAddGoal} />} />
      </Routes>
    </Router>
  );
}

export default App;
