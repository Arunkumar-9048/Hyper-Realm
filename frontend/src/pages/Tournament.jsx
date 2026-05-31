import { Link } from 'react-router-dom'
import BottomNav from '../components/BottomNav'

export default function Tournament() {
  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-background border-b border-white/10 flex items-center justify-between px-gutter h-14">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary active:scale-95 transition-transform">menu</span>
          <Link to="/" className="font-display text-headline-md font-bold text-primary tracking-tighter">SQUAD_UP</Link>
        </div>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-primary active:scale-95 transition-transform">search</span>
        </div>
      </header>

      <main className="pt-14 pb-20 px-container_padding min-h-screen">
        <section className="mt-6">
          <div className="relative w-full h-48 rounded-xl overflow-hidden mb-6 border border-primary/20 glow-accent">
            <img
              className="w-full h-full object-cover opacity-60"
              alt="Tournament banner"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0R-j_so6Dtkvyr9fCAyfzR6Aw9BLQI-poUgIoYRha2VYodzsKE3ehqAe50ln3kM5wk3UaJhjfoxDF7Yox2OISFOQKFNzLfhH5JWZr13QcFXgZtbrUJxkh0lhk_rldrKNPATcF08MNH_dmqltN5GgtIyQzjM5uxMHC8TExO6oMEqUBot4dXKaIH8KTCM7-YUihx57gSUNr_tuI4fjxgX5GFHlyjKzjBq6ZM9fKu57hWV90KBxmOV3eJmn2VrmQl2l4VUi6UhjuZQ"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-[#22c55e] text-black font-label-caps text-[10px] px-2 py-0.5 rounded-full font-bold">LIVE</span>
                <span className="text-primary font-label-caps text-[10px] tracking-widest uppercase">Apex Legends Global</span>
              </div>
              <h2 className="font-display text-headline-md font-bold leading-tight">CHAMPIONS RECKONING</h2>
              <div className="flex justify-between items-end mt-2">
                <div className="flex flex-col">
                  <span className="text-on-surface-variant font-label-caps text-[10px]">PRIZE POOL</span>
                  <span className="font-display text-xl text-primary font-bold tracking-tight">$25,000</span>
                </div>
                <button className="bg-primary text-on-primary px-4 h-9 rounded-lg font-bold text-sm hover:brightness-110 active:scale-95 transition-all">VIEW LIVE</button>
              </div>
            </div>
          </div>
        </section>

        <div className="flex gap-2 mb-6 overflow-x-auto no-scrollbar py-2">
          <button className="whitespace-nowrap px-4 py-2 rounded-full bg-primary text-on-primary font-label-caps text-[11px] font-bold">ALL GAMES</button>
          <button className="whitespace-nowrap px-4 py-2 rounded-full bg-surface-container-high text-on-surface-variant border border-white/5 font-label-caps text-[11px]">FPS</button>
          <button className="whitespace-nowrap px-4 py-2 rounded-full bg-surface-container-high text-on-surface-variant border border-white/5 font-label-caps text-[11px]">MOBA</button>
          <button className="whitespace-nowrap px-4 py-2 rounded-full bg-surface-container-high text-on-surface-variant border border-white/5 font-label-caps text-[11px]">BATTLE ROYALE</button>
        </div>

        <h3 className="font-display text-lg font-bold text-on-surface mb-4 tracking-tight flex items-center gap-2">
          <span className="w-1 h-4 bg-primary rounded-full"></span>
          OPEN REGISTRATION
        </h3>

        <div className="grid gap-4">
          <Link to="/tournament/midnight-tactical-5v5" className="block glass-card rounded-xl p-4 flex flex-col gap-4 active:scale-[0.98] transition-transform">
            <div className="flex justify-between items-start">
              <div className="flex gap-3">
                <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center border border-white/10 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt="Game icon"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2NtADsewLzYOvGSA0sqsDOm0NQjl3jjNxZ1NswLASqjTEhoUoNunrXZfrjVjUN_cPNY_mifa2DxZIvCzFlkEc8wdZBYuRsw_ZibPuEZRpYZJO8H1rnuWIRtIAUmw4h3zzJ9kV-EIgB0UP4_Cc4ctQ7UN0bl-2x8ohZdrODQL3GiaS51dXggqr1fxuuGgCb32angPWfYOh7GgexUGyhpOACBkh7Tdm1xZWNR7bmpqc7T32hurx59y1bR1LYephMubKmXb-0PxP3w"
                  />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-display font-bold text-body-lg">Midnight Tactical 5v5</h4>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[14px] text-on-surface-variant">schedule</span>
                    <span className="text-on-surface-variant text-body-sm">Starts in 4h 20m</span>
                  </div>
                </div>
              </div>
              <span className="bg-primary/10 text-primary border border-primary/20 font-label-caps text-[10px] px-2 py-1 rounded">REGISTERING</span>
            </div>
            <div className="h-px bg-white/5 w-full"></div>
            <div className="flex justify-between items-center">
              <div className="flex gap-4">
                <div className="flex flex-col">
                  <span className="text-on-surface-variant font-label-caps text-[10px]">PRIZE</span>
                  <span className="font-display font-bold text-primary">$1,500</span>
                </div>
                <div className="flex flex-col border-l border-white/10 pl-4">
                  <span className="text-on-surface-variant font-label-caps text-[10px]">ENTRY</span>
                  <span className="font-display font-bold">FREE</span>
                </div>
              </div>
              <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.location.href = '/tournament/midnight-tactical-5v5' }} className="bg-primary text-on-primary px-6 h-10 rounded-lg font-bold text-sm hover:brightness-110 active:scale-95 transition-all">Register</button>
            </div>
          </Link>

          <Link to="/tournament/midnight-tactical-5v5" className="block glass-card rounded-xl p-4 flex flex-col gap-4 active:scale-[0.98] transition-transform">
            <div className="flex justify-between items-start">
              <div className="flex gap-3">
                <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center border border-white/10 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt="Trophy icon"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzK-C59Qee8Q_LOB7UU02JS5A4T0nuH3zQXaCh1CLIcVhgTGOIgoKx6Y26pzmX7j9cPOqPD6kHp1tVHSa2jsqYVBSUCm0pTZEXn2T1eo5IjSQfjkorZNo-AOeQ3yNQtmUJ6jY6f0BkKfCf10l_ULxR03SperPGw088MpkjlqhGx6GhpPtvrdT6p9bOfgFZqyjrontwUlTG15pWiLR-udCs-TvmFK59zohYrpjWLDQvIefrOvFnDJIc_9amnYrNf6yP_RyGo2wEkw"
                  />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-display font-bold text-body-lg">Valorant Pro Series S2</h4>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[14px] text-on-surface-variant">calendar_today</span>
                    <span className="text-on-surface-variant text-body-sm">Tomorrow, 18:00</span>
                  </div>
                </div>
              </div>
              <span className="bg-primary/10 text-primary border border-primary/20 font-label-caps text-[10px] px-2 py-1 rounded">REGISTERING</span>
            </div>
            <div className="h-px bg-white/5 w-full"></div>
            <div className="flex justify-between items-center">
              <div className="flex gap-4">
                <div className="flex flex-col">
                  <span className="text-on-surface-variant font-label-caps text-[10px]">PRIZE</span>
                  <span className="font-display font-bold text-primary">$5,000</span>
                </div>
                <div className="flex flex-col border-l border-white/10 pl-4">
                  <span className="text-on-surface-variant font-label-caps text-[10px]">SLOTS</span>
                  <span className="font-display font-bold">12/64</span>
                </div>
              </div>
              <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.location.href = '/tournament/midnight-tactical-5v5' }} className="bg-primary text-on-primary px-6 h-10 rounded-lg font-bold text-sm hover:brightness-110 active:scale-95 transition-all">Register</button>
            </div>
          </Link>

          <div className="bg-surface-container-low/50 rounded-xl p-4 flex items-center justify-between border border-white/5 opacity-80">
            <div className="flex gap-3 items-center">
              <span className="material-symbols-outlined text-on-surface-variant">check_circle</span>
              <div className="flex flex-col">
                <h4 className="font-display font-bold text-on-surface-variant">Weekly Warzone Duel</h4>
                <span className="text-on-surface-variant text-[12px]">Finished yesterday &bull; Winner: Team_Void</span>
              </div>
            </div>
            <span className="bg-on-surface-variant/10 text-on-surface-variant border border-on-surface-variant/20 font-label-caps text-[10px] px-2 py-1 rounded">FINISHED</span>
          </div>
        </div>
      </main>

      <BottomNav />
    </>
  )
}
