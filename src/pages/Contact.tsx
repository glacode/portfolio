const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact</h1>
      <p>Feel free to reach out for professional inquiries or technical discussions.</p>
      
      <div className="contact-links">
        <p>
          <strong>GitHub:</strong> <a href="https://github.com/glacode" target="_blank" rel="noopener noreferrer">github.com/glacode</a>
        </p>
        <p>
          <strong>Email:</strong> contact [at] example.com
        </p>
      </div>
      
      <p className="mt-2 italic text-muted">
        "The best way to predict the future is to invent it." — Alan Kay
      </p>
    </div>
  );
};

export default Contact;
