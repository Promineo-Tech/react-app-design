import React, {useState} from 'react';
import ReviewList from "../../presentational/ReviewList/ReviewList";
import YouTube from "../../presentational/YouTube/YoutTube";
import Categories from "../../presentational/Categories/Categories";
import ReviewModal from "../../presentational/ReviewModal/ReviewModal";

const Movie = ({movie, addReview}) => {

    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="movie-container">
            <div className="movie-header">
                <h1>{movie.title}</h1>
                <Categories categories={movie.categories} />
            </div>
            <ul className="movie-details">
                <li>{movie.release}</li> 
                <li>{movie.length} </li> 
                <li><a rel="noreferrer" target="_blank" href={movie.imdb}>IMDB</a></li>
            </ul>
            <div className="movie-info-container">
                <div className="movie-image">
                    <img src={movie.image} alt={movie.alt} />
                </div>
                <div className="youtube">
                 <YouTube embedId={movie.youtube} />
                </div>
                <div className="review-container">
                    <ReviewList reviews={movie.reviews} />
                    <button onClick={openModal}>Give a review</button>
                    <ReviewModal 
                      isOpen={modalIsOpen} 
                      closeModal={closeModal}
                      movie={movie}
                      addReview={addReview}
                />
                </div>
            </div>
            <div className="movie-description">
                <p>{movie.description}</p>
            </div>
        </div>
    );
}

export default Movie;