import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BottomNav from '../components/BottomNav'

export default function ProfileEdit() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    username: 'Ace_Viper',
    bio: 'Competitive FPS player | 2x tournament winner | Looking for ranked squad',
    primaryGame: 'BGMI',
    gameId: '6789101234',
    tier: 'Platinum II',
    kd: '1.82',
    region: 'Asia',
    languages: ['English', 'Hindi'],
  })

  const [avatarPreview] = useState('https://lh3.googleusercontent.com/aida-public/AB6AXuDdjnKEUNUMlCw7_4OfqT38NIWrdWp7KiTq8sLBbN4_3K73nY7OpWqKcsqDgjStEgYMoS7xgv6a1lOrpOY8VqSnWCmS7UXAZxOGSEg5LqRD5aWAvsd2H5aIv4ZDmo395ISxAh__JNpv_uxL59Y-t-yuwA8rlqvwVCssxuFYKVrMPaEJWtO-8RogX4wAnwi8HQD0C267O2c4xfX7eVmL4wiz2u-Wl8DkQqSQKaf7XYB-O1HrMzXJ8f4FQAgg_wPpEUlOzZQuixoCzw')

  const handleChange = (field, value) => setForm((prev) => ({ ...prev, [field]: value }))

  const toggleLanguage = (lang) => {
    setForm((prev) => ({
      ...prev,
      languages: prev.languages.includes(lang)
        ? prev.languages.filter((l) => l !== lang)
        : [...prev.languages, lang],
    }))
  }

  const handleSave = () => navigate('/profile')

  return (
    <>
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-container_padding h-touch_target_min bg-surface-container border-b border-outline-variant">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="text-primary hover:bg-surface-container-high transition-colors p-2 rounded-full active:scale-95">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="font-headline-md text-headline-md text-on-surface text-[20px]">Edit Profile</h1>
        </div>
        <button onClick={handleSave} className="bg-primary text-on-primary font-label-caps text-label-caps px-5 py-2 rounded-lg active:scale-95 transition-all">Save</button>
      </header>

      <main className="pt-touch_target_min pb-bottom_nav_height">
        <div className="px-container_padding py-6 space-y-8">
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <div className="w-24 h-24 rounded-full border-2 border-primary overflow-hidden bg-surface-container-highest">
                <img className="w-full h-full object-cover" src={avatarPreview} alt="Avatar" />
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center active:scale-90 transition-all">
                <span className="material-symbols-outlined text-[16px]">edit</span>
              </button>
            </div>
            <p className="font-label-caps text-label-caps text-outline uppercase tracking-widest">Tap to change avatar</p>
          </div>

          <div className="space-y-5">
            <Field label="Username" value={form.username} onChange={(v) => handleChange('username', v)} />
            <div>
              <label className="font-label-caps text-label-caps text-on-surface-variant mb-2 block uppercase tracking-widest">Bio</label>
              <textarea
                className="w-full bg-surface-container border border-outline-variant rounded-lg px-4 py-3 text-on-surface font-body-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                rows={3}
                value={form.bio}
                onChange={(e) => handleChange('bio', e.target.value)}
              />
            </div>
            <Field label="Primary Game" value={form.primaryGame} onChange={(v) => handleChange('primaryGame', v)} />
            <Field label="In-Game ID" value={form.gameId} onChange={(v) => handleChange('gameId', v)} />
            <Field label="Tier / Rank" value={form.tier} onChange={(v) => handleChange('tier', v)} />
            <Field label="K/D Ratio" value={form.kd} onChange={(v) => handleChange('kd', v)} />
            <Field label="Region" value={form.region} onChange={(v) => handleChange('region', v)} />

            <div>
              <label className="font-label-caps text-label-caps text-on-surface-variant mb-3 block uppercase tracking-widest">Languages</label>
              <div className="flex flex-wrap gap-2">
                {['English', 'Hindi', 'Tamil', 'Telugu', 'Malayalam', 'Bengali', 'Marathi'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => toggleLanguage(lang)}
                    className={`px-3 py-1.5 rounded-full font-label-caps text-[10px] uppercase tracking-wider transition-all active:scale-90 ${
                      form.languages.includes(lang)
                        ? 'bg-primary text-on-primary'
                        : 'bg-surface-container-high text-on-surface-variant border border-outline-variant'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-outline-variant/50">
            <button className="w-full py-3 border border-error text-error font-bold rounded-lg hover:bg-error/5 active:scale-95 transition-all">
              Delete Account
            </button>
          </div>
        </div>
      </main>

      <BottomNav />
    </>
  )
}

function Field({ label, value, onChange }) {
  return (
    <div>
      <label className="font-label-caps text-label-caps text-on-surface-variant mb-2 block uppercase tracking-widest">{label}</label>
      <input
        className="w-full bg-surface-container border border-outline-variant rounded-lg px-4 py-3 text-on-surface font-body-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
