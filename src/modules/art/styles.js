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
  margin-top: 100px;
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
  display: flex;
  justify-content: space-between;
`;

export const Img = styled.img`
  width: 19%;
  height: 200px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-radius: 10px;

  filter: ${props => props.blur && `blur(3px)`};

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;
