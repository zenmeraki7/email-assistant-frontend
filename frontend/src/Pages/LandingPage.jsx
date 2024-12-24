import './LandingPage.css';
import img2 from '../assets/images/img2.png';
import Header from '../components/Nav/Header';

function LandingPage() {
  return (
    <main id="home">
      <div className="landing-container">
        <Header />
        <article className="landing-content">
          <div className="image-container">
            <img src={img2} alt="Illustration of Stunning Emails" className="landing-image" />
          </div>

          <div className="content">
            <h1 className="heading">Create Stunning Emails Effortlessly</h1>
            <p className="subtext">Bring your ideas to life with vibrant templates and seamless editing.</p>
            <div className="button-group">
              <button className="start-btn" aria-label="Get started for free">Get Started For Free</button>
              <a href="#templates" className="templates-btn" aria-label="View available templates">View Templates</a>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}

export default LandingPage;
