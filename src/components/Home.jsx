import { Link } from "react-router-dom";
import GoalsList from "./GoalsList";
import PropTypes from "prop-types";

export default function Home({ goals }) {
  return (
    <div>
      <h1>Main Page</h1>
      <button>
        <Link to="/new-goal">Add New Goal</Link>
      </button>
      <GoalsList goals={goals} />
    </div>
  );
}

Home.propTypes = {
  goals: PropTypes.arrayOf(
    PropTypes.exact({
      "due date": PropTypes.string.isRequired,
      goal: PropTypes.string.isRequired,
      "money amount": PropTypes.string.isRequired,
    })
  ),
};
