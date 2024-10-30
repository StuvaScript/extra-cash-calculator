import PropTypes from "prop-types";
import GoalsListItem from "./GoalsListItem";

export default function GoalsList({ goals }) {
  // todo **`` Need to set a unique key. The first Date getting rendered doesn't change when adding the 1st goal resulting in the first two list items sharing the same key.

  return (
    <ul>
      {goals.map((goal) => (
        <GoalsListItem key={Date.now()} goal={goal} />
      ))}
    </ul>
  );
}

GoalsList.propTypes = {
  goals: PropTypes.arrayOf(
    PropTypes.exact({
      dueDate: PropTypes.string.isRequired,
      goalName: PropTypes.string.isRequired,
      moneyAmount: PropTypes.string.isRequired,
    })
  ),
};
