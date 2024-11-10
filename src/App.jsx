import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";
import { useEffect, useState } from "react";
import GoalPage from "./components/GoalPage";
// import { fetchData, postData } from "./functions.js/apiCalls";
// import styles from "./App.module.css";

const fakeData = [
  {
    id: "FAKErecs@$%fbs$@",
    goal: "fake goal 1",
    "money amount": 1000,
    "due date": "9999-9-9",
  },
  {
    id: "FAKErecDFBtyj457",
    goal: "fake goal 2",
    "money amount": 2000,
    "due date": "9999-9-9",
  },
];

function App() {
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);

  console.dir(goals);

  const handleAddGoal = async (newGoal) => {
    // **`` optimistic rendering ``**
    setGoals([...goals, newGoal]);

    //! **`` The real function below
    // const res = await postData(newGoal);
    // console.log(res);

    // //? **`` If response fails, removes new goal
    // if (!res) {
    //   //todo **`` Add a removal feature by ID
    // } else {
    //   const updatedGoalID = {
    //     ...newGoal,
    //     id: res.id,
    //   };

    //   setGoals([...goals, updatedGoalID]);
    // }
    //! **************************
  };

  //! **`` Real function.
  // const extractSpecificData = (data) => {
  //   console.log(data);
  //   return data.records.map((record) => {
  //     return {
  //       id: record.id,
  //       goal: record.fields.goal,
  //       "money amount": record.fields["money amount"],
  //       "due date": record.fields["due date"],
  //     };
  //   });
  // };
  //! **************************

  useEffect(() => {
    console.log("initial fetch");

    //! **`` temporary function so you don't exhaust API calls
    setGoals(fakeData);
    setLoading(false);
    //! ***************************

    //! **`` The real function below
    // fetchData()
    //   .then((data) => extractSpecificData(data))
    //   .then((newData) => setGoals(newData))
    //   .then(setLoading(false));
    //! ***************************
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home goals={goals} loading={loading} />} />
        <Route
          path="/new-goal"
          element={<Form handleAddGoal={handleAddGoal} />}
        />
        <Route path="/goal-page" element={<GoalPage />} />
      </Routes>
    </Router>
  );
}

export default App;
