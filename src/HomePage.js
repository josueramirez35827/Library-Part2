import { useState, useEffect } from 'react';
import { getAllBooks } from './services/ApiCalls';
import axios from 'axios';

function HomePage() {
  const [booksData, setBooksData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
    
    
  useEffect(() => {
    setIsLoading(true)
    getAllBooks()
      .then(res => setBooksData(res))
    setIsLoading(false)
  }, [])
  // console.log(booksData)

  return (    
    < div className = "App" >
      {
      isLoading ? <p>Loading</p> : booksData.map((book, index) => { 
        return (
          <div key={index}>
            <img src={book.imageLink} alt={`Cover Art for ${book.title}`}/>
            <h1>{book.title}</h1>
          </div>
        )
        })
      }


     
    </div>
  );
}

export default HomePage;