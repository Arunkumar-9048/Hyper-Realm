import { NavLink } from 'react-router-dom'

export default function BottomNav() {
  const linkClass = ({ isActive }) =>
    `flex flex-col items-center justify-center transition-all duration-300 active:scale-90 ${
      isActive
        ? 'text-primary border-t-2 border-primary pt-1'
        : 'text-on-surface-variant pt-2 hover:text-primary'
    }`

  return (
    <nav className="fixed bottom-0 w-full h-bottom_nav_height z-50 bg-surface-variant border-t border-primary/20 flex justify-around items-center px-base_unit pb-safe shadow-[0_-4px_12px_rgba(167,139,250,0.1)] md:hidden">
      <NavLink to="/" className={linkClass}>
        <span className="material-symbols-outlined">home</span>
        <span className="font-tab-label text-[9px] uppercase tracking-widest mt-1">Home</span>
      </NavLink>
      <NavLink to="/communities" className={linkClass}>
        <span className="material-symbols-outlined">groups</span>
        <span className="font-tab-label text-[9px] uppercase tracking-widest mt-1">Community</span>
      </NavLink>
      <NavLink to="/squadfinder" className={linkClass}>
        <span className="material-symbols-outlined">diversity_3</span>
        <span className="font-tab-label text-[9px] uppercase tracking-widest mt-1">Squad</span>
      </NavLink>
      <NavLink to="/tournament" className={linkClass}>
        <span className="material-symbols-outlined">emoji_events</span>
        <span className="font-tab-label text-[9px] uppercase tracking-widest mt-1">Tournaments</span>
      </NavLink>
      <NavLink to="/profile" className={linkClass}>
        <span className="material-symbols-outlined">account_circle</span>
        <span className="font-tab-label text-[9px] uppercase tracking-widest mt-1">Profile</span>
      </NavLink>
    </nav>
  )
}
