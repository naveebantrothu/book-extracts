
function SortTable (props){
    
    return (
        <table border={1}>
        <tr>
          <th>SNo</th>
          <th>Cover</th>
          <th>Author</th>
          <th>Biography</th>
          <th>Title</th>
          <th>Reading time</th>
          <th>Publication date</th>
        </tr>
        {props.booksdata && Object.keys(props.booksdata).length>1 && props.booksdata["Extracts"].map((book,index) => (
          <tr>
            <td>{index+1}</td>
            <td><img src={book.jacketUrl}></img></td>
            <td>{book.author}</td>
            <td>{book.authorBiography}</td>
            <td>{book.title}</td>
            <td>{book.estimatedReadingTimeMinutes}</td>
            <td>{book.publicationDate}</td>
          </tr>
        ))}
      </table>
    )

}
export default SortTable;