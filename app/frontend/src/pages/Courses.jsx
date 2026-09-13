import { useState, useEffect, useRef } from 'react'
import {
  BookOpen,
  ChevronDown,
  ChevronUp,
  Cpu,
  Sparkles,
  ArrowRight,
  Search,
  Globe,
  Palette,
  Briefcase,
  Languages,
  CheckCircle2,
  Settings,
  X,
  Send,
  HelpCircle,
  Activity,
  Award,
  BookOpenCheck,
  Play
} from 'lucide-react'
import { Link } from 'react-router-dom'

const categories = [
  {
    id: 'ai-tech',
    name: 'AI & Teknolojiyadda',
    description: 'Baro aasaaska Sirdoonka Macmalka ah (AI), chat-bots, web dev iyo aaladaha xafiiska.',
    icon: Cpu,
    color: 'emerald',
    courses: [
      {
        id: 'ai-40-youtube',
        title: '40 Cashar AI (YouTube)',
        subtitle: 'Koorso dhameystiran oo AI iyo chatbot ah',
        price: 'Bilaash',
        summary: 'Baro chatbots, Manus AI, prompts, iyo sifooyin AI oo aad online ka daawan karto.',
        details: [
          'Aasaaska chatbot-yada iyo noocyadooda',
          'Knowledge base pipeline iyo ManyChat',
          'Prompt engineering iyo Gemini AI',
          'AI Video tools iyo social automation',
          '40 cashar oo hab fudud loo raaco'
        ],
        link: 'https://www.youtube.com/playlist?list=PLAI'
      },
      {
        id: 'ai-chatgpt',
        title: 'AI & ChatGPT Mastery',
        subtitle: 'Koorso dhameystiran oo ku saabsan ChatGPT & Prompt Engineering',
        price: 'Bilaash',
        summary: 'Baro sida loo isticmaalo ChatGPT iyo GPT-4 si aad shaqooyinkaaga maalinlaha ah u dardar-geliso.',
        details: [
          'Qorista Prompts-ka saxda ah (Prompt Engineering)',
          'ChatGPT plugins iyo custom GPTs',
          'Abuurista content-ka iyo qoraalada rasmiga ah',
          'Advanced ChatGPT for business & analysis',
          'Aaladaha kale ee AI sida Claude & Gemini'
        ],
        link: 'https://t.me/ISBAR_AI'
      },
      {
        id: 'social-automation',
        title: 'Social Automation & Chatbot Building',
        subtitle: 'Fahan iyo dhis chatbot isticmaalaya WhatsApp, Telegram, iyo Messenger',
        price: 'Bilaash',
        summary: 'Koorso ku saabsan automation-ka, bot-building, iyo adeegyada AI ee suuqgeynta.',
        details: [
          'ManyChat, Chatfuel, Botfather iyo Chatbase',
          'Automation workflows iyo integrations',
          'Sida loo dhiso service automation degdeg ah',
          'Qorshaha mashruuca iyo product thinking',
          'Casharro diyaar u ah isticmaalaha bilowga ah'
        ],
        link: 'https://t.me/ISBAR_AI'
      },
      {
        id: 'web-dev',
        title: 'Web Development (HTML, CSS, JS, React)',
        subtitle: 'Baro dhisidda shabakadaha casriga ah',
        price: 'Bilaash',
        summary: 'Baro dhisidda shabakadaha casriga ah adigoo adeegsanaya HTML, CSS, JavaScript, iyo React.js.',
        details: [
          'HTML5 & CSS3 Aasaaska iyo naqshadaynta shabakadda',
          'Responsive Web Design (Mobile friendly)',
          'JavaScript ES6+ fundamentals',
          'React.js dynamic UI building & state management',
          'Deployment to Vercel/Netlify iyo hosting'
        ],
        link: '#'
      },
      {
        id: 'cybersecurity',
        title: 'Cybersecurity Basics',
        subtitle: 'Aasaaska Amniga Internet-ka iyo difaaca xogta',
        price: 'Bilaash',
        summary: 'Baro sida aad isaga difaaci lahayd weerarada internet-ka iyo sida loo sugo amniga xogtaada.',
        details: [
          'Fahmaka malware-ka, virus-yada iyo phishing-ka',
          'Sugaanta furayaasha (Passwords) iyo 2FA',
          'Amniga shabakadaha Wi-Fi iyo shakhsiyadda online-ka',
          'Ammaanka aaladaha iyo mobiles-ka',
          'Data backup iyo encryption'
        ],
        link: '#'
      },
      {
        id: 'ms-word',
        title: 'Microsoft Word Professional',
        subtitle: 'Qoraalka iyo habeynta dukumiintiyada rasmiga ah',
        price: 'Bilaash',
        summary: 'Baro qoraalka iyo habeynta dukumiintiyada rasmiga ah oo heer sare ah.',
        details: [
          'Qorista iyo formatting-ka dukumiintiyada',
          'Tables, Images iyo Charts isticmaalka',
          'Header/Footer iyo Page layout settings',
          'Dukumiintiyada rasmiga ah & CV qaabeynta',
          'Shortcut keys iyo document protection'
        ],
        link: '#'
      },
      {
        id: 'powerpoint',
        title: 'PowerPoint Presentation Mastery',
        subtitle: 'Dhisidda slide-fudud oo soo jiidasho leh',
        price: 'Bilaash',
        summary: 'Baro dhisidda slide-fudud oo soo jiidasho leh oo aad dadka ku hor bandhigto mashruucyadaada.',
        details: [
          'Naqshadeynta slide-yada rasmiga ah (Design Layouts)',
          'Transitions iyo animations isticmaalkooda',
          'Sida loo daro Muuqaal (Video) iyo Maqal (Audio)',
          'Qorshaha bandhigga (Presentation flow)',
          'Templates-ka Canva PowerPoint integration'
        ],
        link: '#'
      }
    ]
  },
  {
    id: 'marketing',
    name: 'Suuqgeynta & Baraha Bulshada',
    description: 'Maaree xayeysiisyada, dhis channels, oo baro suuqgeynta dhijitaalka ah.',
    icon: Globe,
    color: 'sky',
    courses: [
      {
        id: 'digital-marketing',
        title: 'Digital Marketing Comprehensive',
        subtitle: 'Aasaaska iyo farsamooyinka suuqgeynta internet-ka',
        price: 'Bilaash',
        summary: 'Baro farsamooyinka suuqgeynta internet-ka ee casriga ah si aad ganacsigaaga u ballaariso.',
        details: [
          'Aasaaska suuqgeynta internet-ka iyo channels-ka',
          'Suuqgeynta baraha bulshada (SMM)',
          'Branding iyo target audiences analysis',
          'Analytic tools iyo dashboard-yada',
          'Abuurista xayeysiisyada guuleysta'
        ],
        link: '#'
      },
      {
        id: 'facebook-marketing',
        title: 'Facebook Ads Mastery',
        subtitle: 'Xayeysiiska lacagta ah ee Facebook',
        price: 'Bilaash',
        summary: 'Baro dhisidda iyo maareynta xayeysiisyada lacagta ah ee Facebook si aad macaamiil badan u hesho.',
        details: [
          'Facebook Business Suite aasaaska',
          'Pixel installation iyo tracking',
          'Targeting audiences (Lookalike & Custom)',
          'Budget optimization iyo A/B testing',
          'Falanqaynta natiijooyinka ad campaigns'
        ],
        link: '#'
      },
      {
        id: 'tiktok-growth',
        title: 'TikTok Growth Secrets',
        subtitle: 'Hel taageerayaal badan iyo dynamic growth',
        price: 'Bilaash',
        summary: 'Baro sida TikTok loogu yeesho taageerayaal badan iyo sida algorithm-ku u shaqeeyo.',
        details: [
          'Algorithm-ka TikTok iyo isbeddeladiisa',
          'TikTok SEO iyo hashtag strategy',
          'Waqtiga ugu habboon ee la soo galiyo',
          'Content hook strategies',
          'Sida video looga dhigo viral'
        ],
        link: '#'
      },
      {
        id: 'youtube-channel',
        title: 'YouTube Creator Academy',
        subtitle: 'Dhis channel guuleysta oo soo jiita daawadayaal',
        price: 'Bilaash',
        summary: 'Dhis channel guuleysta oo soo jiita daawadayaal adigoo baranaya farsamooyinka YouTube.',
        details: [
          'Setting up a professional YouTube channel',
          'YouTube SEO (Titles, Tags, Descriptions)',
          'Naqshadeynta Thumbnails soo jiidasho leh',
          'Video editing for YouTube and shorts',
          'Sida channel-ka looga sameeyo lacag (Monetization)'
        ],
        link: '#'
      },
      {
        id: 'content-creation',
        title: 'Content Creation & Copywriting',
        subtitle: 'Abuurista qoraallo, sawirro iyo muuqaallo',
        price: 'Bilaash',
        summary: 'Baro qaababka loo abuuro qoraallo, sawirro iyo muuqaallo soo jiidasho leh oo loogu talagalay baraha bulshada.',
        details: [
          'Storytelling iyo qorista scripts-ka',
          'Abuurista content calendar iyo scheduling',
          'Farsamooyinka content strategy',
          'Duubista muuqaalada casriga ah ee mobile-ka',
          'Copywriting for social media bios and posts'
        ],
        link: '#'
      },
      {
        id: 'seo',
        title: 'Search Engine Optimization (SEO)',
        subtitle: 'Sida websaydkaaga loo keeno bogga hore ee Google',
        price: 'Bilaash',
        summary: 'Baro sida websaydkaaga loo keeno bogga hore ee Google si aad u hesho booqdayaal bilaash ah.',
        details: [
          'On-Page SEO (Keywords, Headings, Meta)',
          'Off-Page SEO (Backlink building)',
          'Technical SEO basics (Speed, Sitemap)',
          'Keyword research tools (Semrush/Ahrefs)',
          'Google Search Console iyo Analytics integration'
        ],
        link: '#'
      },
      {
        id: 'email-marketing',
        title: 'Email Marketing & Automation',
        subtitle: 'Dhis email list oo dir dalabyada',
        price: 'Bilaash',
        summary: 'Baro sida loo abuuro liis email-o ah oo macaamiishaada loogu soo diro dalabyada si toos ah.',
        details: [
          'Setting up Mailchimp/Klaviyo accounts',
          'Building lead magnets iyo newsletter forms',
          'Writing high-converting email copies',
          'Automated email sequences and triggers',
          'CTR (Click Through Rate) optimization'
        ],
        link: '#'
      },
      {
        id: 'affiliate-marketing',
        title: 'Affiliate Marketing Guide',
        subtitle: 'Lacag ka samee alaabooyinka dadka kale',
        price: 'Bilaash',
        summary: 'Baro sida lacag looga sameeyo suuqgeynta alaabooyinka dadka kale ay leeyihiin.',
        details: [
          'Introduction to Affiliate Networks (Amazon, ClickBank)',
          'Finding profitable niches and products',
          'Creating simple landing pages',
          'Driving traffic to affiliate links using social media',
          'Sida loo dhiso passive income stream'
        ],
        link: '#'
      }
    ]
  },
  {
    id: 'design-creative',
    name: 'Naqshadaynta & Hal-abuurka',
    description: 'Baro naqshadaynta garaafikada iyo tafatirka muuqaalada heer xirfadyaqaan.',
    icon: Palette,
    color: 'purple',
    courses: [
      {
        id: 'canva-design',
        title: 'Canva Graphic Design',
        subtitle: 'Graphic Design oo fudud adigoo Canva isticmaalaya',
        price: 'Bilaash',
        summary: 'Baro naqshadeynta sawirrada quruxda badan ee xayeysiiska iyo baraha bulshada adigoo Canva isticmaalaya.',
        details: [
          'Canva dashboard iyo basic tools',
          'Naqshadeynta logos, banners iyo social posts',
          'Midabada (Color theory) iyo typography-ga',
          'Templates-ka Canva iyo dynamic animation-ka',
          'Flyers iyo presentation design'
        ],
        link: '#'
      },
      {
        id: 'video-editing-capcut',
        title: 'Video Editing (CapCut & Premiere Pro)',
        subtitle: 'Jar-jarista iyo habeynta muuqaalada',
        price: 'Bilaash',
        summary: 'Baro jar-jarista iyo habeynta muuqaalada heerka sare ah ee loogu talagalay YouTube, TikTok iyo Facebook.',
        details: [
          'Fahamka timeline-ka iyo cutting process',
          'Transitions, Text effects, iyo Sound Effects',
          'Color grading iyo lighting basics',
          'CapCut mobile & desktop guides',
          '14 Maalmood AI Video Editing (Original Link)'
        ],
        link: 'https://loom.com/share/77792231bc8140008e8eeaab77b3d788'
      }
    ]
  },
  {
    id: 'business-career',
    name: 'Ganacsiga & Xirfadaha Career-ka',
    description: 'Dhis ganacsigaaga online-ka ah, baro freelancing iyo xirfadaha iibinta.',
    icon: Briefcase,
    color: 'amber',
    courses: [
      {
        id: 'freelancing',
        title: 'Freelancing Mastery (Upwork & Fiverr)',
        subtitle: 'Iibi xirfadaada adigoo gurigaaga jooga',
        price: 'Bilaash',
        summary: 'Baro sida aad xirfadaada ugu iibin lahayd online-ka adigoo ka shaqeynaya gurigaaga.',
        details: [
          'Creating standout profiles on Upwork & Fiverr',
          'How to write proposals that win clients',
          'Pricing your services and tracking work',
          'Upwork & Fiverr algorithms optimization',
          'Managing client communications and long term contracts'
        ],
        link: '#'
      },
      {
        id: 'ecommerce',
        title: 'E-commerce & Shopify Store Building',
        subtitle: 'Bilaabista dukaan internet oo guuleysta',
        price: 'Bilaash',
        summary: 'Dhis dukaan internet oo aad alaab ku iibiso adigoo isticmaalaya Shopify iyo dukaamada maxaliga ah.',
        details: [
          'Shopify setup, themes and customization',
          'Product sourcing strategies (Local & Dropshipping)',
          'Payment gateway integration',
          'Order fulfillment and tracking systems',
          'Suuqgeynta dukaankaaga online-ka ah'
        ],
        link: '#'
      },
      {
        id: 'entrepreneurship',
        title: 'Entrepreneurship & Business Basics',
        subtitle: 'Bilaabista iyo maamulida ganacsi cusub',
        price: 'Bilaash',
        summary: 'Baro sida loo bilaabo, loo maamulo, loona kordhiyo ganacsi cusub oo guuleysta.',
        details: [
          'Dhisidda iyo tijaabinta fikradaha ganacsiga',
          'Qorista Business Plan fudud',
          'Fahamka baahida suuqa iyo tartamayaasha',
          'Financial planning, budgeting and pricing',
          'Productivity & delegation to employees'
        ],
        link: '#'
      },
      {
        id: 'customer-service',
        title: 'Customer Service Excellence',
        subtitle: 'Adeega macaamiisha heerka sare ah',
        price: 'Bilaash',
        summary: 'Baro farsamooyinka isgaarsiinta ee aad macaamiisha kula macaamili lahayd si ay ugu qancaan adeeggaaga.',
        details: [
          'Isgaarsiinta tooska ah iyo midda taleefanka',
          'Maareynta macaamiisha careysan',
          'Fahamka iyo xallinta baahida macaamiisha',
          'Building brand loyalty',
          'Feedback collection iyo follow-up strategies'
        ],
        link: '#'
      },
      {
        id: 'sales-skills',
        title: 'Sales Skills & Closing Deals',
        subtitle: 'Iibinta alaabta iyo xaqiijinta macaamiisha',
        price: 'Bilaash',
        summary: 'Baro cilmiga iibinta alaabooyinka iyo sida macaamiisha loogu qanciyo inay wax iibsadaan.',
        details: [
          'Farsamooyinka Sales pitch ee wax ku oolka ah',
          'Handling customer objections gracefully',
          'Closing deals and signing contracts',
          'Sales psychology and customer behavior',
          'Lead generation and cold calling basics'
        ],
        link: '#'
      },
      {
        id: 'cv-interview',
        title: 'CV & Interview Skills',
        subtitle: 'Qorista CV-ga casriga ah iyo wareysiga shaqada',
        price: 'Bilaash',
        summary: 'Baro qorista CV-ga casriga ah iyo sida loogu diyaargaroobo wareysiyada shaqada ee guuleysta.',
        details: [
          'Writing an ATS-friendly CV (Sifaha ku jira)',
          'Cover letter writing template and tips',
          'Interview preparations & common questions',
          'Body language and confidence during interviews',
          'Salary negotiation tips'
        ],
        link: '#'
      }
    ]
  },
  {
    id: 'languages-growth',
    name: 'Luuqadaha & Horumarka Qofka',
    description: 'Hagaaji Ingiriiskaaga ama Soomaaligaaga, baro hadalka dadweynaha iyo xisaabta lacagta.',
    icon: Languages,
    color: 'rose',
    courses: [
      {
        id: 'english-language',
        title: 'English Language (Speaking & Writing)',
        subtitle: 'Hagaaji luuqadaada Ingiriiska',
        price: 'Bilaash',
        summary: 'Hagaaji luuqadaada Ingiriiska dhanka ku hadalka, qorista, iyo dhagaysiga.',
        details: [
          'English Grammar basics and structuring sentences',
          'Daily conversation practice templates',
          'Business English writing (Emails & Letters)',
          'Vocabulary building techniques and idioms',
          'Accent and pronunciation tips'
        ],
        link: '#'
      },
      {
        id: 'somali-writing',
        title: 'Somali Language & Writing',
        subtitle: 'Qoraalka & Hal-abuurka Af Soomaaliga',
        price: 'Bilaash',
        summary: 'Baro shuruucda qoraalka af Soomaaliga ee saxda ah iyo farshaxanka hadalka.',
        details: [
          'Higaada iyo naxwaha af Soomaaliga',
          'Habka qorista maqaalada rasmiga ah',
          'Hal-abuurka suugaanta iyo maahmaahyada',
          'Af-Soomaaliga rasmiga ah ee shaqada',
          'Hadalka dadweynaha ee afka Soomaaliga'
        ],
        link: '#'
      },
      {
        id: 'public-speaking',
        title: 'Public Speaking & Presentation',
        subtitle: 'Ka guuleyso cabsida hadalka dadweynaha',
        price: 'Bilaash',
        summary: 'Ka guuleyso cabsida hadalka dadweynaha adigoo baranaya dhisidda kalsoonida iyo soo jiidashada dadka.',
        details: [
          'Overcoming stage fright and building confidence',
          'Voice modulation, pitch and breathing exercises',
          'Structuring a speech (Beginning, Middle, End)',
          'Engaging the audience with storytelling',
          'Using visual aids effectively during speeches'
        ],
        link: '#'
      },
      {
        id: 'financial-literacy',
        title: 'Financial Literacy',
        subtitle: 'Xisaabta iyo maareynta lacagta',
        price: 'Bilaash',
        summary: 'Baro maareynta lacagtaada gaarka ah, kaydinta, miisaaniyadda iyo maalgashiga habboon.',
        details: [
          'Creating a personal budget and tracking expenses',
          'Kaydinta lacagta (Saving strategies and compounding)',
          'Fahamka deynta iyo maareynteeda',
          'Aasaaska maalgashiga (Investing basics for beginners)',
          'Financial freedom roadmap'
        ],
        link: '#'
      }
    ]
  }
]

