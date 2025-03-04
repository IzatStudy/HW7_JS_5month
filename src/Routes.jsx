import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Quests from './pages/Quests';
import Profile from './pages/Profile';
import Leaderboard from './pages/Leaderboard';
import Login from './pages/Login';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/quests' element={<Quests />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/leaderboard' element={<Leaderboard />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    )
}

export default AppRoutes;