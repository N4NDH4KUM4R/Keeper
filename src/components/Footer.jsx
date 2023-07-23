import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <h6>This application currently supports Create, Read, and Delete operations. In the future, I plan to add the Update operation and a connection to MongoDB.</h6>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}
export default Footer;
