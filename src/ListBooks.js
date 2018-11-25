import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class ListBooks extends Component {
  /*handleChange(event, book) {
    debugger;
    BooksAPI.update(book, event.target.value).then(() => {
      switch (event.target.value) {
        case "currentlyReading":

          this.setState((state) => ({ currentlyReading: state.currentlyReading.push(book) }));
          break;
        case "wantToRead":
          this.setState((state) => ({ wantToRead: state.wantToRead.push(book) }))
          break;
        case "read":
          this.setState((state) => ({ read: state.read.push(book) }))
          break;
        default:
          break;
      }
    })
  }*/






  render() {
    //const books =this.props.books;
    const { books,
      currentlyReading,
      wantToRead,
      read,
      onSelectedChange } = this.props
    // const onSelectChange=this.props.onSelectChange;



    return <div className="list-books">
      <div className="list-books-title">
        <h1>My Reads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {currentlyReading.map((book) => (
                  <li key={book.id}>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{
                          width: 128, height: 193,
                          backgroundImage: 'url(' + (book.imageLinks&&book.imageLinks.thumbnail) + ')'
                        }}></div>
                        <div className="book-shelf-changer">
                          <select book={book.id} onChange={(event) => onSelectedChange(event.target.value, book)}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">{book.title}</div>
                      <div className="book-authors">{book.authors.join(', ')}</div>
                    </div>
                  </li>

                ))
                }

              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {wantToRead.map((book) => (
                  <li key={book.id}>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{
                          width: 128, height: 193,
                          backgroundImage: 'url(' + (book.imageLinks&&book.imageLinks.thumbnail) + ')'
                        }}></div>
                        <div className="book-shelf-changer">
                          <select value="wantToRead" onChange={(event) => onSelectedChange(event.target.value, book)}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">{book.title}</div>
                      <div className="book-authors">{book.authors.join(', ')}</div>
                    </div>
                  </li>

                ))
                }
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {read.map((book) => (
                  <li key={book.id}>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{
                          width: 128, height: 193,
                          backgroundImage: 'url(' + (book.imageLinks&&book.imageLinks.thumbnail) + ')'
                        }}></div>
                        <div className="book-shelf-changer">
                          <select value="read" onChange={(event) => onSelectedChange(event.target.value, book)}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">{book.title}</div>
                      <div className="book-authors">{book.authors.join(', ')}</div>
                    </div>
                  </li>

                ))
                }
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="open-search">

        <Link
          to='/search'
        >Add a book</Link>
      </div>
    </div>
  }

}
export default ListBooks
