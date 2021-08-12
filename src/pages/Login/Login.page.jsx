import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button.component";
import { DividerWithText } from "../../components/DividerWithText/DividerWithText.component";
import { InputField } from "../../components/InputField/InputField.component";
import { AppImageSlides } from "../../components/AppImageSlides/AppImageSlides.component";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(false);
  const [slideImages] = useState([
    {
      url: "/assets/images/app_screenshot1.jpg",
    },
    {
      url: "/assets/images/app_screenshot2.jpg",
    },
    {
      url: "/assets/images/app_screenshot3.jpg",
    },
    {
      url: "/assets/images/app_screenshot4.jpg",
    },
    {
      url: "/assets/images/app_screenshot5.jpg",
    },
  ]);

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
      <LoginPageAppWrapper>
        <AppImageSlides slides={slideImages} interval={3000} />
      </LoginPageAppWrapper>

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

        <LoginPageBox>
          <NotAccountText>Don't have an account?</NotAccountText>
          <SignUpLink to="/accounts/emailsignup">Sign Up</SignUpLink>
        </LoginPageBox>

        <GetTheAppBox>
          <GetTheAppText>Get the app.</GetTheAppText>
          <DownloadAppRow>
            <DownloadApp
              href="https://apps.apple.com/app/instagram/id389801252?vt=lo"
              target="_blank"
            >
              <DownloadAppImage
                src="/assets/images/appstore.png"
                alt="App Store"
              />
            </DownloadApp>

            <DownloadApp
              href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb&utm_campaign=loginPage&ig_mid=E3012C4D-DB60-4DAA-8C65-84CD703C6F79&utm_content=lo&utm_medium=badge"
              target="_blank"
            >
              <DownloadAppImage
                src="/assets/images/playstore.png"
                alt="Play Store"
              />
            </DownloadApp>
          </DownloadAppRow>
        </GetTheAppBox>
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
  padding: 20px 40px;
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
  display: flex;
  justify-content: center;
`;

const NotAccountText = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

const SignUpLink = styled(Link)`
  color: #0095f6;
  color: rgba(var(--d69, 0, 149, 246), 1);
  font-size: 14px;
  font-weight: 700;
  margin-left: 5px;
`;

const GetTheAppBox = styled.div``;

const GetTheAppText = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin: 20px 0px;
`;

const DownloadAppRow = styled.div`
  display: flex;
  justify-content: center;
`;

const DownloadApp = styled.a`
  width: 135px;

  &:first-child {
    margin-right: 10px;
  }
`;

const DownloadAppImage = styled.img`
  width: 100%;
`;

const LoginPageAppWrapper = styled.div``;
export default Login;
