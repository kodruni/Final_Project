import React from 'react';
import { Container, Col, Row } from 'reactstrap';

export default class Footer extends React.Component {
  
  render() {
    return(
      <Container className="w-100" fluid style={{ backgroundColor:'#427172', listStyleType:'none', justifyContent:'space-around', padding:'2em'}}>
        <Row>
          
            
              <li>@BOTTCAMP PRG</li>
              <li>TERMS OF USE</li>
              <li>PRIVACY</li>
              <li>COOKIES</li>
              <li>ADS</li>
              <li>PRIVACY SETTING</li>
              <li>SOCIAL CONTACTS</li>
            
          
        </Row>
      </Container>
    )
  }
}