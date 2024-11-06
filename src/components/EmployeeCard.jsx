import './EmployeeCard.css'
import { useState } from 'react'

export default function Employee(props) {

    const [role, setRole] = useState(props.initRole)
    const [changeRole, setChangeRole] = useState(role)

    const clickHandler = () => {
        if (role == "Teacher") {
            setRole("Team Leader")
            setChangeRole("Demote")
        }
        else {
            setRole("Teacher")
            setChangeRole("Promote")
        }
    }


    return (
        <div className='card'>
            <h3>Employee Name: {props.name}</h3>
            <p>Role: {role}</p>
            <p>Department: {props.department}</p>
            <p>Location: {props.location}</p>
            <p>Salary: {props.salary}</p>
            <p>StartDate: {props.startDate}</p>
            <button onClick={clickHandler}>{changeRole}</button>
        </div>
    )
}