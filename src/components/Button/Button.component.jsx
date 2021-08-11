import styled from "styled-components";

export const Button = ({ type, text, disabled }) => {
  return (
    <CustomButton className={disabled ? "disabled" : ""} type={type}>
      {text}
    </CustomButton>
  );
};

const CustomButton = styled.button`
  width: 100%;
  border: none;
  background-color: #0095f6;
  border-radius: 4px;
  padding: 7px 9px;
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  margin-top: 8px;

  &.disabled {
    opacity: 0.3;
    pointer-events: none;
  }
`;
