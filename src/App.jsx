import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import Navbar from "./components/Navbar";
function App() {
  return (
    <>
    <Home />
      {/* <div className="">
        <Navbar />
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Router>
      </div> */}
    </>
  );
}

export default App;
