import Movie from "../../container/Movie/Movie";

const MovieList = ({movies, addReview}) => {
 
    return (
            <div className="movies-list">
                {
                    movies.map((movie, index) => {
                        
                        if (movie.hidden === false) {
                            return (
                                <Movie key={index} movie={movie} addReview={addReview} />
                            )
                        }
                    })
                }
            </div>
    )
}

export default MovieList;