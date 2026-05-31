import { Link } from 'react-router-dom'

export default function QuickActions() {
  return (
    <section>
      <div className="grid grid-cols-2 gap-3">
        <Link to="/squadfinder" className="bg-surface-container-low border border-white/5 p-4 rounded-xl flex flex-col gap-3 active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-primary fill-icon">groups</span>
          <div>
            <div className="text-body-lg font-bold">Find Squad</div>
            <div className="text-[11px] text-tertiary font-label-caps">324 ACTIVE</div>
          </div>
        </Link>
        <Link to="/tournament" className="bg-surface-container-low border border-white/5 p-4 rounded-xl flex flex-col gap-3 active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-primary fill-icon">emoji_events</span>
          <div>
            <div className="text-body-lg font-bold">Tournaments</div>
            <div className="text-[11px] text-tertiary font-label-caps">2 LIVE NOW</div>
          </div>
        </Link>
        <div className="bg-surface-container-low border border-white/5 p-4 rounded-xl flex flex-col gap-3 active:scale-95 transition-transform">
          <div className="relative w-fit">
            <span className="material-symbols-outlined text-primary fill-icon">chat_bubble</span>
            <span className="absolute -top-1 -right-1 bg-error text-[8px] text-white px-1 rounded-full border border-background">12</span>
          </div>
          <div>
            <div className="text-body-lg font-bold">Messages</div>
            <div className="text-[11px] text-on-surface-variant font-label-caps uppercase">12 NEW</div>
          </div>
        </div>
        <Link to="/profile" className="bg-surface-container-low border border-white/5 p-4 rounded-xl flex flex-col gap-3 active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-primary fill-icon">leaderboard</span>
          <div>
            <div className="text-body-lg font-bold">My Stats</div>
            <div className="text-[11px] text-on-surface-variant font-label-caps uppercase">LVL 42</div>
          </div>
        </Link>
      </div>
    </section>
  )
}
