import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from './Button';
import './SinglePage.css';

const SinglePage = () => {
    const { id } = useParams(); // Get the ID from the route parameters
    const [employee, setEmployee] = useState(null); // Employee state
    const [loading, setLoading] = useState(true); // Loading state
    const navigate = useNavigate();

    // Fetch employee details
    useEffect(() => {
        axios
            .get(`http://localhost:3002/persons/${id}`)
            .then((response) => {
                setEmployee(response.data); // Set employee data
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching employee details:', error);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p>Loading...</p>; // Show loading state while fetching

    if (!employee) return <p>Employee not found.</p>; // Handle invalid or missing employee

    return (
        <div className="single-page">
            <h1>Employee Details</h1>
            <div className="employee-details">
                <img
                    src={`https://robohash.org/${employee.id}?set=set5`}
                    alt={employee.name}
                    className="employee-image"
                />
                <h2>{employee.name}</h2>
                <p>
                    <strong>Role:</strong> {employee.role || 'N/A'}
                </p>
                <p>
                    <strong>Department:</strong> {employee.department || 'N/A'}
                </p>
                <p>
                    <strong>Location:</strong> {employee.location || 'N/A'}
                </p>
                <p>
                    <strong>Start Date:</strong> {employee.startDate || 'N/A'}
                </p>
            </div>
            <Button onClick={() => navigate('/list')} text="Back to Dashboard" />
        </div>
    );
};

export default SinglePage;
