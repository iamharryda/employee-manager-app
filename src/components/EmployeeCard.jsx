import './EmployeeCard.css';
import { useState } from 'react';
import Button from './Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Employee({
    id,
    name,
    role,
    department,
    startDate,
    location,
    button,
    onUpdate, // Callback function to update parent state
}) {
    const navigate = useNavigate();
    const [isPromoted, setIsPromoted] = useState(false);
    const [buttonText, setButtonText] = useState(button);
    const [toggleFormEdit, setToggleFormEdit] = useState(false);
    const [formData, setFormData] = useState({
        role,
        department,
        location,
    });

    const [showTooltip, setShowTooltip] = useState(false); // Show/hide tooltip
    const [reminderText, setReminderText] = useState(''); // Tooltip text

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSeeMore = () => {
        console.log(`Navigating to ID: ${id}`); // Debugging
        navigate(`/employee/${id}`); // Navigate to the Single Page with employee ID
    };

    // Handle save button mechanism
    const handleSave = async () => {
        try {
            const updatedFields = { ...formData };
            const response = await axios.patch(`http://localhost:3002/persons/${id}`, updatedFields);
            onUpdate(id, response.data);
            setToggleFormEdit(false);
        } catch (error) {
            console.error('Error updating employee:', error);
        }
    };

    // Handle promotion button
    const clickHandler = () => {
        setIsPromoted(!isPromoted);
        setButtonText(isPromoted ? 'promote' : 'demote');
    };

    const buttonRole = isPromoted ? 'primary' : 'secondary';

    // Calculate years worked, 6-month review, and probation reminders
    const calculateReminder = () => {
        const start = new Date(startDate);
        const now = new Date();
        const yearsWorked = now.getFullYear() - start.getFullYear();

        const sixMonthsDate = new Date(start);
        sixMonthsDate.setMonth(sixMonthsDate.getMonth() + 6);
        const sixMonthsCompleted = now >= sixMonthsDate;

        const anniversary =
            yearsWorked > 0 ? `Work anniversary: ${yearsWorked} year(s)` : 'No anniversaries yet';
        const probationReview =
            yearsWorked < 1
                ? sixMonthsCompleted
                    ? '6-month review completed'
                    : '6-month review pending'
                : 'No probation review';

        setReminderText(`${anniversary}\n${probationReview}`);
    };

    // Function to get the role-specific class
    const getRoleClass = () => {
        switch (role.toLowerCase()) {
            case 'game developer':
                return 'game-developer';
            case 'web developer':
                return 'web-developer';
            case 'team lead':
                return 'team-lead';
            default:
                return 'default-role';
        }
    };

    return (
        <div className={`card ${getRoleClass()}`} style={{ position: 'relative' }}>
            <img src={`https://robohash.org/${id}?set=set5`} alt="" />
            <h2>Name: {name}</h2>
            {toggleFormEdit ? (
                <div>
                    <label>
                        Role:
                        <input
                            type="text"
                            name="role"
                            value={formData.role}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Department:
                        <input
                            type="text"
                            name="department"
                            value={formData.department}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Location:
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
            ) : (
                <div>
                    <p>Role: {formData.role}</p>
                    <p>Department: {formData.department}</p>
                    <p>Location: {formData.location}</p>
                </div>
            )}
            <p>Start Date: {startDate}</p>
            {isPromoted ? <p><img className="star" src='src/components/star.png' alt="star icon" /></p> : <p></p>}

            {/* Edit Button */}
            <Button
                onClick={() => {
                    if (toggleFormEdit) {
                        handleSave();
                    } else {
                        setToggleFormEdit(true);
                    }
                }}
                text={toggleFormEdit ? 'Save' : 'Edit'}
            />
            <Button onClick={clickHandler} text={buttonText} role={buttonRole} />

            <Button text="See More" onClick={handleSeeMore} role="secondary" />

            {/* Reminder Button with Custom Tooltip */}
            <div
                className="reminder-btn"
                onMouseEnter={() => {
                    calculateReminder();
                    setShowTooltip(true);
                }}
                onMouseLeave={() => setShowTooltip(false)}
                style={{ position: 'relative', marginTop: '10px', display: 'inline-block' }}
            >
                <Button text="📮" className="reminder-btn" />

                {showTooltip && (
                    <div
                        className="tooltip"
                        style={{
                            position: 'absolute',
                            top: '-140px',
                            left: '-50px',
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            color: 'white',
                            padding: '10px',
                            borderRadius: '5px',
                            fontSize: '12px',
                            whiteSpace: 'pre-line',
                            zIndex: 100,
                        }}
                    >
                        {reminderText}
                    </div>
                )}
            </div>

        </div>
    );
}
