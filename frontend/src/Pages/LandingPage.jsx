import './LandingPage.css'
import landing1 from '../assets/images/landing1.png'

function LandingPage() {
  return (
    <>
  <div className="landing-container">
  <div className="landing-content">
    <div className="image-container1">
      <img src={landing1} alt="Stunning Emails" className="landing-image" />
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


    </>
  )
}

export default LandingPage