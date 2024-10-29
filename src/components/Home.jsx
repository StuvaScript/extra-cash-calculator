import { Link } from "react-router-dom";
import GoalsList from "./GoalsList";

export default function Home() {
  return (
    <div>
      <h1>Main Page</h1>
      <button>
        <Link to="/new-goal">Add New Goal</Link>
      </button>
      <GoalsList />
    </div>
  );
}

//todo **`` Add prop types