const courseLessons = {
  'ai-40-youtube': [
    { title: 'CASHAR 1: Chatbot Aasaaska', link: 'https://www.youtube.com/watch?v=zVwhZ9jH0qY', desc: 'Faham aasaaska chatbot-yada iyo ManyChat setup.' },
    { title: 'CASHAR 2: Chatbots Noocyada', link: 'https://www.youtube.com/watch?v=dkMO_-Sa1EY', desc: 'Noocyada kala duwan ee chatbots-ka iyo adeegsiga la xiriira.' },
    { title: 'CASHAR 3: Knowledge Base Pipeline', link: 'https://www.youtube.com/watch?v=E4nxnDdsPT8', desc: 'Habka loo dhisayo pipeline-ka aqoonta ee chatbot-yada.' },
    { title: 'CASHAR 4: ManyChat Bilow', link: 'https://www.youtube.com/watch?v=FlaqS831-nM', desc: 'Sida loo bilaabo dhisada ManyChat automation.' },
    { title: 'CASHAR 5: Bot Macallin Xisaab', link: 'https://www.youtube.com/watch?v=sbczVS6MDWI', desc: 'Dhisidda chatbot noqon kara macallin xisaabeed oo toos ah.' },
    { title: 'CASHAR 6: ManyChat Hordhac', link: 'https://www.youtube.com/watch?v=y03ckrI0ezc', desc: 'ManyChat aasaaska iyo triggers-ka koowaad.' },
    { title: 'CASHAR 7: Knowledge Base Manus AI', link: 'https://www.youtube.com/watch?v=r_aHgos0dZg', desc: 'Sida loo save gareeyo Knowledge base aad samaysatay.' },
    { title: 'CASHAR 8: Prompt Heer Sare', link: 'https://www.youtube.com/watch?v=60JgZXi930k', desc: 'Sida loo sameyo tilmaamo chatbot oo heer sare ah.' },
    { title: 'CASHAR 9: Prompts Customization', link: 'https://www.youtube.com/watch?v=I2j7AArFIGQ', desc: 'Sameynta Qoraalka Customization ah Prompts.' },
    { title: 'CASHAR 10: Comet AI Browser', link: 'https://www.youtube.com/watch?v=R0xhBLqj6ys', desc: 'Soo deji Brawserka Casrig AI Comet shaqada ayuu qabanayaa.' },
    { title: 'CASHAR 11: Manus AI Shaqo Fudud', link: 'https://www.youtube.com/watch?v=0S6ArHPgpCA', desc: 'Manus AI oo lagugu fududeynayo shaqooyin dhib badan.' },
    { title: 'CASHAR 12: Paal AI Telegram Bot', link: 'https://www.youtube.com/watch?v=SEfx-QRnJsU', desc: 'Telegram Bot dhameystiran adigoo isticmaalaya Paal AI.' },
    { title: 'CASHAR 13: Paal AI Part 2', link: 'https://www.youtube.com/watch?v=Jc6ct8O1zLw', desc: 'Qaybta labaad ee dhismaha Telegram bot-ka Paal AI.' },
    { title: 'CASHAR 14: YouMind AI Waxbarasho', link: 'https://www.youtube.com/watch?v=who5zXdmohA', desc: 'YouMind AI waxay ka dhigaysaa wax walba kuwo fudud.' },
    { title: 'CASHAR 15: WhatsApp vs Telegram Bot', link: 'https://www.youtube.com/watch?v=N6Gu_mHetIc', desc: 'Farqiga u dhexeeya labada platform ee bot automation-ka.' },
    { title: 'CASHAR 16: Custom ChatGPT', link: 'https://www.youtube.com/watch?v=aXrrjehQgh0', desc: 'Ku Shaqeynta Custom ChatGPT No Code Gen Z Prompts.' },
    { title: 'CASHAR 17: Prompt Instructions', link: 'https://www.youtube.com/watch?v=dnqFGfKLb4Y', desc: 'Baro qoraalka prompts ee u ogolaada in AI ku hadlo afkaaga.' },
    { title: 'CASHAR 18: Gemini GEMS AI', link: 'https://www.youtube.com/watch?v=vaEaWf1-VWU', desc: 'Sida Loo Isticmaalo Gemini GEMS AI.' },
    { title: 'CASHAR 19: Perplexity AI Mobile', link: 'https://www.youtube.com/watch?v=EUvNqeLF0AA', desc: 'How to Use Perplexity AI Chatbot on Mobile.' },
    { title: 'CASHAR 20: AI Quiz Tool', link: 'https://www.youtube.com/watch?v=XlopdHYs2aI', desc: 'AI QUIZRAD - Su\'aal Kasta Kaaga Shaqeynaya.' },
    { title: 'CASHAR 21: ManyChat 3', link: 'https://www.youtube.com/watch?v=L9WwTphvuYU', desc: 'ManyChat advanced integrations iyo contact tags.' },
    { title: 'CASHAR 22: FB Messenger Bot', link: 'https://www.youtube.com/watch?v=2IFflSsAzys', desc: 'Samee Facebook Messenger Chatbot - ManyChat.' },
    { title: 'CASHAR 23: Messenger Customer Service', link: 'https://www.youtube.com/watch?v=On6q9Xc0--Q', desc: 'Sida Loo Sameeyo AI Chatbot Customer Service.' },
    { title: 'CASHAR 24: Botpress Knowledge Base', link: 'https://www.youtube.com/watch?v=mNLJ-8dZwvg', desc: 'DHIS! BOTPRESS + KNOWLEDGE BASE.' },
    { title: 'CASHAR 25: WhatsApp Telegram Marketing', link: 'https://www.youtube.com/watch?v=5Lu9jcaP220', desc: 'WHATSAPP + TELEGRAM BOT (Gudbi/Iibsi Dadka!).' },
    { title: 'CASHAR 26: Canva AI Sawirro', link: 'https://www.youtube.com/watch?v=5tEtbYLetkU', desc: 'Canva AI: Ku Samee Sawirro Nooc walba ah!.' },
    { title: 'CASHAR 27: AI Sawir Samee', link: 'https://www.youtube.com/watch?v=wu4oubHInMY', desc: 'Farsamada sawir sameynta ee AI prompts.' },
    { title: 'CASHAR 28: VEO 3 Google Video AI', link: 'https://www.youtube.com/watch?v=JBDMbL8VzGo', desc: 'Hordhaca Google VEO 3 ee video abuurista.' },
    { title: 'CASHAR 29: Quiz DeepSeek Telegram', link: 'https://www.youtube.com/watch?v=mGxS8tw-fUc', desc: 'Telegram quiz bot adeegsanaya DeepSeek API.' },
    { title: 'CASHAR 30: Monica AI Af-Soomaali', link: 'https://www.youtube.com/watch?v=RHq7027Y4U4', desc: 'Monica AI Af-Soomaali Co-pilot.' },
    { title: 'CASHAR 31: Telegram Bot A to Z', link: 'https://www.youtube.com/watch?v=TwKLnqnjxsQ', desc: 'Telegram bots dhisadooda A to Z.' },
    { title: 'CASHAR 32: Google Bard vs Meta AI', link: 'https://www.youtube.com/watch?v=bFtgqnhEX88', desc: 'Isbarbardhiga Bard iyo Meta AI.' },
    { title: 'CASHAR 33: Offline AI Apps', link: 'https://www.youtube.com/watch?v=Pn1kU1et7oI', desc: 'Software-ada AI-ga ee ku shaqeeya offline-ka.' },
    { title: 'CASHAR 34: WhatsApp 2025', link: 'https://www.youtube.com/watch?v=aJFGVD5vilM', desc: 'Cusbooneysiinta ugu dambeysay ee WhatsApp Automation.' },
    { title: 'CASHAR 35: Linux Hordhac', link: 'https://www.youtube.com/watch?v=I2F1-5dk3hQ', desc: 'Baro aasaaska Linux ee developers-ka.' },
    { title: 'CASHAR 36: Linux ku Soo Dag', link: 'https://www.youtube.com/watch?v=7K4aibOiPQ4', desc: 'Tallaabooyinka Linux loogu soo dejinayo Windows.' },
    { title: 'CASHAR 37: Apps Internet Security', link: 'https://www.youtube.com/watch?v=_RWyy40XfM0', desc: 'Sugaanta amniga iyo difaaca internet-ka.' },
    { title: 'CASHAR 38: AI Video Editing Somalia', link: 'https://www.youtube.com/watch?v=7MB2xCbLt1M', desc: 'The Shocking Truth About AI Video Editing in Somalia.' },
    { title: 'CASHAR 39: Thumbnail Professional', link: 'https://www.youtube.com/watch?v=R2g7f5kXpI0', desc: 'Sameynta Thumbnails qurux badan.' },
    { title: 'CASHAR 40: AI Photo Animation', link: 'https://www.youtube.com/watch?v=M9m-dIe46qM', desc: 'U beddel sawirada caadiga ah video animatad ah.' }
  ],
  'video-editing-capcut': [
    { title: "CASHAR 1: InVideo Fundamentals", link: "https://www.loom.com/share/8465169f3ed34080a9223c7dd8cafb37", desc: "Master InVideo: templates, text-to-video, iyo AI layouts." },
    { title: "CASHAR 2: InVideo – Creating Video from Text", link: "https://www.loom.com/share/77792231bc8140008e8eeaab77b3d788", desc: "Text-to-video conversion, image integration, free vs paid." },
    { title: "CASHAR 3: Pictory.ai Introduction", link: "https://www.loom.com/share/a63c2b5554274df2a7e97975851834ef", desc: "Pictory for automation iyo social media." },
    { title: "CASHAR 4: Pictory Professional Editing Techniques", link: "https://www.loom.com/share/5df200096f084354bfd41ca0551edf2f", desc: "Detailed video editing iyo Pictory functionality." },
    { title: "CASHAR 5: Pictory.ai – AI-Powered Video Editing", link: "https://www.loom.com/share/f03cfff5dc0a4222842ba074b123ab39", desc: "AI video editing capabilities (Play Store & web)." },
    { title: "CASHAR 6: Lumen5 – Utilizing Ready-made Templates", link: "https://www.loom.com/share/1f638be8ca1a4c5a8a110921803e54bd", desc: "Video template creation using Lumen5." },
    { title: "CASHAR 7: Lumen5 Editing Interface", link: "https://www.loom.com/share/b7c491c56fff4926a2cdc8a92730e9f0", desc: "In-depth review of Lumen5 web-based editing tools." },
    { title: "CASHAR 8: Lumen5 – Audio and Visual Enhancements", link: "https://www.loom.com/share/42b2100320884386ada6af388c9e6495", desc: "Integrating audio, imagery, iyo visual improvements." },
    { title: "CASHAR 9: Audio Refinement and Cutting – Lumen5", link: "https://www.loom.com/share/1e44a27acab9467582d965fa4c9bb4a1", desc: "Techniques for audio refinement within Lumen5." }
  ],
  'social-automation': [
    { title: 'CASHAR 1: Chatbot Aasaaska', link: 'https://www.youtube.com/watch?v=zVwhZ9jH0qY', desc: 'Faham aasaaska chatbot-yada iyo ManyChat setup.' },
    { title: 'CASHAR 2: Chatbots Noocyada', link: 'https://www.youtube.com/watch?v=dkMO_-Sa1EY', desc: 'Noocyada kala duwan ee chatbots-ka iyo adeegsiga la xiriira.' },
    { title: 'CASHAR 4: ManyChat Bilow', link: 'https://www.youtube.com/watch?v=FlaqS831-nM', desc: 'Sida ManyChat loogu xiro.' },
    { title: 'CASHAR 6: ManyChat Hordhac', link: 'https://www.youtube.com/watch?v=y03ckrI0ezc', desc: 'ManyChat aasaaska iyo triggers-ka koowaad.' },
    { title: 'CASHAR 12: Paal AI Telegram Bot', link: 'https://www.youtube.com/watch?v=SEfx-QRnJsU', desc: 'Telegram Bot dhameystiran adigoo isticmaalaya Paal AI.' },
    { title: 'CASHAR 15: WhatsApp vs Telegram Bot', link: 'https://www.youtube.com/watch?v=N6Gu_mHetIc', desc: 'Farqiga u dhexeeya labada platform ee bot automation-ka.' },
    { title: 'CASHAR 21: ManyChat 3', link: 'https://www.youtube.com/watch?v=L9WwTphvuYU', desc: 'ManyChat advanced integrations iyo contact tags.' },
    { title: 'CASHAR 22: FB Messenger Bot', link: 'https://www.youtube.com/watch?v=2IFflSsAzys', desc: 'Samee Facebook Messenger Chatbot - ManyChat.' },
    { title: 'CASHAR 23: Messenger Customer Service', link: 'https://www.youtube.com/watch?v=On6q9Xc0--Q', desc: 'Dhis bot u jawaaba su’aalaha ardayda ama macaamiisha.' },
    { title: 'CASHAR 24: Botpress Knowledge Base', link: 'https://www.youtube.com/watch?v=mNLJ-8dZwvg', desc: 'Ku dar knowledge base Botpress oo ku xir 1 daqiiqo.' },
    { title: 'CASHAR 25: WhatsApp Telegram Marketing', link: 'https://www.youtube.com/watch?v=5Lu9jcaP220', desc: 'Automation u iibiya koorsooyinka/adeegyada.' },
    { title: 'CASHAR 31: Telegram Bot A to Z', link: 'https://www.youtube.com/watch?v=TwKLnqnjxsQ', desc: 'Telegram bots dhisadooda A to Z.' },
    { title: 'CASHAR 34: WhatsApp 2025', link: 'https://www.youtube.com/watch?v=aJFGVD5vilM', desc: 'Cusbooneysiinta waqtiga hadda ee WhatsApp Automation.' },
    { title: 'COMMUNITY: WhatsApp Quiz & Support', link: 'https://chat.whatsapp.com/BRk1xgsg4ohKAaWN7oDRIe', desc: 'Ku biir group-ka WhatsApp si aad uga jawaabto quiz-yo iyo caawinaad.' },
    { title: 'COMMUNITY: Telegram Channel updates', link: 'https://t.me/+eJxxMKtunMcwODhk', desc: 'Ku biir kanaalka Telegram si aad u hesho faylasha iyo wararkii u dambeeyey.' },
    { title: 'COMMUNITY: Free AI Channel', link: 'https://t.me/Farsamada', desc: 'Kanaalka Telegram oo lagu wadaago aaladaha AI ee bilaashka ah.' }
  ],
  'ai-chatgpt': [
    { title: 'CASHAR 8: Prompt Engineering', link: 'https://www.youtube.com/watch?v=60JgZXi930k', desc: 'Qorista prompts heersare ah oo caawinaya chatbot instructions.' },
    { title: 'CASHAR 9: Prompts Customization', link: 'https://www.youtube.com/watch?v=I2j7AArFIGQ', desc: 'Habeynta custom prompts si natiijooyin sax ah loo helo.' },
    { title: 'CASHAR 16: Custom ChatGPT', link: 'https://www.youtube.com/watch?v=aXrrjehQgh0', desc: 'Dhis custom ChatGPT kuu gaar ah oo afkaaga ku hadlaya.' },
    { title: 'CASHAR 17: Prompt Instructions', link: 'https://www.youtube.com/watch?v=dnqFGfKLb4Y', desc: 'Instructions qoto dheer oo lagula dhex galayo ChatGPT.' },
    { title: 'CASHAR 18: Gemini GEMS AI', link: 'https://www.youtube.com/watch?v=vaEaWf1-VWU', desc: 'Abuurista \'Gems\' kuu gaar ah oo ku dhex jira Google Gemini.' },
    { title: 'CASHAR 19: Perplexity AI Mobile', link: 'https://www.youtube.com/watch?v=EUvNqeLF0AA', desc: 'How to Use Perplexity AI Chatbot on Mobile.' },
    { title: 'CASHAR 30: Monica AI Af-Soomaali', link: 'https://www.youtube.com/watch?v=RHq7027Y4U4', desc: 'Monica AI Af-Soomaali Co-pilot.' },
    { title: 'CASHAR 32: Google Bard vs Meta AI', link: 'https://www.youtube.com/watch?v=bFtgqnhEX88', desc: 'Isbarbardhiga Google Bard iyo Meta AI.' }
  ],
  'ecommerce': [
    { title: "CASHAR 1: MAXAA KU DOORNAY ZENDROP", link: "https://www.loom.com/share/a5f8d34a8bac4bd9be5d0c4b159286cd", desc: "Zendrop aasaaska dropshipping iyo sababta loo doorto." },
    { title: "CASHAR 2: Zendrop AI Iyo Dropshippingka", link: "https://www.loom.com/share/9f2291c7056e45beae291b2505caf496", desc: "Zendrop AI integration iyo sidee lagula shaqeeyaa." },
    { title: "CASHAR 3: Sida Loo Sameeyo Telegram AI Advanced ah", link: "https://www.loom.com/share/6c78f630461d4fccb835f072e5edbfe1", desc: "Dhisidda Telegram Bot heersare ah oo ku xiran dropshipping store." },
    { title: "CASHAR 4: AI Dropshipping Sida Hawsha u Fududeeyey", link: "https://www.loom.com/share/27c48641a1ed42c084b2d637501ff409", desc: "Qaybaha AI ee kaa caawinaya automation-ka dukaanka." },
    { title: "CASHAR 5: Sida Loogu Shubo Appka Zendrop", link: "https://www.loom.com/share/0ac9d7cd352b462292a42e557fe0668d", desc: "Step-by-step installation guide for Zendrop app on Shopify." },
    { title: "CASHAR 6: QAABKA AI SHAQADA U FUDUDEEYEY DROPSHIPPING", link: "https://www.loom.com/share/96535223749b4347919003b77b1765af", desc: "Farsamooyinka ugu cajiibsan ee AI dropshipping shaqada ku fududeeyo." },
    { title: "CASHAR 7: ISKU XIDHKA HALKII AAN KA SOO BILOWNAY NO TECH", link: "https://www.loom.com/share/9913a2b3c4f84de0bc874a69e21fb921", desc: "Qaybinta casharada haddii aadan aqoon technical ah lahayn." },
    { title: "CASHAR 8: DULMAR GUUD OO KU SAABSAN WAXAA BARANAY", link: "https://www.loom.com/share/600f81758476491bbbbbc4e8518fc9d5", desc: "Review iyo dulmar guud oo ku saabsan dhammaan casharada." },
    { title: "CASHAR 9: ADEEGYADA UGU DAMBEYEY EE DROPSHIPPING DULMAR", link: "https://www.loom.com/share/0b5a69dbae8249f38c71b0146645ee77", desc: "Dulmar guud ee adeegyada iyo qorshooyinka mustaqbalka." },
    { title: "CASHAR 10: DHAMAYSTIRE GUUD - SIDA HAWSHA AI INOOGU DHAMEEYEY", link: "https://www.loom.com/share/21ed0c84d67c425cb4aa9a0636c233fd", desc: "Gunaanadka iyo gabagabada dropshipping zendrop koorsada." }
  ]
}

