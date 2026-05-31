import { useParams, Link, useNavigate } from 'react-router-dom'
import BottomNav from '../components/BottomNav'

const communitiesData = {
  'fps-elite': {
    name: 'FPS Elite',
    displayName: 'FPS ELITE',
    tags: ['COMPETITIVE', 'EU CENTRAL'],
    members: '12.4k',
    online: '1,284',
    squads: '18',
    banner: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrfDcdGorzaxTt0RaDfiDef2VD6yZPpzSSVwCZreP5lgcuHnSbmeL0aamZBA4v3vaWxuJYH1nilIobAkUetXZBQ5aa_reZlMabeIJNxJ54LO0AUkgUq3rZruljyGGlj33Lr15n3Ag261fbUmUCjg3K5hYFJJcF1cUT6cZPKAOG0ArDaTan8ChqrfP8KT0Ecb0ygfNznmm5cls86Ik3V-anFv3r9YZz5IINhOJwlmTqCryvpdOBPepxgDVRcYI1k2Ubkik3cVmsHw',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdjnKEUNUMlCw7_4OfqT38NIWrdWp7KiTq8sLBbN4_3K73nY7OpWqKcsqDgjStEgYMoS7xgv6a1lOrpOY8VqSnWCmS7UXAZxOGSEg5LqRD5aWAvsd2H5aIv4ZDmo395ISxAh__JNpv_uxL59Y-t-yuwA8rlqvwVCssxuFYKVrMPaEJWtO-8RogX4wAnwi8HQD0C267O2c4xfX7eVmL4wiz2u-Wl8DkQqSQKaf7XYB-O1HrMzXJ8f4FQAgg_wPpEUlOzZQuixoCzw',
    squadsList: [
      {
        name: 'Nightfall Scrims',
        desc: 'Looking for aggressive entry frag & support.',
        filled: '3/5',
        slots: 'FILLED',
        tier: 'ELITE TIER',
        tierColor: 'green',
        buttonText: 'QUICK JOIN',
        buttonIcon: 'bolt',
        filledCount: 3,
        total: 5
      },
      {
        name: 'Rank Push grind',
        desc: 'Current Plat 2 only. Mic required.',
        filled: '1/4',
        slots: 'FILLED',
        tier: 'RANKED',
        tierColor: 'primary',
        buttonText: 'REQUEST INVITE',
        buttonIcon: 'person_add',
        filledCount: 1,
        total: 4
      }
    ]
  },
  'tactical-ops': {
    name: 'Tactical Ops',
    displayName: 'TACTICAL OPS',
    tags: ['STRATEGY', 'NA EAST'],
    members: '8.9k',
    online: '672',
    squads: '15',
    banner: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAT98krLdcyyndLn14DR-ARkKytY3e5g8I6uIrLRq-rMdHBHUMA-y5FSoKxPOW5jPsqkbHBQs_8tPd2YxMN512YbkEYV1pL0BR7qZwLAmn2Bb5eBh5YmTTP4kb3HJUcNqAkBIYm39XbBU3jpahMDsBIcRH7x6GjhYUlVmfVG2myrRp0AZBiem0e4LmV5OcGTb7yR1IojcW8gKtE41lb0ruEh4N1Q0pslJiEOrn0CTI15Ern1BMnxe86qigVY1QeUmPttd7UXMhN_w',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiAbJTAiPuq2UL2AZdgvtmlcZ4UeyuV2JWVA4LwdWqBXss2InJkK_rkODAmgb5P0VpXVlhROm7AzO8zsexCvD-74kH2de8wnDovp4Q2BBcRoSziVbcYImnchwR4DhQ0YdeeLrXw1O7fPZwRVs0EME7cPuWQEP4LG1vXS1zpHbtElUBvCSGsBhX-tZ0FB0EyW4Jtq0j8amUqbRyE3bRtk_anCNsxGJ7D78CCoyAZ2PdjrmBNK_hKjR161lH-Y0QCx48SkE4PcXi3g',
    squadsList: [
      {
        name: 'Stealth Ops',
        desc: 'Need a patient sniper for ranked push.',
        filled: '2/4',
        slots: 'FILLED',
        tier: 'TACTICAL',
        tierColor: 'green',
        buttonText: 'QUICK JOIN',
        buttonIcon: 'bolt',
        filledCount: 2,
        total: 4
      },
      {
        name: 'Midnight Recon',
        desc: 'Flex roles open. Must have mic.',
        filled: '1/5',
        slots: 'FILLED',
        tier: 'CASUAL',
        tierColor: 'primary',
        buttonText: 'REQUEST INVITE',
        buttonIcon: 'person_add',
        filledCount: 1,
        total: 5
      }
    ]
  },
  'mmo-raiders': {
    name: 'MMO Raiders',
    displayName: 'MMO RAIDERS',
    tags: ['PVE', 'WORLDWIDE'],
    members: '24.1k',
    online: '3,421',
    squads: '108',
    banner: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOFezzpmiIswK5G7NFksPJ2G3bOXGrcqvBdQHKIWe4PGG41k5YnXdAJz4X1kCcOZCG_EZggp4DcCZFvFNdcTw3XwxROjnOiZt0ShUdyNATNSHxnyyyba0ffwhmXMIdGF6l7rfEabOvZ0cbsLePi0bku_qr3NPf0h5iHskgg8FXAWW4SqQtboZQ2Ky8XofH66n5uXHUR7EtWk40iu7JMlXEnE8TN3qSfbFtqAWyqW0epLaWWaiWpbV5xt0VORFJQsgDDtZNsg7RgA',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8ajQoilMRB_JDJ56L-aaGksZNUlsYCeT2GiC0DHdxxzX6C3LK0ol4__l6wXllJ_Q38WAnNxEbyihw_02W6njxrgWCFCwMYPPNFUp5uJ93uung7OspMM3kCFnQsj6D9y8ddSBsDa3r_JmCxQHyuZEPBiB4k9qjkfa19-qbNTvuK1CUndvLy8kLsVT8xnCpTNg3IDmdsPC8GdtNcGdAyu7Mjwp3qQ7K4fqcuAFCCdCZZESlErFLlf2FS1L5DCWzyyNt7KL-oJndqA',
    squadsList: [
      {
        name: 'Dragonflight Raid',
        desc: 'Looking for healer & 2 DPS for mythic.',
        filled: '3/5',
        slots: 'FILLED',
        tier: 'ELITE TIER',
        tierColor: 'green',
        buttonText: 'QUICK JOIN',
        buttonIcon: 'bolt',
        filledCount: 3,
        total: 5
      },
      {
        name: 'Legacy Dungeon',
        desc: 'Farming achievement runs. All welcome.',
        filled: '2/8',
        slots: 'FILLED',
        tier: 'CHILL',
        tierColor: 'primary',
        buttonText: 'REQUEST INVITE',
        buttonIcon: 'person_add',
        filledCount: 2,
        total: 8
      }
    ]
  }
}

