import React from 'react';

// Définition de l'interface pour les props
interface ButtonPhoneProps {
    value?: string;
    bgColor?: string;
    textColor?: string;
}

const ButtonPhone: React.FC<ButtonPhoneProps> = ({ value = 'Envoyer', bgColor = "textSecondary", textColor = "white" }) => {

    return (
        <button className={`py-3 lg:px-5 px-3 rounded-lg bg-textSecondary text-white flex mt-10 min-w-[150px] justify-center items-center`}>
            <div className='flex'>
                {value}
            </div>
        </button>
    );
};

export default ButtonPhone;
