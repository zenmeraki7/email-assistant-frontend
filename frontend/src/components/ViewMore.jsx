import { Modal, Card } from "react-bootstrap";
// import "./ViewMore.css";

function ViewMore({ show, setShow }) {
  const templates = [
    {
      title: "Thank You Mail",
      imgSrc: "https://i.pinimg.com/originals/e4/b6/be/e4b6bebc59574c38d54cbd5efd699636.png",
    },
    {
      title: "Subscription Renewal",
      imgSrc: "https://designmodo.com/wp-content/uploads/2021/06/1-Subscription-Confirmation-Newsletter-from-Hubspot.jpg",
    },
    {
      title: "Feedback",
      imgSrc: "https://wordkraft.ai/wp-content/uploads/2022/10/image-81.png",
    },
    {
      title: "Welcome Mail",
      imgSrc: "https://venngage-wordpress.s3.amazonaws.com/uploads/2021/06/Welcome-Email-Design-Lynk.png",
    },
    // Add more templates as needed
  ];

  return (
    <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <h2>Our Templates</h2>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="template-gallery">
            {templates.map((template, index) => (
              <Card key={index} className="template-card">
                <div className="image-container">
                  <Card.Img
                    variant="top"
                    src={template.imgSrc}
                    className="card-image"
                    alt={`${template.title} Template`}
                  />
                  <button className="choose-button" aria-label={`Choose ${template.title} Template`}>
                    Choose Template
                  </button>
                </div>
                <Card.Body>
                  <Card.Title>{template.title}</Card.Title>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ViewMore;
