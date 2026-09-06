import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import appLogo from '../assets/applogo.png'
import twitterIcon from '../assets/twitter-x.svg'
import telegramIcon from '../assets/telegram.svg'
import discordIcon from '../assets/discord.svg'

export default function Layout({ children, isDarkTheme, setIsDarkTheme }: {
  children: React.ReactNode
  isDarkTheme: boolean
  setIsDarkTheme: (v: boolean) => void
}) {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [wlName, setWlName] = useState('')
  const [wlEmail, setWlEmail] = useState('')
  const [wlStatus, setWlStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const [wlError, setWlError] = useState('')
  const [wlDuplicate, setWlDuplicate] = useState(false)
  const [isDownloadOpen, setIsDownloadOpen] = useState(false)
  const [dlEmail, setDlEmail] = useState('')
  const [dlStatus, setDlStatus] = useState<'idle' | 'checking' | 'allowed' | 'denied' | 'error'>('idle')
  const [dlError, setDlError] = useState('')

  const DOWNLOAD_URL = 'https://expo.dev/accounts/blockchainjoshs-organization/projects/zero-mobile/builds/b9192784-1889-4076-a7ba-d379ba613872'

  const openDownload = () => {
    setDlEmail('')
    setDlStatus('idle')
    setDlError('')
    setIsDownloadOpen(true)
  }

  const verifyDownload = async (e: React.FormEvent) => {
    e.preventDefault()
    setDlStatus('checking')
    setDlError('')
    try {
      const res = await fetch(`${VITE_BACKEND_URL}/api/zerospend/waitlist/check?email=${encodeURIComponent(dlEmail.trim())}`)
      const json = await res.json().catch(() => ({}))
      if (!res.ok || json.success === false) throw new Error(json.error || 'Verification failed. Please try again.')
      setDlStatus(json.onList ? 'allowed' : 'denied')
    } catch (err: any) {
      setDlError(err?.message || 'Could not reach the server. Please try again.')
      setDlStatus('error')
    }
  }
  const jotformRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  const VITE_BACKEND_URL = (
    (import.meta.env as any).VITE_BACKEND_URL ||
    'http://localhost:3001'
  ).replace(/\/$/, '')

  const openWaitlist = () => {
    setWlName('')
    setWlEmail('')
    setWlStatus('idle')
    setWlError('')
    setWlDuplicate(false)
    setIsWaitlistOpen(true)
  }

  const submitWaitlist = async (e: React.FormEvent) => {
    e.preventDefault()
    setWlStatus('sending')
    setWlError('')
    try {
      const res = await fetch(`${VITE_BACKEND_URL}/api/zerospend/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: wlEmail.trim(), name: wlName.trim() }),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok || json.success === false) throw new Error(json.error || 'Signup failed. Please try again.')
      setWlDuplicate(!!json.alreadyJoined)
      setWlStatus('done')
    } catch (err: any) {
      setWlError(err?.message || 'Could not reach the server. Please try again.')
      setWlStatus('error')
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (jotformRef.current) {
        const top = jotformRef.current.getBoundingClientRect().top
        setIsDarkTheme(top < window.innerHeight * 0.7)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [setIsDarkTheme])

  const isActive = (path: string) => location.pathname === path

  return (
    <div className={`min-h-screen relative font-sans transition-colors duration-1000 ease-in-out ${isDarkTheme ? 'bg-black text-white' : 'bg-white text-gray-900'} selection:bg-gray-800 selection:text-white overflow-hidden`}>
      {/* Navbar */}
      <nav className={`sticky top-0 z-50 backdrop-blur-xl w-full border-b transition-colors duration-1000 ${isDarkTheme ? 'bg-black/80 border-gray-800' : 'bg-white/80 border-gray-100'}`}>
        <div className="flex items-center px-6 md:px-12 py-4 md:py-5 w-full">
          <div className="flex items-center flex-1">
            <Link to="/">
              <img src={appLogo} alt="Zero Logo" className="h-10 md:h-12 rounded-xl object-contain transition-all duration-300 hover:opacity-90" />
            </Link>
            <Link to="/" className={`ml-3 font-bold text-lg md:text-xl tracking-tight hidden sm:block transition-colors duration-1000 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>Zero mobile</Link>
          </div>

          <div className="hidden md:flex items-center justify-center gap-2">
            <Link
              to="/"
              className={`px-5 py-2 text-sm font-semibold transition-colors rounded-full ${isActive('/') ? (isDarkTheme ? 'bg-white/10 text-white' : 'bg-gray-100 text-black') : (isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black')}`}
            >Personal</Link>
            <Link
              to="/business"
              className={`px-5 py-2 text-sm font-semibold transition-colors rounded-full ${isActive('/business') ? (isDarkTheme ? 'bg-white/10 text-white' : 'bg-gray-100 text-black') : (isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black')}`}
            >Business</Link>
            <Link
              to="/about"
              className={`px-5 py-2 text-sm font-semibold transition-colors rounded-full ${isActive('/about') ? (isDarkTheme ? 'bg-white/10 text-white' : 'bg-gray-100 text-black') : (isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black')}`}
            >About us</Link>
          </div>

          <div className="flex items-center justify-end flex-1 gap-3">
            <button
              onClick={openDownload}
              className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-[#2b2b2b] text-white rounded-full text-sm font-semibold hover:bg-black transition-all shadow-[0_4px_14px_0_rgba(0,0,0,0.1)]"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              Download
            </button>
            <button
              onClick={openWaitlist}
              className={`hidden md:block px-6 py-2.5 rounded-full text-sm font-semibold transition-all border ${isDarkTheme ? 'border-gray-700 text-gray-300 hover:text-white hover:border-gray-500' : 'border-gray-200 text-gray-600 hover:text-black hover:border-gray-400'}`}
            >
              Join waitlist
            </button>

            <button
              onClick={() => setIsMenuOpen(m => !m)}
              className={`md:hidden flex flex-col gap-1.5 p-2 rounded-lg transition-colors ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className={`md:hidden border-t px-6 py-6 flex flex-col gap-4 transition-colors duration-1000 ${isDarkTheme ? 'bg-black border-gray-800' : 'bg-white border-gray-100'}`}>
            <Link to="/" className={`text-left text-lg font-semibold py-2 transition-colors ${isDarkTheme ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`} onClick={() => setIsMenuOpen(false)}>Personal</Link>
            <Link to="/business" className={`text-left text-lg font-semibold py-2 transition-colors ${isDarkTheme ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`} onClick={() => setIsMenuOpen(false)}>Business</Link>
            <Link to="/about" className={`text-left text-lg font-semibold py-2 transition-colors ${isDarkTheme ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`} onClick={() => setIsMenuOpen(false)}>About us</Link>
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => { openDownload(); setIsMenuOpen(false) }}
                className="w-full py-3.5 bg-[#2b2b2b] text-white rounded-2xl text-base font-bold hover:bg-black transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                Download App
              </button>
              <button
                onClick={() => { openWaitlist(); setIsMenuOpen(false) }}
                className={`w-full py-3.5 rounded-2xl text-base font-bold transition-all border ${isDarkTheme ? 'border-gray-700 text-gray-300' : 'border-gray-200 text-gray-700'}`}
              >
                Join waitlist
              </button>
            </div>
          </div>
        )}
      </nav>

      {children}

      {/* Footer */}
      <footer className={`py-12 md:py-20 px-6 border-t mt-20 transition-colors duration-1000 ${isDarkTheme ? 'bg-black border-gray-800' : 'bg-white border-gray-100'}`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-xs">
            <div className="flex items-center mb-6">
              <img src={appLogo} alt="Zero Logo" className="h-12 rounded-xl object-contain" />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Bringing financing to the 1.5 billion unbanked. Enabling cost-efficient and instant payments, worldwide.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://twitter.com/blockchain_josh" target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 transition-opacity">
                <img src={twitterIcon} alt="X" className="w-5 h-5 filter invert contrast-200" />
              </a>
              <a href="https://t.me/joshdotlink" target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 transition-opacity">
                <img src={telegramIcon} alt="Telegram" className="w-5 h-5 filter invert contrast-200" />
              </a>
              <a href="https://discord.com/users/blockchain_josh" target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 transition-opacity">
                <img src={discordIcon} alt="Discord" className="w-5 h-5 filter invert contrast-200" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm w-full md:w-1/2">
            <div>
              <h4 className={`font-bold mb-4 transition-colors duration-1000 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>Personal</h4>
              <ul className="space-y-3 text-gray-500">
                <li><Link to="/" className={`transition-colors duration-1000 ${isDarkTheme ? 'hover:text-white' : 'hover:text-black'}`}>Wallet</Link></li>
                <li><Link to="/" className={`transition-colors duration-1000 ${isDarkTheme ? 'hover:text-white' : 'hover:text-black'}`}>Accounts</Link></li>
                <li><Link to="/" className={`transition-colors duration-1000 ${isDarkTheme ? 'hover:text-white' : 'hover:text-black'}`}>Transfers</Link></li>
                <li><Link to="/" className={`transition-colors duration-1000 ${isDarkTheme ? 'hover:text-white' : 'hover:text-black'}`}>Features</Link></li>
                <li><Link to="/" className={`transition-colors duration-1000 ${isDarkTheme ? 'hover:text-white' : 'hover:text-black'}`}>Security</Link></li>
              </ul>
            </div>
            <div>
              <h4 className={`font-bold mb-4 transition-colors duration-1000 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>Businesses</h4>
              <ul className="space-y-3 text-gray-500">
                <li><Link to="/business" className={`transition-colors duration-1000 ${isDarkTheme ? 'hover:text-white' : 'hover:text-black'}`}>Features</Link></li>
                <li><Link to="/business" className={`transition-colors duration-1000 ${isDarkTheme ? 'hover:text-white' : 'hover:text-black'}`}>Payments</Link></li>
                <li><Link to="/business" className={`transition-colors duration-1000 ${isDarkTheme ? 'hover:text-white' : 'hover:text-black'}`}>Transfers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className={`font-bold mb-4 transition-colors duration-1000 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>Company</h4>
              <ul className="space-y-3 text-gray-500">
                <li><a href="#" className={`transition-colors duration-1000 ${isDarkTheme ? 'hover:text-white' : 'hover:text-black'}`}>About</a></li>
                <li><a href="#" className={`transition-colors duration-1000 ${isDarkTheme ? 'hover:text-white' : 'hover:text-black'}`}>Blog</a></li>
                <li><a href="#" className={`transition-colors duration-1000 ${isDarkTheme ? 'hover:text-white' : 'hover:text-black'}`}>Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-20 pt-8 flex flex-col md:flex-row items-end justify-between overflow-hidden">
          <p className="text-gray-400 text-xs mb-4 md:mb-0">© 2026 Zero Inc.</p>
          <div className={`text-[15vw] md:text-[18vw] font-black leading-none tracking-tighter select-none -mb-[5vw] transition-colors duration-1000 ${isDarkTheme ? 'text-white' : 'text-black'}`}>
            Zero
          </div>
        </div>
      </footer>

      {/* Waitlist Modal */}
      {isWaitlistOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={() => setIsWaitlistOpen(false)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div className="relative z-10 bg-white rounded-3xl shadow-2xl w-full max-w-md max-h-[90vh] flex flex-col overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between px-8 pt-8 pb-4 flex-shrink-0">
              <h3 className="text-2xl font-black text-gray-900">Reserve your spot</h3>
              <button onClick={() => setIsWaitlistOpen(false)} className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="overflow-y-auto flex-1 relative">
              {wlStatus === 'done' ? (
                <div className="flex flex-col items-center justify-center text-center px-8 py-12 gap-4">
                  <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-black text-gray-900">{wlDuplicate ? "You're already on the list" : "You're on the list!"}</h4>
                  <p className="text-gray-500 text-sm">We&apos;ll email <span className="font-semibold text-gray-900">{wlEmail}</span> when Zero mobile launches.</p>
                  <button onClick={() => setIsWaitlistOpen(false)} className="mt-2 px-8 py-3 bg-black text-white rounded-full text-sm font-bold hover:bg-gray-800 transition-all">
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={submitWaitlist} className="px-8 pb-8 pt-2 flex flex-col gap-4">
                  <p className="text-gray-500 text-sm">Be the first to know when Zero mobile launches.</p>
                  <input
                    type="text"
                    value={wlName}
                    onChange={e => setWlName(e.target.value)}
                    placeholder="Your name (optional)"
                    className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
                  />
                  <input
                    type="email"
                    required
                    value={wlEmail}
                    onChange={e => setWlEmail(e.target.value)}
                    placeholder="Email address"
                    className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
                  />
                  {wlStatus === 'error' && <p className="text-red-500 text-sm">{wlError}</p>}
                  <button
                    type="submit"
                    disabled={wlStatus === 'sending'}
                    className="w-full py-3.5 bg-black text-white rounded-2xl text-base font-bold hover:bg-gray-800 transition-all disabled:opacity-60"
                  >
                    {wlStatus === 'sending' ? 'Joining…' : 'Join waitlist'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Download Gate Modal — verify waitlist membership before downloading */}
      {isDownloadOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={() => setIsDownloadOpen(false)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div className="relative z-10 bg-white rounded-3xl shadow-2xl w-full max-w-md max-h-[90vh] flex flex-col overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between px-8 pt-8 pb-4 flex-shrink-0">
              <h3 className="text-2xl font-black text-gray-900">Download the app</h3>
              <button onClick={() => setIsDownloadOpen(false)} className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="overflow-y-auto flex-1 relative">
              {dlStatus === 'allowed' ? (
                <div className="flex flex-col items-center justify-center text-center px-8 py-12 gap-4">
                  <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-black text-gray-900">You&apos;re on the list!</h4>
                  <p className="text-gray-500 text-sm">Your download is ready — enjoy Zero mobile.</p>
                  <a
                    href={DOWNLOAD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 px-8 py-3.5 bg-black text-white rounded-full text-base font-bold hover:bg-gray-800 transition-all flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                    Download App
                  </a>
                </div>
              ) : dlStatus === 'denied' ? (
                <div className="flex flex-col items-center justify-center text-center px-8 py-12 gap-4">
                  <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg className="w-7 h-7 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-black text-gray-900">Not on the list yet</h4>
                  <p className="text-gray-500 text-sm">Downloads are reserved for waitlist members. Join first — it takes seconds.</p>
                  <button
                    onClick={() => { setIsDownloadOpen(false); openWaitlist() }}
                    className="mt-2 px-8 py-3.5 bg-black text-white rounded-full text-base font-bold hover:bg-gray-800 transition-all"
                  >
                    Join waitlist
                  </button>
                </div>
              ) : (
                <form onSubmit={verifyDownload} className="px-8 pb-8 pt-2 flex flex-col gap-4">
                  <p className="text-gray-500 text-sm">Enter the email you joined the waitlist with to unlock your download.</p>
                  <input
                    type="email"
                    required
                    value={dlEmail}
                    onChange={e => setDlEmail(e.target.value)}
                    placeholder="Email address"
                    className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
                  />
                  {(dlStatus === 'error') && <p className="text-red-500 text-sm">{dlError}</p>}
                  <button
                    type="submit"
                    disabled={dlStatus === 'checking'}
                    className="w-full py-3.5 bg-black text-white rounded-2xl text-base font-bold hover:bg-gray-800 transition-all disabled:opacity-60"
                  >
                    {dlStatus === 'checking' ? 'Verifying…' : 'Verify & continue'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
