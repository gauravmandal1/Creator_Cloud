import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Dashboard } from "./pages/Dashboard";

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
        </Routes>
      </BrowserRouter>
      
       
    </div>
  );
}

export default App;
