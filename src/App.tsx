import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AuthContextProvider } from './contexts/AuthContext'
import { Home } from "./pages/Home"
import { NewRoom } from "./pages/NewRoom"

const App = () => {
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rooms/new' element={<NewRoom />} />
        </Routes>
      </AuthContextProvider>
    </Router>
  )
}

export default App
