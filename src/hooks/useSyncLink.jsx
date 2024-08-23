import { useEffect } from "react";

function handleIntersect() {
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const scrollY = window.scrollY;
    const offsetY = section.offsetTop;
    const height = section.offsetHeight;
    let id = section.getAttribute("id");
    const links = document.querySelectorAll("a:not(main a)");

    if (scrollY + 1000 >= offsetY && scrollY < offsetY + height) {
      links.forEach((link) => {
        link.style.setProperty("--is-active", "white");
        document
          .querySelector(`a[href="#${id}"]`)
          .style.setProperty("--is-active", "orange");
      });
    }
  });
}

export default function useSyncLink() {
  useEffect(function () {
    window.addEventListener("scroll", handleIntersect);
    return function () {
      window.removeEventListener("scroll", handleIntersect);
    };
  }, []);
}
