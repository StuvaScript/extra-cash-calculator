import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";
import { useEffect, useState } from "react";
import { fetchData, postData } from "./functions.js/apiCalls";
// import styles from "./App.module.css";

function App() {
  const [goals, setGoals] = useState([]);
  console.log(goals);

  const handleAddGoal = async (newGoal) => {
    setGoals([...goals, newGoal]);
    const res = await postData(newGoal);
    console.log(res);
  };

  const extractSpecificData = (data) => {
    console.log(data);
    return data.records.map((record) => {
      return {
        // id: record.id,
        goal: record.fields.goal,
        "money amount": record.fields["money amount"],
        "due date": record.fields["due date"],
      };
    });
  };

  //todo **`` When I try to use the newData below in setGoals it says "Objects can't be children". Need to chase down this problem. Also un-comment out the "id" property above and add to propTypes and use as the list key

  useEffect(() => {
    fetchData()
      .then((data) => extractSpecificData(data))
      .then((newData) => console.log(newData));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home goals={goals} />} />
        <Route
          path="/new-goal"
          element={<Form handleAddGoal={handleAddGoal} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
