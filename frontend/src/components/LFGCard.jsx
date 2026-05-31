export default function LFGCard({ player }) {
  return (
    <div className="bg-surface-container border border-white/5 rounded-xl p-4 flex flex-col gap-4">
      <div className="flex justify-between items-start">
        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-full bg-surface-container-highest border border-primary/20 p-0.5">
            <img
              alt={`${player.name} Avatar`}
              className="w-full h-full rounded-full object-cover"
              src={player.avatar}
            />
          </div>
          <div>
            <div className="font-bold text-sm">{player.name}</div>
            <div className="text-[10px] text-on-surface-variant font-label-caps uppercase">{player.rank} &bull; {player.region}</div>
          </div>
        </div>
        <span className={`text-[10px] font-label-caps px-2 py-0.5 rounded border ${player.tag}`}>{player.mode}</span>
      </div>
      <div className="text-body-sm text-on-surface">{player.quote}</div>
      <button className="w-full h-10 bg-surface-container-highest border border-primary text-primary font-bold rounded-lg text-sm active:scale-95 transition-transform">
        JOIN SQUAD
      </button>
    </div>
  )
}
