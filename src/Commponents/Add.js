import React, { useState } from "react";
import { Modal, Button, Form, Col, Row, FloatingLabel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import StarRatingComponent from "react-star-rating-component";
const Add = ({ show, handleClose, addMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 1,
  });
  const onStarClick = (nextValue) => {
    setNewMovie({ ...newMovie, rate: nextValue });
  };

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter title"
                  onChange={handleChange}
                  name="title"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Poster URL</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter image URL"
                  onChange={handleChange}
                  name="posterURL"
                />
              </Form.Group>
            </Row>

            <FloatingLabel controlId="floatingTextarea2" label="Description">
              <Form.Control
                as="textarea"
                placeholder="Leave a description here"
                style={{ height: "100px" }}
                onChange={handleChange}
                name="description"
              />
            </FloatingLabel>

            <Row className="mb-3">
              <StarRatingComponent
                // name="rate1"
                starCount={5}
                value={newMovie.rating}
                onStarClick={onStarClick}
                onChange={handleChange}
                name="rating"
              />
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              addMovie(newMovie);
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Add;
