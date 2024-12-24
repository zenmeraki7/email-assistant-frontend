import { Modal, Button } from "react-bootstrap";
import { FiEdit } from "react-icons/fi";
import "./Styles.css";

function WelcomeCustomization({ onHide, ...props }) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      className="modal-right"
    >
      {/* Modal Header */}
      <Modal.Title
        id="contained-modal-title-vcenter"
        className="d-flex align-items-center justify-content-center mt-3"
      >
        <FiEdit /> <span className="ms-1">Edit Here!</span>
      </Modal.Title>

      {/* Modal Body */}
      <Modal.Body>
        <div className="container p-2">
          {/* Company Name Section */}
          <div className="p-2">
            <h6>Change Company Name:</h6>
            <input type="text" className="input-box" aria-label="Company Name" />
            <button className="btn btn-primary ms-2 change-btn">
              Change
            </button>
          </div>

          {/* Company Logo Section */}
          <div className="p-2">
            <h6>Change Company Logo:</h6>
            <input type="file" className="input-box" aria-label="Company Logo" />
            <button className="btn btn-primary ms-2 change-btn">
              Change
            </button>
          </div>

          {/* Links Section */}
          <div className="p-2">
            <h6>Change Links:</h6>
            <input type="text" className="input-box" aria-label="Links" />
            <button className="btn btn-primary ms-2 change-btn">
              Change
            </button>
          </div>
        </div>
      </Modal.Body>

      {/* Modal Footer */}
      <Modal.Footer>
        <Button variant="success" className="send-email-btn">
          Send Email
        </Button>
        <Button onClick={onHide} className="close-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default WelcomeCustomization;
