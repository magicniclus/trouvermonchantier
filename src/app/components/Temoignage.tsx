import { StarIcon } from '@heroicons/react/24/solid';
import React from 'react';
import ButtonPhone from './ButtonAction';

const cards = [
    {
        text: "Trouvez vos chantier grace à des Propsects qualifiés,  des projets sur-mesure, clés en main sans engagement ni frai de service. Je suis un véritable artisan du web au service de mes clients. Trouvez vos chantier grace à des Propsects qualifiés,  des projets sur-mesure, clés en main sans engagement ni frai de service. Je suis un véritable artisan du web au service de mes clients. ",
        stars: 5,
        name: "Franck C/Terabois",
    },
    {
        text: "Trouvez vos chantier grace à des Propsects qualifiés,  des projets sur-mesure, clés en main sans engagement ni frai de service. Je suis un véritable artisan du web au service de mes clients. Trouvez vos chantier grace à des Propsects qualifiés,  des projets sur-mesure, clés en main sans engagement ni frai de service. Je suis un véritable artisan du web au service de mes clients. ",
        stars: 5,
        name: "Franck C/Terabois",
    },
    {
        text: "Trouvez vos chantier grace à des Propsects qualifiés,  des projets sur-mesure, clés en main sans engagement ni frai de service. Je suis un véritable artisan du web au service de mes clients. Trouvez vos chantier grace à des Propsects qualifiés,  des projets sur-mesure, clés en main sans engagement ni frai de service. Je suis un véritable artisan du web au service de mes clients. ",
        stars: 5,
        name: "Franck C/Terabois",
    }
]

const Temoignage = () => {
    return (
        <section className='bg-textSecondary'>
            <div className="mx-auto flex max-w-5xl p-6 lg:px-8 lg:py-32 py-20 flex-col justify-between items-center text-white">
                <h2 className="text-2xl font-bold">Témoignage client</h2>
                 <p className='mt-7 w-4/6 text-center'>Si vous désirez entendre un retour d'expérience direct de l'un de mes clients, n'hésitez pas à me contacter. Je vous mettrais en relation directement.</p>
                 <div className='flex w-full md:flex-row flex-col justify-between mt-10'>
                    {
                        cards.map((card, index) => (
                            <div className='md:w-4/12 w-full flex flex-col items-center md:max-w-[32%] p-7 text-textSecondary bg-white rounded-md md:mt-0 mt-7' key={index}>
                                <p className='text-center mt-4'>{card.text}</p> 
                                <div className='flex justify-center items-center mt-4'>
                                    <StarIcon className='h-5 w-5 text-yellow' />
                                    <StarIcon className='h-5 w-5 text-yellow' />
                                    <StarIcon className='h-5 w-5 text-yellow' />
                                    <StarIcon className='h-5 w-5 text-yellow' />
                                    <StarIcon className='h-5 w-5 text-yellow' />
                                </div>
                                <p className='mt-4'>{card.name}</p>
                                 <div className='flex justify-center'>
                                </div>
                            </div>
                        ))
                    }
                 </div>
                    <ButtonPhone value="En savoir plus" bgColor="white" textColor="text"/>
            </div>
        </section>
    );
};

export default Temoignage;