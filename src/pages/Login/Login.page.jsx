import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button.component";
import { DividerWithText } from "../../components/DividerWithText/DividerWithText.component";
import { InputField } from "../../components/InputField/InputField.component";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(false);

  useEffect(() => {
    const inputEmptyValidation = () => {
      if (username !== "" && password !== "") {
        setValid(false);
      } else {
        setValid(true);
      }
    };
    inputEmptyValidation();
  }, [username, password]);

  return (
    <LoginPageContainer>
      <LoginPageWrapper>
        <LoginPageBox>
          <Logo src="/assets/images/insta_logo.png" />
          <Form>
            <InputField
              type="text"
              label="Phone number, username, or email"
              name="username"
              value={username}
              setChange={setUsername}
            />
            <InputField
              type="password"
              label="Password"
              name="password"
              value={password}
              setChange={setPassword}
            />
            <Button type="submit" text="Log In" disabled={valid} />
          </Form>

          <DividerWithText text="or" />

          <LoginWithFacebook>
            <FacebookIcon className="fab fa-facebook-square" />
            <FacebookText>Log in with Facebook</FacebookText>
          </LoginWithFacebook>

          <ForgetPassword to="/accounts/password/reset">
            Forget password?
          </ForgetPassword>
        </LoginPageBox>
      </LoginPageWrapper>
    </LoginPageContainer>
  );
};

const LoginPageContainer = styled.div`
  min-height: 100vh;
  padding: 30px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginPageWrapper = styled.div`
  width: 350px;
  text-align: center;
`;

const LoginPageBox = styled.div`
  background-color: #fff;
  padding: 10px 40px;
  width: 100%;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  border-radius: 1px;
  margin: 0 0 10px;
`;

const Logo = styled.img`
  width: 175px;
  padding: 20px 0;
`;

const Form = styled.form``;

const LoginWithFacebook = styled.button`
  color: #385185;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  cursor: pointer;
`;

const FacebookIcon = styled.i`
  font-size: 20px;
  margin-right: 8px;
`;

const FacebookText = styled.span`
  font-size: 14px;
  font-weight: 600;
`;

const ForgetPassword = styled(Link)`
  color: #385185;
  font-size: 12px;
  font-weight: 500;
  margin-top: 15px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
`;

export default Login;
