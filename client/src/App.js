import Nav from './components/Nav/'
import RandomPortal from './components/RandomPortal';
import ListPortal from './components/ListPortal'

function App() {
  
    return (
      <div>
        <Nav></Nav>
        <main>
        <RandomPortal></RandomPortal>
        <ListPortal></ListPortal>
        </main>
        <Footer></Footer>
      </div>
    );
    }


export default App;
