import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  }

  function sendMessage(e) {
    e.preventDefault();

    if (!form.name.trim()) {
      alert("Please enter your name");
      return;
    }

    if (!form.email.trim()) {
      alert("Please enter your email");
      return;
    }

    if (!form.message.trim()) {
      alert("Please enter your message");
      return;
    }

    alert(`Thank you, ${form.name}! Your message has been received.`);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <form onSubmit={sendMessage}>
        <input
          type="text"
          id="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          id="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
        />

        <textarea
          id="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
