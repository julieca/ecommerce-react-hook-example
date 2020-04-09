import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  useHistory
} from "react-router-dom";

import {
  Grid, IconButton
} from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import "../assets/css/History.css";

function History(props) {
  const history = useHistory();

  return (
    // 
    <div>
      <IconButton aria-label="back" onClick={() => history.goBack()}>
        <ArrowBack />
      </IconButton>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} sm={9} md={6}>
          {props.histories && props.histories.map((h, i) =>
            <Grid container justify="center" key={i}>
              <Grid item xs={6}>
                <img src={h.imageUrl} alt={h.title} className="img" />
              </Grid>
              <Grid item xs={6}>
                <Grid container justify="center" direction="column">
                  <Grid item xs={12} className="text">{h.title}</Grid>
                  <Grid item xs={12} className="text">{h.price}</Grid>
                </Grid>
              </Grid>
            </Grid>
          )}

        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = ({ histories }) => {
  return { histories }
}
export default connect(mapStateToProps)(History);
