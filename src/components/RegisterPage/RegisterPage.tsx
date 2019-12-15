import "./RegisterPage.scss";

import React, {
  useState,
} from "react";

import {Input} from "../Inputs/Input/Input";
import {Button} from "../Buttons/Button/Button";

interface UserForm {
  username: string;
  email: string;
  password: string;
}

// TODO: add validation to inputs and submit button

export function RegisterPage() {
  const [
    userForm,
    setUserForm
  ] = useState<UserForm>({
    username: "",
    email: "",
    password: "",
  });

  return (
    <main
      id={"RegisterPage"}
      className={"register-page"}
      role={"main"}
    >
      <h1>{"Create your account"}</h1>

      <form
        id={"RegisterPage.form"}
        onSubmit={handleSubmit}
      >
        <Input
          id={"RegisterPage.username-input"}
          name={"username"}
          title={"Username"}
          value={userForm.username}
          onChange={(event) => {
            setUserForm({
              ...userForm,
              username: event.currentTarget.value,
            });
          }}
        />

        <Input
          id={"RegisterPage.email-input"}
          name={"email"}
          type={"email"}
          title={"E-mail"}
          placeholder="sophie@example.com"
          value={userForm.email}
          onChange={(event) => {
            setUserForm({
              ...userForm,
              email: event.currentTarget.value,
            });
          }}
        />

        <Input
          id={"RegisterPage.password-input"}
          name={"password"}
          type={"password"}
          title={"Password"}
          value={userForm.password}
          onChange={(event) => {
            setUserForm({
              ...userForm,
              password: event.currentTarget.value,
            });
          }}
        />

        <Button
          id={"RegisterPage.submit-button"}
          onClick={handleSubmit}
        />
      </form>
    </main>
  );

  function handleSubmit() {
    return;
  }
}

