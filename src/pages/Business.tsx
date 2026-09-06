import { useState } from 'react'
import { Link } from 'react-router-dom'
import usdcLogo from '../assets/usdc.png'
import solanaLogo from '../assets/solana.png'

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    title: 'Accept Stablecoins',
    desc: 'Receive USDC, USDT, and SOL directly to your business wallet with zero exchange rate risk.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    ),
    title: 'Instant Settlement',
    desc: 'Transactions settle in under a second. No more waiting days for bank transfers to clear.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
    ),
    title: 'Near-zero Fees',
    desc: 'Fraction of a cent per transaction. No hidden fees, no monthly minimums, no chargebacks.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    title: 'Global Reach',
    desc: 'Accept payments from anywhere in the world. No borders, no currency conversion headaches.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    ),
    title: 'Self-custodial',
    desc: 'You hold the keys. Funds settle directly to your wallet — no intermediary, no counterparty risk.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>
    ),
    title: 'Real-time Analytics',
    desc: 'Dashboard with live transaction tracking, revenue charts, and settlement history.',
  },
]

const steps = [
  { num: '01', title: 'Create your store', desc: 'Set up your business profile, add products or services, and customize your checkout.' },
  { num: '02', title: 'Connect your wallet', desc: 'Link your Solana wallet as the receiving address. Supported: Phantom, Solflare, and more.' },
  { num: '03', title: 'Share your payment link', desc: 'Generate a QR code or payment link. Customers pay with any Solana wallet.' },
  { num: '04', title: 'Get paid instantly', desc: 'Funds arrive in your wallet in seconds. Settle to fiat whenever you need.' },
]

export default function Business() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  const faqs = [
    { q: 'What is Zero Commerce?', a: 'Zero Commerce lets small businesses accept stablecoin payments on Solana — instant, near-zero fees, no chargebacks. You keep full custody of your funds.' },
    { q: 'Which stablecoins do you support?', a: 'USDC, USDT, and native SOL. More tokens coming soon based on merchant demand.' },
    { q: 'How much does it cost?', a: 'Zero platform fees. You only pay the Solana network fee (~$0.00025 per transaction). No monthly subscriptions, no hidden costs.' },
    { q: 'Do I need to be technical?', a: 'Not at all. Set up takes under 5 minutes. Create a product, connect your wallet, and share a payment link.' },
    { q: 'Can I convert to fiat?', a: 'Yes. You can use any on-ramp/off-ramp service like MoonPay or Jupiter to convert stablecoins to your local currency.' },
    { q: 'Is it safe?', a: 'Transactions are secured by the Solana blockchain. Funds go directly to your wallet — we never hold your private keys or assets.' },
  ]

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,#eef4f3_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f4f4f5_1px,transparent_1px),linear-gradient(to_bottom,#f4f4f5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)]" />
        <div className="relative max-w-7xl mx-auto px-6 pt-28 md:pt-36 pb-16 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-semibold text-gray-600 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Now in beta — sign up free
          </div>
          <h1 className="font-hero text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter text-gray-900 mb-6">
            Accept <span className="text-gray-300">crypto.</span>{' '}
            <span className="block sm:inline">Grow <span className="text-gray-300">faster.</span></span>
          </h1>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl leading-relaxed mb-10">
            Zero Commerce lets small businesses accept stablecoin payments on Solana — instant settlement, near-zero fees, and full self-custody.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://business.zeromobile.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gray-900 text-white rounded-full text-sm font-bold hover:bg-black transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              Launch App
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
            <Link
              to="/"
              className="px-8 py-4 flex items-center gap-2 text-sm font-bold rounded-full transition-all border-2 border-gray-300 text-gray-700 hover:border-gray-400"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>
      <div className="flex items-center justify-center gap-6 py-10 border-b border-gray-100 bg-white">
        <div className="flex items-center gap-3">
          <img src={usdcLogo} alt="USDC" className="w-7 h-7" />
          <span className="text-sm text-gray-500">USDC</span>
        </div>
        <div className="flex items-center gap-3">
          <img src={solanaLogo} alt="SOL" className="w-7 h-7" />
          <span className="text-sm text-gray-500">SOL</span>
        </div>
        <span className="text-gray-400 text-sm">+ more</span>
      </div>

      {/* Features Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-hero text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.95] text-gray-900 mb-4">
            Everything you need to<br />
            <span className="text-gray-300">get paid in crypto</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            No technical skills required. Set up in minutes and start accepting payments from anywhere in the world.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="group p-8 rounded-3xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-700 mb-5 group-hover:scale-110 transition-transform duration-300">
                {f.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-hero text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.95] text-gray-900 mb-4">
              Get started in<br />
              <span className="text-gray-300">4 simple steps</span>
            </h2>
            <p className="text-gray-500 text-lg">From zero to accepting payments in under 5 minutes.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="relative">
                <div className="text-6xl md:text-7xl font-hero font-black text-gray-200 leading-none mb-4">{s.num}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-16 w-[calc(100%-4rem)] h-px bg-gray-100" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Trust Bar */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: '$0', label: 'Platform fees' },
            { num: '<1s', label: 'Settlement time' },
            { num: '24/7', label: 'Payment processing' },
            { num: '100%', label: 'Self-custodial' },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-4xl md:text-5xl font-hero font-black text-gray-900 mb-1">{s.num}</div>
              <div className="text-gray-500 text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center bg-gray-50 rounded-4xl p-12 md:p-20 border border-gray-100">
          <h2 className="font-hero text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.95] text-gray-900 mb-6">
            Ready to accept<br />
            stablecoin payments?
          </h2>
          <p className="text-gray-500 text-lg max-w-lg mx-auto mb-10">
            Join merchants already using Zero Commerce to grow their business with instant, borderless payments.
          </p>
          <a
            href="https://business.zeromobile.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gray-900 text-white rounded-full text-lg font-bold hover:bg-black transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Launch App
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-hero text-4xl md:text-5xl tracking-tighter leading-[0.95] text-gray-900 text-center mb-12">
            Frequently asked questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-gray-900 hover:bg-gray-100 transition-colors"
                >
                  {faq.q}
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${activeFaq === i ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeFaq === i && (
                  <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
