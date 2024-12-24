import "./Home.css";
import { Card, Button } from "react-bootstrap";
import LandingPage from "./LandingPage";
import { useState } from "react";
import ViewMore from "../components/ViewMore";
import Welcome from "../components/Modals/Welcome";

function Home() {
  const [show, setShow] = useState(false);
  const [showOne, setShowOne] = useState(false);

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
  ];

  return (
    <div className="landing-page">
      <header className="header">
        <LandingPage />
      </header>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="feature-cards">
            {[
              {
                iconClass: "fa-paint-brush",
                title: "Beautiful Templates",
                description:
                  "Access a variety of professionally designed email templates to get started quickly.",
              },
              {
                iconClass: "fa-cogs",
                title: "Easy Customization",
                description:
                  "Customize company logos, names, and content with our intuitive editor.",
              },
              {
                iconClass: "fa-envelope",
                title: "Effortless Delivery",
                description:
                  "Download HTML, copy code, or send test emails in a single click.",
              },
            ].map((feature, index) => (
              <div className="card" key={index}>
                <i className={`fa ${feature.iconClass} icon`}></i>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="templates mb-3" id="templates">
        <div className="container">
          <h2 className="section-title">Explore Our Templates</h2>
          <div className="template-gallery">
            {templates.map((template, index) => (
              <Card className="card" key={index}>
                <div className="image-container">
                  <Card.Img
                    variant="top"
                    src={template.imgSrc}
                    className="card-image"
                    alt={template.title}
                  />
                  <button
                    className="choose-button"
                    onClick={() => setShowOne(true)}
                    aria-label={`Choose ${template.title} Template`}
                  >
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
        <div className="d-flex align-items-center justify-content-center mt-5">
          <Button variant="success" onClick={() => setShow(true)}>
            VIEW MORE
          </Button>
        </div>
        <ViewMore show={show} setShow={setShow} />
        <Welcome show={showOne} setShow={setShowOne} />
      </section>
    </div>
  );
}

export default Home;
