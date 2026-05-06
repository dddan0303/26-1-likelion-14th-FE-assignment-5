function MovieCard({ movie }) {
  return (
    <article className="movie-card">
      <div className="movie-content">
        <div className="movie-top">
          <h2>{movie.title}</h2>
          <span className="rating">⭐ {movie.rating}</span>
        </div>

        <p className="description">{movie.description}</p>

        <div className="movie-bottom">
          <span>개봉 : {movie.date}</span>
          <button>Wish</button>
        </div>
      </div>

      <div className="poster-box">🎬</div>
    </article>
  );
}

export default MovieCard;