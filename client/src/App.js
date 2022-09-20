// import { setContext } from '@apollo/client/link/context'
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from '@apollo/client';

import Nav from './components/Nav/'
import Footer from './components/Footer'

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

function App() {
  
    return (
      // <ApolloProvider client={client}>
        <div>
          <Nav></Nav>
          <main>

          </main>
          <Footer></Footer>
        </div>
      // </ApolloProvider>
      
    );
    }


export default App;
