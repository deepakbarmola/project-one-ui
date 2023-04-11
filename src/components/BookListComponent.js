import React, {useState} from 'react';
import BookDetailsTile from '../reusableComponents/BookDetailsTile';

export default function BookListComponent(props){

    const [detailOfBooks, setDetailOfBooks] = useState([]);

    const x = [ 
        {bookName: 'The alchemist', author: 'Paulo Coehlo'},
        {bookName: 'The alchemist', author: 'Paulo Coehlo'},
        {bookName: 'The alchemist', author: 'Paulo Coehlo'},
        {bookName: 'The alchemist', author: 'Paulo Coehlo'},
        {bookName: 'The alchemist', author: 'Paulo Coehlo'}
        ]

    return(
        <div>
        <div>
          <span>
            E - LIBRARY
          </span>
          <span>
            <button>ADD A BOOK</button>
          </span>
        </div>
        <div className="book-detail-cards-flex">
            
        {x.map((detail, index)=>{
            return(
                <div className="flex-item" key={index}>
                 <BookDetailsTile key={index} bookName={detail.bookName} author={detail.author} />
                 </div>
            );
           
        })
        }
       
        </div>

        </div>
    )
}

