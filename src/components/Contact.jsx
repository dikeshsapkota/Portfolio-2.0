function Contact() {
  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    formData.append("access_key", "2bab0dd4-0a38-47c0-9095-2ebc32fc2a48");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      alert("Message sent successfully!");
      e.target.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;