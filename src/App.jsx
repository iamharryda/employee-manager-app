import { RouterProvider } from 'react-router-dom'
import './App.css'
import EmployeeList from './components/EmployeeList'
import { router } from './routes/appRoutes'


function App() {

  return <RouterProvider
    router={router}
    future={{ v7_startTransition: true, }}

  />

}

export default App


