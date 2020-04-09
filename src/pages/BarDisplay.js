import React from 'react';
import {
  useParams, useHistory
} from "react-router-dom";
import {
  Grid, IconButton
} from '@material-ui/core';

const BarDisplay = props =>{
  const history = useHistory();
  return(
    <Grid container justify="center" onClick={()=>history.push(`/detail/${props.id}`)}>
      <Grid item xs={6}>
        <img src={props.imageUrl} alt={props.title} className="img" />
      </Grid>
      <Grid item xs={6}>
        <Grid container justify="center" direction="column">
          <Grid item xs={12} className="text">{props.title}</Grid>
          <Grid item xs={12} className="text">{props.price}</Grid>
        </Grid>
      </Grid>
    </Grid>
    );
}

export default BarDisplay;
