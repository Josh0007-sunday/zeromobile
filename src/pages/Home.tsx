import { useState } from 'react'
import mobileWallet from '../assets/moble.png'
import mobileActivity from '../assets/mobile3.png'
import mobileTwo from '../assets/mobile2.png'
import usdcLogo from '../assets/usdc.png'
import solanaLogo from '../assets/solana.png'
import solanaWordMark from '../assets/solanaWordMark.svg'
import fairscaleLogo from '../assets/fairscalelogo.jpg'
import welcomeImage from '../assets/welcome.jpg'
import selfcustodyImage from '../assets/selfcustody.jpg'
import spendImage from '../assets/spend.jpg'
import rewardsImage from '../assets/rewards.jpg'

export default function Home() {
  const [cardIndex, setCardIndex] = useState(0)

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative px-6 py-12 md:py-24 max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[85vh]">
        <div className="w-full max-w-6xl mx-auto relative z-10 flex flex-col font-hero text-[#2b2b2b] text-[80px] sm:text-[100px] md:text-[130px] lg:text-[160px] leading-[0.95] tracking-tighter select-none my-12 md:my-20 px-4 md:px-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.9)_0%,transparent_80%)] -z-10 blur-[80px] pointer-events-none"></div>

          <div className="flex items-center self-start gap-4 md:gap-8 z-20 ml-0 md:-ml-40">
            <span>Make</span>
            <div className="w-20 sm:w-32 md:w-56 h-7 sm:h-10 md:h-14 lg:h-16 bg-[#2b2b2b] rounded-full shadow-inner relative flex-shrink-0 mt-2">
              <div className="absolute -top-10 sm:-top-14 md:-top-20 -left-4 sm:-left-6 md:-left-8 w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 bg-white/95 backdrop-blur-sm border border-white rounded-[1rem] md:rounded-[1.5rem] shadow-[0_30px_60px_-10px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.5)_inset] hidden sm:flex items-center justify-center transform -rotate-12 hover:rotate-0 transition-transform duration-500 ease-out z-30">
                <svg viewBox="0 0 24 24" className="w-6 sm:w-8 md:w-12 h-6 sm:h-8 md:h-12 text-[#26A17B]" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 13c-3.31 0-6-2.69-6-6h3c0 1.66 1.34 3 3 3s3-1.34 3-3h3c0 3.31-2.69 6-6 6zm0-8c2.21 0 4 1.79 4 4h-8c0-2.21 1.79-4 4-4z" />
                  <path d="M12 4.5c4.14 0 7.5 3.36 7.5 7.5h-2.5c0-2.76-2.24-5-5-5s-5 2.24-5 5H4.5C4.5 7.86 7.86 4.5 12 4.5z" />
                  <rect x="10.5" y="8" width="3" height="7" />
                  <path d="M8 8h8v2H8z" />
                </svg>
              </div>
              <div className="absolute -top-8 sm:-top-12 md:-top-16 -right-4 sm:-right-8 md:-right-12 w-10 sm:w-14 md:w-[85px] h-10 sm:h-14 md:h-[85px] bg-white/90 backdrop-blur-sm border border-white rounded-[0.8rem] md:rounded-[1.2rem] shadow-[0_25px_50px_-10px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.5)_inset] flex items-center justify-center transform rotate-[15deg] hover:rotate-[5deg] transition-transform duration-500 ease-out z-20">
                <img src={usdcLogo} alt="USDC" className="w-5 sm:w-7 md:w-10 h-5 sm:h-7 md:h-10" />
              </div>
            </div>
          </div>

          <div className="flex items-center self-center gap-4 md:gap-8 z-10 relative mt-2 md:-mt-2">
            <div className="absolute -left-12 sm:-left-16 md:-left-32 top-2 md:top-8 w-12 sm:w-16 md:w-28 h-12 sm:h-16 md:h-28 bg-white border border-gray-100 rounded-[1rem] md:rounded-[1.8rem] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2),0_0_0_1px_rgba(255,255,255,0.8)_inset] flex items-center justify-center text-3xl sm:text-4xl md:text-6xl text-[#2b2b2b] font-semibold transform -rotate-12 hover:-rotate-6 transition-transform duration-500 ease-out z-20">
              $
            </div>
            <span className="relative z-10">your money</span>
            <div className="absolute -right-10 sm:-right-14 md:-right-28 top-0 md:top-4 w-10 sm:w-14 md:w-24 h-10 sm:h-14 md:h-24 bg-white border border-gray-100 rounded-[0.8rem] md:rounded-[1.4rem] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2),0_0_0_1px_rgba(255,255,255,0.8)_inset] flex items-center justify-center text-2xl sm:text-3xl md:text-5xl text-[#2b2b2b] font-sans font-semibold transform rotate-12 hover:rotate-6 transition-transform duration-500 ease-out z-20">
              £
            </div>
          </div>

          <div className="flex items-center self-end gap-4 md:gap-8 z-20 mt-2 md:-mt-4 relative mr-0 md:-mr-40">
            <div className="w-24 sm:w-32 md:w-56 h-8 sm:h-10 md:h-14 lg:h-16 bg-[#2b2b2b] rounded-full shadow-inner relative flex-shrink-0 mt-4">
              <div className="absolute -bottom-10 sm:-bottom-14 md:-bottom-20 right-2 sm:right-4 md:right-8 w-12 sm:w-16 md:w-28 h-12 sm:h-16 md:h-28 bg-white/95 backdrop-blur-sm border border-white rounded-[1rem] md:rounded-[1.8rem] shadow-[0_30px_60px_-10px_rgba(0,0,0,0.25),0_4px_6px_-2px_rgba(0,0,0,0.05)_inset,0_0_0_1px_rgba(255,255,255,0.6)_inset] flex items-center justify-center transform -rotate-[15deg] hover:rotate-[0deg] transition-transform duration-500 ease-out z-30">
                <img src={solanaLogo} alt="Solana" className="w-6 sm:w-8 md:w-14 h-6 sm:h-8 md:h-14" />
              </div>
            </div>
            <span className="relative">
              move.
              <svg className="absolute -right-8 sm:-right-12 md:-right-20 bottom-0 md:-bottom-2 w-8 sm:w-10 md:w-16 h-8 sm:h-10 md:h-16 text-white drop-shadow-[0_10px_15px_rgba(0,0,0,0.3)] transform -rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 3l14 11-6.5 1.5-3.5 8.5L5 3z" fill="white" stroke="#d1d5db" />
              </svg>
            </span>
          </div>
        </div>

        <div className="-mt-2 md:-mt-8 w-full max-w-6xl mx-auto flex flex-col items-start relative z-30 px-4 md:px-0 -ml-4 md:-ml-12 lg:-ml-24">
          <p className="text-gray-500 text-base md:text-xl font-medium mb-6 md:mb-8 max-w-lg text-left leading-relaxed">
            Experience a new affordable and efficient way to send and receive digital payments worldwide.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={scrollToBottom}
              className="px-8 py-4 bg-[#2b2b2b] text-white rounded-full text-base md:text-lg font-bold hover:bg-black transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Get Zero today
            </button>
          </div>
        </div>
      </section>

      {/* Feature 1: Mobile Wallet */}
      <section className="py-20 md:py-32 w-full overflow-hidden relative">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 pl-6 sm:pl-12 md:pl-20 xl:pl-32 pr-6 lg:pr-0 z-10 transition-transform duration-1000 ease-out mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-5xl font-black leading-[1.1] tracking-tight mb-8 whitespace-nowrap sm:whitespace-normal">
              A wallet that can do more.<br />
              Built to be your new<br />
              and only payments app ever.
            </h2>
            <div className="pt-8 md:pt-[200px]">
              <h3 className="text-xl md:text-2xl font-bold mb-4">Introducing Zero Wallet</h3>
              <p className="text-gray-500 text-lg md:text-xl max-w-md leading-relaxed">
                A digital wallet that gives back your financial control and enables true affordable and instant worldwide payments.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-end mt-16 lg:mt-0 relative">
            <img
              src={mobileWallet}
              alt="Zero Mobile Wallet"
              className="w-[100%] sm:w-[450px] md:w-[600px] lg:w-[750px] xl:w-[700px] max-w-none object-contain object-right translate-x-4 lg:translate-x-8 xl:translate-x-12 relative z-10"
            />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 md:w-96 md:h-96 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,1)_0%,rgba(255,255,255,0.8)_40%,transparent_100%)] blur-2xl z-20 pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Coverage and Backers Section */}
      <section className="py-12 md:py-24 w-full relative">
        <div className="w-full pl-6 sm:pl-12 md:pl-20 xl:pl-32 pr-6">
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Full coverage list and backers.</h3>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
              Available on Solana
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-8 md:gap-14 opacity-80 mt-12 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2">
              <span className="text-xl md:text-2xl font-extrabold tracking-tight">soonami<span className="text-[#00df89]">.io</span></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl md:text-2xl font-black tracking-widest uppercase">Legends</span>
            </div>
            <img src={fairscaleLogo} alt="Fairscale" className="h-6 md:h-8 object-contain mix-blend-multiply" />
            <img src={solanaWordMark} alt="Solana" className="h-4 md:h-6 object-contain filter invert contrast-200" />
          </div>
        </div>
      </section>

      {/* Feature 2: Global Transfer */}
      <section className="relative overflow-hidden">
        <div className="md:hidden px-6 pt-12 pb-0">
          <h3 className="text-xl font-bold mb-2">One app that takes care of it all.</h3>
          <p className="text-gray-500 text-base leading-relaxed mb-8">
            Whether you are looking to send money overseas or would like to diversify your digital portfolio, Zero wallet has you covered.
          </p>
          <div className="flex justify-center">
            <img src={mobileTwo} alt="Global Transfer App" className="w-full max-w-[320px] object-contain" />
          </div>
        </div>
        <div className="hidden md:flex flex-col items-center justify-center min-h-[80vh] py-24 px-6 relative">
          <div className="absolute top-24 left-20 xl:left-32 max-w-xl z-20">
            <h3 className="text-2xl font-bold mb-2">One app that takes care of it all.</h3>
            <p className="text-gray-500 text-xl leading-relaxed">
              Whether you are looking to send money overseas or would like to diversify your digital portfolio, Zero wallet has you covered.
            </p>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-[220px] lg:text-[280px] font-black opacity-5 leading-none z-0 select-none whitespace-nowrap tracking-tighter">
            <span>GLOBAL</span>
            <span>TRANSFER</span>
          </div>
          <div className="relative z-10 flex justify-center items-center w-full mt-8">
            <img src={mobileTwo} alt="Global Transfer App" className="relative z-10 w-[600px] lg:w-[800px] object-contain drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Security & Features Cards Section */}
      <section className="py-24 overflow-hidden relative bg-white" id="jotform-section">
        <div className="w-full pl-6 sm:pl-12 md:pl-20 xl:pl-32 pr-6 mb-12 flex items-end justify-between gap-4">
          <h2 className="font-hero text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.95]">
            Controlled by you.<br />
            Secured by us.
          </h2>
          <div className="flex gap-3 pb-2 flex-shrink-0">
            <button
              onClick={() => setCardIndex(i => Math.max(0, i - 1))}
              className="w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 hover:scale-110 bg-white border-gray-200 text-gray-900 shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
              onClick={() => setCardIndex(i => Math.min(3, i + 1))}
              className="w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 hover:scale-110 bg-white border-gray-200 text-gray-900 shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
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
                    <h3 className="text-lg font-black text-gray-900 mb-1 tracking-tight">{card.title}</h3>
                    <p className="text-gray-500 text-sm font-medium leading-relaxed">{card.desc}</p>
                  </div>
                  <img src={card.image} alt={card.alt} className="w-full h-64 rounded-2xl object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Make Your Money Move CTA Section */}
      <section className="relative overflow-hidden py-28 px-6 md:px-0 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[60vh]">
          <div className="w-full lg:w-1/2 pl-0 md:pl-20 xl:pl-32 flex flex-col justify-center">
            <div className="font-hero text-[75px] sm:text-[95px] md:text-[120px] leading-[0.9] tracking-tighter select-none text-[#2b2b2b]">
              <div className="flex items-center gap-4 mb-1">
                <span>Make</span>
                <div className="w-20 md:w-40 h-8 md:h-12 rounded-full flex-shrink-0 mt-3 bg-[#2b2b2b]" />
              </div>
              <div className="block">your money</div>
              <div className="flex items-center gap-4 mt-1">
                <div className="w-16 md:w-32 h-6 md:h-10 rounded-full flex-shrink-0 mb-1 bg-[#2b2b2b]" />
                <span>move.</span>
              </div>
            </div>
            <p className="mt-8 text-lg md:text-xl font-medium max-w-sm leading-relaxed text-gray-500">
              A new era of borderless, instant, affordable payments — built for the world.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  const el = document.getElementById('jotform-section')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-8 py-4 text-base md:text-lg font-bold rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-sans flex-shrink-0 bg-[#2b2b2b] text-white hover:bg-black"
              >
                Join the waitlist →
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src={mobileActivity}
              alt="Zero App Preview"
              className="w-[340px] sm:w-[340px] md:w-[420px] object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </section>
    </>
  )
}
