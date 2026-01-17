import appLogo from './assets/applogo.png'
import zeroUiDesign from './assets/mobileui.jpeg'
import mobileSuccess from './assets/mobileui-success.jpeg'
import submitTransaction from './assets/submittransaction.jpeg'
import bgImage from './assets/bg.png'
import zeroLeopard from './assets/zeroleopard.png'
import bonkLogo from './assets/bonk.jpg'
import magicedenLogo from './assets/magiceden.png'
import usdcLogo from './assets/usdc.png'
import stepLogo from './assets/step.png'
import moonwalkLogo from './assets/moonwalk.png'
import twitterIcon from './assets/twitter-x.svg'
import telegramIcon from './assets/telegram.svg'
import discordIcon from './assets/discord.svg'
import './App.css'

function App() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    })
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section with Black Background */}
      <div className="bg-black relative">
        {/* Noise texture overlay */}
        <div className="noise-overlay absolute inset-0 pointer-events-none"></div>

        <div className="relative z-10">
          {/* Navbar */}
          <nav className="flex justify-between items-center px-4 md:px-8 py-4 md:py-6">
            {/* Logo */}
            <div className="flex items-center">
              <img src={appLogo} alt="App Logo" className="h-8 md:h-12" />
            </div>

            {/* Store Buttons */}
            <div className="flex gap-2 md:gap-4">
              <button
                disabled
                className="px-3 py-1.5 md:px-6 md:py-2 bg-white text-black rounded-lg opacity-50 cursor-not-allowed font-bold text-xs md:text-base"
              >
                Google Play
              </button>
              <button
                disabled
                className="px-3 py-1.5 md:px-6 md:py-2 bg-white text-black rounded-lg opacity-50 cursor-not-allowed font-bold text-xs md:text-base"
              >
                App Store
              </button>
            </div>
          </nav>

          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 mt-10 md:mt-20 px-4 md:px-8 pb-10 md:pb-20">
            {/* Left Side - Text and Buttons */}
            <div className="flex flex-col lg:w-1/2 items-center">
              {/* Hero Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white text-center mb-4 leading-tight">
                Make your crypto <br /> transactions easier.
              </h1>

              {/* Subtext with token logos */}
              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-6 md:mb-8">
                <p className="text-white/80 text-sm md:text-lg">Built to support your Solana token</p>
                <img src={bonkLogo} alt="Bonk" className="w-6 h-6 md:w-8 md:h-8 rounded-full" />
                <img src={usdcLogo} alt="USDC" className="w-6 h-6 md:w-8 md:h-8 rounded-full" />
                <img src={stepLogo} alt="Step Finance" className="w-6 h-6 md:w-8 md:h-8 rounded-full" />
                <img src={magicedenLogo} alt="Magic Eden" className="w-6 h-6 md:w-8 md:h-8 rounded-full" />
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
                <button
                  onClick={scrollToBottom}
                  className="px-6 py-3 md:px-10 md:py-4 bg-[#3d3d3d] text-white rounded-full text-base md:text-lg font-semibold hover:bg-[#2d2d2d] transition-colors"
                >
                  Get started
                </button>
                <button
                  className="px-6 py-3 md:px-10 md:py-4 border-2 border-white/30 text-white rounded-full text-base md:text-lg font-semibold hover:border-white/50 transition-colors"
                >
                  Watch video
                </button>
              </div>
            </div>

            {/* Right Side - UI Design Images */}
            <div className="lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
              <div className="relative flex items-center scale-75 sm:scale-90 md:scale-100">
                {/* Main Phone Image - Left side, on top */}
                <div className="relative z-10">
                  <img
                    src={zeroUiDesign}
                    alt="Zero UI Design"
                    className="w-64 md:w-80 object-contain rounded-3xl"
                  />
                </div>

                {/* Success Phone - Right side, slightly behind */}
                <div className="relative z-0 -ml-8 md:-ml-12">
                  <img
                    src={mobileSuccess}
                    alt="Mobile Success"
                    className="w-48 md:w-64 object-contain rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section with #e9e9e9 Background */}
      <div className="min-h-screen flex items-center justify-center bg-[#e9e9e9] relative py-12 md:py-20 px-4 md:px-8">
        <div className="noise-overlay absolute inset-0 pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl w-full">
          {/* Magical Payment Link Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-16">
            {/* Left Side - Image */}
            <div className="lg:w-1/2 relative flex items-center justify-center">
              {/* Submit Transaction Image */}
              <div className="relative">
                <img
                  src={submitTransaction}
                  alt="Submit Transaction"
                  className="w-64 md:w-80 object-contain rounded-3xl shadow-2xl"
                />
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="lg:w-1/2 space-y-4 md:space-y-6 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-black leading-tight">
                Magical payment link
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-black/70">
                Send stablecoin with just a link using your favorite messaging app
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* JotForm Section */}
      <div className="bg-black py-12 md:py-20 px-4 md:px-8 relative">
        <div className="noise-overlay absolute inset-0 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <iframe
            id="JotFormIFrame-260158004037043"
            title="Form"
            onLoad={() => window.parent.scrollTo(0,0)}
            allowTransparency={true}
            allow="geolocation; microphone; camera; fullscreen; payment"
            src="https://form.jotform.com/260158004037043"
            frameBorder="0"
            style={{ minWidth: '100%', maxWidth: '100%', height: '539px', border: 'none' }}
            scrolling="no"
          >
          </iframe>
        </div>
      </div>

      {/* Next Section */}
      <div className="min-h-screen flex items-center justify-center relative py-12 md:py-20 px-4 md:px-8" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="noise-overlay absolute inset-0 pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl w-full text-center">
          {/* Talk to the team heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-8 md:mb-12">
            Talk to the team
          </h2>

          {/* Social Icons */}
          <div className="flex justify-center items-center gap-4 md:gap-8">
            {/* Twitter/X */}
            <a href="https://twitter.com/blockchain_josh" target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors shadow-lg">
              <img src={twitterIcon} alt="X" className="w-6 h-6 md:w-8 md:h-8" />
            </a>
            {/* Telegram */}
            <a href="https://t.me/joshdotlink" target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors shadow-lg">
              <img src={telegramIcon} alt="Telegram" className="w-6 h-6 md:w-8 md:h-8" />
            </a>
            {/* Discord */}
            <a href="https://discord.com/users/blockchain_josh" target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors shadow-lg">
              <img src={discordIcon} alt="Discord" className="w-6 h-6 md:w-8 md:h-8" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-black py-8 md:py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0">
          {/* Logo on the left */}
          <div>
            <img src={appLogo} alt="App Logo" className="h-10 md:h-16" />
          </div>

          {/* Zero Leopard on the right */}
          <div>
            <img src={zeroLeopard} alt="Zero Leopard" className="h-16 md:h-24 object-contain" />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
