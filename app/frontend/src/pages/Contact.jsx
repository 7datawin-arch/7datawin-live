import { Phone, Mail, MapPin, MessageCircle, Send, Sparkles, User, Brain } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  // Support chatbot state
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'assistant',
      text: 'Salaan sare sxb! Ku soo dhawaow xarunta taageerada ee **7DataWin** 🤖. Waxaan ahay kaaliyahaaga AI.\n\nWaxaad igala sheekaysan kartaa wixii ku saabsan xirmooyinka data-da, koorsooyinka AI, iyo buugaagta. \n\n*Haddii aad u baahan tahay dalab ama caawimaad manual ah, fadlan guji badhanka weyn ee WhatsApp-ka ee bidixda ku yaal!*'
    }
  ])
  const [chatInput, setChatInput] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  // Direct suggestion buttons
  const quickQuestions = [
    '💬 Sida loo iibsado Data-da?',
    '📚 Koorsooyinka ma bilaash baa?',
    '📞 Maxay tahay lambarkiina WhatsApp-ka?'
  ]

  // Gemini API Key (from environment variable)
  const defaultApiKey = import.meta.env.VITE_GEMINI_API_KEY || ''

  const callGeminiAPI = async (userMessage, historyList = []) => {
    const systemPrompt = `Magacaagu waa Support Bot. Waxaad tahay kaaliyaha rasmiga ah ee shabakadda 7DataWin. Ka caawi isticmaalayaasha wixii su'aalo ah oo ku saabsan iibsashada data-da, koorsooyinka AI, iyo buugaagta. U hadal si aad u fudud, saaxiibtinimo leh oo af Soomaali wacan ah. Markasta oo ay u baahdaan caawinaad manual ah, ama ay rabaan inay iibsadaan data/koorso, si toos ah ugu sheeg inay gujiyaan badhanka WhatsApp-ka ee Kenya (+254 799 636 342) ama link-ga weyn ee bidixda ku yaal. Had iyo jeer u sheeg lambarka WhatsApp-ka oo ah 0799636342.`
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${defaultApiKey}`
    
    const contents = historyList
      .filter(m => m.id !== 'welcome')
      .map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }]
      }))
    
    contents.push({
      role: 'user',
      parts: [{ text: userMessage }]
    })

    const body = {
      contents: contents,
      systemInstruction: {
        parts: [{ text: systemPrompt }]
      },
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 500
      }
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    if (!response.ok) {
      throw new Error('Gemini API call failed')
    }

    const data = await response.json()
    return data.candidates?.[0]?.content?.parts?.[0]?.text || 'Jawaab kama helin AI-ga.'
  }

  const getSimulatedReply = (userMsg) => {
    const msg = userMsg.toLowerCase()
    if (msg.includes('data') || msg.includes('iibso')) {
      return `Haa sxb! Si aad u iibsato data, guji bogga **Iibso Data** ee menu-ka sare ku yaal, dooro wadankaaga iyo xirmada aad rabto. Wixii caawinaad toos ah ama lacag-bixin ah, fadlan nagala soo xiriir WhatsApp-ka Kenya: **+254 799 636342** (Guji badhanka weyn ee bidixda ku yaal) 📱.`
    }
    if (msg.includes('koorso') || msg.includes('bilaash')) {
      return `Haa sxb! Koorsooyinkeena AI oo dhan waa bilaash macaamiisha naga iibsata data-da. Waxaad ka baran kartaa ChatGPT, Canva, Web Development iyo kuwo kale. Tag bogga **Koorsooyinka** si aad u bilowdo barashada hadda! 🎓`
    }
    return `Waad ku mahadsan tahay su'aashaada sxb! Si aan si toos ah kuugu caawino ama aad dalab manual ah u sameyso, fadlan nagala soo xiriir WhatsApp-ka rasmiga ah ee Kenya: **+254 799 636342** (ama ku dhufo badhanka weyn ee bidixda ku yaal) 💬.`
  }

  const handleSendQuestion = async (questionText) => {
    if (isGenerating || !questionText.trim()) return
    const userMsg = questionText.trim()
    
    const userMsgId = Date.now().toString()
    const updatedMessages = [...messages, { id: userMsgId, sender: 'user', text: userMsg }]
    setMessages(updatedMessages)
    setIsGenerating(true)
    setChatInput('')

    try {
      const aiReply = await callGeminiAPI(userMsg, updatedMessages)
      setMessages(prev => [...prev, { id: Date.now().toString(), sender: 'assistant', text: aiReply }])
    } catch (err) {
      const fallbackReply = getSimulatedReply(userMsg)
      setMessages(prev => [...prev, { id: Date.now().toString(), sender: 'assistant', text: fallbackReply }])
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 pt-12 pb-16">
      <h1 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-2">
        Nagala Soo Xiriir
      </h1>
      <p className="text-gray-400 text-center mb-10 text-sm md:text-base">
        Su'aalo ama caawinaad degdeg ah baad u baahan tahay? Kooxdayada iyo kaaliyaha AI ayaa diyaar kuu ah.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Direct Contact & Big WhatsApp Button */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Big WhatsApp Banner Card */}
          <a
            href="https://wa.me/254799636342"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-4 bg-emerald-500 hover:bg-emerald-600 text-white p-8 rounded-3xl text-center transition-all duration-300 shadow-xl shadow-emerald-500/10 hover:scale-[1.01] group"
          >
            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition duration-300">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest font-black text-emerald-100">Direct Support</span>
              <h3 className="font-black text-lg md:text-xl text-white">Ku Caawi WhatsApp</h3>
              <p className="text-xs text-emerald-100/90 leading-relaxed px-4">
                Guji halkan si aad toos ugu dirto dalabkaaga ama ula hadasho maamulaha Kenya.
              </p>
            </div>
            <span className="font-mono text-xs font-black tracking-wider bg-emerald-700/50 px-4 py-1.5 rounded-full">
              +254 799 636342
            </span>
          </a>

          {/* Standard Contact Info Cards */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-3xl p-6 space-y-5">
            <h4 className="text-white font-bold text-sm border-b border-gray-800 pb-2.5">Xogta Xiriirka</h4>
            
            <div className="flex items-start gap-4 text-xs md:text-sm">
              <Phone className="w-4 h-4 text-emerald-400 mt-1" />
              <div>
                <h5 className="text-gray-400 font-semibold mb-0.5">Telefoonka</h5>
                <a href="tel:+254799636342" className="text-white font-bold hover:underline">+254 799 636 342</a>
              </div>
            </div>

            <div className="flex items-start gap-4 text-xs md:text-sm">
              <Mail className="w-4 h-4 text-emerald-400 mt-1" />
              <div>
                <h5 className="text-gray-400 font-semibold mb-0.5">Email</h5>
                <a href="mailto:support@7datawin.com" className="text-white font-bold hover:underline">support@7datawin.com</a>
              </div>
            </div>

            <div className="flex items-start gap-4 text-xs md:text-sm">
              <MapPin className="w-4 h-4 text-emerald-400 mt-1" />
              <div>
                <h5 className="text-gray-400 font-semibold mb-0.5">Goobta</h5>
                <p className="text-white font-bold">Nairobi, Kenya / East Africa</p>
              </div>
            </div>

            <div className="flex items-start gap-4 text-xs md:text-sm">
              <span className="text-blue-400 font-bold text-lg mt-0.5">f</span>
              <div>
                <h5 className="text-gray-400 font-semibold mb-0.5">Facebook</h5>
                <a href="https://www.facebook.com/share/p/17wzf4ep7N/" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:underline">7DataWin Facebook</a>
              </div>
            </div>

            <div className="flex items-start gap-4 text-xs md:text-sm">
              <span className="text-pink-400 font-bold text-lg mt-0.5">♪</span>
              <div>
                <h5 className="text-gray-400 font-semibold mb-0.5">TikTok</h5>
                <a href="https://www.tiktok.com/@7data.win" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:underline">@7data.win</a>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: AI Support Chatbot */}
        <div className="lg:col-span-7 bg-gray-900/25 border border-gray-800 rounded-3xl p-5 flex flex-col h-[520px] shadow-xl relative overflow-hidden">
          
          {/* Chatbot Header */}
          <div className="flex items-center gap-2.5 border-b border-gray-800 pb-3.5 mb-3.5">
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
              <Brain className="w-4 h-4 text-emerald-400 animate-pulse" />
            </div>
            <div>
              <h4 className="text-white font-bold text-xs md:text-sm flex items-center gap-1.5">
                7DataWin Support Assistant
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
              </h4>
              <span className="text-[10px] text-gray-500">AI Bot (Online)</span>
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto space-y-3.5 pr-2 scrollbar-thin scrollbar-thumb-gray-800">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 max-w-[85%] ${
                  msg.sender === 'user' ? 'ml-auto flex-row-reverse' : ''
                }`}
              >
                {/* Avatar */}
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs flex-shrink-0 ${
                  msg.sender === 'user' ? 'bg-emerald-500 text-white' : 'bg-gray-800 text-emerald-400'
                }`}>
                  {msg.sender === 'user' ? <User className="w-3.5 h-3.5" /> : '🤖'}
                </div>

                {/* Text Message Card */}
                <div className={`rounded-2xl px-4 py-2.5 text-xs md:text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-emerald-500 text-white rounded-tr-none'
                    : 'bg-gray-800/80 text-gray-200 rounded-tl-none'
                }`}>
                  <p className="whitespace-pre-line">{msg.text}</p>
                </div>
              </div>
            ))}

            {isGenerating && (
              <div className="flex gap-2.5 max-w-[85%]">
                <div className="w-7 h-7 rounded-full bg-gray-800 text-emerald-400 flex items-center justify-center text-xs">
                  🤖
                </div>
                <div className="bg-gray-800/80 text-gray-400 rounded-2xl rounded-tl-none px-4 py-2.5 text-xs flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce delay-100"></span>
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce delay-200"></span>
                </div>
              </div>
            )}
          </div>

          {/* Quick Suggestions Buttons */}
          <div className="mt-4 pt-3 border-t border-gray-800/80">
            <p className="text-[10px] text-gray-500 font-bold mb-2 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-emerald-450" /> Su'aalaha caawinaada degdega ah:
            </p>
            <div className="flex gap-1.5 flex-wrap">
              {quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSendQuestion(q)}
                  className="bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-300 px-3 py-1.5 rounded-xl text-[10px] md:text-xs transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Message Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSendQuestion(chatInput)
            }}
            className="flex gap-2 mt-4"
          >
            <input
              type="text"
              placeholder="Qor su'aashaada halkan..."
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              className="flex-1 bg-gray-850 border border-gray-700 rounded-xl px-4 py-3 text-xs md:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"
              disabled={isGenerating}
            />
            <button
              type="submit"
              disabled={!chatInput.trim() || isGenerating}
              className="bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-800 disabled:text-gray-600 text-white w-12 h-12 rounded-xl flex items-center justify-center transition"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>

      </div>
    </div>
  )
}
