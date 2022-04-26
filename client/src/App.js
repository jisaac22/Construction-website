import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Header from './components/Header'
import Footer from './components/Footer'
import WorkerList from "./pages/WorkerList";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {

  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// })

function App() {
  return (
    <ApolloProvider client={client}>
      <Router className = "container">
        <Header />
        <Route exact path="/">
        <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/workerlist">
          <WorkerList />
        </Route>
        <Route exact path="/profile/:id">
          <Profile />
        </Route>
      </Router>   
      <Footer />
    </ApolloProvider>
  );
}
export default App;
