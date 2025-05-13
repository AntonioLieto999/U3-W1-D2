import { useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import history from "../data/history.json";

const AllTheBooks = function () {
  const [books, setBooks] = useState(fantasy); // Stato iniziale con i libri fantasy

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Libri</h2>
      <div className="d-flex justify-content-center mb-4">
        <Button className="mx-2" onClick={() => setBooks(history)}>
          history
        </Button>
        <Button className="mx-2" onClick={() => setBooks(scifi)}>
          Scifi
        </Button>
        <Button className="mx-2" onClick={() => setBooks(fantasy)}>
          Fantasy
        </Button>
        <Button className="mx-2" onClick={() => setBooks(horror)}>
          Horror
        </Button>
        <Button className="mx-2" onClick={() => setBooks(romance)}>
          Romance
        </Button>
      </div>
      <Row>
        {books.slice(0, 15).map((book) => (
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
