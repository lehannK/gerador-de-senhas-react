import { useState } from "react";
import "./styles.module.css";

export default () => {
  const [textVar, setTextVar] = useState("Copiar");
  const [currentPassword, setCurrentPassword] = useState("");
  const [passwordSize, setPasswordSize] = useState(12);

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
    for (let i = 0; i < passwordSize; i++) {
      const randomIndex = Math.floor(Math.random() * char.length);
      password += char.charAt(randomIndex);
    }
    setCurrentPassword(password);
  };

  return (
    <>
      <button id="btnPassword" onClick={changeText}>
        Gerar Senha
      </button>
      <p>{currentPassword}</p>
      <label htmlFor="passwordSize">Tamanho:</label>
      <input
        type="number"
        id="passwordSize"
        min={1}
        value={passwordSize}
        onChange={(ev) => {
          setPasswordSize(ev.target.value);
        }}
      ></input>
      <button id="btnCopy" onClick={changeText}>
        {textVar}
      </button>
    </>
  );
};