// Dynamic Quick Question Buttons Menu (ELI5 Prompts for all 25 courses)
const getQuickQuestions = (course) => {
  const defaultQuestions = [
    { text: '💰 Sidee ku heli karaa koorsooyinka?', icon: '💵' },
    { text: '📚 Maxaan ku baranayaa koorsadan?', icon: '📖' },
    { text: '🎯 Sidee ku bilaabaa maanta?', icon: '🚀' },
    { text: '💡 Sii tusaale aad u fudud oo aasaaska ah.', icon: '🤔' }
  ]

  const questions = {
    'ai-40-youtube': [
      { text: '🤖 Waa maxay Chatbot oo cunug 5 jir ah u sharax?', icon: '💬' },
      { text: '🧠 Sidee AI loogu tababaraa xog gaar ah sxb?', icon: '📊' },
      { text: '💡 Sii tusaale fudud oo Prompt ah oo xiiso leh.', icon: '✍️' }
    ],
    'ai-chatgpt': [
      { text: '💬 Sidee ChatGPT looga dhigaa saaxiib shaqada kuu fududeeya?', icon: '💼' },
      { text: '🛠️ Waa maxay Prompt Engineering oo si fudud iigu sharax?', icon: '✍️' },
      { text: '💡 Maxaa farqi u dhexeeya GPT-3 iyo GPT-4 carruur ahaan?', icon: '🧠' }
    ],
    'social-automation': [
      { text: '🤖 Sida WhatsApp bot loogu dhisayo si fudud?', icon: '📱' },
      { text: '⚡ Waa maxay Automation flow? (ELI5)', icon: '🔄' },
      { text: '💡 Miyaan u baahanahay code si aan bot u dhiso?', icon: '💻' }
    ],
    'web-dev': [
      { text: '🏠 Sharax HTML, CSS, iyo JS adoo guri iyo ranji tusaale u soo qaadaya.', icon: '🏢' },
      { text: '⚛️ Waa maxay React.js oo ku sharax af Soomaali aad u fudud?', icon: '💻' },
      { text: '🚀 Sideen u sameeyaa mareegteyda ugu horeysa carruur ahaan?', icon: '🌐' }
    ],
    'cybersecurity': [
      { text: '🔒 Sideen u ilaaliyaa password keyga? (ELI5)', icon: '🔑' },
      { text: '🎣 Waa maxay Phishing oo tusaale cunug 5 jir ah u sharax?', icon: '🐠' },
      { text: '🌐 Sideen si nabad ah ugu dhex mushaaxaa Wi-Fi dadweyne?', icon: '📶' }
    ],
    'ms-word': [
      { text: '📝 Sidee loo habeeyaa CV qurxoon oo sahlan?', icon: '📄' },
      { text: '⌨️ Waa maxay shortcuts-ka ugu muhiimsan ee shaqada?', icon: '⌨️' },
      { text: '📐 Sida margins-ka iyo bogga loo cabbiro si fudud?', icon: '📐' }
    ],
    'powerpoint': [
      { text: '🎨 Sidee slide-yada looga dhigaa kuwo qurux badan sida buug sawir leh?', icon: '✨' },
      { text: '🎬 Sida loo isticmaalo slide transitions si fudud?', icon: '🎞️' },
      { text: '💡 Waa maxay sharciga 10/20/30 ee PPT? (ELI5)', icon: '📊' }
    ],
    'digital-marketing': [
      { text: '📈 Waa maxay Digital Marketing oo ELI5 iigu sharax?', icon: '📣' },
      { text: '🎯 Sidee macaamiil looga helaa baraha bulshada si fudud?', icon: '👥' },
      { text: '💰 Sidee xayeysiis ku bilaabaa qiimo aad u jaban?', icon: '💵' }
    ],
    'facebook-marketing': [
      { text: '🎯 Waa maxay Facebook Pixel? (ELI5)', icon: '👾' },
      { text: '💵 Sidee loo sameeyaa target audience guuleysta?', icon: '👥' },
      { text: '📈 Maxay ku fiican tahay lookalike audience?', icon: '🔄' }
    ],
    'tiktok-growth': [
      { text: '📈 Sidee algorithms-ka TikTok u shaqeeyaan carruur ahaan?', icon: '⚡' },
      { text: '🎣 Waa maxay Hook oo sidee loogu abuuraa 3-da ilbiriqsi ee hore?', icon: '🪝' },
      { text: '⏰ Goormaa ugu fiican in muuqaal la soo geliyo?', icon: '⏱️' }
    ],
    'youtube-channel': [
      { text: '🎥 Sideen u sameeyaa Thumbnail dadka soo jiita? (ELI5)', icon: '🖼️' },
      { text: '🔍 Waa maxay YouTube SEO si fudud?', icon: '🔎' },
      { text: '💵 Sidee YouTube lacag looga sameeyaa?', icon: '💰' }
    ],
    'content-creation': [
      { text: '✍️ Sida loo qoro script video oo dadka soo jiita carruur ahaan?', icon: '📝' },
      { text: '📅 Sida loo habeeyo Content Calendar si fudud?', icon: '📆' },
      { text: '🎬 Maxaa ugu muhiimsan marka video la duubayo?', icon: '📹' }
    ],
    'seo': [
      { text: '🔎 Waa maxay SEO oo tusaale aad u fudud iigu sharax?', icon: '🌐' },
      { text: '🔑 Sidee loo helaa keywords muhiim ah?', icon: '🗝️' },
      { text: '🌐 Waa maxay backlinks oo maxay u fiican yihiin?', icon: '🔗' }
    ],
    'email-marketing': [
      { text: '📧 Sidee loo helaa liiska email-ada macaamiisha? (ELI5)', icon: '📋' },
      { text: '✍️ Sida loo qoro email dadku furaan si fudud?', icon: '📩' },
      { text: '🔄 Waa maxay email automation sequence?', icon: '🔁' }
    ],
    'affiliate-marketing': [
      { text: '💰 Waa maxay Affiliate Marketing oo ELI5 iigu sharax?', icon: '💵' },
      { text: '🌐 Sideen u helaa alaabooyin aan suuq-geeyo?', icon: '🛒' },
      { text: '📈 Halkeen ku shubaa links-keyga si aan macaamiil u helo?', icon: '🔗' }
    ],
    'canva-design': [
      { text: '🎨 Sida loogu dhex sameeyo logo Canva si fudud?', icon: '🖌️' },
      { text: '🌈 Sida midabada loogu wada habeeyo naqshada?', icon: '🌈' },
      { text: '🖼️ Maxay yihiin Canva templates iyo sidee loo isticmaalaa?', icon: '📐' }
    ],
    'video-editing-capcut': [
      { text: '🎬 Sidee clips-ka loo gooyaa loona wada xiriiriyaa? (ELI5)', icon: '✂️' },
      { text: '🎵 Sida muusig iyo cod hoose loogu daro video?', icon: '🔊' },
      { text: '⚡ Sidee loo isticmaalaa CapCut keyframes?', icon: '🔑' }
    ],
    'freelancing': [
      { text: '💻 Waa maxay Freelancing oo sideen ku bilaabaa? (ELI5)', icon: '🏠' },
      { text: '✍️ Sida loo qoro proposal macaamilka soo jiita?', icon: '📄' },
      { text: '💵 Sidee lacagta looga soo qaadaa Upwork/Fiverr?', icon: '🏦' }
    ],
    'ecommerce': [
      { text: '🛒 Sidee Shopify store loogu abuuraa si fudud?', icon: '🌐' },
      { text: '📦 Waa maxay Dropshipping oo sidee u shaqeeyaa? (ELI5)', icon: '🚢' },
      { text: '💳 Sidee lacagta macaamiisha loo qaadaa?', icon: '💳' }
    ],
    'entrepreneurship': [
      { text: '💡 Sideen ku ogaadaa haddii fikradeyda ganacsi guuleysaneyso?', icon: '⚖️' },
      { text: '📈 Sida loo sameeyo business model fudud? (ELI5)', icon: '📐' },
      { text: '💵 Sidee loo maareeyaa faa’iidada iyo khasaaraha?', icon: '📊' }
    ],
    'customer-service': [
      { text: '📞 Sida macaamil careysan loogu qanciyo xiriir wacan?', icon: '🤝' },
      { text: '💬 Maxay yihiin jumladaha ugu fiican ee macaamilka lagu yiraahdo?', icon: '💬' },
      { text: '📈 Sida brand loyalty loo dhiso si fudud?', icon: '🏆' }
    ],
    'sales-skills': [
      { text: '💵 Sidee macaamilka looga iibiyaa alaab isagoo raba? (ELI5)', icon: '💰' },
      { text: '🤝 Sida deal loo guuleysto oo heshiis loo saxiixo?', icon: '✍️' },
      { text: '🧠 Waa maxay cilmi-nafsiga iibinta?', icon: '🧠' }
    ],
    'cv-interview': [
      { text: '📄 Maxaa CV-ga ka dhiga mid guuleysta si fudud?', icon: '🏆' },
      { text: '💬 Maxaa la yiraahdaa marka lagu weydiiyo meelahaaga tabarta yar?', icon: '💬' },
      { text: '💵 Sidee salary loo gorgortamaa si wacan?', icon: '💵' }
    ],
    'english-language': [
      { text: '🗣️ Sideen ugu hadli karaa Ingiriis si kalsooni leh? (ELI5)', icon: '🎤' },
      { text: '📝 Sida loo dhiseyaa jumlad sax ah (grammar)?', icon: '✍' },
      { text: '💡 Waa maxay idioms iyo sidee loo isticmaalaa?', icon: '💡' }
    ],
    'somali-writing': [
      { text: '✍️ Waa maxay naxwaha iyo higaada rasmiga ah ee af Soomaaliga?', icon: '📖' },
      { text: '🎤 Sida maqaal ama khudbad wacan loo qoraa si fudud?', icon: '📝' },
      { text: '💡 Waa maxay suugaanta iyo maahmaahyada aasaaska u ah afkeena?', icon: '📜' }
    ],
    'public-speaking': [
      { text: '🎤 Sideen u yareeyaa cabsida masraxa si fudud? (ELI5)', icon: '🎤' },
      { text: '🗣️ Sida codka loo bedbeddelo si dadku kuu dhagaystaan?', icon: '🔊' },
      { text: '💡 Maxay tahay storytelling iyo sidee khudbad loogu daraa?', icon: '📖' }
    ],
    'financial-literacy': [
      { text: '📊 Sidee loo sameeyaa miisaaniyad bil kasta ah? (ELI5)', icon: '📅' },
      { text: '💰 Waa maxay compounding interest iyo sidee lacagtu u kuxataa?', icon: '📈' },
      { text: '🏦 Maxay tahay deynta wanaagsan iyo deynta xun?', icon: '💳' }
    ]
  }
  return questions[course?.id] || defaultQuestions
}

