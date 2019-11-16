import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Login from './../../Auth/Login.jsx';

const ModalNavigationLogin = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const [loginValue, setLoginValue] = useState('Log In')
  const toggle = () => setModal(!modal);

  const parentLoginStatus = () =>  { 
    console.log("Hi im login status");
    setModal(false);
  }

  const parentLoginValue = (value) =>  { 
    console.log("Hi im login Value");
    console.log("props from child", props.loginStatus);
    console.log("props from child", props.loginStatusFromChild);
    setLoginValue(value);
  }
 
  return (
    <div>
  <Button color="danger" onClick={toggle}>{buttonLabel} {loginValue}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Login {...props} modalStatus={modal} childLoginStatus = { parentLoginStatus } childLoginValue = {parentLoginValue} />
        </ModalBody>
      </Modal>
    </div>
  );
}
export default ModalNavigationLogin;