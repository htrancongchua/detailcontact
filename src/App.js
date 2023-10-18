import './App.css';
import Detail from './components/Detail';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">

      <Router>
        <div>
          <Link to="/">Detail</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <Routes>
          <Route path="/" element={<Detail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
