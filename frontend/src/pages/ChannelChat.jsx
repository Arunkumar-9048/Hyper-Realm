import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const mockMessages = [
  { id: 1, user: 'Ace_Viper', text: 'Yo anyone up for ranked?', time: '2:31 PM', self: false, badge: 'ELITE' },
  { id: 2, user: 'NeonShadow', text: "I'm in. Plat 2 rn.", time: '2:32 PM', self: false, badge: 'VETERAN' },
  { id: 3, user: 'You', text: "Let's run it. Give me 2 mins", time: '2:33 PM', self: true },
  { id: 4, user: 'Ace_Viper', text: 'Bet. Waiting in lobby', time: '2:34 PM', self: false, badge: 'ELITE' },
  { id: 5, user: 'System', text: 'NeonShadow has joined the voice channel', time: '2:35 PM', system: true },
  { id: 6, user: 'PixelPaladin', text: 'Need one more for comp?', time: '2:36 PM', self: false, badge: 'VETERAN' },
  { id: 7, user: 'Ace_Viper', text: 'Yeah jump in', time: '2:37 PM', self: false, badge: 'ELITE' },
]

const channels = {
  general: { name: 'general', icon: 'tag', color: 'text-primary' },
  news: { name: 'news', icon: 'campaign', color: 'text-outline' },
  clips: { name: 'clips', icon: 'movie', color: 'text-outline' },
  scrims: { name: 'scrims', icon: 'sports_kabaddi', color: 'text-outline' },
}

export default function ChannelChat() {
  const { slug, channelId } = useParams()
  const navigate = useNavigate()
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState(mockMessages)

  const channel = channels[channelId] || { name: channelId, icon: 'tag', color: 'text-primary' }

  const handleSend = () => {
    if (!input.trim()) return
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), user: 'You', text: input, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), self: true },
    ])
    setInput('')
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-container_padding h-touch_target_min bg-surface-container border-b border-outline-variant">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="text-primary hover:bg-surface-container-high transition-colors p-2 rounded-full active:scale-95">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-primary">tag</span>
              <h1 className="font-headline-md text-headline-md text-on-surface text-[18px]">{channel.name}</h1>
            </div>
            <p className="font-label-caps text-[10px] text-outline uppercase tracking-widest">{slug}</p>
          </div>
        </div>
        <button className="text-on-surface-variant hover:bg-surface-container-high transition-colors p-2 rounded-full active:scale-95">
          <span className="material-symbols-outlined">info</span>
        </button>
      </header>

      <div className="flex-1 pt-touch_target_min pb-[72px] overflow-y-auto">
        <div className="px-container_padding py-4 space-y-4">
          {messages.map((msg) => {
            if (msg.system) {
              return (
                <div key={msg.id} className="flex items-center gap-2 py-2">
                  <div className="flex-1 h-px bg-outline-variant/40"></div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[14px] text-outline">headphones</span>
                    <span className="font-body-sm text-[12px] text-outline">{msg.text}</span>
                  </div>
                  <div className="flex-1 h-px bg-outline-variant/40"></div>
                </div>
              )
            }
            return (
              <div key={msg.id} className={`flex gap-3 ${msg.self ? 'flex-row-reverse' : ''}`}>
                <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-[12px] font-bold ${
                  msg.self ? 'bg-primary/30 text-primary' : 'bg-surface-container-high text-on-surface-variant'
                }`}>
                  {msg.user[0]}
                </div>
                <div className={`max-w-[75%] ${msg.self ? 'items-end' : ''}`}>
                  <div className="flex items-center gap-2 mb-1">
                    {!msg.self && <span className="font-label-caps text-[11px] text-on-surface-variant">{msg.user}</span>}
                    {msg.badge && (
                      <span className="font-label-caps text-[8px] text-primary border border-primary/30 px-1 rounded uppercase tracking-wider">{msg.badge}</span>
                    )}
                    <span className="font-label-caps text-[9px] text-outline">{msg.time}</span>
                  </div>
                  <div className={`rounded-xl px-4 py-2.5 ${
                    msg.self ? 'bg-primary text-on-primary rounded-tr-sm' : 'bg-surface-container border border-outline-variant rounded-tl-sm'
                  }`}>
                    <p className="font-body-sm text-[14px]">{msg.text}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="fixed bottom-0 w-full bg-surface-container border-t border-outline-variant px-container_padding py-2">
        <div className="flex items-center gap-3">
          <button className="text-outline hover:text-primary transition-colors p-1">
            <span className="material-symbols-outlined text-[22px]">add_circle</span>
          </button>
          <div className="flex-1 flex items-center gap-2 bg-surface-container-highest border border-outline-variant rounded-lg px-4 py-2.5 focus-within:border-primary transition-all">
            <input
              className="flex-1 bg-transparent text-on-surface font-body-sm outline-none"
              placeholder="Message #general"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button className="text-outline hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[20px]">attach_file</span>
            </button>
            <button className="text-outline hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[20px]">emoji_emotions</span>
            </button>
          </div>
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="w-10 h-10 flex items-center justify-center bg-primary text-on-primary rounded-lg disabled:opacity-40 active:scale-90 transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">send</span>
          </button>
        </div>
      </div>
    </div>
  )
}
