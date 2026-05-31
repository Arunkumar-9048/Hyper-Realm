import { Link } from 'react-router-dom'

export default function Communities() {
  return (
    <section>
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-display font-bold text-body-lg tracking-tight">Communities</h2>
        <Link to="/communities" className="text-xs text-primary font-medium">View All</Link>
      </div>
      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
        <Link to="/communities" className="flex-shrink-0 w-64 bg-surface-container-low border border-white/5 rounded-xl p-3 flex gap-3 items-center">
          <div className="relative">
            <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center overflow-hidden border border-white/10">
              <img
                alt="FPS Elite"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhvqhw_LBtswGgyaECu53lTFm08fzskaSTlctQI-f_NdIV8vQCbxOrhFQNT_SfH1LphfL1YMLXuqdjV9_6y0L2ShfTMv6urvOXE6yxCWp1HHEI_kNkSzTLuRVmE61kZFeLXVGQ9UVn07-ZGX_Ude1JH1P2fiuNWX-1gRL9OF_UmSkXxvhg68Jrd9PwxIqm0QNxTM2KnPe7iyK1u1ORlUp6SEUtgOCtfObLQahKM265VpoiHC6r83yEjQe_8WuGeLqXUsRqZiMe6Q"
              />
            </div>
            <span className="absolute -top-1 -right-1 bg-primary text-on-primary text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-surface-container-low">5</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-bold text-sm truncate">FPS Elite</div>
            <div className="text-xs text-on-surface-variant truncate font-light" dir="ltr">வணக்கம் வீரர்களே! நாம்...</div>
          </div>
        </Link>
        <Link to="/communities" className="flex-shrink-0 w-64 bg-surface-container-low border border-white/5 rounded-xl p-3 flex gap-3 items-center opacity-60">
          <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center overflow-hidden border border-white/5">
            <img
              alt="Strategy Lab"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3Mbnw26uYlyST5ZohwpD20q9Ps655q2bJgzmi1gkAu6f4KsoUXiBUg1-K6QM6SfbrHJpDE-oKvdK5jFUVFPRyVK0cJHg9YG_wFg7733W7FS1_5nUONMg9fBP607KEqr211FayoYCkOjE0fOzMK-ci8PBrsdtIKhOjQDeCpcZ65F-nN4krb8vEsTGyZbIHsCBP5U8S3cgWIhh1LeERTOi6M1mY8fJ-Od68Ma9t2oIKDJtlYSOgo6wmFiaIdNHof1_g8ntuRSOLHQ"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-bold text-sm truncate">Strategy Lab</div>
            <div className="text-xs text-on-surface-variant truncate font-light">New meta discussion...</div>
          </div>
        </Link>
      </div>
    </section>
  )
}
