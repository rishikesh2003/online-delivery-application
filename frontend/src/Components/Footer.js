function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <h1>GoGrocer</h1>
      <p>Copyright &copy; {year}</p>
    </footer>
  );
}

export default Footer;
