import './App.css'
import Navbar from './components/navBar';
import Home from './components/HomePage/Home';
import AllJobs from './components/JobsPage/CurrentJobs';
import AddJobs from './components/AddJobsPage/AddJobs';
import { Routes, Route } from 'react-router-dom';

export default function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="src/components/JobsPage/CurrentJobs.jsx" element={<AllJobs />} />
        <Route path="src/components/AddJobsPage/AddJobs.jsx" element={<AddJobs />} />
      </Routes>
    </>
  )
}