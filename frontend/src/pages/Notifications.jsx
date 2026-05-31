import { useNavigate } from 'react-router-dom'
import BottomNav from '../components/BottomNav'

const notifications = [
  {
    id: 1,
    type: 'squad_invite',
    icon: 'diversity_3',
    color: 'text-primary',
    title: 'Squad Invite',
    desc: 'Ace_Viper invited you to join "Nightfall Scrims"',
    time: '2m ago',
    unread: true,
    action: 'View Squad',
  },
  {
    id: 2,
    type: 'tournament',
    icon: 'emoji_events',
    color: 'text-tertiary',
    title: 'Tournament Reminder',
    desc: '"Midnight Tactical 5v5" starts in 15 minutes',
    time: '5m ago',
    unread: true,
    action: 'Join Now',
  },
  {
    id: 3,
    type: 'community',
    icon: 'campaign',
    color: 'text-primary',
    title: 'Community Announcement',
    desc: 'FPS Elite: New ranked season starts next week',
    time: '1h ago',
    unread: false,
  },
  {
    id: 4,
    type: 'mention',
    icon: 'alternate_email',
    color: 'text-error',
    title: 'Mention',
    desc: 'NeonShadow mentioned you in #general',
    time: '3h ago',
    unread: false,
  },
  {
    id: 5,
    type: 'achievement',
    icon: 'stars',
    color: 'text-tertiary',
    title: 'Achievement Unlocked',
    desc: 'You reached Gold tier in Competitive',
    time: '1d ago',
    unread: false,
  },
  {
    id: 6,
    type: 'friend_request',
    icon: 'person_add',
    color: 'text-primary',
    title: 'Friend Request',
    desc: 'PixelPaladin wants to add you as a friend',
    time: '2d ago',
    unread: false,
    action: 'Accept',
  },
]

export default function Notifications() {
  const navigate = useNavigate()

  return (
    <>
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-container_padding h-touch_target_min bg-surface-container border-b border-outline-variant">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="text-primary hover:bg-surface-container-high transition-colors p-2 rounded-full active:scale-95">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="font-headline-md text-headline-md text-on-surface text-[20px]">Notifications</h1>
        </div>
        <button className="text-primary font-label-caps text-label-caps">Mark All Read</button>
      </header>

      <main className="pt-touch_target_min pb-bottom_nav_height">
        <div className="px-container_padding py-4 space-y-1">
          {notifications.map((n) => (
            <div
              key={n.id}
              className={`flex items-start gap-3 px-4 py-4 rounded-xl transition-all active:scale-[0.99] cursor-pointer hover:bg-surface-container ${
                n.unread ? 'bg-surface-container-high border-l-2 border-primary' : ''
              }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                n.unread ? 'bg-primary/15' : 'bg-surface-container-highest'
              }`}>
                <span className={`material-symbols-outlined text-[20px] ${n.color} ${n.unread ? 'fill-icon' : ''}`}>{n.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="font-body-lg text-[14px] text-on-surface font-medium">{n.title}</span>
                  <span className="font-label-caps text-[10px] text-outline flex-shrink-0 ml-2">{n.time}</span>
                </div>
                <p className="font-body-sm text-[13px] text-on-surface-variant truncate">{n.desc}</p>
                {n.action && (
                  <button className="mt-2 font-label-caps text-[10px] text-primary uppercase tracking-widest hover:underline">
                    {n.action}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="px-container_padding py-8 text-center">
          <p className="font-body-sm text-outline text-[12px]">End of notifications</p>
        </div>
      </main>

      <BottomNav />
    </>
  )
}
