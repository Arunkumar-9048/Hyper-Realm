import { Link } from 'react-router-dom'

export default function TournamentAlert() {
  return (
    <section className="mt-2">
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary-container to-secondary-container p-[1px]">
        <div className="bg-surface-container-low rounded-[11px] p-4 flex items-center justify-between relative overflow-hidden">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
          <div className="flex flex-col gap-1 z-10">
            <span className="text-label-caps text-primary tracking-widest uppercase">Upcoming Match</span>
            <h3 className="font-display text-lg font-bold leading-tight">Season 4 Qualifiers</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="material-symbols-outlined text-sm text-tertiary">schedule</span>
              <span className="text-body-sm font-medium text-tertiary">Starts in 14m</span>
            </div>
          </div>
          <Link to="/tournament" className="bg-primary text-on-primary px-4 py-2 rounded-lg font-display font-bold text-sm active:scale-95 transition-transform shadow-lg shadow-primary/20">
            JOIN
          </Link>
        </div>
      </div>
    </section>
  )
}
