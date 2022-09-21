// import { setContext } from '@apollo/client/link/context'
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/'

// const httpLink = createHttpLink({
//   uri: '/graphql'
// })

// const authLink = setContext((_, { headers }) => {
//   // TODO: add token
//   return {
//     headers: {
//       ...headers,
//       authorization: ''
//     }
//   }
// })

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache()
// })
import RandomPortal from './components/RandomPortal';
import ListPortal from './components/ListPortal';
import Footer from './components/Footer';
import Login from './components/LoginSignUpPortal'
import AddOption from './components/AddOption';

function App() {
  
    return (
      <Router>
        <div>
          <Nav />
          <main className='content'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/add-option" element={<AddOption />} />
              <Route path="/decision-time" element={<RandomPortal />} />
              <Route path="/list-portal" element={<ListPortal />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    );
};


export default App;
