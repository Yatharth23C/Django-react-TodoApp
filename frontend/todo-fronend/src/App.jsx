
import './App.css'
import { AuthProvider } from './components/AuthProvider'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/login'
import LandingPage from './components/landingpage'
import ProtectedRoute from './components/ProtectedRoute';
function App() {

return (
<AuthProvider>
  <Router>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<ProtectedRoute> <LandingPage /> </ProtectedRoute>}/>
    
    </Routes>
  </Router>
</AuthProvider>
  )
}

export default App
