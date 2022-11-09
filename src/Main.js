import { Component } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card';
import Favorite from './components/Favorite';

class Main extends Component {
  constructor(props) {
    super(props);
      this.state = {
        searchQuery: '',
        movieData: [],
        title: '',
        streaming: '',
        year: '',
        genre: '',
        synopsis: '',
        isWatched: false,
        imageURL: ''
      }
  }

    // handler event to get movie data
    handleMovie = async (event) => {
      event.preventDefault();

      try {
        let url = `${process.env.REACT_APP_SERVER}`;
        
        let movieData = await axios.get(url);
        console.log('movieData: ', movieData.data);

        let movie = movieData.data;

        this.setState({
          title: movie.title,
          streaming: movie.streaming,
          year: movie.year,
          genre: movie.genre,
          Synopsis: movie.Synopsis,
          src: movie.src
        })

      } catch (error) {
        console.log('Error: ', error.message);
        this.setState({
          errorMessage: error.message
        });
      }
    }

    handleWatch = (searchQuery, lat, lon) => {
      searchQuery.preventDefault();
      const url = `http://localhost:3002/weather?city_name=${this.state.searchQuery}&lat=${this.state.lat}&lon=${this.state.lon}`;
      axios.get(url).then(
        response => {
          console.log(response, 'response');
          this.setState({
            weather: response.data,
          })
        })
        .catch((error) => {
          const errorMessage = `${error.response.data.error}. ${error.message} (${error.code}).`;
          this.setState({showAlert: true, errorMessage: errorMessage})
        })
    }
  
    handleFavorite = (e) => {
      e.preventDefault();
      const url = `http://localhost:3002/movies?city_name=${this.state.searchQuery}`;
      axios.get(url).then(
        response => {
          console.log(response, 'response');
          this.setState({
            movies: response.data,
          })
        })
        .catch((error) => {
          const errorMessage = `${error.response.data.error}. ${error.message} (${error.code}).`;
          this.setState({ showAlert: true, errorMessage: errorMessage })
        })
    }

    handleChange = (event) => {
      let { value } = event.target;
      value.toLowerCase();
      this.setState({ searchQuery: value })
      console.log(value);
    }

    render() {
      return (
        <>
          <Container className='movieCard'>
            <Form onSubmit={this.handleMovie}>
              <label>Enter Movie Title:
                <Form.Control type="text" onChange={this.handleChange} />
                  <Button type="submit">Search Movie!</Button>
              </label>
            </Form>
            <Card className='movieCard' style={{ width: '40rem'}}>
              <Card.Img variant ="top" src={this.state.imageURL} />
              <Card.Body>
                <Card.Title>{this.state.title}</Card.Title>
                <div className='movie'>
                  <Card.Text>Streaming Platforms: {this.state.streaming}</Card.Text>
                  <Card.Text>Movie Synopsis: {this.state.synopsis}</Card.Text>
                  <Card.Text>Genre: {this.state.genre}</Card.Text>
                  <Card.Text>Year: {this.state.year}</Card.Text>
                </div>
              </Card.Body>
            </Card>
            <Form onSubmit={this.handleWatch}>
                <Button type="submit">Add Movie to Watchlist</Button>
            </Form>
            <Form onSubmit={this.handleFavorite}>
                <Button type="submit">Add Movie to Favorites</Button>
            </Form>
          </Container>

          <Container className='Favorites'>
            <Card className='Favorites' style={{ width: '40rem'}}>
              <Card.Img variant ="top" src={this.state.mapImage} />
              <Card.Body>
                <Card.Title>Movies to Watch // Favorites</Card.Title>
              </Card.Body>
            </Card>
          </Container>
        </>
      );
    }
  
}

export default Main;
