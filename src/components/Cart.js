import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { remove } from '../store/cartSlice'

const Cart = () => {
  const products = useSelector(state => state.cart)
  const dispatch = useDispatch();

  const removeItem = (id) =>{
    dispatch(remove(id))
  }

  const cards = products.map(product => (
    <div className="col-md-12" style={{marginBottom : '15px'}}>
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
        <Button variant="danger" onClick={()=> removeItem(product.id)}>Remove Item</Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <div className='row' style={{marginLeft : '38rem'}}>
      {cards}
    </div>
    
  )
}

export default Cart