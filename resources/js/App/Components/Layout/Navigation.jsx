import React from 'react';
import { Collapse, Navbar,NavbarToggler, NavbarBrand,Nav, NavItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';


export default class Navigation extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
    
    
      <>
      
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">E-Market</NavbarBrand>
        
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>      
            <NavItem>     
                <Link to="/register">Register</Link>
            </NavItem>
            <NavItem>       
                <Link to="/login">Log In</Link>     
            </NavItem>
          </Nav>
        </Collapse>   
      </Navbar>
      </>
 
    )
  }
}