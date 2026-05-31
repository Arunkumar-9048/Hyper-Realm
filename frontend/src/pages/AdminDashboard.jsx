import { useNavigate } from 'react-router-dom'
import BottomNav from '../components/BottomNav'

const stats = [
  { label: 'Total Users', value: '4,827', change: '+12%', icon: 'group', color: 'text-primary' },
  { label: 'Active Communities', value: '128', change: '+5', icon: 'groups', color: 'text-tertiary' },
  { label: 'Tournaments', value: '47', change: '+8', icon: 'emoji_events', color: 'text-primary' },
  { label: 'Squads Formed', value: '1,294', change: '+23%', icon: 'diversity_3', color: 'text-green-400' },
]

const recentReports = [
  { id: 1, user: 'User_6742', reason: 'Harassment', community: 'FPS Elite', status: 'Pending' },
  { id: 2, user: 'Toxic_Player_99', reason: 'Cheating', community: 'Tactical Ops', status: 'Pending' },
  { id: 3, user: 'Spammer_01', reason: 'Spam', community: 'MMO Raiders', status: 'Resolved' },
]

export default function AdminDashboard() {
  const navigate = useNavigate()

  return (
    <>
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-container_padding h-touch_target_min bg-surface-container border-b border-outline-variant">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="text-primary hover:bg-surface-container-high transition-colors p-2 rounded-full active:scale-95">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div>
            <h1 className="font-headline-md text-headline-md text-on-surface text-[20px]">Dashboard</h1>
            <span className="font-label-caps text-[9px] text-outline uppercase tracking-widest">Creator / Admin</span>
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center text-primary font-bold text-[12px]">A</div>
      </header>

      <main className="pt-touch_target_min pb-bottom_nav_height">
        <div className="px-container_padding py-6 space-y-6">
          <div className="grid grid-cols-2 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="bg-surface-container border border-outline-variant rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className={`material-symbols-outlined text-[22px] ${s.color}`}>{s.icon}</span>
                  <span className="font-label-caps text-[10px] text-green-400">{s.change}</span>
                </div>
                <p className="font-headline-md text-headline-md text-on-surface text-[22px]">{s.value}</p>
                <p className="font-label-caps text-label-caps text-outline uppercase tracking-widest mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          <div>
            <h2 className="font-label-caps text-label-caps text-outline mb-3 uppercase tracking-widest">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex flex-col items-center justify-center gap-2 py-5 bg-surface-container border border-outline-variant rounded-xl hover:bg-surface-container-high active:scale-95 transition-all">
                <span className="material-symbols-outlined text-primary text-[24px]">add_circle</span>
                <span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wider">Create Tournament</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-2 py-5 bg-surface-container border border-outline-variant rounded-xl hover:bg-surface-container-high active:scale-95 transition-all">
                <span className="material-symbols-outlined text-tertiary text-[24px]">campaign</span>
                <span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wider">New Announcement</span>
              </button>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-label-caps text-label-caps text-outline uppercase tracking-widest">Moderation Queue</h2>
              <span className="bg-error text-on-error font-label-caps text-[9px] px-2 py-0.5 rounded-full">2 Pending</span>
            </div>
            <div className="space-y-2">
              {recentReports.map((r) => (
                <div key={r.id} className="flex items-center gap-3 px-4 py-3 bg-surface-container border border-outline-variant rounded-lg">
                  <div className={`w-2 h-2 rounded-full ${r.status === 'Pending' ? 'bg-error' : 'bg-green-400'}`}></div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-body-sm text-on-surface text-[13px]">{r.user}</span>
                      <span className="font-label-caps text-[9px] text-outline bg-surface-container-highest px-1.5 py-0.5 rounded">{r.reason}</span>
                    </div>
                    <p className="font-label-caps text-[10px] text-outline mt-0.5">{r.community}</p>
                  </div>
                  <span className={`font-label-caps text-[9px] uppercase tracking-wider ${
                    r.status === 'Pending' ? 'text-error' : 'text-green-400'
                  }`}>{r.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <BottomNav />
    </>
  )
}
