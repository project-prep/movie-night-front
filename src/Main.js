import { Component } from 'react';
import axios from 'axios';
import './App.css';
import UpdateMovie from './components/UpdateMovie';
// import Movie from './components/Movie.js';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card';
// import Carousel from 'react-bootstrap/Carousel';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// import Favorite from './components/Favorite';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      // movieData: [],
      title: '',
      streaming: [],
      year: '',
      genre: '',
      synopsis: '',
      watched: false,
      status: false,
      // updateModalState: false,
      modalState: false,
      imageURL: 'https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
      updatedMovie: null,
      watchList: [], 
      test:'',
    }
  }

  // handler event to get movie data
  handleMovie = async (event) => {
    event.preventDefault();
    try {
      let url = `${process.env.REACT_APP_SERVER}/movies?name=${this.state.searchQuery}`;

      // let movieData = await axios.get(url);
      let movieData = await axios.get(url);


      console.log('movieResponse: ', movieData.data);

  

      // let movie = movieData.data;

      this.setState({
        title: movieData.data[0].name,
        streaming: movieData.data[0].locations,
        test: movieData.data[0]._id,
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
      streaming: this.state.streaming.join(' '),
      // test: this.state.test
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
    } catch (error) {
      console.log('Error Message: ', error.message)
    }
  }


  // >>> ASYNC FUNCTIONS <<<<

  // delete movie data from db
  deleteMovie = async (movieID) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/movieList/${movieID}`;
      console.log(url);
      await axios.delete(url);

      let updatedMovie = this.state.watchList.filter(movie => movie._id !== movieID);
      this.setState({
        watchList: updatedMovie
      });

      console.log('updatedMovie: ', updatedMovie)

    } catch (error) {
      console.log(error.message);
    }
  }

  // update movies
  updateMovie = async (movie) => {
    // console.log('Updated Movie: ', movieID);
    try {
      // debugger;
      let url = `${process.env.REACT_APP_SERVER}/movieList/${movie._id}`;
      console.log(url);
      let updatedMovie = await axios.put(url, movie);

      let updatedMovieArr = this.state.watchList.map(existingMovie => {
        return existingMovie._id === movie._id ? updatedMovie.data : existingMovie;
      });
      console.log('updated movie ARR',updatedMovieArr);

      this.setState({
        watchList: updatedMovieArr,
          // title: updatedMovie.data[0].name,
          // streaming: updatedMovie.data[0].locations[0].display_name,
          // test: updatedMovie.data[0]._id,
      })
      // this.getMovieData();
      console.log(this.state.watchList);
    } catch (error) {
      console.log(error.message)
    }
  }

  // get movie data from db
  getMovieData = async () => {
    console.log('getMovie: tada')

    try {
      let movies = await axios.get(`${process.env.REACT_APP_SERVER}/movieList`);
      this.setState({
        watchList: movies.data
      })

      console.log('watchlist: ', movies.data)

      // if (this.props.auth0.isAuthenticated) {
      //   const res = await this.props.auth0.getIdTokenClaims();

      //   const jwt = res.__raw;

      //   console.log('token:  ', jwt);

      //   const config = {
      //     headers: { "Authorization": `Bearer ${jwt}` },
      //     method: 'get',
      //     baseURL: process.env.REACT_APP_SERVER,
      //     url: '/movieList'
      //   }

      //   let moviesInfo = await axios(config);

      //   console.log('moviesInfo: ', moviesInfo)
      //   this.setState({
      //     watchList: moviesInfo.data
      //   })
      // }


    } catch (error) {
      console.log('Get movie data error: ', error.response);
    }
  }

  handleClosedModal = () => {
    this.setState({
      modalState: false,
    })
  }

  handleOpenUpModal = (movieObj) => {
    this.setState({
      modalState: true,
      updatedMovie: movieObj
    })
  }

  handleCarouselSelect = (selectedIndex, e) => {
    this.setState({ carouselIndex: selectedIndex });
  }

  handleChange = (event) => {
    let { value } = event.target;
    value.toLowerCase();
    this.setState({ searchQuery: value })
    console.log(value);
  }


  componentDidMount() {
    this.getMovieData();
  }

  render() {
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
        <aside>
          <Container className='movieCard'>
            <Form onSubmit={this.handleMovie}>
              <label>Enter Movie Title:
                <Form.Control type="text" onChange={this.handleChange} />
                <Button type="submit">Search Movie!</Button>
              </label>
            </Form>
            {/* <Card className='movieCard' style={{ width: '40rem' }}> */}
            <Card className='movieCard' style={{ width: '25rem', color: '#873434' }}>
              <Card.Img variant="top" src={this.state.imageURL} style={{ width: '25rem', height: '20rem' }} />
              <Card.Body>
                <Card.Title>{this.state.title}</Card.Title>
                <div className='movie'>
                  <Card.Text>Streaming Platforms: {this.state.streaming.map(element => <p>{element}</p>)}</Card.Text>
                </div>
              </Card.Body>
            </Card>
            <Form onSubmit={this.handleMovieAdd}>
              <Button type="submit">Add Movie to Watchlist</Button>
            </Form>
          </Container>
        </aside>

        <Container className='WatchList'>
          <h2>Your Watchlist</h2>
          {this.state.watchList.length ? (

            <Card>
              {this.state.watchList.map(element =>
                <Card.Body key={element._id}>
                  <h3>{element.title}</h3>
                  <h4>{element.streaming}</h4>
                  <p>{element.watched ? 'Watched' : 'Not Watched'}</p>
                  <Button onClick={() => this.deleteMovie(element._id)} variant='danger'>Delete Movie</Button>

                  <Button onClick= {()=> this.handleOpenUpModal(element)} variant='info'>Update Movie</Button>
                 

                  {/* <Form.Group controlId="status">
                  <Form.Check type="checkbox" label="available" defaultValue={this.state.updatedMovie.status} />
                </Form.Group> */}
                </Card.Body>
              )}
            </Card>

          ) : (
            <h3>No Movies in your Watchlist :</h3>
          )}
        </Container>

        {this.state.updatedMovie &&
          <UpdateMovie
            show={this.state.modalState}
            close = {this.handleClosedModal}
            updatedMovie ={this.state.updatedMovie}
            title= {this.state.title}
            streaming= {this.state.streaming}
            updateMovie={this.updateMovie}
            
          />
        }


        )

      </>
    );
  }
}

export default Main;
