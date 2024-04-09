import "./App.css";
import { Routes, Route} from "react-router-dom";
import Sidebar from "./componets/Sidebar";
import Login from './pages/Login';
import Signup from './pages/Signup1';


function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      
    </div>
  );
}

export default App;
