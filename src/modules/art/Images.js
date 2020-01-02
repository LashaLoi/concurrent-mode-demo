import React, { useReducer, useEffect, useCallback } from "react";

import { getImages } from "../../api";

import { Img, ImgContainer, PendingContainer, ImgRect } from "./styles";
import { Loader } from "../../components/Loader";

export const Images = ({ ms }) => {
  const [{ images, loading, error }, setState] = useReducer(
    (prevState, nextState) => ({ ...prevState, ...nextState }),
    {
      images: [],
      loading: false,
      error: ""
    }
  );

  const fetchImages = useCallback(async () => {
    setState({ loading: true });

    try {
      const data = await getImages(ms);

      setState({
        images: data,
        loading: false
      });
    } catch ({ message }) {
      setState({
        error: message,
        loading: false
      });
    }
  }, [ms]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  if (loading) return <Loader />;
  if (error) return <PendingContainer>{error}</PendingContainer>;

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
