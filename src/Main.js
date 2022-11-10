import { Component } from 'react';
import axios from 'axios';
import './App.css';
import AddMovie from './components/AddMovie';
import Movie from './components/Movie.js';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import Favorite from './components/Favorite';

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
        status: false,
        updateModalState: false,
        modalState: false,
        imageURL: '',
        updatedMovie: null,
        watchList: []
      }
  }

  // handler event to get movie data
  handleMovie = async (event) => {
    event.preventDefault();
      try {
        let url = `${process.env.REACT_APP_SERVER}/movies?name=${this.state.searchQuery}`;
        
        let movieData = await axios.get(url);
        console.log('movieData: ', movieData.data);

        // let movie = movieData.data;

        this.setState({
          title: movieData.data[0].name,
          streaming: movieData.data[0].locations[0].display_name,
        })

    } catch (error) {
      console.log('Error: ', error.message);
      this.setState({
        errorMessage: error.message
      });
    }
  }

    handleMovieAdd = (event) => {
      event.preventDefault();
        let newMovie = {
        title: this.state.title,
        streaming: this.state.streaming
      }
      console.log('newMovie: ', newMovie);

      // this.state.watchList.push(newMovie);

      // this.setState({
      //   watchList: [...this.state.watchList, newMovie] 
      // })

      this.postMovie(newMovie);

      console.log(this.state.watchList);
    }

    // below added for addMovie functionality
    postMovie = async (newMovie) => {
      try {
        let url = `${process.env.REACT_APP_SERVER}/movieList`;
        let newCreatedMovie = await axios.post(url, newMovie);

        this.setState({
          watchList: [...this.state.watchList, newCreatedMovie.data]
        })
      } catch(error) {
        console.log('Error Message: ', error.message)
      }
    }
 

    // >>> ASYNC FUNCTIONS <<<<

  // delete movie data from db
  deleteMovie = async (movieID) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/movieList/${movieID}`;

      await axios.delete(url);

      let updatedMovie = this.state.watchList.filter(movie => movie._id !== movieID);
      this.setState({
        watchList: updatedMovie
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  // update movies
  updateMovie = async (movieToUpdate) => {
    console.log('Updated Movie: ', movieToUpdate);
    try {
      let url = `${process.env.REACT_APP_SERVER}/movieList/${movieToUpdate._id}`;

      let updatedMovie = await axios.put(url, movieToUpdate);

      let updatedMovieArr = this.state.movieData.map(existingMovie => {
        return existingMovie._id === movieToUpdate._id ? updatedMovie.data : existingMovie;
      });

      this.setState({
        movieData: updatedMovieArr
      })

    } catch (error) {
      console.log(error.message)
    }
  }

  // get movie data from db
  getMovieData = async () => {
    try {
      let movies = await axios.get(`${process.env.REACT_APP_SERVER}/movieList`);
      this.setState({
        movieData: movies.data
      })
    } catch (error) {
      console.log('Get movie data error: ', error.response);
    }
  }

    // handleClosedModal = () => {
    //   this.setState({
    //     modalState: false,
    //   })
    // }

    // handleOpenUpModal = (bookObj) => {
    //   this.setState({
    //     updateModalState: true,
    //     updatedBook:bookObj
    //   })
    // }

    handleCarouselSelect = (selectedIndex, e) => {
      this.setState({carouselIndex: selectedIndex});
    } 

  handleChange = (event) => {
    let { value } = event.target;
    value.toLowerCase();
    this.setState({ searchQuery: value })
    console.log(value);
  }

    render() {
      console.log(this.state);
      return (
        <>
        {/* <form onSubmit={this.getMovieData}>
          <label>Enter Movie Title:
            <input type="text" onInput={this.handleMovieSubmit} />
            <button type="submit">Search Movie!</button>
          </label>
        </form>
        
        
        <div className= "addButtonDiv">
          <Button onClick={this.handleOpenModal}>Add Movie</Button>
        </div>
        <AddMovie 
          show={this.state.updateModalState}
          close={this.handleClosedModal}
          postMovie={this.postMovie}
        /> */}
          <Container className='movieCard'>
            <Form onSubmit={this.handleMovie}>
              <label>Enter Movie Title:
                <Form.Control type="text" onChange={this.handleChange} />
                <Button type="submit">Search Movie!</Button>
              </label>
            </Form>
            <Card className='movieCard' style={{ width: '40rem' }}>
              <Card.Img variant="top" src={this.state.imageURL} />
              <Card.Body>
                <Card.Title>{this.state.title}</Card.Title>
                <div className='movie'>
                  <Card.Text>Streaming Platforms: {this.state.streaming}</Card.Text>
                </div>
              </Card.Body>
            </Card>
            <Form onSubmit={this.handleMovieAdd}>
                <Button type="submit">Add Movie to Watchlist</Button>
            </Form>
          </Container>

          <Container className='WatchList'>
           <h2>Your Watchlist</h2>
            {this.state.watchList.length ? (
              <Card>
                {this.state.watchList.map(element => 
                  <Card.Body>
                    <h3>{element.title}</h3>
                    <h4>{element.streaming}</h4>
                    <p> {element._id}</p>
                    <Button onClick={() => this.deleteMovie(element._id) } variant='danger'>Delete Movie</Button>
                   
                  </Card.Body>
              )}
              </Card>
            ) : (
              <h3>No Movies in your Watchlist :</h3>
            )}
         </Container>
        </>
      );
    }
}

export default Main;
