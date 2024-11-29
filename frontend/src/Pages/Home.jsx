import "./Home.css";
import { Card, Button } from "react-bootstrap";
import LandingPage from "./LandingPage";
import { useState } from "react";
import ViewMore from "../components/ViewMore";
import Welcome from "../components/Modals/Welcome";

function Home() {
  const [show, setShow] = useState(false);
  const [showOne, setShowOne] = useState(false);
  return (
    <>
      <div className="landing-page">
        <header className="header">
          <LandingPage />
        </header>

        <section className="features">
          <div className="container">
            <h2 className="section-title">Why Choose Us?</h2>
            <div className="feature-cards">
              <div className="card">
                <i className="fa fa-paint-brush icon"></i>
                <h3>Beautiful Templates</h3>
                <p>
                  Access a variety of professionally designed email templates to
                  get started quickly.
                </p>
              </div>
              <div className="card">
                <i className="fa fa-cogs icon"></i>
                <h3>Easy Customization</h3>
                <p>
                  Customize company logos, names, and content with our intuitive
                  editor.
                </p>
              </div>
              <div className="card">
                <i className="fa fa-envelope icon"></i>
                <h3>Effortless Delivery</h3>
                <p>
                  Download HTML, copy code, or send test emails in a single
                  click.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Templates Section */}
        <section className="templates mb-3" id="templates">
          <div className="container">
            <h2 className="section-title">Explore Our Templates</h2>
            <div className="template-gallery">
              <div>
                <Card className="card">
                  <div className="overlay"></div>
                  <div className="image-container">
                    <Card.Img
                      variant="top"
                      src="https://i.pinimg.com/originals/e4/b6/be/e4b6bebc59574c38d54cbd5efd699636.png"
                      className="card-image"
                    />
                    <button className="choose-button" onClick={() => setShowOne(true)}>Choose Template</button>
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
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-5">
            <Button variant="success" onClick={() => setShow(true)}>
              VIEW MORE
            </Button>
          </div>
          <ViewMore  show={show} setShow={setShow} />
          <Welcome show={showOne} setShow={setShowOne}/>
        </section>
      </div>
    </>
  );
}

export default Home;
