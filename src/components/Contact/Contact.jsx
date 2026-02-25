import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaFileDownload, FaCheckCircle, FaPaperPlane } from 'react-icons/fa';
import './Contact.scss';

/**
 * Composant Contact : Gère l'affichage des informations de contact
 * et l'envoi de formulaire via le service externe EmailJS.
 */
const Contact = () => {
  // useRef pour accéder directement au nœud du formulaire dans le DOM sans déclencher de re-renders inutiles
  const form = useRef();

  // États pour gérer le cycle de vie de l'envoi (feedback utilisateur)
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  /**
   * Fonction de traitement de l'envoi de l'email
   * Utilise les variables d'environnement pour la sécurité des identifiants
   */
  const sendEmail = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page par défaut
    setLoading(true);

    // Intégration de la SDK EmailJS avec protection des clés API via Vite (import.meta.env)
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      form.current, 
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
        setIsSent(true); // Affiche le message de succès
        setLoading(false);
        form.current.reset(); // Vide les champs du formulaire
        // Masque le message de succès automatiquement après 6 secondes
        setTimeout(() => setIsSent(false), 6000);
    }, (error) => {
        console.error("Erreur EmailJS:", error.text);
        setLoading(false);
        alert("Une erreur est survenue, essayez de me contacter via LinkedIn.");
    });
  };

  return (
    <section className="contact-page">
      <div className="contact-container">
        {/* Animation d'entrée progressive (Reveal effect) au scroll */}
        <Motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }} // L'animation ne se joue qu'une fois
        >
          <Motion.h1 className="contact-title">Parlons de votre projet</Motion.h1>
          <p className="contact-subtitle">Remplissez le formulaire ou contactez-moi directement.</p>
        </Motion.div>

        <div className="contact-content">
          {/* Section Informations : Accessibilité (Aria-labels) et SEO (Rel attributes) optimisés */}
          <div className="contact-info">
            <Motion.a 
              whileHover={{ x: 10 }}
              href="mailto:sandjon.ricky@gmail.com" 
              className="contact-card"
              aria-label="Envoyer un email à Ricardo Sandjon"
            >
              <FaEnvelope className="contact-icon" aria-hidden="true" />
              <div>
                <h3>Email</h3>
                <p>sandjon.ricky@gmail.com</p>
              </div>
            </Motion.a>

            <Motion.a 
              whileHover={{ x: 10 }}
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" // Sécurité contre le tab-nabbing et boost SEO
              className="contact-card"
              aria-label="Visiter mon profil LinkedIn"
            >
              <FaLinkedin className="contact-icon" aria-hidden="true" />
              <div>
                <h3>LinkedIn</h3>
                <p>Ricardo Sandjon</p>
              </div>
            </Motion.a>

            <Motion.a 
              whileHover={{ x: 10 }}
              href={`${import.meta.env.BASE_URL}cv-sandjon-ricardo.pdf`} 
              download="cv-sandjon-ricardo.pdf"
              className="contact-card highlight"
              aria-label="Télécharger mon CV au format PDF"
            >
              <FaFileDownload className="contact-icon" aria-hidden="true" />
              <div>
                <h3>Mon CV</h3>
                <p>Télécharger le PDF</p>
              </div>
            </Motion.a>
          </div>

          <Motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* AnimatePresence gère les transitions de sortie proprement lors du switch formulaire/succès */}
            <AnimatePresence mode="wait">
              {isSent ? (
                <Motion.div 
                  role="alert" // Attribut ARIA pour informer les lecteurs d'écran du succès
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="success-message"
                >
                  <FaCheckCircle aria-hidden="true" />
                  <h3>Merci ! Votre message a bien été reçu</h3>
                  <p>Votre message a été envoyé avec succès. Je vous répondrai rapidement.</p>
                </Motion.div>
              ) : (
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                  {/* Utilisation de labels liés par ID pour l'accessibilité RGAA */}
                  <div className="form-group">
                    <label htmlFor="user_name">Nom complet</label>
                    <input type="text" id="user_name" name="user_name" placeholder="Ex: Jean Dupont" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="user_email">Votre Email</label>
                    <input type="email" id="user_email" name="user_email" placeholder="votre@email.com" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Sujet</label>
                    <input type="text" id="subject" name="subject" placeholder="Ex: Offre d'emploi / Projet" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="5" placeholder="Votre message ici..." required></textarea>
                  </div>

                  {/* Gestion de l'état "Loading" pour éviter les doubles envois (UX) */}
                  <Motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit" 
                    className="btn-submit" 
                    disabled={loading}
                    aria-busy={loading}
                  >
                    {loading ? "Envoi..." : <>Envoyer <FaPaperPlane style={{marginLeft: '10px'}} aria-hidden="true"/></>}
                  </Motion.button>
                </form>
              )}
            </AnimatePresence>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
