import React from "react";
import { Button, Form, Modal } from 'react-bootstrap';

class AddMovie extends React.Component {

  handleMovieUpdate = (event) => {
    event.preventDefault();

    let newMovie = {
      isWatched: event.target.isWatched.checked
    }
    console.log('newMovie: ', newMovie);
    this.props.updateMovie(newMovie);
  }

  render() {
    return (
      <Modal className="modalSect" show={this.props.show} onHide={this.props.close}>
        <Modal.Header closeButton >
          <Modal.Title>Update Movie</Modal.Title>
        </Modal.Header>
        <Form className="modalSect" onSubmit={this.handleMovieUpdate}>
          
          <Form.Group controlId="isWatched">
            <Form.Check type="checkbox" label="isWatched" />
          </Form.Group>

          <Button type="submit">Update Movie</Button>
        </Form>
      </Modal>

    )
  }
}

export default AddMovie;
