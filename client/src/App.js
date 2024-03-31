import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
// import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
