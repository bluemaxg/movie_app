import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });
  };

  async componentDidMount() {
    this.getMovies();
  }

  render() {
    const { movies } = this.state;
    return (
      <section className="container">
        {this.state.isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movies => (
              <Movie
                key={movies.id}
                id={movies.id}
                year={movies.year}
                title={movies.title}
                summary={movies.summary}
                poster={movies.medium_cover_image}
                genres={movies.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