// Custom Somali AI Tutors mapping
const getTutorInfo = (course) => {
  const tutors = {
    'ai-40-youtube': { name: 'Maallin Aadan', avatar: '👨🏾‍🏫', role: 'AI & Automation Expert' },
    'ai-chatgpt': { name: 'Khadar Maxamed', avatar: '👨🏾‍💻', role: 'Generative AI Specialist' },
    'social-automation': { name: 'Nimco Jaamac', avatar: '👩🏾‍💻', role: 'Chatbot Developer' },
    'web-dev': { name: 'Eng. Cabdalla', avatar: '👨🏾‍💻', role: 'Full Stack Engineer' },
    'cybersecurity': { name: 'Saynab Cali', avatar: '👩🏾‍💻', role: 'SecOps Analyst' },
    'ms-word': { name: 'Muna Axmed', avatar: '👩🏾‍💼', role: 'Office Suite Instructor' },
    'powerpoint': { name: 'Guuleed Cali', avatar: '👨🏾‍🎨', role: 'Creative Director' },
    'digital-marketing': { name: 'Yasmin Maxamed', avatar: '👩🏾‍💻', role: 'Growth Marketer' },
    'facebook-marketing': { name: 'Sakariye Cabdi', avatar: '👨🏾‍💼', role: 'Ads Strategist' },
    'tiktok-growth': { name: 'Hani Deeq', avatar: '👩🏾‍🎨', role: 'Viral Creator Specialist' },
    'youtube-channel': { name: 'Khadaar Siciid', avatar: '👨🏾‍🎥', role: 'Video Director' },
    'content-creation': { name: 'Amran Xasan', avatar: '👩🏾‍✍️', role: 'Copywriter' },
    'seo': { name: 'Maxamed Ciise', avatar: '👨🏾‍💻', role: 'SEO Engineer' },
    'email-marketing': { name: 'Idil Axmed', avatar: '👩🏾‍📧', role: 'Email strategist' },
    'affiliate-marketing': { name: 'Cali Daahir', avatar: '👨🏾‍💰', role: 'Affiliate marketer' },
    'canva-design': { name: 'Asma Maxamed', avatar: '👩🏾‍🎨', role: 'Graphic Designer' },
    'video-editing-capcut': { name: 'Khadar Bile', avatar: '👨🏾‍🎬', role: 'Video Editor' },
    'freelancing': { name: 'Khadra Yusuf', avatar: '👩🏾‍💻', role: 'Top Rated Freelancer' },
    'ecommerce': { name: 'Eng. Sharmaarke', avatar: '👨🏾‍🛒', role: 'Shopify Expert' },
    'entrepreneurship': { name: 'Abdiweli Barre', avatar: '👨🏾‍💼', role: 'Business Consultant' },
    'customer-service': { name: 'Fardowsa Cilmi', avatar: '👩🏾‍📞', role: 'Support Manager' },
    'sales-skills': { name: 'Mustafe Cabdi', avatar: '👨🏾‍💼', role: 'Sales Executive' },
    'cv-interview': { name: 'Caasho Xasan', avatar: '👩🏾‍💼', role: 'HR Specialist' },
    'english-language': { name: 'Teacher Bashir', avatar: '👨🏾‍🏫', role: 'ESL Instructor' },
    'somali-writing': { name: 'Abwaan Xuseen', avatar: '👨🏾‍alam', role: 'Somali Language Scholar' },
    'public-speaking': { name: 'Sahra Cali', avatar: '👩🏾‍🏫', role: 'Keynote Speaker' },
    'financial-literacy': { name: 'Cabdi Maxamuud', avatar: '👨🏾‍📊', role: 'Financial Adviser' }
  }
  return tutors[course?.id] || { name: 'Macalin AI', avatar: '👨🏾‍🏫', role: '7DataWin Instructor' }
}

