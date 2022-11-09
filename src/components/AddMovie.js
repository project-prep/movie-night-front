import React from "react";
import { Button, Form, Modal } from 'react-bootstrap';

class AddMovie extends React.Component {

  handleMovieAdd = (event) => {
    event.preventDefault();

    let newMovie = {
      title: event.target.title.value,
      status: event.target.status.checked
    }
    console.log('newMovie: ', newMovie);
    this.props.postMovie(newMovie);
  }

  render() {
    return (
      <Modal className="modalSect" show={this.props.show} onHide={this.props.close}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Form className="modalSect" onSubmit={this.handleMovieAdd}>
          <Form.Group controlId="title">
            <Form.Label>Movie Title</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="status">
            <Form.Check type="checkbox" label="available" />
          </Form.Group>
          <Button onSubmit={this.props.postBooks} type="submit">Add Movies</Button>
        </Form>
      </Modal>

    )
  }
}

export default AddMovie;
