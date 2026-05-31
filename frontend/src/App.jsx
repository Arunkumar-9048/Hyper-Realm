import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SquadFinder from './pages/SquadFinder'
import Communities from './pages/Communities'
import CommunitiesDetails from './pages/CommunitiesDetails'
import ChannelChat from './pages/ChannelChat'
import Tournament from './pages/Tournament'
import TournamentDetail from './pages/TournamentDetail'
import Profile from './pages/Profile'
import ProfileEdit from './pages/ProfileEdit'
import Notifications from './pages/Notifications'
import AdminDashboard from './pages/AdminDashboard'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/squadfinder" element={<SquadFinder />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/communities/:slug" element={<CommunitiesDetails />} />
        <Route path="/communities/:slug/channel/:channelId" element={<ChannelChat />} />
        <Route path="/tournament" element={<Tournament />} />
        <Route path="/tournament/:slug" element={<TournamentDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<ProfileEdit />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}
