import React from 'react';
import Ligne from "./Ligne";
import { MapPinIcon } from '@heroicons/react/24/solid';

const cards =[
    {
        title: "Proximité",
        text: "En tant qu'artisan du web, je m'engage à vous fournir des prospects qualifiés et des projets sur-mesure dans le bâtiment, garantissant une collaboration étroite et sans engagement ni frais de service.",
    },
    {
        title: "Efficacité", 
        text: "Je maximise l'efficacité de vos campagnes avec des prospects ciblés et des solutions clés en main dans le bâtiment, le tout en tant qu'artisan du web dédié et sans contraintes de service."
    },
    {
        title: "Rentabilité",
        text: "Augmentez votre rentabilité grâce à mes services personnalisés dans le bâtiment, offrant des prospects qualifiés et des campagnes efficaces, sans engagement ni frais de service."
    }
]

const Qui: React.FC = () => {
    return (
        <section className="" id="qui">
            <div className="mx-auto flex max-w-5xl p-6 lg:px-8 lg:pt-32 pt-20 md:flex-row flex-col justify-between items-center bg-white">
                <div className="md:w-6/12 w-full text-text">
                    <h2 className="text-2xl font-bold">Qui suis-je ?</h2>
                    <div className="mt-7">
                        <Ligne />
                    </div>
                    <div className='w-full flex justify-between py-10'>
                        <p>Nicolas CASTERA</p>
                        <div className='flex'>
                            <MapPinIcon className="h-5 w-5 text-yellow" aria-hidden="true" />
                            <p className='ml-2'>Bordeaux</p>
                        </div>
                    </div>
                    <p>Expert en marketing digital et communication en ligne, basé à Bordeaux. Fort de plus de 10 ans d'expérience, je me spécialise dans les campagnes Google Ads et la création de landing pages sur-mesure pour les professionnels du bâtiment. Mon approche est centrée sur l'acquisition de prospects qualifiés et l'optimisation des campagnes pour une efficacité maximale. Je m'adapte aux besoins spécifiques de chaque client, offrant une flexibilité budgétaire et une transparence totale. Mon objectif est d'accroître significativement le chiffre d'affaires de mes clients dans le bâtiment, en garantissant des résultats concrets et un taux de conversion élevé, le tout sans engagement ni frais de service.</p>
                </div>
                <div className="md:w-6/12 w-full flex justify-center items-center md:mt-0 mt-12">
                    <img src="/img/moi2.png" className="max-h-[500px] h-auto max-w-[300px]" alt="Image Description" />
                </div>
            </div>
            <div className="mx-auto flex max-w-5xl p-6 lg:px-8 lg:pb-32 pb-20 md:flex-row flex-col justify-between items-center bg-white mt-16">
                {
                    cards.map((card, index) => (
                        <div className='md:w-4/12 w-full flex flex-col items-center md:max-w-[30%] min-h-[340px] p-7 text-white bg-textSecondary rounded-md md:mt-0 mt-7' key={index}>
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