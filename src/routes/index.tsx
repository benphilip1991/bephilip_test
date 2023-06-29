import { Routes, Route } from 'react-router-dom';
import UserPosts from '../views/userPosts';
import LandingPage from '../views/landingPage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/user/:userId/userPost" element={<UserPosts />} />
        </Routes>
    )
}

export default AppRoutes;