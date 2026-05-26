import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Properties from './pages/Properties';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Article1 from './pages/Article1';
import Article2 from './pages/Article2';
import Article3 from './pages/Article3';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/how-foreigners-buy-property-el-salvador" element={<Article1 />} />
          <Route path="/resources/no-property-taxes-el-salvador" element={<Article2 />} />
          <Route path="/resources/why-hnw-buyers-el-salvador-2026" element={<Article3 />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