export default function CommunitiesDetails() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const community = communitiesData[slug]

  if (!community) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-background text-on-surface gap-4">
        <span className="material-symbols-outlined text-[48px] text-outline">error</span>
        <p className="font-body-lg">Community not found</p>
        <Link to="/communities" className="text-primary font-label-caps underline">Back to communities</Link>
      </div>
    )
  }

  return (
    <>
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-container_padding h-touch_target_min bg-surface-container border-b border-outline-variant">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="text-primary hover:bg-surface-container-high transition-colors p-2 rounded-full active:scale-95 duration-100"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="font-headline-md text-headline-md text-primary">{community.displayName}</h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-on-surface-variant hover:bg-surface-container-high transition-colors p-2 rounded-full active:scale-95 duration-100">
            <span className="material-symbols-outlined">search</span>
          </button>
          <button className="text-on-surface-variant hover:bg-surface-container-high transition-colors p-2 rounded-full active:scale-95 duration-100">
            <span className="material-symbols-outlined">more_vert</span>
          </button>
        </div>
      </header>

      <main className="pt-touch_target_min pb-bottom_nav_height">
        <section className="relative w-full h-64 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10"></div>
          <img className="w-full h-full object-cover" src={community.banner} alt={community.name} />
          <div className="absolute bottom-0 left-0 p-container_padding z-20 flex items-end gap-4">
            <div className="w-20 h-20 rounded-xl bg-surface-container-highest border-2 border-primary overflow-hidden shadow-2xl flex-shrink-0">
              <img className="w-full h-full object-cover" src={community.avatar} alt={community.name} />
            </div>
            <div className="mb-1">
              <div className="flex items-center gap-2 mb-1">
                <h2 className="font-display text-display text-on-surface leading-none">{community.name}</h2>
                <span className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
              <div className="flex gap-3">
                {community.tags.map((tag) => (
                  <span key={tag} className="font-label-caps text-label-caps bg-secondary-container/50 text-on-secondary-container px-2 py-0.5 rounded border border-outline-variant">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-container_padding py-6 grid grid-cols-3 gap-3">
          <div className="bg-surface-container border border-outline-variant rounded-xl p-4 flex flex-col items-center justify-center text-center">
            <span className="font-label-caps text-label-caps text-outline mb-1 uppercase">Members</span>
            <span className="font-headline-md text-headline-md text-on-surface">{community.members}</span>
          </div>
          <div className="bg-surface-container border border-outline-variant rounded-xl p-4 flex flex-col items-center justify-center text-center relative overflow-hidden">
            <div className="absolute top-2 right-2 flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-500 pulse-dot"></div>
            </div>
            <span className="font-label-caps text-label-caps text-outline mb-1 uppercase">Online</span>
            <span className="font-headline-md text-headline-md text-green-400">{community.online}</span>
          </div>
          <div className="bg-surface-container border border-outline-variant rounded-xl p-4 flex flex-col items-center justify-center text-center">
            <span className="font-label-caps text-label-caps text-outline mb-1 uppercase">Squads</span>
            <span className="font-headline-md text-headline-md text-primary">{community.squads}</span>
          </div>
        </section>

        <section className="px-container_padding py-2 space-y-6">
          <div>
            <h3 className="font-label-caps text-label-caps text-outline mb-4 flex items-center justify-between uppercase tracking-widest">
              Information
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </h3>
            <div className="space-y-1">
              <button onClick={() => navigate(`/communities/${slug}/channel/news`)} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-surface-container transition-all group active:scale-[0.98]">
                <span className="material-symbols-outlined text-outline group-hover:text-primary">campaign</span>
                <span className="font-body-lg text-on-surface-variant flex-grow text-left"># news</span>
                <div className="bg-error text-on-error font-label-caps text-[10px] px-1.5 py-0.5 rounded-full">NEW</div>
              </button>
              <button onClick={() => navigate(`/communities/${slug}/channel/announcements`)} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-surface-container transition-all group active:scale-[0.98]">
                <span className="material-symbols-outlined text-outline group-hover:text-primary">verified_user</span>
                <span className="font-body-lg text-on-surface-variant flex-grow text-left"># announcements</span>
              </button>
            </div>
          </div>
          <div>
            <h3 className="font-label-caps text-label-caps text-outline mb-4 flex items-center justify-between uppercase tracking-widest">
              Global Chat
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </h3>
            <div className="space-y-1">
              <button onClick={() => navigate(`/communities/${slug}/channel/general`)} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-surface-container-high border border-outline-variant group active:scale-[0.98]">
                <span className="material-symbols-outlined text-primary">tag</span>
                <div className="flex-grow text-left">
                  <div className="font-body-lg text-on-surface"># general</div>
                  <div className="text-[12px] text-primary flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">chat_bubble_outline</span>
                    42 chatting...
                  </div>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
              </button>
              <button onClick={() => navigate(`/communities/${slug}/channel/clips`)} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-surface-container transition-all group active:scale-[0.98]">
                <span className="material-symbols-outlined text-outline group-hover:text-primary">movie</span>
                <span className="font-body-lg text-on-surface-variant flex-grow text-left"># clips</span>
                <span className="text-outline font-label-caps text-[12px]">8 unread</span>
              </button>
            </div>
          </div>
          <div>
            <h3 className="font-label-caps text-label-caps text-outline mb-4 flex items-center justify-between uppercase tracking-widest">
              Competitive
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </h3>
            <div className="space-y-1">
              <button onClick={() => navigate(`/communities/${slug}/channel/scrims`)} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-surface-container border border-primary/20 bg-primary/5 transition-all group active:scale-[0.98]">
                <span className="material-symbols-outlined text-primary">sports_kabaddi</span>
                <div className="flex-grow text-left">
                  <div className="font-body-lg text-on-surface"># scrims</div>
                  <div className="text-[12px] text-green-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot"></span>
                    3 matches in progress
                  </div>
                </div>
                <span className="material-symbols-outlined text-primary">arrow_forward_ios</span>
              </button>
            </div>
          </div>
        </section>

        <section className="py-6 overflow-hidden">
          <div className="px-container_padding flex items-center justify-between mb-4">
            <h3 className="font-label-caps text-label-caps text-outline uppercase tracking-widest">Live Squads</h3>
            <button className="text-primary text-[12px] font-medium flex items-center gap-1">
              VIEW ALL <span className="material-symbols-outlined text-sm">open_in_new</span>
            </button>
          </div>
          <div className="flex gap-4 overflow-x-auto px-container_padding no-scrollbar pb-4">
            {community.squadsList.map((squad, idx) => (
              <div
                key={squad.name}
                className={`min-w-[280px] rounded-xl p-4 flex flex-col gap-4 ${
                  idx === 1
                    ? 'glass-panel border-primary/40'
                    : 'bg-surface-container-high border border-outline-variant'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full border-2 border-surface-container-high bg-outline-variant"></div>
                      <div className="w-8 h-8 rounded-full border-2 border-surface-container-high bg-outline-variant"></div>
                      <div className="w-8 h-8 rounded-full border-2 border-surface-container-high bg-outline-variant flex items-center justify-center text-[10px] font-bold">+{squad.total - squad.filledCount}</div>
                    </div>
                    <span className="font-label-caps text-[12px] text-on-surface-variant">{squad.filled}/{squad.total} {squad.slots}</span>
                  </div>
                  <span className={`bg-${squad.tierColor === 'green' ? 'green-500/10 text-green-400 border-green-500/20' : 'primary/10 text-primary border-primary/20'} font-label-caps text-[10px] px-2 py-0.5 rounded border`}>{squad.tier}</span>
                </div>
                <div>
                  <h4 className="font-headline-md text-[18px] text-on-surface mb-1">{squad.name}</h4>
                  <p className="text-[13px] text-outline line-clamp-1">{squad.desc}</p>
                </div>
                <button className={`w-full h-10 font-bold rounded flex items-center justify-center gap-2 active:scale-95 transition-transform ${
                  idx === 0
                    ? 'bg-primary text-background'
                    : 'bg-surface-container-highest text-primary border border-primary'
                }`}>
                  {squad.buttonText}
                  <span className="material-symbols-outlined text-[18px]">{squad.buttonIcon}</span>
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="px-container_padding py-4 grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center gap-2 py-4 bg-surface-container border border-outline-variant rounded-xl text-on-surface hover:bg-surface-container-high active:scale-95 transition-all">
            <span className="material-symbols-outlined text-primary">share</span>
            <span className="font-body-lg font-medium">Invite Friends</span>
          </button>
          <button className="flex items-center justify-center gap-2 py-4 bg-surface-container border border-outline-variant rounded-xl text-error hover:bg-error/5 active:scale-95 transition-all">
            <span className="material-symbols-outlined">logout</span>
            <span className="font-body-lg font-medium">Leave Server</span>
          </button>
        </section>
      </main>

      <BottomNav />
    </>
  )
}
