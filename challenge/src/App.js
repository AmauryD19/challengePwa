import React from 'react';
import banner from './banner.png';
import './App.css';
import { SocialIcon } from 'react-social-icons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={banner} className="banner" alt="banner"/>
        <p className="noOwe">CE SITE EST REALISE POUR UN CHALLENGE. VEUILLEZ-VOUS REDIRIGER VERS <a href="http://www.boppi.org/">BOPPI</a></p>
      </header>

      <section className="weAre">
        <h2>Qui sommes-nous?</h2>
        <p>
          BOPPI est une asbl nationale avec un Conseil d'Administration (CA) et une Assemblée Générale (AG) de membres effectifs composés de bénévoles, parents ou proches de patients ou eux-mêmes atteint de DIP
        </p>

        <p>
          BOPPPI fut fondée en 2009 par le Dr Farber avec le soutient de IPOPI (International Patient Organisation for Primary Immunodeficiencies) qui regroupe toutes les organisations de patients de DIP dans le monde et leur offre une planteforme internationale.
        </p>

        <h3>Qu'est-ce un déficit immunitaire primaire ou DIP?</h3>
        <p>
          Les déficits ou troubles immunitaires primaires (DIP) forment un groupe de maladies congénitales et héréditaires du système immunitaire. Les DIP regroupent environ 300 maladies qui exposent les patients à une vulnérabilité accrue aux infections pouvant occasionner des dommages irréversibles aux organes vitaux. Des problèmes auto-immunitaires sont parfois les premiers symptômes d'un DIP. Certaines formes plus rares du DIP nécessitent un traitement aigu dans les premières années de vie. Habituellement, les premiers symptômes se manifestent pendant l'enfance. Parfois il n'apparaissent qu'à l'adolescence ou à l'âge adulte. Le site www.boppi.org propose une liste des signes d'alarmes pour détecter les DIP chez les enfants et les adultes.
        </p>

        <p className="slogan">
          Des maladie pas si rares que ça...
        </p>

        <p>
          Les DIP sont des maladies rares ou orphelines qui affectent plus de 10 millions de personnes dans le monde entier. L'incidence des DIP en Belgique est estimée à 1/10.000-1/100.00 habitants pour les formes plus sévères et plus rares et jusqu'à 1/2.000 habitants pour les formes plus fréquentes. Cependant, les déficits immunitaires sont de moins rares qu'on ne le pense, car on suspecte que plus de la moitié des malades potentiels n'ont pas encore été diagnostiqués. Non seulement auprès du public général, mais également auprès des médecins, généralistes ou spécialisés, la maladie demeure assez inconnue, ce qui est dommage, car il existe de traitements efficaces qui peuvent améliorer considérablement la qualité et l'espérance de vie des patients.
        </p>
      </section>

      <section className="weDo">
        <h2>Quelle est notre mission?</h2>
          <p>
            <span className="list">-</span> Sensibiliser le public et le secteur médical à l’importance du diagnostic précoce d’un DIP au travers de la diffusion des 10 signes d’alerte.
          </p>

          <p>
            <span className="list">-</span> Sortir les patients et leur famille de l’isolement en les informant au sujet d’activités locales et régionales organisées par et pour les patients de DIP et en organisant et coordonnant des activités nationales.
          </p>

          <p>
            <span className="list">-</span> Constituer un point de contact pour les pouvoirs publics de santé pour défendre les intérêts des patients en vue d’assurer une offre de soins multidisciplinaire et adaptée pour les maladies congénitales et chroniques comme les DIP.
          </p>

          <p>
            <span className="list">-</span> Transmettre les informations au sujet des nouveaux développements en matière de DIP.
          </p>

          <p>
            <span className="list">-</span> Favoriser les échanges internationaux et le partage des expériences avec les associations de patients de DIP dans le monde entier.
          </p>

          <p>
            <span className="list">-</span> Organiser des activités pour récolter des fonds pour soutenir la recherche scientifique en matière de DIP.
          </p>
      </section>

      <section className="contactUs">
        <h2>Nous contacter</h2>
          <p><SocialIcon url="https://mail.google.com/mail/u/0m" network="email" target="blank"/> Infoboppi@gmail.com</p>
          <p><SocialIcon url="www.boppi.org" target="blank"/> Notre Website</p>
          <p><SocialIcon url="https://www.facebook.com/Boppi.asbl.vzw/" target="blank"/> Notre Facebook</p>
      </section>

      <footer className="App-footer">
        
        <span>
          <input placeholder="votre email" type="email>" className="email"></input>
          <input value="S'inscrire à la newsletter" type="submit" className="button"></input>
        </span>
        <p className="copyright">Propriété de BOPPI</p>
      </footer>
    </div>
  );
}

export default App;
