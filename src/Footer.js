import React from "react";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <div>
      <p> © {date} copyright Pannagashastri</p>
    </div>
  );
}

export default Footer;
