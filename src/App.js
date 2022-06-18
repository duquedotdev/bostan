import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PatientFilter from "./pages/PatientFilter/PatientFilter";
import HospitalFilter from "./pages/HospitalFilter/HospitalFilter";
import Data from "./pages/Data/Data";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/patient_filter" element={<PatientFilter />} />
        <Route path="/hospital_filter" element={<HospitalFilter />} />
        <Route path="/data" element={<Data />} />
      </Routes>
    </div>
  );
}

export default App;
