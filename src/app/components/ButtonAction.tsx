import React from 'react';

// Définition de l'interface pour les props
interface ButtonPhoneProps {
    value?: string;
    bgColor?: string;
    textColor?: string;
}

const ButtonPhone: React.FC<ButtonPhoneProps> = ({ value = 'Envoyer', bgColor = "textSecondary", textColor = "white" }) => {

    return (
        <a href="#form" className={`py-3 lg:px-5 px-3 rounded-lg bg-${bgColor} text-${textColor} flex mt-10 min-w-[150px] justify-center items-center hover:transition-all hover:duration-100 hover:ease-in-out hover:shadow-lg`}>
            <div className='flex'>
                {value}
            </div>
        </a>
    );
};

export default ButtonPhone;
