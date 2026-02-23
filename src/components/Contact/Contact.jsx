import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaFileDownload, FaCheckCircle, FaPaperPlane } from 'react-icons/fa';
import './Contact.scss';

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'service_e0xengm', 
      'template_sov5fwt', 
      form.current, 
      'rHyBaYPtQq7IF-pL4'
    )
    .then(() => {
        setIsSent(true);
        setLoading(false);
        form.current.reset();
        setTimeout(() => setIsSent(false), 6000);
    }, (error) => {
        console.error(error.text);
        setLoading(false);
        alert("Une erreur est survenue, essayez de me contacter via LinkedIn.");
    });
  };

  return (
    <section className="contact-page">
      <div className="contact-container">
        <Motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Motion.h1 className="contact-title">Parlons de votre projet</Motion.h1>
          <p className="contact-subtitle">Remplissez le formulaire ou contactez-moi directement.</p>
        </Motion.div>

        <div className="contact-content">
          <div className="contact-info">
            <Motion.a 
              whileHover={{ x: 10 }}
              href="mailto:sandjon.ricky@gmail.com" 
              className="contact-card"
              aria-label="Envoyer un email à Ricardo Sandjon" // Ajouté pour Lighthouse
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
              rel="noopener noreferrer" // Sécurité + SEO
              className="contact-card"
              aria-label="Visiter mon profil LinkedIn" //  Lighthouse
            >
              <FaLinkedin className="contact-icon" aria-hidden="true" />
              <div>
                <h3>LinkedIn</h3>
                <p>Ricardo Sandjon</p>
              </div>
            </Motion.a>

            <Motion.a 
              whileHover={{ x: 10 }}
              href="/cv-ricardo.pdf" 
              download 
              className="contact-card highlight"
              aria-label="Télécharger mon CV au format PDF" //pour Lighthouse
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
            <AnimatePresence mode="wait">
              {isSent ? (
                <Motion.div 
                  role="alert" // Indique aux technologies d'assistance un changement d'état
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

                  <Motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit" 
                    className="btn-submit" 
                    disabled={loading}
                    aria-busy={loading} // Indique que le bouton travaille
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
