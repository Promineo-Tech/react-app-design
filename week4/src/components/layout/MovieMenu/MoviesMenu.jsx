import Filters from '../../container/Filters/Filters'
import Pagination from '../../container/Pagination/Pagination';
import styles from "./MoviesMenu.module.css";

const MoviesMenu = ({
                        handleFilters,
                        moviesPerPage,
                        paginate,
                        currentPage,
                        totalMovies,    
                    }) => {

    return (
        <div className={styles.moviesMenu}>
            <Filters handleFilters = {handleFilters} />
            <Pagination 
                moviesPerPage = {moviesPerPage}
                paginate = {paginate}
                currentPage = {currentPage}
                totalMovies = {totalMovies} 
            />
        </div>
    );
}

export default MoviesMenu;