const Bio = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: "bi bi-facebook",
      url: "https://www.facebook.com/hello.asmat",
    },
    {
      name: "Instagram",
      icon: "bi bi-instagram",
      url: "https://www.instagram.com/hello.asmat",
    },
    {
      name: "LinkedIn",
      icon: "bi bi-linkedin",
      url: "https://www.linkedin.com/in/theasmat",
    },
    {
      name: "GitHub",
      icon: "bi bi-github",
      url: "https://github.com/theasmat",
    },
    {
      name: "Website",
      icon: "bi bi-globe",
      url: "https://theasmat.github.io",
    },
  ];

  const handleLinkClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="container bio-container">
      <div className="profile-container">
        <a href="/asmat_profile.png" target="_blank" rel="noopener noreferrer">
          <img
            className="profile-pic"
            src="/asmat_profile.png"
            alt="Profile Picture"
          />
        </a>
      </div>

      <h2 className="name-title">ASMAT</h2>
      <p className="bio-description">
        Creative Web-App Developer | CSE Student | Passionate Problem Solver
      </p>

      <div className="buttons">
        {socialLinks.map((link, index) => (
          <div
            key={index}
            className="btn"
            onClick={() => handleLinkClick(link.url)}
          >
            <i className={link.icon}></i>
            {link.name}
          </div>
        ))}
      </div>

      <footer>
        <p>
          &copy; 2025 Asmat. Crafted with{" "}
          <i className="bi bi-heart-pulse-fill"></i>.
        </p>
      </footer>
    </div>
  );
};

export default Bio;
