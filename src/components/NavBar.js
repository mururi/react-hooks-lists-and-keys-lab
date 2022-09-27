import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const aTags = links.map(link => <a href={"#" + link} key={link}>{link}</a> );

  return <nav>{aTags}</nav>;
}

export default NavBar;
