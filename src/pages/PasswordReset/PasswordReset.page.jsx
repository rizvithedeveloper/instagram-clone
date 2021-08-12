import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button.component";
import { DividerWithText } from "../../components/DividerWithText/DividerWithText.component";
import { InputField } from "../../components/InputField/InputField.component";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(false);

  useEffect(() => {
    const inputEmptyValidation = () => {
      if (email !== "") {
        setValid(false);
      } else {
        setValid(true);
      }
    };
    inputEmptyValidation();
  }, [email]);

  return (
    <ResetPasswordPageContainer>
      <ResetPasswordPageWrapper>
        <ResetPasswordPageBox>
          <SecureBoxHeader>
            <SecureIconImage
              src="/assets/icons/secured.png"
              alt="Secured Icon"
            ></SecureIconImage>
            <SecureHeading>Trouble Logging In?</SecureHeading>
            <SecureText>
              Enter your email, phone, or username and we'll send you a link to
              get back into your account.
            </SecureText>
          </SecureBoxHeader>
          <Form>
            <InputField
              type="text"
              label="Email, Phone, or Username"
              name="email"
              value={email}
              setChange={setEmail}
            />
            <Button type="submit" text="Send Login Link" disabled={valid} />
          </Form>

          <DividerWithText text="or" />

          <CreateNewAccountLink to="/accounts/emailsignup">
            Create New Account
          </CreateNewAccountLink>
        </ResetPasswordPageBox>

        <LoginBoxButton to="/accounts/login">Back To Login</LoginBoxButton>
      </ResetPasswordPageWrapper>
    </ResetPasswordPageContainer>
  );
};

const ResetPasswordPageContainer = styled.div`
  min-height: 100vh;
  padding: 30px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ResetPasswordPageWrapper = styled.div`
  width: 388px;
  text-align: center;

  @media (max-width: 425px) {
    width: 100%;
    padding: 0 20px;
  }
`;

const ResetPasswordPageBox = styled.div`
  background-color: #fff;
  padding: 20px 40px;
  width: 100%;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  border-radius: 1px;
`;

const SecureBoxHeader = styled.div``;

const SecureIconImage = styled.img`
  width: 90px;
`;

const SecureHeading = styled.h4`
  color: #262626;
  color: rgba(var(--i1d, 38, 38, 38), 1);
  margin: 10px 0;
`;

const SecureText = styled.p`
  color: #8e8e8e;
  color: rgba(var(--f52, 142, 142, 142), 1);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;

const CreateNewAccountLink = styled(Link)`
  font-size: 14px;
  font-weight: 600;
  padding-bottom: 40px;
  display: flex;
  justify-content: center;
`;

const LoginBoxButton = styled(Link)`
  font-size: 14px;
  font-weight: 700;
  width: 100%;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  padding: 13px 0;
  border: 2px solid #dbdbdb;
  border-top-width: 0px;
`;

const Form = styled.form``;

export default PasswordReset;
