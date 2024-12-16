import './Header.css'
import { Link } from 'react-router-dom'

export default function Headers() {
    return (
        <div className="header">
            <h1>Employee Management App</h1>
            <nav>
                <ul>
                    <li><Link to='list'> Employees </Link></li>
                    <li><Link to='form'> Add New </Link></li>

                </ul>
            </nav>
        </div>
    )
}