import React, { ChangeEvent, useState } from 'react';

interface InputProps {
    type: 'email' | 'text' | 'tel' | 'name' | 'zipCode';
    placeholder?: string;
    onChange: (value: string) => void;
    className?: string; // Prop pour la largeur
}

const Input: React.FC<InputProps> = ({ type = "name", placeholder = "name", onChange, className = "w-full", zipCode }) => {
    const [value, setValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;

        if (validateInput(type, newValue)) {
            setValue(newValue);
            onChange(newValue);
        }
    };

    // Style dynamique pour la largeur
    const inputStyle = {
        width: className ? className : '',
    };

    return (
        <input
            type={type === 'name' ? 'text' : type} // Utiliser 'text' pour les noms et prénoms
            value={value}
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
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || value === '';
        case 'tel':
            return /^\+?\d{0,15}$/.test(value) || value === '';
        case 'name':
            return /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[ -][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/.test(value) && value.length >= 2 || value === '';
        case 'zipCode':
            return /^\d{5}(?:[-\s]\d{4})?$/.test(value) || value === ''; // Exemple pour les États-Unis
        default:
            return true;
    }
}

export default Input;
