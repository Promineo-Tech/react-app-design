import MoviesMenu from '../../layout/MovieMenu/MoviesMenu';
import MovieList from '../../presentational/MovieList/MovieList';
import styles from "./Movies.module.css";

const Movies = ({
    isLoading,
    handleFilters,
    movies,
    addReview,
    moviesPerPage,
    paginate,
    currentPage,
    totalMovies    
}) => {

    return (
        <>      
        
            <MoviesMenu 
                handleFilters = {handleFilters}
                moviesPerPage = {moviesPerPage}
                paginate = {paginate}
                currentPage = {currentPage}
                totalMovies = {totalMovies}
            />
            
            <div className={styles.moviesListContainer}>
                {
                    !isLoading ? <MovieList movies={movies} addReview={addReview} />
                    : <p>Loading...</p>
                }
            </div>
        </>
    )
}

export default Movies;