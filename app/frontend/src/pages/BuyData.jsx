import { useState, useEffect } from 'react'
import { Smartphone, Package, CheckCircle, CreditCard, AlertCircle, ChevronDown, ChevronRight, X } from 'lucide-react'

const operatorIcons = {
  'Hormuud': '📡',
  'Telesom': '📞',
  'Somnet': '🌐',
  'Amtel': '📶',
  'Golis': '🏔️',
  'Ethio Telecom': '🇪🇹',
  'Safaricom Ethiopia': '🟢',
  'Safaricom': '🟢',
  'Airtel Kenya': '🔴',
  'Telkom Kenya': '🔵',
  'Djibouti Telecom': '🇩🇯',
  'SOMTEL Djibouti': '📞',
  'Evatis': '🌍',
}

// Dynamic Merchant Payment Details & Dial codes for each operator
const operatorPayments = {
  'Hormuud': { method: 'EVC Plus', number: '770700', dialCode: '*712*617770700*Dollar# ama u dir Merchant ID: 770700', merchantId: '770700' },
  'Telesom': { method: 'ZAAD Service', number: '770700', dialCode: '*223*637770700*Dollar# ama u dir Merchant ID: 770700', merchantId: '770700' },
  'Somnet': { method: 'EVC Plus', number: '0617770700', dialCode: '*711*617770700*Dollar#', merchantId: 'N/A' },
  'Amtel': { method: 'Amtel Pay', number: '770700', dialCode: '*712*617770700*Dollar#', merchantId: '770700' },
  'Golis': { method: 'Sahal Service', number: '770700', dialCode: '*812*907770700*Dollar# ama u dir Merchant: 770700', merchantId: '770700' },
  'Ethio Telecom': { method: 'Telebirr', number: '770700', dialCode: '*847# (Geli Merchant ID: 770700)', merchantId: '770700' },
  'Safaricom Ethiopia': { method: 'M-PESA', number: '770700', dialCode: '*733# (Geli Merchant: 770700)', merchantId: '770700' },
  'Safaricom': { method: 'M-PESA Kenya', number: 'Till: 770700', dialCode: 'Lipa Na M-PESA -> Buy Goods Till: 770700', merchantId: 'Till: 770700' },
  'Airtel Kenya': { method: 'Airtel Money', number: 'Paybill: 770700', dialCode: 'Airtel Paybill: 770700', merchantId: '770700' },
  'Telkom Kenya': { method: 'T-Kash', number: '770700', dialCode: 'T-Kash Merchant ID: 770700', merchantId: '770700' },
  'Djibouti Telecom': { method: 'D-Money', number: '770700', dialCode: 'D-Money App (Geli Account: 770700)', merchantId: '770700' },
  'SOMTEL Djibouti': { method: 'eDahab', number: '770700', dialCode: '*101*77127700*DJF# ama Merchant: 770700', merchantId: '770700' },
  'Evatis': { method: 'Evatis Pay', number: '770700', dialCode: 'Evatis Wallet: 770700', merchantId: '770700' }
}

