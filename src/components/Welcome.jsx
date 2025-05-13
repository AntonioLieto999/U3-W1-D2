import { Alert } from "react-bootstrap";

const Welcome = function () {
  return (
    <div className="text-center alert">
      <Alert variant="primary">
        <h1>
          Benvenuto nella mia prima prova di <br /> React-Bootstrap
        </h1>
        <p>il tuo shop con prezzi incredibili!</p>
      </Alert>
      <h2 className="text-secondary">Trova il libro che fa per te!</h2>
    </div>
  );
};

export default Welcome;
