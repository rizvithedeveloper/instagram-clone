import styled from "styled-components";

export const DividerWithText = ({ text }) => {
  return (
    <Divider>
      <HorizontalLine />
      <Text>{text}</Text>
      <HorizontalLine />
    </Divider>
  );
};

const Divider = styled.div`
  display: flex;
  margin: 15px 0px;
`;

const HorizontalLine = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid;
  border-color: #dbdbdb;
  border-color: rgba(var(--b38, 219, 219, 219), 1);
`;

const Text = styled.span`
  color: #8e8e8e;
  color: rgba(var(--f52, 142, 142, 142), 1);
  text-transform: uppercase;
  padding: 0 20px;
  font-size: 13px;
  font-weight: 700;
`;
