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
      <form
        id={"RegisterPage.form"}
        className={"register-form"}
        onSubmit={handleSubmit}
      >
        <h1
          id={"RegisterPage.header"}
          className={"register-form-header"}
        >
          {"Sign up to create new Account"}
        </h1>

        <Input
          id={"RegisterPage.username-input"}
          name={"username"}
          placeholder={"Username"}
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
          placeholder={"E-mail"}
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
          placeholder={"Password"}
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
          title={"Sign up"}
          type={"submit"}
          onClick={handleSubmit}
        />
      </form>
    </main>
  );

  function handleSubmit() {
    return;
  }
}