const quizQuestions = [
  {
    q: "Su'aasha 1: Maxay tahay talaabada ugu horeysa ee aad qaadayso marka aad koorso bilaabayso?",
    options: [
      { text: "A) Inaad si degdeg ah u shaqayso adigoon baran aasaaska", correct: false },
      { text: "B) Inaad qorshe yeelato, fahamto aasaaska, oo ku celceliso", correct: true },
      { text: "C) Inaad dadka kale nuqul ka qaadato", correct: false }
    ],
    explain: "Jawaabta saxda ah waa B. Qorshe iyo ku celcelin maalinle ah ayaa keena guul."
  },
  {
    q: "Su'aasha 2: Sidee ugu habboon oo aad xirfadahaaga u suuq-gayn kartaa oo macaamiil ku heli kartaa?",
    options: [
      { text: "A) Inaad meel walba ku dhajiso xayeysiis aan la bar-tilmaameedsan", correct: false },
      { text: "B) Inaad dhisto portfolio xooggan oo muujinaya shaqooyinkii aad soo qabatay", correct: true },
      { text: "C) Inaad iska sugto macaamiisha iyagoo aan waxba kaa aqoon", correct: false }
    ],
    explain: "Jawaabta saxda ah waa B. Portfolio waa habka ugu kalsoonida badan ee aad macaamiil ku heli karto."
  },
  {
    q: "Su'aasha 3: Maxaa go'aamiya guushaada muddada dheer ee barashada AI ama Programming-ka?",
    options: [
      { text: "A) Barashada joogtada ah (continuous learning) iyo la qabsiga isbeddelada cusub", correct: true },
      { text: "B) Inaad hal shay oo kaliya ku ekaato weligaa adigoon cusboonaysiineyn aqoonta", correct: false },
      { text: "C) Inaad shaqada iska joojiso markay dhib badato", correct: false }
    ],
    explain: "Jawaabta saxda ah waa A. Teknolojiyadu aad ayay u isbeddeshaa, barashada joogtada ahna waa furaha guusha."
  }
]

