import "./Home.css";
import { Carousel, Card, Button } from "react-bootstrap";
import LandingPage from "./LandingPage";
// import pic1 from "../assets/images/pic1.jpg";
// import pic2 from "../assets/images/pic2.jpg";
// import pic3 from "../assets/images/pic3.jpg";
// import pic4 from "../assets/images/pic4.jpg";
// import pic5 from "../assets/images/pic5.jpg";

function Home() {
  return (
    <>
      <div className="landing-page">
        {/* Header Section */}
        <header className="header">
          <LandingPage/>
  {/* <div className="container">
    <Carousel className="carousel-container">
      <Carousel.Item interval={1000}>
        <div className="container d-flex">
          <div className="col">
            <img src={pic5} alt="" height={"450px"} width={"100%"} />
          </div>
          <div className="col d-flex flex-column align-items-center justify-content-center">
            <h1 className="title">Email Drafter Pro</h1>
            <p className="subtitle">
              Create. Customize. Send. Simplify your email communication with ease!
            </p>
            <button className="cta-button">Get Started</button>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <div className="container d-flex">
        <div className="col d-flex flex-column align-items-center justify-content-center">
            <h1 className="title">Email Drafter Pro</h1>
            <p className="subtitle">
              Create. Customize. Send. Simplify your email communication with ease!
            </p>
            <button className="cta-button">Get Started</button>
          </div>
          <div className="col">
            <img src={pic2} alt="" height={"450px"} width={"100%"} />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="container d-flex">
          <div className="col">
            <img src={pic3} alt="" height={"450px"} width={"100%"} />
          </div>
          <div className="col d-flex flex-column align-items-center justify-content-center">
            <h1 className="title">Email Drafter Pro</h1>
            <p className="subtitle">
              Create. Customize. Send. Simplify your email communication with ease!
            </p>
            <button className="cta-button">Get Started</button>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="container d-flex">
        <div className="col d-flex flex-column align-items-center justify-content-center">
            <h1 className="title">Email Drafter Pro</h1>
            <p className="subtitle">
              Create. Customize. Send. Simplify your email communication with ease!
            </p>
            <button className="cta-button">Get Started</button>
          </div>
          <div className="col">
            <img src={pic4} alt="" height={"450px"} width={"100%"} />
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  </div> */}
</header>


        {/* Features Section */}
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
        <section className="templates mb-3">
          <div className="container">
            <h2 className="section-title">Explore Our Templates</h2>
            <div className="template-gallery">
              <div>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="https://img.freepik.com/free-vector/product-tour-concept-illustration_114360-2678.jpg?t=st=1732623217~exp=1732626817~hmac=9c4a6ed138d62d2978e9c85b53ec4fac2461403fadedef08d04f7fbf201d7ab6&w=996"  height={'200px'}/>
                  <Card.Body>
                    <Card.Title>Welcome Mail</Card.Title>
                    {/* <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text> */}
                    <Button variant="primary">Choose Template</Button>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="https://img.freepik.com/free-vector/thank-you-card-concept-illustration_114360-27731.jpg?t=st=1732623278~exp=1732626878~hmac=7c68d8be217ca49c199f754c8e01a81961262709733982212b6d97eed3cbf9e9&w=740" height={'200px'}/>
                  <Card.Body>
                    <Card.Title>Thankyou Mail</Card.Title>
                    {/* <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text> */}
                    <Button variant="primary">Choose Template</Button>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="https://img.freepik.com/free-vector/newsletter-concept-illustration_114360-28709.jpg?ga=GA1.1.1722886742.1725226493&semt=ais_hybrid"  height={'200px'}/>
                  <Card.Body>
                    <Card.Title>Subscription-Renewal Reminder</Card.Title>
                    {/* <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text> */}
                    <Button variant="primary">Choose Template</Button>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="https://img.freepik.com/free-vector/recommendation-letter-concept-illustration_114360-4314.jpg?ga=GA1.1.1722886742.1725226493&semt=ais_hybrid" height={'200px'}/>
                  <Card.Body>
                    <Card.Title>Feedback</Card.Title>
                    {/* <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text> */}
                    <Button variant="primary">Choose Template</Button>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="https://img.freepik.com/free-vector/new-message-concept-landing-page-template_23-2148292734.jpg?ga=GA1.1.1722886742.1725226493&semt=ais_hybrid" height={'200px'}/>
                  <Card.Body>
                    <Card.Title>Password Reset</Card.Title>
                    {/* <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text> */}
                    <Button variant="primary">Choose Template</Button>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="https://img.freepik.com/free-vector/envelope-concept-illustration_114360-1363.jpg?ga=GA1.1.1722886742.1725226493&semt=ais_hybrid" height={'200px'}/>
                  <Card.Body>
                    <Card.Title>Order Confirmation</Card.Title>
                    {/* <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text> */}
                    <Button variant="primary">Choose Template</Button>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="https://img.freepik.com/free-vector/email-campaign-concept-illustration_114360-21271.jpg?ga=GA1.1.1722886742.1725226493&semt=ais_hybrid" height={'200px'}/>
                  <Card.Body>
                    <Card.Title>Shipping Confirmation</Card.Title>
                    {/* <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text> */}
                    <Button variant="primary">Choose Template</Button>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="https://img.freepik.com/free-vector/email-campaign-concept-illustration_114360-1633.jpg?ga=GA1.1.1722886742.1725226493&semt=ais_hybrid" height={'200px'}/>
                  <Card.Body>
                    <Card.Title>Discount Offer</Card.Title>
                    {/* <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text> */}
                    <Button variant="primary">Choose Template</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
