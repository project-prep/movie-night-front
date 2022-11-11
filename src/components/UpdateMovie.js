import React from "react";
import { Button, Form, Modal } from 'react-bootstrap';

class AddMovie extends React.Component {

  handleMovieUpdate = (event) => {
    event.preventDefault();

    let newMovie = {
      watched: event.target.watched.checked,
      _id: this.props.updatedMovie,
      title: this.props.title,
      streaming: this.props.streaming
    }
    console.log(newMovie._id);
    console.log('newMovie: ', newMovie);
    this.props.updateMovie(newMovie._id);
  }

  render() {
    return (
      <Modal className="modalSect" show={this.props.show} onHide={this.props.close}>
        <Modal.Header closeButton >
          <Modal.Title>Update Movie</Modal.Title>
        </Modal.Header>
        <Form className="modalSect" onSubmit={this.handleMovieUpdate}>
          
          <Form.Group controlId="watched">
            <Form.Check type="checkbox" label="watched" />
          </Form.Group>

          <Button type="submit">Update Movie</Button>
        </Form>
      </Modal>

    )
  }
}

export default AddMovie;
