import { useState } from "react";
import welcome from "../templates/welcome.html";
import { Modal } from "react-bootstrap";
import "./Styles.css";
import WelcomeCustomization from "./WelcomeCustomization";

function Welcome({ show, setShow }) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <h2>Welcome</h2>
      </Modal.Header>
      <Modal.Body>
        <div className="container mt-2 p-1">
          <div className="mt-3 p-1">
            <iframe
              src={welcome}
              title="Email Template"
              width="100%"
              height="400px"
              style={{ border: "none", marginTop: "5px" }}
            />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <button
              className="btn bg-warning text-light"
              onClick={() => setModalShow(true)} >
              Customize
            </button>
            <WelcomeCustomization
            MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}/>
          </div>
        </div>
      </Modal.Body>
     

    </Modal>
  );
}

export default Welcome;
