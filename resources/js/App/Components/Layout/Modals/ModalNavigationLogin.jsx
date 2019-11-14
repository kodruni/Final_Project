import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Login from './../../Auth/Login.jsx';

const ModalNavigationLogin = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel} Login</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Login />
        </ModalBody>
      </Modal>
    </div>
  );
}
export default ModalNavigationLogin;