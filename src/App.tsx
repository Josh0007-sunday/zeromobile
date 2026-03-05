import { useState, useEffect, useRef } from 'react'
import appLogo from './assets/applogo.png'

import twitterIcon from './assets/twitter-x.svg'
import telegramIcon from './assets/telegram.svg'
import discordIcon from './assets/discord.svg'
import mobileWallet from './assets/moble.png'
import mobileActivity from './assets/mobile3.png'
import mobileTwo from './assets/mobile2.png'
import usdcLogo from './assets/usdc.png'
import solanaLogo from './assets/solana.png'
import solanaWordMark from './assets/solanaWordMark.svg'
import fairscaleLogo from './assets/fairscalelogo.jpg'
import welcomeImage from './assets/welcome.jpg'
import selfcustodyImage from './assets/selfcustody.jpg'
import spendImage from './assets/spend.jpg'
import rewardsImage from './assets/rewards.jpg'

import './App.css'

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [cardIndex, setCardIndex] = useState(0)
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)
  const [isFormLoading, setIsFormLoading] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const jotformRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (jotformRef.current) {
        // Trigger dark theme when the JotForm section reaches 70% of the screen height from the top.
        // It remains true even when scrolled past it (top becomes negative).
        const top = jotformRef.current.getBoundingClientRect().top
        setIsDarkTheme(top < window.innerHeight * 0.7)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    })
  }

  return (
    <div className={`min-h-screen relative font-sans transition-colors duration-1000 ease-in-out ${isDarkTheme ? 'bg-black text-white' : 'bg-white text-gray-900'} selection:bg-gray-800 selection:text-white overflow-hidden`}>
      {/* Navbar */}
      <nav className={`sticky top-0 z-50 backdrop-blur-xl w-full border-b transition-colors duration-1000 ${isDarkTheme ? 'bg-black/80 border-gray-800' : 'bg-white/80 border-gray-100'}`}>
        <div className="flex items-center px-6 md:px-12 py-4 md:py-5 w-full">
          {/* Logo - Left */}
          <div className="flex items-center flex-1">
            <img src={appLogo} alt="Zero Logo" className={`h-6 md:h-8 transition-all duration-1000 ${isDarkTheme ? 'filter-none' : 'filter invert contrast-200'}`} />
            <span className={`ml-3 font-bold text-lg md:text-xl tracking-tight hidden sm:block transition-colors duration-1000 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>Zero mobile</span>
          </div>

          {/* Navigation - Center (desktop only) */}
          <div className="hidden md:flex items-center justify-center gap-2">
            <button className={`px-5 py-2 text-sm font-semibold transition-colors ${isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black'}`}>Personal</button>
            <button className={`px-5 py-2 text-sm font-semibold transition-colors ${isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black'}`}>Business</button>
            <button className={`px-5 py-2 text-sm font-semibold transition-colors ${isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black'}`}>About us</button>
          </div>

          {/* Right side: desktop CTA + mobile hamburger */}
          <div className="flex items-center justify-end flex-1 gap-3">
            {/* Desktop Join Waitlist */}
            <button
              onClick={() => { setIsWaitlistOpen(true); setIsFormLoading(true) }}
              className="hidden md:block px-6 py-2.5 bg-[#2b2b2b] text-white rounded-full text-sm font-semibold hover:bg-black transition-all shadow-[0_4px_14px_0_rgba(0,0,0,0.1)]"
            >
              Join waitlist
            </button>

            {/* Mobile Hamburger */}
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

        {/* Mobile Menu Panel */}
        {isMenuOpen && (
          <div className={`md:hidden border-t px-6 py-6 flex flex-col gap-4 transition-colors duration-1000 ${isDarkTheme ? 'bg-black border-gray-800' : 'bg-white border-gray-100'}`}>
            <button className={`text-left text-lg font-semibold py-2 transition-colors ${isDarkTheme ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`} onClick={() => setIsMenuOpen(false)}>Personal</button>
            <button className={`text-left text-lg font-semibold py-2 transition-colors ${isDarkTheme ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`} onClick={() => setIsMenuOpen(false)}>Business</button>
            <button className={`text-left text-lg font-semibold py-2 transition-colors ${isDarkTheme ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`} onClick={() => setIsMenuOpen(false)}>About us</button>
            <div className="pt-2">
              <button
                onClick={() => { setIsWaitlistOpen(true); setIsFormLoading(true); setIsMenuOpen(false) }}
                className="w-full py-3.5 bg-[#2b2b2b] text-white rounded-2xl text-base font-bold hover:bg-black transition-all"
              >
                Join waitlist
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-12 md:py-24 max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[85vh]">
        {/* Custom Typography Hero */}
        <div className="w-full max-w-6xl mx-auto relative z-10 flex flex-col font-hero text-[#2b2b2b] text-[80px] sm:text-[100px] md:text-[130px] lg:text-[160px] leading-[0.95] tracking-tighter select-none my-12 md:my-20 px-4 md:px-0">

          {/* Background subtle radial gradient to mimic soft lighting */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.9)_0%,transparent_80%)] -z-10 blur-[80px] pointer-events-none"></div>

          {/* Row 1: Make [Toggle] (Left Aligned) */}
          <div className="flex items-center self-start gap-4 md:gap-8 z-20 ml-0 md:-ml-40">
            <span>Make</span>
            <div className="w-20 sm:w-32 md:w-56 h-7 sm:h-10 md:h-14 lg:h-16 bg-[#2b2b2b] rounded-full shadow-inner relative flex-shrink-0 mt-2">
              {/* USDT Tile - hidden on xs to avoid overlap */}
              <div className="absolute -top-10 sm:-top-14 md:-top-20 -left-4 sm:-left-6 md:-left-8 w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 bg-white/95 backdrop-blur-sm border border-white rounded-[1rem] md:rounded-[1.5rem] shadow-[0_30px_60px_-10px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.5)_inset] hidden sm:flex items-center justify-center transform -rotate-12 hover:rotate-0 transition-transform duration-500 ease-out z-30">
                <svg viewBox="0 0 24 24" className="w-6 sm:w-8 md:w-12 h-6 sm:h-8 md:h-12 text-[#26A17B]" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 13c-3.31 0-6-2.69-6-6h3c0 1.66 1.34 3 3 3s3-1.34 3-3h3c0 3.31-2.69 6-6 6zm0-8c2.21 0 4 1.79 4 4h-8c0-2.21 1.79-4 4-4z" />
                  <path d="M12 4.5c4.14 0 7.5 3.36 7.5 7.5h-2.5c0-2.76-2.24-5-5-5s-5 2.24-5 5H4.5C4.5 7.86 7.86 4.5 12 4.5z" />
                  <rect x="10.5" y="8" width="3" height="7" />
                  <path d="M8 8h8v2H8z" />
                </svg>
              </div>
              {/* USDC Tile */}
              <div className="absolute -top-8 sm:-top-12 md:-top-16 -right-4 sm:-right-8 md:-right-12 w-10 sm:w-14 md:w-[85px] h-10 sm:h-14 md:h-[85px] bg-white/90 backdrop-blur-sm border border-white rounded-[0.8rem] md:rounded-[1.2rem] shadow-[0_25px_50px_-10px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.5)_inset] flex items-center justify-center transform rotate-[15deg] hover:rotate-[5deg] transition-transform duration-500 ease-out z-20">
                <img src={usdcLogo} alt="USDC" className="w-5 sm:w-7 md:w-10 h-5 sm:h-7 md:h-10" />
              </div>
            </div>
          </div>

          {/* Row 2: [$] your money [Tile] (Center Aligned) */}
          <div className="flex items-center self-center gap-4 md:gap-8 z-10 relative mt-2 md:-mt-2">

            {/* Dollar Tile */}
            <div className="absolute -left-12 sm:-left-16 md:-left-32 top-2 md:top-8 w-12 sm:w-16 md:w-28 h-12 sm:h-16 md:h-28 bg-white border border-gray-100 rounded-[1rem] md:rounded-[1.8rem] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2),0_0_0_1px_rgba(255,255,255,0.8)_inset] flex items-center justify-center text-3xl sm:text-4xl md:text-6xl text-[#2b2b2b] font-semibold transform -rotate-12 hover:-rotate-6 transition-transform duration-500 ease-out z-20">
              $
            </div>

            <span className="relative z-10">your money</span>

            {/* Existing Tile (now holding Pound) */}
            <div className="absolute -right-10 sm:-right-14 md:-right-28 top-0 md:top-4 w-10 sm:w-14 md:w-24 h-10 sm:h-14 md:h-24 bg-white border border-gray-100 rounded-[0.8rem] md:rounded-[1.4rem] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2),0_0_0_1px_rgba(255,255,255,0.8)_inset] flex items-center justify-center text-2xl sm:text-3xl md:text-5xl text-[#2b2b2b] font-sans font-semibold transform rotate-12 hover:rotate-6 transition-transform duration-500 ease-out z-20">
              £
            </div>
          </div>

          {/* Row 3: [Toggle] move. (Right Aligned) */}
          <div className="flex items-center self-end gap-4 md:gap-8 z-20 mt-2 md:-mt-4 relative mr-0 md:-mr-40">
            <div className="w-24 sm:w-32 md:w-56 h-8 sm:h-10 md:h-14 lg:h-16 bg-[#2b2b2b] rounded-full shadow-inner relative flex-shrink-0 mt-4">
              {/* Solana Tile */}
              <div className="absolute -bottom-10 sm:-bottom-14 md:-bottom-20 right-2 sm:right-4 md:right-8 w-12 sm:w-16 md:w-28 h-12 sm:h-16 md:h-28 bg-white/95 backdrop-blur-sm border border-white rounded-[1rem] md:rounded-[1.8rem] shadow-[0_30px_60px_-10px_rgba(0,0,0,0.25),0_4px_6px_-2px_rgba(0,0,0,0.05)_inset,0_0_0_1px_rgba(255,255,255,0.6)_inset] flex items-center justify-center transform -rotate-[15deg] hover:rotate-[0deg] transition-transform duration-500 ease-out z-30">
                <img src={solanaLogo} alt="Solana" className="w-6 sm:w-8 md:w-14 h-6 sm:h-8 md:h-14" />
              </div>
            </div>
            <span className="relative">
              move.
              {/* Cursor Icon */}
              <svg className="absolute -right-8 sm:-right-12 md:-right-20 bottom-0 md:-bottom-2 w-8 sm:w-10 md:w-16 h-8 sm:h-10 md:h-16 text-white drop-shadow-[0_10px_15px_rgba(0,0,0,0.3)] transform -rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 3l14 11-6.5 1.5-3.5 8.5L5 3z" fill="white" stroke="#d1d5db" />
              </svg>
            </span>
          </div>
        </div>

        {/* Subtext / button */}
        <div className="-mt-2 md:-mt-8 w-full max-w-6xl mx-auto flex flex-col items-start relative z-30 px-4 md:px-0 -ml-4 md:-ml-12 lg:-ml-24">
          <p className="text-gray-500 text-base md:text-xl font-medium mb-6 md:mb-8 max-w-lg text-left leading-relaxed">
            Experience a new affordable and efficient way to send and receive digital payments worldwide.
          </p>
          <button
            onClick={scrollToBottom}
            className="px-8 py-4 bg-[#2b2b2b] text-white rounded-full text-base md:text-lg font-bold hover:bg-black transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Get Zero today
          </button>
        </div>
      </section>

      {/* Feature 1: Mobile Wallet */}
      <section className={`py-20 md:py-32 w-full overflow-hidden relative transition-colors duration-1000 ${isDarkTheme ? 'bg-black' : 'bg-white'}`}>
        <div className="w-full flex flex-col lg:flex-row items-center justify-between">

          {/* Text Content - Left Edge */}
          <div className="w-full lg:w-1/2 pl-6 sm:pl-12 md:pl-20 xl:pl-32 pr-6 lg:pr-0 z-10 transition-transform duration-1000 ease-out mb-12 sm:mb-16 md:mb-20">
            <h2 className={`text-3xl md:text-5xl lg:text-5xl font-black leading-[1.1] tracking-tight mb-8 whitespace-nowrap sm:whitespace-normal transition-colors duration-1000 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
              A wallet that can do more.<br />
              <span className="text-gray-400 font-medium">—</span> Built to be your new<br />
              and only payments app ever.
            </h2>

            <div className="pt-8 md:pt-[200px]">
              <h3 className={`text-xl md:text-2xl font-bold mb-4 transition-colors duration-1000 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>Introducing Zero Wallet</h3>
              <p className="text-gray-500 text-lg md:text-xl max-w-md leading-relaxed">
                A digital wallet that gives back your financial control and enables true affordable and instant worldwide payments.
              </p>
            </div>
          </div>

          {/* Image Content - Bleeding Right */}
          <div className="w-full lg:w-1/2 flex justify-end mt-16 lg:mt-0 relative">
            <img
              src={mobileWallet}
              alt="Zero Mobile Wallet"
              className="w-[100%] sm:w-[450px] md:w-[600px] lg:w-[750px] xl:w-[700px] max-w-none object-contain object-right translate-x-4 lg:translate-x-8 xl:translate-x-12 relative z-10"
            />
            {/* White light blur over the bottom right */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 md:w-96 md:h-96 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,1)_0%,rgba(255,255,255,0.8)_40%,transparent_100%)] blur-2xl z-20 pointer-events-none"></div>
          </div>

        </div>
      </section>

      {/* Coverage and Backers Section */}
      <section className={`py-12 md:py-24 w-full relative border-t transition-colors duration-1000 ${isDarkTheme ? 'bg-black border-gray-800' : 'bg-white border-gray-100'}`}>
        <div className="w-full pl-6 sm:pl-12 md:pl-20 xl:pl-32 pr-6">

          <div className="mb-8">
            <h3 className={`text-xl md:text-2xl font-bold mb-2 transition-colors duration-1000 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
              Full coverage list and backers.
            </h3>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
              Available on Solana
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-8 md:gap-14 opacity-80 mt-12 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Soonami */}
            <div className="flex items-center gap-2">
              <span className={`text-xl md:text-2xl font-extrabold tracking-tight transition-colors duration-1000 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>soonami<span className="text-[#00df89]">.io</span></span>
            </div>

            {/* Legends */}
            <div className="flex items-center gap-2">
              <span className={`text-xl md:text-2xl font-black tracking-widest uppercase transition-colors duration-1000 ${isDarkTheme ? 'text-white' : 'text-gray-800'}`}>Legends</span>
            </div>

            {/* Fairscale */}
            <img src={fairscaleLogo} alt="Fairscale" className="h-6 md:h-8 object-contain mix-blend-multiply" />

            {/* Solana Wordmark */}
            <img src={solanaWordMark} alt="Solana" className="h-4 md:h-6 object-contain filter invert contrast-200" />

          </div>
        </div>
      </section>

      {/* Feature 2: Global Transfer */}
      <section className={`relative overflow-hidden transition-colors duration-1000 ${isDarkTheme ? 'bg-black' : 'bg-white'}`}>

        {/* Mobile: stacked layout */}
        <div className="md:hidden px-6 pt-12 pb-0">
          <h3 className={`text-xl font-bold mb-2 transition-colors duration-1000 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
            One app that takes care of it all.
          </h3>
          <p className="text-gray-500 text-base leading-relaxed mb-8">
            Whether you are looking to send money overseas or would like to diversify your digital portfolio, Zero wallet has you covered.
          </p>
          <div className="flex justify-center">
            <img
              src={mobileTwo}
              alt="Global Transfer App"
              className="w-full max-w-[320px] object-contain"
            />
          </div>
        </div>

        {/* Desktop: original layered layout */}
        <div className="hidden md:flex flex-col items-center justify-center min-h-[80vh] py-24 px-6 relative">
          {/* Top Corner Content */}
          <div className="absolute top-24 left-20 xl:left-32 max-w-xl z-20">
            <h3 className={`text-2xl font-bold mb-2 transition-colors duration-1000 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
              One app that takes care of it all.
            </h3>
            <p className="text-gray-500 text-xl leading-relaxed">
              Whether you are looking to send money overseas or would like to diversify your digital portfolio, Zero wallet has you covered.
            </p>
          </div>

          {/* Background Thick Text (Transparent) */}
          <div className={`absolute inset-0 flex flex-col items-center justify-center text-[220px] lg:text-[280px] font-black opacity-5 leading-none z-0 select-none whitespace-nowrap tracking-tighter transition-colors duration-1000 ${isDarkTheme ? 'text-white' : 'text-black'}`}>
            <span>GLOBAL</span>
            <span>TRANSFER</span>
          </div>

          {/* Center Image with White Light Bleed */}
          <div className="relative z-10 flex justify-center items-center w-full mt-8">
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] max-w-lg bg-[radial-gradient(circle_at_center,rgba(255,255,255,1)_0%,rgba(255,255,255,0.7)_50%,transparent_100%)] blur-3xl z-0 pointer-events-none transition-opacity duration-1000 ${isDarkTheme ? 'opacity-0' : 'opacity-100'}`}></div>
            <img
              src={mobileTwo}
              alt="Global Transfer App"
              className={`relative z-10 w-[600px] lg:w-[800px] object-contain transition-all duration-1000 ${isDarkTheme ? '' : 'drop-shadow-2xl'}`}
            />
          </div>
        </div>
      </section>

      {/* Security & Features Cards Section */}
      <section ref={jotformRef} className={`py-24 overflow-hidden relative transition-colors duration-1000 ${isDarkTheme ? 'bg-black' : 'bg-[#f8f9fa]'}`}>

        {/* Section Heading + Nav Buttons */}
        <div className="w-full pl-6 sm:pl-12 md:pl-20 xl:pl-32 pr-6 mb-12 flex items-end justify-between gap-4">
          <h2 className={`font-hero text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.95] transition-colors duration-1000 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
            Controlled by you.<br />
            Secured by us.
          </h2>
          <div className="flex gap-3 pb-2 flex-shrink-0">
            <button
              onClick={() => setCardIndex(i => Math.max(0, i - 1))}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 hover:scale-110 ${isDarkTheme ? 'bg-white/10 border-white/20 text-white hover:bg-white/20' : 'bg-white border-gray-200 text-gray-900 shadow-md hover:shadow-lg'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
              onClick={() => setCardIndex(i => Math.min(3, i + 1))}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 hover:scale-110 ${isDarkTheme ? 'bg-white/10 border-white/20 text-white hover:bg-white/20' : 'bg-white border-gray-200 text-gray-900 shadow-md hover:shadow-lg'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        {/* Cards Track - no scrollbar, transform-driven */}
        <div className="w-full overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out pl-6 sm:pl-12 md:pl-20 xl:pl-32"
            style={{ transform: `translateX(calc(-${cardIndex} * 346px))` }}
          >
            {[
              { image: welcomeImage, alt: 'Welcome', title: 'Welcome to Zero', desc: 'Get started with a borderless financial experience.' },
              { image: selfcustodyImage, alt: 'Self Custody', title: 'Self-custody', desc: 'You control your funds. We never have access. Your keys, your crypto.' },
              { image: spendImage, alt: 'Spend', title: 'Spend directly.', desc: 'Frictionless on and off-ramp built right in.' },
              { image: rewardsImage, alt: 'Rewards', title: 'Zero Alpha Point Program', desc: 'Earn rewards effortlessly as you transact.' },
            ].map((card, i) => (
              <div
                key={i}
                onClick={() => setCardIndex(i)}
                className={`glass-card w-[320px] flex-shrink-0 p-6 flex flex-col gap-4 cursor-pointer select-none transition-all duration-500 ${cardIndex === i ? 'opacity-100 scale-100' : 'opacity-40 scale-95'}`}
              >
                <div className="glass-card-content flex flex-col gap-4">
                  <div>
                    <h3 className="text-lg font-black text-white mb-1 tracking-tight">{card.title}</h3>
                    <p className="text-white/70 text-sm font-medium leading-relaxed">{card.desc}</p>
                  </div>
                  <img src={card.image} alt={card.alt} className="w-full h-64 rounded-2xl object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Make Your Money Move CTA Section */}
      <section className={`relative overflow-hidden py-28 px-6 md:px-0 transition-colors duration-1000 ${isDarkTheme ? 'bg-black' : 'bg-[#f2f2f2]'}`}>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[60vh]">

          {/* Left: Typography + CTA */}
          <div className="w-full lg:w-1/2 pl-0 md:pl-20 xl:pl-32 flex flex-col justify-center">
            {/* Hero Text */}
            <div className={`font-hero text-[75px] sm:text-[95px] md:text-[120px] leading-[0.9] tracking-tighter select-none transition-colors duration-1000 ${isDarkTheme ? 'text-white' : 'text-[#2b2b2b]'}`}>
              <div className="flex items-center gap-4 mb-1">
                <span>Make</span>
                <div className={`w-20 md:w-40 h-8 md:h-12 rounded-full flex-shrink-0 mt-3 transition-colors duration-1000 ${isDarkTheme ? 'bg-white' : 'bg-[#2b2b2b]'}`} />
              </div>
              <div className="block">your money</div>
              <div className="flex items-center gap-4 mt-1">
                <div className={`w-16 md:w-32 h-6 md:h-10 rounded-full flex-shrink-0 mb-1 transition-colors duration-1000 ${isDarkTheme ? 'bg-white/80' : 'bg-[#2b2b2b]'}`} />
                <span>move.</span>
              </div>
            </div>

            {/* Subtext */}
            <p className={`mt-8 text-lg md:text-xl font-medium max-w-sm leading-relaxed transition-colors duration-1000 ${isDarkTheme ? 'text-gray-400' : 'text-gray-500'}`}>
              A new era of borderless, instant, affordable payments — built for the world.
            </p>

            {/* Join Waitlist Button */}
            <button
              onClick={() => { setIsWaitlistOpen(true); setIsFormLoading(true) }}
              className={`mt-8 self-start px-8 py-4 text-base md:text-lg font-bold rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-sans ${isDarkTheme ? 'bg-white text-black hover:bg-gray-100' : 'bg-[#2b2b2b] text-white hover:bg-black'}`}
            >
              Join the waitlist →
            </button>
          </div>

          {/* Right: Mobile3 Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src={mobileActivity}
              alt="Zero App Preview"
              className="w-[340px] sm:w-[340px] md:w-[420px] object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Waitlist Modal */}
      {isWaitlistOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={() => setIsWaitlistOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <div
            className="relative z-10 bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header - sticky */}
            <div className="flex items-center justify-between px-8 pt-8 pb-4 flex-shrink-0">
              <h3 className="text-2xl font-black text-gray-900">Reserve your spot</h3>
              <button
                onClick={() => setIsWaitlistOpen(false)}
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Scrollable iframe wrapper */}
            <div className="overflow-y-auto flex-1 relative">
              {/* Loading Spinner */}
              {isFormLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white gap-4 z-10">
                  <div className="w-10 h-10 border-4 border-gray-200 border-t-gray-900 rounded-full animate-spin" />
                  <p className="text-gray-400 text-sm font-medium">Loading form...</p>
                </div>
              )}
              <iframe
                id="JotFormIFrame-waitlist"
                title="Waitlist Form"
                onLoad={() => setIsFormLoading(false)}
                allowTransparency={true}
                allow="geolocation; microphone; camera; fullscreen; payment"
                src="https://form.jotform.com/260158004037043"
                frameBorder="0"
                style={{ minWidth: '100%', width: '100%', height: '600px', border: 'none', display: 'block', opacity: isFormLoading ? 0 : 1, transition: 'opacity 0.4s ease' }}
                scrolling="yes"
              />
            </div>
          </div>
        </div>
      )}
      <footer className={`py-12 md:py-20 px-6 border-t mt-20 transition-colors duration-1000 ${isDarkTheme ? 'bg-black border-gray-800' : 'bg-white border-gray-100'}`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Logo & Intro */}
          <div className="max-w-xs">
            <div className="flex items-center mb-6">
              <img src={appLogo} alt="Zero Logo" className="h-8 filter invert contrast-200" />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Bringing financing to the 1.5 billion unbanked. Enabling cost-efficient and instant payments, worldwide.
            </p>
            {/* Social Icons */}
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

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm w-full md:w-1/2">
            <div>
              <h4 className={`font-bold mb-4 transition-colors duration-1000 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>Personal</h4>
              <ul className="space-y-3 text-gray-500">
                <li><a href="#" className={`transition-colors duration-1000 ${isDarkTheme ? 'hover:text-white' : 'hover:text-black'}`}>Wallet</a></li>
                <li><a href="#" className={`transition-colors duration-1000 ${isDarkTheme ? 'hover:text-white' : 'hover:text-black'}`}>Accounts</a></li>
                <li><a href="#" className={`transition-colors duration-1000 ${isDarkTheme ? 'hover:text-white' : 'hover:text-black'}`}>Transfers</a></li>
                <li><a href="#" className={`transition-colors duration-1000 ${isDarkTheme ? 'hover:text-white' : 'hover:text-black'}`}>Features</a></li>
                <li><a href="#" className={`transition-colors duration-1000 ${isDarkTheme ? 'hover:text-white' : 'hover:text-black'}`}>Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className={`font-bold mb-4 transition-colors duration-1000 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>Businesses</h4>
              <ul className="space-y-3 text-gray-500">
                <li><a href="#" className={`transition-colors duration-1000 ${isDarkTheme ? 'hover:text-white' : 'hover:text-black'}`}>Features</a></li>
                <li><a href="#" className={`transition-colors duration-1000 ${isDarkTheme ? 'hover:text-white' : 'hover:text-black'}`}>Payments</a></li>
                <li><a href="#" className={`transition-colors duration-1000 ${isDarkTheme ? 'hover:text-white' : 'hover:text-black'}`}>Transfers</a></li>
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

        {/* Giant Footer Text & Copyright */}
        <div className="max-w-7xl mx-auto mt-20 pt-8 flex flex-col md:flex-row items-end justify-between overflow-hidden">
          <p className="text-gray-400 text-xs mb-4 md:mb-0">© 2026 Zero Inc.</p>
          <div className="text-[15vw] md:text-[18vw] font-black leading-none tracking-tighter text-gray-100 select-none -mb-[5vw]">
            Zero
          </div>
        </div>
      </footer>
    </div >
  )
}

export default App

