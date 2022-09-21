
 import { setContext } from '@apollo/client/link/context'
 import {
   ApolloClient,
   InMemoryCache,
   ApolloProvider,
   createHttpLink,
} from '@apollo/client';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/'
import RandomPortal from './components/RandomPortal';
import ListPortal from './components/ListPortal';
import Footer from './components/Footer';
import Login from './components/LoginSignUpPortal'
import AddOption from './components/AddOption';


 const authLink = setContext((_, { headers }) => {
   const token = localStorage.getItem('id_token')

   return {
     headers: {
       ...headers,
       authorization: token ? `Bearer ${token}` : ''
     }
   }
 })

 const client = new ApolloClient({
   link: authLink.concat(httpLink),
   cache: new InMemoryCache()
 })

 
import RandomPortal from './components/RandomPortal';
import ListPortal from './components/ListPortal';
import Footer from './components/Footer';
import Login from './components/LoginSignUpPortal'
import AddOption from './components/AddOption';


function App() {
  
    return (
      <ApolloProvider client={client}>
        <Router>
        <div>
          <Nav />
          <main className='content'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/add-option" element={<AddOption />} />
              <Route path="/decision-time" element={<RandomPortal />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ApolloProvider> 
    );
};


export default App;
