import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UploadDataset from './pages/UploadDataset';
import DatasetList from './pages/DatasetList';
import Forum from './pages/Forum';
import Navbar from './components/Navbar';  // The global navbar component
import './App.css';  // Reuse your global styles

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />  {/* The navbar is fixed and available on all pages */}
        <div className="container-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upload-dataset" element={<UploadDataset />} />
            <Route path="/dataset-list" element={<DatasetList />} />
            <Route path="/forum" element={<Forum />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
