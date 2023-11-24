import React, { ChangeEvent, useState } from 'react';

interface InputProps {
    type: 'email' | 'text' | 'tel' ;
    placeholder?: string;
    onChange: (value: string) => void;
    className?: string; 
}

const Input: React.FC<InputProps> = ({ type = "text", placeholder = "", onChange, className = "w-full" }) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;

        if (validateInput(type, newValue)) {
            setInputValue(newValue);
            onChange(newValue);
        } else if (newValue === '') {
            setInputValue('');
            onChange('');
        }
    };

    const inputStyle = {
        width: className ? className : '',
    };

    return (
        <input
            type={type}
            value={inputValue}
            placeholder={placeholder}
            onChange={handleChange}
            className={`px-4 py-2 rounded-md ${className}`}
            style={inputStyle}
        />
    );
};

function validateInput(type: string, value: string): boolean {
    switch (type) {
         case 'email':
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        case 'tel':
            return /^\+?\d{0,15}$/.test(value);
        case 'name':
            return /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[ -][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/.test(value) && value.length >= 2 || value === '';
        case 'zipCode':
            return /^\d{5}(?:[-\s]\d{4})?$/.test(value) || value === ''; // Exemple pour les États-Unis
        default:
            return true;
    }
}

export default Input;
