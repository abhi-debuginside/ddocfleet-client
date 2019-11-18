import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ApiService from '../../services/ApiService';

class CreateClinic extends Component {
  
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      registrationNumber: "",
      address1: "",
      landmark: "",
      city: "",
      zip: "",
      state: "",
      country: ""
    };
  }

  // functions
  addClinic = e => {
    e.preventDefault();
    alert('hello got it');
    const clinic = {
      displayName: this.state.displayName,
      registrationNumber: this.state.registrationNumber,
      address1: this.state.address1,
      landmark: this.state.landmark,
      city: this.state.city,
      zip: this.state.zip,
      state: this.state.state,
      country: this.state.country,
    };
    ApiService.addClinic(clinic);
    console.log("Clinic saved successfully...");
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.type.value });
  };

  // render dom elements
  render() {
    return (
      <form  novalidation>
        <Grid>
          <Typography variant="title" margin={2} component="h3">
            Create a clinic
          </Typography>
        </Grid>

        <Grid
          container
          spacing={3}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid Item xs={12} sm={6}>
            <TextField
              required
              id="displayName"
              name="displayName"
              label="Clinic Name"
              fullWidth
              autoComplete="fname"
              value={this.state.displayName}
            />
          </Grid>
         
        </Grid>
      </form>
    );
  }
}

export default CreateClinic;
