import "./InputField.styles.css";
export const InputField = ({
  type,
  label,
  placeholder,
  name,
  value,
  setChange,
}) => {
  // Handle on not Empty
  const handleTyping = (e) => {
    const input = e.target;
    const showBtn = document.querySelector(".showBtn");
    if (input.value !== "") {
      input.classList.add("notEmpty");
      type === "password"
        ? (showBtn.style.display = "block")
        : (showBtn.style.display = "none");
    } else {
      input.classList.remove("notEmpty");
      type === "password"
        ? (showBtn.style.display = "none")
        : (showBtn.style.display = "block");
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
    <div className="inputField">
      <input
        id={name}
        type={type}
        placeholder={placeholder && placeholder}
        onInput={handleTyping}
        value={value}
        onChange={(e) => setChange(e.target.value)}
      />
      {label && <label htmlFor={name}>{label}</label>}
      {type === "password" && (
        <span className="showBtn" onClick={handlePasswordType}>
          Show
        </span>
      )}
    </div>
  );
};
