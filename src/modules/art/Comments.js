import React, { useReducer, useEffect, useCallback } from "react";

import { Loader } from "../../components/Loader";

import { getComments } from "../../api";

import { PendingContainer, CommentContainer, Avatar, Comment } from "./styles";

export const Comments = ({ ms }) => {
  const [{ comments, loading, error }, setState] = useReducer(
    (prevState, nextState) => ({ ...prevState, ...nextState }),
    {
      comments: [],
      loading: false,
      error: ""
    }
  );

  const fetchComments = useCallback(async () => {
    setState({ loading: true });

    try {
      const data = await getComments(ms);

      setState({
        comments: data,
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
    fetchComments();
  }, [fetchComments]);

  if (loading) return <Loader />;

  if (error) return <PendingContainer>{error}</PendingContainer>;

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
