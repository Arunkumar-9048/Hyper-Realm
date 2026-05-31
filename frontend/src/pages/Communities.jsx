import { Link, useNavigate } from 'react-router-dom'
import BottomNav from '../components/BottomNav'

const games = [
  { name: 'VALORANT', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcQYiNDISZssLfLbzUVa0PobwBxjKjxCnYnZZ3-qdJppH2T35Y40pBpR4qJhYt5r1IE5mfmHO6r9_6Fl8ZRJQ3gS-kWvDzUk1KxBSz6haKsxk5d-STW1wvQeoOd57y8qjwvZvxmnQA4H6Uh298keOZOpB0lTCEAWLZti1rOLuHzYrRxX9SYd6CnC5_Orj-ZxY1Yb3-yryN4BMJvZfKkgqwLrQsE659CpOFu05JctVKKrORgbqmmMFTA3kH5AvXy8K9ASRelgZBvQ' },
  { name: 'APEX', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWAd4t96f1cwUhzFVBluxAA8MdJO7Z9tE1MbUMDL9ltZTqauwcgFf4DdmmglmYqR9AgzQ9brT8xnXH1BA4sB6J8yfFhwk4t3N9elNI9VPcfw4TnC6OmiEh2YqMr_0NPlGPpnaUqaRj1CAU3pLwO-MMRDpALWwMWLHb2LPJ30BVKuX5uaiFxeZQUyfJQKVBIm5Tq7VJrQ6a_IT1R9z96CnO4qPFfy9X90dHcJN7VKdgQOXo9HeoLxEBi-CIZURUwWoDCgLajgr1RQ' },
  { name: 'CS2', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBg_6UgJz9rUSoiouqF07cAPoSsdafQtwkgP1uwADAJsAFlEFVXVPWaGR5sgWgQJX-ZWOsoE0VkDRNwY1UCU3Tb7H9IyHMkQ494ua6cXcCx-tdTGXFzDqHE3W_dCDoDH-i2_DCYIXspAIJ9C-5xliicj3Gw461sI9KatvN_7FrMjZZk87FFjyUJP3sQN9tyutqPUIT9KANspNY0-sOYnHt_uAfLN8TWg2GbULnI37UhLCM9usFDvubP1MQUkWWSwVEfzdvygFgLRg' },
  { name: 'LEAGUE', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAK4Rv5X5urk5c50VRG8GlJCSmYvtCNJMBumIObzi7ml7W0xGHa_d9Fto1OHgdTKQZ6AHe95MbChaqXajXIcdCrzZmVLRUYUJxvD9-TyGP6USUoIzSIjZKGkYy4TXB5lOY6TARfI1-abaXt29XJn5ycnKubJ_w6WOZPlXq0PrS8hIwgJknljPe5GOX71ubRjzjQUjzN-OVzlexvm_9ONOsfZjD73vfqz0vAfexTW873b6jyXCeUKdzgriK5zdllxdEjC_OewG_AoQ' },
]

const communities = [
  {
    name: 'FPS Elite',
    tag: 'Tier 1 Competitive',
    members: '12.4K',
    squads: '42',
    badge: { text: 'LIVE MATCHES', color: 'bg-[#22c55e] text-white' },
    button: { text: 'ENTER', variant: 'primary' },
    banner: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfsffkSnq0VKYFhheRXsUf_k6xd77YyI9hVzxEIm_DZ6VlyasHA4QNvfDWtTpm62QsAxMh7i1zcn-bd5g7KDyQGYHDzOOgiFdjw00M_hsNlR9lq5dosLRwcNZCsPXEw2Natm7b24q2SXSn8vjTWacrE_E9L-EiEkrHgDK2hWSkMPVYPXgE1DagouucYA30hJdvsvYmlFsbiCOOKW1t5256H6A5nofhNmPJ-OjyzAHlb_6pzPPKZEQ2JpaDrr-rcCdHI_pAIQe1GA',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsqbpV9bVqDYaZrk5U_slYdF6HnWhvtgipvQOk0WtZBaMvQ0k5iUdfn0vF-xUjEeLyy2BrtEdMCttbkqNKhQ-FBWKIf2IHB186yVwdMTt-EpFVKarRCNjQrdDfxVqQS88cX7EzSSRVPpfch4M3NaXpWz1jompEWucGOSQnVg3de82ngISJqHUoWbWwvCST_leIZKNR_nsYe2KL6KNMIVWYh1y0Y3G3y0TVfkAlJg-3U8zz4p73f61MKapbH9Cr8s1j97iAnhysaw'
  },
  {
    name: 'Tactical Ops',
    tag: 'Strategy & Stealth',
    members: '8.9K',
    squads: '15',
    badge: { text: 'TOURNAMENTS', color: 'bg-primary text-on-primary' },
    button: { text: 'JOIN', variant: 'outline' },
    banner: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAT98krLdcyyndLn14DR-ARkKytY3e5g8I6uIrLRq-rMdHBHUMA-y5FSoKxPOW5jPsqkbHBQs_8tPd2YxMN512YbkEYV1pL0BR7qZwLAmn2Bb5eBh5YmTTP4kb3HJUcNqAkBIYm39XbBU3jpahMDsBIcRH7x6GjhYUlVmfVG2myrRp0AZBiem0e4LmV5OcGTb7yR1IojcW8gKtE41lb0ruEh4N1Q0pslJiEOrn0CTI15Ern1BMnxe86qigVY1QeUmPttd7UXMhN_w',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiAbJTAiPuq2UL2AZdgvtmlcZ4UeyuV2JWVA4LwdWqBXss2InJkK_rkODAmgb5P0VpXVlhROm7AzO8zsexCvD-74kH2de8wnDovp4Q2BBcRoSziVbcYImnchwR4DhQ0YdeeLrXw1O7fPZwRVs0EME7cPuWQEP4LG1vXS1zpHbtElUBvCSGsBhX-tZ0FB0EyW4Jtq0j8amUqbRyE3bRtk_anCNsxGJ7D78CCoyAZ2PdjrmBNK_hKjR161lH-Y0QCx48SkE4PcXi3g'
  },
  {
    name: 'MMO Raiders',
    tag: 'Open World Conquest',
    members: '24.1K',
    squads: '108',
    badge: null,
    button: { text: 'JOIN', variant: 'outline' },
    banner: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOFezzpmiIswK5G7NFksPJ2G3bOXGrcqvBdQHKIWe4PGG41k5YnXdAJz4X1kCcOZCG_EZggp4DcCZFvFNdcTw3XwxROjnOiZt0ShUdyNATNSHxnyyyba0ffwhmXMIdGF6l7rfEabOvZ0cbsLePi0bku_qr3NPf0h5iHskgg8FXAWW4SqQtboZQ2Ky8XofH66n5uXHUR7EtWk40iu7JMlXEnE8TN3qSfbFtqAWyqW0epLaWWaiWpbV5xt0VORFJQsgDDtZNsg7RgA',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8ajQoilMRB_JDJ56L-aaGksZNUlsYCeT2GiC0DHdxxzX6C3LK0ol4__l6wXllJ_Q38WAnNxEbyihw_02W6njxrgWCFCwMYPPNFUp5uJ93uung7OspMM3kCFnQsj6D9y8ddSBsDa3r_JmCxQHyuZEPBiB4k9qjkfa19-qbNTvuK1CUndvLy8kLsVT8xnCpTNg3IDmdsPC8GdtNcGdAyu7Mjwp3qQ7K4fqcuAFCCdCZZESlErFLlf2FS1L5DCWzyyNt7KL-oJndqA'
  }
]

export default function Communities() {
  const navigate = useNavigate()

  const slugify = (name) => name.toLowerCase().replace(/\s+/g, '-')

  return (
    <>
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-container_padding h-touch_target_min bg-surface-container border-b border-outline-variant">
        <div className="flex items-center gap-base_unit">
          <button className="w-10 h-10 flex items-center justify-center hover:bg-surface-container-high transition-colors active:scale-95 duration-100 rounded">
            <span className="material-symbols-outlined text-primary">menu</span>
          </button>
          <Link to="/" className="font-display text-display text-primary uppercase tracking-tighter text-[20px]">SQUAD_UP</Link>
        </div>
        <div className="flex items-center">
          <button className="w-10 h-10 flex items-center justify-center hover:bg-surface-container-high transition-colors active:scale-95 duration-100 rounded">
            <span className="material-symbols-outlined text-primary">search</span>
          </button>
        </div>
      </header>

      <main className="pt-[44px] pb-[80px]">
        <section className="px-container_padding pt-6 pb-4 bg-gradient-to-b from-surface-container-low to-background">
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-outline text-[20px]">search</span>
            </div>
            <input
              className="w-full bg-surface-container-highest border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg py-3 pl-10 pr-4 text-body-sm transition-all outline-none"
              placeholder="Explore battlegrounds..."
              type="text"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto hide-scrollbar">
            <button className="flex-none px-4 py-2 rounded-full bg-primary text-on-primary font-label-caps text-label-caps whitespace-nowrap active:scale-95 transition-transform">RECOMMENDED</button>
            <button className="flex-none px-4 py-2 rounded-full bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps whitespace-nowrap hover:bg-surface-container-highest transition-colors active:scale-95">TRENDING</button>
            <button className="flex-none px-4 py-2 rounded-full bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps whitespace-nowrap hover:bg-surface-container-highest transition-colors active:scale-95">MY SERVERS</button>
            <button className="flex-none px-4 py-2 rounded-full bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps whitespace-nowrap hover:bg-surface-container-highest transition-colors active:scale-95">GLOBAL</button>
          </div>
        </section>

        <section className="mb-8">
          <div className="flex items-center justify-between px-container_padding mb-4">
            <h2 className="font-headline-md text-headline-md uppercase tracking-tight text-[18px]">Battle Disciplines</h2>
            <button className="text-primary font-label-caps text-label-caps">VIEW ALL</button>
          </div>
          <div className="flex gap-4 overflow-x-auto hide-scrollbar px-container_padding">
            {games.map((game) => (
              <div key={game.name} className="flex-none group cursor-pointer text-center">
                <div className="w-16 h-16 rounded-xl overflow-hidden cyber-border mb-2 group-hover:border-primary transition-all group-active:scale-90 relative">
                  <img
                    alt={game.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                    src={game.img}
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <span className="font-label-caps text-label-caps text-outline group-hover:text-primary transition-colors">{game.name}</span>
              </div>
            ))}
            <div className="flex-none group cursor-pointer text-center">
              <div className="w-16 h-16 rounded-xl overflow-hidden cyber-border mb-2 group-hover:border-primary transition-all group-active:scale-90 relative">
                <div className="w-full h-full flex items-center justify-center bg-surface-container-high text-outline group-hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">add</span>
                </div>
              </div>
              <span className="font-label-caps text-label-caps text-outline">MORE</span>
            </div>
          </div>
        </section>

        <section className="px-container_padding space-y-4">
          <h2 className="font-headline-md text-headline-md uppercase tracking-tight text-[18px] mb-4">Elite Communities</h2>
          {communities.map((c) => (
            <div
              key={c.name}
              onClick={() => navigate(`/communities/${slugify(c.name)}`)}
              className="bg-surface-container rounded-xl overflow-hidden cyber-border group hover:border-primary/50 transition-all duration-300 cursor-pointer active:scale-[0.98]"
            >
              <div className="relative h-28 w-full overflow-hidden">
                <img
                  alt={c.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={c.banner}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent"></div>
                {c.badge && (
                  <div className="absolute top-3 right-3 flex gap-2">
                    <span className={`px-2 py-1 font-label-caps text-[9px] rounded-sm tracking-widest flex items-center gap-1 ${c.badge.color}`}>
                      {c.badge.text === 'LIVE MATCHES' && <span className="w-1 h-1 rounded-full bg-white animate-pulse"></span>}
                      {c.badge.text}
                    </span>
                  </div>
                )}
                <div className="absolute bottom-3 left-3 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full border-2 border-surface-container overflow-hidden bg-black glow-accent">
                    <img alt="Avatar" className="w-full h-full object-cover" src={c.avatar} />
                  </div>
                  <div>
                    <h3 className="font-headline-md text-headline-md text-[16px] text-white">{c.name}</h3>
                    <p className="font-body-sm text-body-sm text-outline">{c.tag}</p>
                  </div>
                </div>
              </div>
              <div className="p-4 pt-2">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-4">
                    <div className="text-center">
                      <p className="text-white font-headline-md text-[14px]">{c.members}</p>
                      <p className="text-outline text-[10px] uppercase font-label-caps">Members</p>
                    </div>
                    <div className="text-center">
                      <p className="text-white font-headline-md text-[14px]">{c.squads}</p>
                      <p className="text-outline text-[10px] uppercase font-label-caps">Active Squads</p>
                    </div>
                  </div>
                  {c.button.variant === 'primary' ? (
                    <button
                      onClick={(e) => { e.stopPropagation(); navigate(`/communities/${slugify(c.name)}`) }}
                      className="bg-primary text-on-primary font-label-caps text-label-caps px-6 py-2 rounded-lg hover:shadow-[0_0_15px_rgba(167,139,250,0.4)] active:scale-95 transition-all"
                    >ENTER</button>
                  ) : (
                    <button
                      onClick={(e) => { e.stopPropagation(); navigate(`/communities/${slugify(c.name)}`) }}
                      className="border border-primary text-primary hover:bg-primary/10 font-label-caps text-label-caps px-6 py-2 rounded-lg active:scale-95 transition-all"
                    >JOIN</button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>

      <BottomNav />
    </>
  )
}
