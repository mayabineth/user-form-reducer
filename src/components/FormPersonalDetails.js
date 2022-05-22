import React from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useGlobalContext } from "../context";

const FormPersonalDetails = () => {
  const {
    nextStep,
    prevStep,
    country,
    city,
    bio,
    setCountry,
    setCity,
    setBio,
  } = useGlobalContext();

  return (
    <MuiThemeProvider>
      <>
        <Dialog open fullWidth maxWidth="sm">
          <AppBar title="Enter Personal Details" />
          <TextField
            placeholder="Enter Your Country"
            label="Country"
            onChange={(e) => setCountry(e.target.value)}
            defaultValue={country}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="Enter Your City"
            label="City"
            onChange={(e) => setCity(e.target.value)}
            defaultValue={city}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="Enter Your Bio"
            label="Bio"
            onChange={(e) => setBio(e.target.value)}
            defaultValue={bio}
            margin="normal"
            fullWidth
          />
          <br />

          <Button color="secondary" variant="contained" onClick={prevStep}>
            Back
          </Button>
          <Button color="primary" variant="contained" onClick={nextStep}>
            Continue
          </Button>
        </Dialog>
      </>
    </MuiThemeProvider>
  );
};

export default FormPersonalDetails;
