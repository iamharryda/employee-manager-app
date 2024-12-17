import './EmployeeCard.css';
import { useState } from 'react';
import star from '/Users/s2400057/Documents/my_studies/employee-manager-app/src/components/star.png';
import Button from './Button';
import axios from 'axios';

export default function Employee({
    id,
    name,
    role,
    department,
    startDate,
    location,
    button,
    onUpdate,
}) {
    const [isPromoted, setIsPromoted] = useState(false);
    const [buttonText, setButtonText] = useState(button);
    const [toggleFormEdit, setToggleFormEdit] = useState(false);
    const [formData, setFormData] = useState({
        role,
        department,
        location,
    });
    const [reminderText, setReminderText] = useState('');

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Save changes
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

    // Promotion handler
    const clickHandler = () => {
        setIsPromoted(!isPromoted);
        setButtonText(isPromoted ? 'promote' : 'demote');
    };

    // Calculate reminders
    const calculateReminder = () => {
        const start = new Date(startDate);
        const now = new Date();
        const sixMonths = new Date(start);
        sixMonths.setMonth(sixMonths.getMonth() + 6);

        const yearsWorked = now.getFullYear() - start.getFullYear();
        const sixMonthReview = now >= sixMonths ? '6-month review completed' : '6-month review pending';
        const workAnniversary = yearsWorked > 0 ? `Work anniversary: ${yearsWorked} year(s)` : 'No anniversaries yet';

        setReminderText(`${sixMonthReview}\n${workAnniversary}`);
    };

    return (
        <div className="card">
            {isPromoted && <img className="star" src={star} alt="star icon" />}
            <img src={`https://robohash.org/${name}?set=set5`} alt="" />
            <h2>{name}</h2>
            {toggleFormEdit ? (
                <div>
                    <label>
                        Role:
                        <input type="text" name="role" value={formData.role} onChange={handleInputChange} />
                    </label>
                    <label>
                        Department:
                        <input type="text" name="department" value={formData.department} onChange={handleInputChange} />
                    </label>
                    <label>
                        Location:
                        <input type="text" name="location" value={formData.location} onChange={handleInputChange} />
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

            {/* Reminder Button with Icon */}
            <button
                className="reminder-btn"
                onMouseEnter={calculateReminder}
                title={reminderText || 'Hover to see reminders'}
            >
                🔔
            </button>

            <Button
                onClick={() => (toggleFormEdit ? handleSave() : setToggleFormEdit(true))}
                text={toggleFormEdit ? 'Save' : 'Edit'}
            />
            <Button onClick={clickHandler} text={buttonText} role={isPromoted ? 'primary' : 'secondary'} />
        </div>
    );
}
