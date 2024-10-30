import './App.css'
import EmployeeList from './components/EmployeeList'
import Footers from './components/footer'
import Headers from './components/header'

function App() {

  return (
    <>
      <Headers></Headers>
      <div>
        <h1>Employee Dashboard</h1>
        <EmployeeList></EmployeeList>
      </div>
      <Footers></Footers>
    </>
  )
}

export default App


