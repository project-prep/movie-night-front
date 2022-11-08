import React from 'react';
import axios from 'axios';

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
        src: ''
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

    render() {

      return (
        <>
        <form onSubmit={this.getMovieData}>
          <label>Enter Movie Title:
            <input type="text" onInput={this.handleMovieSubmit} />
            <button type="submit">Search Movie!</button>
          </label>
        </form>
        
        </>
      );
    }
  
}

export default Main;
