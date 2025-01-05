import './Header.css'
import { Link, useNavigate } from 'react-router-dom'
import Button from './Button'

export default function Headers() {
    const navigate = useNavigate();
    return (
        <div className="header">
            <h1>Employee Management App</h1>
            <nav>
                <div>
                    <ul>
                        <li><Link to='list'> Employees </Link></li>
                        <li><Link to='form'> Add New </Link></li>

                    </ul>
                </div>
                <div>
                    <Button onClick={() => navigate('/')} text="Log Out" />
                </div>
            </nav>
        </div>
    )
}