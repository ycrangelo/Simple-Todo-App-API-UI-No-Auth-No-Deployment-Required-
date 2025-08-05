import { Route, Routes } from 'react-router-dom'

//components
import App from './App'
import Todos from './pages/todos'

const AppRoutes = () => {
 return (
  <Routes>
   <Route path='/' element={<App />} />
   <Route path='/todos' element={<Todos />} />


  </Routes>
 )
};

export default AppRoutes