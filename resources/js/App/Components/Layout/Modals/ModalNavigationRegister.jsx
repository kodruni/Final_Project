import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Register from './../../Auth/Register.jsx';

const ModalNavigationRegister= (props) => {
  const {
    buttonLabel,
    className
  } = props;
 
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  
const parentRegisterStatus = () =>  {
  console.log("Hi im register status");
  setModal(false);
}
  
// try to read = https://github.com/rohan-paul/Awesome-JavaScript-Interviews/blob/master/React/pass-props-from-Child-to-parent-Component-communication.md

  return (
    <div>
      <Button color="primary" onClick={toggle}>{buttonLabel} Register</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Register {...props} modalStatus={modal} childRegisterStatus = {parentRegisterStatus}/>
        </ModalBody>
      </Modal>
    </div>
  );
}
export default ModalNavigationRegister;