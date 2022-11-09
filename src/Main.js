import React from 'react';
import axios from 'axios';
import AddMovie from './components/AddMovie';
import { Button } from 'react-bootstrap';

class Main extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        movieData: [],
        title: '',
        streaming: '',
        year: '',
        genre: '',
        Synopsis: '',
        isWatched: false,
        src: '',
        status: false,
        updateModalState: false,
        modalState: false
      }
  }

    // get user input for search movies
    handleMovieSubmit = (event) => {
      event.preventDefault();
      this.setState({
        title: event.target.value,
      })
    }

    // handler event to get movie data
    getMovieData = async (event) => {
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


    // below added for addMovie functionality
    postMovie = async (newMovieObj) => {
      try {
        let url = `${process.env.REACT_APP_SERVER}/movieList`;
        let newCreatedMovie = await axios.post(url, newMovieObj);

        this.setState({
          movieData: [...this.state.movieData, newCreatedMovie]
        })
      } catch(error) {
        console.log('Error Message: ', error.message)
      }
    }

    handleClosedModal = () => {
      this.setState({
        modalState: false,
      })
    }

    handleOpenUpModal = (bookObj) => {
      this.setState({
        updateModalState: true,
        updatedBook:bookObj
      })
    }

    
    render() {

      return (
        <>
        <form onSubmit={this.getMovieData}>
          <label>Enter Movie Title:
            <input type="text" onInput={this.handleMovieSubmit} />
            <button type="submit">Search Movie!</button>
          </label>
        </form>
        
        
        <div className= "addButtonDiv">
          <Button onClick={this.handleOpenModal}>Add Book</Button>
        </div>
        <AddMovie 
          show={this.state.updateModalState}
          close={this.handleClosedModal}
          postMovie={this.postMovie}
        />
        </>
      );
    }
  
}

export default Main;
