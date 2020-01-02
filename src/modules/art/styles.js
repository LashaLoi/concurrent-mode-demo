import styled from "styled-components";

export const CommentContainer = styled.div`
  margin: 50px 0;
`;

export const Avatar = styled.img`
  height: 60px;
  width: 60px;
`;

export const Comment = styled.div`
  display: flex;
  align-items: center;
`;

export const PendingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin: 200px 0;
`;

export const ArtInfo = styled.div`
  margin-top: 50px;
`;

export const Input = styled.input`
  width: 92%;
  border-radius: 10px;
  outline: none;
  padding-left: 20px;
  font-size: 20px;
`;

export const InputContainer = styled.div`
  margin-top: 50px;
  background: none;
  display: flex;
  justify-content: space-between;
`;

export const ImgContainer = styled.div`
  max-width: 100%;
  height: 500px;
  display: flex;
  justify-content: space-between;
`;

export const Img = styled.img`
  width: 50%;
  height: ${props => (props.first ? `100%` : `50%`)};
  cursor: pointer;

  filter: ${props => props.blur && `blur(3px)`};
`;

export const ImgRect = styled.div``;
