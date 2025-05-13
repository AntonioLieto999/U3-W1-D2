import fantasy from "../data/fantasy.json";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const AllTheBooks = function () {
  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Libri Fantasy</h2>
      <Row>
        {fantasy.slice(0, 15).map((book) => (
          <Col key={book.asin} md={4} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={book.img} alt={book.title} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                  <strong>Prezzo:</strong> €{book.price.toFixed(2)}
                </Card.Text>
                <Button variant="primary">Acquista</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