export default function Courses() {
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedCategory, setExpandedCategory] = useState('ai-tech') // Default to AI & Tech expanded

  // AI Tutor states
  const [activeTutorCourse, setActiveTutorCourse] = useState(null)
  const [tutorMode, setTutorMode] = useState('chat') // chat, quiz, solve, research
  const [messages, setMessages] = useState([])
  const [chatInput, setChatInput] = useState('')
  
  // Set default Gemini API Key from environment variable
  const defaultApiKey = import.meta.env.VITE_GEMINI_API_KEY || ''
  const [apiKey, setApiKey] = useState(localStorage.getItem('gemini_api_key') || defaultApiKey)
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [selectedLesson, setSelectedLesson] = useState(null)

  const getEmbedUrl = (link) => {
    if (!link || link === '#') return null
    try {
      if (link.includes('youtube.com/watch')) {
        const urlParams = new URLSearchParams(link.split('?')[1])
        const videoId = urlParams.get('v')
        return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=0` : null
      }
      if (link.includes('youtu.be/')) {
        const videoId = link.split('youtu.be/')[1]?.split('?')[0]
        return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=0` : null
      }
      if (link.includes('loom.com/share/')) {
        const videoId = link.split('loom.com/share/')[1]?.split('?')[0]
        return videoId ? `https://www.loom.com/embed/${videoId}?hide_owner=true&hide_share=true` : null
      }
    } catch (e) {
      console.error(e)
    }
    return null
  }

  // Auto save default key in localStorage if not set
  useEffect(() => {
    if (!localStorage.getItem('gemini_api_key')) {
      localStorage.setItem('gemini_api_key', defaultApiKey)
    }
  }, [])

  // Quiz active step
  const [quizStep, setQuizStep] = useState(0) // 0: initial screen, 1, 2, 3: active questions, 4: complete
  const [quizScore, setQuizScore] = useState(0)

  const messagesEndRef = useRef(null)

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  // Filter courses based on search
  const filteredCategories = categories.map(cat => {
    const matchedCourses = cat.courses.filter(course => {
      const query = searchQuery.toLowerCase()
      return (
        course.title.toLowerCase().includes(query) ||
        course.subtitle.toLowerCase().includes(query) ||
        course.summary.toLowerCase().includes(query) ||
        course.details.some(d => d.toLowerCase().includes(query))
      )
    })
    return { ...cat, courses: matchedCourses }
  }).filter(cat => cat.courses.length > 0)

  // Geolocation / Geodeeptutor startup trigger
  const handleOpenTutor = (course) => {
    setActiveTutorCourse(course)
    setTutorMode('lessons')
    setQuizStep(0)
    setQuizScore(0)

    const lessonsList = courseLessons[course.id] || []
    if (lessonsList.length > 0) {
      setSelectedLesson(lessonsList[0])
    } else {
      setSelectedLesson(null)
    }

    const tutor = getTutorInfo(course)
    setMessages([
      {
        id: 'welcome',
        sender: 'assistant',
        text: `Salaan sare sxb! Ku soo dhawaow koorsada **${course.title}**. Magacaygu waa **Support Bot**, waxaan ahay kaaliyaha rasmiga ah ee 7DataWin.\n\nWaxaan kuugu sharxi doonaa casharrada qaabka ugu fudud uguna cad ee suurtagal ah (ELI5 - Explain Like I'm 5) adoo isticmaalaya stickers iyo emojis xiiso leh! 🧸✨\n\nDooro qaybaha bidixda ku yaal ee **Imtihanka**, **Deep Solve**, ama **Research** si aad u bilowdo, ama ku dhufo mid ka mid ah su'aalaha hoose!`
      }
    ])
  }

  const handleCloseTutor = () => {
    setActiveTutorCourse(null)
    setMessages([])
  }

  const handleModeChange = (mode) => {
    setTutorMode(mode)
    setQuizStep(0)
    setQuizScore(0)
    
    if (mode === 'lessons') {
      setMessages([
        {
          id: 'mode-change',
          sender: 'assistant',
          text: `Hadda waxaan ku jirnaa **Casharrada (Syllabus Mode)** 📖. Guji link-ga cashar kasta si aad u daawato muuqaalka, ka dibna weydii kaaliyaha AI wixii faahfaahin ah!`
        }
      ])
    } else if (mode === 'chat') {
      setMessages([
        {
          id: 'mode-change',
          sender: 'assistant',
          text: `Hadda waxaan ku jirnaa **Wadahadal (Chat Mode)** 💬. I weydii su'aal kasta oo ku saabsan koorsada ama guji badhamada hoose!`
        }
      ])
    } else if (mode === 'quiz') {
      setMessages([
        {
          id: 'mode-change',
          sender: 'assistant',
          text: `Ku soo dhawaow **Imtihanka (Quiz Mode)** 📝. Waxaan kuu diyaariyay 3 su'aalood oo aad u fudud si aad u tijaabiso aqoontaada.\n\nGuji badhanka hoose si aad u bilowdo:`,
          isQuizStart: true
        }
      ])
    } else if (mode === 'solve') {
      setMessages([
        {
          id: 'mode-change',
          sender: 'assistant',
          text: `Ku soo dhawaow **Deep Solve (Xalinta)** 💡. Halkan waxaan kugu hagi doonaa xalinta dhibaato gaar ah oo koorsada la xiriirta talaabo-talaabo.\n\nGeli dhibaatada ama guji mid ka mid ah badhamada hoose si aan u xalino! 🧩`
        }
      ])
    } else if (mode === 'research') {
      setMessages([
        {
          id: 'mode-change',
          sender: 'assistant',
          text: `Ku soo dhawaow **Deep Research (Baaritaan)** 🔍. Qor mawduuc kasta ama guji badhamada hoose si aan kuu siiyo cilmi-baaris aad u fudud oo kooban! 📚`
        }
      ])
    }
  }

  const handleSaveApiKey = (key) => {
    localStorage.setItem('gemini_api_key', key)
    setApiKey(key)
    setIsSettingsOpen(false)
  }

  const getSystemPromptForMode = (mode, course, tutor) => {
    const base = `Magacaagu waa Support Bot. Waxaad tahay kaaliyaha rasmiga ah ee 7DataWin. Waxaad cashar siinaysaa arday Soomaaliyeed oo baranaya koorsada "${course.title}". Ku hadal af Soomaali aad u fudud, saaxiibtinimo leh, oo dadka soo jiita, adoo isticmaalaya emojis iyo stickers xiiso geliya ardayga. Waxaad wax ugu sharaxeysaa habka ugu fudud ee cunug 5 jir ah u fahmi karo (ELI5 - Explain Like I'm 5). Isticmaal tusaale fudud oo Soomaali ah oo la xiriira nolosha caadiga ah (sida: HTML waa lafaha guriga, CSS waa ranjiga ama midabka guriga, JavaScript waa awooda uu gurigu albaabada ku furto, Server-kuna waa bakhaar, API-guna waa adeegaha cuntada kuu keenaya). Ka fogow erayada adag ee farsamada ah.`;
    
    if (mode === 'chat') {
      return `${base}\n\nHadda waxaad ku jirtaa **Wadahadal (Chat Mode)**. Ka caawi ardayga wixii su'aalo ah adoo u sharaxanya si aad u fudud oo ELI5 ah.\n\n**XUSUUSIN MUHIIM AH:** Haddii ardaygu ku weydiiyo wax ku saabsan qiimaha, helista, ama iibsiga koorsooyinka (tusaale: \"waa imisa\", \"ma bilaash baa\", \"sidee ku helaa\", \"ma lacag baa\"), jawaabtaadu waa inay noqotaa mid gaaban oo cad: **Haa sxb! Koorsooyinkeena AI oo dhan waa bilaash macaamiisha naga iibsata data-da. Waxaad ka baran kartaa ChatGPT, Canva, Web Development iyo kuwo kale. Tag bogga Koorsooyinka si aad u bilowdo barashada hadda!** Ha ku darin faahfaahin dheeri ah ama sharaxaad. Tusaale: \"Haa sxb! Koorsooyinkeena AI oo dhan waa bilaash macaamiisha naga iibsata data-da 📱. Waxaad ka baran kartaa ChatGPT, Canva, Web Development iyo kuwo kale. Tag bogga Koorsooyinka si aad u bilowdo! 🚀\"`;
    }
    if (mode === 'quiz') {
      return `${base}\n\nHadda waxaad ku jirtaa **Imtihaan (Quiz Mode)**. U soo saar ardayga su'aalo imtihaan (Multiple Choice) oo ku saabsan koorsada. Markay su'aal ka jawaabaan, u sax adoo ugu sharaxaya si ELI5 ah sababta iyo jawaabta saxda ah.`;
    }
    if (mode === 'solve') {
      return `${base}\n\nHadda waxaad ku jirtaa **Deep Solve (Xalinta)**. Isticmaaluhu wuxuu ku weydiin doonaa dhibaato gaar ah ama layli (exercise) uu xalin la'yahay. Hagee talaabo-talaabo adigoo u kala jabinaya talaabooyin yaryar oo aad u fudud oo cunug 5 jir ah xalin karo. Ha siin jawaabta toos, laakiin u dhoweyso si uu isagu u xalliyo.`;
    }
    if (mode === 'research') {
      return `${base}\n\nHadda waxaad ku jirtaa **Deep Research (Baaritaan)**. Isticmaaluhu wuxuu kaa rabaa cilmi-baaris qoto dheer oo ku saabsan mawduuc gaar ah. Sii sharaxaad aad u fudud oo ELI5 ah oo leh qodobo gaagaaban oo xiiso leh.`;
    }
    return base;
  }

  const callGeminiAPI = async (keyInput, systemPrompt, userMessage, historyList = []) => {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${keyInput}`
    
    const contents = historyList
      .filter(m => m.id !== 'welcome' && m.id !== 'mode-change')
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
        maxOutputTokens: 800
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
      const err = await response.json()
      throw new Error(err.error?.message || 'Cilad ayaa dhacday wicitaanka Gemini API.')
    }

    const data = await response.json()
    return data.candidates?.[0]?.content?.parts?.[0]?.text || 'Jawaab kama helin AI-ga.'
  }

  const getSimulatedReply = (mode, userMsg, course) => {
    const tutor = getTutorInfo(course)
    const lowerMsg = userMsg.toLowerCase()
    const isPriceQuestion = lowerMsg.includes('qiimo') || lowerMsg.includes('lacag') || lowerMsg.includes('imisa') || lowerMsg.includes('price') || lowerMsg.includes('bilaash') || lowerMsg.includes('iibso') || lowerMsg.includes('helo') || lowerMsg.includes('helaa') || lowerMsg.includes('furmayaan') || lowerMsg.includes('koorso') || lowerMsg.includes('course')
    
    if (mode === 'chat') {
      if (isPriceQuestion) {
        return `Haa sxb! Koorsooyinkeena AI oo dhan waa **bilaash** macaamiisha naga iibsata data-da 📱.\n\nWaxaad ka baran kartaa ChatGPT, Canva, Web Development iyo kuwo kale. Tag bogga **Koorsooyinka** si aad u bilowdo barashada hadda! 🚀`
      }
      return `Aad u fiican sxb! Mawduuca aad weydiisay ee ah *"${userMsg}"* aan kuugu sharaxo si aad u fudud (ELI5) 👶:\n\nKa soo qaad in mawduucan uu yahay sida **ciyaar carruureed** 🧸. Marka hore waxaad dhistaa aasaaska adigoo isticmaalaya block-yo yaryar. Markay wada istaagaan, waxaad helaysaa natiijo dhammaystiran! \n\n*Si aan wadahadal dhab ah u bilowno oo aan kuugu sharaxo su'aal kasta oo gaar ah, fadlan ku xir Gemini API Key adigoo isticmaalaya ⚙️ Settings.*`
    } else if (mode === 'solve') {
      return `Halkan waa Deep Solve tusaale aad u fudud (ELI5) ee dhibaatada *"${userMsg}"* 🧩:\n\n1. **Tallaabada 1aad (Lafaha):** U qaado dhibaatada sida sawir la farshaxaneynayo. Marka hore sawir khadka guud.\n2. **Tallaabada 2aad (Ranjiga):** Ku dar midabada mid mid (tallaabo-tallaabo).\n3. **Tallaabada 3aad (Guusha):** Hadda sawirkaagii waa diyaar! \n\n*Ku xir Gemini API Key si aan u xallino dhibaatooyinkaaga dhabta ah tallaabo kasta.*`
    } else if (mode === 'research') {
      return `Cilmi-baaris aad u fudud (ELI5) oo ku saabsan *"${userMsg}"* 🔎:\n\n- **Waa maxay?** Waa nidaam u shaqeeya sida marka aad aabbahaa u dirto dukaan si uu kuugu soo iabiyo shukulaato 🍫. Waxaad u baahan tehay inaad u qorto liis cad si uu kuugu soo saxo.\n- **Maxay u fiican tahay?** Waxay kaa caawineysaa inaad waqti badan badbaadiso oo aadan khasaarin dadaalkaaga.\n\n*Geli Gemini API Key si aad u hesho cilmi-baaris dhammaystiran oo dynamic ah.*`
    }
    return 'Jawaab demo ah.'
  }

  const handleSendMessage = async (e) => {
    e.preventDefault()
    if (!chatInput.trim() || isGenerating) return
    
    const userMsg = chatInput.trim()
    setChatInput('')
    
    if (tutorMode === 'lessons') {
      setTutorMode('chat')
    }
    handleSendQuestionDirectly(userMsg)
  }

  // Common direct question sender when clicking quick menu buttons
  const handleSendQuestionDirectly = async (questionText) => {
    if (isGenerating) return
    const userMsg = questionText.trim()
    
    let currentMode = tutorMode
    if (currentMode === 'lessons') {
      setTutorMode('chat')
      currentMode = 'chat'
    }
    
    const newMsgId = Date.now().toString()
    const updatedMessages = [...messages, { id: newMsgId, sender: 'user', text: userMsg }]
    setMessages(updatedMessages)
    setIsGenerating(true)

    try {
      if (apiKey) {
        const tutor = getTutorInfo(activeTutorCourse)
        const systemPrompt = getSystemPromptForMode(currentMode, activeTutorCourse, tutor)
        const reply = await callGeminiAPI(apiKey, systemPrompt, userMsg, messages)
        setMessages(prev => [...prev, { id: Date.now().toString(), sender: 'assistant', text: reply }])
      } else {
        await new Promise(resolve => setTimeout(resolve, 1200))
        const reply = getSimulatedReply(currentMode, userMsg, activeTutorCourse)
        setMessages(prev => [...prev, { id: Date.now().toString(), sender: 'assistant', text: reply }])
      }
    } catch (err) {
      setMessages(prev => [...prev, { id: Date.now().toString(), sender: 'assistant', text: `❌ Cilad ayaa dhacday: ${err.message}. Fadlan hubi API Key-gaaga.` }])
    } finally {
      setIsGenerating(false)
    }
  }

  // Quiz execution triggers
  const handleStartQuiz = () => {
    setQuizStep(1)
    setQuizScore(0)
    const q1 = quizQuestions[0]
    setMessages(prev => [
      ...prev.filter(m => !m.isQuizStart),
      {
        id: 'q1',
        sender: 'assistant',
        text: `**${q1.q}**`,
        isQuizQuestion: true,
        options: q1.options,
        explain: q1.explain
      }
    ])
  }

  const handleAnswerQuiz = (option, questionIndex) => {
    const q = quizQuestions[questionIndex]
    const wasCorrect = option.correct
    const nextScore = wasCorrect ? quizScore + 1 : quizScore
    if (wasCorrect) setQuizScore(nextScore)

    // Append reply feedback to user message
    setMessages(prev => [
      ...prev,
      { id: `user-ans-${questionIndex}`, sender: 'user', text: `Waxaan doortay: ${option.text}` },
      {
        id: `feedback-${questionIndex}`,
        sender: 'assistant',
        text: wasCorrect 
          ? `✅ **Sax!** ${q.explain}` 
          : `❌ **Khalad!** ${q.explain}`
      }
    ])

    const nextIndex = questionIndex + 1
    setIsGenerating(true)

    setTimeout(() => {
      setIsGenerating(false)
      if (nextIndex < quizQuestions.length) {
        setQuizStep(nextIndex + 1)
        const nextQ = quizQuestions[nextIndex]
        setMessages(prev => [
          ...prev,
          {
            id: `q-${nextIndex}`,
            sender: 'assistant',
            text: `**${nextQ.q}**`,
            isQuizQuestion: true,
            options: nextQ.options,
            explain: nextQ.explain
          }
        ])
      } else {
        setQuizStep(4) // Complete
        setMessages(prev => [
          ...prev,
          {
            id: 'quiz-complete',
            sender: 'assistant',
            text: `🏆 **Imtihankii wuu dhamaaday sxb!**\n\nNatiijadaadu waa **${nextScore}/${quizQuestions.length}** dhibcood.\n\n*Hambalyo! Guji 'Wadahadal' ama 'Deep Solve' si aad u sii wadato barashada.*`
          }
        ])
      }
    }, 1500)
  }

  return (
    <div className="w-full bg-gray-950 pb-16 min-h-screen relative">
      {/* ============ HERO BANNER ============ */}
      <div className="relative overflow-hidden bg-gray-950 py-16 md:py-24 border-b border-gray-800/60">
        {/* Subtle blur decoration */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute top-20 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-6 text-emerald-400 text-xs font-bold uppercase tracking-widest">
            🎓 Akaadeemiyada Koorsooyinka 7DataWin
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Ku baro <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Bilaash</span> Xirfadihii Ugu Dambeeyay!
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto leading-relaxed mb-8">
            Macaamiisha naga iibsata xirmooyinka internet-ka (Data) waxay helayaan koorsooyin dhammaystiran, 
            buugaag IT ah, iyo casharro maalinle ah oo kor loogu qaadayo aqoontaada AI, ChatGPT iyo Ganacsiga.
          </p>

          {/* Search Input */}
          <div className="max-w-md mx-auto relative z-20">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Raadi koorsada aad rabto... (tusaale: TikTok, ChatGPT, English)"
              className="block w-full pl-11 pr-4 py-3.5 border border-gray-800 rounded-2xl bg-gray-900/80 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all text-sm shadow-xl shadow-black/20"
            />
          </div>
        </div>
      </div>

      {/* ============ MAIN CONTENT AREA ============ */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        {searchQuery ? (
          /* Search Results Display */
          <div>
            <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span>Natiijada Raadinta:</span>
              <span className="text-emerald-400 font-extrabold">"{searchQuery}"</span>
              <span className="text-xs bg-gray-800 text-gray-400 px-2.5 py-1 rounded-full font-medium">
                {filteredCategories.reduce((sum, c) => sum + c.courses.length, 0)} koorsooyin
              </span>
            </h2>

            {filteredCategories.length === 0 ? (
              <div className="text-center py-16 bg-gray-900/20 border border-gray-800/80 rounded-3xl">
                <p className="text-gray-500 text-sm">Wax koorso ah oo waafaqsan raadintaada lama helin.</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-4 text-emerald-400 hover:text-emerald-300 font-semibold text-xs transition-colors"
                >
                  Clear search query
                </button>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2">
                {filteredCategories.map(cat => 
                  cat.courses.map(course => (
                    <CourseCard 
                      key={course.id} 
                      course={course} 
                      categoryColor={cat.color}
                      categoryName={cat.name}
                      onStartTutor={handleOpenTutor} 
                    />
                  ))
                )}
              </div>
            )}
          </div>
        ) : (
          /* Category Accordions (Level 1) */
          <div className="space-y-5">
            {categories.map((cat) => {
              const CatIcon = cat.icon
              const isCatExpanded = expandedCategory === cat.id
              
              // Color styles mapping
              const colorClasses = {
                emerald: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20 hover:border-emerald-500/40',
                sky: 'text-sky-400 bg-sky-500/10 border-sky-500/20 hover:border-sky-500/40',
                purple: 'text-purple-400 bg-purple-500/10 border-purple-500/20 hover:border-purple-500/40',
                amber: 'text-amber-400 bg-amber-500/10 border-amber-500/20 hover:border-amber-500/40',
                rose: 'text-rose-400 bg-rose-500/10 border-rose-500/20 hover:border-rose-500/40'
              }[cat.color]

              const borderGlow = isCatExpanded 
                ? {
                    emerald: 'border-emerald-500/40 shadow-emerald-500/5',
                    sky: 'border-sky-500/40 shadow-sky-500/5',
                    purple: 'border-purple-500/40 shadow-purple-500/5',
                    amber: 'border-amber-500/40 shadow-amber-500/5',
                    rose: 'border-rose-500/40 shadow-rose-500/5'
                  }[cat.color]
                : 'border-gray-800/80 hover:border-gray-700'

              return (
                <div 
                  key={cat.id} 
                  className={`rounded-3xl border transition-all duration-300 bg-gray-900/30 overflow-hidden ${
                    isCatExpanded 
                      ? `bg-gray-900/50 shadow-xl ${borderGlow}` 
                      : 'border-gray-800/80 hover:border-gray-700'
                  }`}
                >
                  {/* Category Header Button */}
                  <button
                    onClick={() => setExpandedCategory(isCatExpanded ? '' : cat.id)}
                    className="w-full flex items-center justify-between p-5 md:p-6 hover:bg-gray-800/20 transition-colors text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`rounded-2xl p-3.5 transition-transform ${colorClasses}`}>
                        <CatIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <h2 className="text-base md:text-lg font-bold text-white flex items-center gap-2">
                          <span>{cat.name}</span>
                          <span className="text-[10px] md:text-xs font-semibold px-2 py-0.5 rounded-full bg-white/5 text-gray-400">
                            {cat.courses.length} koorsooyin
                          </span>
                        </h2>
                        <p className="text-gray-500 text-xs md:text-sm mt-1">{cat.description}</p>
                      </div>
                    </div>
                    <div className={`text-gray-400 transition-transform duration-300 ${isCatExpanded ? 'rotate-180 text-emerald-400' : ''}`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  {/* Category Courses Grid (Accordion Body) */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      isCatExpanded ? 'max-h-[3500px] opacity-100 border-t border-gray-800/60' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-5 md:p-6 bg-gray-950/35">
                      <div className="grid gap-5 md:grid-cols-2">
                        {cat.courses.map((course) => (
                          <CourseCard 
                            key={course.id} 
                            course={course} 
                            categoryColor={cat.color}
                            onStartTutor={handleOpenTutor}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* ============ FOOTER LOBBY / DATA PROMO ============ */}
        <div className="mt-12 rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-gray-900/80 p-6 md:p-8 text-center shadow-xl shadow-emerald-500/5">
          <h2 className="text-lg md:text-xl font-bold text-white mb-2">🚀 Diyaar ma u tahay inaad wax barato?</h2>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto mb-6 leading-relaxed">
            Haddii aad data naga iibsatid, waxaad heli doontaa koorsooyin bilaash ah inta adeeggaaga la isticmaalayo.
          </p>
          <Link
            to="/buy-data"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 hover:scale-105 hover:-translate-y-0.5 transition-all"
          >
            Iibso Data oo hel Koorso Bilaash ah <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* ============ AI TUTOR WORKSPACE OVERLAY (MODAL) ============ */}
      {activeTutorCourse && (
        <div className="fixed inset-0 bg-gray-950/98 z-50 flex flex-col md:flex-row overflow-hidden animate-fadeIn">
          {/* Left Panel: Tutor Profiles, Modes, Settings */}
          <div className="w-full md:w-80 bg-gray-900 border-b md:border-b-0 md:border-r border-gray-800 flex flex-col justify-between shrink-0 p-5 z-10 shadow-2xl">
            <div className="space-y-6">
              {/* Header Close */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-emerald-400">7DataWin AI Academy</span>
                <button 
                  onClick={handleCloseTutor}
                  className="p-2 rounded-full bg-gray-800/80 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Tutor Details Card */}
              <div className="bg-gray-950/50 border border-gray-800 rounded-2xl p-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-3xl shadow-inner border border-emerald-500/10">
                  {getTutorInfo(activeTutorCourse).avatar}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">{getTutorInfo(activeTutorCourse).name}</h4>
                  <p className="text-gray-500 text-[10px] mt-0.5">{getTutorInfo(activeTutorCourse).role}</p>
                  <span className="inline-flex items-center gap-1 text-[9px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded-full mt-1.5 font-bold">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" /> Live Tutor
                  </span>
                </div>
              </div>

              {/* Modes Switcher */}
              <div className="space-y-2">
                <p className="text-[9px] uppercase tracking-wider text-gray-500 font-bold mb-2">DeepTutor Learning Modes:</p>
                {[
                  { id: 'lessons', label: '📖 Casharrada (Syllabus)', desc: 'Liiska casharada & videos' },
                  { id: 'chat', label: '💬 Wadahadal (Chat)', desc: 'ELI5 sharaxaad wacan' },
                  { id: 'quiz', label: '📝 Imtihanka (Quiz)', desc: 'Isu tijaabi su’aalo' },
                  { id: 'solve', label: '💡 Deep Solve', desc: 'Hage talaabo-talaabo ah' },
                  { id: 'research', label: '🔍 Deep Research', desc: 'Cilmi-baaris aad u fudud' }
                ].map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => handleModeChange(mode.id)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all ${
                      tutorMode === mode.id
                        ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400 font-bold shadow-md shadow-emerald-500/5'
                        : 'bg-gray-950/20 border-transparent text-gray-400 hover:bg-gray-800/40 hover:text-white'
                    }`}
                  >
                    <div className="text-xs">{mode.label}</div>
                    <div className="text-[9px] text-gray-500 font-medium mt-0.5">{mode.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom API Key config */}
            <div className="pt-4 border-t border-gray-800/60">
              {isSettingsOpen ? (
                <div className="bg-gray-950 border border-gray-800 rounded-2xl p-4 animate-fadeInUp">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-white flex items-center gap-1">
                      <Settings className="w-3.5 h-3.5 text-emerald-400" /> API Settings
                    </span>
                    <button onClick={() => setIsSettingsOpen(false)} className="text-gray-500 hover:text-white">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <input
                    type="password"
                    defaultValue={apiKey}
                    placeholder="Geli Gemini API Key..."
                    id="api-key-input"
                    className="w-full bg-gray-900 border border-gray-800 rounded-xl px-3 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500 text-xs mb-3 font-mono"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        const val = document.getElementById('api-key-input')?.value || ''
                        handleSaveApiKey(val)
                      }}
                      className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold py-2 rounded-lg transition"
                    >
                      Save Key
                    </button>
                    {apiKey && (
                      <button
                        onClick={() => {
                          localStorage.removeItem('gemini_api_key')
                          setApiKey('')
                          setIsSettingsOpen(false)
                        }}
                        className="bg-red-500/20 hover:bg-red-500/30 text-red-400 text-xs px-2.5 rounded-lg transition"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setIsSettingsOpen(true)}
                  className="w-full flex items-center justify-between p-3.5 bg-gray-950/40 hover:bg-gray-850 border border-gray-800 rounded-xl text-gray-400 hover:text-white transition-colors"
                >
                  <span className="text-xs font-semibold flex items-center gap-2">
                    <Settings className="w-4 h-4 text-emerald-400" />
                    {apiKey ? '⚙️ Gemini Connected' : '⚙️ Connect Gemini Key'}
                  </span>
                  <span className={`w-2 h-2 rounded-full ${apiKey ? 'bg-emerald-400' : 'bg-yellow-400 animate-pulse'}`} />
                </button>
              )}
              
              {/* Optional external course link */}
              {activeTutorCourse.link !== '#' && (
                <a
                  href={activeTutorCourse.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full mt-3 flex items-center justify-center gap-1.5 p-3.5 bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs rounded-xl shadow-lg shadow-emerald-500/10 transition-all"
                >
                  <span>🔗 Link-ga Koorsooyinka Rasmiga ah</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Panel: Chat Screen */}
          <div className="flex-1 flex flex-col justify-between overflow-hidden bg-gray-950 relative">
            {/* Top Info Bar */}
            <div className="p-4 bg-gray-900 border-b border-gray-850 flex items-center justify-between shrink-0">
              <div>
                <h3 className="text-white font-bold text-sm flex items-center gap-2">
                  <span>Macalinka AI:</span>
                  <span className="text-emerald-400">{activeTutorCourse.title}</span>
                </h3>
                <p className="text-[10px] text-gray-500 mt-0.5">
                  ELI5 teaching style in Somali 👶🧸 | Gemini 2.5 Flash
                </p>
              </div>
              <div className="text-xs bg-gray-950 border border-gray-800 px-3 py-1.5 rounded-xl text-gray-400 font-bold flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-emerald-400" />
                <span className="capitalize">{tutorMode} mode</span>
              </div>
            </div>

            {/* Conversation Window / Lessons Window */}
            {tutorMode === 'lessons' ? (
              <div className="flex-1 overflow-y-auto p-5 md:p-6 space-y-6 bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900 animate-fadeIn">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 border-b border-gray-850 pb-4">
                  <div>
                    <h2 className="text-lg font-black text-white flex items-center gap-2">
                      📖 Casharrada Koorsada (Syllabus & Videos)
                    </h2>
                    <p className="text-xs text-gray-500 mt-1">
                      Dooro cashar kasta oo hoos ku yaal si uu fiidiyowga toos ugu shaqeeyo halkan!
                    </p>
                  </div>
                  <span className="text-[10px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full font-bold">
                    {(courseLessons[activeTutorCourse.id] || []).length || 5} Casharood
                  </span>
                </div>

                {/* Embedded Video Player */}
                {selectedLesson && getEmbedUrl(selectedLesson.link) && (
                  <div className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden shadow-2xl animate-scaleUp">
                    {/* Responsive video container */}
                    <div className="relative w-full overflow-hidden pb-[56.25%]">
                      <iframe
                        src={getEmbedUrl(selectedLesson.link)}
                        frameBorder="0"
                        webkitallowfullscreen="true"
                        mozallowfullscreen="true"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full"
                        title={selectedLesson.title}
                      />
                    </div>
                    {/* Active lesson description */}
                    <div className="p-4 bg-gray-900/90 border-t border-gray-850 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] bg-emerald-500/10 text-emerald-400 font-extrabold px-2 py-0.5 rounded-full border border-emerald-500/10 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
                          Hada socda
                        </span>
                        <a
                          href={selectedLesson.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[10px] text-gray-400 hover:text-emerald-400 font-bold transition flex items-center gap-1"
                        >
                          Ku daawo tab cusub ↗
                        </a>
                      </div>
                      <h4 className="text-white font-extrabold text-sm pt-1">{selectedLesson.title}</h4>
                      <p className="text-gray-400 text-xs leading-relaxed">{selectedLesson.desc}</p>
                    </div>
                  </div>
                )}

                {/* WhatsApp Group Support Promotion banner */}
                <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-2xl p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                  <div className="space-y-1">
                    <h4 className="text-white text-xs font-bold">💬 Ku biir WhatsApp Group-ka Barashada</h4>
                    <p className="text-[10px] text-gray-400">La sheekeyso ardayda kale ee koorsadan baranaysa.</p>
                  </div>
                  <a 
                    href="https://chat.whatsapp.com/KzkcjwraeYhCsUXaexgNyM"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-4 py-2 rounded-xl text-[10px] transition shrink-0"
                  >
                    Ku Biir Group 👥
                  </a>
                </div>

                {/* Grid List of Lessons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(courseLessons[activeTutorCourse.id] || [
                    { title: 'Cashar 1: Hordhaca Aasaaska Koorsada', link: '#', desc: 'Fahamka guud ee koorsada iyo waxyaabaha laga faa’iidayo.' },
                    { title: 'Cashar 2: Qorshaha Casharrada & Hab-dhismeedka', link: '#', desc: 'Sida loo raacayo fasalka iyo agabka muhiimka ah.' },
                    { title: 'Cashar 3: Layliyada iyo Mashaariicda Koowaad', link: '#', desc: 'Praktika toos ah iyo tijaabooyin kooban.' },
                    { title: 'Cashar 4: Imtixaanka iyo Qiimeynta heerkaaga', link: '#', desc: 'Hubi waxaad baratay adoo ka shaqaynaya su’aalo.' },
                    { title: 'Cashar 5: Tallaabada Xigta iyo Community-ga', link: '#', desc: 'Habka suuqgeynta xirfadaada cusub iyo shaqo abuur.' }
                  ]).map((lesson, idx) => {
                    const isCurrent = selectedLesson && selectedLesson.title === lesson.title
                    return (
                      <button
                        key={idx}
                        onClick={() => setSelectedLesson(lesson)}
                        className={`text-left bg-gray-900/40 border rounded-2xl p-4 space-y-2 transition duration-200 flex flex-col justify-between hover:border-gray-800 ${
                          isCurrent ? 'border-emerald-500/60 shadow-lg shadow-emerald-500/5' : 'border-gray-850'
                        }`}
                      >
                        <div className="space-y-1 w-full">
                          <div className="flex justify-between items-center w-full">
                            <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-400">Lesson {idx + 1}</span>
                            {isCurrent && (
                              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
                            )}
                          </div>
                          <span className="block text-white font-extrabold text-sm leading-snug">
                            {lesson.title}
                          </span>
                          <p className="text-gray-400 text-xs leading-relaxed pt-1">{lesson.desc}</p>
                        </div>
                        {lesson.link !== '#' && (
                          <div className="pt-3">
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400 hover:underline">
                              Daawo Muuqaalka ▶
                            </span>
                          </div>
                        )}
                      </button>
                    )
                  })}
                </div>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900">
                {messages.map((msg) => (
                  <div 
                    key={msg.id} 
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fadeInUp`}
                  >
                    {/* Chat bubbles */}
                    <div className={`max-w-[85%] rounded-2xl p-4 text-xs md:text-sm leading-relaxed shadow-lg ${
                      msg.sender === 'user'
                        ? 'bg-emerald-500 text-white rounded-tr-none'
                        : 'bg-gray-900/90 border border-gray-850 text-gray-300 rounded-tl-none'
                    }`}>
                      {/* Render text with basic markdown bold support */}
                      <div className="whitespace-pre-wrap">
                        {msg.text.split('**').map((chunk, index) => 
                          index % 2 === 1 ? <strong key={index} className="text-white font-black">{chunk}</strong> : chunk
                        )}
                      </div>

                      {/* Render custom button elements for simulated quiz questions */}
                      {msg.isQuizStart && (
                        <button
                          onClick={handleStartQuiz}
                          className="mt-4 flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-md"
                        >
                          <Play className="w-3.5 h-3.5" /> Bilow Imtihanka
                        </button>
                      )}

                      {msg.isQuizQuestion && quizStep <= quizQuestions.length && (
                        <div className="mt-4 space-y-2">
                          {msg.options.map((opt, oIndex) => (
                            <button
                              key={oIndex}
                              onClick={() => handleAnswerQuiz(opt, quizStep - 1)}
                              className="w-full text-left p-3 bg-gray-950 hover:bg-gray-800 border border-gray-800 hover:border-emerald-500 rounded-xl transition text-xs font-semibold text-gray-300"
                            >
                              {opt.text}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {isGenerating && (
                  <div className="flex justify-start">
                    <div className="bg-gray-900/90 border border-gray-850 rounded-2xl rounded-tl-none p-4 flex items-center gap-1 text-xs text-gray-500">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                      <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
            )}

            {/* Quick Questions Menu (Touch/Click Prompt Buttons with Emojis & Stickers) */}
            {tutorMode !== 'quiz' && (
              <div className="px-4 py-2 border-t border-gray-850 bg-gray-900/30 flex flex-col gap-1.5 shrink-0">
                <span className="text-[10px] text-gray-505 font-bold flex items-center gap-1">
                  💡 Su’aalaha inta badan la weydiiyo (Guji si degdeg ah):
                </span>
                <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto">
                  {getQuickQuestions(activeTutorCourse).map((q, index) => (
                    <button
                      key={index}
                      type="button"
                      disabled={isGenerating}
                      onClick={() => handleSendQuestionDirectly(q.text)}
                      className="text-[10px] md:text-xs font-semibold px-2.5 py-1.5 rounded-xl bg-gray-900 hover:bg-gray-800 border border-gray-800 text-gray-350 hover:text-emerald-400 hover:border-emerald-500/50 transition-all text-left flex items-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span>{q.icon}</span>
                      <span>{q.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom input area */}
            <form 
              onSubmit={handleSendMessage}
              className="p-4 border-t border-gray-850 bg-gray-900 shrink-0 flex gap-2 items-center"
            >
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder={
                  tutorMode === 'quiz' 
                    ? 'Habka imtihanka wuxuu ku shaqeeyaa badhamada sare...' 
                    : 'Qor fariintaada ama su’aashaada... (Soomaali)'
                }
                disabled={tutorMode === 'quiz' || isGenerating}
                className="flex-1 bg-gray-950 border border-gray-800 focus:border-emerald-500 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none text-xs md:text-sm disabled:cursor-not-allowed disabled:bg-gray-900 disabled:text-gray-700"
              />
              <button
                type="submit"
                disabled={tutorMode === 'quiz' || !chatInput.trim() || isGenerating}
                className="p-3 bg-emerald-500 hover:bg-emerald-400 text-white rounded-xl disabled:bg-gray-800 disabled:text-gray-600 disabled:cursor-not-allowed transition"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

function CourseCard({ course, categoryColor, categoryName, onStartTutor }) {
  const [detailsOpen, setDetailsOpen] = useState(false)

  // Determine badge colors based on category color
  const badgeColors = {
    emerald: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    sky: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
    purple: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    amber: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    rose: 'text-rose-400 bg-rose-500/10 border-rose-500/20'
  }[categoryColor || 'emerald']

  return (
    <div className="rounded-3xl border border-gray-800/80 bg-gray-900/50 p-5 shadow-lg hover:border-gray-700/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2 items-center">
            <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg border ${badgeColors}`}>
              {course.price}
            </span>
            {categoryName && (
              <span className="text-[10px] font-medium text-gray-500 bg-white/5 px-2.5 py-1 rounded-lg">
                {categoryName}
              </span>
            )}
          </div>
          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-xs">
            📚
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base md:text-lg font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
          {course.title}
        </h3>
        <p className="text-gray-400 text-xs font-semibold mb-3">{course.subtitle}</p>
        <p className="text-gray-505 text-xs leading-relaxed mb-4">{course.summary}</p>

        {/* Detailed Curriculum Accordion (Level 2) */}
        {detailsOpen && (
          <div className="mt-4 pt-4 border-t border-gray-850 space-y-2.5 animate-fadeInUp">
            <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-1.5">Mowduucyada lagu baranayo:</p>
            {course.details.map((detail, index) => (
              <div key={index} className="flex items-start gap-2.5 text-gray-300 text-xs leading-relaxed">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span>{detail}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-5 pt-3 border-t border-gray-850 flex items-center justify-between">
        {/* Expand Details Trigger */}
        <button
          onClick={() => setDetailsOpen(!detailsOpen)}
          className="flex items-center gap-1 text-[11px] font-bold text-gray-405 hover:text-white transition-colors"
        >
          <span>Syllabus-ka</span>
          {detailsOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

        {/* Learn/AI Tutor button */}
        <button
          onClick={() => onStartTutor(course)}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          <span>Ka baro hadda</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  )
}
