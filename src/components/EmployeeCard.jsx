import './EmployeeCard.css'
import { useState } from 'react'

export default function Employee(props) {

    let buttona = "Promote"

    const [role, setRole] = useState(props.initRole)

    const clickHandler = () => {
        if (role == "Teacher") {
            setRole("Team Leader")
            buttona = "Demote"
        }
        else {
            setRole("Teacher")
            buttona = "Promote"
        }
    }


    return (
        <div className='card'>
            <h3>Employee Name: {props.name}</h3>
            <p>Role: {role}</p>
            <p>Department: {props.department}</p>
            <p>Location: {props.location}</p>
            <p>Salary: {props.salary}</p>
            <button onClick={clickHandler}>{buttona}</button>
        </div>
    )
}