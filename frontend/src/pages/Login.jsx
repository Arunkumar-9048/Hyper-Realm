import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [step, setStep] = useState('phone')
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const navigate = useNavigate()

  const handleSendOtp = () => {
    if (phone.length >= 10) setStep('otp')
  }

  const handleOtpChange = (idx, val) => {
    if (!/^\d?$/.test(val)) return
    const next = [...otp]
    next[idx] = val
    setOtp(next)
    if (val && idx < 5) {
      document.getElementById(`otp-${idx + 1}`)?.focus()
    }
  }

  const handleOtpKeyDown = (idx, e) => {
    if (e.key === 'Backspace' && !otp[idx] && idx > 0) {
      document.getElementById(`otp-${idx - 1}`)?.focus()
    }
  }

  const handleVerify = () => {
    if (otp.every((d) => d)) navigate('/')
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-container_padding">
        <div className="w-full max-w-sm">
          <div className="text-center mb-10">
            <h1 className="font-display text-display text-primary tracking-tighter mb-2">SQUAD_UP</h1>
            <p className="font-body-sm text-outline">Find your squad. Run your scrims.</p>
          </div>

          {step === 'phone' ? (
            <div className="space-y-6">
              <div>
                <label className="font-label-caps text-label-caps text-on-surface-variant mb-2 block uppercase tracking-widest">Phone Number</label>
                <div className="flex items-center gap-3 bg-surface-container border border-outline-variant rounded-lg px-4 py-3 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
                  <span className="font-body-lg text-outline">+91</span>
                  <input
                    className="flex-1 bg-transparent text-on-surface font-body-lg outline-none"
                    placeholder="Enter your number"
                    type="tel"
                    maxLength={10}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendOtp()}
                  />
                </div>
              </div>
              <button
                onClick={handleSendOtp}
                disabled={phone.length < 10}
                className="w-full py-3 bg-primary text-on-primary font-bold rounded-lg disabled:opacity-40 active:scale-95 transition-all"
              >
                Send OTP
              </button>
              <p className="text-center text-outline text-[12px] font-body-sm">
                We'll send a 6-digit code via SMS. Standard rates apply.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <label className="font-label-caps text-label-caps text-on-surface-variant mb-2 block uppercase tracking-widest">Enter OTP</label>
                <p className="font-body-sm text-outline mb-4">Sent to +91 {phone}</p>
                <div className="flex gap-2 justify-center">
                  {otp.map((d, i) => (
                    <input
                      key={i}
                      id={`otp-${i}`}
                      className="w-11 h-12 bg-surface-container border border-outline-variant rounded-lg text-center text-on-surface font-headline-md outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      type="tel"
                      maxLength={1}
                      value={d}
                      onChange={(e) => handleOtpChange(i, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(i, e)}
                    />
                  ))}
                </div>
              </div>
              <button
                onClick={handleVerify}
                disabled={!otp.every((d) => d)}
                className="w-full py-3 bg-primary text-on-primary font-bold rounded-lg disabled:opacity-40 active:scale-95 transition-all"
              >
                Verify & Continue
              </button>
              <div className="text-center">
                <button onClick={() => setStep('phone')} className="font-body-sm text-primary underline text-[13px]">
                  Change phone number
                </button>
              </div>
            </div>
          )}

          <div className="mt-8 text-center">
            <p className="font-body-sm text-outline text-[12px]">
              By continuing, you agree to our{' '}
              <span className="text-primary underline">Terms</span> and{' '}
              <span className="text-primary underline">Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
