// import { setContext } from '@apollo/client/link/context'
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from '@apollo/client';

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
