import { Shield, Zap, Globe, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import HeroBanner from '../components/HeroBanner'

const features = [
  {
    icon: Zap,
    title: 'Iibsi Degdeg ah',
    desc: 'Data-gaaga hel 5 daqiiqo gudahood, 24/7 adeeg',
  },
  {
    icon: Shield,
    title: 'Ammmaan Buuxda',
    desc: 'Lacag-bixintaada waxaa ilaalinaya nidaam ammaan ah',
  },
  {
    icon: Globe,
    title: 'Shirkado Dhan',
    desc: 'Hormuud, Telesom, Ethio Telecom, Safaricom iyo kuwo kale',
  },
  {
    icon: Users,
    title: 'Taageero 24/7',
    desc: 'Koox taageero oo diyaar ah markasta oo aad u baahato',
  },
]

export default function Home() {
  return (
    <div>
      <HeroBanner />

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Sababta 7DataWin loo doorto
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center hover:border-emerald-500/50 transition"
            >
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <f.icon className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Courses CTA */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <Link
            to="/courses"
            className="group block rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-gray-900/70 p-10 text-left shadow-xl shadow-emerald-500/10 transition hover:-translate-y-1"
          >
            <div className="inline-flex items-center gap-3 mb-4 text-emerald-300">
              <span className="rounded-full bg-emerald-500/10 p-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 4L20 8L12 12L4 8L12 4Z" fill="currentColor"/><path d="M12 12L20 16L12 20L4 16L12 12Z" fill="currentColor"/></svg>
              </span>
              <span className="text-sm uppercase tracking-[0.3em] font-semibold">Koorsooyin AI</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white mb-3">Hel Koorsooyin AI Bilaash ah</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Macaamiisha data-ga naga iibsada waxay helayaan koorsooyin AI bilaash ah iyo casharro muuqaal ah oo ay ku baran karaan chatbot, automation, iyo sawir AI.
            </p>
            <div className="inline-flex items-center gap-2 text-emerald-400 font-semibold">
              <span>Faahfaahinta gal</span>
              <span className="transform transition group-hover:translate-x-1">→</span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}
