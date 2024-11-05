import PropTypes from "prop-types";
import GoalsListItem from "./GoalsListItem";

export default function GoalsList({ goals }) {
  return (
    <ul>
      {goals.map((goal) => (
        <GoalsListItem key={goal.id} goal={goal} />
      ))}
    </ul>
  );
}

GoalsList.propTypes = {
  goals: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      "due date": PropTypes.string.isRequired,
      goal: PropTypes.string.isRequired,
      "money amount": PropTypes.number.isRequired,
    })
  ),
};
