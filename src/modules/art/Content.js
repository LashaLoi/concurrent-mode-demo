import React, { useEffect, useReducer, useCallback } from "react";

import { getArt } from "../../api";

import { Loader } from "../../components/Loader";

import {
  PendingContainer,
  ArtInfo,
  Input,
  InputContainer,
  Avatar
} from "./styles";

export const Content = ({ ms }) => {
  const [{ art, loading, error }, setState] = useReducer(
    (prevState, nextState) => ({ ...prevState, ...nextState }),
    {
      art: {},
      loading: false,
      error: ""
    }
  );

  const fetchArts = useCallback(async () => {
    setState({ loading: true });

    try {
      const data = await getArt(ms);

      setState({
        art: data,
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
    fetchArts();
  }, [fetchArts]);

  if (loading) return <Loader />;

  if (error) return <PendingContainer>{error}</PendingContainer>;

  return (
    <ArtInfo>
      <h1>{art.name}</h1>
      <h3>Author: {art.author}</h3>
      <h3>Location: {art.city}</h3>
      <h3>Tags: {art.tags}</h3>
      <h3>Link: {art.link}</h3>
      <h3>{art.description}</h3>
      <InputContainer>
        <Avatar
          src="https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-male-5-512.png"
          alt="avatar"
        />
        <Input />
      </InputContainer>
    </ArtInfo>
  );
};
