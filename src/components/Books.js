import { useEffect, useState } from "react";
const useMountEffect = (fun) => useEffect(fun, [])
function Books() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
           useEffect(() => {
            setLoading(true);
            fetch("/getextracts?titlecontains=s")
            .then((response) => response.json())
            .then((json) => setBooks(json))
            .finally(() => {
                setLoading(false);
                console.log("Books"+books);
            });
        }, []);

    return (
        <div className="App">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <h1>Books</h1>
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
              {books && Object.keys(books).length>1 && books["Extracts"].map((book,index) => (
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
          </>
        )}
      </div>
    );
  }

  export default Books;