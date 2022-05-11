import ReviewForm from "../../container/ReviewForm/ReviewForm";
import Modal from 'react-modal';

Modal.setAppElement('#root');

const modalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '30%',
      padding: '0',
      border: '2px solid #ccc',
    },
};

const ReviewModal = ({movie, addReview, isOpen, closeModal}) => {

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={modalStyles}
        >
          
            <div className="review-modal-content">
                <div className="review-modal-header">
                    <button className="modal-close-button" onClick={closeModal}>X</button>
                    <h2>{movie.title}</h2>
                    <h4>Post your review</h4>
                </div>
                <ReviewForm 
                    id={movie.id} 
                    addReview={addReview}
                    closeModal={closeModal}
                />
            </div>
        </Modal>
    );
}

export default ReviewModal;