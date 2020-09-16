import React from "react";

import { getComments } from "../../api";

import { CommentContainer, Avatar, Comment } from "./styles";

import { createResource } from "../../createResource";

const commentResource = createResource(ms => getComments(ms));

export const Comments = () => {
  const comments = commentResource.read(3000);

  return (
    <CommentContainer>
      {comments.map(comment => (
        <Comment key={comment.id}>
          <Avatar
            src="https://cdn3.iconfinder.com/data/icons/social-messaging-productivity-6/128/profile-male-circle2-512.png"
            alt=""
          />
          <div style={{ marginLeft: "20px" }}>
            <h5>{comment.name}</h5>
            <h4>{comment.message}</h4>
          </div>
        </Comment>
      ))}
    </CommentContainer>
  );
};
