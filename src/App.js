import './app.modules.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Signup , Home , Login, Forgotpass } from "./pages";
import { Navbar } from "./Navbar"

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="getpass" element={<Forgotpass />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
