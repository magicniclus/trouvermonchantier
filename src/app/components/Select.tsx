import React from 'react';

interface SelectProps {
    options: string[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
}

const Select: React.FC<SelectProps> = ({ options, value, onChange, placeholder, className = "w-full" }) => {

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value);
    };

    return (
        <select
            value={value}
            onChange={handleChange}
            className={`px-4 py-2 rounded-md ${className}`}
        >
            {placeholder && <option value="">{placeholder}</option>}
            {options.map(option => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default Select;
