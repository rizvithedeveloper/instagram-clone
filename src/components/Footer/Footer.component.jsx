import styled from "styled-components";

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLinksRow>
        <FooterItemList>
          <FooterListItem>
            <FooterLink href="#">About</FooterLink>
          </FooterListItem>
          <FooterListItem>
            <FooterLink href="#">Blog</FooterLink>
          </FooterListItem>
          <FooterListItem>
            <FooterLink href="#">Jobs</FooterLink>
          </FooterListItem>
          <FooterListItem>
            <FooterLink href="#">Help</FooterLink>
          </FooterListItem>
          <FooterListItem>
            <FooterLink href="#">API</FooterLink>
          </FooterListItem>
          <FooterListItem>
            <FooterLink href="#">Privacy</FooterLink>
          </FooterListItem>
          <FooterListItem>
            <FooterLink href="#">Terms</FooterLink>
          </FooterListItem>
          <FooterListItem>
            <FooterLink href="#">Top Accounts</FooterLink>
          </FooterListItem>
          <FooterListItem>
            <FooterLink href="#">Hashtags</FooterLink>
          </FooterListItem>
          <FooterListItem>
            <FooterLink href="#">Locations</FooterLink>
          </FooterListItem>
        </FooterItemList>
      </FooterLinksRow>

      <FooterCopyrightRow>
        <LanguageSelect>
          <Option value="af">Afrikaans</Option>
          <Option value="cs">Čeština</Option>
          <Option value="da">Dansk</Option>
          <Option value="de">Deutsch</Option>
          <Option value="el">Ελληνικά</Option>
          <Option value="en" selected>
            English
          </Option>
          <Option value="en-gb">English (UK)</Option>
          <Option value="es">Español (España)</Option>
          <Option value="es-la">Español</Option>
          <Option value="fi">Suomi</Option>
          <Option value="fr">Français</Option>
          <Option value="id">Bahasa Indonesia</Option>
          <Option value="it">Italiano</Option>
          <Option value="ja">日本語</Option>
          <Option value="ko">한국어</Option>
          <Option value="ms">Bahasa Melayu</Option>
          <Option value="nb">Norsk</Option>
          <Option value="nl">Nederlands</Option>
          <Option value="pl">Polski</Option>
          <Option value="pt-br">Português (Brasil)</Option>
          <Option value="pt">Português (Portugal)</Option>
          <Option value="ru">Русский</Option>
          <Option value="sv">Svenska</Option>
          <Option value="th">ภาษาไทย</Option>
          <Option value="tl">Filipino</Option>
          <Option value="tr">Türkçe</Option>
          <Option value="zh-cn">中文(简体)</Option>
          <Option value="zh-tw">中文(台灣)</Option>
          <Option value="bn">বাংলা</Option>
          <Option value="gu">ગુજરાતી</Option>
          <Option value="hi">हिन्दी</Option>
          <Option value="hr">Hrvatski</Option>
          <Option value="hu">Magyar</Option>
          <Option value="kn">ಕನ್ನಡ</Option>
          <Option value="ml">മലയാളം</Option>
          <Option value="mr">मराठी</Option>
          <Option value="ne">नेपाली</Option>
          <Option value="pa">ਪੰਜਾਬੀ</Option>
          <Option value="si">සිංහල</Option>
          <Option value="sk">Slovenčina</Option>
          <Option value="ta">தமிழ்</Option>
          <Option value="te">తెలుగు</Option>
          <Option value="vi">Tiếng Việt</Option>
          <Option value="zh-hk">中文(香港)</Option>
          <Option value="bg">Български</Option>
          <Option value="fr-ca">Français (Canada)</Option>
          <Option value="ro">Română</Option>
          <Option value="sr">Српски</Option>
          <Option value="uk">Українська</Option>
        </LanguageSelect>
        <CopyrightText>&copy; 2021 Instagram from Facebook</CopyrightText>
      </FooterCopyrightRow>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  padding-bottom: 40px;
  text-align: center;
`;

const FooterLinksRow = styled.div`
  max-width: 100%;
`;

const FooterItemList = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const FooterListItem = styled.li`
  padding: 5px 7px;
`;

const FooterLink = styled.a`
  color: #8e8e8e;
  color: rgba(var(--f52, 142, 142, 142), 1);
  font-size: 12px;
  line-height: 14px;
  font-weight: 500;
`;

const FooterCopyrightRow = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;
`;

const LanguageSelect = styled.select`
  background: none;
  border: none;
  color: #8e8e8e;
  color: rgba(var(--f52, 142, 142, 142), 1);
  width: 60px;
  font-size: 12px;
  font-weight: 500;
  margin-right: 20px;
`;

const Option = styled.option``;

const CopyrightText = styled.p`
  color: #8e8e8e;
  color: rgba(var(--f52, 142, 142, 142), 1);
  font-size: 12px;
  font-weight: 500;
`;
