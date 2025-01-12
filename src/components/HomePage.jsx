import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { 
  Navbar, 
  Nav, 
  Container, 
  Card, 
  Row, 
  Col, 
  Button,
  Collapse
} from 'react-bootstrap';
import { Camera } from 'lucide-react';

const HomePage = () => {
  const [showHeader, setShowHeader] = React.useState(false);

  const products = [
    { id: 1, name: "18.9 Litres First Purchase", image: "/images/18.9 L.PNG" },
    { id: 2, name: "18.9 Litres refill", image: "/images/18.9 l Re fill.PNG" },
    { id: 3, name: "10 Litres disposal", image: "/images/10 L disposol.PNG" },
    { id: 4, name: "5 Litres 4 pack", image: "/images/5 L 4 PACK.PNG" },
    { id: 5, name: "5 Litre 12 pack", image: "/images/Capture1.5 L 12 pack.PNG" },
    { id: 6, name: "1 Litre 12 pack", image: "/images/1 Litre 12 pck.PNG" },
    { id: 7, name: "500 ml 24 pack", image: "/images/500 ml 24 pack.PNG" },
    { id: 8, name: "300 ml 28 pack", image: "/images/300 ml 28 pack.PNG" }
  ];

  return (
    <>
      <header>
        <Collapse in={showHeader} className="bg-dark text-white">
          <div>
            <Container>
              <Row>
                <Col sm={8} md={7} className="py-4">
                  <h4>About</h4>
                  <p className="text-secondary">
                    Kaptagat Water Springs was established in May 2009. Its main activity is the production of extremely high quality bottled water.
                    Kaptagat Water Springs has acquired a substantial market share, efficiently delivering its products all over Eldoret i Area, and also to the outlying residential areas and smaller business centers outside Eldoret.
                    In its short life the company has already acquired a substantial market share, efficiently delivering its products not only centrally within Nairobi, but also to outlying residential areas and smaller business centres and over 200 private customers who appreciate the convenience of the home delivery of pure, hygienic drinking water.
                  </p>
                </Col>
                <Col sm={4} className="offset-md-1 py-4">
                  <h4>Contact</h4>
                  <Nav className="flex-column">
                    <Nav.Link href="#" className="text-white">Follow on Twitter</Nav.Link>
                    <Nav.Link href="#" className="text-white">Like on Facebook</Nav.Link>
                    <Nav.Link href="#" className="text-white">Email me</Nav.Link>
                  </Nav>
                </Col>
              </Row>
            </Container>
          </div>
        </Collapse>
        
        <Navbar bg="dark" variant="dark" className="shadow-sm">
          <Container>
            <Navbar.Brand href="#" className="d-flex align-items-center">
              <Camera className="me-2" size={20} />
              <strong>Kaptagat Water Springs</strong>
            </Navbar.Brand>
            <Navbar.Toggle 
              onClick={() => setShowHeader(!showHeader)}
              aria-controls="navbar-header"
            />
          </Container>
        </Navbar>
      </header>

      <main>
        <section className="py-5 text-center">
          <Container>
            <Row className="py-lg-5">
              <Col lg={6} md={8} className="mx-auto">
                <h1 className="fw-light">Kaptagat Water Springs</h1>
                <p className="lead text-secondary">Our Products</p>
              </Col>
            </Row>
          </Container>
        </section>

        <div className="album py-5 bg-light">
          <Container>
            <Row xs={1} sm={2} md={3} className="g-3">
              {products.map(product => (
                <Col key={product.id}>
                  <Card className="shadow-sm">
                    <Card.Img variant="top" src={product.image} alt={product.name} />
                    <Card.Body>
                      <Card.Text>{product.name}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </main>

      <footer className="text-secondary py-5">
        <Container>
          <p className="mb-1">
            Kaptagat springs' water comes from the most famed spring water in kaptagat Forest, Rift Valley Kenya, it is naturally filtered through hard volcanic rocks, stones, fine sand and finally ultraviolet light filtration process, resulting in the healthiest and most refreshing water.
            We also offer customized branding and special bottle at affordable prices.
          </p>
          <br/>
          <p className="mb-1">
           Developed by john Kimaiyo
          </p>
        </Container>
      </footer>
    </>
  );
};

export default HomePage;