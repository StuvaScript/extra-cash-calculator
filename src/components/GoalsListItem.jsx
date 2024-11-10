import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function GoalsListItem({ goal }) {
  console.dir(goal);

  // //todo **`` Since the data coming back reformats itself, use this for reformatting.
  // const reformattedData = (goal) => {
  //     //? **`` Reformatting the date.
  //     const year = goal.dueDate && goal.dueDate.slice(0, 4);
  //     const monthAndDay = goal.dueDate && goal.dueDate.slice(5);
  //     const joined = `${monthAndDay}-${year}`;
  //     const newFormat = { ...goal, dueDate: joined };
  //     return newFormat;
  //   };

  //todo **`` State and useLocation aren't working.
  return (
    <li>
      <button>
        <Link
          to={{
            pathname: "/goal-page",
            state: goal,
          }}
        >
          {goal.goal}
        </Link>
      </button>
      <span>{goal["money amount"]} </span>
      <span>{goal["due date"]} </span>
      <span>{goal.id}</span>
    </li>
  );
}

GoalsListItem.propTypes = {
  goal: PropTypes.exact({
    id: PropTypes.string.isRequired,
    "due date": PropTypes.string.isRequired,
    goal: PropTypes.string.isRequired,
    "money amount": PropTypes.number.isRequired,
  }),
};
