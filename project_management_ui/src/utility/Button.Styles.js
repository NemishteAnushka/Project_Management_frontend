import styled from "styled-components";

export const StyledSubmitButton = styled.button`
  background-color: rgb(7, 166, 228);
  color: white;
  border: none;
  border-radius: 15px;
  padding: 8px 12px;
  cursor: pointer;
 

  &:hover {
    background-color: rgb(5, 140, 198);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgb(7, 166, 228);
  }
`;
