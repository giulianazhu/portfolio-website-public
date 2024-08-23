import { useEffect } from "react";
import { x2boxShadow } from "../css-utils/optionStyles";

function handleScroll() {
  const navbar = document.querySelector("#mainNav");

  const scrollY = window.scrollY;
  if (scrollY > 10) {
    navbar.style.setProperty("--bg-color", "rgba(255, 255, 255, 0.2)");
    navbar.style.setProperty("--box-shadow", x2boxShadow.md);
  } else {
    navbar.style.setProperty("--bg-color", "rgba(255, 255, 255, 0)");
    navbar.style.setProperty("--box-shadow", "none");
  }
}

export default function useSyncNav() {
  useEffect(function () {
    window.addEventListener("scroll", handleScroll);
    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
}
