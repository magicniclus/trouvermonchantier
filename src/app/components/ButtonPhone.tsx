import React from 'react';
import { PhoneIcon } from "@heroicons/react/24/solid";

// Définition de l'interface pour les props
interface ButtonPhoneProps {
    value?: string;
    bgColor?: string;
    textColor?: string;
}

const ButtonPhone: React.FC<ButtonPhoneProps> = ({ value = '0631420045', bgColor = "orange", textColor = "text" }) => {
    // Styles dynamiques basés sur les props
    const buttonStyles = {
        backgroundColor: bgColor,
        color: textColor,
    };

    return (
        <a href={`tel:${value}`} className={`py-3 px-5 rounded-lg bg-${bgColor} text-${textColor} flex`} style={buttonStyles}>
            <PhoneIcon className="h-5 w-5 inline-block mr-2" />
            {value}
        </a>
    );
};

export default ButtonPhone;
