import React, { useEffect } from "react";
import styled from "styled-components";

export const AppImageSlides = ({ slides, interval }) => {
  useEffect(() => {
    const images = document.querySelectorAll(".appImage");
    images[0].classList.add("visible");

    function ImageFade() {
      let current = document.querySelector(".appImage.visible");
      let next = current.nextSibling;

      // if no next then we're at the end
      if (!next) {
        next = current.parentNode.firstChild;
      }

      next.classList.add("visible");
      current.classList.remove("visible");
    }
    const slideInterval = setInterval(ImageFade, interval);

    return () => {
      clearInterval(slideInterval);
    };
  }, [interval, slides]);

  return (
    <AppSlidesWrapper>
      {React.Children.toArray(
        slides.map((slide) => (
          <AppImage className="appImage" src={slide.url} alt="App Image" />
        ))
      )}
    </AppSlidesWrapper>
  );
};

const AppSlidesWrapper = styled.div`
  background-image: url("/assets/images/app-mockup.png");
  background-position: 0 0;
  background-size: 454px 618px;
  height: 618px;
  width: 454px;
  position: relative;
`;

const AppImage = styled.img`
  width: 247px;
  position: absolute;
  right: 59px;
  top: 95px;
  opacity: 0;
  transition: 2s opacity;

  &.visible {
    opacity: 1;
  }
`;
