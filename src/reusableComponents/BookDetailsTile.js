import react from 'react';

export default function BookDetailsTile(props){

    return(
        <div className="book-details">
            <div className="book-image-section">
                <span className="book-image">
                    BOOK'S IMAGE
                </span>
            </div>
            <div className="book-detail-section">
                <div className="book-title">Book Title</div>
                <div className="book-author">Author</div>
                <div><a className="more-info">MORE INFO</a></div>
            </div>
        </div>
    )
}