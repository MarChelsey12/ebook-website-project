const bookActions={
    addToReadingList: 'addToReadingList',
    markAsRead: 'markAsRead',
    clearReadingList: 'clearReadingList'
};

function bookReducer(getBooks, {type, book}){
    switch(type){
        case bookActions.addToReadingList:
            return [...getBooks, book];
        
        case bookActions.markAsRead:
            let newList = getBooks.slice();
            for (let bookToDelete of newList){
                if (bookToDelete === book.id){
                    newList.splice(newList.indexOf(bookToDelete), 1)
                    return newList
                }
            }
            return newList
        case bookActions.clearReadingList:
            return []
        default:
            throw new Error('I am not a teapot!')
    };
};

export {
    bookReducer,
    bookActions
};