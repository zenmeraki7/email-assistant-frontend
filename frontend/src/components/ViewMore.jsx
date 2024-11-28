
import { Modal,Card } from "react-bootstrap"



function ViewMore({show,setShow}) {
    
  return (
    <>

      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
        <h2> Our Templates</h2>
        </Modal.Header>
        <Modal.Body>
          {/* <div className="container d-flex align-items-center justify-content-center"> */}
          <div className="container"> 
            <div className="template-gallery gap-3">
              <div>
                <Card className="card">
                  <div className="overlay"></div>
                  <div className="image-container">
                    <Card.Img
                      variant="top"
                      src="https://i.pinimg.com/originals/e4/b6/be/e4b6bebc59574c38d54cbd5efd699636.png"
                      className="card-image"
                    />
                    <button className="choose-button">Choose Template</button>
                  </div>
                  <Card.Body>
                    <Card.Title>Thank You Mail</Card.Title>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="card">
                  <div className="image-container">
                    <Card.Img
                      variant="top"
                      src="https://designmodo.com/wp-content/uploads/2021/06/1-Subscription-Confirmation-Newsletter-from-Hubspot.jpg"
                      className="card-image"
                    />
                    <button className="choose-button">Choose Template</button>
                  </div>
                  <Card.Body>
                    <Card.Title>Subscription Renewal</Card.Title>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="card">
                  <div className="image-container">
                    <Card.Img
                      variant="top"
                      src="https://wordkraft.ai/wp-content/uploads/2022/10/image-81.png"
                      className="card-image"
                    />
                    <button className="choose-button">Choose Template</button>
                  </div>
                  <Card.Body>
                    <Card.Title>Feedback</Card.Title>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="card">
                  <div className="image-container">
                    <Card.Img
                      variant="top"
                      src="https://venngage-wordpress.s3.amazonaws.com/uploads/2021/06/Welcome-Email-Design-Lynk.png"
                      className="card-image"
                    />
                    <button className="choose-button">Choose Template</button>
                  </div>
                  <Card.Body>
                    <Card.Title>Welcome Mail</Card.Title>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="card">
                  <div className="image-container">
                    <Card.Img
                      variant="top"
                      src="https://venngage-wordpress.s3.amazonaws.com/uploads/2021/06/Welcome-Email-Design-Lynk.png"
                      className="card-image"
                    />
                    <button className="choose-button">Choose Template</button>
                  </div>
                  <Card.Body>
                    <Card.Title>Welcome Mail</Card.Title>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="card">
                  <div className="image-container">
                    <Card.Img
                      variant="top"
                      src="https://venngage-wordpress.s3.amazonaws.com/uploads/2021/06/Welcome-Email-Design-Lynk.png"
                      className="card-image"
                    />
                    <button className="choose-button">Choose Template</button>
                  </div>
                  <Card.Body>
                    <Card.Title>Welcome Mail</Card.Title>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="card">
                  <div className="image-container">
                    <Card.Img
                      variant="top"
                      src="https://venngage-wordpress.s3.amazonaws.com/uploads/2021/06/Welcome-Email-Design-Lynk.png"
                      className="card-image"
                    />
                    <button className="choose-button">Choose Template</button>
                  </div>
                  <Card.Body>
                    <Card.Title>Welcome Mail</Card.Title>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="card">
                  <div className="image-container">
                    <Card.Img
                      variant="top"
                      src="https://venngage-wordpress.s3.amazonaws.com/uploads/2021/06/Welcome-Email-Design-Lynk.png"
                      className="card-image"
                    />
                    <button className="choose-button">Choose Template</button>
                  </div>
                  <Card.Body>
                    <Card.Title>Welcome Mail</Card.Title>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="card">
                  <div className="image-container">
                    <Card.Img
                      variant="top"
                      src="https://venngage-wordpress.s3.amazonaws.com/uploads/2021/06/Welcome-Email-Design-Lynk.png"
                      className="card-image"
                    />
                    <button className="choose-button">Choose Template</button>
                  </div>
                  <Card.Body>
                    <Card.Title>Welcome Mail</Card.Title>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="card">
                  <div className="image-container">
                    <Card.Img
                      variant="top"
                      src="https://venngage-wordpress.s3.amazonaws.com/uploads/2021/06/Welcome-Email-Design-Lynk.png"
                      className="card-image"
                    />
                    <button className="choose-button">Choose Template</button>
                  </div>
                  <Card.Body>
                    <Card.Title>Welcome Mail</Card.Title>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="card">
                  <div className="image-container">
                    <Card.Img
                      variant="top"
                      src="https://venngage-wordpress.s3.amazonaws.com/uploads/2021/06/Welcome-Email-Design-Lynk.png"
                      className="card-image"
                    />
                    <button className="choose-button">Choose Template</button>
                  </div>
                  <Card.Body>
                    <Card.Title>Welcome Mail</Card.Title>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="card">
                  <div className="image-container">
                    <Card.Img
                      variant="top"
                      src="https://venngage-wordpress.s3.amazonaws.com/uploads/2021/06/Welcome-Email-Design-Lynk.png"
                      className="card-image"
                    />
                    <button className="choose-button">Choose Template</button>
                  </div>
                  <Card.Body>
                    <Card.Title>Welcome Mail</Card.Title>
                  </Card.Body>
                </Card>
              </div>
              
            </div>
          </div>
          {/* </div> */}
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ViewMore