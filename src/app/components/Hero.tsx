"use client"
import React, { useState } from 'react';
import Input from './Input';
import Select from './Select';
import ButtonPhone from './ButtonAction';

const options = ['Option 1', 'Option 2', 'Option 3'];

const Hero = () => {
    const [value, setValue] = useState({
        name: '',
        email: '',
        tel: '',
        codePostal: '',
        nomEntreprise: "",
        metierPrincipal:""
    })

   const handleChange = (name: keyof typeof value) => (newValue: string) => {
        setValue({ ...value, [name]: newValue });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <section >
            <div className='mx-auto flex max-w-5xl px-6 lg:pb-32 pb-20 pt-14 lg:px-8 md:flex-row flex-col justify-between items-center'>
                <div className='md:w-5/12 w-full'>
                    <h1 className='sm:text-6xl text-5xl font-bold text-textSecondary leading-snug'>Trouver<span className="underline-yellow"> des Chantiers</span></h1>
                    <p className='text-text text-xl mt-10 font-semibold'>Augmenter votre de CA mensuel de </p>
                    <h2 className='sm:text-5xl text-3xl font-bold text-textSecondary mt-2'>30 000€ <span className='text-2xl text-textSecondary'>à</span><br/> 400 000€</h2>
                    <p className='text-text text-xl font-semibold mt-2'>Efficace, fiable et continu</p>
                    <p className='mt-10'>Trouvez vos chantier grace à des Propsects qualifiés,  des projets sur-mesure, clés en main sans engagement ni frai de service. Je suis un véritable artisan du web au service de mes clients. </p>
                </div>
                <div className='md:w-6/12 w-full md:mt-0 mt-12'>
                    <form onSubmit={handleSubmit} id="form" className='sm:px-7 px-2 py-16 bg-gray rounded-md shadow-md flex flex-col items-center w-full'>
                        <h2 className='text-center text-text text-xl font-semibold'>Vous êtes professionel du bâtiment et vous recherchez de nouveaux chantiers ?</h2>
                        <p className='text-center text-xs mt-5'>Saisisez vos coordonnées et je vous contacterais afin que nous étudions votre projet</p>
                        <div className='md:w-9/12 mx-auto mt-8'>
                            <Input type="name" placeholder="Nom, prénom" onChange={handleChange('name')}  />
                            <div className='flex justify-between w-[100%] mt-4'>
                                <Input type="email" placeholder="Email" onChange={handleChange('email')} className='w-[48%]'  />
                                <Input type="tel" placeholder="Téléphone" onChange={handleChange('tel')} className='w-[48%]'  />
                            </div>
                            <Input type="name" placeholder="Nom d'entreprise" onChange={handleChange('nomEntreprise')} className="mt-4 w-[100%]"  />
                            <Input type="zipCode" placeholder="Code postal" onChange={handleChange('codePostal')} className="mt-4 w-[100%]"  />
                            <Select options={options} value={value.name} onChange={handleChange('metierPrincipal')} placeholder="Sélectionnez une option" className='mt-4 w-[100%]' />
                            <div className='flex justify-center'>
                                <ButtonPhone />
                            </div>
                        </div>
                        <div className='flex w-[100%] mt-5 justify-center text-xs'>
                            <a className='underline'>Conditions générales </a>
                            <p className='mx-1.5'>et </p>
                            <a className='underline'>politique de confidentialité.</a>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Hero;