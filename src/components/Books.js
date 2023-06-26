import { useEffect, useState } from "react";
import SortTable from "./sorttable";
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
          <SortTable booksdata={books}></SortTable>
          </>
        )}
      </div>
    );
  }

  export default Books;