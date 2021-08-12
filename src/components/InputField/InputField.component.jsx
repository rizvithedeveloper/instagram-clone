import styled from "styled-components";
export const InputField = ({
  type,
  label,
  placeholder,
  name,
  value,
  setChange,
  passwordInput,
}) => {
  // Handle on not Empty
  const handleTyping = (e) => {
    const input = e.target;
    const showBtn = document.querySelector(".showBtn");
    if (input.value !== "") {
      input.classList.add("notEmpty");
      if (passwordInput) {
        type === "password"
          ? (showBtn.style.display = "block")
          : (showBtn.style.display = "none");
      }
    } else {
      input.classList.remove("notEmpty");
      if (passwordInput) {
        type === "password"
          ? (showBtn.style.display = "none")
          : (showBtn.style.display = "block");
      }
    }
  };

  // handle show and hide for password input
  const handlePasswordType = (e) => {
    let input = e.target.parentNode.querySelector("input");
    let text = e.target;
    if (input.type === "password") {
      input.type = "text";
      text.innerText = "Hide";
    } else {
      input.type = "password";
      text.innerText = "Show";
    }
  };

  return (
    <InputFieldWrapper>
      <Input
        id={name}
        type={type}
        placeholder={placeholder && placeholder}
        onInput={handleTyping}
        value={value}
        onChange={(e) => setChange(e.target.value)}
      />
      {label && <Label htmlFor={name}>{label}</Label>}
      {type === "password" && (
        <ShowBtn className="showBtn" onClick={handlePasswordType}>
          Show
        </ShowBtn>
      )}
    </InputFieldWrapper>
  );
};

const InputFieldWrapper = styled.div`
  position: relative;
  margin-bottom: 7px;
  color: #262626;
`;

const Input = styled.input`
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  background: #fafafa;
  background: rgba(var(--b3f, 250, 250, 250), 1);
  padding: 9px 0 7px 9px;
  border: 1px solid rgba(var(--ca6, 219, 219, 219), 1);
  border-radius: 3px;
  width: 100%;
  height: 41px;
  font-size: 14px;

  &:focus {
    border-color: #a8a8a8;
    border-color: rgba(var(--c8c, 168, 168, 168), 1);
  }

  &.notEmpty {
    padding-top: 20px;
  }

  &.notEmpty ~ label {
    font-size: 10px;
    top: 4px;
  }
`;

const Label = styled.label`
  color: #8e8e8e;
  color: rgba(var(--f52, 142, 142, 142), 1);
  font-size: 12px;
  font-weight: 500;
  position: absolute;
  left: 10px;
  top: 13px;
  cursor: auto;
  transition: 0.2s all;
`;

const ShowBtn = styled.span`
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  position: absolute;
  right: 10px;
  top: 12px;
  display: none;
`;
