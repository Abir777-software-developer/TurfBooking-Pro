import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import FindArena from './pages/FindArena';
import TurfDetails from './pages/TurfDetails';
import UserRegistration from './pages/UserRegistration';
import OwnerRegistration from './pages/OwnerRegistration';
import Leaderboard from './pages/Leaderboard';
import Reviews from './pages/Reviews';
import KineticGuide from './components/KineticGuide';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/find-arena" element={<FindArena />} />
        <Route path="/turf-details" element={<TurfDetails />} />
        <Route path="/register-user" element={<UserRegistration />} />
        <Route path="/register-owner" element={<OwnerRegistration />} />
        <Route path="/leagues" element={<Leaderboard />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
      <KineticGuide />
      <ThemeToggle />
    </Router>
  );
}

export default App;
