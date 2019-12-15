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

function RegisterPage() {
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
      className={"RegisterPage"}
      role={"main"}
    >
      <form
        id={"RegisterPage.form"}
        onSubmit={handleSubmit}
      >
        <Input
          id={"RegisterPage.username-input"}
          name={"username"}
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

export {RegisterPage};
