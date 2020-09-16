import React from "react";

import { Img, ImgContainer, ImgRect } from "./styles";

import { createResource } from "../../createResource";

import { getImages } from "../../api";

const imageResource = createResource(ms => getImages(ms));

export const Images = () => {
  const images = imageResource.read(1000);

  return (
    <ImgContainer>
      <Img src={images[0]} alt={images[0]} first />
      <ImgRect>
        {images
          .filter((_, i) => i)
          .map(image => (
            <Img src={image} alt={image} key={image} />
          ))}
      </ImgRect>
    </ImgContainer>
  );
};
