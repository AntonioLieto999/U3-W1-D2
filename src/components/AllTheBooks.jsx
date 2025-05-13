import MyNav from "./MyNav";
import { useState } from "react";
import { Card, Button, Container, Row, Col, Badge } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import history from "../data/history.json";

const AllTheBooks = function () {
  const [books, setBooks] = useState(fantasy);
  const [category, setCategory] = useState("Fantasy");
  const [cartCount, setCart] = useState(0);

  const BookSelected = (newBooks, newCategory) => {
    setBooks(newBooks);
    setCategory(newCategory);
  };

  const addToCart = () => {
    setCart(cartCount + 1);
  };

  return (
    <>
      <MyNav category={category} />
      <Container className="my-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="text-center mb-0">Libri-{category}</h2>
          <div>
            <Button variant="warning" className="position-relative">
              Carrello{" "}
              <Badge
                bg="danger"
                className="position-absolute top-0 border border-radius rounded-circle"
              >
                {cartCount}
              </Badge>
            </Button>
          </div>
        </div>
        <div className="d-flex justify-content-center mb-4">
          <Button className="mx-2" onClick={() => BookSelected(history, "History")}>
            History
          </Button>
          <Button className="mx-2" onClick={() => BookSelected(scifi, "Sci-Fi")}>
            Sci-Fi
          </Button>
          <Button className="mx-2" onClick={() => BookSelected(fantasy, "Fantasy")}>
            Fantasy
          </Button>
          <Button className="mx-2" onClick={() => BookSelected(horror, "Horror")}>
            Horror
          </Button>
          <Button className="mx-2" onClick={() => BookSelected(romance, "Romance")}>
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
                  <Button variant="primary" onClick={addToCart}>
                    Acquista
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default AllTheBooks;
