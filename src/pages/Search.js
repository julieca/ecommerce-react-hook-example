import React, { useEffect }  from 'react';
import { connect } from 'react-redux';

import {
  useHistory
} from "react-router-dom";

import {
  Grid, IconButton, Input
} from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import BarDisplay from "./BarDisplay";
import { getCategoryProduct } from '../actions';


// function aa (){
//   if(datares){
//     return(
//     datares.map((h,i)=>
//         <BarDisplay
//       id = {i}
//       imageUrl = {h.imageUrl}
//       title = {h.title}
//       price = {h.price}/>)
//   }

//   return false;
// };

const Search = props => {

  const [keyword, setKeyword]= React.useState('');
  const [datares, setDatares] = React.useState([]);
  const history = useHistory();

  useEffect(() => {
    props.getCategoryProduct();
  }, []);


  return(
    //
    <div>
      <IconButton aria-label="back" onClick={() => history.goBack()}>
        <ArrowBack />
      </IconButton>
      <Input type="text"
      onChange={(input)=>{
        setKeyword(input.target.value);
        const result = props.data.productPromo.filter(
        product =>product.title.includes(keyword));
        setDatares(result);
        }}

      />
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} sm={9} md={6}>

          {datares && datares.map((h,i)=>
              <BarDisplay key={i}
              id={h.id}
              imageUrl = {h.imageUrl}
              title = {h.title}
              price = {h.price}/>
          )}

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
});
export default connect(mapStateToProps, mapDispatchToProps)(Search);
