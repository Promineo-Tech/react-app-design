import Filters from '../container/Filters/Filters'
import MovieList from '../presentational/MovieList/MovieList';
   
const Movies = ({isLoading, handleFilters, movies, addReview}) => {

    return (
        <>      
            <Filters handleFilters = {handleFilters} />

            <div className="movies-list-container">
                {
                    !isLoading ? <MovieList movies={movies} addReview={addReview} />
                    : <p>Loading...</p>
                }
            </div>
        </>
    )
}

export default Movies;