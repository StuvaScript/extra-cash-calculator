import PropTypes from "prop-types";

export default function GoalsListItem({ goal }) {
  console.log(goal);

  return (
    <li>
      <span>{goal.goalName} </span>
      <span>{goal.moneyAmount} </span>
      <span>{goal.dueDate}</span>
    </li>
  );
}

GoalsListItem.propTypes = {
  goal: PropTypes.exact({
    dueDate: PropTypes.string.isRequired,
    goalName: PropTypes.string.isRequired,
    moneyAmount: PropTypes.string.isRequired,
  }),
};
