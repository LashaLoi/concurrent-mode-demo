import React, { useReducer, useEffect, useCallback } from "react";

import { getImages } from "../../api";

import { Img, ImgContainer, PendingContainer } from "./styles";
import { ImageLoader } from "../../components/ImageLoader";

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

  if (loading) return <ImageLoader />;
  if (error) return <PendingContainer>{error}</PendingContainer>;

  return (
    <ImgContainer>
      {images.map(image => (
        <Img src={image} alt={image} key={image} />
      ))}
    </ImgContainer>
  );
};
