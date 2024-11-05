import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import LoginPage from "./pages/LoginPage/LoginPage"
import ListPage from "./pages/ListPage/ListPage"
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"


function App() {
 

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      {/* Protected Routes */}
      <Route path="/listpage" element={<ProtectedRoute>
        <ListPage />
      </ProtectedRoute>} />
    </Routes>
  )
}

export default App
