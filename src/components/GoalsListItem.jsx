import PropTypes from "prop-types";

export default function GoalsListItem({ goal }) {
  console.log(goal);

  // //todo **`` Since the data coming back reformats itself, use this for reformatting.
  // const reformattedData = (goal) => {
  //     //? **`` Reformatting the date.
  //     const year = goal.dueDate && goal.dueDate.slice(0, 4);
  //     const monthAndDay = goal.dueDate && goal.dueDate.slice(5);
  //     const joined = `${monthAndDay}-${year}`;
  //     const newFormat = { ...goal, dueDate: joined };
  //     return newFormat;
  //   };

  return (
    <li>
      <span>{goal.goal} </span>
      <span>{goal["money amount"]} </span>
      <span>{goal["due date"]}</span>
    </li>
  );
}

GoalsListItem.propTypes = {
  goal: PropTypes.exact({
    "due date": PropTypes.string.isRequired,
    goal: PropTypes.string.isRequired,
    "money amount": PropTypes.string.isRequired,
  }),
};
