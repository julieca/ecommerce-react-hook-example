import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  useParams, useHistory
} from "react-router-dom";


import { getCategoryProduct } from '../actions';
import {
  Grid, OutlinedInput, InputAdornment, BottomNavigation,
  BottomNavigationAction
} from '@material-ui/core';
import { Home, Favorite, ShoppingCart, History, Search } from '@material-ui/icons';
import "../assets/css/Home.css";

const navigation = { Home, Favorite, ShoppingCart, History };
console.log(navigation)
function App(props) {
  console.log(props)
  console.log(props.data.category)
  // const { token } = useParams();
  const [nav, setNav] = React.useState(0);
  const history = useHistory();

  useEffect(() => {
    props.getCategoryProduct();
  }, []);



  return (
    <div className="App">

      <div className="App-header">
        <Grid container justify="center" alignItems="center">
          <Grid item xs={8} sm={6} md={4}>
            <Grid container justify="center" spacing={2}>
              <Grid item>
                <OutlinedInput fullWidth variant="outlined"
                  startAdornment={
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  }
                />
                <Grid container justify="center" spacing={2}>
                  {props.data.category && props.data.category.map((c, i) =>
                    <Grid key={i} item>
                      <img href={c.imageUrl} alt={c.name} />
                      <span>{c.name}</span>
                    </Grid>
                  )}
                </Grid>




              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <BottomNavigation showLabels
          className="nav"
          value={nav}
          onChange={(event, newValue) => {
            setNav(newValue);
          }}

        >
          <BottomNavigationAction label="Home" icon={<Home />} />
          <BottomNavigationAction label="Favorite" icon={<Favorite />} />
          <BottomNavigationAction label="ShoppingCart" icon={<ShoppingCart />} />
          <BottomNavigationAction label="History" icon={<History />} />
          {/* {Object.keys(navigation).forEach(i => <BottomNavigationAction key={i} label={i} />)} */}

        </BottomNavigation>
      </div>
    </div >
  );
}

const mapStateToProps = state => {
  return state
};
const mapDispatchToProps = dispatch => ({
  getCategoryProduct: () => dispatch(getCategoryProduct())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
