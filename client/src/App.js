import Nav from './components/Nav/'
import RandomPortal from './components/RandomPortal';
import ListPortal from './components/ListPortal';
import Footer from './components/Footer';
import Login from './components/LoginSignUpPortal'
import AddOption from './components/AddOption';


function App() {
  
    return (
      <div>
        <Nav></Nav>
        <main>
        <RandomPortal></RandomPortal>
        <AddOption></AddOption>
        <ListPortal></ListPortal>
        <Login></Login>
        </main>
        <Footer></Footer>
      </div>
    );
    }


export default App;
