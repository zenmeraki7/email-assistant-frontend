import './LandingPage.css';
import img2 from '../assets/images/img2.png';
import Header from '../components/Nav/Header';

function LandingPage() {
  return (
    <section id='home'>
    <div className="landing-container">
      <Header/>
    <div className="landing-content">
      <div className="image-container1">
        <img src={img2} alt="Stunning Emails" className="landing-image" />
      </div>
  
      <div className="content">
        <h1 className="heading">Create Stunning Emails Effortlessly</h1>
        <p className="subtext">Bring your ideas to life with vibrant templates and seamless editing.</p>
        <div className="button-group">
          <button className="start-btn">Get Started For Free</button>
          <a href="#templates"><button className="templates-btn">View Templates</button></a>
        </div>
      </div>
    </div>
  </div>
    </section>
  
  );
}

export default LandingPage;
