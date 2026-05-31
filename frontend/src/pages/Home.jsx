import { Link } from 'react-router-dom'
import TopBar from '../components/TopBar'
import TournamentAlert from '../components/TournamentAlert'
import QuickActions from '../components/QuickActions'
import Communities from '../components/Communities'
import ActivityFeed from '../components/ActivityFeed'
import LFGSection from '../components/LFGSection'
import BottomNav from '../components/BottomNav'

export default function Home() {
  return (
    <>
      <TopBar />
      <aside className="hidden md:flex fixed inset-y-0 left-0 z-[60] flex-col h-full w-72 rounded-r-xl bg-surface-container-low border-r border-white/5 shadow-xl">
        <div className="p-6 flex flex-col gap-1">
          <div className="text-primary font-display text-headline-md font-bold tracking-tighter">SQUAD_UP</div>
          <div className="flex items-center gap-3 mt-4">
            <div className="w-10 h-10 rounded-full bg-secondary-container"></div>
            <div className="flex flex-col">
              <span className="font-bold text-on-surface">Player One</span>
              <span className="text-xs text-on-surface-variant">LVL 42 &bull; Online</span>
            </div>
          </div>
        </div>
        <nav className="mt-4 flex flex-col">
          <Link to="/communities" className="bg-secondary-container text-on-secondary-container rounded-full mx-2 px-4 py-3 flex items-center gap-4">
            <span className="material-symbols-outlined fill-icon">hub</span>
            <span>All Servers</span>
          </Link>
          <Link to="/communities" className="text-on-surface-variant px-4 py-3 mx-2 flex items-center gap-4 hover:bg-surface-container-highest rounded-full transition-all">
            <span className="material-symbols-outlined">sports_esports</span>
            <span>FPS Elite</span>
          </Link>
          <Link to="/communities" className="text-on-surface-variant px-4 py-3 mx-2 flex items-center gap-4 hover:bg-surface-container-highest rounded-full transition-all">
            <span className="material-symbols-outlined">group_work</span>
            <span>MMO Raiders</span>
          </Link>
          <Link to="/communities" className="text-on-surface-variant px-4 py-3 mx-2 flex items-center gap-4 hover:bg-surface-container-highest rounded-full transition-all">
            <span className="material-symbols-outlined">timer</span>
            <span>Speedrunners</span>
          </Link>
          <Link to="/communities" className="text-on-surface-variant px-4 py-3 mx-2 flex items-center gap-4 hover:bg-surface-container-highest rounded-full transition-all">
            <span className="material-symbols-outlined">extension</span>
            <span>Strategy Lab</span>
          </Link>
        </nav>
      </aside>
      <main className="pt-16 px-container_padding space-y-6">
        <TournamentAlert />
        <QuickActions />
        <Communities />
        <ActivityFeed />
        <LFGSection />
      </main>
      <BottomNav />
    </>
  )
}
