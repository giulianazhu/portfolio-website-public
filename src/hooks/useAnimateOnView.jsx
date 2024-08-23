import { useEffect } from "react";
import animations from "../css-utils/animations.module.css";

function handleAnimate(entries) {
  const visible = entries.filter((entry) => entry.isIntersecting);

  if (visible.length > 0) {
    visible.forEach((entry) => {
      console.log("not-animated-yet");
      const id = entry.target.getAttribute("id");
      entry.target.classList.add(animations[id]);
    });
  }
}

export default function useAnimateOnView() {
  useEffect(function () {
    const observer = new IntersectionObserver(handleAnimate, {
      root: null,
      threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    });

    const targets = document.querySelectorAll(".animate");

    targets.forEach((target) => {
      observer.observe(target);
    });

    return function () {
      observer.disconnect();
    };
  }, []);
}
