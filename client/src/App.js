import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// import { StoreProvider } from './utils/GlobalState';

import Home from './pages/Home';
import Blog from './pages/Blog';
import Quiz from './pages/Quiz';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar/Navbar';
import Profile from './pages/Profile';
import Prompt from './pages/Prompt';
import Interviews from './pages/Interviews';
// import WriteSolution from './pages/WriteSolution';
import WritePost from './pages/WritePost';
import './App.css';

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

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
        
            <Navbar />
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/signup" 
                element={<Signup />} 
              />
              <Route 
                path="/me"
                element={<Profile />}
              />
              <Route 
                path="/quiz" 
                element={<Quiz />} 
              />
              <Route 
                    path="/blog" 
                element={<Blog />} 
              />
              <Route 
                    path="/writepost" 
                element={<WritePost />} 
              />
              <Route 
                    path="/interviews" 
                element={<Interviews />}
                />
              {/* <Route 
                    path="/writesolution" 
                element={<WriteSolution />} 
              /> */}
              <Route 
                path="/prompt/:promptId" 
                element={<Prompt />} 
              />
            </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
