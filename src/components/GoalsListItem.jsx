import PropTypes from "prop-types";

export default function GoalsListItem({ goal }) {
  console.log(goal);
  return (
    <li>
      <p>{goal.goalName}</p>
      <p>{goal.moneyAmount}</p>
      <p>{goal.dueDate}</p>
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
