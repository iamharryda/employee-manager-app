import './EmployeeList.css'
import Employee from './EmployeeCard'

export default function EmployeeList(){
    return(

        <div>
            <h2>Employee List</h2>
            <div className='list'>
            
            <Employee></Employee>
            <Employee></Employee>
            <Employee></Employee>
            <Employee></Employee>
            <Employee></Employee>
            <Employee></Employee>
            <Employee></Employee>
            <Employee></Employee>
        </div>
        </div>
        
    )
}