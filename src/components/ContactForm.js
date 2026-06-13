export default function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: wire this to an email service or backend endpoint
    alert('Message submitted. Replace this handler with real form submission.');
  };

  return (
    <form id="contact" className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          Name
          <input name="name" type="text" placeholder="Your full name" required />
        </label>
        <label>
          Email
          <input name="email" type="email" placeholder="you@example.com" required />
        </label>
      </div>
      <label>
        Subject
        <input name="subject" type="text" placeholder="Project, collaboration or question" />
      </label>
      <label>
        Message
        <textarea name="message" rows="6" placeholder="Tell me about your project" required />
      </label>
      <button type="submit" className="btn primary">
        Send message
      </button>
    </form>
  );
}