import "./App.css";
// import { Route, Routes, BrowserRouter } from "react-router-dom";
// import Verify from "./pages/Verify";
// import Certificate from "./pages/Certificate";
// import Document from "./pages/Document";
// import Setting from "./pages/Setting";
// import Guide from "./pages/Guide";
import Sidebar from "./componets/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar/>
     
      {/* <BrowserRouter>
        <Routes>
          <Route path="/verify" element={<Verify />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/document" element={<Document />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/guide" element={<Guide />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