const countryData = {
  somalia: {
    name: 'Soomaaliya',
    flag: '🇸🇴',
    operators: ['Hormuud', 'Telesom', 'Somnet', 'Amtel', 'Golis'],
    packs: {
      Hormuud: [
        { id: 'h-bul1', name: 'Bulaal Data', price: '$ 0.42', features: ['✦ Unlimited Internet', '✦ Voice & SMS', '⏱ 36 Saacadood'], type: 'Data & Voice' },
        { id: 'h-bul2', name: 'Bulaal Data', price: '$ 0.21', features: ['✦ Unlimited Internet', '✦ Voice & SMS', '⏱ 10 Saacadood'], type: 'Data & Voice' },
        { id: 'h-mad1', name: 'Madaal 2GB', price: '$ 1.00', features: ['✦ High Speed Internet', '✦ Voice & SMS', '⏱ 7 Maalmood'], type: 'Data & Voice' },
        { id: 'h-mad2', name: 'Madaal 5GB', price: '$ 3.50', features: ['✦ High Speed Internet', '✦ Voice & SMS', '⏱ 1 Bil'], type: 'Data & Voice' },
        { id: 'h-data1', name: 'Internet Only 5GB', price: '$ 2.00', features: ['✦ High Speed Data', '✦ No Free Calls', '⏱ 7 Maalmood'], type: 'Data' },
        { id: 'h-data2', name: 'Internet Only 15GB', price: '$ 6.00', features: ['✦ High Speed Data', '✦ No Free Calls', '⏱ 30 Maalmood'], type: 'Data' },
        { id: 'h-voc1', name: 'Voice Minutes 200', price: '$ 1.50', features: ['✦ 200 Local Minutes', '✦ 100 Local SMS', '⏱ 7 Maalmood'], type: 'Voice' },
        { id: 'h-voc2', name: 'Voice Unlimited', price: '$ 4.50', features: ['✦ Unlimited Calls', '✦ Unlimited SMS', '⏱ 1 Bil'], type: 'Voice' },
        { id: 'h-exp1', name: '10GB No Expire', price: '$ 10.00', features: ['✦ High Speed Data', '✦ No Expiry Date', '⏱ Unlimited'], type: 'No Expire' },
        { id: 'h-exp2', name: '25GB No Expire', price: '$ 22.00', features: ['✦ High Speed Data', '✦ No Expiry Date', '⏱ Unlimited'], type: 'No Expire' }
      ],
      Telesom: [
        { id: 't-an1', name: 'Aniga 1GB', price: '$ 0.50', features: ['✦ High Speed Internet', '⏱ 24 Saacadood'], type: 'Data' },
        { id: 't-an2', name: 'Aniga 5GB', price: '$ 2.00', features: ['✦ High Speed Internet', '⏱ 7 Maalmood'], type: 'Data' },
        { id: 't-an3', name: 'Zaad 10GB', price: '$ 4.00', features: ['✦ High Speed Internet', '⏱ 1 Bil'], type: 'Data' },
        { id: 't-voc1', name: 'Telesom Voice 150 Min', price: '$ 1.50', features: ['✦ 150 Local Minutes', '⏱ 7 Maalmood'], type: 'Voice' },
        { id: 't-com1', name: 'Telesom Combo 2GB', price: '$ 1.50', features: ['✦ 2GB Data', '✦ 50 Min Calls', '⏱ 7 Maalmood'], type: 'Data & Voice' },
        { id: 't-exp1', name: 'Telesom 15GB No Expire', price: '$ 10.00', features: ['✦ 15GB High Speed', '✦ No Expiration Date'], type: 'No Expire' }
      ],
      Somnet: [
        { id: 'sn-1', name: 'Somnet 2GB', price: '$ 0.60', features: ['✦ High Speed Internet', '⏱ 24 Saacadood'], type: 'Data' },
        { id: 'sn-2', name: 'Somnet 5GB', price: '$ 2.00', features: ['✦ High Speed Internet', '⏱ 7 Maalmood'], type: 'Data' },
        { id: 'sn-3', name: 'Somnet 15GB', price: '$ 5.00', features: ['✦ High Speed Internet', '⏱ 1 Bil'], type: 'Data' },
        { id: 'sn-voc1', name: 'Somnet Voice 300 Min', price: '$ 2.50', features: ['✦ 300 Local Minutes', '⏱ 1 Bil'], type: 'Voice' },
        { id: 'sn-com1', name: 'Somnet Combo 10GB', price: '$ 6.00', features: ['✦ 10GB Data', '✦ 200 Min Calls', '⏱ 1 Bil'], type: 'Data & Voice' },
        { id: 'sn-exp1', name: 'Somnet 5GB No Expire', price: '$ 4.50', features: ['✦ 5GB Data', '✦ No Expiration Date'], type: 'No Expire' }
      ],
      Amtel: [
        { id: 'a-bul1', name: 'Bulaal Data', price: '$ 0.42', features: ['✦ Unlimited Internet', '✦ Voice & SMS', '⏱ 36 Saacadood'], type: 'Data & Voice' },
        { id: 'a-bul2', name: 'Bulaal Data', price: '$ 0.21', features: ['✦ Unlimited Internet', '✦ Voice & SMS', '⏱ 10 Saacadood'], type: 'Data & Voice' },
        { id: 'a-voc1', name: 'Amtel Voice 100 Min', price: '$ 1.00', features: ['✦ 100 Local Minutes', '⏱ 7 Maalmood'], type: 'Voice' },
        { id: 'a-exp1', name: 'Amtel 10GB No Expire', price: '$ 9.00', features: ['✦ 10GB Data', '✦ No Expiration Date'], type: 'No Expire' }
      ],
      Golis: [
        { id: 'g-1', name: 'Golis 1GB', price: '$ 0.50', features: ['✦ High Speed Internet', '⏱ 24 Saacadood'], type: 'Data' },
        { id: 'g-2', name: 'Golis 5GB', price: '$ 2.50', features: ['✦ High Speed Internet', '⏱ 7 Maalmood'], type: 'Data' },
        { id: 'g-voc1', name: 'Golis Voice 200 Min', price: '$ 2.00', features: ['✦ 200 Local Minutes', '⏱ 7 Maalmood'], type: 'Voice' },
        { id: 'g-com1', name: 'Golis 5GB Combo', price: '$ 3.00', features: ['✦ 5GB Data + 100 Min', '⏱ 7 Maalmood'], type: 'Data & Voice' },
        { id: 'g-exp1', name: 'Golis No Expire 10GB', price: '$ 8.00', features: ['✦ 10GB Data', '✦ No Expiry'], type: 'No Expire' }
      ]
    },
    phonePlaceholder: 'e.g. 0612156441',
    phonePrefix: 'Soomaali (+252)',
  },
  ethiopia: {
    name: 'Itoobiya',
    flag: '🇪🇹',
    operators: ['Ethio Telecom', 'Safaricom Ethiopia'],
    packs: {
      'Ethio Telecom': [
        { id: 'et-1', name: 'Daily 500MB', price: '25 ETB', features: ['✦ High Speed Internet', '⏱ 24 Saacadood'], type: 'Data' },
        { id: 'et-2', name: 'Weekly 3GB', price: '100 ETB', features: ['✦ High Speed Internet', '⏱ 7 Maalmood'], type: 'Data' },
        { id: 'et-3', name: 'Monthly 10GB', price: '250 ETB', features: ['✦ High Speed Internet', '⏱ 1 Bil'], type: 'Data' },
        { id: 'et-voc1', name: 'Ethio Voice 200 Min', price: '50 ETB', features: ['✦ 200 Local Minutes', '⏱ 7 Maalmood'], type: 'Voice' },
        { id: 'et-com1', name: 'Ethio Combo 5GB + 100 Min', price: '150 ETB', features: ['✦ 5GB + 100 Min Calls', '⏱ 1 Bil'], type: 'Data & Voice' },
        { id: 'et-exp1', name: 'Ethio No Expire 20GB', price: '400 ETB', features: ['✦ 20GB Data', '✦ No Expiry'], type: 'No Expire' }
      ],
      'Safaricom Ethiopia': [
        { id: 'se-1', name: 'Daily 1GB', price: '50 ETB', features: ['✦ High Speed Internet', '⏱ 24 Saacadood'], type: 'Data' },
        { id: 'se-2', name: 'Weekly 5GB', price: '180 ETB', features: ['✦ High Speed Internet', '⏱ 7 Maalmood'], type: 'Data' },
        { id: 'se-voc1', name: 'Safaricom Voice 150 Min', price: '45 ETB', features: ['✦ 150 Local Minutes', '⏱ 7 Maalmood'], type: 'Voice' },
        { id: 'se-com1', name: 'Safaricom Combo 3GB + 50 Min', price: '120 ETB', features: ['✦ 3GB + 50 Min Calls', '⏱ 7 Maalmood'], type: 'Data & Voice' },
        { id: 'se-exp1', name: 'Safaricom No Expire 15GB', price: '300 ETB', features: ['✦ 15GB Data', '✦ No Expiry'], type: 'No Expire' }
      ]
    },
    phonePlaceholder: 'e.g. 0912345678',
    phonePrefix: 'Itoobiya (+251)',
  },
  kenya: {
    name: 'Kenya',
    flag: '🇰🇪',
    operators: ['Safaricom', 'Airtel Kenya', 'Telkom Kenya'],
    packs: {
      'Safaricom': [
        { id: 'k-sf1', name: 'Daily 1GB', price: '100 KES', features: ['✦ High Speed', '⏱ 24 Saacadood'], type: 'Data' },
        { id: 'k-sf2', name: 'Weekly 5GB', price: '300 KES', features: ['✦ High Speed', '⏱ 7 Maalmood'], type: 'Data' },
        { id: 'k-sf3', name: 'Monthly 10GB', price: '500 KES', features: ['✦ High Speed', '⏱ 1 Bil'], type: 'Data' },
        { id: 'k-sf-voc1', name: 'Safaricom Voice 200 Min', price: '150 KES', features: ['✦ 200 Local Minutes', '⏱ 7 Maalmood'], type: 'Voice' },
        { id: 'k-sf-com1', name: 'Safaricom Combo 2GB + 100 Min', price: '250 KES', features: ['✦ 2GB Data + 100 Min', '⏱ 7 Maalmood'], type: 'Data & Voice' },
        { id: 'k-sf-exp1', name: 'Safaricom No Expire 5GB', price: '350 KES', features: ['✦ 5GB Data', '✦ No Expiry Date'], type: 'No Expire' }
      ],
      'Airtel Kenya': [
        { id: 'k-ak1', name: 'Daily 1GB', price: '90 KES', features: ['✦ High Speed', '⏱ 24 Saacadood'], type: 'Data' },
        { id: 'k-ak2', name: 'Weekly 5GB', price: '280 KES', features: ['✦ High Speed', '⏱ 7 Maalmood'], type: 'Data' },
        { id: 'k-ak-voc1', name: 'Airtel Voice 150 Min', price: '100 KES', features: ['✦ 150 Local Minutes', '⏱ 7 Maalmood'], type: 'Voice' },
        { id: 'k-ak-com1', name: 'Airtel Combo 3GB + 100 Min', price: '200 KES', features: ['✦ 3GB Data + 100 Min', '⏱ 7 Maalmood'], type: 'Data & Voice' },
        { id: 'k-ak-exp1', name: 'Airtel No Expire 10GB', price: '500 KES', features: ['✦ 10GB Data', '✦ No Expiry Date'], type: 'No Expire' }
      ],
      'Telkom Kenya': [
        { id: 'k-tk1', name: 'Daily 1GB', price: '85 KES', features: ['✦ High Speed', '⏱ 24 Saacadood'], type: 'Data' },
        { id: 'k-tk-voc1', name: 'Telkom Voice 100 Min', price: '80 KES', features: ['✦ 100 Local Minutes', '⏱ 7 Maalmood'], type: 'Voice' },
        { id: 'k-tk-com1', name: 'Telkom Combo 2GB', price: '150 KES', features: ['✦ 2GB Combo minutes', '⏱ 7 Maalmood'], type: 'Data & Voice' }
      ]
    },
    phonePlaceholder: 'e.g. 0712345678',
    phonePrefix: 'Kenya (+254)',
  },
  djibouti: {
    name: 'Jabuuti',
    flag: '🇩🇯',
    operators: ['Djibouti Telecom', 'SOMTEL Djibouti', 'Evatis'],
    packs: {
      'Djibouti Telecom': [
        { id: 'dj-dt1', name: 'Daily 1GB', price: '10 DJF', features: ['✦ High Speed', '⏱ 24 Saacadood'], type: 'Data' },
        { id: 'dj-dt2', name: 'Weekly 5GB', price: '40 DJF', features: ['✦ High Speed', '⏱ 7 Maalmood'], type: 'Data' },
        { id: 'dj-dt-voc1', name: 'Djibouti Voice 100 Min', price: '30 DJF', features: ['✦ 100 Local Minutes', '⏱ 7 Maalmood'], type: 'Voice' },
        { id: 'dj-dt-com1', name: 'Djibouti Combo 3GB + 50 Min', price: '80 DJF', features: ['✦ 3GB + 50 Min Calls', '⏱ 7 Maalmood'], type: 'Data & Voice' },
        { id: 'dj-dt-exp1', name: 'Djibouti No Expire 10GB', price: '150 DJF', features: ['✦ 10GB Data', '✦ No Expiry'], type: 'No Expire' }
      ],
      'SOMTEL Djibouti': [
        { id: 'dj-sd1', name: 'Daily 1GB', price: '12 DJF', features: ['✦ High Speed', '⏱ 24 Saacadood'], type: 'Data' },
        { id: 'dj-sd2', name: 'Weekly 5GB', price: '50 DJF', features: ['✦ High Speed', '⏱ 7 Maalmood'], type: 'Data' },
        { id: 'dj-sd-voc1', name: 'Somtel Voice 100 Min', price: '25 DJF', features: ['✦ 100 Local Minutes', '⏱ 7 Maalmood'], type: 'Voice' },
        { id: 'dj-sd-com1', name: 'Somtel Combo 2GB', price: '60 DJF', features: ['✦ 2GB Data + minutes', '⏱ 7 Maalmood'], type: 'Data & Voice' }
      ],
      'Evatis': [
        { id: 'dj-ev1', name: 'Daily 1GB', price: '15 DJF', features: ['✦ High Speed', '⏱ 24 Saacadood'], type: 'Data' },
        { id: 'dj-ev-voc1', name: 'Evatis Voice 100 Min', price: '35 DJF', features: ['✦ 100 Local Minutes', '⏱ 7 Maalmood'], type: 'Voice' }
      ]
    },
    phonePlaceholder: 'e.g. 77123456',
    phonePrefix: 'Jabuuti (+253)',
  },
}

