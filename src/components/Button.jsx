import './Button.css';

const Button = ({ text, onClick, role }) => {
    return <button className={role} onClick={onClick}>{text}</button>;
};

export default Button;
