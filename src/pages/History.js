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
import BarDisplay from "./BarDisplay";

function History(props) {
  const history = useHistory();

  return (
    //
    <div>
      <IconButton aria-label="back" onClick={() => history.goBack()}>
        <ArrowBack />
      </IconButton>
      <span>Purchase History</span>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} sm={9} md={6}>
          {props.histories && props.histories.map((h, i) =>
              <BarDisplay key={i}
              id = {h.id}
              imageUrl = {h.imageUrl}
              title = {h.title}
              price = {h.price}/>
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
