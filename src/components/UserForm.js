import React from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";
import { useGlobalContext } from "../context";

const UserForm = () => {
  const { step } = useGlobalContext();

  switch (step) {
    case 1:
      return <FormUserDetails />;
    case 2:
      return <FormPersonalDetails />;
    case 3:
      return <Confirm />;
    case 4:
      return <Success />;
    default:
      console.log("This is a multi-step form built with React.");
  }
};

export default UserForm;
