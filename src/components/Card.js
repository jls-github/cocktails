import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';
// import Card.Img from 'react-bootstrap/Card.Img';
// import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
// import App from './App'

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: []
    };
    }
    
    // console.log(this.props.state);
    // console.log("Brian");
    
    // // child component api undefined
    // console.log(this.props.drinks);
    // console.log("Where's my API?");
    
  

  


  render() {
      const btn = document.getElementById('button');
      
      function handleClick(e) {
      e.preventDefault();
      console.log('The button was clicked');
  
    };
      console.log('Testing My Code');
           
      const {drinks} = this.props;
      const {name} = drinks.strDrink
      console.log(name);
      
    
    return (
      <div>
         {this.props.drinks.map(drink => <p key={drink.idDrink}>name={drink.strDrink}</p>)}
        console.log({drinks.strDrink});
         
           <Card style={{ width: '18rem' }} >
              <Card.Img variant="top" src="https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg"></Card.Img>
              <Card.Body>
              <Card.Title><h2>{this.props.name}</h2></Card.Title>
              <Card.Text><h3>Cocktail glass</h3></Card.Text> 
              <Button variant="primary" id='button' onClick={handleClick}>Details</Button>
              </Card.Body>
           </Card>
      </div>
    );
};
}

export default Cards;