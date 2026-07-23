import { useState } from "react";

function Contact() {
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const contactData = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Message could not be sent.");
      }

      alert("Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
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

        <button type="submit" disabled={isSending}>
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}

export default Contact;