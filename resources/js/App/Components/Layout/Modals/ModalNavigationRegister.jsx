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
  return (
    <div>
      <Button color="primary" onClick={toggle}>{buttonLabel} Register</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Register />
        </ModalBody>
      </Modal>
    </div>
  );
}
export default ModalNavigationRegister;