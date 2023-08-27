const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="footer">
      <h3>&copy; {date} Planetary inc.</h3>
    </div>
  );
};

export default Footer;
