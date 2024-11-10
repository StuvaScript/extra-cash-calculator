import { useLocation } from "react-router-dom";

export default function GoalPage() {
  const location = useLocation();
  const state = location.state;
  console.log(state);

  return "Howdy!!!";
}

//todo **`` State and useLocation aren't working.
