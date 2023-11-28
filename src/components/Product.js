import React from "react";
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch , useSelector} from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";
import Alert from 'react-bootstrap/Alert'

const Product = () => {
  const dispatch = useDispatch();
  const {data: products, status} = useSelector(state => state.products)
  useEffect(() => {
    dispatch(getProducts())
  }, []);

  if(status==='error'){
    return <Alert key="danger" variant="danger">Something went wrong.Try Again Later</Alert>
  }
  
  if(status==='loading'){
    return <p>Loading...</p>
  }

  

  const addToCart = (product) =>{
    dispatch(add(product))
  }

  const cards = products.map(product => (
    <div className="col-md-3" style={{marginBottom : '15px'}}>
      <Card key={product.id} className="h-100" style={{ width: "18rem" }}>
        <div className="text-centre">
        <Card.Img variant="top" src={product.images[0]} style={{width:'100px' , height : '130px', marginTop : '10px'}} />
        </div>        
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            INR : {product.price}
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{background : 'white'}}>
        <Button variant="primary" onClick={()=> addToCart(product)}>Add to Cart</Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <div>
      <h1>Product</h1>
      <div className="row">
        {cards}
      </div> 
    </div>
  );
};

export default Product;
