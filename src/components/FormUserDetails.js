import React from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useGlobalContext } from "../context";

const FormUserDetails = () => {
  const { nextStep, firstName, lastName, email, setFN, setLN, setEmail } =
    useGlobalContext();
  return (
    <MuiThemeProvider>
      <>
        <Dialog open fullWidth maxWidth="sm">
          <AppBar title="Enter User Details" />
          <TextField
            placeholder="Enter Your First Name"
            label="First Name"
            onChange={(e) => setFN(e.target.value)}
            defaultValue={firstName}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="Enter Your Last Name"
            label="Last Name"
            onChange={(e) => setLN(e.target.value)}
            defaultValue={lastName}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="Enter Your Email"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            defaultValue={email}
            margin="normal"
            fullWidth
          />
          <br />
          <Button color="primary" variant="contained" onClick={nextStep}>
            Continue
          </Button>
        </Dialog>
      </>
    </MuiThemeProvider>
  );
};

export default FormUserDetails;
