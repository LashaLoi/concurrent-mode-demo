import React from "react";

import { PendingContainer } from "../modules/art/styles";

import styled from "styled-components";

const LoaderContainer = styled.div`
  .typing_loader {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    -webkit-animation: typing 1s linear infinite alternate;
    -moz-animation: Typing 1s linear infinite alternate;
    -ms-animation: Typing 1s linear infinite alternate;
    animation: typing 1s linear infinite alternate;
    margin: 46px auto; /* Not necessary- its only for layouting*/
    position: relative;
    left: -12px;
  }
  @-webkit-keyframes typing {
    0% {
      background-color: rgba(255, 255, 255, 1);
      box-shadow: 12px 0px 0px 0px rgba(255, 255, 255, 0.2),
        24px 0px 0px 0px rgba(255, 255, 255, 0.2);
    }
    25% {
      background-color: rgba(255, 255, 255, 0.4);
      box-shadow: 12px 0px 0px 0px rgba(255, 255, 255, 2),
        24px 0px 0px 0px rgba(255, 255, 255, 0.2);
    }
    75% {
      background-color: rgba(255, 255, 255, 0.4);
      box-shadow: 12px 0px 0px 0px rgba(255, 255, 255, 0.2),
        24px 0px 0px 0px rgba(255, 255, 255, 1);
    }
  }

  @-moz-keyframes typing {
    0% {
      background-color: rgba(255, 255, 255, 1);
      box-shadow: 12px 0px 0px 0px rgba(255, 255, 255, 0.2),
        24px 0px 0px 0px rgba(255, 255, 255, 0.2);
    }
    25% {
      background-color: rgba(255, 255, 255, 0.4);
      box-shadow: 12px 0px 0px 0px rgba(255, 255, 255, 2),
        24px 0px 0px 0px rgba(255, 255, 255, 0.2);
    }
    75% {
      background-color: rgba(255, 255, 255, 0.4);
      box-shadow: 12px 0px 0px 0px rgba(255, 255, 255, 0.2),
        24px 0px 0px 0px rgba(255, 255, 255, 1);
    }
  }

  @keyframes typing {
    0% {
      background-color: rgba(255, 255, 255, 1);
      box-shadow: 12px 0px 0px 0px rgba(255, 255, 255, 0.2),
        24px 0px 0px 0px rgba(255, 255, 255, 0.2);
    }
    25% {
      background-color: rgba(255, 255, 255, 0.4);
      box-shadow: 12px 0px 0px 0px rgba(255, 255, 255, 2),
        24px 0px 0px 0px rgba(255, 255, 255, 0.2);
    }
    75% {
      background-color: rgba(255, 255, 255, 0.4);
      box-shadow: 12px 0px 0px 0px rgba(255, 255, 255, 0.2),
        24px 0px 0px 0px rgba(255, 255, 255, 1);
    }
  }
`;

export const Loader = () => (
  <PendingContainer>
    <LoaderContainer>
      <div className="typing_loader"></div>
    </LoaderContainer>
  </PendingContainer>
);
