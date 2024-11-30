import { Modal ,Button} from "react-bootstrap"
import './Styles.css'
import { FiEdit } from "react-icons/fi";


function WelcomeCustomization(props) {
  return (
    <> <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
     className="modal-right ">
        {/* <Modal.Header closeButton> */}
        <Modal.Title id="contained-modal-title-vcenter" className="d-flex align-items-center justify-content-center mt-3">
    <span><FiEdit /></span> <span className="ms-1">Edit Here!</span>
      </Modal.Title>
        {/* </Modal.Header> */}
    <Modal.Body>
    <div className="container p-2">
     <div className="p-2">
        <h6>Change Company Name:</h6>
        <input type="text" className="inp-box"/>
        <button className="ms-2 me-1 change">Change</button>
     </div>
     <div className="p-2">
        <h6>Change Company Logo:</h6>
        <input type="file"  className="inp-box"/>
        <button className="ms-2 me-1 change">Change</button>
     </div>
     {/* <div className="p-2">
        <h6>Edit Content:</h6>
        <textarea name="" id="" className="inp-box"></textarea>
        <button className="ms-2 me-1 change">Change</button>
     </div> */}
     <div className="p-2">
        <h6>Change links:</h6>
        <input type="text"  className="inp-box"/>
        <button className="ms-2 me-1 change">Change</button>
     </div>
    
     </div>
    </Modal.Body>
    <Modal.Footer >
      <Button variant="success" className="mb-2">Send Email</Button>
      <Button onClick={props.onHide} className="mb-2">Close</Button>
    </Modal.Footer>
  </Modal></>
  )
}

export default WelcomeCustomization