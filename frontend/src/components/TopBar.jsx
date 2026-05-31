import { useNavigate } from 'react-router-dom'

export default function TopBar() {
  const navigate = useNavigate()
  return (
    <header className="fixed top-0 w-full z-50 bg-background border-b border-white/10 flex items-center justify-between px-gutter h-14">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-secondary-container flex items-center justify-center overflow-hidden border border-primary/30">
          <img
            alt="Player Avatar"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7ZN4wR2HXFssNItcdfOEBjtxfNlQMZHA-lS4mQWEJBCFDJ4GAbCnx1cuMiUmAQH3XrlNgjD3ivRzVQ3YVqktspEtEgLfIYsMEKHGy6SD7YFtM6TRY9H4zEQP6yE_tLU0_ECaSysqeNkTRD3KKtFIOtkqjad7KgBL6hra1K0l05rs84y2xvjNPaIrNNsFTzaAxfryKn1mvcMaDiX-b0buM7prtfzIOwCgd6b8q69o2XHRVvN9pco00TzbBZKQ2LZ5hW3938whxXw"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-display text-body-lg font-bold text-primary tracking-tight">Player One</span>
          <span className="text-[10px] font-label-caps text-on-surface-variant flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
            Diamond III &bull; US-West
          </span>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <button onClick={() => navigate('/notifications')} className="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-full relative">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-error rounded-full border-2 border-background"></span>
        </button>
        <button className="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-full">
          <span className="material-symbols-outlined">search</span>
        </button>
      </div>
    </header>
  )
}
