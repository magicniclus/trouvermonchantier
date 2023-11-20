import React from "react";
import Ligne from "./Ligne";

const ImgWithText = () => {
  return (
    <section className="mt-5">
      <div className="mx-auto flex max-w-7xl p-6 lg:px-8 py-16 md:flex-row flex-col justify-between items-center bg-textSecondary">
        <div className="md:w-5/12 w-full">
          <img src="/img/resultat.png" className="w-full h-auto" />
        </div>
        <div className="md:w-6/12 w-full md:mt-0 mt-12 text-white">
          <h2 className="text-2xl font-bold">
            Devenez maitre de votre rentabilité
          </h2>
          <div className="mt-7">
            <Ligne />
          </div>
          <p className="text-white mt-10">
            Optimisez la rentabilité de votre campagne avec une précision
            inégalée. Soyez informé en temps réel de chaque contact acquis grâce
            à la campagne.
          </p>
          <p className="text-white mt-7">
            <span className="font-bold">Suivi et Développement :</span> Traitez
            efficacement les demandes de devis pour accroître votre chiffre
            d'affaires. Évaluez l'efficacité de votre investissement grâce à un
            reporting détaillé, qui trace l'impact direct de la campagne sur vos
            résultats.
          </p>
          <p className="text-white mt-7">
            <span className="font-bold">Flexibilité Budgétaire :</span> Ajustez
            votre budget en continu pour l'aligner avec vos objectifs
            commerciaux et les variations saisonnières de votre activité.
          </p>
          <p className="text-white mt-7">
            <span className="font-bold">Transparence Totale :</span> Grâce aux
            notifications instantanées des appels et des formulaires générés par
            la campagne, ainsi qu'à un reporting dédié, vous avez une vision
            claire et précise de la rentabilité de votre investissement. Cette
            transparence vous permet de prendre des décisions éclairées pour
            optimiser vos stratégies marketing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImgWithText;
