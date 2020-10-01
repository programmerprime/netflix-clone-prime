import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png"
        alt="Netflix logo"
      />

      <img
        className="nav__avatar"
        src="https://banner2.cleanpng.com/20180429/vue/kisspng-smiley-t-shirt-emoticon-logo-5ae668c705ebe4.7938665815250495430243.jpg"
        alt="nav-avatar"
      />
    </div>
  );
};

export default Nav;
