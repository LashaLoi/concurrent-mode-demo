import React, { Suspense } from "react";

import { Title } from "./Title";
import { Content } from "./art/Content";
import { Images } from "./art/Images";
import { Comments } from "./art/Comments";

import { Loader } from "../components/Loader";

import { ArtContainer, ArtContent } from "./styles";

export const Art = () => (
  <ArtContainer>
    <Title />
    <ArtContent>
      <Suspense fallback={<Loader />}>
        <Images />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Content />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Comments />
      </Suspense>
    </ArtContent>
  </ArtContainer>
);
