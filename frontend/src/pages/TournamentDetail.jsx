import { useParams, useNavigate } from 'react-router-dom'
import BottomNav from '../components/BottomNav'

const tournaments = {
  'midnight-tactical-5v5': {
    name: 'Midnight Tactical 5v5',
    game: 'VALORANT',
    prize: '₹25,000',
    entry: 'Free',
    type: 'Single Elimination',
    status: 'OPEN',
    participants: 16,
    maxParticipants: 16,
    startDate: 'Jun 15, 2026',
    matches: [
      { round: 'Quarter Finals', pairs: [
        { team1: 'Team Alpha', team2: 'Team Bravo', score1: 13, score2: 7, done: true },
        { team1: 'Team Delta', team2: 'Team Echo', score1: 8, score2: 13, done: true },
        { team1: 'Team Foxtrot', team2: 'Team Golf', score1: 13, score2: 11, done: true },
        { team1: 'Team Hotel', team2: 'Team India', score1: null, score2: null, done: false },
      ]},
      { round: 'Semi Finals', pairs: [
        { team1: 'Team Alpha', team2: 'Team Echo', score1: null, score2: null, done: false },
        { team1: 'Team Foxtrot', team2: 'TBD', score1: null, score2: null, done: false },
      ]},
      { round: 'Grand Final', pairs: [
        { team1: 'TBD', team2: 'TBD', score1: null, score2: null, done: false },
      ]},
    ],
  },
}

export default function TournamentDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const t = tournaments[slug]

  if (!t) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-background text-on-surface gap-4">
        <span className="material-symbols-outlined text-[48px] text-outline">error</span>
        <p className="font-body-lg">Tournament not found</p>
        <button onClick={() => navigate('/tournament')} className="text-primary font-label-caps underline">Back to tournaments</button>
      </div>
    )
  }

  return (
    <>
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-container_padding h-touch_target_min bg-surface-container border-b border-outline-variant">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="text-primary hover:bg-surface-container-high transition-colors p-2 rounded-full active:scale-95">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div>
            <h1 className="font-headline-md text-headline-md text-on-surface text-[18px]">{t.name}</h1>
            <span className="font-label-caps text-[10px] text-outline uppercase tracking-widest">{t.game}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-on-surface-variant hover:bg-surface-container-high transition-colors p-2 rounded-full active:scale-95">
            <span className="material-symbols-outlined">share</span>
          </button>
        </div>
      </header>

      <main className="pt-touch_target_min pb-bottom_nav_height">
        <div className="px-container_padding py-6">
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-surface-container border border-outline-variant rounded-xl p-4 text-center">
              <span className="font-label-caps text-label-caps text-outline uppercase">Prize Pool</span>
              <p className="font-headline-md text-headline-md text-tertiary mt-1">{t.prize}</p>
            </div>
            <div className="bg-surface-container border border-outline-variant rounded-xl p-4 text-center">
              <span className="font-label-caps text-label-caps text-outline uppercase">Entry</span>
              <p className="font-headline-md text-headline-md text-green-400 mt-1">{t.entry}</p>
            </div>
            <div className="bg-surface-container border border-outline-variant rounded-xl p-4 text-center">
              <span className="font-label-caps text-label-caps text-outline uppercase">Format</span>
              <p className="font-headline-md text-headline-md text-primary mt-1 text-[16px]">{t.type}</p>
            </div>
            <div className="bg-surface-container border border-outline-variant rounded-xl p-4 text-center">
              <span className="font-label-caps text-label-caps text-outline uppercase">Teams</span>
              <p className="font-headline-md text-headline-md text-on-surface mt-1">{t.participants}/{t.maxParticipants}</p>
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <h2 className="font-headline-md text-headline-md text-[18px] uppercase tracking-tight">Bracket</h2>
            <span className="font-label-caps text-[10px] text-primary border border-primary/30 rounded px-2 py-1 uppercase">{t.status}</span>
          </div>

          <div className="space-y-8">
            {t.matches.map((round) => (
              <div key={round.round}>
                <h3 className="font-label-caps text-label-caps text-outline mb-3 uppercase tracking-widest">{round.round}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {round.pairs.map((match, idx) => (
                    <div key={idx} className={`bg-surface-container border rounded-xl p-4 ${
                      match.done ? 'border-green-500/30' : 'border-outline-variant'
                    }`}>
                      <div className="flex items-center justify-between mb-3">
                        <div className={`flex items-center gap-2 flex-1 ${match.score1 !== null && match.score2 !== null && match.score1 > match.score2 ? 'text-green-400' : 'text-on-surface'}`}>
                          <div className="w-6 h-6 rounded bg-surface-container-highest flex items-center justify-center text-[9px] font-bold text-outline">A</div>
                          <span className="font-body-sm text-[13px] font-medium">{match.team1}</span>
                          {match.score1 !== null && <span className="font-headline-md text-[16px] ml-auto">{match.score1}</span>}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className={`flex items-center gap-2 flex-1 ${match.score1 !== null && match.score2 !== null && match.score2 > match.score1 ? 'text-green-400' : 'text-on-surface'}`}>
                          <div className="w-6 h-6 rounded bg-surface-container-highest flex items-center justify-center text-[9px] font-bold text-outline">B</div>
                          <span className="font-body-sm text-[13px] font-medium">{match.team2}</span>
                          {match.score2 !== null && <span className="font-headline-md text-[16px] ml-auto">{match.score2}</span>}
                        </div>
                      </div>
                      {!match.done && (
                        <div className="mt-3 pt-3 border-t border-outline-variant/50">
                          <span className="font-label-caps text-[9px] text-outline uppercase">Scheduled</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <BottomNav />
    </>
  )
}
