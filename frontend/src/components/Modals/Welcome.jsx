import { useState } from "react";
import { Modal } from "react-bootstrap";
import welcomeTemplate from "../templates/welcome.html";
import "./Styles.css";
import WelcomeCustomization from "./WelcomeCustomization";

function Welcome({ show, setShow }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModalClose = () => setShow(false);
  const handleCustomizationOpen = () => setIsModalVisible(true);
  const handleCustomizationClose = () => setIsModalVisible(false);

  return (
    <Modal show={show} fullscreen={true} onHide={handleModalClose}>
      <Modal.Header closeButton>
        <h2>Welcome</h2>
      </Modal.Header>
      <Modal.Body>
        <div className="container mt-2 p-1">
          {/* Template Section */}
          <div className="mt-3 p-1">
            <iframe
              src={welcomeTemplate}
              title="Email Template"
              className="welcome-template-iframe"
            />
          </div>
          {/* Button Section */}
          <div className="d-flex align-items-center justify-content-center">
            <button
              className="btn bg-warning text-light"
              onClick={handleCustomizationOpen}
              aria-label="Customize Welcome Email"
            >
              Customize
            </button>
          </div>
        </div>
        {/* Customization Modal */}
        <WelcomeCustomization
          show={isModalVisible}
          onHide={handleCustomizationClose}
        />
      </Modal.Body>
    </Modal>
  );
}

export default Welcome;
