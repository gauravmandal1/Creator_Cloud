import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Dashboard } from "./pages/Dashboard";
import { Dashboard2 } from "./pages/Dashboard2";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
          <Navbar />
        </div>
        <Routes>
          {/* dashboard  */}
          <Route path="/" element={<Dashboard/>} />
          <Route path="/dashboard" element={<Dashboard2/>} />
          
        </Routes>
      </BrowserRouter>
      
       
    </div>
  );
}

export default App;
