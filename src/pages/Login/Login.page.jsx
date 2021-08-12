import { useState, useEffect } from "react";
// import "./Login.styles";
import styled from "styled-components";
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

export default Login;
