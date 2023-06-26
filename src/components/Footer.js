import '../css/header-footer.css';

function Footer() {
    return (
      <div >
        <footer className="header-footer">
              <p>{"Developed By ::  Naveen Kumar B"}</p> 
              <button name="gitbutton" className="footer-button" onClick={()=>{window.open("https://github.com/naveebantrothu/book-extracts");}}>{"Source Code"}</button>

        </footer>
      </div>
    );
  }

export default Footer;