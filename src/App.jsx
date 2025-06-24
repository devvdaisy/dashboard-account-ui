import "./App.css";
import Dashboard from "./pages/Dashboard";
import Accounts from "./pages/Accounts";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/account/:id" element={<Accounts />} />
                {/* <Route path="*" element={<Dashboard />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
