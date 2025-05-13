import { Row, Col } from "react-bootstrap";

const MyFooter = function () {
  return (
    <footer className="bg-dark text-light py-2 mt-auto w-100 d-flex align-items-center justify-content-center">
      <div className="text-center">
        <Row>
          <Col>
            <p>&copy; {new Date().getFullYear()} Libri da leggere. Tutti i diritti riservati.</p>
            <p>
              <a href="#" className="text-light text-decoration-none">
                Privacy Policy
              </a>{" "}
              |{" "}
              <a href="#" className="text-light text-decoration-none">
                Termini di servizio
              </a>
            </p>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default MyFooter;
