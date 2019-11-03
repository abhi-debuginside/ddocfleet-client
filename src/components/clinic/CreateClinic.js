import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.type.value });
  };

  // render dom elements
  render() {
    return (
      <form container novalidation>
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
          <Grid Item xs={12} sm={6}>
            <TextField
              required
              id="registrationNumber"
              name="registrationNumber"
              label="Registration Number"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Address line 1"
              fullWidth
              autoComplete="billing address-line1"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="landmark"
              name="landmark"
              label="landmark"
              fullWidth
              autoComplete="billing address-line1"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="billing address-level1"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="state"
              name="state"
              label="State/Province/Region"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="billing postal-code"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              fullWidth
              autoComplete="billing country"
            />
          </Grid>
          <Grid item item xs={1}>
            <Button type="submit" variant="contained" color="primary">
              Create
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default CreateClinic;
