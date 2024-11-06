import './EmployeeCard.css'
import { useState } from 'react'
import employees from '../data/employeeData'

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
        <div>
            <p>Name: {props.name}</p>
            <p>Role: {props.role}</p>
            <p>Department: {props.department}</p>
            <p>Start Date:: {props.startDate}</p>
            <p>Location: {props.location}</p>
        </div>
    )
}