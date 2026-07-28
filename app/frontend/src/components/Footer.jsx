import { Smartphone, Mail, MapPin, Send } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 mt-16 pt-12 pb-0">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 pb-10">
        {/* About */}
        <div>
          <div className="flex items-center gap-2 text-white font-bold text-lg mb-3">
            <Smartphone className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-400">7</span>DataWin
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Adiga oo ku raaxaysanaya internet-ka lacag jaban, 7DataWin waa meesha
            ugufiican ee aad data ka iibsato. Shirkadaha waaweyn ee Geeska Afrika oo dhan.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Xiriir</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <a
                href="mailto:7datawin@gmail.com"
                className="flex items-center gap-3 hover:text-emerald-400 transition-colors group"
              >
                <div className="w-9 h-9 bg-emerald-500/10 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                  <Mail className="w-4 h-4 text-emerald-400" />
                </div>
                <span>7datawin@gmail.com</span>
              </a>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-9 h-9 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                <MapPin className="w-4 h-4 text-emerald-400" />
              </div>
              <span>Geeska Afrika</span>
            </li>
            <li>
              <a
                href="https://www.facebook.com/share/p/17wzf4ep7N/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-emerald-400 transition-colors group"
              >
                <div className="w-9 h-9 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <span className="text-blue-400 text-lg font-bold">f</span>
                </div>
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@7data.win"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-emerald-400 transition-colors group"
              >
                <div className="w-9 h-9 bg-pink-500/10 rounded-lg flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                  <span className="text-pink-400 text-lg font-bold">♪</span>
                </div>
                <span>TikTok</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-4">La Soco</h3>
          <p className="text-gray-400 text-sm mb-4 leading-relaxed">
            Nagala soo xiriir email-ka ama facebook-ga. Waxaan diyaar u nahay
            su'aalahaaga iyo talooyinkaaga.
          </p>
          <a
            href="mailto:7datawin@gmail.com"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-400/30"
          >
            <Send className="w-4 h-4" />
            Nagu soo dir
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800/60">
        <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Social Icons Row */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:7datawin@gmail.com"
              className="w-9 h-9 bg-gray-800 hover:bg-emerald-500/20 rounded-lg flex items-center justify-center transition-all duration-300 group"
              title="Email"
            >
              <Mail className="w-4 h-4 text-gray-500 group-hover:text-emerald-400 transition-colors" />
            </a>
            <a
              href="https://www.facebook.com/share/p/17wzf4ep7N/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-gray-800 hover:bg-blue-500/20 rounded-lg flex items-center justify-center transition-all duration-300 group"
              title="Facebook"
            >
              <span className="text-gray-500 group-hover:text-blue-400 font-bold text-sm transition-colors">f</span>
            </a>
            <a
              href="https://www.tiktok.com/@7data.win"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-gray-800 hover:bg-pink-500/20 rounded-lg flex items-center justify-center transition-all duration-300 group"
              title="TikTok"
            >
              <span className="text-gray-500 group-hover:text-pink-400 font-bold text-xs transition-colors">♪</span>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-600 text-xs text-center">
            &copy; {new Date().getFullYear()} 7DataWin. Xuquuqda dhammaan waa la ilaaliyaa.
          </p>
        </div>
      </div>
    </footer>
  )
}
