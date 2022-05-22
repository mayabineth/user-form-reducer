import React from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import Button from "@material-ui/core/Button";
import { useGlobalContext } from "../context";

const Confirm = () => {
  const { nextStep, prevStep, firstName, lastName, email, country, city, bio } =
    useGlobalContext();

  return (
    <MuiThemeProvider>
      <>
        <Dialog open fullWidth maxWidth="sm">
          <AppBar title="Confirm User Data" />
          <List>
            <ListItem>
              <ListItemText primary="First Name" secondary={firstName} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Last Name" secondary={lastName} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Email" secondary={email} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Country" secondary={country} />
            </ListItem>
            <ListItem>
              <ListItemText primary="City" secondary={city} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Bio" secondary={bio} />
            </ListItem>
          </List>
          <br />

          <Button color="secondary" variant="contained" onClick={prevStep}>
            Back
          </Button>

          <Button color="primary" variant="contained" onClick={nextStep}>
            Confirm & Continue
          </Button>
        </Dialog>
      </>
    </MuiThemeProvider>
  );
};

export default Confirm;
