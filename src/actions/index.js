/**
 * selectBook is an action creator, so it must returns an object with a type property
 * @param book
 * @returns {{type: string, book: object}}
 */
export function selectBook(book){
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}