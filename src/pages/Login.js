



import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  useParams, useHistory
} from "react-router-dom";
import {
  Grid, IconButton, Button, FormGroup,
  FormControlLabel,
  Checkbox
} from '@material-ui/core';
import "../assets/css/Detail.css";

function Detail(props) {
  const history = useHistory();
  const [remember, setRemember] = React.useState(true);

  const goToHome = () => {
    history.push("/home")
  }



  return (
    // 
    <div>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} sm={9} md={6}>
          <Grid container justify="center">
            <Grid item className="content">
              <h3>Login</h3>
              <div>
                <TextField label="Username" variant="outlined" />
                <TextField label="Password" type="password" variant="outlined" />
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox checked={remember} onChange={setRemember(r => !r)} />}
                    label="Gilad Gray"
                  />
                </FormGroup>
                <Button variant="contained" onClick={goToHome}>Login</Button>
              </div>
              <div class="fb-login-button" data-width="" data-size="large" data-button-type="login_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false"></div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
export default Detail;
