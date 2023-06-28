import React from 'react';
import '../css/table.css';
function getFormatedDate(publicationDate){
    if(publicationDate){
      let dateobj = new Date(publicationDate);
      let month = dateobj.getMonth()+1;
      return dateobj.getDate()+"/"+month+"/"+dateobj.getFullYear();
    }
  }
  function linktoExtracts (isbn){
      let linkurl = "https://extracts.panmacmillan.com/extract?isbn="+isbn;
      window.open(linkurl);
  }
const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const BooksTable = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.booksdata["Extracts"]);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <table border={1}>
      <thead>
        <tr>
        <th>SNo</th>
        <th>Cover</th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('author')}
              className={getClassNamesFor('author')}
            >
              Author
            </button>
          </th>
          <th>Biography</th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('title')}
              className={getClassNamesFor('title')}
            >
              Title
            </button>
          </th>
          <th>
          <button
              type="button"
              onClick={() => requestSort('estimatedReadingTimeMinutes')}
              className={getClassNamesFor('estimatedReadingTimeMinutes')}
            >
              Reading time
            </button></th>
          <th>Publication date</th>
         
        </tr>
      </thead>
      <tbody>
        {items.map((book,index) => (
          <tr key = {index+1}>
          <td>{index+1}</td>
          <td><img src={book.jacketUrl} onClick={(e)=>{ e.preventDefault();linktoExtracts(book.isbn)}}></img></td>
          <td>{book.author}</td>
          <td>{book.authorBiography}</td>
          <td onClick={(e)=>{ e.preventDefault();linktoExtracts(book.isbn)}}>{book.title}</td>
          <td>{book.estimatedReadingTimeMinutes}</td>
          <td>{getFormatedDate(book.publicationDate)}</td>
        </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function SortTable(props) {
    if(props.booksdata && Object.keys(props.booksdata).length>1){
        return (
            <div>
            <BooksTable booksdata={props.booksdata}             
            />
          </div>
        
      );
    }else{
        return(<div></div>)
    }
  
}
