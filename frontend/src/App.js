import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Landing from './pages/Landing';
import Stories from './pages/Stories';
import EditPost from './pages/EditPost';
import Home from './pages/Home';
import ViewPost from './pages/ViewPost';
import CreatePost from './pages/CreatePost';
import Profile from './pages/Profile';
import Followers from './pages/Followers';
import Following from './pages/Following';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/post/:slug" element={<ViewPost />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/profile/:userId/followers" element={<Followers />} />
          <Route path="/profile/:userId/following" element={<Following />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
