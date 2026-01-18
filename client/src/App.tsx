import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotSigning from './components/Outlet/NotSigning'

function App() {
  return (
    <Routes>
      <Route element={<NotSigning />}>

      <Route path='/' element={<HomePage />}/>
      </Route>
      Hello World
    </Routes>
  )
}

export default App
