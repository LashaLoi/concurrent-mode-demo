import React from "react";

import { PendingContainer } from "../modules/art/styles";

import styled from "styled-components";

const LoaderContainer = styled.div`
  .loader {
    width: 100px;
    height: 100px;
    background-color: #fff;
    outline: 6px solid #fff;
    outline-offset: -1px;
    -webkit-transform: rotate(45deg) scale(0.5);
    transform: rotate(45deg) scale(0.5);
  }

  .loader:before {
    content: "";
    display: block;
    width: 100px;
    height: 100px;
    background-color: #fff;
    -webkit-animation: rotate 3s infinite;
    animation: rotate 3s infinite;
  }

  @-webkit-keyframes rotate {
    0% {
      -webkit-transform-origin: bottom left;
      transform-origin: bottom left;
      -webkit-transform: translate(-5px, -105px) rotate(0deg) scale(1.1);
      transform: translate(-5px, -105px) rotate(0deg) scale(1.1);
    }
    25% {
      -webkit-transform-origin: bottom left;
      transform-origin: bottom left;
      -webkit-transform: translate(-5px, -105px) rotate(-180deg) scale(1.1);
      transform: translate(-5px, -105px) rotate(-180deg) scale(1.1);
    }
    26% {
      -webkit-transform-origin: top left;
      transform-origin: top left;
      -webkit-transform: translate(-5px, 105px) rotate(-180deg) scale(1.1);
      transform: translate(-5px, 105px) rotate(-180deg) scale(1.1);
    }
    50% {
      -webkit-transform-origin: top left;
      transform-origin: top left;
      -webkit-transform: translate(-5px, 105px) rotate(-360deg) scale(1.1);
      transform: translate(-5px, 105px) rotate(-360deg) scale(1.1);
    }
    51% {
      -webkit-transform-origin: top right;
      transform-origin: top right;
      -webkit-transform: translate(5px, 105px) rotate(-360deg) scale(1.1);
      transform: translate(5px, 105px) rotate(-360deg) scale(1.1);
    }
    75% {
      -webkit-transform-origin: top right;
      transform-origin: top right;
      -webkit-transform: translate(5px, 105px) rotate(-540deg) scale(1.1);
      transform: translate(5px, 105px) rotate(-540deg) scale(1.1);
    }
    76% {
      -webkit-transform-origin: bottom right;
      transform-origin: bottom right;
      -webkit-transform: translate(5px, -105px) rotate(-540deg) scale(1.1);
      transform: translate(5px, -105px) rotate(-540deg) scale(1.1);
    }
    100% {
      -webkit-transform-origin: bottom right;
      transform-origin: bottom right;
      -webkit-transform: translate(5px, -105px) rotate(-720deg) scale(1.1);
      transform: translate(5px, -105px) rotate(-720deg) scale(1.1);
    }
  }
  @keyframes rotate {
    0% {
      -webkit-transform-origin: bottom left;
      transform-origin: bottom left;
      -webkit-transform: translate(-5px, -105px) rotate(0deg) scale(1.1);
      transform: translate(-5px, -105px) rotate(0deg) scale(1.1);
    }
    25% {
      -webkit-transform-origin: bottom left;
      transform-origin: bottom left;
      -webkit-transform: translate(-5px, -105px) rotate(-180deg) scale(1.1);
      transform: translate(-5px, -105px) rotate(-180deg) scale(1.1);
    }
    26% {
      -webkit-transform-origin: top left;
      transform-origin: top left;
      -webkit-transform: translate(-5px, 105px) rotate(-180deg) scale(1.1);
      transform: translate(-5px, 105px) rotate(-180deg) scale(1.1);
    }
    50% {
      -webkit-transform-origin: top left;
      transform-origin: top left;
      -webkit-transform: translate(-5px, 105px) rotate(-360deg) scale(1.1);
      transform: translate(-5px, 105px) rotate(-360deg) scale(1.1);
    }
    51% {
      -webkit-transform-origin: top right;
      transform-origin: top right;
      -webkit-transform: translate(5px, 105px) rotate(-360deg) scale(1.1);
      transform: translate(5px, 105px) rotate(-360deg) scale(1.1);
    }
    75% {
      -webkit-transform-origin: top right;
      transform-origin: top right;
      -webkit-transform: translate(5px, 105px) rotate(-540deg) scale(1.1);
      transform: translate(5px, 105px) rotate(-540deg) scale(1.1);
    }
    76% {
      -webkit-transform-origin: bottom right;
      transform-origin: bottom right;
      -webkit-transform: translate(5px, -105px) rotate(-540deg) scale(1.1);
      transform: translate(5px, -105px) rotate(-540deg) scale(1.1);
    }
    100% {
      -webkit-transform-origin: bottom right;
      transform-origin: bottom right;
      -webkit-transform: translate(5px, -105px) rotate(-720deg) scale(1.1);
      transform: translate(5px, -105px) rotate(-720deg) scale(1.1);
    }
  }
`;

export const Loader = () => (
  <PendingContainer>
    <LoaderContainer>
      <div className="loader"></div>
    </LoaderContainer>
  </PendingContainer>
);
