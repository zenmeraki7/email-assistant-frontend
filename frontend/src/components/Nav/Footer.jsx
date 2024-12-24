import { MDBFooter, MDBIcon, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { FaFacebook, FaTwitter, FaGoogle, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io";

const socialIcons = [
  { icon: <FaFacebook size="1.5rem" />, label: "Facebook", link: "#" },
  { icon: <FaTwitter size="1.5rem" />, label: "Twitter", link: "#" },
  { icon: <FaGoogle size="1.5rem" />, label: "Google", link: "#" },
  { icon: <FaInstagram size="1.5rem" />, label: "Instagram", link: "#" },
  { icon: <CiLinkedin size="1.5rem" />, label: "LinkedIn", link: "#" },
  { icon: <IoLogoGithub size="1.5rem" />, label: "GitHub", link: "#" },
];

function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      {/* Social Network Section */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          {socialIcons.map(({ icon, label, link }, index) => (
            <a
              key={index}
              href={link}
              className="me-4 text-reset"
              aria-label={`Follow us on ${label}`}
            >
              {icon}
            </a>
          ))}
        </div>
      </section>

      {/* Footer Content Section */}
      <section>
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            {/* Company Info */}
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Company Name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit.
              </p>
            </MDBCol>

            {/* Products */}
            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              {["Angular", "React", "Vue", "Laravel"].map((product, index) => (
                <p key={index}>
                  <a href="#!" className="text-reset" aria-label={`Learn more about ${product}`}>
                    {product}
                  </a>
                </p>
              ))}
            </MDBCol>

            {/* Useful Links */}
            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful Links</h6>
              {["Pricing", "Settings", "Orders", "Help"].map((link, index) => (
                <p key={index}>
                  <a href="#!" className="text-reset" aria-label={`Go to ${link}`}>
                    {link}
                  </a>
                </p>
              ))}
            </MDBCol>

            {/* Contact Info */}
            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> +01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* Footer Bottom Section */}
      <div className="text-center p-4 footer-bottom">
        © 2021 Copyright:{" "}
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;
