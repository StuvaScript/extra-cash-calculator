import { Link } from "react-router-dom";
import GoalsList from "./GoalsList";
import PropTypes from "prop-types";

export default function Home({ goals, loading }) {
  console.dir(goals);
  // console.log(typeof goals[0]["money amount"]);
  return (
    <div>
      <h1>Main Page</h1>
      <button>
        <Link to="/new-goal">Add New Goal</Link>
      </button>
      {loading ? <p>Loading...</p> : <GoalsList goals={goals} />}
    </div>
  );
}

Home.propTypes = {
  loading: PropTypes.bool,
  goals: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      "due date": PropTypes.string.isRequired,
      goal: PropTypes.string.isRequired,
      "money amount": PropTypes.number.isRequired,
    })
  ),
};
