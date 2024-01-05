import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import "./assets/css/global.css";
import "./assets/css/buttoncv.css";
import "./assets/css/icon.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
      </Routes>
    </Router>
  );
}

export default App;
