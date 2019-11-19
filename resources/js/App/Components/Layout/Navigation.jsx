import React from 'react';
import { Fragment } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

// import 'bootstrap/dist/css/bootstrap.css';
// import './navigation.css';



//CHECK THE CLASS NAME ON THE MASTER BRANCH!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

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
    return <div>
      <Fragment>
      
      <Navbar light expand="md" style={{ padding: "2em", backgroundColor:"#427172"}}>
        <NavbarBrand href="/" className="font-weight-bold">E-Market</NavbarBrand>
        
        <InputGroup>
        <Input/>
        <InputGroupAddon addonType="append">
          <InputGroupText>Search</InputGroupText>
        </InputGroupAddon>
      </InputGroup>


        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            
          <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Shop
                </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Furniture
                  </DropdownItem>
                <DropdownItem>
                  Clothing
                  </DropdownItem>
                <DropdownItem>
                  Souvenirs
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                  </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/sell_on/">Sell On</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/register/">Register</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/login/">Log In</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        
      </Navbar>
      
      </Fragment>
    </div>
  }
}