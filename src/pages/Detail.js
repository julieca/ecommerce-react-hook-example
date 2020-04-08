import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  useParams, useHistory
} from "react-router-dom";


import { getCategoryProduct } from '../actions';
import {
  Grid, Paper
} from '@material-ui/core';
import { Home, Favorite, ShoppingCart, History, Search } from '@material-ui/icons';
import "../assets/css/Home.css";

function Detail(props) {
  const { id } = useParams();
  const [product, setProduct] = React.useState();
  const history = useHistory();

  useEffect(() => {
    if (!props.data.productPromo) {
      props.getCategoryProduct();
    }
  }, []);
  useEffect(() => {
    if (props.data.productPromo && !product) {
      const selected = props.data.productPromo.find(p => p.id == id);
      if (selected) {
        setProduct(selected)
      }
    }
  });


  return (
    <div>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={8} sm={6} md={4}>
          <Grid container justify="center">
            <Grid item>
              <Paper elevation={3}>
                <img src={product.imageUrl} alt={product.title} className="card-img" />
                <div className="card-text">{product.title}</div>
                <div>{product.description}</div>
                <div>{product.price}</div>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = state => {
  return state
};
const mapDispatchToProps = dispatch => ({
  getCategoryProduct: () => dispatch(getCategoryProduct())
});
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
