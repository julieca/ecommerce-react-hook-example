import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  useParams, useHistory
} from "react-router-dom";


import { getCategoryProduct, purchase, fav } from '../actions';
import {
  Grid, IconButton, Button
} from '@material-ui/core';
import { Favorite, ArrowBack } from '@material-ui/icons';
import "../assets/css/Detail.css";

function Detail(props) {
  const { id } = useParams();
  const [product, setProduct] = React.useState({});
  const history = useHistory();

  useEffect(() => {
    if (!props.data.productPromo) {
      props.getCategoryProduct();
    }
  }, []);
  useEffect(() => {
    if (props.data.productPromo && Object.keys(product).length == 0) {
      const selected = props.data.productPromo.find(p => p.id == id);
      if (selected) {
        setProduct(selected);
      }
    }
  });


  return (
    // 
    <div>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} sm={9} md={6}>
          <Grid container justify="center">
            <Grid item className="content">
              <IconButton aria-label="back" onClick={() => history.goBack()}>
                <ArrowBack />
              </IconButton>
              <img src={product.imageUrl} alt={product.title} className="card-img" />
              <div className="card-text">
                {product.title}
                <IconButton color={product.loved ? "primary" : "default"} aria-label="back" onClick={() => props.fav(product.id)}>
                  <Favorite />
                </IconButton>
              </div>
              <div className="card-desc">{product.description}</div>
              <div className="divider"></div>
              <div className="card-action">
                <span>{product.price}</span>
                <Button variant="contained" color="primary" disableElevation onClick={() => { props.purchase(product); history.push('/history'); }}>
                  Buy
                </Button>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = ({ data }) => {
  return { data }
}
const mapDispatchToProps = dispatch => ({
  getCategoryProduct: () => dispatch(getCategoryProduct()),
  purchase: (p) => dispatch(purchase(p)),
  fav: (id) => dispatch(fav(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
