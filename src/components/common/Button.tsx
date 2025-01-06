interface ButtonProps {
    onClick: () => void;
    label: string;
    disabled?: boolean;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label, disabled = false, className }) => {
    return (
        <button className={className} onClick={onClick} disabled={disabled}>
            {label}
        </button>
    );
};

export default Button;