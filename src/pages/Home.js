import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  useParams, useHistory
} from "react-router-dom";


import { getCategoryProduct } from '../actions';
import {
  Grid, OutlinedInput, InputAdornment, BottomNavigation,
  BottomNavigationAction, Paper
} from '@material-ui/core';
import { Home, Favorite, ShoppingCart, History, Search } from '@material-ui/icons';
import "../assets/css/Home.css";

const navigation = { Home, Favorite, ShoppingCart, History };
console.log(navigation)
function App(props) {
  let history = useHistory();
  // const { token } = useParams();
  const [nav, setNav] = React.useState(0);
  useEffect(() => {
    props.getCategoryProduct();
  }, []);
  return (
    <div className="App">

      <div className="App-header">
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} sm={9} md={6}>
            <Grid container justify="center">
              <Grid item className="content">
                {/* search input */}
                <OutlinedInput fullWidth variant="outlined"
                onClick={()=>history.push('/search')}
                  startAdornment={
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  }
                />
                <div className="divider"></div>
                {/* category */}
                <Grid container justify="center" spacing={2} className="scrollable">
                  {props.data.category && props.data.category.map((c, i) =>
                    <Grid key={i} item>
                      <img src={c.imageUrl} alt={c.name} className="img-thumbnail" />
                      <div>{c.name}</div>
                    </Grid>
                  )}
                </Grid>
                {/* <div className="outer">
                  {props.data.category && props.data.category.map((c, i) =>
                    <div key={i} className="inner">
                      <img src={c.imageUrl} alt={c.name} className="img-thumbnail" />
                      <div>{c.name}</div>
                    </div>
                  )}
                </div> */}
                <div className="divider"></div>
                {/* product */}
                <Grid container justify="center" spacing={2}>
                  {props.data.productPromo && props.data.productPromo.map((p, i) =>
                    <Grid key={i} item style={{ display: "inline-block" }} className="card">
                      <Paper elevation={3} onClick={() => history.push(`/detail/${p.id}`)}>
                        <img src={p.imageUrl} alt={p.title} className="card-img" />
                        <div className="card-text">{p.title}</div>
                      </Paper>
                    </Grid>
                  )}
                </Grid>


              </Grid>
            </Grid>
          </Grid>
        </Grid>


        
        <div className="end"></div>
        <BottomNavigation showLabels
          className="nav"
          value={nav}
          onChange={(event, newValue) => {
            setNav(newValue);
          }}

        >
          <BottomNavigationAction label="Home" icon={<Home />} />
          <BottomNavigationAction label="Favorite" icon={<Favorite />} />
          <BottomNavigationAction label="Cart" icon={<ShoppingCart />} onClick={() => history.push("/history")} />
          <BottomNavigationAction label="Profile" icon={<History />} />
          {/* {Object.keys(navigation).forEach(i => <BottomNavigationAction key={i} label={i} />)} */}

        </BottomNavigation>



      </div>
    </div>
  );
}

const mapStateToProps = ({ data }) => {
  return { data }
};
const mapDispatchToProps = dispatch => ({
  getCategoryProduct: () => dispatch(getCategoryProduct())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
