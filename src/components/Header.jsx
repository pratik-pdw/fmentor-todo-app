import React from "react";

function Header() {
  const toggleDarkMode = () => {
    applyTransition();
    if (document.documentElement.getAttribute("theme") === "light") {
      document.documentElement.setAttribute("theme", "dark");
    } else {
      document.documentElement.setAttribute("theme", "light");
    }
  };

  const applyTransition = () => {
    document.documentElement.classList.add("transition");
    setTimeout(() => {
      document.documentElement.classList.remove("transition");
    }, 1000);
  };

  return (
    <div className="header">
      <h1 className="header__title">TODO</h1>
      <button onClick={toggleDarkMode} className="header__toggle"></button>
    </div>
  );
}

export default Header;
