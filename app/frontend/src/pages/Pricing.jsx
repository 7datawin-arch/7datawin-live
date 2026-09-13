import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Basic',
    price: '$5',
    desc: 'Fiican dadka isticmaala internet-ka yar',
    features: ['1GB Data', 'Wax ku ool 30 maalmood', 'Shirkad kasta', 'Taageero WhatsApp'],
  },
  {
    name: 'Standard',
    price: '$15',
    desc: 'Caadi isticmaalaha dhexdhexaadka ah',
    features: ['5GB Data', 'Wax ku ool 30 maalmood', 'Shirkad kasta', 'Taageero 24/7', 'Hadiyad 500MB', 'Premium Support'],
    popular: true,
  },
  {
    name: 'Premium',
    price: '$30',
    desc: 'Kuwa internet-ka badana isticmaala',
    features: ['20GB Data', 'Wax ku ool 30 maalmood', 'Shirkad kasta', 'Taageero 24/7', 'Hadiyad 2GB', 'Premium Support', 'Xawaare sare'],
  },
]

export default function Pricing() {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-12 pb-16">
      <h1 className="text-3xl font-bold text-white text-center mb-2">
        Qiimaha Xirmooyinka
      </h1>
      <p className="text-gray-400 text-center mb-12">
        Xirmo kasta waa qiimo jaban oo qof kasta la awoodi karo
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl border p-6 ${
              plan.popular
                ? 'border-emerald-500 bg-emerald-500/5'
                : 'border-gray-700 bg-gray-800/50'
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                Caanka ah
              </span>
            )}
            <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
            <p className="text-gray-400 text-sm mb-4">{plan.desc}</p>
            <p className="text-4xl font-extrabold text-white mb-6">
              {plan.price}
              <span className="text-base font-normal text-gray-400">/ bil</span>
            </p>
            <ul className="space-y-3 mb-8">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/252XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className={`block text-center font-bold py-3 rounded-lg transition ${
                plan.popular
                  ? 'bg-emerald-500 hover:bg-emerald-600 text-white'
                  : 'border border-gray-600 hover:border-emerald-400 text-gray-200 hover:text-emerald-400'
              }`}
            >
              Xirmadaan iibso
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
