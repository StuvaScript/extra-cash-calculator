import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
// import styles from "./App.module.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
