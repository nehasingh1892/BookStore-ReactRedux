export const BOOK_LIST = 'BOOK_LIST'
export const ADD_BOOK = 'ADD_BOOK'
export const DELETE_BOOK = 'DELETE_BOOK'
export const UPDATE_BOOK = 'DELETE_BOOK'



export const getAllBooks = () => {

   let _bookList = JSON.parse(localStorage.getItem('bookList'));
    console.log("_bookList",_bookList);
    return {
        type: BOOK_LIST,
        payload: {"bookList":_bookList}
    };
}

export const addnewbook = (books) => {

    let _bookList = JSON.parse(localStorage.getItem('bookList'));
    _bookList.push(books);
    localStorage.setItem('bookList',JSON.stringify(_bookList));

    return {
        type: ADD_BOOK,
        payload: {"bookList":_bookList}
    }
}


export const deleteBook = (bookId) => {
   let bookListData = JSON.parse(localStorage.getItem("bookList"));
   for (let i = 0; i <= bookListData.length; i++) {
        if (bookListData[i].bookid == bookId) {
            bookListData.splice(i,1);
        }
    }
    console.log("deletedBookList :: ", bookListData);
    localStorage.setItem("bookList",JSON.stringify(bookListData));


    return {
        type: DELETE_BOOK,
        payload: {"bookList":bookListData}
    }
}

export const updateBook = (bookDetails) => {

    let bookListData = JSON.parse(localStorage.getItem("bookList"));

    let currentBookId = bookDetails.id;

    for (let i = 0; i <= bookListData.length; i++) {
        if (bookListData[i].bookid == bookDetails.id) {
            bookListData[i].bookid = bookDetails.id;
            bookListData[i].bookname=bookDetails.bookname;
                bookListData[i].bookauthor=bookDetails.bookauthor;
                bookListData[i].bookdesc=bookDetails.bookdesc;
                bookListData[i].bookpage= bookDetails.bookpage;

            break;
        }
    }
    console.log("bookListData update:", bookListData );

    localStorage.setItem("bookList",JSON.stringify(bookListData));
    return {
        type: UPDATE_BOOK,
        payload: {"bookList":bookListData}
    }
}