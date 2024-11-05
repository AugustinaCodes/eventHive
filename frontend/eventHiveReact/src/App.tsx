import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import LoginPage from "./pages/LoginPage/LoginPage"
import ListPage from "./pages/ListPage/ListPage"


function App() {
 

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      {/* Protected Routes */}
      <Route path="/listpage" element={<ListPage />} />
    </Routes>
  )
}

export default App
