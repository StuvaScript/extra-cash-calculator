import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";
import { useEffect, useState } from "react";
import { fetchData, postData } from "./functions.js/apiCalls";
// import styles from "./App.module.css";

function App() {
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(goals);

  const handleAddGoal = async (newGoal) => {
    // **`` optimistic rendering ``**
    setGoals([...goals, newGoal]);

    const res = await postData(newGoal);
    console.log(res);

    //? **`` If response fails, removes new goal
    if (!res) {
      //todo **`` Add a removal feature by ID
    } else {
      const updatedGoalID = {
        ...newGoal,
        id: res.id,
      };

      setGoals([...goals, updatedGoalID]);
    }
  };

  const extractSpecificData = (data) => {
    console.log(data);
    return data.records.map((record) => {
      return {
        id: record.id,
        goal: record.fields.goal,
        "money amount": record.fields["money amount"],
        "due date": record.fields["due date"],
      };
    });
  };

  useEffect(() => {
    console.log("initial fetch");
    fetchData()
      .then((data) => extractSpecificData(data))
      .then((newData) => setGoals(newData))
      .then(setLoading(false));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home goals={goals} loading={loading} />} />
        <Route
          path="/new-goal"
          element={<Form handleAddGoal={handleAddGoal} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
