import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './SinglePage.module.css'; // Import CSS Module

const SinglePage = () => {
    const { id } = useParams();
    const [employee, setEmployee] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`https://ema-backend-8pi4.onrender.com/api/persons/${id}`)
            .then((response) => {
                setEmployee(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching employee details:', error);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (!employee) return <p>Employee not found.</p>;

    return (
        <div className={styles.singlePage}>
            <h1>Employee Details</h1>
            <div className={styles.employeeDetails}>
                <img
                    src={`https://robohash.org/${employee.id}?set=set5`}
                    alt={employee.name}
                    className={styles.employeeImage}
                />
                <h2 className={styles.employeeName}>{employee.name}</h2>

                <p className={styles.employeeInfo}><strong className={styles.infoLabel}>Role:</strong> {employee.role || 'N/A'}</p>
                <p className={styles.employeeInfo}><strong className={styles.infoLabel}>Department:</strong> {employee.department || 'N/A'}</p>
                <p className={styles.employeeInfo}><strong className={styles.infoLabel}>Location:</strong> {employee.location || 'N/A'}</p>
                <p className={styles.employeeInfo}><strong className={styles.infoLabel}>Start Date:</strong> {employee.startDate || 'N/A'}</p>
                <p className={styles.employeeInfo}><strong className={styles.infoLabel}>Email:</strong> {employee.email || 'N/A'}</p>
                <p className={styles.employeeInfo}><strong className={styles.infoLabel}>Phone:</strong> {employee.phone || 'N/A'}</p>
                <p className={styles.employeeInfo}><strong className={styles.infoLabel}>Skills:</strong> {employee.skills ? employee.skills.join(', ') : 'N/A'}</p>
                <p className={styles.employeeInfo}><strong className={styles.infoLabel}>Experience:</strong> {employee.experience ? `${employee.experience} years` : 'N/A'}</p>
                <p className={styles.employeeInfo}><strong className={styles.infoLabel}>Education:</strong> {employee.education || 'N/A'}</p>
                <p className={styles.employeeInfo}><strong className={styles.infoLabel}>LinkedIn:</strong> {employee.linkedin ? <a href={employee.linkedin} className={styles.employeeLink} target="_blank" rel="noopener noreferrer">{employee.linkedin}</a> : 'N/A'}</p>

                <button className={styles.button} onClick={() => navigate('/list')}>
                    Back to Dashboard
                </button>
            </div>
        </div>
    );
};

export default SinglePage;
