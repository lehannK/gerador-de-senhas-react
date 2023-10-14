import { useState } from "react";

export default () => {
  const [textVar, setTextVar] = useState("Copiar");
  const [currentPassword, setCurrentPassword] = useState("");

  const changeText = (ev) => {
    if (ev.target.id === "btnPassword") {
      generateRandomPassword();
      return setTextVar("Copiar");
    }
    if (ev.target.id === "btnCopy") {
      window.navigator.clipboard.writeText(currentPassword);
      return setTextVar("Copiado!");
    }
  };

  const generateRandomPassword = () => {
    const char =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=[]{}|;:,.<>?";
    let password = "";
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * char.length);
      password += char.charAt(randomIndex);
    }
    setCurrentPassword(password);
  };

  return (
    <>
      <div>
        <button id="btnPassword" onClick={changeText}>
          Gerar Senha
        </button>
        <p>{currentPassword}</p>
      </div>
      <div>
        <button id="btnCopy" onClick={changeText}>
          {textVar}
        </button>
      </div>
    </>
  );
};
