import './App.css';
import { Header } from './MyComponents/Header';
import { Home } from './MyComponents/Home';
import { Footer } from './MyComponents/Footer';
import { About } from './MyComponents/About';
import { Education } from './MyComponents/Education';
import { Contact } from './MyComponents/Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}>
          </Route>
          <Route path='/about' element={<About about = "About" />}></Route>
          <Route path='/education' element={<Education />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
