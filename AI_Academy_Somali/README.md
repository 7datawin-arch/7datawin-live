# 🎓 Somali AI Academy - Koorsooyinka & Knowledge Base

Ku soo dhawaaw **Somali AI Academy** - Kaydka rasmiga ah ee koorsooyinka AI iyo teknoolojiyadda ee af-Soomaaliga. Waxaa awooda siiya **DeepSeek v4** iyo **DeepTutor**.

## 📂 Qaab-dhismeedka

```
AI_Academy_Somali/
├── koorsooyinka/              # 30+ Koorso oo Soomaali ah
│   ├── ai_teknolojiyadda/     # AI, Web Dev, Cybersecurity, Office
│   ├── suuqgeynta/            # Digital Marketing, Social Media, SEO
│   ├── naqshadaynta/          # Design, Video Editing, UI/UX
│   ├── ganacsiga/             # Freelancing, E-commerce, Business
│   └── luuqadaha/             # English, Somali, Arabic, Public Speaking
├── knowledge_base/            # RAG Knowledge Base
│   ├── rag_docs/              # Dukumentiyada lagu shubayo RAG
│   └── prompts/               # System prompts & templates
├── .env.example               # DeepSeek v4 API config
└── README.md                  # Dukumentigan
```

## 🚀 Sida Loo Kiciyo

### 1. Deji API Key-ga DeepSeek

```bash
cp .env.example .env
# Edit .env → ku qor furahaaga:
# LLM_API_KEY=sk-your-deepseek-key
```

### 2. Kici DeepTutor Server-ka

```bash
cd ../DeepTutor
pip install -e ".[server]"
python -m deeptutor_cli.main serve --port 8001
```

### 3. Ku shub xogta Knowledge Base-ka

```bash
# Abuur KB cusub
deeptutor kb create somali-courses --doc ./knowledge_base/rag_docs/

# Hubi inuu shaqeynayo
deeptutor kb list
```

### 4. Tijaabi RAG

```bash
# Weydii su'aal KB-ga ku jirta
deeptutor run chat "Waa maxay Vibe Coding?" -t rag --kb somali-courses
```

## 📚 30+ Koorso (Dhammaan Bilaash)

| # | Koorsada | Qaybta |
|---|----------|--------|
| 1 | ChatGPT & Prompt Engineering | AI & Teknolojiyadda |
| 2 | Vibe Coding (AI Coding) | AI & Teknolojiyadda |
| 3 | Web Development (HTML/CSS/JS) | AI & Teknolojiyadda |
| 4 | Cybersecurity Basics | AI & Teknolojiyadda |
| 5 | Microsoft Word & PowerPoint | AI & Teknolojiyadda |
| 6 | Excel & Data Analysis | AI & Teknolojiyadda |
| 7 | Digital Marketing | Suuqgeynta |
| 8 | Facebook Ads & Marketing | Suuqgeynta |
| 9 | TikTok Content Creation | Suuqgeynta |
| 10 | SEO (Search Engine Optimization) | Suuqgeynta |
| 11 | Social Media Management | Suuqgeynta |
| 12 | Canva Design | Naqshadaynta |
| 13 | Video Editing (CapCut/Premier) | Naqshadaynta |
| 14 | Graphic Design Basics | Naqshadaynta |
| 15 | UI/UX Design | Naqshadaynta |
| 16 | Animation & Motion Graphics | Naqshadaynta |
| 17 | Freelancing (Upwork/Fiverr) | Ganacsiga |
| 18 | E-commerce (Shopify/Dukaan) | Ganacsiga |
| 19 | Sales & Customer Service | Ganacsiga |
| 20 | CV Writing & Interview Prep | Ganacsiga |
| 21 | Business Planning | Ganacsiga |
| 22 | English for Beginners | Luuqadaha |
| 23 | English Intermediate | Luuqadaha |
| 24 | English Advanced (Business) | Luuqadaha |
| 25 | Somali Professional Writing | Luuqadaha |
| 26 | Arabic Language | Luuqadaha |
| 27 | Public Speaking | Luuqadaha |
| 28 | Leadership Skills | Luuqadaha |
| 29 | Algebra & Calculus | Xisaab |
| 30 | Statistics & Data Science | Xisaab |

## 🧠 Knowledge Base (RAG)

Knowledge Base waa meesha aad ku kaydiso dukumentiyada, buugaagta, iyo xogta aad rabto in AI-ga uu ka jawaabo.

### Sida loo isticmaalo RAG:

```bash
# 1. Ku dar dukumenti
deeptutor kb create my-kb --doc buug.pdf

# 2. Ku dar folder dhan
deeptutor kb create my-kb --doc ./knowledge_base/rag_docs/

# 3. Weydii su'aal KB-ga ku saabsan
deeptutor run chat "su'aashaada" -t rag --kb my-kb

# 4. Liis garee KB-yada
deeptutor kb list

# 5. Tirtir KB
deeptutor kb delete my-kb
```

## 🔧 Technologies

- **AI Engine:** DeepTutor (Agent-Native)
- **LLM:** DeepSeek v4 (deepseek-chat)
- **RAG:** LlamaIndex + PyMuPDF
- **Backend:** Python 3.11+ / FastAPI
- **Frontend:** React + Vite + Tailwind (7datawin)

## 📞 Xiriir

- **DeepTutor:** https://github.com/HKUDS/DeepTutor
- **DeepSeek API:** https://platform.deepseek.com
- **7datawin:** https://github.com/magacaaga/7datawin-main

---

*Ujeedada: Cilmiga casriga ah uga dhig mid af-Soomaali ku hadla oo qof walba heli karo!*
