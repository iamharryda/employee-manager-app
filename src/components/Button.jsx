import './Button.css';

const Button = ({ text, onClick, role = "", className = "" }) => {
    return (
        <button className={`${role} ${className}`} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;

