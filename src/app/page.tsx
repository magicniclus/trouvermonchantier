import Image from 'next/image'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ImgWithText from './components/ImgWithText'
import ImgWithTextWhite from './components/ImgWithTextWhite'

export default function Home() {
  
  return (
    <>
    <NavBar />
    <main className="">
      <Hero />
      <ImgWithText  imgUrl="/img/resultat.png" title="Devenez maitre de votre rentabilité" paragraphs={[ <p>Optimisez la rentabilité de votre campagne avec une précision inégalée. Soyez informé en temps réel de chaque contact acquis grâce à la campagne.</p>, <p><span className="font-bold">Suivi et Développement :</span> Traitez efficacement les demandes de devis pour accroître votre chiffre d'affaires. Évaluez l'efficacité de votre investissement grâce à un reporting détaillé, qui trace l'impact direct de la campagne sur vos résultats.</p>, <p><span className="font-bold">Flexibilité Budgétaire :</span> Ajustez votre budget en continu pour l'aligner avec vos objectifs commerciaux et les variations saisonnières de votre activité.</p>, <p><span className="font-bold">Transparence Totale :</span> Grâce aux notifications instantanées des appels et des formulaires générés par la campagne, ainsi qu'à un reporting dédié, vous avez une vision claire et précise de la rentabilité de votre investissement. Cette transparence vous permet de prendre des décisions éclairées pour optimiser vos stratégies marketing.</p> ]} />
      <ImgWithTextWhite imgUrl='/img/desktop.png' title="Internet, votre meilleur apporteur d’affaires" paragraphs={[<p>Avec mes services, vous recevrez des demandes de devis ciblées de clients potentiels précisément au moment où ils expriment leur besoin de vos services, et ce, 24 heures sur 24, 7 jours sur 7.</p>, <p><span className="font-bold">Taux de conversion exceptionnel :</span>Je suis fiers d'offrir l'un des taux de conversion les plus élevés du marché.</p>, <p><span className="font-bold">Flexibilité totale :</span>Sans engagement, vous offrant la liberté de l'interrompre à tout moment.</p>, <p><span className="font-bold">Résultats concrets :</span>Préparez-vous à voir votre boîte mail se remplir de demandes de devis détaillées et à recevoir des appels quotidiens de prospects qualifiés désireux de collaborer avec vous.</p>, <p  className='font-light'>Grace à internet, bénéficiez du meilleur taux de transformation du marché sans la moindre concurrence sur vos prospects.</p>]} />
      <ImgWithText  imgUrl="/img/phone.png" title="Jusqu’à 40% de vos visiteurs en propsect" paragraphs={[ <p>Augmentez votre visibilité auprès des clients potentiels en quête de vos services. Gagnez du trafic de qualité en apparaissant sur Google et Facebook, les plateformes les plus influentes du web.</p>, <p><span className="font-bold">Impact de la Recherche en Ligne :</span> En France, 80% des consommateurs effectuent des recherches en ligne avant de sélectionner un prestataire. Avec Google dominant plus de 90% du marché des moteurs de recherche, une absence sur cette plateforme équivaut à céder un avantage considérable à vos concurrents.</p>, <p><span className="font-bold">Impact de la Recherche en Ligne :</span>  En France, 80% des consommateurs effectuent des recherches en ligne avant de sélectionner un prestataire. Avec Google dominant plus de 90% du marché des moteurs de recherche, une absence sur cette plateforme équivaut à céder un avantage considérable à vos concurrents.</p>, <p className='text-light'>Cette approche vous assure une présence là où les clients cherchent activement des prestataires, maximisant ainsi vos chances de conversion.</p> ]} />
    </main>
    </>
  )
}
