const socialLinks = [
  {
    label: "Email",
    icon: "fas fa-envelope",
    href: "mailto:dikeshsapkota@gmail.com",
  },
  {
    label: "GitHub",
    icon: "fab fa-github",
    href: "https://github.com/dikeshsapkota",
  },
  {
    label: "Instagram",
    icon: "fab fa-instagram",
    href: "https://instagram.com/dikeshsapkotaa",
  },
  {
    label: "LinkedIn",
    icon: "fab fa-linkedin-in",
    href: "https://www.linkedin.com/in/dikesh-sapkota-430831316/",
  },
  {
    label: "Facebook",
    icon: "fab fa-facebook-f",
    href: "https://www.facebook.com/dikesh.sapkotaa/",
  },
];

function SocialContact() {
  return (
    <section id="contact" className="social-contact">
      <h2>Contact Me</h2>
      <p>Find me online or send me a message.</p>

      <div className="contact-social-links">
        {socialLinks.map(({ label, icon, href }) => (
          <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            aria-label={label}
            title={label}
            key={label}
          >
            <i className={icon} aria-hidden="true" />
            <span>{label}</span>
          </a>
        ))}
      </div>

      <a className="message-me-btn" href="#/contact">
        Message Me
      </a>
    </section>
  );
}

export default SocialContact;
