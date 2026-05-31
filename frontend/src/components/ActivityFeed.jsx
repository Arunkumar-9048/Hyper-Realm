export default function ActivityFeed() {
  return (
    <section>
      <h2 className="font-display font-bold text-body-lg tracking-tight mb-3">Recent Activity</h2>
      <div className="space-y-1">
        <div className="flex gap-4 p-3 rounded-xl hover:bg-surface-container-low transition-colors items-start">
          <div className="mt-1 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-lg">person_add</span>
          </div>
          <div className="flex-1">
            <p className="text-body-sm"><span className="font-bold text-on-surface">Ace_Viper</span> invited you to a squad</p>
            <span className="text-[11px] text-on-surface-variant">2m ago</span>
          </div>
        </div>
        <div className="flex gap-4 p-3 rounded-xl hover:bg-surface-container-low transition-colors items-start">
          <div className="mt-1 w-8 h-8 rounded-full bg-tertiary/20 flex items-center justify-center">
            <span className="material-symbols-outlined text-tertiary text-lg">campaign</span>
          </div>
          <div className="flex-1">
            <p className="text-body-sm">New tournament: <span className="text-on-surface">Midnight Tactical 5v5</span> is now open</p>
            <span className="text-[11px] text-on-surface-variant">15m ago</span>
          </div>
        </div>
        <div className="flex gap-4 p-3 rounded-xl hover:bg-surface-container-low transition-colors items-start">
          <div className="mt-1 w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center">
            <span className="material-symbols-outlined text-secondary text-lg">alternate_email</span>
          </div>
          <div className="flex-1">
            <p className="text-body-sm"><span className="font-bold text-on-surface">Nova_Lume</span> mentioned you in #general</p>
            <span className="text-[11px] text-on-surface-variant">1h ago</span>
          </div>
        </div>
      </div>
    </section>
  )
}