const countries = [
  { id: 'somalia', name: 'Soomaaliya', flag: '🇸🇴' },
  { id: 'ethiopia', name: 'Itoobiya', flag: '🇪🇹' },
  { id: 'kenya', name: 'Kenya', flag: '🇰🇪' },
  { id: 'djibouti', name: 'Jabuuti', flag: '🇩🇯' },
]

export default function BuyData() {
  const [country, setCountry] = useState('somalia')
  const [selectedOp, setSelectedOp] = useState('Hormuud') // Default operator
  const [filterType, setFilterType] = useState('All') // All, Maalinle, Isbuucle, Bile, No Expire
  
  // Checkout Modal states
  const [activePackForCheckout, setActivePackForCheckout] = useState(null) // selected pack object
  const [senderNumber, setSenderNumber] = useState('')
  const [receiverNumber, setReceiverNumber] = useState('')

  const [submitted, setSubmitted] = useState(false)

  const data = countryData[country]

  // Auto-switch operator when country changes
  useEffect(() => {
    setSelectedOp(data.operators[0] || '')
  }, [country, data])

  // Sync inputs to confirmation modal when checkout opens
  const handleOpenCheckout = (pack) => {
    setActivePackForCheckout(pack)
    setSenderNumber('')
    setReceiverNumber('')
  }

  const handleConfirmOrder = () => {
    if (!senderNumber || !receiverNumber) return
    setSubmitted(true)
    setActivePackForCheckout(null)
  }

  // Filter packs list based on filter tabs
  const getPacksList = () => {
    const rawPacks = data.packs[selectedOp] || []
    if (filterType === 'All') return rawPacks
    return rawPacks.filter(p => p.type === filterType)
  }

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto px-4 pt-20 text-center">
        <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4 animate-bounce" />
        <h2 className="text-2xl font-bold text-white mb-2">Codsigaaga waa la helay!</h2>
        <p className="text-gray-400 mb-6 text-sm">
          Fadlan ku shub lacagta xirmada accounts-ka hoose si dalabkaaga loogu soo shubo 5 daqiiqo gudahood.
        </p>
        
        {/* Receipt Details Card */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-5 mb-6 text-left text-xs md:text-sm space-y-3.5 shadow-xl">
          <div className="flex justify-between border-b border-gray-800/60 pb-2">
            <span className="text-gray-500">Wadanka:</span>
            <span className="text-white font-bold">{data.flag} {data.name}</span>
          </div>
          <div className="flex justify-between border-b border-gray-800/60 pb-2">
            <span className="text-gray-500">Lambar lacagta diraayo:</span>
            <span className="text-white font-mono font-bold">{senderNumber}</span>
          </div>
          <div className="flex justify-between border-b border-gray-800/60 pb-2">
            <span className="text-gray-500">Lambar xirmada helaayo:</span>
            <span className="text-white font-mono font-bold">{receiverNumber}</span>
          </div>
          <div className="flex justify-between border-b border-gray-800/60 pb-2">
            <span className="text-gray-500">Lacagta ku shub:</span>
            <span className="text-emerald-400 font-bold">{operatorPayments[selectedOp]?.method} ({operatorPayments[selectedOp]?.number})</span>
          </div>
        </div>

        {/* WhatsApp Direct Confirmation */}
        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5 mb-6 text-left space-y-3">
          <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4 text-emerald-400" /> Maxaa xiga? (Payment screenshot)
          </h4>
          <p className="text-gray-400 text-xs leading-relaxed">
            Si dalabka loo dedejiyo, fadlan u dir shaashada (screenshot) caddeynta lacag-bixinta WhatsApp-ka maamulaha.
          </p>
          <a
            href={`https://wa.me/254799636342?text=Salaan%207DataWin%2C%20waxaan%20iibsaday%20data%20oo%20ah%20lambarkayguna%20waa%20${receiverNumber}%20lacagtana%20waxaan%20ka%20soo%20diray%20${senderNumber}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-3 rounded-xl text-xs transition shadow-lg shadow-emerald-500/10"
          >
            U dir Caddeynta WhatsApp 💬
          </a>
        </div>

        <button
          onClick={() => { 
            setSubmitted(false); 
            setPhone(''); 
            setSecondaryPhone('');
            setHasSecondary(false);
          }}
          className="w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 rounded-xl transition border border-gray-700"
        >
          Mid Kale Iibso
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 pt-12 pb-16 relative">
      {/* Brand Header (without Bedel / Account Details) */}
      <div className="bg-gray-900/40 border border-gray-800/80 rounded-3xl p-5 mb-6 shadow-xl">
        <div className="flex items-center gap-2.5 border-b border-gray-850 pb-3 mb-3">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-coral-400 font-black text-lg md:text-xl tracking-wider uppercase">
            7DataWin
          </span>
          <span className="text-[10px] bg-red-500/10 border border-red-500/20 text-red-400 px-2.5 py-0.5 rounded-full font-extrabold uppercase">
            {selectedOp} ✓
          </span>
        </div>
        <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-bold">
          Ka iibso internet adigoona qof wacin, waqti kasta, xitaa offline!
        </p>
        <div className="mt-4 pt-3 border-t border-gray-850/40 flex justify-start">
          <a
            href="https://wa.me/254799636342"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-extrabold px-5 py-2.5 rounded-2xl text-[10px] transition shadow-md shadow-red-500/10"
          >
            💬 Nagala Soo Xiriir WhatsApp (+254 799 636342)
          </a>
        </div>
      </div>

      {/* Country Selection */}
      <div className="flex justify-center gap-2 mb-6 flex-wrap">
        {countries.map((c) => (
          <button
            key={c.id}
            onClick={() => { 
              setCountry(c.id); 
              setHasSecondary(false);
              setSecondaryPhone('');
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border transition ${
              country === c.id
                ? 'bg-red-500/10 border-red-500 text-red-400'
                : 'bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-500'
            }`}
          >
            <span>{c.flag}</span>
            {c.name}
          </button>
        ))}
      </div>

      {/* Operator Switcher Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-none">
        {data.operators.map((op) => (
          <button
            key={op}
            onClick={() => setSelectedOp(op)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border whitespace-nowrap transition-all ${
              selectedOp === op
                ? 'bg-red-500/20 border-red-500 text-red-400 shadow-md'
                : 'bg-gray-900/60 border-gray-800 text-gray-400 hover:border-gray-650'
            }`}
          >
            <span>{operatorIcons[op] || '📡'}</span>
            <span>{op}</span>
          </button>
        ))}
      </div>

      {/* Category Filter Tabs */}
      <div className="flex gap-1.5 mb-6 overflow-x-auto pb-1 scrollbar-none">
        {[
          { id: 'All', name: 'Dhammaan', icon: '📁' },
          { id: 'Data', name: 'Data', icon: '📶' },
          { id: 'Voice', name: 'Voice', icon: '📞' },
          { id: 'Data & Voice', name: 'Data & Voice', icon: '📱' },
          { id: 'No Expire', name: 'No Expire', icon: '♾️' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilterType(tab.id)}
            className={`px-4 py-2 rounded-full text-[10px] md:text-xs font-bold border transition-all flex items-center gap-1.5 whitespace-nowrap ${
              filterType === tab.id
                ? 'bg-red-500 text-white border-red-500 shadow-lg shadow-red-500/15'
                : 'bg-gray-900 border-gray-800 text-gray-400 hover:border-gray-750'
            }`}
          >
            <span>{tab.icon}</span>
            <span>{tab.name}</span>
          </button>
        ))}
      </div>



      {/* Package Cards List (Grid Layout) */}
      <div className="space-y-4">
        {getPacksList().map((pack) => (
          <div 
            key={pack.id} 
            className="bg-gray-900/30 border border-gray-800/80 rounded-3xl p-5 flex justify-between items-center shadow-lg hover:border-gray-700/60 transition-all duration-300"
          >
            <div className="space-y-1">
              <h3 className="text-sm md:text-base font-extrabold text-white flex items-center flex-wrap gap-2">
                <span>{pack.name}</span>
                <span className="text-[9px] bg-red-500/10 border border-red-500/20 text-red-400 px-2 py-0.5 rounded-full font-bold">
                  {pack.type === 'Data' && '📶 Data'}
                  {pack.type === 'Voice' && '📞 Voice'}
                  {pack.type === 'Data & Voice' && '📱 Combo'}
                  {pack.type === 'No Expire' && '♾️ No Expire'}
                </span>
              </h3>
              <div className="text-gray-400 text-[10.5px] font-semibold space-y-1.5 mt-1.5">
                {pack.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-1">
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-right flex flex-col items-end gap-3.5">
              <span className="text-white font-extrabold text-sm md:text-base">
                {pack.price}
              </span>
              <button
                type="button"
                onClick={() => handleOpenCheckout(pack)}
                className="bg-red-500 hover:bg-red-600 text-white font-black px-6 py-2 rounded-xl text-xs tracking-wider transition-all duration-200 shadow-md shadow-red-500/10 hover:scale-[1.03]"
              >
                IIBSO
              </button>
            </div>
          </div>
        ))}
        {getPacksList().length === 0 && (
          <div className="text-center py-12 bg-gray-900/10 border border-gray-800 rounded-2xl">
            <p className="text-gray-500 text-xs">Mawduucan wax xirmo ah kuma jiraan shirkaddan.</p>
          </div>
        )}
      </div>

      {/* ============ CHECKOUT CONFIRMATION MODAL (HUBI XOGTAADA) ============ */}
      {activePackForCheckout && (
        <div className="fixed inset-0 bg-gray-950/80 z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white text-gray-900 rounded-[2.2rem] w-full max-w-md overflow-hidden shadow-2xl p-6 space-y-5 animate-scaleUp relative">
            
            {/* Header Area */}
            <div className="text-center border-b border-gray-100 pb-3 mb-2 relative">
              <h3 className="text-gray-700 font-black tracking-wider text-xs md:text-sm">
                HUBI XOGTAADA
              </h3>
              <button
                onClick={() => setActivePackForCheckout(null)}
                className="absolute right-0 top-0 text-gray-400 hover:text-gray-600 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Selected Package Info Box */}
            <div className="border border-gray-200 rounded-[1.5rem] p-4 flex justify-between items-start bg-gray-50/20">
              <div className="space-y-1">
                <h4 className="text-gray-800 font-extrabold text-sm md:text-base">
                  {activePackForCheckout.name}
                </h4>
                <div className="text-gray-400 text-[10.5px] font-bold space-y-1.5 mt-1.5">
                  {activePackForCheckout.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-1">
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
              <span className="bg-red-500 text-white font-extrabold text-xs px-3 py-1 rounded-full shadow-sm">
                {activePackForCheckout.price}
              </span>
            </div>

            {/* Input fields as styled in screenshot */}
            <div className="space-y-4">
              <div>
                <label className="text-[10px] text-gray-400 font-black lowercase tracking-wide block mb-1">
                  lambarka lacagta diraayo
                </label>
                <div className="flex items-center border border-gray-200 rounded-xl px-3.5 py-3 bg-gray-50/50">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center text-xs">
                    {operatorIcons[selectedOp] || '📡'}
                  </div>
                  <input
                    type="tel"
                    value={senderNumber}
                    onChange={(e) => setSenderNumber(e.target.value)}
                    className="bg-transparent flex-1 text-xs md:text-sm font-semibold font-mono text-gray-800 focus:outline-none ml-2.5"
                    required
                  />
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="text-[10px] text-gray-400 font-black lowercase tracking-wide block mb-1">
                  lambarka xirmada helaayo
                </label>
                <div className="flex items-center border border-gray-200 rounded-xl px-3.5 py-3 bg-gray-50/50">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center text-xs">
                    {operatorIcons[selectedOp] || '📡'}
                  </div>
                  <input
                    type="tel"
                    value={receiverNumber}
                    onChange={(e) => setReceiverNumber(e.target.value)}
                    className="bg-transparent flex-1 text-xs md:text-sm font-semibold font-mono text-gray-800 focus:outline-none ml-2.5"
                    required
                  />
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Confirmation Banner */}
            <div className="bg-red-50 border border-red-100/60 rounded-xl p-3 text-center">
              <p className="text-[10px] md:text-xs text-red-500 font-black">
                Ma hubtaa inaad {activePackForCheckout.price} ka diri doonto {senderNumber || '...'}?
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setActivePackForCheckout(null)}
                className="flex-1 bg-red-100 hover:bg-red-200 text-red-500 font-black py-3.5 rounded-2xl text-center text-xs transition-colors"
              >
                MAYA
              </button>
              <button
                type="button"
                onClick={handleConfirmOrder}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white font-black py-3.5 rounded-2xl text-center text-xs transition-colors shadow-lg shadow-red-500/15"
              >
                HAA DIR
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  )
}
