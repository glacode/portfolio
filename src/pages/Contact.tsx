const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact</h1>
      <p>Feel free to reach out for professional inquiries or technical discussions.</p>
      
      <div className="contact-links">
        <div className="contact-link-item">
          <span 
            className="contact-icon" 
            style={{ '--icon-url': `url(${import.meta.env.BASE_URL}icons/github.svg)` } as React.CSSProperties}
            aria-label="GitHub"
          />
          <p>
            <strong>GitHub:</strong> <a href="https://github.com/glacode" target="_blank" rel="noopener noreferrer">github.com/glacode</a>
          </p>
        </div>
        <div className="contact-link-item">
          <span 
            className="contact-icon" 
            style={{ '--icon-url': `url(${import.meta.env.BASE_URL}icons/linkedin.svg)` } as React.CSSProperties}
            aria-label="LinkedIn"
          />
          <p>
            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/glaucosiliprandi/" target="_blank" rel="noopener noreferrer">linkedin.com/in/glaucosiliprandi</a>
          </p>
        </div>
      </div>
      
      <p className="mt-2 text-muted">
        I don't publish my email address or phone number here, to avoid spam and scams. If you'd
        like to get in touch, please connect with me on LinkedIn. I'm happy to share my contact
        details directly once we're in conversation.
      </p>
    </div>
  );
};

export default Contact;