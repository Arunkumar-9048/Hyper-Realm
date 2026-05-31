import { Link, useNavigate } from 'react-router-dom'
import BottomNav from '../components/BottomNav'

export default function Profile() {
  const navigate = useNavigate()
  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-background border-b border-white/10 flex items-center justify-between px-gutter h-14">
        <div className="flex items-center gap-4">
          <button className="active:scale-95 transition-transform text-primary">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <Link to="/" className="font-display text-display font-bold text-primary tracking-tighter text-[20px]">SQUAD_UP</Link>
        </div>
        <button className="active:scale-95 transition-transform text-primary">
          <span className="material-symbols-outlined">search</span>
        </button>
      </header>

      <main className="pt-20 pb-32 px-4 max-w-[375px] mx-auto min-h-screen">
        <section className="flex flex-col items-center mb-8">
          <div className="relative mb-4 group">
            <div className="absolute -inset-1 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative w-32 h-32 rounded-full p-1 border-2 border-primary/40">
              <img
                alt="Player One Avatar"
                className="w-full h-full object-cover rounded-full"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk4WdP0wD33rwaEftosnSDOD46jcbAnYMNfOuyPkBvx-L3bDfDuKpuhGsTkjyHAI77uXmeFKeaP3oSQ0Gt0NgyXkybD8A6qLw76oUf0SSJgUM7KIfCJfzGF8hq3HRJ7x034-2rbDe4-hS4DXwQ33wJlbfXJk9IwBJd9ExNuM_J4LnpqGN_BPg3xfcc0cqAzAZRRVlvvnWT9n-tWy2_X32p0re9VXQXVzg9bZ90gei8uXLqMvCZpgRpwbKejza-0eS9suFiRUBrpQ"
              />
              <div className="absolute bottom-0 right-0 bg-primary text-on-primary w-10 h-10 rounded-full flex items-center justify-center border-4 border-background shadow-lg">
                <span className="font-label-caps text-[12px] font-bold">LVL 42</span>
              </div>
            </div>
          </div>
          <div className="text-center mb-6">
            <h2 className="font-display text-headline-md text-on-surface mb-1">Player One</h2>
            <div className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="font-body-sm text-on-surface-variant">Online &middot; FPS Elite</span>
            </div>
          </div>
          <div className="flex gap-3 w-full">
            <button onClick={() => navigate('/profile/edit')} className="flex-1 h-11 bg-primary text-on-primary font-label-caps text-[13px] rounded-lg flex items-center justify-center gap-2 shadow-[0_4px_12px_rgba(167,139,250,0.2)] active:scale-[0.98] transition-transform">
              <span className="material-symbols-outlined text-[18px]">edit</span>
              EDIT PROFILE
            </button>
            <button className="w-11 h-11 bg-surface-container-high text-on-surface-variant border border-white/10 rounded-lg flex items-center justify-center active:scale-[0.98] transition-transform">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
        </section>

        <section className="grid grid-cols-2 gap-3 mb-8">
          <div className="glass-card rounded-xl p-4 col-span-2 border-primary/30">
            <p className="font-label-caps text-primary text-[10px] mb-1">GLOBAL WIN RATE</p>
            <div className="flex items-end justify-between">
              <span className="font-display text-display text-on-surface leading-none">68.4%</span>
              <span className="font-label-caps text-green-400 text-[12px] flex items-center">
                <span className="material-symbols-outlined text-[14px]">trending_up</span>
                +2.1%
              </span>
            </div>
            <div className="mt-3 w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-[68.4%]"></div>
            </div>
          </div>
          <div className="glass-card rounded-xl p-4">
            <p className="font-label-caps text-on-surface-variant text-[10px] mb-1">K/D RATIO</p>
            <span className="font-display text-headline-md text-on-surface leading-none">1.82</span>
          </div>
          <div className="glass-card rounded-xl p-4">
            <p className="font-label-caps text-on-surface-variant text-[10px] mb-1">MATCHES</p>
            <span className="font-display text-headline-md text-on-surface leading-none">1,240</span>
          </div>
          <div className="glass-card rounded-xl p-4">
            <p className="font-label-caps text-on-surface-variant text-[10px] mb-1">HEADSHOTS</p>
            <span className="font-display text-headline-md text-on-surface leading-none">42%</span>
          </div>
          <div className="glass-card rounded-xl p-4">
            <p className="font-label-caps text-on-surface-variant text-[10px] mb-1">MVP TITLES</p>
            <span className="font-display text-headline-md text-on-surface leading-none">156</span>
          </div>
        </section>

        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display text-on-surface text-[18px]">ACHIEVEMENTS</h3>
            <span className="font-label-caps text-primary text-[11px]">VIEW ALL</span>
          </div>
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
            <div className="flex-shrink-0 flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-gradient-to-br from-tertiary/20 to-tertiary-container/40 rounded-full flex items-center justify-center border border-tertiary/30 relative">
                <span className="material-symbols-outlined text-tertiary text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>military_tech</span>
              </div>
              <span className="font-label-caps text-[10px] text-on-surface-variant">SEASON 01</span>
            </div>
            <div className="flex-shrink-0 flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary-container/40 rounded-full flex items-center justify-center border border-primary/30">
                <span className="material-symbols-outlined text-primary text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
              <span className="font-label-caps text-[10px] text-on-surface-variant">ELITE ACE</span>
            </div>
            <div className="flex-shrink-0 flex flex-col items-center gap-2 opacity-50 grayscale">
              <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center border border-white/5">
                <span className="material-symbols-outlined text-on-surface-variant text-[32px]">emoji_events</span>
              </div>
              <span className="font-label-caps text-[10px] text-on-surface-variant">LOCKED</span>
            </div>
            <div className="flex-shrink-0 flex flex-col items-center gap-2 opacity-50 grayscale">
              <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center border border-white/5">
                <span className="material-symbols-outlined text-on-surface-variant text-[32px]">bolt</span>
              </div>
              <span className="font-label-caps text-[10px] text-on-surface-variant">LOCKED</span>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display text-on-surface text-[18px]">RECENT SQUADS</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 glass-card rounded-lg">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <img
                    className="w-8 h-8 rounded-full border border-background"
                    alt="Squad member"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjmU8i_cxgUl2c4IYAM0-WThifd2zztKnJrXCb54aQ7FbvEgOBBJabr-OPN9An42dS07xDyT3t8ZszlBsP6yg09or0wIYpNwKK8Ag4qm1efg2DH_zuSsrfHMPtes6CqbfFIR2mz-X2ywTsMmbJiZg2hqjBSJJIzYFOa075iql1oZzE61j1vl3vPE0RO1-VnnBBiiOO3HzP8CFtURaPi2IvyPGKsBNAltfxsltBBYy9dhhmt0dQ1_38XMfTzWdizeOPYzRhLX2ydA"
                  />
                  <img
                    className="w-8 h-8 rounded-full border border-background"
                    alt="Squad member"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCijyJ6U-yl6A7DCD_15_C6oWWViHE83jN_ObFG9iKCsqQBDF2y_rbmlQbTC9fO46QtAb14c29OPzzpOGdBzL2yDGvff7hYuZeLlMWX5aHBoHE5UII9Z6R0fyRDP5vcNYn5NfmZVeIheezSOWdGjnQexXrwyq25giRNUSwo1F8i1D8qaM8yGKiKeE0ZKDhc2TXETtOPrbAxR_9XIxFU68jDNu4F7vk6w1EQMxmMk0ladQd-zrVauucwomf9fubOdMRA7GemvOOh6Q"
                  />
                </div>
                <div>
                  <p className="font-body-sm font-medium text-on-surface">Alpha Strike</p>
                  <p className="text-[11px] text-on-surface-variant">Won 16-12 &middot; 2h ago</p>
                </div>
              </div>
              <span className="font-label-caps text-green-400 text-[11px]">+42 RP</span>
            </div>
            <div className="flex items-center justify-between p-3 glass-card rounded-lg">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <img
                    className="w-8 h-8 rounded-full border border-background"
                    alt="Squad member"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOmml9XeS_xzWZYudAt-g63zNHB6BY_X6DVbS6MMShoARn-COOeOGi1w8EsrhU89jE-0bvpgzxVWIB_S48eEIeo3Pvr21M5INwC5ZJhltDxXqAgMnjaek1aF-30C85-9SCoNgS6m_B_aWzlzSdCBVRpOwwYZuc1R5k16Cf1hIZr96reeFr_1pX4vEImThaQUse5rsyuFSvowpR5HEEnsDpkIEo-Hqu8Ai3L6MT5iZZGFZRVR9Oa05ADrzbTu2uw7TXH9cCrQZitw"
                  />
                  <img
                    className="w-8 h-8 rounded-full border border-background"
                    alt="Squad member"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_lTDH9aVrazIoyNs0D_120sQZi0c-uLEJSPF6XhzWfa4n0NUOX3leU369XIomSOpAmhAHGcSWrM70DuKTRhMfMw_Bk6nwxPEQw1YN8Ecinl5NQio8Q4_ilxzOcL27tyU6naTs4HfIy-sqkqKeuLuDLbmt1_1Ar4eM4InTicbIlYhV5mA8VIpJntS_jj7_G6C93iR36O1xSDY6lz7Yxpn2Aiby25oJI3u0FeDMWHSae3rZLGDfGoD8lB9EXt_OHihzM5XWUCmmKg"
                  />
                </div>
                <div>
                  <p className="font-body-sm font-medium text-on-surface">Night Raiders</p>
                  <p className="text-[11px] text-on-surface-variant">Lost 9-16 &middot; 5h ago</p>
                </div>
              </div>
              <span className="font-label-caps text-error text-[11px]">-15 RP</span>
            </div>
          </div>
        </section>

        <div className="px-container_padding pt-6 pb-4">
          <div className="border-t border-outline-variant/50 pt-6 space-y-3">
            <button
              onClick={() => navigate('/login')}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-error hover:bg-error/5 transition-all active:scale-[0.98]"
            >
              <span className="material-symbols-outlined text-[20px]">logout</span>
              <span className="font-body-sm">Logout</span>
            </button>
          </div>
        </div>
      </main>

      <BottomNav />
    </>
  )
}
