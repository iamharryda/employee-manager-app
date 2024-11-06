import './EmployeeCard.css'
import { useState } from 'react'

export default function Employee(props) {


    /* const [changeRole, setChangeRole] = useState(role)

    const clickHandler = () => {
        if (role == "Teacher") {
            setRole("Team Leader")
            setChangeRole("Demote")
        }
        else {
            setRole("Teacher")
            setChangeRole("Promote")
        }
    } */


    return (
        <div>
            <p>id: {props.id}</p>
            <p>Name: {props.name}</p>
            <p>Role: {props.role}</p>
            <p>Department: {props.department}</p>
            <p>Start Date: {props.startDate}</p>
            <p>Location: {props.location}</p>
            <button>{props.button}</button>

        </div>
    )
}