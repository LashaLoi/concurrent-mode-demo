import React from "react";

import { Title } from "./Title";
import { Content } from "./art/Content";
import { Images } from "./art/Images";
import { Comments } from "./art/Comments";

import { ArtContainer, ArtContent } from "./styles";

export const Art = () => (
  <ArtContainer>
    <Title />
    <ArtContent>
      <Images ms={1000} />
      <Content ms={2000} />
      <Comments ms={3000} />
    </ArtContent>
  </ArtContainer>
);
