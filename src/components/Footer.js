import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/TEXT+biểu-tượng.png';
import navIcon1 from '../assets/img/icons8-github-1600.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">

          <Col size={12} sm={6}>
            <br></br>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <br></br>
            <div className="social-icon">
              <a href="https://www.facebook.com/quoclam.ly.7"><img src={navIcon2} alt="" /></a>
              <a href="https://www.instagram.com/kasin.lam/"><img src={navIcon3} alt="" /></a>
              <a href="https://github.com/quoclam-doit"><img src={navIcon1} alt="" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
