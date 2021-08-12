import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button.component";
import { DividerWithText } from "../../components/DividerWithText/DividerWithText.component";
import { InputField } from "../../components/InputField/InputField.component";
import { AppImageSlides } from "../../components/AppImageSlides/AppImageSlides.component";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
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
      if (
        email !== "" &&
        fullName !== "" &&
        username !== "" &&
        password !== ""
      ) {
        setValid(false);
      } else {
        setValid(true);
      }
    };
    inputEmptyValidation();
  }, [email, fullName, username, password]);

  return (
    <SignUpPageContainer>
      <SignUpPageAppWrapper>
        <AppImageSlides slides={slideImages} interval={3000} />
      </SignUpPageAppWrapper>

      <SignUpPageWrapper>
        <SignUpPageBox>
          <Logo src="/assets/images/insta_logo.png" />
          <SignupText>
            Sign up to see photos and videos from your friends.
          </SignupText>
          <LoginWithFacebook>
            <FacebookIcon className="fab fa-facebook-square"></FacebookIcon>
            <FacebookText>Log in with Facebook</FacebookText>
          </LoginWithFacebook>
          <DividerWithText text="or" />
          <Form>
            <InputField
              type="text"
              label="Mobile Number or Email"
              name="email"
              value={email}
              setChange={setEmail}
            />
            <InputField
              type="text"
              label="Full Name"
              name="fullName"
              value={fullName}
              setChange={setFullName}
            />
            <InputField
              type="text"
              label="Username"
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
            <Button type="submit" text="Sign Up" disabled={valid} />
          </Form>
        </SignUpPageBox>

        <SignUpPageBox>
          <NotAccountText>Have an account?</NotAccountText>
          <LogInLink to="/accounts/login">Log in</LogInLink>
        </SignUpPageBox>

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
      </SignUpPageWrapper>
    </SignUpPageContainer>
  );
};

const SignUpPageContainer = styled.div`
  min-height: 100vh;
  padding: 30px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignUpPageWrapper = styled.div`
  width: 350px;
  text-align: center;

  @media (max-width: 425px) {
    width: 100%;
    padding: 0 20px;
  }
`;

const SignUpPageBox = styled.div`
  background-color: #fff;
  padding: 20px 40px;
  width: 100%;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  border-radius: 1px;
  margin: 0 0 10px;
`;

const Logo = styled.img`
  width: 175px;
  padding-top: 20px;
`;

const SignupText = styled.h3`
  color: #8e8e8e;
  color: rgba(var(--f52, 142, 142, 142), 1);
  font-size: 17px;
  font-weight: 700;
  line-height: 20px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const LoginWithFacebook = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #0095f6;
  background-color: rgba(var(--d69, 0, 149, 246), 1);
  border: none;
  color: #fff;
  padding: 7px 9px;
  border-radius: 4px;
  cursor: pointer;
`;

const FacebookIcon = styled.i`
  font-size: 20px;
  margin-right: 10px;
`;

const FacebookText = styled.span`
  font-size: 14px;
  font-weight: 600;
`;

const Form = styled.form``;

const NotAccountText = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

const LogInLink = styled(Link)`
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

const SignUpPageAppWrapper = styled.div`
  @media (max-width: 925px) {
    display: none;
  }
`;
export default SignUp;
