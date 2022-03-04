import Landing from "./pages/Landing";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Vendors from "./pages/Vendors/Vendors";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Landing className="RetroTeam" />
      <Vendors />
      <Footer />
    </div>
  );
}

export default App;
