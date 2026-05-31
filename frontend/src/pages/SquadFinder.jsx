import { Link } from 'react-router-dom'
import BottomNav from '../components/BottomNav'

export default function SquadFinder() {
  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-background border-b border-white/10 flex items-center justify-between px-gutter h-14">
        <div className="flex items-center gap-base_unit active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-primary">menu</span>
        </div>
        <Link to="/" className="font-display text-display font-bold text-primary tracking-tighter">SQUAD_UP</Link>
        <div className="flex items-center gap-base_unit active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-primary">search</span>
        </div>
      </header>

      <main className="pt-14 pb-20 px-container_padding">
        <section className="mt-6 mb-8">
          <h2 className="font-headline-md text-headline-md text-on-background mb-2">Looking For Group</h2>
          <p className="text-on-surface-variant font-body-sm">Find your next squad and dominate the leaderboard.</p>
        </section>

        <div className="flex gap-2 overflow-x-auto no-scrollbar mb-8 -mx-container_padding px-container_padding">
          <button className="flex-shrink-0 bg-primary text-on-primary px-4 py-2 rounded-full font-label-caps flex items-center gap-1 active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-[16px]">sports_esports</span>
            ALL GAMES
          </button>
          <button className="flex-shrink-0 bg-surface-container-high text-on-surface-variant px-4 py-2 rounded-full font-label-caps border border-white/5 hover:bg-surface-container-highest transition-colors active:scale-95">
            RANKED
          </button>
          <button className="flex-shrink-0 bg-surface-container-high text-on-surface-variant px-4 py-2 rounded-full font-label-caps border border-white/5 hover:bg-surface-container-highest transition-colors active:scale-95">
            NORTH AMERICA
          </button>
          <button className="flex-shrink-0 bg-surface-container-high text-on-surface-variant px-4 py-2 rounded-full font-label-caps border border-white/5 hover:bg-surface-container-highest transition-colors active:scale-95">
            COMPETITIVE
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <Link to="/communities" className="bg-surface-container border border-primary/40 rounded-xl p-4 card-glow relative overflow-hidden block">
            <div className="absolute top-0 right-0 bg-primary/20 text-primary font-label-caps px-3 py-1 rounded-bl-xl border-l border-b border-primary/30">
              MATCHMAKING
            </div>
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-3">
                <div className="relative">
                  <img
                    alt="Avatar"
                    className="w-12 h-12 rounded-full border-2 border-primary object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsXCGU8n-ezO5YGP_nu9uSERtXIPF6iKLO39-ZYvIdFqxzOqBAKD5AFv-g1B9Hre6IjGAu6yUPq5O4aPBEBhEc3upuXf3VNGVt2NbMXeNp4v7pyru30z3HcGGLeEVdRhKVb8faNminkvaY1Te0idtxBqWNn4q4XEJBkR-uAjzZ3Wb6CHlLMx2N3LQGRDerp3iHojTHiEH8yXhXw5UsBFJV2prGVhpfhKEegUCneBqTkzP39AQkt9kJSX2urdbvNFq3w_2xvNnLuw"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-surface-container"></div>
                </div>
                <div>
                  <h3 className="font-headline-md text-body-lg font-bold text-on-surface">Ace_Viper</h3>
                  <div className="flex items-center gap-1 text-on-surface-variant text-[12px] font-label-caps">
                    <span className="material-symbols-outlined text-[14px]">military_tech</span>
                    DIAMOND III
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-on-surface-variant font-body-sm leading-snug">Need 2 more for push to Radiant. Must have mic and know execute setups on Haven. 18+ only.</p>
            </div>
            <div className="flex items-center justify-between border-t border-white/5 pt-4">
              <div className="flex items-center gap-4">
                <div className="flex flex-col">
                  <span className="text-[10px] font-label-caps text-on-surface-variant">PARTY</span>
                  <span className="text-primary font-display font-bold">3/5</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-label-caps text-on-surface-variant">REGION</span>
                  <span className="text-on-surface font-display font-bold text-[14px]">US-WEST</span>
                </div>
              </div>
              <button onClick={(e) => e.stopPropagation()} className="bg-primary text-on-primary h-[44px] px-8 rounded-lg font-display font-bold hover:brightness-110 active:scale-95 transition-all flex items-center justify-center">
                JOIN SQUAD
              </button>
            </div>
          </Link>

          <Link to="/communities" className="bg-surface-container-low border border-white/5 rounded-xl p-4 block">
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-3">
                <img
                  alt="Avatar"
                  className="w-12 h-12 rounded-full object-cover grayscale"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCStaiIC58q-cYHiAG0EQxgDgDsjUKausyGMgwzObGI_ZMMV9ZYoWOC7yyOkkrheDMKY3NPYOQTEVnKZXbQlrd_MpWZJxsFP6wImIfYP9Bzpg0c5tg518GPN0seqNEGAEnAqgwmENWoKvKGfJNAXbjrtfcoqzPu8hpIWHMYKg_7ymgKN80HYM_Mc-vfCwCpDzwdb6OqGIMgN9j1qNKNZCBUT8wJ39IwzLHQkKHgfe6aGwOiOPndNq0PU1sB57faCNW86ubVIyYskQ"
                />
                <div>
                  <h3 className="font-headline-md text-body-lg font-bold text-on-surface">NeonShadow</h3>
                  <div className="flex items-center gap-1 text-on-surface-variant text-[12px] font-label-caps">
                    <span className="material-symbols-outlined text-[14px]">military_tech</span>
                    GOLD II
                  </div>
                </div>
              </div>
              <span className="bg-white/5 text-on-surface-variant text-[10px] px-2 py-1 rounded font-label-caps">CASUAL</span>
            </div>
            <div className="mb-4">
              <p className="text-on-surface-variant font-body-sm leading-snug">Casual games only. No toxicity. Exploring new map features and testing agent combos.</p>
            </div>
            <div className="flex items-center justify-between border-t border-white/5 pt-4">
              <div className="flex items-center gap-4">
                <div className="flex flex-col">
                  <span className="text-[10px] font-label-caps text-on-surface-variant">PARTY</span>
                  <span className="text-on-surface font-display font-bold">1/4</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-label-caps text-on-surface-variant">PING</span>
                  <span className="text-green-500 font-display font-bold text-[14px]">24ms</span>
                </div>
              </div>
              <button onClick={(e) => e.stopPropagation()} className="bg-secondary-container text-on-secondary-container h-[44px] px-8 rounded-lg font-display font-bold hover:bg-surface-container-highest active:scale-95 transition-all">
                REQUEST
              </button>
            </div>
          </Link>

          <Link to="/communities" className="bg-surface-container-low border border-white/5 rounded-xl p-4 block">
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-3">
                <img
                  alt="Avatar"
                  className="w-12 h-12 rounded-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRxLdhNBFnWvWenqGZ_sRG32ex0WnXuacSenZHo_gM-EehSUaHz8RMfQsCkIhZ-IefrKDvMUHxAoqxhO056vjK0p1vkDDR_HVRZ--vzS7qtEq91hHFV5LDZjZwJYVlDflXDSXfraj7bneSPquraA6wGi_4qWyF17VlIg-MRvrh5DnHnuhKSK-gzQP985UD3l2LUq8JcaBk1pntXYKa2GR9DW0TAMmMQRDoldPox6Tj8qT_6aDZfoXFAQZSH4PCXC6zVrXBhIMDlQ"
                />
                <div>
                  <h3 className="font-headline-md text-body-lg font-bold text-on-surface">PixelPaladin</h3>
                  <div className="flex items-center gap-1 text-on-surface-variant text-[12px] font-label-caps">
                    <span className="material-symbols-outlined text-[14px]">military_tech</span>
                    PLAT I
                  </div>
                </div>
              </div>
              <span className="bg-white/5 text-on-surface-variant text-[10px] px-2 py-1 rounded font-label-caps">SCRIMS</span>
            </div>
            <div className="mb-4">
              <p className="text-on-surface-variant font-body-sm leading-snug">LF Team for Saturday tournament. Need a dedicated IGL and Entry. Be ready to practice.</p>
            </div>
            <div className="flex items-center justify-between border-t border-white/5 pt-4">
              <div className="flex items-center gap-4">
                <div className="flex flex-col">
                  <span className="text-[10px] font-label-caps text-on-surface-variant">PARTY</span>
                  <span className="text-on-surface font-display font-bold">4/5</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-label-caps text-on-surface-variant">REGION</span>
                  <span className="text-on-surface font-display font-bold text-[14px]">EU-WEST</span>
                </div>
              </div>
              <button onClick={(e) => e.stopPropagation()} className="bg-secondary-container text-on-secondary-container h-[44px] px-8 rounded-lg font-display font-bold hover:bg-surface-container-highest active:scale-95 transition-all">
                REQUEST
              </button>
            </div>
          </Link>

          <Link to="/communities" className="bg-surface-container-low border border-white/5 rounded-xl p-4 flex gap-4 block">
            <div className="flex flex-col items-center justify-center bg-surface-container-high rounded-lg px-3 min-w-[70px]">
              <span className="text-primary font-display text-headline-md font-bold">2/2</span>
              <span className="text-[10px] font-label-caps text-on-surface-variant">FULL</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-body-lg font-bold text-on-surface">Duo_Partner_Search</h3>
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant">lock</span>
              </div>
              <p className="text-[12px] text-on-surface-variant mb-2">Ranked grind. Bronze to Silver.</p>
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-surface-container-highest border border-white/10 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt="Avatar"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXV37BsZzMqBv4Lbck33Gwr7Z5qgoSHRxoxwwC2MYmAZKgzzDv1E-UGXIy0brNXZJtLq2SJtyfLAnLRaCQhF3F3yPnWslQeqBjrLZVwRlvHsamFok3MMyStobyRTWiFcLl0jT5AvCSZaqt68tBI2f3sESwPn_TdXZuEV3HDT2g_cbud_2Ihhm9f9NMxdmhrWmm1b2NELxNzf7hReLNVCqHD4nQuwoT8ykCwxVkcrmeX5Sx9XqyCXjiowCkiFA3UdCpAquqOqNn5A"
                  />
                </div>
                <div className="w-6 h-6 rounded-full bg-surface-container-highest border border-white/10 flex items-center justify-center">
                  <span className="text-[10px] font-label-caps text-primary">+1</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </main>

      <button className="fixed bottom-[84px] right-6 bg-primary text-on-primary w-14 h-14 rounded-full shadow-2xl flex items-center justify-center active:scale-90 transition-transform z-40">
        <span className="material-symbols-outlined text-[28px]">add</span>
      </button>

      <BottomNav />
    </>
  )
}
