import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';

class BooksApp extends React.Component {
  
  constructor() {
    super();
    this.state = {
      booksList:[],
      currentlyReading:[],
      wantToRead:[],
      read:[],
      selectedBook:{},
      /**
       * TODO: Instead of using this state variable to keep track of which page
       * we're on, use the URL in the browser's address bar. This will ensure that
       * users can use the browser's back and forward buttons to navigate between
       * pages, as well as provide a good URL they can bookmark and share.
       */
     // showSearchPage: false
    }
  
  }
  getBooks=()=>{
    BooksAPI.getAll().then((books) => {
      console.log(books);

      const currentlyReading = books.filter((book)=>book.shelf=="currentlyReading");
      const wantToRead = books.filter((book)=>book.shelf=="wantToRead");
      const read = books.filter((book)=>book.shelf=="read");

      this.setState({ booksList: books,
        currentlyReading:currentlyReading,
        wantToRead:wantToRead,
        read:read
       })


    })

  }
  componentDidMount() {
    this.getBooks();
  }
  
  moveBook=(shelf,book)=>{

    BooksAPI.update(book, shelf).then(() => {
      debugger;
      this.getBooks();
      /*switch (shelf) {
        case "currentlyReading":

          this.setState((state) => ({ currentlyReading: state.currentlyReading.concat([book]) }));
          break;
        case "wantToRead":
          this.setState((state) => ({ wantToRead: state.wantToRead.concat([book]) }))
          break;
        case "read":
          this.setState((state) => ({ read: state.read.concat([book]) }))
          break;
        default:
          break;
      }*/
    })
    
  }

  

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
           <ListBooks 
             books={this.state.booksList} 
            currentlyReading={this.state.currentlyReading} 
            wantToRead={this.state.wantToRead} 
            read={this.state.read} 
            onSelectedChange={this.moveBook}
           />
          
        )} />
        <Route path='/search' render={() => (
         <SearchBooks books={this.state.booksList} />
        )} />

      </div>
    )
  }
}

export default BooksApp
