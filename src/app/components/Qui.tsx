import React from 'react';
import Ligne from "./Ligne";
import { MapIcon } from '@heroicons/react/24/solid';

const cards =[
    {
        title: "Proximité",
        text: "Trouvez vos chantier grace à des Propsects qualifiés,  des projets sur-mesure, clés en main sans engagement ni frai de service. Je suis un véritable artisan du web au service de mes clients. ",
    },
    {
        title: "Efficacité", 
        text: "Trouvez vos chantier grace à des Propsects qualifiés,  des projets sur-mesure, clés en main sans engagement ni frai de service. Je suis un véritable artisan du web au service de mes clients. "
    },
    {
        title: "Rentabilité",
        text: "Trouvez vos chantier grace à des Propsects qualifiés,  des projets sur-mesure, clés en main sans engagement ni frai de service. Je suis un véritable artisan du web au service de mes clients. "
    }
]


const Qui: React.FC = () => {
    return (
        <section className="">
            <div className="mx-auto flex max-w-7xl p-6 lg:px-8 lg:pt-32 pt-20 md:flex-row flex-col justify-between items-center bg-white">
                <div className="md:w-6/12 w-full text-text">
                    <h2 className="text-2xl font-bold">Qui suis-je ?</h2>
                    <div className="mt-7">
                        <Ligne />
                    </div>
                    <div className='w-full flex justify-between py-10'>
                        <p>Nicolas CASTERA</p>
                        <div className='flex'>
                            <MapIcon className="h-5 w-5 text-yellow" aria-hidden="true" />
                            <p className='ml-4'>Bordeaux</p>
                        </div>
                    </div>
                    <p>Trouvez vos chantier grace à des Propsects qualifiés,  des projets sur-mesure, clés en main sans engagement ni frai de service. Je suis un véritable artisan du web au service de mes clients. Trouvez vos chantier grace à des Propsects qualifiés,  des projets sur-mesure, clés en main sans engagement ni frai de service. Je suis un véritable artisan du web au service de mes clients. Trouvez vos chantier grace à des Propsects qualifiés,  des projets sur-mesure, clés en main sans engagement ni frai de service. Je suis un véritable artisan du web au service de mes clients. Trouvez vos chantier grace à des Propsects qualifiés,  des projets sur-mesure, clés en main sans engagement ni frai de service. Je suis un véritable artisan du web au service de mes clients. Trouvez vos chantier grace à des Propsects qualifiés,  des projets sur-mesure, clés en main sans engagement ni frai de service. Je suis un véritable artisan du web au service de mes clients. </p>
                    <p className='mt-7'>Trouvez vos chantier grace à des Propsects qualifiés,  des projets sur-mesure, clés en main sans engagement ni frai de service. Je suis un véritable artisan du web au service de mes clients. </p>
                </div>
                <div className="md:w-6/12 w-full flex justify-center items-center md:mt-0 mt-12">
                    <img src="/img/moi2.png" className="max-h-[500px] h-auto" alt="Image Description" />
                </div>
            </div>
            <div className="mx-auto flex max-w-7xl p-6 lg:px-8 lg:pb-32 pb-20 md:flex-row flex-col justify-between items-center bg-white mt-16">
                {
                    cards.map((card, index) => (
                        <div className='md:w-4/12 w-full flex flex-col items-center md:max-w-[30%] p-7 text-white bg-textSecondary rounded-md md:mt-0 mt-7' key={index}>
                            <h3 className='text-xl font-bold mt-4'>{card.title}</h3>
                            <p className='text-center mt-4'>{card.text}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Qui;